### httpsRedirect

Redirects the page to HTTPS if its currently in HTTP. Also, pressing the back button doesn't take it back to the HTTP page as its replaced in the history.

如果当前页是HTTP的，则重定向到HTTPS。因为是在history中使用替换方法，所以点击回退按钮不会退回到上一个HTTP的页面。

Use `location.protocol` to get the protocol currently being used. If it's not HTTPS, use `location.replace()` to replace the existing page with the HTTPS version of the page. Use `location.href` to get the full address, split it with `String.prototype.split()` and remove the protocol part of the URL.

使用`location.protocol`获取当前页使用的协议。如果不是HTTPS的，使用`location.replace()`把当前页替换为它的HTTPS版本。使用`location.href`来获取地址全字段，用`String.prototype.split()`拆分它们并从URL中删除协议部分。

```js
const httpsRedirect = () => {
  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};
```

```js
httpsRedirect(); // If you are on http://mydomain.com, you are redirected to https://mydomain.com
```
