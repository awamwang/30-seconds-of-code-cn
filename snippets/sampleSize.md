---
title: sampleSize
tags: array,random,intermediate
---

Gets `n` random elements at unique keys from `array` up to the size of `array`.

从数组`array`中随机的不重复的获取最多`n` 个元素（`array`的长度个）。

- Shuffle the array using the [Fisher-Yates algorithm](https://github.com/30-seconds/30-seconds-of-code#shuffle).
- Use `Array.prototype.slice()` to get the first `n` elements.
- Omit the second argument, `n` to get only one element at random from the array.

使用Fisher-Yates算法[Fisher-Yates algorithm](https://github.com/30-seconds/30-seconds-of-code#shuffle)来对数组洗牌。使用`Array.prototype.slice()`来获取前`n`个元素。如果第二个元素`n`不传，则只随机的从数组中获取一个元素。

```js
const sampleSize = ([...arr], n = 1) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
};
```

```js
sampleSize([1, 2, 3], 2); // [3,1]
sampleSize([1, 2, 3], 4); // [2,3,1]
```
