### dropWhile

Removes elements in an array until the passed function returns `true`. Returns the remaining elements in the array.

从数组中删掉给出的函数作用后返回`false`的元素（从头部开始），直到遇到第一个返回`true`的。返回数组的剩余元素。

Loop through the array, using `Array.prototype.slice()` to drop the first element of the array until the returned value from the function is `true`.
Returns the remaining elements.

遍历给出的数组，使用`Array.prototype.slice()`来去除数组头部的元素，直到遇到给出的函数作用后返回`true`的元素。返回剩余元素。

```js
const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};
```

```js
dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]
```
