### isEven

Returns `true` if the given number is even, `false` otherwise.

如果给出的数字是偶数则返回`true`，否则返回`false`。

Checks whether a number is odd or even using the modulo (`%`) operator.
Returns `true` if the number is even, `false` if the number is odd.

使用取余操作符(`%`)检查一个数字是奇数还是偶数。如果给出的数字是偶数则返回`true`，否则返回`false`。

```js
const isEven = num => num % 2 === 0;
```

```js
isEven(3); // false
```
