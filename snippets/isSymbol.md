### isSymbol

Checks if the given argument is a symbol.

检查给出的值是否是一个symbol类型。

Use `typeof` to check if a value is classified as a symbol primitive.

使用`typeof`来检查一个值是否被分类为一个原始的symbol类型。

```js
const isSymbol = val => typeof val === 'symbol';
```

```js
isSymbol(Symbol('x')); // true
```
