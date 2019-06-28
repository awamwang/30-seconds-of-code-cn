### allEqual

Check if all elements in an array are equal.

判断是否数组中的所有元素都相等。

Use `Array.prototype.every()` to check if all the elements of the array are the same as the first one.
Elements in the array are compared using the strict comparison operator, which does not account for `NaN` self-inequality.

使用`Array.prototype.every()` 来判断是否数组的所有元素都等于数组的第一个元素。

```js
const allEqual = arr => arr.every(val => val === arr[0]);
```

```js
allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]); // true
```
