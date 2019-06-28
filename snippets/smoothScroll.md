### smoothScroll

Smoothly scrolls the element on which it's called into the visible area of the browser window.

把指定元素滚动到它所调用的浏览器窗口的可见区域内。

Use `.scrollIntoView` method to scroll the element. 
Pass `{ behavior: 'smooth' }` to `.scrollIntoView` so it scrolls smoothly.

使用`.scrollIntoView`方法来滚动元素。把`{ behavior: 'smooth' }`传给`.scrollIntoView`，所以滚动是平滑的。

```js
const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });
```

```js
smoothScroll('#fooBar'); // scrolls smoothly to the element with the id fooBar
smoothScroll('.fooBar'); // scrolls smoothly to the first element with a class of fooBar
```
