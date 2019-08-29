---
title: on
tags: browser,event,intermediate
---

Adds an event listener to an element with the ability to use event delegation.

给一个元素添加一个带有事件委托能力的事件监听。

Use `EventTarget.addEventListener()` to add an event listener to an element. If there is a `target` property supplied to the options object, ensure the event target matches the target specified and then invoke the callback by supplying the correct `this` context.
Returns a reference to the custom delegator function, in order to be possible to use with [`off`](#off).
Omit `opts` to default to non-delegation behavior and event bubbling.

使用`EventTarget.addEventListener()`给指定的元素添加一个事件监听。如果options对象中有一个`target`属性，先确保事件目标与给定的目标匹配，然后再提供正确`this`上下文给回调函数，并调用它。返回自定义委托函数的一个引用，用来使用 [`off`](#off)来删除监听时使用。`opts`参数的默认值是不启动委托行为（non-delegation）和事件冒泡传递（非捕获）。

```js
const on = (el, evt, fn, opts = {}) => {
  const delegatorFn = e => e.target.matches(opts.target) && fn.call(e.target, e);
  el.addEventListener(evt, opts.target ? delegatorFn : fn, opts.options || false);
  if (opts.target) return delegatorFn;
};
```

```js
const fn = () => console.log('!');
on(document.body, 'click', fn); // logs '!' upon clicking the body
on(document.body, 'click', fn, { target: 'p' }); // logs '!' upon clicking a `p` element child of the body
on(document.body, 'click', fn, { options: true }); // use capturing instead of bubbling
```