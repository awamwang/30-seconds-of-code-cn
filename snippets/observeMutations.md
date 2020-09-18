---
title: observeMutations
tags: browser,event,advanced
---

Returns a new MutationObserver and runs the provided callback for each mutation on the specified element.

返回一个新的变化观察者（MutationObserver），对每个给定元素的变化来执行给定的回调函数。

- Use a [`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) to observe mutations on the given element.
- Use `Array.prototype.forEach()` to run the callback for each mutation that is observed.
- Omit the third argument, `options`, to use the default [options](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver#MutationObserverInit) (all `true`).

使用[`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)来观察给定元素的变化。使用`Array.prototype.forEach()`来对每个观察的变化执行回调。如果不传第三个参数`options`，则使用默认的 [options](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver#MutationObserverInit)（都是`true`）。

```js
const observeMutations = (element, callback, options) => {
  const observer = new MutationObserver(mutations => mutations.forEach(m => callback(m)));
  observer.observe(
    element,
    Object.assign(
      {
        childList: true,
        attributes: true,
        attributeOldValue: true,
        characterData: true,
        characterDataOldValue: true,
        subtree: true
      },
      options
    )
  );
  return observer;
};
```

```js
const obs = observeMutations(document, console.log); // Logs all mutations that happen on the page
obs.disconnect(); // Disconnects the observer and stops logging mutations on the page
```