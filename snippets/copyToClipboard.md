---
title: copyToClipboard
tags: browser,string,advanced
---

Copy a string to the clipboard. 
Only works as a result of user action (i.e. inside a `click` event listener).

把一个字符串拷贝到剪切板。只有在用户操作时才生效（i.e. 在一个`click`事件的监听函数中）。

⚠️ **NOTICE:** The same functionality can be easily implemented by using the new asynchronous Clipboard API, which is still experimental but should be used in the future instead of this snippet. Find out more about it [here](https://github.com/w3c/clipboard-apis/blob/master/explainer.adoc#writing-to-the-clipboard).

⚠️ **NOTICE:** 相同的功能可以很容易的用还在实验阶段但未来可能替代本代码片段的新异步剪切板API实现。更多信息参见[here](https://github.com/w3c/clipboard-apis/blob/master/explainer.adoc#writing-to-the-clipboard).

Create a new `<textarea>` element, fill it with the supplied data and add it to the HTML document.
Use `Selection.getRangeAt()`to store the selected range (if any).
Use `document.execCommand('copy')` to copy to the clipboard.
Remove the `<textarea>` element from the HTML document.
Finally, use `Selection().addRange()` to recover the original selected range (if any).

创建一个`<textarea>`元素，用提供的数据填充它，并把它添加到HTML的文档流中。使用 `Selection.getRangeAt()`来存储选中的区域（如果有的话）。使用`document.execCommand('copy')`来把内容拷贝到剪切板。把`<textarea>`从HTML的文档流中删除。最后，使用`Selection().addRange()`来恢复原始选择的区域（如果有）。

```js
const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
  el.select(); // 选中创建的textarea
  document.execCommand('copy'); // 执行copy
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};
```

```js
copyToClipboard('Lorem ipsum'); // 'Lorem ipsum' copied to clipboard.
```
