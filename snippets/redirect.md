---
title: redirect
tags: browser,url,beginner
---

Redirects to a specified URL.

重定向到一个特定的URL。

- Use `window.location.href` or `window.location.replace()` to redirect to `url`.
- Pass a second argument to simulate a link click (`true` - default) or an HTTP redirect (`false`).

使用`window.location.href`或者`window.location.replace()`来重定向到`url`。传入第二个参数来决定模拟一个链接点击（传入`true`）还是一个HTTP重定向（传入`false`）。

```js
const redirect = (url, asLink = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);
```

```js
redirect('https://google.com');
```
