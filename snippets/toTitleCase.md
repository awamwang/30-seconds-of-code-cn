### toTitleCase

Converts a string to title case.

把字符串转换为标题形式（首字母大写，用空格做分隔）。

Break the string into words, using a regexp, and combine them capitalizing the first letter of each word and adding a whitespace between them.

使用正则表达式把字符串拆分为单词列表，并在大写化每个词的首字母和添加一个空格作为分隔符后合并它们。

```js
const toTitleCase = str =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.charAt(0).toUpperCase() + x.slice(1))
    .join(' ');
```

```js
toTitleCase('some_database_field_name'); // 'Some Database Field Name'
toTitleCase('Some label that needs to be title-cased'); // 'Some Label That Needs To Be Title Cased'
toTitleCase('some-package-name'); // 'Some Package Name'
toTitleCase('some-mixed_string with spaces_underscores-and-hyphens'); // 'Some Mixed String With Spaces Underscores And Hyphens'
```
