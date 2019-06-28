### shuffle

Randomizes the order of the values of an array, returning a new array.

随机改变数组中元素的顺序后，返回新的数组。

Uses the [Fisher-Yates algorithm](https://github.com/30-seconds/30-seconds-of-code#shuffle) to reorder the elements of the array.

使用[Fisher-Yates algorithm](https://github.com/30-seconds/30-seconds-of-code#shuffle)来对数组中元素重新排序。

```js
const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};
```

```js
const foo = [1, 2, 3];
shuffle(foo); // [2, 3, 1], foo = [1, 2, 3]
```
