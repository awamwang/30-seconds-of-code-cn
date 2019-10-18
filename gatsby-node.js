const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const config = require('./config');

const { getTextualContent, getCodeBlocks, optimizeAllNodes } = require(`./src/docs/util`);

const requirables = [];

config.requirables.forEach(fileName => {
  requirables.push(require(`./snippet_data/${fileName}`));
});

const toKebabCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.sourceNodes = ({ actions, createNodeId, createContentDigest, getNodesByType }) => {
  const { createTypes, createNode } = actions;
  const typeDefs = `
    type Snippet implements Node {
      html: HtmlData
      tags: TagData
      title: String
      code: CodeData
      id: String
      slug: String
      path: String
      text: TextData
      archived: Boolean
    }

    type HtmlData @infer {
      full: String
      text: String
      fullText: String
      code: String
      example: String
    }

    type CodeData @infer {
      src: String
      example: String
    }

    type TextData @infer {
      full: String
      short: String
    }

    type TagData @infer {
      primary: String
      all: [String]
    }
  `;
  createTypes(typeDefs);

  const markdownNodes = getNodesByType('MarkdownRemark');

  const snippetNodes = requirables
    .reduce((acc, sArr) => {
      const archivedScope = sArr.meta.scope.indexOf('archive') !== -1;
      return ({
        ...acc,
        ...sArr.data.reduce((snippets, snippet) => {
          return ({
            ...snippets,
            [snippet.id]: { ...snippet, archived: archivedScope}
          });
        }, {})
      });
    }, {});

  Object.entries(snippetNodes).forEach(([id, sNode]) => {
    let mNode = markdownNodes.find(mN => mN.frontmatter.title === id);
    let nodeContent = {
      id,
      tags: {
        all: sNode.attributes.tags,
        primary: sNode.attributes.tags[0]
      },
      title: mNode.frontmatter.title,
      code: {
        src: sNode.attributes.codeBlocks.es6,
        example: sNode.attributes.codeBlocks.example
      },
      slug: mNode.fields.slug,
      path: mNode.fileAbsolutePath,
      text: {
        full: sNode.attributes.text,
        short: sNode.attributes.text.slice(0, sNode.attributes.text.indexOf('\n\n'))
      },
      archived: sNode.archived
    };
    createNode({
      id: createNodeId(`snippet-${sNode.meta.hash}`),
      parent: null,
      children: [],
      internal: {
        type: 'Snippet',
        content: JSON.stringify(nodeContent),
        contentDigest: createContentDigest(nodeContent)
      },
      ...nodeContent
    });
  });

};

exports.createResolvers = ({ createResolvers }) => createResolvers({
  Snippet: {
    html: {
      resolve: async (source, _, context, info) => {
        const resolver = info.schema.getType("MarkdownRemark").getFields()["html"].resolve;
        const node = await context.nodeModel.nodeStore.getNodesByType('MarkdownRemark').filter(v => v.frontmatter.title === source.title)[0];
        const args = {}; // arguments passed to the resolver
        const html = await resolver(node, args);
        return {
          full: `${html}`,
          text: `${getTextualContent(html, true)}`,
          fullText: `${getTextualContent(html, false)}`,
          code: `${optimizeAllNodes(getCodeBlocks(html).code)}`,
          example: `${optimizeAllNodes(getCodeBlocks(html).example)}`
        };
      }
    }
  }
});

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const snippetPage = path.resolve(`./src/docs/templates/SnippetPage.js`);
  const tagPage = path.resolve(`./src/docs/templates/TagPage.js`);

  return graphql(
    `
      {
        allSnippet(sort: {fields: id}) {
          edges {
            node {
              id
              slug
              tags {
                all
                primary
              }
              text {
                full
                short
              }
              title
              html {
                code
                example
                full
                text
                fullText
              }
              code {
                src
                example
              }
              archived
            }
          }
        }
      }
    `,
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Create individual snippet pages.
    const snippets = result.data.allSnippet.edges;

    snippets.forEach(snippet => {
      if (!snippet.node.archived) {
        createPage({
          path: `/snippet${snippet.node.slug}`,
          component: snippetPage,
          context: {
            snippet: snippet.node
          }
        });
      } else {
        createPage({
          path: `/archive${snippet.node.slug}`,
          component: snippetPage,
          context: {
            snippet: snippet.node
          }
        });
      }
    });

    // Create tag pages.
    const tags = [...new Set(
      snippets.map(snippet => (snippet.node.tags || {primary: null}).primary)
    )]
      .filter(Boolean)
      .sort((a, b) => a.localeCompare(b));
    
    tags.forEach(tag => {
      const tagPath = `/tag/${toKebabCase(tag)}/`;
      const taggedSnippets = snippets
        .filter(snippet => snippet.node.tags.primary === tag)
        .filter(snippet => !snippet.node.archived)
        .map(({node}) => ({
          title: node.title,
          html: node.html.text,
          tags: node.tags.all,
          id: node.slug.slice(1)
        }));
      createPage({
        path: tagPath,
        component: tagPage,
        context: {
          tag,
          snippets: taggedSnippets
        },
      });
    });

    const beginnerSnippets = snippets
      .filter(({ node }) => node.tags.all.includes('beginner'))
      .filter(snippet => !snippet.node.archived)
      .map(({ node }) => ({
        title: node.title,
        html: node.html.text,
        tags: node.tags.all,
        id: node.slug.slice(1)
      }));

    createPage({
      path: `/beginner`,
      component: tagPage,
      context: {
        tag: `beginner snippets`,
        snippets: beginnerSnippets
      },
    });

    return null;
  });
};
