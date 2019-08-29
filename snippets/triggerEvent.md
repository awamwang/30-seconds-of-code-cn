---
title: triggerEvent
tags: browser,event,intermediate
---

Triggers a specific event on a given element, optionally passing custom data.

在给定的元素上触发指定事件，可选择传入自定义数据。

Use `new CustomEvent()` to create an event from the specified `eventType` and details.
Use `el.dispatchEvent()` to trigger the newly created event on the given element.
Omit the third argument, `detail`, if you do not want to pass custom data to the triggered event.

使用`new CustomEvent()`来创建一个指定`eventType`的事件和详细内容。使用`el.dispatchEvent()`在给定元素上触发这个新创建的事件。如果不需要传入自定义的数据到触发的事件，则不传第三个参数`detail`。

```js
const triggerEvent = (el, eventType, detail) =>
  el.dispatchEvent(new CustomEvent(eventType, { detail }));
```

```js
triggerEvent(document.getElementById('myId'), 'click');
triggerEvent(document.getElementById('myId'), 'click', { username: 'bob' });
```