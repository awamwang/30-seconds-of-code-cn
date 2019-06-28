### join

Joins all elements of an array into a string and returns this string.
Uses a separator and an end separator.

把数组中的所有元素连结成一个字符串并返回。可以指定分隔符`separator`和结束符号`end`。

Use `Array.prototype.reduce()` to combine elements into a string.
Omit the second argument, `separator`, to use a default separator of `','`.
Omit the third argument, `end`, to use the same value as `separator` by default.

使用 `Array.prototype.reduce()`把元素列表结合成一个字符串。如果不传第二个参数`separator`，默认值为`','`；如果不传第三个参数`end`，默认值为`separator`的值。

```js
const join = (arr, separator = ',', end = separator) =>
  arr.reduce(
    (acc, val, i) =>
      i === arr.length - 2
        ? acc + val + end
        : i === arr.length - 1
          ? acc + val
          : acc + val + separator,
    ''
  );
```

```js
join(['pen', 'pineapple', 'apple', 'pen'], ',', '&'); // "pen,pineapple,apple&pen"
join(['pen', 'pineapple', 'apple', 'pen'], ','); // "pen,pineapple,apple,pen"
join(['pen', 'pineapple', 'apple', 'pen']); // "pen,pineapple,apple,pen"
```
