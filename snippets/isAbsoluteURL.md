### isAbsoluteURL

Returns `true` if the given string is an absolute URL, `false` otherwise.

如果给出的字符串是绝对路径的URL，则返回`true`，否则返回`false`。

Use a regular expression to test if the string is an absolute URL.

使用正则表达式来测试这个字符串是否为一个绝对路径的URL。

```js
const isAbsoluteURL = str => /^[a-z][a-z0-9+.-]*:/.test(str);
```

```js
isAbsoluteURL('https://google.com'); // true
isAbsoluteURL('ftp://www.myserver.net'); // true
isAbsoluteURL('/foo/bar'); // false
```
