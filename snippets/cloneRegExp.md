### cloneRegExp

Clones a regular expression.

复制一个正则表达式。

Use `new RegExp()`, `RegExp.source` and `RegExp.flags` to clone the given regular expression.

使用`new RegExp()`, `RegExp.source`和`RegExp.flags`来复制给出的正则表达式。

```js
const cloneRegExp = regExp => new RegExp(regExp.source, regExp.flags);
```

```js
const regExp = /lorem ipsum/gi;
const regExp2 = cloneRegExp(regExp); // /lorem ipsum/gi
```
