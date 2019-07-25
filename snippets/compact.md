### compact

Removes falsy values from an array.

把数组中所有假值移除掉。

Use `Array.prototype.filter()` to filter out falsy values (`false`, `null`, `0`, `""`, `undefined`, and `NaN`).

使用`Array.prototype.filter()`来过滤掉假值(`false`, `null`, `0`, `""`, `undefined`, and `NaN`)。

```js
const compact = arr => arr.filter(Boolean); // 因为filter参数为必传，这里用Boolean作为过滤函数传入，即省事又合理
```

```js
compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); // [ 1, 2, 3, 'a', 's', 34 ]
```
