---
title: arrayToHtmlList
tags: browser,array,intermediate
---

Converts the given array elements into `<li>` tags and appends them to the list of the given id.

把给定的数组元素转换为`<li>`标签，并把他们追加到给定id的list标签中。

- Use `Array.prototype.map()` and `document.querySelector()` to create a list of html tags.

- 使用`Array.prototype.map()`，`document.querySelector()`来创建一个html的list标签。

```js
const arrayToHtmlList = (arr, listID) =>
  (document.querySelector(`#${listID}`).innerHTML += arr.map(item => `<li>${item}</li>`).join(''));
```

```js
arrayToHtmlList(['item 1', 'item 2'], 'myListID');
```
