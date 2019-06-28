### removeNonASCII

Removes non-printable ASCII characters.

删除非打印ASCII字符。

Use a regular expression to remove non-printable ASCII characters.

使用一个正则表达式来删除非打印ASCII字符。

```js
const removeNonASCII = str => str.replace(/[^\x20-\x7E]/g, '');
```

```js
removeNonASCII('äÄçÇéÉêlorem-ipsumöÖÐþúÚ'); // 'lorem-ipsum'
```
