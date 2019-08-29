---
title: httpPost
tags: utility,url,browser,intermediate
---

Makes a `POST` request to the passed URL.

创建一个到传入URL的`POST`请求。

Use [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest) web api to make a `post` request to the given `url`.
Set the value of an `HTTP` request header with `setRequestHeader` method.
Handle the `onload` event, by calling the given `callback` the `responseText`.
Handle the `onerror` event, by running the provided `err` function.
Omit the third argument, `data`, to send no data to the provided `url`.
Omit the fourth argument, `err`, to log errors to the console's `error` stream by default.

使用[`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)网络api来创建一个给出`url`的`post`请求。用`setRequestHeader`方法来设置`HTTP`请求头。通过对`responseText`调用给出的`callback`来处理`onload`事件，通过执行提供的`err`函数来处理`onerror`事件。如果不传第三个参数`data`，则不向给出的`url`发送数据。如果不传第四个参数`err`，则把错误打印到默认的控制台`error`流中。

```js
const httpPost = (url, data, callback, err = console.error) => {
  const request = new XMLHttpRequest();
  request.open('POST', url, true);
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.onload = () => callback(request.responseText);
  request.onerror = () => err(request);
  request.send(data);
};
```

```js
const newPost = {
  userId: 1,
  id: 1337,
  title: 'Foo',
  body: 'bar bar bar'
};
const data = JSON.stringify(newPost);
httpPost(
  'https://jsonplaceholder.typicode.com/posts',
  data,
  console.log
); /*
Logs: {
  "userId": 1,
  "id": 1337,
  "title": "Foo",
  "body": "bar bar bar"
}
*/
httpPost(
  'https://jsonplaceholder.typicode.com/posts',
  null, // does not send a body
  console.log
); /*
Logs: {
  "id": 101
}
*/
```