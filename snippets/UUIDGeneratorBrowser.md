### UUIDGeneratorBrowser

Generates a UUID in a browser.

在浏览器环境中生成一个UUID。

Use `crypto` API to generate a UUID, compliant with [RFC4122](https://www.ietf.org/rfc/rfc4122.txt) version 4.

使用`crypto`来生成遵从[RFC4122](https://www.ietf.org/rfc/rfc4122.txt)第4版本的UUID。

```js
const UUIDGeneratorBrowser = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
  );
```

```js
UUIDGeneratorBrowser(); // '7982fcfe-5721-4632-bede-6000885be57d'
```
