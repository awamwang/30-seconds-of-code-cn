---
title: counter
tags: browser,advanced
---

Creates a counter with the specified range, step and duration for the specified selector.

用指定的范围、步幅、过程时长为指定的选择器（DOM）创建一个的计数器。

- Check if `step` has the proper sign and change it accordingly.
- Use `setInterval()` in combination with `Math.abs()` and `Math.floor()` to calculate the time between each new text draw.
- Use `document.querySelector().innerHTML` to update the value of the selected element.
- Omit the fourth parameter, `step`, to use a default step of `1`.
- Omit the fifth parameter, `duration`, to use a default duration of `2000`ms.

检查`step`是否有合适的正负值，并修改成合适的正负值。使用`setInterval()`结合`Math.abs()` 和 `Math.floor()`来控制每次新文字渲染的间隔。使用`document.querySelector().innerHTML`来更新选中元素的值。如果第四个参数`step`不传，使用`1`作为默认步幅值；如果第五个参数`duration`不传，使用`2000`ms作为默认的过程时长。

```js
const counter = (selector, start, end, step = 1, duration = 2000) => {
  let current = start,
    _step = (end - start) * step < 0 ? -step : step,
    timer = setInterval(() => {
      current += _step;
      document.querySelector(selector).innerHTML = current;
      if (current >= end) document.querySelector(selector).innerHTML = end;
      if (current >= end) clearInterval(timer);
    }, Math.abs(Math.floor(duration / (end - start))));
  return timer;
};
```

```js
counter('#my-id', 1, 1000, 5, 2000); // Creates a 2-second timer for the element with id="my-id"
```
