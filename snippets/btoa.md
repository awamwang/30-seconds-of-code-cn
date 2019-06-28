### btoa

Creates a base-64 encoded ASCII string from a String object in which each character in the string is treated as a byte of binary data.

从字符串对象中创建一个base-64编码ASCII字符串，其中字符串中每个字符都被当做一个比特的二进制数据。

Create a `Buffer` for the given string with binary encoding and use `Buffer.toString('base64')` to return the encoded string.

为给定的字符串创建一个二进制编码的`Buffer`，然后使用`Buffer.toString('base64')`来返回编码后的字符串。

```js
const btoa = str => Buffer.from(str, 'binary').toString('base64');
```

```js
btoa('foobar'); // 'Zm9vYmFy'
```
