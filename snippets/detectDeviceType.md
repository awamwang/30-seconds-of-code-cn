### detectDeviceType

Detects whether the website is being opened in a mobile device or a desktop/laptop.

探测当前网站是在手机设备中还是桌面/笔记本设备中打开。

Use a regular expression to test the `navigator.userAgent` property to figure out if the device is a mobile device or a desktop/laptop.

使用一个正则表达式来测试`navigator.userAgent`，推测出当前设备是一个手机设备还是桌面/笔记本设备。

```js
const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop';
```

```js
detectDeviceType(); // "Mobile" or "Desktop"
```
