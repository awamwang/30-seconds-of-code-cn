### stripHTMLTags

Removes HTML/XML tags from string.

删除字符串中的HTML/XML标签。

Use a regular expression to remove HTML/XML tags from a string.

使用正则表达式来删除一个字符串中的HTML/XML标签。

```js
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');
```

```js
stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'); // 'lorem ipsum'
```
