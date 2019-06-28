### isTravisCI

Checks if the current environment is [Travis CI](https://travis-ci.org/).

检测当前环境是不是[Travis CI](https://travis-ci.org/)的环境。

Checks if the current environment has the `TRAVIS` and `CI` environment variables ([reference](https://docs.travis-ci.com/user/environment-variables/#Default-Environment-Variables)).

检测当前环境是否有`TRAVIS`和`CI`环境变量([reference](https://docs.travis-ci.com/user/environment-variables/#Default-Environment-Variables))。

```js
const isTravisCI = () => 'TRAVIS' in process.env && 'CI' in process.env;
```

```js
isTravisCI(); // true (if code is running on Travis CI)
```
