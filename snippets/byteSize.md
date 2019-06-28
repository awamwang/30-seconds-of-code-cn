### byteSize

Returns the length of a string in bytes.

返回字节维度的字符串的长度。

Convert a given string to a [`Blob` Object](https://developer.mozilla.org/en-US/docs/Web/API/Blob) and find its `size`.

把字符串转换为一个[`Blob` Object](https://developer.mozilla.org/en-US/docs/Web/API/Blob)，并找出它的`size`。

```js
const byteSize = str => new Blob([str]).size;
```

```js
byteSize('😀'); // 4
byteSize('Hello World'); // 11
```
