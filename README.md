[![Logo](/logo.png)](https://30secondsofcode.org/)

# 30 seconds of code

[![License](https://img.shields.io/badge/license-CC0--1.0-blue.svg)](https://github.com/30-seconds/30-seconds-of-code/blob/master/LICENSE) [![npm Downloads](https://img.shields.io/npm/dt/30-seconds-of-code.svg)](https://www.npmjs.com/package/30-seconds-of-code) [![npm Version](https://img.shields.io/npm/v/30-seconds-of-code.svg)](https://www.npmjs.com/package/30-seconds-of-code) [![Known Vulnerabilities](https://snyk.io/test/github/30-seconds/30-seconds-of-code/badge.svg?targetFile=package.json)](https://snyk.io/test/github/30-seconds/30-seconds-of-code?targetFile=package.json) <br/> 
[![Travis Build](https://travis-ci.org/keepgoingwm/30-seconds-of-code-cn.svg?branch=master)](https://travis-ci.com/keepgoingwm/30-seconds-of-code) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/6ab7791fb1ea40b4a576d658fb96807f)](https://www.codacy.com/app/Chalarangelo/30-seconds-of-code?utm_source=github.com&utm_medium=referral&utm_content=30-seconds/30-seconds-of-code&utm_campaign=Badge_Grade) [![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg)](https://github.com/Flet/semistandard) <br/>
[![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [![ProductHunt](https://img.shields.io/badge/producthunt-vote-orange.svg)](https://www.producthunt.com/posts/30-seconds-of-code) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

> Curated collection of useful JavaScript snippets that you can understand in 30 seconds or less.

* Use <kbd>Ctrl</kbd> + <kbd>F</kbd> or <kbd>command</kbd> + <kbd>F</kbd> to search for a snippet.
* Contributions welcome, please read the [contribution guide](CONTRIBUTING.md).
* Snippets are written in ES6, use the [Babel transpiler](https://babeljs.io/) to ensure backwards-compatibility.
* You can import these snippets into VSCode, by following the instructions found [here](https://github.com/30-seconds/30-seconds-of-code/tree/master/vscode_snippets).
* You can search, view and copy these snippets from a terminal, using the CLI application from [this repo](https://github.com/sQVe/30s).
* If you want to follow 30-seconds-of-code on social media, you can find us on [Facebook](https://www.facebook.com/30secondsofcode), [Instagram](https://www.instagram.com/30secondsofcode) and [Twitter](https://twitter.com/30secondsofcode).

这个项目中的代码片段有以下几个特点：

* 具有实用性，这点作为代码贡献规则被要求
* 精简，实用箭头函数、无return的返回精简代码格式；通过最精简的方法实现逻辑；尽量将多步逻辑合并到一步完成

#### Related projects

* [30 Seconds of CSS](https://30-seconds.github.io/30-seconds-of-css/)
* [30 Seconds of Interviews](https://30secondsofinterviews.org/)
* [30 Seconds of React](https://github.com/30-seconds/30-seconds-of-react)
* [30 Seconds of Python](https://github.com/30-seconds/30-seconds-of-python-code)
* [30 Seconds of PHP](https://github.com/30-seconds/30-seconds-of-php-code)
* [30 Seconds of Knowledge](https://chrome.google.com/webstore/detail/30-seconds-of-knowledge/mmgplondnjekobonklacmemikcnhklla)
* [30 Seconds of Kotlin](https://github.com/IvanMwiruki/30-seconds-of-kotlin) _(unofficial)_

#### Package

⚠️ **NOTICE:** A few of our snippets are not yet optimized for production (see disclaimers for individual snippet issues).

You can find a package with all the snippets on [npm](https://www.npmjs.com/package/30-seconds-of-code).

```bash
# With npm
npm install 30-seconds-of-code

# With yarn
yarn add 30-seconds-of-code
```

[CDN link](https://unpkg.com/30-seconds-of-code/)

<details>
<summary>Details</summary>

**Browser**

```html
<script src="https://unpkg.com/30-seconds-of-code@1/dist/_30s.es5.min.js"></script>
<script>
  _30s.average(1, 2, 3);
</script>
```

**Node**

```js
// CommonJS
const _30s = require('30-seconds-of-code');
_30s.average(1, 2, 3);

// ES Modules
import _30s from '30-seconds-of-code';
_30s.average(1, 2, 3);
```

</details>

## Contents

### 🔌 Adapter

<details>
<summary>View contents</summary>

* [`ary`](#ary)
* [`call`](#call)
* [`collectInto`](#collectinto)
* [`flip`](#flip)
* [`over`](#over)
* [`overArgs`](#overargs)
* [`pipeAsyncFunctions`](#pipeasyncfunctions)
* [`pipeFunctions`](#pipefunctions)
* [`promisify`](#promisify)
* [`rearg`](#rearg)
* [`spreadOver`](#spreadover)
* [`unary`](#unary)

</details>

### 📚 Array

<details>
<summary>View contents</summary>

* [`all`](#all)
* [`allEqual`](#allequal)
* [`any`](#any)
* [`arrayToCSV`](#arraytocsv)
* [`bifurcate`](#bifurcate)
* [`bifurcateBy`](#bifurcateby)
* [`chunk`](#chunk)
* [`compact`](#compact)
* [`countBy`](#countby)
* [`countOccurrences`](#countoccurrences)
* [`deepFlatten`](#deepflatten)
* [`difference`](#difference)
* [`differenceBy`](#differenceby)
* [`differenceWith`](#differencewith)
* [`drop`](#drop)
* [`dropRight`](#dropright)
* [`dropRightWhile`](#droprightwhile)
* [`dropWhile`](#dropwhile)
* [`everyNth`](#everynth)
* [`filterFalsy`](#filterfalsy)
* [`filterNonUnique`](#filternonunique)
* [`filterNonUniqueBy`](#filternonuniqueby)
* [`findLast`](#findlast)
* [`findLastIndex`](#findlastindex)
* [`flatten`](#flatten)
* [`forEachRight`](#foreachright)
* [`groupBy`](#groupby)
* [`head`](#head)
* [`indexOfAll`](#indexofall)
* [`initial`](#initial)
* [`initialize2DArray`](#initialize2darray)
* [`initializeArrayWithRange`](#initializearraywithrange)
* [`initializeArrayWithRangeRight`](#initializearraywithrangeright)
* [`initializeArrayWithValues`](#initializearraywithvalues)
* [`initializeNDArray`](#initializendarray)
* [`intersection`](#intersection)
* [`intersectionBy`](#intersectionby)
* [`intersectionWith`](#intersectionwith)
* [`isSorted`](#issorted)
* [`join`](#join)
* [`JSONtoCSV`](#jsontocsv-)
* [`last`](#last)
* [`longestItem`](#longestitem)
* [`mapObject`](#mapobject-)
* [`maxN`](#maxn)
* [`minN`](#minn)
* [`none`](#none)
* [`nthElement`](#nthelement)
* [`offset`](#offset)
* [`partition`](#partition)
* [`permutations`](#permutations-)
* [`pull`](#pull)
* [`pullAtIndex`](#pullatindex-)
* [`pullAtValue`](#pullatvalue-)
* [`pullBy`](#pullby-)
* [`reducedFilter`](#reducedfilter)
* [`reduceSuccessive`](#reducesuccessive)
* [`reduceWhich`](#reducewhich)
* [`reject`](#reject)
* [`remove`](#remove)
* [`sample`](#sample)
* [`sampleSize`](#samplesize)
* [`shank`](#shank)
* [`shuffle`](#shuffle)
* [`similarity`](#similarity)
* [`sortedIndex`](#sortedindex)
* [`sortedIndexBy`](#sortedindexby)
* [`sortedLastIndex`](#sortedlastindex)
* [`sortedLastIndexBy`](#sortedlastindexby)
* [`stableSort`](#stablesort-)
* [`symmetricDifference`](#symmetricdifference)
* [`symmetricDifferenceBy`](#symmetricdifferenceby)
* [`symmetricDifferenceWith`](#symmetricdifferencewith)
* [`tail`](#tail)
* [`take`](#take)
* [`takeRight`](#takeright)
* [`takeRightWhile`](#takerightwhile)
* [`takeWhile`](#takewhile)
* [`toHash`](#tohash)
* [`union`](#union)
* [`unionBy`](#unionby)
* [`unionWith`](#unionwith)
* [`uniqueElements`](#uniqueelements)
* [`uniqueElementsBy`](#uniqueelementsby)
* [`uniqueElementsByRight`](#uniqueelementsbyright)
* [`uniqueSymmetricDifference`](#uniquesymmetricdifference)
* [`unzip`](#unzip)
* [`unzipWith`](#unzipwith-)
* [`without`](#without)
* [`xProd`](#xprod)
* [`zip`](#zip)
* [`zipObject`](#zipobject)
* [`zipWith`](#zipwith-)

</details>

### 🌐 Browser

<details>
<summary>View contents</summary>

* [`arrayToHtmlList`](#arraytohtmllist)
* [`bottomVisible`](#bottomvisible)
* [`copyToClipboard`](#copytoclipboard-)
* [`counter`](#counter-)
* [`createElement`](#createelement)
* [`createEventHub`](#createeventhub-)
* [`currentURL`](#currenturl)
* [`detectDeviceType`](#detectdevicetype)
* [`elementContains`](#elementcontains)
* [`elementIsVisibleInViewport`](#elementisvisibleinviewport-)
* [`formToObject`](#formtoobject)
* [`getImages`](#getimages)
* [`getScrollPosition`](#getscrollposition)
* [`getStyle`](#getstyle)
* [`hasClass`](#hasclass)
* [`hashBrowser`](#hashbrowser-)
* [`hide`](#hide)
* [`httpsRedirect`](#httpsredirect)
* [`insertAfter`](#insertafter)
* [`insertBefore`](#insertbefore)
* [`isBrowserTabFocused`](#isbrowsertabfocused)
* [`nodeListToArray`](#nodelisttoarray)
* [`observeMutations`](#observemutations-)
* [`off`](#off)
* [`on`](#on)
* [`onUserInputChange`](#onuserinputchange-)
* [`prefix`](#prefix)
* [`recordAnimationFrames`](#recordanimationframes)
* [`redirect`](#redirect)
* [`runAsync`](#runasync-)
* [`scrollToTop`](#scrolltotop)
* [`serializeForm`](#serializeform)
* [`setStyle`](#setstyle)
* [`show`](#show)
* [`smoothScroll`](#smoothscroll)
* [`toggleClass`](#toggleclass)
* [`triggerEvent`](#triggerevent)
* [`UUIDGeneratorBrowser`](#uuidgeneratorbrowser)

</details>

### ⏱️ Date

<details>
<summary>View contents</summary>

* [`dayOfYear`](#dayofyear)
* [`formatDuration`](#formatduration)
* [`getColonTimeFromDate`](#getcolontimefromdate)
* [`getDaysDiffBetweenDates`](#getdaysdiffbetweendates)
* [`getMeridiemSuffixOfInteger`](#getmeridiemsuffixofinteger)
* [`isAfterDate`](#isafterdate)
* [`isBeforeDate`](#isbeforedate)
* [`isSameDate`](#issamedate)
* [`isWeekday`](#isweekday)
* [`isWeekend`](#isweekend)
* [`maxDate`](#maxdate)
* [`minDate`](#mindate)
* [`tomorrow`](#tomorrow)
* [`yesterday`](#yesterday)

</details>

### 🎛️ Function

<details>
<summary>View contents</summary>

* [`attempt`](#attempt)
* [`bind`](#bind)
* [`bindKey`](#bindkey)
* [`chainAsync`](#chainasync)
* [`checkProp`](#checkprop)
* [`compose`](#compose)
* [`composeRight`](#composeright)
* [`converge`](#converge)
* [`curry`](#curry)
* [`debounce`](#debounce)
* [`defer`](#defer)
* [`delay`](#delay)
* [`functionName`](#functionname)
* [`hz`](#hz)
* [`memoize`](#memoize-)
* [`negate`](#negate)
* [`once`](#once)
* [`partial`](#partial)
* [`partialRight`](#partialright)
* [`runPromisesInSeries`](#runpromisesinseries)
* [`sleep`](#sleep)
* [`throttle`](#throttle-)
* [`times`](#times)
* [`uncurry`](#uncurry)
* [`unfold`](#unfold)
* [`when`](#when)

</details>

### ➗ Math

<details>
<summary>View contents</summary>

* [`approximatelyEqual`](#approximatelyequal)
* [`average`](#average)
* [`averageBy`](#averageby)
* [`binomialCoefficient`](#binomialcoefficient)
* [`clampNumber`](#clampnumber)
* [`degreesToRads`](#degreestorads)
* [`digitize`](#digitize)
* [`distance`](#distance)
* [`elo`](#elo-)
* [`factorial`](#factorial)
* [`fibonacci`](#fibonacci)
* [`gcd`](#gcd)
* [`geometricProgression`](#geometricprogression)
* [`hammingDistance`](#hammingdistance)
* [`inRange`](#inrange)
* [`isDivisible`](#isdivisible)
* [`isEven`](#iseven)
* [`isNegativeZero`](#isnegativezero)
* [`isPrime`](#isprime)
* [`lcm`](#lcm)
* [`luhnCheck`](#luhncheck-)
* [`mapNumRange`](#mapnumrange)
* [`maxBy`](#maxby)
* [`median`](#median)
* [`midpoint`](#midpoint)
* [`minBy`](#minby)
* [`percentile`](#percentile)
* [`powerset`](#powerset)
* [`primes`](#primes)
* [`radsToDegrees`](#radstodegrees)
* [`randomIntArrayInRange`](#randomintarrayinrange)
* [`randomIntegerInRange`](#randomintegerinrange)
* [`randomNumberInRange`](#randomnumberinrange)
* [`round`](#round)
* [`sdbm`](#sdbm)
* [`standardDeviation`](#standarddeviation)
* [`sum`](#sum)
* [`sumBy`](#sumby)
* [`sumPower`](#sumpower)
* [`toSafeInteger`](#tosafeinteger)
* [`vectorDistance`](#vectordistance)

</details>

### 📦 Node

<details>
<summary>View contents</summary>

* [`atob`](#atob)
* [`btoa`](#btoa)
* [`colorize`](#colorize)
* [`createDirIfNotExists`](#createdirifnotexists)
* [`hasFlags`](#hasflags)
* [`hashNode`](#hashnode)
* [`isDuplexStream`](#isduplexstream)
* [`isReadableStream`](#isreadablestream)
* [`isStream`](#isstream)
* [`isTravisCI`](#istravisci)
* [`isWritableStream`](#iswritablestream)
* [`JSONToFile`](#jsontofile)
* [`readFileLines`](#readfilelines)
* [`untildify`](#untildify)
* [`UUIDGeneratorNode`](#uuidgeneratornode)

</details>

### 🗃️ Object

<details>
<summary>View contents</summary>

* [`bindAll`](#bindall)
* [`deepClone`](#deepclone)
* [`deepFreeze`](#deepfreeze)
* [`deepGet`](#deepget)
* [`deepMapKeys`](#deepmapkeys-)
* [`defaults`](#defaults)
* [`dig`](#dig)
* [`equals`](#equals-)
* [`findKey`](#findkey)
* [`findLastKey`](#findlastkey)
* [`flattenObject`](#flattenobject)
* [`forOwn`](#forown)
* [`forOwnRight`](#forownright)
* [`functions`](#functions)
* [`get`](#get)
* [`invertKeyValues`](#invertkeyvalues)
* [`lowercaseKeys`](#lowercasekeys)
* [`mapKeys`](#mapkeys)
* [`mapValues`](#mapvalues)
* [`matches`](#matches)
* [`matchesWith`](#matcheswith)
* [`merge`](#merge)
* [`nest`](#nest)
* [`objectFromPairs`](#objectfrompairs)
* [`objectToPairs`](#objecttopairs)
* [`omit`](#omit)
* [`omitBy`](#omitby)
* [`orderBy`](#orderby)
* [`pick`](#pick)
* [`pickBy`](#pickby)
* [`renameKeys`](#renamekeys)
* [`shallowClone`](#shallowclone)
* [`size`](#size)
* [`transform`](#transform)
* [`truthCheckCollection`](#truthcheckcollection)
* [`unflattenObject`](#unflattenobject-)

</details>

### 📜 String

<details>
<summary>View contents</summary>

* [`byteSize`](#bytesize)
* [`capitalize`](#capitalize)
* [`capitalizeEveryWord`](#capitalizeeveryword)
* [`compactWhitespace`](#compactwhitespace)
* [`CSVToArray`](#csvtoarray)
* [`CSVToJSON`](#csvtojson-)
* [`decapitalize`](#decapitalize)
* [`escapeHTML`](#escapehtml)
* [`escapeRegExp`](#escaperegexp)
* [`fromCamelCase`](#fromcamelcase)
* [`indentString`](#indentstring)
* [`isAbsoluteURL`](#isabsoluteurl)
* [`isAnagram`](#isanagram)
* [`isLowerCase`](#islowercase)
* [`isUpperCase`](#isuppercase)
* [`mapString`](#mapstring)
* [`mask`](#mask)
* [`pad`](#pad)
* [`palindrome`](#palindrome)
* [`pluralize`](#pluralize)
* [`removeNonASCII`](#removenonascii)
* [`reverseString`](#reversestring)
* [`sortCharactersInString`](#sortcharactersinstring)
* [`splitLines`](#splitlines)
* [`stringPermutations`](#stringpermutations-)
* [`stripHTMLTags`](#striphtmltags)
* [`toCamelCase`](#tocamelcase)
* [`toKebabCase`](#tokebabcase)
* [`toSnakeCase`](#tosnakecase)
* [`toTitleCase`](#totitlecase)
* [`truncateString`](#truncatestring)
* [`unescapeHTML`](#unescapehtml)
* [`URLJoin`](#urljoin-)
* [`words`](#words)

</details>

### 📃 Type

<details>
<summary>View contents</summary>

* [`getType`](#gettype)
* [`is`](#is)
* [`isArrayLike`](#isarraylike)
* [`isBoolean`](#isboolean)
* [`isEmpty`](#isempty)
* [`isFunction`](#isfunction)
* [`isNil`](#isnil)
* [`isNull`](#isnull)
* [`isNumber`](#isnumber)
* [`isObject`](#isobject)
* [`isObjectLike`](#isobjectlike)
* [`isPlainObject`](#isplainobject)
* [`isPrimitive`](#isprimitive)
* [`isPromiseLike`](#ispromiselike)
* [`isString`](#isstring)
* [`isSymbol`](#issymbol)
* [`isUndefined`](#isundefined)
* [`isValidJSON`](#isvalidjson)

</details>

### 🔧 Utility

<details>
<summary>View contents</summary>

* [`castArray`](#castarray)
* [`cloneRegExp`](#cloneregexp)
* [`coalesce`](#coalesce)
* [`coalesceFactory`](#coalescefactory)
* [`extendHex`](#extendhex)
* [`getURLParameters`](#geturlparameters)
* [`hexToRGB`](#hextorgb-)
* [`httpGet`](#httpget)
* [`httpPost`](#httppost)
* [`isBrowser`](#isbrowser)
* [`mostPerformant`](#mostperformant)
* [`nthArg`](#ntharg)
* [`parseCookie`](#parsecookie)
* [`prettyBytes`](#prettybytes-)
* [`randomHexColorCode`](#randomhexcolorcode)
* [`RGBToHex`](#rgbtohex)
* [`serializeCookie`](#serializecookie)
* [`timeTaken`](#timetaken)
* [`toCurrency`](#tocurrency)
* [`toDecimalMark`](#todecimalmark)
* [`toOrdinalSuffix`](#toordinalsuffix)
* [`validateNumber`](#validatenumber)
* [`yesNo`](#yesno)

</details>


---

## 🔌 Adapter

### ary

Creates a function that accepts up to `n` arguments, ignoring any additional arguments.

创建一个最多`n`个参数的函数，它会忽略其他参数。

Call the provided function, `fn`, with up to `n` arguments, using `Array.prototype.slice(0,n)` and the spread operator (`...`).

使用`Array.prototype.slice(0,n)`和展开操作符(`...`)提取最多`n`个参数，传给`fn`并调用。

```js
const ary = (fn, n) => (...args) => fn(...args.slice(0, n));
```

<details>
<summary>Examples</summary>

```js
const firstTwoMax = ary(Math.max, 2);
[[2, 6, 'a'], [8, 4, 6], [10]].map(x => firstTwoMax(...x)); // [6, 8, 10]
```

</details>

<br>[⬆ Back to top](#contents)

### call

Given a key and a set of arguments, call them when given a context. Primarily useful in composition.

用给的一个`key`值和一组参数，在提供的`context`下调用函数（context理解为一个对象，key值理解为对象下的方法名），主要在组合模式中使用。（这个操作使JS中的对象方法不依赖于对象存在，使得动态类的构造成为可能）。

Use a closure to call a stored key with stored arguments.

用闭包把`key`名称和传入的参数存储，在更换`context`可以方便的调用。

```js
const call = (key, ...args) => context => context[key](...args);
```

<details>
<summary>Examples</summary>

```js
Promise.resolve([1, 2, 3])
  .then(call('map', x => 2 * x))
  .then(console.log); // [ 2, 4, 6 ]
const map = call.bind(null, 'map');
Promise.resolve([1, 2, 3])
  .then(map(x => 2 * x))
  .then(console.log); // [ 2, 4, 6 ]
```

</details>

<br>[⬆ Back to top](#contents)

### collectInto

Changes a function that accepts an array into a variadic function.

把一个接受数组参数的函数改造成接受可变数目参数的函数。

Given a function, return a closure that collects all inputs into an array-accepting function.

传入一个接受数组参数的函数，返回一个把所有参数收集到一个array后传给这个函数调用的闭包。

```js
const collectInto = fn => (...args) => fn(args);
```

<details>
<summary>Examples</summary>

```js
const Pall = collectInto(Promise.all.bind(Promise));
let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = new Promise(resolve => setTimeout(resolve, 2000, 3));
Pall(p1, p2, p3).then(console.log); // [1, 2, 3] (after about 2 seconds)
```

</details>

<br>[⬆ Back to top](#contents)

### flip

Flip takes a function as an argument, then makes the first argument the last.

Flip接受一个函数作为参数，把传入函数的第一个参数放到参数列表末尾。

Return a closure that takes variadic inputs, and splices the last argument to make it the first argument before applying the rest.

返回一个接受可变数量参数，把第一个参数放到其余参数后面（即最后）的闭包（英文好像有错误）

```js
const flip = fn => (first, ...rest) => fn(...rest, first);
```

<details>
<summary>Examples</summary>

```js
let a = { name: 'John Smith' };
let b = {};
const mergeFrom = flip(Object.assign);
let mergePerson = mergeFrom.bind(null, a);
mergePerson(b); // == b
b = {};
Object.assign(b, a); // == b
```

</details>

<br>[⬆ Back to top](#contents)

### over

Creates a function that invokes each provided function with the arguments it receives and returns the results.

创建一个函数，它用接收的参数列表调用每个给定的函数，并返回结果列表。

Use `Array.prototype.map()` and `Function.prototype.apply()` to apply each function to the given arguments.

使用`Array.prototype.map()` 和 `Function.prototype.apply()`来把接收的参数列表应用给每个给定的函数。

```js
const over = (...fns) => (...args) => fns.map(fn => fn.apply(null, args));
```

<details>
<summary>Examples</summary>

```js
const minMax = over(Math.min, Math.max);
minMax(1, 2, 3, 4, 5); // [1,5]
```

</details>

<br>[⬆ Back to top](#contents)

### overArgs

Creates a function that invokes the provided function with its arguments transformed.

创建一个函数，它用给定的转换后的参数来调用给定的函数。

Use `Array.prototype.map()` to apply `transforms` to `args` in combination with the spread operator (`...`) to pass the transformed arguments to `fn`.

使用`Array.prototype.map()`和展开操作符(`...`)把`transforms`作用于`args`，然后把转换后的参数列表传给`fn`并调用。

```js
const overArgs = (fn, transforms) => (...args) => fn(...args.map((val, i) => transforms[i](val)));
```

<details>
<summary>Examples</summary>

```js
const square = n => n * n;
const double = n => n * 2;
const fn = overArgs((x, y) => [x, y], [square, double]);
fn(9, 3); // [81, 6]
```

</details>

<br>[⬆ Back to top](#contents)

### pipeAsyncFunctions

Performs left-to-right function composition for asynchronous functions.

为异步函数列表产生一个从左向右执行的函数组合。

Use `Array.prototype.reduce()` with the spread operator (`...`) to perform left-to-right function composition using `Promise.then()`.
The functions can return a combination of: simple values, `Promise`'s, or they can be defined as `async` ones returning through `await`.

使用`Array.prototype.reduce()`和展开操作符(`...`) 来从左向右执行 `Promise.then()`的函数组合。这些函数可以返回一下结果：简单值，`Promise`，或者通过`await`执行的`async`函数。

All functions must be unary.

所有函数必须是一元的（接受一个参数）。

```js
const pipeAsyncFunctions = (...fns) => arg => fns.reduce((p, f) => p.then(f), Promise.resolve(arg));
```

<details>
<summary>Examples</summary>

```js
const sum = pipeAsyncFunctions(
  x => x + 1,
  x => new Promise(resolve => setTimeout(() => resolve(x + 2), 1000)),
  x => x + 3,
  async x => (await x) + 4
);
(async() => {
  console.log(await sum(5)); // 15 (after one second)
})();
```

</details>

<br>[⬆ Back to top](#contents)

### pipeFunctions

Performs left-to-right function composition.

从左向右执行一个函数组合。

Use `Array.prototype.reduce()` with the spread operator (`...`) to perform left-to-right function composition.
The first (leftmost) function can accept one or more arguments; the remaining functions must be unary.

使用`Array.prototype.reduce()`和展开操作符(`...`) 来从左向右执行函数组合。第一个（最左边）的函数可以接受一个或多个参数；剩下的函数必须是一元的（接受一个参数）。

```js
const pipeFunctions = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args))); // 把前一个函数的返回值作为当前函数的参数
```

<details>
<summary>Examples</summary>

```js
const add5 = x => x + 5;
const multiply = (x, y) => x * y;
const multiplyAndAdd5 = pipeFunctions(multiply, add5);
multiplyAndAdd5(5, 2); // 15
```

</details>

<br>[⬆ Back to top](#contents)

### promisify

Converts an asynchronous function to return a promise.

把一个异步函数转换为返回promise的函数（很适合将Node中回调模式的函数转为promise）。

Use currying to return a function returning a `Promise` that calls the original function.
Use the `...rest` operator to pass in all the parameters.

使用柯里化来返回一个调用原函数并且返回`Promise`的函数。使用 `...rest` 操作符来传入所有参数。

*In Node 8+, you can use [`util.promisify`](https://nodejs.org/api/util.html#util_util_promisify_original)*

*在Node 8+环境，你可以直接使用[`util.promisify`](https://nodejs.org/api/util.html#util_util_promisify_original)*

```js
const promisify = func => (...args) =>
  new Promise((resolve, reject) =>
    func(...args, (err, result) => (err ? reject(err) : resolve(result)))
  );
```

<details>
<summary>Examples</summary>

```js
const delay = promisify((d, cb) => setTimeout(cb, d));
delay(2000).then(() => console.log('Hi!')); // // Promise resolves after 2s
```

</details>

<br>[⬆ Back to top](#contents)

### rearg

Creates a function that invokes the provided function with its arguments arranged according to the specified indexes.

用给定的函数创建一个新函数，新函数的参数按照指定顺序重新排序传入。

Use `Array.prototype.map()` to reorder arguments based on `indexes` in combination with the spread operator (`...`) to pass the transformed arguments to `fn`.

使用 `Array.prototype.map()`把参数根据传入的`indexes`重新排序，然后使用展开操作符(`...`)把转换后的参数列表传给`fn`。

```js
const rearg = (fn, indexes) => (...args) => fn(...indexes.map(i => args[i]));
```

<details>
<summary>Examples</summary>

```js
var rearged = rearg(
  function(a, b, c) {
    return [a, b, c];
  },
  [2, 0, 1]
);
rearged('b', 'c', 'a'); // ['a', 'b', 'c']
```

</details>

<br>[⬆ Back to top](#contents)

### spreadOver

Takes a variadic function and returns a closure that accepts an array of arguments to map to the inputs of the function.

传入一个可变的函数，返回一个闭包，它接受参数数组来代替原本的输入。

Use closures and the spread operator (`...`) to map the array of arguments to the inputs of the function.

使用闭包和展开操作符(`...`)来把参数数组映射给函数输入。

```js
const spreadOver = fn => argsArr => fn(...argsArr);
```

<details>
<summary>Examples</summary>

```js
const arrayMax = spreadOver(Math.max);
arrayMax([1, 2, 3]); // 3
```

</details>

<br>[⬆ Back to top](#contents)

### unary

Creates a function that accepts up to one argument, ignoring any additional arguments.

创建一个最多接受一个参数的函数，忽略其他参数。

Call the provided function, `fn`, with just the first argument given.

仅使用给出参数的第一个调用函数`fn`。

```js
const unary = fn => val => fn(val);
```

<details>
<summary>Examples</summary>

```js
['6', '8', '10'].map(unary(parseInt)); // [6, 8, 10]
```

</details>

<br>[⬆ Back to top](#contents)


---

## 📚 Array

### all

Returns `true` if the provided predicate function returns `true` for all elements in a collection, `false` otherwise.

如果给定集合中的所有元素都使给定的断言函数返回`true`，则整体返回`true`；否则返回`false`。

Use `Array.prototype.every()` to test if all elements in the collection return `true` based on `fn`.
Omit the second argument, `fn`, to use `Boolean` as a default.

使用`Array.prototype.every()` 把集合中所有元素都传给`fn`来验证是否都返回`true` 。不传第二个参数`fn`，则使用默认的`Boolean`（布尔型的构造函数）作为默认值。

```js
const all = (arr, fn = Boolean) => arr.every(fn);
```

<details>
<summary>Examples</summary>

```js
all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true
```

</details>

<br>[⬆ Back to top](#contents)

### allEqual

Check if all elements in an array are equal.

判断是否数组中的所有元素都相等。

Use `Array.prototype.every()` to check if all the elements of the array are the same as the first one.
Elements in the array are compared using the strict comparison operator, which does not account for `NaN` self-inequality.

使用`Array.prototype.every()` 来判断是否数组的所有元素都等于数组的第一个元素。

```js
const allEqual = arr => arr.every(val => val === arr[0]);
```

<details>
<summary>Examples</summary>

```js
allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]); // true
```

</details>

<br>[⬆ Back to top](#contents)

### any

Returns `true` if the provided predicate function returns `true` for at least one element in a collection, `false` otherwise.

集合中至少一个元素被提供的断言函数作用后返回`true`，则整体返回`true`；否则返回`false`。

Use `Array.prototype.some()` to test if any elements in the collection return `true` based on `fn`.
Omit the second argument, `fn`, to use `Boolean` as a default.

使用`Array.prototype.some()`来验证集合中是否有元素被提供的断言函数`fn`作用后返回`true` 。不传第二个参数`fn`，则使用默认的`Boolean`（布尔型的构造函数）作为默认值。

```js
const any = (arr, fn = Boolean) => arr.some(fn);
```

<details>
<summary>Examples</summary>

```js
any([0, 1, 2, 0], x => x >= 2); // true
any([0, 0, 1, 0]); // true
```

</details>

<br>[⬆ Back to top](#contents)

### arrayToCSV

Converts a 2D array to a comma-separated values (CSV) string.

把二维数组转换为点分形式（CSV）字符串。

Use `Array.prototype.map()` and `Array.prototype.join(delimiter)` to combine individual 1D arrays (rows) into strings.
Use `Array.prototype.join('\n')` to combine all rows into a CSV string, separating each row with a newline.
Omit the second argument, `delimiter`, to use a default delimiter of `,`.

使用`Array.prototype.map()`和`Array.prototype.join(delimiter)`把单独的一维数组（行）连接成字符串。使用`Array.prototype.join('\n')`来把所有行连接成CSV字符串，每行使用换行符分隔。如果不传第二参数`delimiter`，使用`,`作为默认值。

```js
const arrayToCSV = (arr, delimiter = ',') =>
  arr
    .map(v => v.map(x => (isNaN(x) ? `"${x.replace(/"/g, '""')}"` : x)).join(delimiter))
    .join('\n'); // 先把数字转字符串；再把每行的字符串拼接；再把每一行拼接（其中的“"”按照CSV的规则进行转义）
```

<details>
<summary>Examples</summary>

```js
arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'
arrayToCSV([['a', '"b" great'], ['c', 3.1415]]); // '"a","""b"" great"\n"c",3.1415'
```

</details>

<br>[⬆ Back to top](#contents)

### bifurcate

Splits values into two groups. If an element in `filter` is truthy, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.

把一组值分为两组。如果一个元素在`filter`中为真（对应位置的布尔值为真，filter为一个布尔值列表），它被归到第一组；否则，它被归到第二组。

Use `Array.prototype.reduce()` and `Array.prototype.push()` to add elements to groups, based on `filter`.

使用`Array.prototype.reduce()` 和 `Array.prototype.push()`来对所有元素作用`filter`，并且基于其返回值分组。

```js
const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]); // 巧妙的用reduce初始化分组[[], []]，然后在累加过程中把每个元素放到相应分组，精简了代码
```

<details>
<summary>Examples</summary>

```js
bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); // [ ['beep', 'boop', 'bar'], ['foo'] ]
```

</details>

<br>[⬆ Back to top](#contents)

### bifurcateBy

Splits values into two groups according to a predicate function, which specifies which group an element in the input collection belongs to. If the predicate function returns a truthy value, the collection element belongs to the first group; otherwise, it belongs to the second group.

根据给定的断言函数`fn`（决定一个元素属于哪个分组的函数）把一组值分成两组。如果这个断言函数返回真值，这个元素被归到第一组；否则，它被归到第二组。

Use `Array.prototype.reduce()` and `Array.prototype.push()` to add elements to groups, based on the value returned by `fn` for each element.

使用`Array.prototype.reduce()` 和 `Array.prototype.push()`来对所有元素作用`fn`，并且基于其返回值分组。`fn`有两个参数`val`, `i`。

```js
const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);
```

<details>
<summary>Examples</summary>

```js
bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); // [ ['beep', 'boop', 'bar'], ['foo'] ]
```

</details>

<br>[⬆ Back to top](#contents)

### chunk

Chunks an array into smaller arrays of a specified size.

把一个数组分成指定`size`的多个块。

Use `Array.from()` to create a new array, that fits the number of chunks that will be produced.
Use `Array.prototype.slice()` to map each element of the new array to a chunk the length of `size`.
If the original array can't be split evenly, the final chunk will contain the remaining elements.

使用`Array.from()`来创建一个合适分块数量的新数组（长度为分块的数目）。使用`Array.prototype.slice()`来为新数组的每个元素生成一个长度为`size`的chunk。如果源数组不能不平均分块，最后一个chunk只包含剩下的元素（长度不是`size`）。

```js
const chunk = (arr, size) =>
  Array.from(
    { length: Math.ceil(arr.length / size) },
    (v, i) => arr.slice(i * size, i * size + size) // slice会处理长度不足的情况，JS不存在越界错误
  );
```

<details>
<summary>Examples</summary>

```js
chunk([1, 2, 3, 4, 5], 2); // [[1,2],[3,4],[5]]
```

</details>

<br>[⬆ Back to top](#contents)

### compact

Removes falsy values from an array.

把数组中所有假值移除掉。

Use `Array.prototype.filter()` to filter out falsy values (`false`, `null`, `0`, `""`, `undefined`, and `NaN`).

使用`Array.prototype.filter()`来过滤掉假值(`false`, `null`, `0`, `""`, `undefined`, and `NaN`)。

```js
const compact = arr => arr.filter(Boolean); // 因为filter参数为必传，这里用Boolean作为过滤函数传入，即省事又合理
```

<details>
<summary>Examples</summary>

```js
compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); // [ 1, 2, 3, 'a', 's', 34 ]
```

</details>

<br>[⬆ Back to top](#contents)

### countBy

Groups the elements of an array based on the given function and returns the count of elements in each group.

根据给定的函数对数组中元素分组，返回每组中元素的个数。

Use `Array.prototype.map()` to map the values of an array to a function or property name.
Use `Array.prototype.reduce()` to create an object, where the keys are produced from the mapped results.

使用`Array.prototype.map()`对数组中每个元素调用`fn`或取出`fn`的属性值（支持两种用法）。使用`Array.prototype.reduce()`来建立一个属性键值来自map结果的计数对象。

```js
const countBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
```

<details>
<summary>Examples</summary>

```js
countBy([6.1, 4.2, 6.3], Math.floor); // {4: 1, 6: 2}
countBy(['one', 'two', 'three'], 'length'); // {3: 2, 5: 1}
```

</details>

<br>[⬆ Back to top](#contents)

### countOccurrences

Counts the occurrences of a value in an array.

计算一个数组中某个`val`出现的次数。

Use `Array.prototype.reduce()` to increment a counter each time you encounter the specific value inside the array.

使用`Array.prototype.reduce()`来遍历数组，每次指定的值出现时增加计数。

```js
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
```

<details>
<summary>Examples</summary>

```js
countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
```

</details>

<br>[⬆ Back to top](#contents)

### deepFlatten

Deep flattens an array.

深度扁平化一个数组。（把多维的数组元素放到一个一维数组中）

Use recursion.
Use `Array.prototype.concat()` with an empty array (`[]`) and the spread operator (`...`) to flatten an array.
Recursively flatten each element that is an array.

使用递归。使用一个空数组(`[]`)的`Array.prototype.concat()`和展开操作符(`...`)来扁平化数组。递归每个数组类型的元素。

```js
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
```

<details>
<summary>Examples</summary>

```js
deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
```

</details>

<br>[⬆ Back to top](#contents)

### difference

Returns the difference between two arrays.

返回两个数组中不同的元素。

Create a `Set` from `b`, then use `Array.prototype.filter()` on `a` to only keep values not contained in `b`.

从数组`b`创建一个`Set`，然后对数组`a`使用`Array.prototype.filter()`来过滤出不在`b`中的元素。

```js
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};
```

<details>
<summary>Examples</summary>

```js
difference([1, 2, 3], [1, 2, 4]); // [3]
```

</details>

<br>[⬆ Back to top](#contents)

### differenceBy

Returns the difference between two arrays, after applying the provided function to each array element of both.

在对数组中元素都应用一个给定的函数的基础上，返回两个数组中不同的元素。

Create a `Set` by applying `fn` to each element in `b`, then use `Array.prototype.map()` to apply `fn` to each element in `a`, then `Array.prototype.filter()`

用`fn`作用域数组`b`中每个元素的结果创建一个`Set`，然后使用`Array.prototype.map()`对数组`a`中的每个元素应用`fn`，然后使用`Array.prototype.filter()`（过滤出不在之前set中的元素）。

```js
const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.map(fn).filter(el => !s.has(el));
};
```

<details>
<summary>Examples</summary>

```js
differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1]
differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [2]
```

</details>

<br>[⬆ Back to top](#contents)

### differenceWith

Filters out all values from an array for which the comparator function does not return `true`.

过滤出所有被比较函数`comp`判断为不相等的元素。

Use `Array.prototype.filter()` and `Array.prototype.findIndex()` to find the appropriate values.

使用`Array.prototype.filter()` 和 `Array.prototype.findIndex()`来找到符合条件的值。

```js
const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);
```

<details>
<summary>Examples</summary>

```js
differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); // [1, 1.2]
```

</details>

<br>[⬆ Back to top](#contents)

### drop

Returns a new array with `n` elements removed from the left.

返回一个删除前`n`个元素后的数组。

Use `Array.prototype.slice()` to remove the specified number of elements from the left.

使用`Array.prototype.slice()`来把指定数量的元素从数组左端删掉（返回剩余数组）。

```js
const drop = (arr, n = 1) => arr.slice(n);
```

<details>
<summary>Examples</summary>

```js
drop([1, 2, 3]); // [2,3]
drop([1, 2, 3], 2); // [3]
drop([1, 2, 3], 42); // []
```

</details>

<br>[⬆ Back to top](#contents)

### dropRight

Returns a new array with `n` elements removed from the right.

返回一个删除右边`n`个元素后的数组。

Use `Array.prototype.slice()` to remove the specified number of elements from the right.

使用`Array.prototype.slice()`来把指定数量的元素从数组右端删掉（返回剩余数组）

```js
const dropRight = (arr, n = 1) => arr.slice(0, -n);
```

<details>
<summary>Examples</summary>

```js
dropRight([1, 2, 3]); // [1,2]
dropRight([1, 2, 3], 2); // [1]
dropRight([1, 2, 3], 42); // []
```

</details>

<br>[⬆ Back to top](#contents)

### dropRightWhile

Removes elements from the end of an array until the passed function returns `true`. Returns the remaining elements in the array.

从数组尾部开始删掉给出的函数作用后返回`false`的元素，直到遇到第一个返回`true`的。返回数组的剩余元素。

Loop through the array, using `Array.prototype.slice()` to drop the last element of the array until the returned value from the function is `true`.
Returns the remaining elements.

遍历给出的数组，使用`Array.prototype.slice()`来去除数组尾部的元素，直到遇到给出的函数作用后返回`true`的元素。返回剩余元素。

```js
const dropRightWhile = (arr, func) => {
  let rightIndex = arr.length;
  while (rightIndex-- && !func(arr[rightIndex]));
  return arr.slice(0, rightIndex + 1); // 返回一个新的数组
};
```

<details>
<summary>Examples</summary>

```js
dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]
```

</details>

<br>[⬆ Back to top](#contents)

### dropWhile

Removes elements in an array until the passed function returns `true`. Returns the remaining elements in the array.

从数组中删掉给出的函数作用后返回`false`的元素（从头部开始），直到遇到第一个返回`true`的。返回数组的剩余元素。

Loop through the array, using `Array.prototype.slice()` to drop the first element of the array until the returned value from the function is `true`.
Returns the remaining elements.

遍历给出的数组，使用`Array.prototype.slice()`来去除数组头部的元素，直到遇到给出的函数作用后返回`true`的元素。返回剩余元素。

```js
const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};
```

<details>
<summary>Examples</summary>

```js
dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]
```

</details>

<br>[⬆ Back to top](#contents)

### everyNth

Returns every nth element in an array.

遍历数组，返回每第`nth`个数（隔`nth-1`取一个数，返回它们组成的数组）。

Use `Array.prototype.filter()` to create a new array that contains every nth element of a given array.

使用`Array.prototype.filter()`创建一个包含所给数组中每个第`nth`个数的数组。

```js
const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
```

<details>
<summary>Examples</summary>

```js
everyNth([1, 2, 3, 4, 5, 6], 2); // [ 2, 4, 6 ]
```

</details>

<br>[⬆ Back to top](#contents)

### filterFalsy

Filters out the falsy values in an array.

过滤掉一个数组中的假值。

Use `Array.prototype.filter()` to get an array containing only truthy values.

使用`Array.prototype.filter()`来获取一个只包含真值的数组。

```js
const filterFalsy = arr => arr.filter(Boolean);
```

<details>
<summary>Examples</summary>

```js
filterFalsy(['', true, {}, false, 'sample', 1, 0]); // [true, {}, 'sample', 1]
```

</details>

<br>[⬆ Back to top](#contents)

### filterNonUnique

Filters out the non-unique values in an array.

过滤掉数组中不唯一的数。

Use `Array.prototype.filter()` for an array containing only the unique values.

使用`Array.prototype.filter()`过滤出一个只包含唯一值得数组。

```js
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));
```

<details>
<summary>Examples</summary>

```js
filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]
```

</details>

<br>[⬆ Back to top](#contents)

### filterNonUniqueBy

Filters out the non-unique values in an array, based on a provided comparator function.

过滤掉数组中不唯一的数，唯一性通过给定的对比函数判断。

Use `Array.prototype.filter()` and `Array.prototype.every()` for an array containing only the unique values, based on the comparator function, `fn`.
The comparator function takes four arguments: the values of the two elements being compared and their indexes.

使用`Array.prototype.filter()` 和 `Array.prototype.every()`来创建一个只包含基于比较函数`fn`判定为唯一值的数组。比较函数有四个参数：两个比较的元素和他们的序号（index）。

```js
const filterNonUniqueBy = (arr, fn) =>
  arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)));
```

<details>
<summary>Examples</summary>

```js
filterNonUniqueBy(
  [
    { id: 0, value: 'a' },
    { id: 1, value: 'b' },
    { id: 2, value: 'c' },
    { id: 1, value: 'd' },
    { id: 0, value: 'e' }
  ],
  (a, b) => a.id == b.id
); // [ { id: 2, value: 'c' } ]
```

</details>

<br>[⬆ Back to top](#contents)

### findLast

Returns the last element for which the provided function returns a truthy value.

返回最后一个被给定函数作用后返回真值的元素。

Use `Array.prototype.filter()` to remove elements for which `fn` returns falsy values, `Array.prototype.pop()` to get the last one.

使用`Array.prototype.filter()`过滤掉`fn`作用后返回假值的元素，再使用`Array.prototype.pop()`来获取其中最后一个元素。

```js
const findLast = (arr, fn) => arr.filter(fn).pop();
```

<details>
<summary>Examples</summary>

```js
findLast([1, 2, 3, 4], n => n % 2 === 1); // 3
```

</details>

<br>[⬆ Back to top](#contents)

### findLastIndex

Returns the index of the last element for which the provided function returns a truthy value.

返回被给定函数作用后返回真值的元素的序号。

Use `Array.prototype.map()` to map each element to an array with its index and value.
Use `Array.prototype.filter()` to remove elements for which `fn` returns falsy values, `Array.prototype.pop()` to get the last one.

使用`Array.prototype.map()`来遍历数组中每个元素的序号和值。使用`Array.prototype.filter()`来过滤掉`fn`作用后返回假值的元素，再使用`Array.prototype.pop()`来获取其中最后一个元素。

```js
const findLastIndex = (arr, fn) =>
  arr
    .map((val, i) => [i, val])
    .filter(([i, val]) => fn(val, i, arr))
    .pop()[0];
```

<details>
<summary>Examples</summary>

```js
findLastIndex([1, 2, 3, 4], n => n % 2 === 1); // 2 (index of the value 3)
```

</details>

<br>[⬆ Back to top](#contents)

### flatten

Flattens an array up to the specified depth.

按照给定的最大深度扁平化数组。

Use recursion, decrementing `depth` by 1 for each level of depth.
Use `Array.prototype.reduce()` and `Array.prototype.concat()` to merge elements or arrays.
Base case, for `depth` equal to `1` stops recursion.
Omit the second argument, `depth` to flatten only to a depth of `1` (single flatten).

使用递归，每一层递归`depth`自减1。使用`Array.prototype.reduce()`和`Array.prototype.concat()`来合并元素列表或数组。最基本的例子——`depth`为1时就停止递归。如果不传第二个参数，`depth`默认为1(单维度的扁平化)。

```js
const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);
```

<details>
<summary>Examples</summary>

```js
flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]
```

</details>

<br>[⬆ Back to top](#contents)

### forEachRight

Executes a provided function once for each array element, starting from the array's last element.

从数组中最后一个元素开始，对数组中每个元素执行给定的函数。

Use `Array.prototype.slice(0)` to clone the given array, `Array.prototype.reverse()` to reverse it and `Array.prototype.forEach()` to iterate over the reversed array.

使用`Array.prototype.slice(0)`来克隆给定的数组，使用`Array.prototype.reverse()`来翻转数组，使用`Array.prototype.forEach()`遍历翻转后的数组。

```js
const forEachRight = (arr, callback) =>
  arr
    .slice(0)
    .reverse()
    .forEach(callback);
```

<details>
<summary>Examples</summary>

```js
forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'
```

</details>

<br>[⬆ Back to top](#contents)

### groupBy

Groups the elements of an array based on the given function.

根据给定的函数对数组中的元素分组。

Use `Array.prototype.map()` to map the values of an array to a function or property name.
Use `Array.prototype.reduce()` to create an object, where the keys are produced from the mapped results.

使用`Array.prototype.map()`来遍历数组，获取应用给定的函数或者获取指定的属性值。使用`Array.prototype.reduce()`来创建一个对象，它的键名是从映射结果中获取的。

```js
const groupBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {
    acc[val] = (acc[val] || []).concat(arr[i]);
    return acc;
  }, {});
```

<details>
<summary>Examples</summary>

```js
groupBy([6.1, 4.2, 6.3], Math.floor); // {4: [4.2], 6: [6.1, 6.3]}
groupBy(['one', 'two', 'three'], 'length'); // {3: ['one', 'two'], 5: ['three']}
```

</details>

<br>[⬆ Back to top](#contents)

### head

Returns the head of a list.

返回列表的头部。

Use `arr[0]` to return the first element of the passed array.

使用`arr[0]`返回传入数组的第一个元素。

```js
const head = arr => arr[0];
```

<details>
<summary>Examples</summary>

```js
head([1, 2, 3]); // 1
```

</details>

<br>[⬆ Back to top](#contents)

### indexOfAll

Returns all indices of `val` in an array.
If `val` never occurs, returns `[]`.

返回数组中所有`val`的序号列表。如果`val`没有出现，返回`[]`。

Use `Array.prototype.reduce()` to loop over elements and store indices for matching elements.
Return the array of indices.

使用`Array.prototype.reduce()`来遍历元素并把序号存到相应的列表中。返回序号数组。

```js
const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);
```

<details>
<summary>Examples</summary>

```js
indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
indexOfAll([1, 2, 3], 4); // []
```

</details>

<br>[⬆ Back to top](#contents)

### initial

Returns all the elements of an array except the last one.

返回除最后一个元素的数组。

Use `arr.slice(0,-1)` to return all but the last element of the array.

使用`arr.slice(0,-1)`来返回排除了最后一个元素的数组。

```js
const initial = arr => arr.slice(0, -1);
```

<details>
<summary>Examples</summary>

```js
initial([1, 2, 3]); // [1,2]
```

</details>

<br>[⬆ Back to top](#contents)

### initialize2DArray

Initializes a 2D array of given width and height and value.

使用给定的宽、高和值初始化一个二维数组。

Use `Array.prototype.map()` to generate h rows where each is a new array of size w initialize with value. If the value is not provided, default to `null`.

使用`Array.prototype.map()`创建`h`行，每行都是一个使用`val`初始化的长度为`w`的数组。如果`val`不传，默认为`null`。

```js
const initialize2DArray = (w, h, val = null) =>
  Array.from({ length: h }).map(() => Array.from({ length: w }).fill(val));
```

<details>
<summary>Examples</summary>

```js
initialize2DArray(2, 2, 0); // [[0,0], [0,0]]
```

</details>

<br>[⬆ Back to top](#contents)

### initializeArrayWithRange

Initializes an array containing the numbers in the specified range where `start` and `end` are inclusive with their common difference `step`.

使用`start`到`end`范围内以`step`为步进的数字列表初始化一个数组。

Use `Array.from()` to create an array of the desired length, `(end - start + 1)/step`, and a map function to fill it with the desired values in the given range.
You can omit `start` to use a default value of `0`.
You can omit `step` to use a default value of `1`.

使用`Array.from()`创建一个期望长度`(end - start + 1)/step`的数组，并用使用指定范围内的值填充它。`start`默认值为`0`，`step`默认值为`1`。

```js
const initializeArrayWithRange = (end, start = 0, step = 1) =>
  Array.from({ length: Math.ceil((end - start + 1) / step) }, (v, i) => i * step + start);
```

<details>
<summary>Examples</summary>

```js
initializeArrayWithRange(5); // [0,1,2,3,4,5]
initializeArrayWithRange(7, 3); // [3,4,5,6,7]
initializeArrayWithRange(9, 0, 2); // [0,2,4,6,8]
```

</details>

<br>[⬆ Back to top](#contents)

### initializeArrayWithRangeRight

Initializes an array containing the numbers in the specified range (in reverse) where `start` and `end` are inclusive with their common difference `step`.

初始化一个包含`start`到`end`范围内以`step`为步进的数字列表的数组（倒序的）。

Use `Array.from(Math.ceil((end+1-start)/step))` to create an array of the desired length(the amounts of elements is equal to `(end-start)/step` or `(end+1-start)/step` for inclusive end), `Array.prototype.map()` to fill with the desired values in a range.
You can omit `start` to use a default value of `0`.
You can omit `step` to use a default value of `1`.

使用`Array.from(Math.ceil((end+1-start)/step))`来创建一个预期长度的数组（元素个数为`(end-start)/step`或者`(end+1-start)/step`）,使用`Array.prototype.map()`来用范围内期望的数填充它。`start`默认值为`0`，`step`默认值为`1`。

```js
const initializeArrayWithRangeRight = (end, start = 0, step = 1) =>
  Array.from({ length: Math.ceil((end + 1 - start) / step) }).map(
    (v, i, arr) => (arr.length - i - 1) * step + start
  );
```

<details>
<summary>Examples</summary>

```js
initializeArrayWithRangeRight(5); // [5,4,3,2,1,0]
initializeArrayWithRangeRight(7, 3); // [7,6,5,4,3]
initializeArrayWithRangeRight(9, 0, 2); // [8,6,4,2,0]
```

</details>

<br>[⬆ Back to top](#contents)

### initializeArrayWithValues

Initializes and fills an array with the specified values.

用给定的值初始化并填充一个数组。

Use `Array(n)` to create an array of the desired length, `fill(v)` to fill it with the desired values.
You can omit `val` to use a default value of `0`.

使用`Array(n)`来创建一个期望长度的数组，用`fill(v)`来给它填充期望的值。`val`不传，则使用默认值`0`。

```js
const initializeArrayWithValues = (n, val = 0) => Array(n).fill(val);
```

<details>
<summary>Examples</summary>

```js
initializeArrayWithValues(5, 2); // [2, 2, 2, 2, 2]
```

</details>

<br>[⬆ Back to top](#contents)

### initializeNDArray

Create a n-dimensional array with given value.

使用给定值创建一个n维数组。

Use recursion.
Use `Array.prototype.map()` to generate rows where each is a new array initialized using `initializeNDArray`.

使用递归。使用`Array.prototype.map()`来生成由`initializeNDArray`初始化的每一行。

```js
const initializeNDArray = (val, ...args) =>
  args.length === 0
    ? val
    : Array.from({ length: args[0] }).map(() => initializeNDArray(val, ...args.slice(1)));
```

<details>
<summary>Examples</summary>

```js
initializeNDArray(1, 3); // [1,1,1]
initializeNDArray(5, 2, 2, 2); // [[[5,5],[5,5]],[[5,5],[5,5]]]
```

</details>

<br>[⬆ Back to top](#contents)

### intersection

Returns a list of elements that exist in both arrays.

返回两个数组公共元素组成的元素列表。

Create a `Set` from `b`, then use `Array.prototype.filter()` on `a` to only keep values contained in `b`.

从`b`创建一个`Set`，然后使用`Array.prototype.filter()`来让`a`只保留存在`b`中的元素。

```js
const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};
```

<details>
<summary>Examples</summary>

```js
intersection([1, 2, 3], [4, 3, 2]); // [2, 3]
```

</details>

<br>[⬆ Back to top](#contents)

### intersectionBy

Returns a list of elements that exist in both arrays, after applying the provided function to each array element of both.

返回两个数组公共元素组成的元素列表，通过给定的函数`fn`来判断元素是否相同。

Create a `Set` by applying `fn` to all elements in `b`, then use `Array.prototype.filter()` on `a` to only keep elements, which produce values contained in `b` when `fn` is applied to them.

对`b`中所有元素应用函数`fn`，用结果创建一个`Set`，然后使用`Array.prototype.filter()`来让`a`只保留`b`应用`fn`的结果中的元素。

```js
const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => s.has(fn(x)));
};
```

<details>
<summary>Examples</summary>

```js
intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]
```

</details>

<br>[⬆ Back to top](#contents)

### intersectionWith

Returns a list of elements that exist in both arrays, using a provided comparator function.

返回两个数组公共元素组成的元素列表，通过给定的比较函数`comp`来判断元素是否相同。

Use `Array.prototype.filter()` and `Array.prototype.findIndex()` in combination with the provided comparator to determine intersecting values.

使用`Array.prototype.filter()` 和 `Array.prototype.findIndex()`，结合给定的比较函数判断是否公共值。

```js
const intersectionWith = (a, b, comp) => a.filter(x => b.findIndex(y => comp(x, y)) !== -1);
```

<details>
<summary>Examples</summary>

```js
intersectionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)); // [1.5, 3, 0]
```

</details>

<br>[⬆ Back to top](#contents)

### isSorted

Returns `1` if the array is sorted in ascending order, `-1` if it is sorted in descending order or `0` if it is not sorted.

如果数组正序，返回`1`；如果倒序，返回`-1`；如果没有排序，则返回`0`。

Calculate the ordering `direction` for the first two elements.
Use `Object.entries()` to loop over array objects and compare them in pairs.
Return `0` if the `direction` changes or the `direction` if the last element is reached.

通过前两个元素计算出顺序`direction`。使用`Object.entries()`来遍历数组对象，相邻元素成对比较顺序。如果`direction`变化了，整体返回`0`；否则遍历完最后一个元素后整体把`direction`返回作为结果。

```js
const isSorted = arr => {
  let direction = -(arr[0] - arr[1]);
  for (let [i, val] of arr.entries()) {
    direction = !direction ? -(arr[i - 1] - arr[i]) : direction;
    if (i === arr.length - 1) return !direction ? 0 : direction;
    else if ((val - arr[i + 1]) * direction > 0) return 0;
  }
};
```

<details>
<summary>Examples</summary>

```js
isSorted([0, 1, 2, 2]); // 1
isSorted([4, 3, 2]); // -1
isSorted([4, 3, 5]); // 0
```

</details>

<br>[⬆ Back to top](#contents)

### join

Joins all elements of an array into a string and returns this string.
Uses a separator and an end separator.

把数组中的所有元素连结成一个字符串并返回。可以指定分隔符`separator`和结束符号`end`。

Use `Array.prototype.reduce()` to combine elements into a string.
Omit the second argument, `separator`, to use a default separator of `','`.
Omit the third argument, `end`, to use the same value as `separator` by default.

使用 `Array.prototype.reduce()`把元素列表结合成一个字符串。如果不传第二个参数`separator`，默认值为`','`；如果不传第三个参数`end`，默认值为`separator`的值。

```js
const join = (arr, separator = ',', end = separator) =>
  arr.reduce(
    (acc, val, i) =>
      i === arr.length - 2
        ? acc + val + end
        : i === arr.length - 1
          ? acc + val
          : acc + val + separator,
    ''
  );
```

<details>
<summary>Examples</summary>

```js
join(['pen', 'pineapple', 'apple', 'pen'], ',', '&'); // "pen,pineapple,apple&pen"
join(['pen', 'pineapple', 'apple', 'pen'], ','); // "pen,pineapple,apple,pen"
join(['pen', 'pineapple', 'apple', 'pen']); // "pen,pineapple,apple,pen"
```

</details>

<br>[⬆ Back to top](#contents)

### JSONtoCSV ![advanced](/advanced.svg)

Converts an array of objects to a comma-separated values (CSV) string that contains only the `columns` specified.

把一个对象数组转换为只包含`columns`中的列（对应objects中的属性名）的点分(CSV)字符串。

Use `Array.prototype.join(delimiter)` to combine all the names in `columns` to create the first row.
Use `Array.prototype.map()` and `Array.prototype.reduce()` to create a row for each object, substituting non-existent values with empty strings and only mapping values in `columns`.
Use `Array.prototype.join('\n')` to combine all rows into a string.
Omit the third argument, `delimiter`, to use a default delimiter of `,`.

使用`Array.prototype.join(delimiter)`来连结`columns`中所有属性名来创建第一行。使用`Array.prototype.map()`和`Array.prototype.reduce()`来为每个对象创建一行，不存在的值使用空字符串替代。使用`Array.prototype.join('\n')`来把所有上面的行连结成字符串。如果不传第三个参数`delimiter`，默认值为`,`。

```js
const JSONtoCSV = (arr, columns, delimiter = ',') =>
  [
    columns.join(delimiter),
    ...arr.map(obj =>
      columns.reduce(
        (acc, key) => `${acc}${!acc.length ? '' : delimiter}"${!obj[key] ? '' : obj[key]}"`,
        ''
      )
    )
  ].join('\n');
```

<details>
<summary>Examples</summary>

```js
JSONtoCSV([{ a: 1, b: 2 }, { a: 3, b: 4, c: 5 }, { a: 6 }, { b: 7 }], ['a', 'b']); // 'a,b\n"1","2"\n"3","4"\n"6",""\n"","7"'
JSONtoCSV([{ a: 1, b: 2 }, { a: 3, b: 4, c: 5 }, { a: 6 }, { b: 7 }], ['a', 'b'], ';'); // 'a;b\n"1";"2"\n"3";"4"\n"6";""\n"";"7"'
```

</details>

<br>[⬆ Back to top](#contents)

### last

Returns the last element in an array.

返回数组中最后一个元素。

Use `arr.length - 1` to compute the index of the last element of the given array and returning it.

使用`arr.length - 1`来计算给定数组的最后一个元素的序号并返回它的值。

```js
const last = arr => arr[arr.length - 1];
```

<details>
<summary>Examples</summary>

```js
last([1, 2, 3]); // 3
```

</details>

<br>[⬆ Back to top](#contents)

### longestItem

Takes any number of iterable objects or objects with a `length` property and returns the longest one.
If multiple objects have the same length, the first one will be returned.
Returns `undefined` if no arguments are provided.

接收任意数量的可迭代对象（或有`length`属性的对象）并返回最长的一个。如果其中多个对象有相同的长度，将返回第一个。如果没有传入参数，返回`undefined`。

Use `Array.prototype.reduce()`, comparing the `length` of objects to find the longest one.

使用`Array.prototype.reduce()`来比较项目的`length`来找到最长的一个。

```js
const longestItem = (...vals) => vals.reduce((a, x) => (x.length > a.length ? x : a));
```

<details>
<summary>Examples</summary>

```js
longestItem('this', 'is', 'a', 'testcase'); // 'testcase'
longestItem(...['a', 'ab', 'abc']); // 'abc'
longestItem(...['a', 'ab', 'abc'], 'abcd'); // 'abcd'
longestItem([1, 2, 3], [1, 2], [1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5]
longestItem([1, 2, 3], 'foobar'); // 'foobar'
```

</details>

<br>[⬆ Back to top](#contents)

### mapObject ![advanced](/advanced.svg)

Maps the values of an array to an object using a function, where the key-value pairs consist of the stringified value as the key and the mapped value.

应用一个函数把数组中的值映射到一个以原始值作为key、函数结果作为value的key-value对象中。

Use an anonymous inner function scope to declare an undefined memory space, using closures to store a return value. Use a new `Array` to store the array with a map of the function over its data set and a comma operator to return a second step, without needing to move from one context to another (due to closures and order of operations).

使用一个匿名的内部函数作用域来声明一个未定义的内存空间，使用闭包来保存返回值。使用一个新的`Array`来存储函数作用数组后的结果，使用了逗号分隔符在不变更context（上下文）的情况下把第二步的操作结果返回（取决于闭包和操作符的顺序）。

```js
const mapObject = (arr, fn) =>
  (a => (
    (a = [arr, arr.map(fn)]), a[0].reduce((acc, val, ind) => ((acc[val] = a[1][ind]), acc), {})
  ))();
```

<details>
<summary>Examples</summary>

```js
const squareIt = arr => mapObject(arr, a => a * a);
squareIt([1, 2, 3]); // { 1: 1, 2: 4, 3: 9 }
```

</details>

<br>[⬆ Back to top](#contents)

### maxN

Returns the `n` maximum elements from the provided array.
If `n` is greater than or equal to the provided array's length, then return the original array (sorted in descending order).

返回给定数组中最大的`n`个数。如果`n`大于等于给定数组的长度，则返回原始数组（倒序排列）。

Use `Array.prototype.sort()` combined with the spread operator (`...`) to create a shallow clone of the array and sort it in descending order.
Use `Array.prototype.slice()` to get the specified number of elements.
Omit the second argument, `n`, to get a one-element array.

使用`Array.prototype.sort()`结合展开操作符(`...`)来创建一个给定数组的浅拷贝，然后对它倒序排列。使用`Array.prototype.slice()`来获取元素列表中指定数目的元素。如果不传第二个参数`n`，则只获取一个元素。

```js
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);
```

<details>
<summary>Examples</summary>

```js
maxN([1, 2, 3]); // [3]
maxN([1, 2, 3], 2); // [3,2]
```

</details>

<br>[⬆ Back to top](#contents)

### minN

Returns the `n` minimum elements from the provided array.
If `n` is greater than or equal to the provided array's length, then return the original array (sorted in ascending order).

返回给定数组中最小的`n`个数。如果`n`大于等于给定数组的长度，则返回原始数组（正序排列）。

Use `Array.prototype.sort()` combined with the spread operator (`...`) to create a shallow clone of the array and sort it in ascending order.
Use `Array.prototype.slice()` to get the specified number of elements.
Omit the second argument, `n`, to get a one-element array.

使用`Array.prototype.sort()`结合展开操作符(`...`)来创建一个给定数组的浅拷贝，然后对它正序排列。使用`Array.prototype.slice()`来获取元素列表中指定数目的元素。如果不传第二个参数`n`，则只获取一个元素。

```js
const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);
```

<details>
<summary>Examples</summary>

```js
minN([1, 2, 3]); // [1]
minN([1, 2, 3], 2); // [1,2]
```

</details>

<br>[⬆ Back to top](#contents)

### none

Returns `true` if the provided predicate function returns `false` for all elements in a collection, `false` otherwise.

如果给定集合中所有所有元素应用给定的断言函数都返回`false`，则整体返回`true`；否则返回`false`。

Use `Array.prototype.some()` to test if any elements in the collection return `true` based on `fn`.
Omit the second argument, `fn`, to use `Boolean` as a default.

使用`Array.prototype.some()`来测试集合中是否有应用`fn`后返回`true`的元素。如果不传第二个参数，则使用`Boolean`作为默认值。

```js
const none = (arr, fn = Boolean) => !arr.some(fn);
```

<details>
<summary>Examples</summary>

```js
none([0, 1, 3, 0], x => x == 2); // true
none([0, 0, 0]); // true
```

</details>

<br>[⬆ Back to top](#contents)

### nthElement

Returns the nth element of an array.

返回数组中第nth个元素。

Use `Array.prototype.slice()` to get an array containing the nth element at the first place.
If the index is out of bounds, return `undefined`.
Omit the second argument, `n`, to get the first element of the array.

使用`Array.prototype.slice()`来获得一个把第nth个元素放在开头的新数组。如果index超出边界，返回`undefined`。如果不传第二个参数`n`，则返回数组的第一个元素。

```js
const nthElement = (arr, n = 0) => (n === -1 ? arr.slice(n) : arr.slice(n, n + 1))[0];
```

<details>
<summary>Examples</summary>

```js
nthElement(['a', 'b', 'c'], 1); // 'b'
nthElement(['a', 'b', 'b'], -3); // 'a'
```

</details>

<br>[⬆ Back to top](#contents)

### offset

Moves the specified amount of elements to the end of the array.

移除数组尾部指定个数的元素。

Use `Array.prototype.slice()` twice to get the elements after the specified index and the elements before that.
Use the spread operator(`...`) to combine the two into one array.
If `offset` is negative, the elements will be moved from end to start.

使用2次`Array.prototype.slice()`来获取指定序号后面的和前面的元素列表。使用展开操作符(`...`) 来把两个列表合一。如果`offset`是负数，移除的元素则从后向前数。

```js
const offset = (arr, offset) => [...arr.slice(offset), ...arr.slice(0, offset)];
```

<details>
<summary>Examples</summary>

```js
offset([1, 2, 3, 4, 5], 2); // [3, 4, 5, 1, 2]
offset([1, 2, 3, 4, 5], -2); // [4, 5, 1, 2, 3]
```

</details>

<br>[⬆ Back to top](#contents)

### partition

Groups the elements into two arrays, depending on the provided function's truthiness for each element.

基于给定的函数对于每个元素的真值，把元素分为两组。

Use `Array.prototype.reduce()` to create an array of two arrays.
Use `Array.prototype.push()` to add elements for which `fn` returns `true` to the first array and elements for which `fn` returns `false` to the second one.

使用`Array.prototype.reduce()`来创建一个包含两个数组的新数组。使用`Array.prototype.push()`把`fn`作用后返回`true`的元素添加到第一个数组中，返回`false`的元素添加到第二个数组中。

```js
const partition = (arr, fn) =>
  arr.reduce(
    (acc, val, i, arr) => {
      acc[fn(val, i, arr) ? 0 : 1].push(val);
      return acc;
    },
    [[], []]
  );
```

<details>
<summary>Examples</summary>

```js
const users = [{ user: 'barney', age: 36, active: false }, { user: 'fred', age: 40, active: true }];
partition(users, o => o.active); // [[{ 'user': 'fred',    'age': 40, 'active': true }],[{ 'user': 'barney',  'age': 36, 'active': false }]]
```

</details>

<br>[⬆ Back to top](#contents)

### permutations ![advanced](/advanced.svg)

⚠️ **WARNING**: This function's execution time increases exponentially with each array element. Anything more than 8 to 10 entries will cause your browser to hang as it tries to solve all the different combinations.

⚠️ **WARNING**: 本函数的执行时间随着数组元素个数指数级增长。任何超过8~10个元素的数组会导致浏览器尝因试不同的组合而导致挂起（大量同步计算导致无响应）。

Generates all permutations of an array's elements (contains duplicates).

生成数组中元素的所有排列。（包含重复组合）

Use recursion.
For each element in the given array, create all the partial permutations for the rest of its elements.
Use `Array.prototype.map()` to combine the element with each partial permutation, then `Array.prototype.reduce()` to combine all permutations in one array.
Base cases are for array `length` equal to `2` or `1`.

使用递归。对给定数组中每个元素，创建除它以外所有元素的排列。使用`Array.prototype.map()`来把这个元素和每个剩余部分的排列结合，然后使用`Array.prototype.reduce()`把所有排列结合成一个数组。

```js
const permutations = arr => {
  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
  return arr.reduce(
    (acc, item, i) =>
      acc.concat(
        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [item, ...val])
      ),
    []
  );
};
```

<details>
<summary>Examples</summary>

```js
permutations([1, 33, 5]); // [ [ 1, 33, 5 ], [ 1, 5, 33 ], [ 33, 1, 5 ], [ 33, 5, 1 ], [ 5, 1, 33 ], [ 5, 33, 1 ] ]
```

</details>

<br>[⬆ Back to top](#contents)

### pull

Mutates the original array to filter out the values specified.

从一个原始数组中过滤掉给定的值（直接改变原始数组）。

Use `Array.prototype.filter()` and `Array.prototype.includes()` to pull out the values that are not needed.
Use `Array.prototype.length = 0` to mutate the passed in an array by resetting it's length to zero and `Array.prototype.push()` to re-populate it with only the pulled values.

使用`Array.prototype.filter()`和`Array.prototype.includes()`把不需要的值去掉。使用`Array.prototype.length = 0`，通过把数组的长度置为0重置传入的值，再使用`Array.prototype.push()`，用提取出来的值来重新建立数组。

_(For a snippet that does not mutate the original array see [`without`](#without))_

_(不改变原始数组的代码片段参见 [`without`](#without))_

```js
const pull = (arr, ...args) => {
  let argState = Array.isArray(args[0]) ? args[0] : args;
  let pulled = arr.filter((v, i) => !argState.includes(v));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
};
```

<details>
<summary>Examples</summary>

```js
let myArray = ['a', 'b', 'c', 'a', 'b', 'c'];
pull(myArray, 'a', 'c'); // myArray = [ 'b', 'b' ]
```

</details>

<br>[⬆ Back to top](#contents)

### pullAtIndex ![advanced](/advanced.svg)

Mutates the original array to filter out the values at the specified indexes.

从一个原始数组中过滤掉给定的序号的元素（直接改变原始数组）。

Use `Array.prototype.filter()` and `Array.prototype.includes()` to pull out the values that are not needed.
Use `Array.prototype.length = 0` to mutate the passed in an array by resetting it's length to zero and `Array.prototype.push()` to re-populate it with only the pulled values.
Use `Array.prototype.push()` to keep track of pulled values.

使用`Array.prototype.filter()`和`Array.prototype.includes()`去掉不需要的值。使用`Array.prototype.length = 0`，通过把数组的长度置为0重置传入的值，再使用`Array.prototype.push()`，用提取出来的值来重新建立数组。使用`Array.prototype.push()`记录提取出来的值。

```js
const pullAtIndex = (arr, pullArr) => {
  let removed = [];
  let pulled = arr
    .map((v, i) => (pullArr.includes(i) ? removed.push(v) : v))
    .filter((v, i) => !pullArr.includes(i));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
  return removed;
};
```

<details>
<summary>Examples</summary>

```js
let myArray = ['a', 'b', 'c', 'd'];
let pulled = pullAtIndex(myArray, [1, 3]); // myArray = [ 'a', 'c' ] , pulled = [ 'b', 'd' ]
```

</details>

<br>[⬆ Back to top](#contents)

### pullAtValue ![advanced](/advanced.svg)

Mutates the original array to filter out the values specified. Returns the removed elements.

改变原始数组，过滤掉指定的值。返回被过滤掉的元素。

Use `Array.prototype.filter()` and `Array.prototype.includes()` to pull out the values that are not needed.
Use `Array.prototype.length = 0` to mutate the passed in an array by resetting it's length to zero and `Array.prototype.push()` to re-populate it with only the pulled values.
Use `Array.prototype.push()` to keep track of pulled values.

使用`Array.prototype.filter()`和`Array.prototype.includes()`去掉不需要的值。使用`Array.prototype.length = 0`，通过把数组的长度置为0重置传入的值；再使用`Array.prototype.push()`，用提取出来的值来重新建立数组。使用`Array.prototype.push()`记录提取出来的值。

```js
const pullAtValue = (arr, pullArr) => {
  let removed = [],
    pushToRemove = arr.forEach((v, i) => (pullArr.includes(v) ? removed.push(v) : v)),
    mutateTo = arr.filter((v, i) => !pullArr.includes(v));
  arr.length = 0;
  mutateTo.forEach(v => arr.push(v));
  return removed;
};
```

<details>
<summary>Examples</summary>

```js
let myArray = ['a', 'b', 'c', 'd'];
let pulled = pullAtValue(myArray, ['b', 'd']); // myArray = [ 'a', 'c' ] , pulled = [ 'b', 'd' ]
```

</details>

<br>[⬆ Back to top](#contents)

### pullBy ![advanced](/advanced.svg)

Mutates the original array to filter out the values specified, based on a given iterator function.

改变原始数组，基于给定的遍历函数来过滤掉给定的值。

Check if the last argument provided in a function.
Use `Array.prototype.map()` to apply the iterator function `fn` to all array elements.
Use `Array.prototype.filter()` and `Array.prototype.includes()` to pull out the values that are not needed.
Use `Array.prototype.length = 0` to mutate the passed in an array by resetting it's length to zero and `Array.prototype.push()` to re-populate it with only the pulled values.

检查最后一个参数是否是函数类型。使用`Array.prototype.map()`来对数组中所有元素遍历调用`fn`。使用`Array.prototype.filter()` 和 `Array.prototype.includes()`来去除掉不需要的值。使用`Array.prototype.length = 0`，通过把数组的长度置为0重置传入的值；再使用`Array.prototype.push()`，用提取出来的值来重新建立数组。

```js
const pullBy = (arr, ...args) => {
  const length = args.length;
  let fn = length > 1 ? args[length - 1] : undefined;
  fn = typeof fn == 'function' ? (args.pop(), fn) : undefined;
  let argState = (Array.isArray(args[0]) ? args[0] : args).map(val => fn(val));
  let pulled = arr.filter((v, i) => !argState.includes(fn(v)));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
};
```

<details>
<summary>Examples</summary>

```js
var myArray = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];
pullBy(myArray, [{ x: 1 }, { x: 3 }], o => o.x); // myArray = [{ x: 2 }]
```

</details>

<br>[⬆ Back to top](#contents)

### reducedFilter

Filter an array of objects based on a condition while also filtering out unspecified keys.

根据条件过滤一个对象数组，并把元素对象的没有指定的属性过滤掉（不在`keys`中的属性）。

Use `Array.prototype.filter()` to filter the array based on the predicate `fn` so that it returns the objects for which the condition returned a truthy value.
On the filtered array, use `Array.prototype.map()` to return the new object using `Array.prototype.reduce()` to filter out the keys which were not supplied as the `keys` argument.

使用`Array.prototype.filter()`根据断言函数`fn`来过滤数组，返回条件为真值的对象。再对过滤后的数组，使用`Array.prototype.map()`来过滤掉`keys`参数中没有给出的属性。

```js
const reducedFilter = (data, keys, fn) =>
  data.filter(fn).map(el =>
    keys.reduce((acc, key) => {
      acc[key] = el[key];
      return acc;
    }, {})
  );
```

<details>
<summary>Examples</summary>

```js
const data = [
  {
    id: 1,
    name: 'john',
    age: 24
  },
  {
    id: 2,
    name: 'mike',
    age: 50
  }
];

reducedFilter(data, ['id', 'name'], item => item.age > 24); // [{ id: 2, name: 'mike'}]
```

</details>

<br>[⬆ Back to top](#contents)

### reduceSuccessive

Applies a function against an accumulator and each element in the array (from left to right), returning an array of successively reduced values.

对一个累加器和数组中每一个元素应用给定函数（从左向右），返回每一步累加值组成的数组。

Use `Array.prototype.reduce()` to apply the given function to the given array, storing each new result.

使用`Array.prototype.reduce()`来对给定的数组应用给定的函数，存储每一次新的累加结果。

```js
const reduceSuccessive = (arr, fn, acc) =>
  arr.reduce((res, val, i, arr) => (res.push(fn(res.slice(-1)[0], val, i, arr)), res), [acc]);
```

<details>
<summary>Examples</summary>

```js
reduceSuccessive([1, 2, 3, 4, 5, 6], (acc, val) => acc + val, 0); // [0, 1, 3, 6, 10, 15, 21]
```

</details>

<br>[⬆ Back to top](#contents)

### reduceWhich

Returns the minimum/maximum value of an array, after applying the provided function to set comparing rule.

使用给定的函数作为比较规则，返回一个数组的最小值/最大值。

Use `Array.prototype.reduce()` in combination with the `comparator` function to get the appropriate element in the array.
You can omit the second parameter, `comparator`, to use the default one that returns the minimum element in the array.

使用`Array.prototype.reduce()`结合`comparator`函数来获取数组中合适的元素。如果不传第二个参数`comparator`，使用一个返回数组中最小值的函数作为默认值。

```js
const reduceWhich = (arr, comparator = (a, b) => a - b) =>
  arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));
```

<details>
<summary>Examples</summary>

```js
reduceWhich([1, 3, 2]); // 1
reduceWhich([1, 3, 2], (a, b) => b - a); // 3
reduceWhich(
  [{ name: 'Tom', age: 12 }, { name: 'Jack', age: 18 }, { name: 'Lucy', age: 9 }],
  (a, b) => a.age - b.age
); // {name: "Lucy", age: 9}
```

</details>

<br>[⬆ Back to top](#contents)

### reject

Takes a predicate and array, like `Array.prototype.filter()`, but only keeps `x` if `pred(x) === false`.

接受一个断言函数和数组，有点类似`Array.prototype.filter()`，但在`pred(x) === false`时保留`x`（就是过滤掉pred(x)为真的`x`）。

```js
const reject = (pred, array) => array.filter((...args) => !pred(...args));
```

<details>
<summary>Examples</summary>

```js
reject(x => x % 2 === 0, [1, 2, 3, 4, 5]); // [1, 3, 5]
reject(word => word.length > 4, ['Apple', 'Pear', 'Kiwi', 'Banana']); // ['Pear', 'Kiwi']
```

</details>

<br>[⬆ Back to top](#contents)

### remove

Removes elements from an array for which the given function returns `false`.

把数组中给定函数作用后返回`false`的元素删除。

Use `Array.prototype.filter()` to find array elements that return truthy values and `Array.prototype.reduce()` to remove elements using `Array.prototype.splice()`.
The `func` is invoked with three arguments (`value, index, array`).

使用`Array.prototype.filter()`来找到数组中的返回真值的元素，并使用`Array.prototype.reduce()`和`Array.prototype.splice()`去除掉它。`func`回调支持三个参数(`value, index, array`)。

```js
const remove = (arr, func) =>
  Array.isArray(arr)
    ? arr.filter(func).reduce((acc, val) => {
      arr.splice(arr.indexOf(val), 1);
      return acc.concat(val);
    }, [])
    : [];
```

<details>
<summary>Examples</summary>

```js
remove([1, 2, 3, 4], n => n % 2 === 0); // [2, 4]
```

</details>

<br>[⬆ Back to top](#contents)

### sample

Returns a random element from an array.

从数组中返回一个随机元素。

Use `Math.random()` to generate a random number, multiply it by `length` and round it off to the nearest whole number using `Math.floor()`.
This method also works with strings.

使用`Math.random()`生成一个随机数，把它乘以数组长度 `length`，并使用`Math.floor()`来取得不大于相乘结果的最接近整数。这个方法也适用于字符串。

```js
const sample = arr => arr[Math.floor(Math.random() * arr.length)];
```

<details>
<summary>Examples</summary>

```js
sample([3, 7, 9, 11]); // 9
```

</details>

<br>[⬆ Back to top](#contents)

### sampleSize

Gets `n` random elements at unique keys from `array` up to the size of `array`.

从数组`array`中随机的不重复的获取最多`n` 个元素（`array`的长度个）。

Shuffle the array using the [Fisher-Yates algorithm](https://github.com/30-seconds/30-seconds-of-code#shuffle).
Use `Array.prototype.slice()` to get the first `n` elements.
Omit the second argument, `n` to get only one element at random from the array.

使用Fisher-Yates算法[Fisher-Yates algorithm](https://github.com/30-seconds/30-seconds-of-code#shuffle)来对数组洗牌。使用`Array.prototype.slice()`来获取前`n`个元素。如果第二个元素`n`不传，则只随机的从数组中获取一个元素。

```js
const sampleSize = ([...arr], n = 1) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
};
```

<details>
<summary>Examples</summary>

```js
sampleSize([1, 2, 3], 2); // [3,1]
sampleSize([1, 2, 3], 4); // [2,3,1]
```

</details>

<br>[⬆ Back to top](#contents)

### shank

Has the same functionality as [`Array.prototype.splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice), but returning a new array instead of mutating the original array.

和[`Array.prototype.splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)有相同的作用，但返回一个新数组，不改变原始数组。

Use `Array.prototype.slice()` and `Array.prototype.concat()` to get a new array with the new contents after removing existing elements and/or adding new elements.
Omit the second argument, `index`, to start at `0`.
Omit the third argument, `delCount`, to remove `0` elements.
Omit the fourth argument, `elements`, in order to not add any new elements.

使用`Array.prototype.slice()`和`Array.prototype.concat()`来获取一个删除现有元素/或添加新元素后的新数组。如果不传第二个参数`index`，默认值为`0`；如果不传第三个参数`delCount`，默认值是`0`（不删除元素）；不传第四个参数`elements`，则不添加任何新元素。

```js
const shank = (arr, index = 0, delCount = 0, ...elements) =>
  arr
    .slice(0, index)
    .concat(elements)
    .concat(arr.slice(index + delCount));
```

<details>
<summary>Examples</summary>

```js
const names = ['alpha', 'bravo', 'charlie'];
const namesAndDelta = shank(names, 1, 0, 'delta'); // [ 'alpha', 'delta', 'bravo', 'charlie' ]
const namesNoBravo = shank(names, 1, 1); // [ 'alpha', 'charlie' ]
console.log(names); // ['alpha', 'bravo', 'charlie']
```

</details>

<br>[⬆ Back to top](#contents)

### shuffle

Randomizes the order of the values of an array, returning a new array.

随机改变数组中元素的顺序后，返回新的数组。

Uses the [Fisher-Yates algorithm](https://github.com/30-seconds/30-seconds-of-code#shuffle) to reorder the elements of the array.

使用[Fisher-Yates algorithm](https://github.com/30-seconds/30-seconds-of-code#shuffle)来对数组中元素重新排序。

```js
const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};
```

<details>
<summary>Examples</summary>

```js
const foo = [1, 2, 3];
shuffle(foo); // [2, 3, 1], foo = [1, 2, 3]
```

</details>

<br>[⬆ Back to top](#contents)

### similarity

Returns an array of elements that appear in both arrays.

返回出现在两个数组中的公共元素组成的数组。

Use `Array.prototype.filter()` to remove values that are not part of `values`, determined using `Array.prototype.includes()`.

使用`Array.prototype.filter()`来删除不在`values`中的元素（通过`Array.prototype.includes()`来判断是否存在）。

```js
const similarity = (arr, values) => arr.filter(v => values.includes(v));
```

<details>
<summary>Examples</summary>

```js
similarity([1, 2, 3], [1, 2, 4]); // [1, 2]
```

</details>

<br>[⬆ Back to top](#contents)

### sortedIndex

Returns the lowest index at which value should be inserted into array in order to maintain its sort order.

返回为了维持原始有序数组的顺序，把给定的新元素值添加到数组中的最小位置。

Check if the array is sorted in descending order (loosely).
Use `Array.prototype.findIndex()` to find the appropriate index where the element should be inserted.

检查数组是否被倒序排列（非严格的）。使用`Array.prototype.findIndex()`来找到插入新元素的合适位置。

```js
const sortedIndex = (arr, n) => {
  const isDescending = arr[0] > arr[arr.length - 1];
  const index = arr.findIndex(el => (isDescending ? n >= el : n <= el));
  return index === -1 ? arr.length : index;
};
```

<details>
<summary>Examples</summary>

```js
sortedIndex([5, 3, 2, 1], 4); // 1
sortedIndex([30, 50], 40); // 1
```

</details>

<br>[⬆ Back to top](#contents)

### sortedIndexBy

Returns the lowest index at which value should be inserted into array in order to maintain its sort order, based on a provided iterator function.

基于给定的遍历函数，返回为了维持原始有序数组的顺序，把给定的新元素值添加到数组中的最小位置。

Check if the array is sorted in descending order (loosely).
Use `Array.prototype.findIndex()` to find the appropriate index where the element should be inserted, based on the iterator function `fn`.

检查数组是否被倒序排列（非严格的）。使用`Array.prototype.findIndex()`来基于遍历函数`fn`的结找到插入新元素的合适位置。

```js
const sortedIndexBy = (arr, n, fn) => {
  const isDescending = fn(arr[0]) > fn(arr[arr.length - 1]);
  const val = fn(n);
  const index = arr.findIndex(el => (isDescending ? val >= fn(el) : val <= fn(el)));
  return index === -1 ? arr.length : index;
};
```

<details>
<summary>Examples</summary>

```js
sortedIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x); // 0
```

</details>

<br>[⬆ Back to top](#contents)

### sortedLastIndex

Returns the highest index at which value should be inserted into array in order to maintain its sort order.

返回为了维持原始有序数组的顺序，把给定的新元素值添加到数组中的最大位置。

Check if the array is sorted in descending order (loosely).
Use `Array.prototype.reverse()` and `Array.prototype.findIndex()` to find the appropriate last index where the element should be inserted.

检查数组是否被倒序排列（非严格的）。使用`Array.prototype.reverse()`和`Array.prototype.findIndex()`来找到插入新元素的合适位置。

```js
const sortedLastIndex = (arr, n) => {
  const isDescending = arr[0] > arr[arr.length - 1];
  const index = arr.reverse().findIndex(el => (isDescending ? n <= el : n >= el));
  return index === -1 ? 0 : arr.length - index;
};
```

<details>
<summary>Examples</summary>

```js
sortedLastIndex([10, 20, 30, 30, 40], 30); // 4
```

</details>

<br>[⬆ Back to top](#contents)

### sortedLastIndexBy

Returns the highest index at which value should be inserted into array in order to maintain its sort order, based on a provided iterator function.

基于给定的遍历函数，返回为了维持原始有序数组的顺序，把给定的新元素值添加到数组中的最大位置。

Check if the array is sorted in descending order (loosely).
Use `Array.prototype.map()` to apply the iterator function to all elements of the array.
Use `Array.prototype.reverse()` and `Array.prototype.findIndex()` to find the appropriate last index where the element should be inserted, based on the provided iterator function.

检查数组是否被倒序排列（非严格的）。使用`Array.prototype.map()`来对所有的元素应用遍历函数。使用`Array.prototype.reverse()`和`Array.prototype.findIndex()`来基于遍历函数`fn`的结果找到插入新元素的合适位置。

```js
const sortedLastIndexBy = (arr, n, fn) => {
  const isDescending = fn(arr[0]) > fn(arr[arr.length - 1]);
  const val = fn(n);
  const index = arr
    .map(fn)
    .reverse()
    .findIndex(el => (isDescending ? val <= el : val >= el));
  return index === -1 ? 0 : arr.length - index;
};
```

<details>
<summary>Examples</summary>

```js
sortedLastIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x); // 1
```

</details>

<br>[⬆ Back to top](#contents)

### stableSort ![advanced](/advanced.svg)

Performs stable sorting of an array, preserving the initial indexes of items when their values are the same.
Does not mutate the original array, but returns a new array instead.

按照数组的固定顺序排序，如果值相同，维持元素的原始序号不变。不直接改变原始数组，而是返回一个新数组。

Use `Array.prototype.map()` to pair each element of the input array with its corresponding index.
Use `Array.prototype.sort()` and a `compare` function to sort the list, preserving their initial order if the items compared are equal.
Use `Array.prototype.map()` to convert back to the initial array items.

使用`Array.prototype.map()`构造每个输入数组的元素的值和它的序号的数值对。使用`Array.prototype.sort()`和一个`compare`函数来对列表排序，如果比较结果相等则维持它们的初始序号。使用`Array.prototype.map()`把数值对还原成原始的数值元素。(个人认为：当前的JavaScript的sort方法本身就是稳定排序，应该只需要拷贝个新数组就可以了)。

```js
const stableSort = (arr, compare) =>
  arr
    .map((item, index) => ({ item, index }))
    .sort((a, b) => compare(a.item, b.item) || a.index - b.index)
    .map(({ item }) => item);
```

<details>
<summary>Examples</summary>

```js
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const stable = stableSort(arr, () => 0); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

</details>

<br>[⬆ Back to top](#contents)

### symmetricDifference

Returns the symmetric difference between two arrays, without filtering out duplicate values.

不过滤掉重复元素，返回两个数组中全部的差异（每个数组中不存在在对方中的元素合集）。

Create a `Set` from each array, then use `Array.prototype.filter()` on each of them to only keep values not contained in the other.

从给定的两个数组创建一个`Set`，然后对它们分别使用`Array.prototype.filter()`来只保留不包含在另一个数组中的元素。

```js
const symmetricDifference = (a, b) => {
  const sA = new Set(a),
    sB = new Set(b);
  return [...a.filter(x => !sB.has(x)), ...b.filter(x => !sA.has(x))];
};
```

<details>
<summary>Examples</summary>

```js
symmetricDifference([1, 2, 3], [1, 2, 4]); // [3, 4]
symmetricDifference([1, 2, 2], [1, 3, 1]); // [2, 2, 3]
```

</details>

<br>[⬆ Back to top](#contents)

### symmetricDifferenceBy

Returns the symmetric difference between two arrays, after applying the provided function to each array element of both.

基于给定的比较函数，不过滤掉重复元素，返回两个数组中全部的差异（每个数组中不存在在对方中的元素合集）。

Create a `Set` by applying `fn` to each array's elements, then use `Array.prototype.filter()` on each of them to only keep values not contained in the other.

对给定的两个数组元素应用`fn`后创建一个结果的`Set`，然后对它们分别使用`Array.prototype.filter()`来只保留不包含在另一个数组的结果中的元素。

```js
const symmetricDifferenceBy = (a, b, fn) => {
  const sA = new Set(a.map(v => fn(v))),
    sB = new Set(b.map(v => fn(v)));
  return [...a.filter(x => !sB.has(fn(x))), ...b.filter(x => !sA.has(fn(x)))];
};
```

<details>
<summary>Examples</summary>

```js
symmetricDifferenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [ 1.2, 3.4 ]
```

</details>

<br>[⬆ Back to top](#contents)

### symmetricDifferenceWith

Returns the symmetric difference between two arrays, using a provided function as a comparator.

使用给定的函数作为比较器，返回两个数组中全部的差异（每个数组中不存在在对方中的元素合集）。

Use `Array.prototype.filter()` and `Array.prototype.findIndex()` to find the appropriate values.

使用`Array.prototype.filter()` 和 `Array.prototype.findIndex()`来找到合适的元素。

```js
const symmetricDifferenceWith = (arr, val, comp) => [
  ...arr.filter(a => val.findIndex(b => comp(a, b)) === -1),
  ...val.filter(a => arr.findIndex(b => comp(a, b)) === -1)
];
```

<details>
<summary>Examples</summary>

```js
symmetricDifferenceWith(
  [1, 1.2, 1.5, 3, 0],
  [1.9, 3, 0, 3.9],
  (a, b) => Math.round(a) === Math.round(b)
); // [1, 1.2, 3.9]
```

</details>

<br>[⬆ Back to top](#contents)

### tail

Returns all elements in an array except for the first one.

返回数组中除了第一个元素外的其他元素。

Return `Array.prototype.slice(1)` if the array's `length` is more than `1`, otherwise, return the whole array.

如果数组长度大于`1`，返回 `Array.prototype.slice(1)`；否则返回整个数组。

```js
const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);
```

<details>
<summary>Examples</summary>

```js
tail([1, 2, 3]); // [2,3]
tail([1]); // [1]
```

</details>

<br>[⬆ Back to top](#contents)

### take

Returns an array with n elements removed from the beginning.

返回一个由头部`n`个元素构成的数组。

Use `Array.prototype.slice()` to create a slice of the array with `n` elements taken from the beginning.

使用`Array.prototype.slice()`来用头部的`n`个元素创建一个数组的切片。

```js
const take = (arr, n = 1) => arr.slice(0, n);
```

<details>
<summary>Examples</summary>

```js
take([1, 2, 3], 5); // [1, 2, 3]
take([1, 2, 3], 0); // []
```

</details>

<br>[⬆ Back to top](#contents)

### takeRight

Returns an array with n elements removed from the end.

返回一个由尾部`n`个元素构成的数组。

Use `Array.prototype.slice()` to create a slice of the array with `n` elements taken from the end.

使用`Array.prototype.slice()`来用尾部的`n`个元素创建一个数组的切片。

```js
const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);
```

<details>
<summary>Examples</summary>

```js
takeRight([1, 2, 3], 2); // [ 2, 3 ]
takeRight([1, 2, 3]); // [3]
```

</details>

<br>[⬆ Back to top](#contents)

### takeRightWhile

Removes elements from the end of an array until the passed function returns `true`. Returns the removed elements.

删除直到传入的函数返回`true`之前的所有数组尾部元素（代码应该实现的是：从尾部开始计算，按照原顺序返回应用函数后返回假值的元素）。返回删除掉的元素列表。

Loop through the array, using a `Array.prototype.reduceRight()` and accumulating elements while the function returns falsy value.

遍历数组，使用`Array.prototype.reduceRight()`来收集返回假值的元素列表。

```js
const takeRightWhile = (arr, func) =>
  arr.reduceRight((acc, el) => (func(el) ? acc : [el, ...acc]), []);
```

<details>
<summary>Examples</summary>

```js
takeRightWhile([1, 2, 3, 4], n => n < 3); // [3, 4]
```

</details>

<br>[⬆ Back to top](#contents)

### takeWhile

Removes elements in an array until the passed function returns `true`. Returns the removed elements.

删除直到传入的函数返回`true`之前的所有数组首部元素。返回删除掉的元素列表。

Loop through the array, using a `for...of` loop over `Array.prototype.entries()` until the returned value from the function is `true`.
Return the removed elements, using `Array.prototype.slice()`.

遍历数组，使用`for...of`遍历`Array.prototype.entries()`的结果，直到函数返回值为`true`。使用`Array.prototype.slice()`返回删除掉的元素。

```js
const takeWhile = (arr, func) => {
  for (const [i, val] of arr.entries()) if (func(val)) return arr.slice(0, i);
  return arr;
};
```

<details>
<summary>Examples</summary>

```js
takeWhile([1, 2, 3, 4], n => n >= 3); // [1, 2]
```

</details>

<br>[⬆ Back to top](#contents)

### toHash

Reduces a given Array-like into a value hash (keyed data store).

把给定的Array-like转换为一个hash对象（有键值的数据存储形式）。

Given an Iterable or Array-like structure, call `Array.prototype.reduce.call()` on the provided object to step over it and return an Object, keyed by the reference value.

给定Iterable或者Array-like结构，对给定的对象使用`Array.prototype.reduce.call()`来遍历它，并返回一个用引用的值作为键值的对象。

```js
const toHash = (object, key) =>
  Array.prototype.reduce.call(
    object,
    (acc, data, index) => ((acc[!key ? index : data[key]] = data), acc),
    {}
  );
```

<details>
<summary>Examples</summary>

```js
toHash([4, 3, 2, 1]); // { 0: 4, 1: 3, 2: 2, 3: 1 }
toHash([{ a: 'label' }], 'a'); // { label: { a: 'label' } }
// A more in depth example:   一个更深入的例子：
let users = [{ id: 1, first: 'Jon' }, { id: 2, first: 'Joe' }, { id: 3, first: 'Moe' }];
let managers = [{ manager: 1, employees: [2, 3] }];
// We use function here because we want a bindable reference, but a closure referencing the hash would work, too.
// 因为我们需要一个可绑定的索引值，所以我们这里使用函数，但引用我们产生的hash对象的闭包是正常工作的。（把toHash结果作为this传给了map的参数函数）
managers.forEach(
  manager =>
    (manager.employees = manager.employees.map(function(id) {
      return this[id];
    }, toHash(users, 'id')))
);
managers; // [ { manager:1, employees: [ { id: 2, first: "Joe" }, { id: 3, first: "Moe" } ] } ]
```

</details>

<br>[⬆ Back to top](#contents)

### union

Returns every element that exists in any of the two arrays once.

返回两个数组中所有元素只出现一次所构成的数组（具有集合不重复的特性）。

Create a `Set` with all values of `a` and `b` and convert to an array.

用所有的`a` 和 `b`内的元素创建一个`Set`并把它转为数组。

```js
const union = (a, b) => Array.from(new Set([...a, ...b]));
```

<details>
<summary>Examples</summary>

```js
union([1, 2, 3], [4, 3, 2]); // [1,2,3,4]
```

</details>

<br>[⬆ Back to top](#contents)

### unionBy

Returns every element that exists in any of the two arrays once, after applying the provided function to each array element of both.

对两个数组中每个元素应用给定的函数后，返回所有结果中元素只出现一次所构成的数组（具有集合不重复的特性）。

Create a `Set` by applying all `fn` to all values of `a`.
Create a `Set` from `a` and all elements in `b` whose value, after applying `fn` does not match a value in the previously created set.
Return the last set converted to an array.

用对`a`中所有值应用`fn`后的结果创建一个`Set`。用`a`和`b`中所有应用`fn`后结果不在之前的`Set`的元素创建另一`Set`。返回后一个`Set`转换为数组后的结果。

```js
const unionBy = (a, b, fn) => {
  const s = new Set(a.map(fn));
  return Array.from(new Set([...a, ...b.filter(x => !s.has(fn(x)))]));
};
```

<details>
<summary>Examples</summary>

```js
unionBy([2.1], [1.2, 2.3], Math.floor); // [2.1, 1.2]
```

</details>

<br>[⬆ Back to top](#contents)

### unionWith

Returns every element that exists in any of the two arrays once, using a provided comparator function.

对两个数组中元素比较函数判断相等，返回不重复（判断相等的就视为重复）元素构成的数组（具有集合不重复的特性）。

Create a `Set` with all values of `a` and values in `b` for which the comparator finds no matches in `a`, using `Array.prototype.findIndex()`.

用所有`a`中的值，加上用`Array.prototype.findIndex()`找到的`b`中使用比较函数判断后与`a`中元素不重复的元素创建一个`Set`。

```js
const unionWith = (a, b, comp) =>
  Array.from(new Set([...a, ...b.filter(x => a.findIndex(y => comp(x, y)) === -1)]));
```

<details>
<summary>Examples</summary>

```js
unionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)); // [1, 1.2, 1.5, 3, 0, 3.9]
```

</details>

<br>[⬆ Back to top](#contents)

### uniqueElements

Returns all unique values of an array.

返回数组中所有唯一的元素。

Use ES6 `Set` and the `...rest` operator to discard all duplicated values.

使用ES6的`Set`和`...rest`操作符来去除所有重复元素。

```js
const uniqueElements = arr => [...new Set(arr)];
```

<details>
<summary>Examples</summary>

```js
uniqueElements([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]
```

</details>

<br>[⬆ Back to top](#contents)

### uniqueElementsBy

Returns all unique values of an array, based on a provided comparator function.

基于给定的比较函数判重，返回数组中所有唯一的元素。（使结果中有相同比较结果的元素唯一，只保留一个）

Use `Array.prototype.reduce()` and `Array.prototype.some()` for an array containing only the first unique occurrence of each value, based on the comparator function, `fn`.
The comparator function takes two arguments: the values of the two elements being compared.

使用`Array.prototype.reduce()`和`Array.prototype.some()`基于给定比较函数`fn`创建一个只包含每个值第一次出现的数组（每个值只包含一次）。比较函数有两个参数：分别是用来比较的两个值。

```js
const uniqueElementsBy = (arr, fn) =>
  arr.reduce((acc, v) => {
    if (!acc.some(x => fn(v, x))) acc.push(v);
    return acc;
  }, []);
```

<details>
<summary>Examples</summary>

```js
uniqueElementsBy(
  [
    { id: 0, value: 'a' },
    { id: 1, value: 'b' },
    { id: 2, value: 'c' },
    { id: 1, value: 'd' },
    { id: 0, value: 'e' }
  ],
  (a, b) => a.id == b.id
); // [ { id: 0, value: 'a' }, { id: 1, value: 'b' }, { id: 2, value: 'c' } ]
```

</details>

<br>[⬆ Back to top](#contents)

### uniqueElementsByRight

Returns all unique values of an array, based on a provided comparator function, starting from the right.

从右侧开始，基于给定的比较函数判重，返回数组中所有唯一的值。（使结果中有相同比较结果的元素唯一，只保留一个）（只是计算顺序从后向前）

Use `Array.prototype.reduceRight()` and `Array.prototype.some()` for an array containing only the last unique occurrence of each value, based on the comparator function, `fn`.
The comparator function takes two arguments: the values of the two elements being compared.

使用`Array.prototype.reduceRight()`和`Array.prototype.some()`基于给定比较函数`fn`创建一个只包含每个值最后一次出现的数组（每个值只包含一次）。比较函数有两个参数：分别是用来比较的两个值。

```js
const uniqueElementsByRight = (arr, fn) =>
  arr.reduceRight((acc, v) => {
    if (!acc.some(x => fn(v, x))) acc.push(v);
    return acc;
  }, []);
```

<details>
<summary>Examples</summary>

```js
uniqueElementsByRight(
  [
    { id: 0, value: 'a' },
    { id: 1, value: 'b' },
    { id: 2, value: 'c' },
    { id: 1, value: 'd' },
    { id: 0, value: 'e' }
  ],
  (a, b) => a.id == b.id
); // [ { id: 0, value: 'e' }, { id: 1, value: 'd' }, { id: 2, value: 'c' } ]
```

</details>

<br>[⬆ Back to top](#contents)

### uniqueSymmetricDifference

Returns the unique symmetric difference between two arrays, not containing duplicate values from either array.

返回两个数组中所有不相同的元素，不包含每个数组中的重复元素。

Use `Array.prototype.filter()` and `Array.prototype.includes()` on each array to remove values contained in the other, then create a `Set` from the results, removing duplicate values.

对每个数组使用`Array.prototype.filter()`和`Array.prototype.includes()`来删除存在在另一个数组中的元素，然后从剩下的结果中返回一个`Set`来去重。

```js
const uniqueSymmetricDifference = (a, b) => [
  ...new Set([...a.filter(v => !b.includes(v)), ...b.filter(v => !a.includes(v))])
];
```

<details>
<summary>Examples</summary>

```js
uniqueSymmetricDifference([1, 2, 3], [1, 2, 4]); // [3, 4]
uniqueSymmetricDifference([1, 2, 2], [1, 3, 1]); // [2, 3]
```

</details>

<br>[⬆ Back to top](#contents)

### unzip

Creates an array of arrays, ungrouping the elements in an array produced by [zip](#zip).

返回一个数组，把[zip](#zip)产生的数组元素的分组拆解掉。

Use `Math.max.apply()` to get the longest subarray in the array, `Array.prototype.map()` to make each element an array.
Use `Array.prototype.reduce()` and `Array.prototype.forEach()` to map grouped values to individual arrays.

使用`Math.max.apply()`获取数组中最长的子数组，使用`Array.prototype.map()`来把每个元素转为一个数组。使用`Array.prototype.reduce()` 和 `Array.prototype.forEach()`来把映射出来的分组的值列表分解到单独的数组列表中。

```js
const unzip = arr =>
  arr.reduce(
    (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
    Array.from({
      length: Math.max(...arr.map(x => x.length))
    }).map(x => [])
  );
```

<details>
<summary>Examples</summary>

```js
unzip([['a', 1, true], ['b', 2, false]]); // [['a', 'b'], [1, 2], [true, false]]
unzip([['a', 1, true], ['b', 2]]); // [['a', 'b'], [1, 2], [true]]
```

</details>

<br>[⬆ Back to top](#contents)

### unzipWith ![advanced](/advanced.svg)

Creates an array of elements, ungrouping the elements in an array produced by [zip](#zip) and applying the provided function.

返回一个数组，把[zip](#zip)产生的数组元素的分组拆解掉，并对每个元素应用给定的函数。

Use `Math.max.apply()` to get the longest subarray in the array, `Array.prototype.map()` to make each element an array.
Use `Array.prototype.reduce()` and `Array.prototype.forEach()` to map grouped values to individual arrays.
Use `Array.prototype.map()` and the spread operator (`...`) to apply `fn` to each individual group of elements.

使用`Math.max.apply()`获取数组中最长的子数组，使用`Array.prototype.map()`来把每个元素转为一个数组。使用`Array.prototype.reduce()` 和 `Array.prototype.forEach()`来把映射出来的分组的值列表分解到单独的数组列表中。使用`Array.prototype.map()`和展开操作符(`...`)来对分组中每个元素列表应用函数`fn`.

```js
const unzipWith = (arr, fn) =>
  arr
    .reduce(
      (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
      Array.from({
        length: Math.max(...arr.map(x => x.length))
      }).map(x => [])
    )
    .map(val => fn(...val));
```

<details>
<summary>Examples</summary>

```js
unzipWith([[1, 10, 100], [2, 20, 200]], (...args) => args.reduce((acc, v) => acc + v, 0)); // [3, 30, 300]
```

</details>

<br>[⬆ Back to top](#contents)

### without

Filters out the elements of an array, that have one of the specified values.

过滤掉包含某个指定的值列表中的值的数组元素。

Use `Array.prototype.filter()` to create an array excluding(using `!Array.includes()`) all given values.

使用`Array.prototype.filter()`来构造一个排除(使用`!Array.includes()`)所有给出的值后的数组。

_(For a snippet that mutates the original array see [`pull`](#pull))_

_(改变原始数组的版本，参加 [`pull`](#pull))_

```js
const without = (arr, ...args) => arr.filter(v => !args.includes(v));
```

<details>
<summary>Examples</summary>

```js
without([2, 1, 2, 3], 1, 2); // [3]
```

</details>

<br>[⬆ Back to top](#contents)

### xProd

Creates a new array out of the two supplied by creating each possible pair from the arrays.

通过创建数组列表中每个可能的元素组合，从给出的两个数组创建一个新列表。

Use `Array.prototype.reduce()`, `Array.prototype.map()` and `Array.prototype.concat()` to produce every possible pair from the elements of the two arrays and save them in an array.

使用`Array.prototype.reduce()`, `Array.prototype.map()` 和 `Array.prototype.concat()`来从给定的两个数组中产生每种可能的元素组合，然后把它们保存到一个数组中。

```js
const xProd = (a, b) => a.reduce((acc, x) => acc.concat(b.map(y => [x, y])), []);
```

<details>
<summary>Examples</summary>

```js
xProd([1, 2], ['a', 'b']); // [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
```

</details>

<br>[⬆ Back to top](#contents)

### zip

Creates an array of elements, grouped based on the position in the original arrays.

创建一个基于原始数组列表中位置来分组的元素列表的数组（二维数组）。

Use `Math.max.apply()` to get the longest array in the arguments.
Creates an array with that length as return value and use `Array.from()` with a map-function to create an array of grouped elements.
If lengths of the argument-arrays vary, `undefined` is used where no value could be found.

使用`Math.max.apply()`来获取参数列表中最长的数组。用它的长度建立一个数组作为返回结果，使用`Array.from()`和一个映射函数来创建一个分组的元素列表的数组。

```js
const zip = (...arrays) => {
  const maxLength = Math.max(...arrays.map(x => x.length));
  return Array.from({ length: maxLength }).map((_, i) => {
    return Array.from({ length: arrays.length }, (_, k) => arrays[k][i]);
  });
};
```

<details>
<summary>Examples</summary>

```js
zip(['a', 'b'], [1, 2], [true, false]); // [['a', 1, true], ['b', 2, false]]
zip(['a'], [1, 2], [true, false]); // [['a', 1, true], [undefined, 2, false]]
```

</details>

<br>[⬆ Back to top](#contents)

### zipObject

Given an array of valid property identifiers and an array of values, return an object associating the properties to the values.

给定一个可用的属性名称数组和一个值的数组，返回一个把属性名称和值关联起来的对象。

Since an object can have undefined values but not undefined property pointers, the array of properties is used to decide the structure of the resulting object using `Array.prototype.reduce()`.

由于一个对象可能有undefined的值但属性指针不是undefined，属性名称列表配合`Array.prototype.reduce()`使用，用来确定结果对象的结构。

```js
const zipObject = (props, values) =>
  props.reduce((obj, prop, index) => ((obj[prop] = values[index]), obj), {});
```

<details>
<summary>Examples</summary>

```js
zipObject(['a', 'b', 'c'], [1, 2]); // {a: 1, b: 2, c: undefined}
zipObject(['a', 'b'], [1, 2, 3]); // {a: 1, b: 2}
```

</details>

<br>[⬆ Back to top](#contents)

### zipWith ![advanced](/advanced.svg)

Creates an array of elements, grouped based on the position in the original arrays and using function as the last value to specify how grouped values should be combined.

创建一个元素列表的数组（二维数组），根据元素数组列表中的位置分组，并使用最后一个值来给定一个函数，用来指定分组的值该如何被结合到一起。

Check if the last argument provided is a function.
Use `Math.max()` to get the longest array in the arguments.
Creates an array with that length as return value and use `Array.from()` with a map-function to create an array of grouped elements.
If lengths of the argument-arrays vary, `undefined` is used where no value could be found.
The function is invoked with the elements of each group `(...group)`.

检查给出的最后一个参数是不是一个函数。使用`Math.max()`来获取参数中最长的数组。用这个长度创建一个数组作为返回值，用`Array.from()`和一个映射函数来创建分组后元素列表的数组。如果给出的参数数组列表的长度是不同的，没有值的位置使用`undefined`来补充。这个给出的函数对每一个分组`(...group)`中的元素列表都应用。

```js
const zipWith = (...array) => {
  const fn = typeof array[array.length - 1] === 'function' ? array.pop() : undefined;
  return Array.from(
    { length: Math.max(...array.map(a => a.length)) },
    (_, i) => (fn ? fn(...array.map(a => a[i])) : array.map(a => a[i]))
  );
};
```

<details>
<summary>Examples</summary>

```js
zipWith([1, 2], [10, 20], [100, 200], (a, b, c) => a + b + c); // [111,222]
zipWith(
  [1, 2, 3],
  [10, 20],
  [100, 200],
  (a, b, c) => (a != null ? a : 'a') + (b != null ? b : 'b') + (c != null ? c : 'c')
); // [111, 222, '3bc']
```

</details>

<br>[⬆ Back to top](#contents)


---

## 🌐 Browser

### arrayToHtmlList

Converts the given array elements into `<li>` tags and appends them to the list of the given id.

把给定的数组元素转换为`<li>`标签，并把他们追加到给定id的list标签中。

Use `Array.prototype.map()`, `document.querySelector()`, and an anonymous inner closure to create a list of html tags.

使用`Array.prototype.map()`，`document.querySelector()`和一个匿名闭包来创建一个html的list标签。

```js
const arrayToHtmlList = (arr, listID) =>
  (el => (
    (el = document.querySelector('#' + listID)),
    (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))
  ))();
```

<details>
<summary>Examples</summary>

```js
arrayToHtmlList(['item 1', 'item 2'], 'myListID');
```

</details>

<br>[⬆ Back to top](#contents)

### bottomVisible

Returns `true` if the bottom of the page is visible, `false` otherwise.

如果当前页面的底部可见（已经显示在视窗中）则返回`true`，否则返回`false`

Use `scrollY`, `scrollHeight` and `clientHeight` to determine if the bottom of the page is visible.

使用`scrollY`, `scrollHeight` 和 `clientHeight`来判断当前页面的底部是否可见。

```js
const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight || document.documentElement.clientHeight); // 是否已经向下滚动了足够的距离window.scrollY，使的页面最下面（在document.documentElement.scrollHeight位置）的已经被显示到视窗高度内了（document.documentElement.clientHeight）；另一种情况是页面不不需要滚动，已经完全显示了
```

<details>
<summary>Examples</summary>

```js
bottomVisible(); // true
```

</details>

<br>[⬆ Back to top](#contents)

### copyToClipboard ![advanced](/advanced.svg)

⚠️ **NOTICE:** The same functionality can be easily implemented by using the new asynchronous Clipboard API, which is still experimental but should be used in the future instead of this snippet. Find out more about it [here](https://github.com/w3c/clipboard-apis/blob/master/explainer.adoc#writing-to-the-clipboard).

⚠️ **NOTICE:** 相同的功能可以很容易的用还在实验阶段但未来可能替代本代码片段的新异步剪切板API实现。更多信息参见[here](https://github.com/w3c/clipboard-apis/blob/master/explainer.adoc#writing-to-the-clipboard).

Copy a string to the clipboard. 
Only works as a result of user action (i.e. inside a `click` event listener).

把一个字符串拷贝到剪切板。只有在用户操作时才生效（i.e. 在一个`click`事件的监听函数中）。

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

<details>
<summary>Examples</summary>

```js
copyToClipboard('Lorem ipsum'); // 'Lorem ipsum' copied to clipboard.
```

</details>

<br>[⬆ Back to top](#contents)

### counter ![advanced](/advanced.svg)

Creates a counter with the specified range, step and duration for the specified selector.

用指定的范围、步幅、过程时长为指定的选择器（DOM）创建一个的计数器。

Check if `step` has the proper sign and change it accordingly.
Use `setInterval()` in combination with `Math.abs()` and `Math.floor()` to calculate the time between each new text draw.
Use `document.querySelector().innerHTML` to update the value of the selected element.
Omit the fourth parameter, `step`, to use a default step of `1`.
Omit the fifth parameter, `duration`, to use a default duration of `2000`ms.

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

<details>
<summary>Examples</summary>

```js
counter('#my-id', 1, 1000, 5, 2000); // Creates a 2-second timer for the element with id="my-id"
```

</details>

<br>[⬆ Back to top](#contents)

### createElement

Creates an element from a string (without appending it to the document). 
If the given string contains multiple elements, only the first one will be returned.

从字符串中创建一个元素（不把它追加到文档流中）。如果给定的字符串包含多个元素，只有一个会被返回。

Use `document.createElement()` to create a new element.
Set its `innerHTML` to the string supplied as the argument. 
Use `ParentNode.firstElementChild` to return the element version of the string.

使用`document.createElement()`来创建一个新元素。把它的`innerHTML`设置成参数提供的字符串。使用`ParentNode.firstElementChild`返回字符串的Html元素形式。

```js
const createElement = str => {
  const el = document.createElement('div');
  el.innerHTML = str;
  return el.firstElementChild;
};
```

<details>
<summary>Examples</summary>

```js
const el = createElement(
  `<div class="container">
    <p>Hello!</p>
  </div>`
);
console.log(el.className); // 'container'
```

</details>

<br>[⬆ Back to top](#contents)

### createEventHub ![advanced](/advanced.svg)

Creates a pub/sub ([publish–subscribe](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern)) event hub with `emit`, `on`, and `off` methods.

用`emit`、`on`和`off`方法创建一个pub/sub ([publish–subscribe](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern))（发布/订阅）模式的事件分发器。

Use `Object.create(null)` to create an empty `hub` object that does not inherit properties from `Object.prototype`.
For `emit`, resolve the array of handlers based on the `event` argument and then run each one with `Array.prototype.forEach()` by passing in the data as an argument.
For `on`, create an array for the event if it does not yet exist, then use `Array.prototype.push()` to add the handler
to the array.
For `off`, use `Array.prototype.findIndex()` to find the index of the handler in the event array and remove it using `Array.prototype.splice()`.

使用`Object.create(null)`来创建一个不包含从`Object.prototype`继承来的属性的空`hub`对象。`emit`功能：基于`event`参数解析handler数组，然后把数据作为一个参数传入，使用`Array.prototype.forEach()`调用每一个handler。`on`功能：创建一个还不存在的事件数组，然后用`Array.prototype.push()`把handler添加到数组中。`off`功能：使用`Array.prototype.findIndex()`在事件数组中找到handler的序号，并用`Array.prototype.splice()`把它删除。

```js
const createEventHub = () => ({
  hub: Object.create(null),
  emit(event, data) {
    (this.hub[event] || []).forEach(handler => handler(data));
  },
  on(event, handler) {
    if (!this.hub[event]) this.hub[event] = [];
    this.hub[event].push(handler);
  },
  off(event, handler) {
    const i = (this.hub[event] || []).findIndex(h => h === handler);
    if (i > -1) this.hub[event].splice(i, 1);
    if (this.hub[event].length === 0) delete this.hub[event];
  }
});
```

<details>
<summary>Examples</summary>

```js
const handler = data => console.log(data);
const hub = createEventHub();
let increment = 0;

// Subscribe: listen for different types of events
hub.on('message', handler);
hub.on('message', () => console.log('Message event fired'));
hub.on('increment', () => increment++);

// Publish: emit events to invoke all handlers subscribed to them, passing the data to them as an argument
hub.emit('message', 'hello world'); // logs 'hello world' and 'Message event fired'
hub.emit('message', { hello: 'world' }); // logs the object and 'Message event fired'
hub.emit('increment'); // `increment` variable is now 1

// Unsubscribe: stop a specific handler from listening to the 'message' event
hub.off('message', handler);
```

</details>

<br>[⬆ Back to top](#contents)

### currentURL

Returns the current URL.

返回当前页的URL。

Use `window.location.href` to get current URL.

使用`window.location.href`来获取当前URL。

```js
const currentURL = () => window.location.href;
```

<details>
<summary>Examples</summary>

```js
currentURL(); // 'https://google.com'
```

</details>

<br>[⬆ Back to top](#contents)

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

<details>
<summary>Examples</summary>

```js
detectDeviceType(); // "Mobile" or "Desktop"
```

</details>

<br>[⬆ Back to top](#contents)

### elementContains

Returns `true` if the `parent` element contains the `child` element, `false` otherwise.

如果给出的`parent`包含了给出的`child`元素则返回`true`，否则返回`false`。

Check that `parent` is not the same element as `child`, use `parent.contains(child)` to check if the `parent` element contains the `child` element.

先检查`parent`是不是和`child`一样，使用`parent.contains(child)`来检查`parent`元素是不是包含`child`元素。

```js
const elementContains = (parent, child) => parent !== child && parent.contains(child);
```

<details>
<summary>Examples</summary>

```js
elementContains(document.querySelector('head'), document.querySelector('title')); // true
elementContains(document.querySelector('body'), document.querySelector('body')); // false
```

</details>

<br>[⬆ Back to top](#contents)

### elementIsVisibleInViewport ![advanced](/advanced.svg)

Returns `true` if the element specified is visible in the viewport, `false` otherwise.

如果给定的元素在可视区域中可见则返回`true`，否则返回`false`。

Use `Element.getBoundingClientRect()` and the `window.inner(Width|Height)` values
to determine if a given element is visible in the viewport.
Omit the second argument to determine if the element is entirely visible, or specify `true` to determine if
it is partially visible.

使用`Element.getBoundingClientRect()`和`window.inner(Width|Height)`值来确定给定的元素在可视区域是否可见。如果不传第二个参数来决定元素是否要求完全可见（全部都在可视区域），则用`true`作为默认值，只要求元素部分可见。

```js
const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};
```

<details>
<summary>Examples</summary>

```js
// e.g. 100x100 viewport and a 10x10px element at position {top: -1, left: 0, bottom: 9, right: 10}
elementIsVisibleInViewport(el); // false - (not fully visible)
elementIsVisibleInViewport(el, true); // true - (partially visible)
```

</details>

<br>[⬆ Back to top](#contents)

### formToObject

Encode a set of form elements as an `object`.

Use the `FormData` constructor to convert the HTML `form` to `FormData`, `Array.from()` to convert to an array.
Collect the object from the array, using `Array.prototype.reduce()`.

```js
const formToObject = form =>
  Array.from(new FormData(form)).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
```

<details>
<summary>Examples</summary>

```js
formToObject(document.querySelector('#form')); // { email: 'test@email.com', name: 'Test Name' }
```

</details>

<br>[⬆ Back to top](#contents)

### getImages

Fetches all images from within an element and puts them into an array

把一个元素内部所有的image都找到，并把它们放到一个数组中。

Use `Element.prototype.getElementsByTagName()` to fetch all `<img>` elements inside the provided element, `Array.prototype.map()` to map every `src` attribute of their respective `<img>` element, then create a `Set` to eliminate duplicates and return the array.

使用`Element.prototype.getElementsByTagName()`来获取给定元素内部的所有的`<img>`元素，用`Array.prototype.map()`来分别获取`<img>`元素对应的每一个`src`属性，然后创建一个`Set`来去除重复数据并返回一个数组。

```js
const getImages = (el, includeDuplicates = false) => {
  const images = [...el.getElementsByTagName('img')].map(img => img.getAttribute('src'));
  return includeDuplicates ? images : [...new Set(images)];
};
```

<details>
<summary>Examples</summary>

```js
getImages(document, true); // ['image1.jpg', 'image2.png', 'image1.png', '...']
getImages(document, false); // ['image1.jpg', 'image2.png', '...']
```

</details>

<br>[⬆ Back to top](#contents)

### getScrollPosition

Returns the scroll position of the current page.

返回当前页面的滚动位置。

Use `pageXOffset` and `pageYOffset` if they are defined, otherwise `scrollLeft` and `scrollTop`.
You can omit `el` to use a default value of `window`.

如果`pageXOffset`和`pageYOffset`有定义则使用它们，否则用`scrollLeft`和`scrollTop`。你可以不传`el`参数来使用默认值`window`。

```js
const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});
```

<details>
<summary>Examples</summary>

```js
getScrollPosition(); // {x: 0, y: 200}
```

</details>

<br>[⬆ Back to top](#contents)

### getStyle

Returns the value of a CSS rule for the specified element.

返回指定元素的CSS规则值（style）。

Use `Window.getComputedStyle()` to get the value of the CSS rule for the specified element.

使用`Window.getComputedStyle()`来获取指定元素的CSS规则值（style）。

```js
const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];
```

<details>
<summary>Examples</summary>

```js
getStyle(document.querySelector('p'), 'font-size'); // '16px'
```

</details>

<br>[⬆ Back to top](#contents)

### hasClass

Returns `true` if the element has the specified class, `false` otherwise.

如果元素有指定的class则返回`true`，否则返回`false`。

Use `element.classList.contains()` to check if the element has the specified class.

使用`element.classList.contains()`检查给出的元素是否有指定的class。

```js
const hasClass = (el, className) => el.classList.contains(className);
```

<details>
<summary>Examples</summary>

```js
hasClass(document.querySelector('p.special'), 'special'); // true
```

</details>

<br>[⬆ Back to top](#contents)

### hashBrowser ![advanced](/advanced.svg)

Creates a hash for a value using the [SHA-256](https://en.wikipedia.org/wiki/SHA-2) algorithm. Returns a promise.

使用[SHA-256](https://en.wikipedia.org/wiki/SHA-2)算法创建一个hash。返回一个promise。

Use the [SubtleCrypto](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto) API to create a hash for the given value.

使用[SubtleCrypto](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto)API来创建给定值的hash。

```js
const hashBrowser = val =>
  crypto.subtle.digest('SHA-256', new TextEncoder('utf-8').encode(val)).then(h => {
    let hexes = [],
      view = new DataView(h);
    for (let i = 0; i < view.byteLength; i += 4)
      hexes.push(('00000000' + view.getUint32(i).toString(16)).slice(-8));
    return hexes.join('');
  });
```

<details>
<summary>Examples</summary>

```js
hashBrowser(JSON.stringify({ a: 'a', b: [1, 2, 3, 4], foo: { c: 'bar' } })).then(console.log); // '04aa106279f5977f59f9067fa9712afc4aedc6f5862a8defc34552d8c7206393'
```

</details>

<br>[⬆ Back to top](#contents)

### hide

Hides all the elements specified.

隐藏所有指定的元素。

Use `NodeList.prototype.forEach()` to apply `display: none` to each element specified.

使用`NodeList.prototype.forEach()`来对每个给定的元素应用`display: none`样式。

```js
const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));
```

<details>
<summary>Examples</summary>

```js
hide(document.querySelectorAll('img')); // Hides all <img> elements on the page
```

</details>

<br>[⬆ Back to top](#contents)

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

<details>
<summary>Examples</summary>

```js
httpsRedirect(); // If you are on http://mydomain.com, you are redirected to https://mydomain.com
```

</details>

<br>[⬆ Back to top](#contents)

### insertAfter

Inserts an HTML string after the end of the specified element.

在指定元素的后面添加一个HTML字符串。

Use `el.insertAdjacentHTML()` with a position of `'afterend'` to parse `htmlString` and insert it after the end of `el`.

使用`el.insertAdjacentHTML()`，以`'afterend'`作为position来解析`htmlString`，并把它插入到`el`后面。

```js
const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);
```

<details>
<summary>Examples</summary>

```js
insertAfter(document.getElementById('myId'), '<p>after</p>'); // <div id="myId">...</div> <p>after</p>
```

</details>

<br>[⬆ Back to top](#contents)

### insertBefore

Inserts an HTML string before the start of the specified element.

在指定元素的前面添加一个HTML字符串。

Use `el.insertAdjacentHTML()` with a position of `'beforebegin'` to parse `htmlString` and insert it before the start of `el`.

使用`el.insertAdjacentHTML()`，以`'beforebegin'`作为position来解析`htmlString`，并把它插入到`el`后面。
```js
const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString);
```

<details>
<summary>Examples</summary>

```js
insertBefore(document.getElementById('myId'), '<p>before</p>'); // <p>before</p> <div id="myId">...</div>
```

</details>

<br>[⬆ Back to top](#contents)

### isBrowserTabFocused

Returns `true` if the browser tab of the page is focused, `false` otherwise.

如果当前的浏览器标签页是获取到焦点的就返回`true`，否则返回`false`。

Use the `Document.hidden` property, introduced by the Page Visibility API to check if the browser tab of the page is visible or hidden.

使用页面可见性API（Page Visibility API）中的`Document.hidden`属性来检查当前的浏览器标签页是可见的还是隐藏的。

```js
const isBrowserTabFocused = () => !document.hidden;
```

<details>
<summary>Examples</summary>

```js
isBrowserTabFocused(); // true
```

</details>

<br>[⬆ Back to top](#contents)

### nodeListToArray

Converts a `NodeList` to an array.

把一个`NodeList`转换成一个数组。

Use spread operator inside new array to convert a `NodeList` to an array.

在新数组内使用展开操作符来把`NodeList`转换成一个数组。

```js
const nodeListToArray = nodeList => [...nodeList];
```

<details>
<summary>Examples</summary>

```js
nodeListToArray(document.childNodes); // [ <!DOCTYPE html>, html ]
```

</details>

<br>[⬆ Back to top](#contents)

### observeMutations ![advanced](/advanced.svg)

Returns a new MutationObserver and runs the provided callback for each mutation on the specified element.

返回一个新的变化观察者（MutationObserver），对每个给定元素的变化来执行给定的回调函数。

Use a [`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) to observe mutations on the given element.
Use `Array.prototype.forEach()` to run the callback for each mutation that is observed.
Omit the third argument, `options`, to use the default [options](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver#MutationObserverInit) (all `true`).

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

<details>
<summary>Examples</summary>

```js
const obs = observeMutations(document, console.log); // Logs all mutations that happen on the page
obs.disconnect(); // Disconnects the observer and stops logging mutations on the page
```

</details>

<br>[⬆ Back to top](#contents)

### off

Removes an event listener from an element.

删除一个元素中的某个事件监听。

Use `EventTarget.removeEventListener()` to remove an event listener from an element. 
Omit the fourth argument `opts` to use `false` or specify it based on the options used when the event listener was added.

使用`EventTarget.removeEventListener()`来删除一个元素中的某个事件监听。如果不传第四个参数`opts`，则使用`false`或者使用事件监听被添加时候所使用的值。

```js
const off = (el, evt, fn, opts = false) => el.removeEventListener(evt, fn, opts);
```

<details>
<summary>Examples</summary>

```js
const fn = () => console.log('!');
document.body.addEventListener('click', fn);
off(document.body, 'click', fn); // no longer logs '!' upon clicking on the page
```

</details>

<br>[⬆ Back to top](#contents)

### on

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

<details>
<summary>Examples</summary>

```js
const fn = () => console.log('!');
on(document.body, 'click', fn); // logs '!' upon clicking the body
on(document.body, 'click', fn, { target: 'p' }); // logs '!' upon clicking a `p` element child of the body
on(document.body, 'click', fn, { options: true }); // use capturing instead of bubbling
```

</details>

<br>[⬆ Back to top](#contents)

### onUserInputChange ![advanced](/advanced.svg)

Run the callback whenever the user input type changes (`mouse` or `touch`). Useful for enabling/disabling code depending on the input device. This process is dynamic and works with hybrid devices (e.g. touchscreen laptops).

只要用户输入变化（`mouse`或者`touch`）都执行回调。用于根据输入设备enabling/disabling代码。这个过程是动态的，并且兼容多种设备（例如：触摸屏的笔记本电脑）。

Use two event listeners. Assume `mouse` input initially and bind a `touchstart` event listener to the document. 
On `touchstart`, add a `mousemove` event listener to listen for two consecutive `mousemove` events firing within 20ms, using `performance.now()`.
Run the callback with the input type as an argument in either of these situations.

使用两个事件监听。假设开始是`mouse`输入，则绑定一个`touchstart`事件监听到document上。在`touchstart`事件触发时，添加一个`mousemove`事件监听来监听20ms触发的连续两个`mousemove`事件，时间间隔通过`performance.now()`来计算。在任何一种情况下都把输入类型作为回调函数的一个参数传入并调用它。

```js
const onUserInputChange = callback => {
  let type = 'mouse',
    lastTime = 0;
  const mousemoveHandler = () => {
    const now = performance.now();
    if (now - lastTime < 20)
      (type = 'mouse'), callback(type), document.removeEventListener('mousemove', mousemoveHandler);
    lastTime = now;
  };
  document.addEventListener('touchstart', () => {
    if (type === 'touch') return;
    (type = 'touch'), callback(type), document.addEventListener('mousemove', mousemoveHandler);
  });
};
```

<details>
<summary>Examples</summary>

```js
onUserInputChange(type => {
  console.log('The user is now using', type, 'as an input method.');
});
```

</details>

<br>[⬆ Back to top](#contents)

### prefix

Returns the prefixed version (if necessary) of a CSS property that the browser supports.

返回一个浏览器支持的CSS属性的前缀版本（如果需要的话）。

Use `Array.prototype.findIndex()` on an array of vendor prefix strings to test if `document.body` has one of them defined in its `CSSStyleDeclaration` object, otherwise return `null`.
Use `String.prototype.charAt()` and `String.prototype.toUpperCase()` to capitalize the property, which will be appended to the vendor prefix string.

对一个浏览器引擎前缀字符串数组使用`Array.prototype.findIndex()`来测试`document.body`的`CSSStyleDeclaration`对象中是否有其中之一，否则返回`null`。使用`String.prototype.charAt()`和`String.prototype.toUpperCase()`来把要添加的浏览器引擎前缀字符串后面的属性转换为大写开头。

```js
const prefix = prop => {
  const capitalizedProp = prop.charAt(0).toUpperCase() + prop.slice(1);
  const prefixes = ['', 'webkit', 'moz', 'ms', 'o'];
  const i = prefixes.findIndex(
    prefix => typeof document.body.style[prefix ? prefix + capitalizedProp : prop] !== 'undefined'
  );
  return i !== -1 ? (i === 0 ? prop : prefixes[i] + capitalizedProp) : null;
};
```

<details>
<summary>Examples</summary>

```js
prefix('appearance'); // 'appearance' on a supported browser, otherwise 'webkitAppearance', 'mozAppearance', 'msAppearance' or 'oAppearance'
```

</details>

<br>[⬆ Back to top](#contents)

### recordAnimationFrames

Invokes the provided callback on each animation frame.

对每个动画frame来执行给定的回调函数。

Use recursion. 
Provided that `running` is `true`, continue invoking `window.requestAnimationFrame()` which invokes the provided callback. 
Return an object with two methods `start` and `stop` to allow manual control of the recording. 
Omit the second argument, `autoStart`, to implicitly call `start` when the function is invoked.

使用递归。如果`running`是`true`，则继续去触发执行给定回调的`window.requestAnimationFrame()` 。返回一个有两个方法`start`和`stop`的对象来允许记录的手动控制。如果不传第二个参数`autoStart`，则在调用给定函数的时候隐式的调用`start`。

```js
const recordAnimationFrames = (callback, autoStart = true) => {
  let running = true,
    raf;
  const stop = () => {
    running = false;
    cancelAnimationFrame(raf);
  };
  const start = () => {
    running = true;
    run();
  };
  const run = () => {
    raf = requestAnimationFrame(() => {
      callback();
      if (running) run();
    });
  };
  if (autoStart) start();
  return { start, stop };
};
```

<details>
<summary>Examples</summary>

```js
const cb = () => console.log('Animation frame fired');
const recorder = recordAnimationFrames(cb); // logs 'Animation frame fired' on each animation frame
recorder.stop(); // stops logging
recorder.start(); // starts again
const recorder2 = recordAnimationFrames(cb, false); // `start` needs to be explicitly called to begin recording frames
```

</details>

<br>[⬆ Back to top](#contents)

### redirect

Redirects to a specified URL.

重定向到一个特定的URL。

Use `window.location.href` or `window.location.replace()` to redirect to `url`.
Pass a second argument to simulate a link click (`true` - default) or an HTTP redirect (`false`).

使用`window.location.href`或者`window.location.replace()`来重定向到`url`。传入第二个参数来决定模拟一个链接点击（传入`true`）还是一个HTTP重定向（传入`false`）。

```js
const redirect = (url, asLink = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);
```

<details>
<summary>Examples</summary>

```js
redirect('https://google.com');
```

</details>

<br>[⬆ Back to top](#contents)

### runAsync ![advanced](/advanced.svg)

Runs a function in a separate thread by using a [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers), allowing long running functions to not block the UI.

使用[Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)在单独的线程中运行一个函数，支持持续运行的函数不阻塞UI。

Create a new `Worker` using a `Blob` object URL, the contents of which should be the stringified version of the supplied function.
Immediately post the return value of calling the function back.
Return a promise, listening for `onmessage` and `onerror` events and resolving the data posted back from the worker, or throwing an error.

用`Blob`对象URL来创建一个新的`Worker`，它的内容应该是给出函数的序列化版本。立即发送包含函数的返回值的请求。监听`onmessage`和`onerror`来返回一个promise，并把从worker返回的请求数据resovle，或者抛出一个错误。

```js
const runAsync = fn => {
  const worker = new Worker(
    URL.createObjectURL(new Blob([`postMessage((${fn})());`]), {
      type: 'application/javascript; charset=utf-8'
    })
  );
  return new Promise((res, rej) => {
    worker.onmessage = ({ data }) => {
      res(data), worker.terminate();
    };
    worker.onerror = err => {
      rej(err), worker.terminate();
    };
  });
};
```

<details>
<summary>Examples</summary>

```js
const longRunningFunction = () => {
  let result = 0;
  for (let i = 0; i < 1000; i++)
    for (let j = 0; j < 700; j++) for (let k = 0; k < 300; k++) result = result + i + j + k;

  return result;
};
/*
  NOTE: Since the function is running in a different context, closures are not supported.
  The function supplied to `runAsync` gets stringified, so everything becomes literal.
  All variables and functions must be defined inside.
*/
runAsync(longRunningFunction).then(console.log); // 209685000000
runAsync(() => 10 ** 3).then(console.log); // 1000
let outsideVariable = 50;
runAsync(() => typeof outsideVariable).then(console.log); // 'undefined'
```

</details>

<br>[⬆ Back to top](#contents)

### scrollToTop

Smooth-scrolls to the top of the page.

平滑的滑动到页面顶部。

Get distance from top using `document.documentElement.scrollTop` or `document.body.scrollTop`.
Scroll by a fraction of the distance from the top. Use `window.requestAnimationFrame()` to animate the scrolling.

使用`document.documentElement.scrollTop`或者`document.body.scrollTop`获取到顶部的距离。从顶部滚动一部分距离。使用`window.requestAnimationFrame()`来执行滚动操作。

```js
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};
```

<details>
<summary>Examples</summary>

```js
scrollToTop();
```

</details>

<br>[⬆ Back to top](#contents)

### serializeForm

Encode a set of form elements as a query string.

Use the `FormData` constructor to convert the HTML `form` to `FormData`, `Array.from()` to convert to an array, passing a map function as the second argument.
Use `Array.prototype.map()` and `window.encodeURIComponent()` to encode each field's value.
Use `Array.prototype.join()` with appropriate argumens to produce an appropriate query string.

```js
const serializeForm = form =>
  Array.from(new FormData(form), field => field.map(encodeURIComponent).join('=')).join('&');
```

<details>
<summary>Examples</summary>

```js
serializeForm(document.querySelector('#form')); // email=test%40email.com&name=Test%20Name
```

</details>

<br>[⬆ Back to top](#contents)

### setStyle

Sets the value of a CSS rule for the specified element.

为指定的元素设置CSS规则值。

Use `element.style` to set the value of the CSS rule for the specified element to `val`.

使用`element.style`来把指定元素的CSS值设置为`val`。

```js
const setStyle = (el, ruleName, val) => (el.style[ruleName] = val);
```

<details>
<summary>Examples</summary>

```js
setStyle(document.querySelector('p'), 'font-size', '20px'); // The first <p> element on the page will have a font-size of 20px
```

</details>

<br>[⬆ Back to top](#contents)

### show

Shows all the elements specified.

显示所有指定的元素。

Use the spread operator (`...`) and `Array.prototype.forEach()` to clear the `display` property for each element specified.

使用展开操作符(`...`)和`Array.prototype.forEach()`来清除每个指定元素的`display`属性。

```js
const show = (...el) => [...el].forEach(e => (e.style.display = ''));
```

<details>
<summary>Examples</summary>

```js
show(...document.querySelectorAll('img')); // Shows all <img> elements on the page
```

</details>

<br>[⬆ Back to top](#contents)

### smoothScroll

Smoothly scrolls the element on which it's called into the visible area of the browser window.

把指定元素滚动到它所调用的浏览器窗口的可见区域内。

Use `.scrollIntoView` method to scroll the element. 
Pass `{ behavior: 'smooth' }` to `.scrollIntoView` so it scrolls smoothly.

使用`.scrollIntoView`方法来滚动元素。把`{ behavior: 'smooth' }`传给`.scrollIntoView`，所以滚动是平滑的。

```js
const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });
```

<details>
<summary>Examples</summary>

```js
smoothScroll('#fooBar'); // scrolls smoothly to the element with the id fooBar
smoothScroll('.fooBar'); // scrolls smoothly to the first element with a class of fooBar
```

</details>

<br>[⬆ Back to top](#contents)

### toggleClass

Toggle a class for an element.

开关一个元素的class。

Use `element.classList.toggle()` to toggle the specified class for the element.

使用`element.classList.toggle()`来开关指定元素的class。

```js
const toggleClass = (el, className) => el.classList.toggle(className);
```

<details>
<summary>Examples</summary>

```js
toggleClass(document.querySelector('p.special'), 'special'); // The paragraph will not have the 'special' class anymore
```

</details>

<br>[⬆ Back to top](#contents)

### triggerEvent

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

<details>
<summary>Examples</summary>

```js
triggerEvent(document.getElementById('myId'), 'click');
triggerEvent(document.getElementById('myId'), 'click', { username: 'bob' });
```

</details>

<br>[⬆ Back to top](#contents)

### UUIDGeneratorBrowser

Generates a UUID in a browser.

在浏览器环境中生成一个UUID。

Use `crypto` API to generate a UUID, compliant with [RFC4122](https://www.ietf.org/rfc/rfc4122.txt) version 4.

使用`crypto`来生成遵从[RFC4122](https://www.ietf.org/rfc/rfc4122.txt)第4版本的UUID。

```js
const UUIDGeneratorBrowser = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
  );
```

<details>
<summary>Examples</summary>

```js
UUIDGeneratorBrowser(); // '7982fcfe-5721-4632-bede-6000885be57d'
```

</details>

<br>[⬆ Back to top](#contents)


---

## ⏱️ Date

### dayOfYear

Gets the day of the year from a `Date` object.

从一个`Date`对象中获取它是一年中的第多少天。

Use `new Date()` and `Date.prototype.getFullYear()` to get the first day of the year as a `Date` object, subtract it from the provided `date` and divide with the milliseconds in each day to get the result.
Use `Math.floor()` to appropriately round the resulting day count to an integer.

使用`new Date()`和`Date.prototype.getFullYear()`获取这一年的第一天来作为一个`Date`对象，用给定的`date`减掉它并除以每天中的毫秒数来获得结果。使用`Math.floor()`把计算结果天数适当的取整。

```js
const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
// 直接给参数一个默认值，计算当天
```

<details>
<summary>Examples</summary>

```js
dayOfYear(new Date()); // 272
```

</details>

<br>[⬆ Back to top](#contents)

### formatDuration

Returns the human readable format of the given number of milliseconds.

返回一个给定毫秒数值的可读格式。

Divide `ms` with the appropriate values to obtain the appropriate values for `day`, `hour`, `minute`, `second` and `millisecond`.
Use `Object.entries()` with `Array.prototype.filter()` to keep only non-zero values.
Use `Array.prototype.map()` to create the string for each value, pluralizing appropriately.
Use `String.prototype.join(', ')` to combine the values into a string.

把`ms`分为易于处理的`day`, `hour`, `minute`, `second`和`millisecond`几个值。使用`Object.entries()`和`Array.prototype.filter()`来只保留非零值。使用`Array.prototype.map()`来为每个值创建一个字符串，变为合适的复数形式。使用`String.prototype.join(', ')`把生成的值合并成一个字符串。

```js
const formatDuration = ms => {
  if (ms < 0) ms = -ms;
  const time = {
    day: Math.floor(ms / 86400000),
    hour: Math.floor(ms / 3600000) % 24,
    minute: Math.floor(ms / 60000) % 60,
    second: Math.floor(ms / 1000) % 60,
    millisecond: Math.floor(ms) % 1000
  };
  return Object.entries(time)
    .filter(val => val[1] !== 0)
    .map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`)
    .join(', ');
};
```

<details>
<summary>Examples</summary>

```js
formatDuration(1001); // '1 second, 1 millisecond'
formatDuration(34325055574); // '397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds'
```

</details>

<br>[⬆ Back to top](#contents)

### getColonTimeFromDate

Returns a string of the form `HH:MM:SS` from a `Date` object.

返回一个`Date`对象的`HH:MM:SS`形式字符串。

Use `Date.prototype.toTimeString()` and `String.prototype.slice()` to get the `HH:MM:SS` part of a given `Date` object.

使用`Date.prototype.toTimeString()`和`String.prototype.slice()`来获取给定`Date`的`HH:MM:SS`部分。

```js
const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);
```

<details>
<summary>Examples</summary>

```js
getColonTimeFromDate(new Date()); // "08:38:00"
```

</details>

<br>[⬆ Back to top](#contents)

### getDaysDiffBetweenDates

Returns the difference (in days) between two dates.

返回两个时间对象的日期上的差值。

Calculate the difference (in days) between two `Date` objects.

计算两个时间对象的日期上的差值。

```js
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);
```

<details>
<summary>Examples</summary>

```js
getDaysDiffBetweenDates(new Date('2017-12-13'), new Date('2017-12-22')); // 9
```

</details>

<br>[⬆ Back to top](#contents)

### getMeridiemSuffixOfInteger

Converts an integer to a suffixed string, adding `am` or `pm` based on its value.

把一个整数转为带后缀的字符串，根据它们的值来添加`am`或者`pm`（添加到后面）。

Use the modulo operator (`%`) and conditional checks to transform an integer to a stringified 12-hour format with meridiem suffix.

使用取模操作符(`%`)和条件运算符来把一个整数转换为12小时制的子午线后缀字符串形式。

```js
const getMeridiemSuffixOfInteger = num =>
  num === 0 || num === 24
    ? 12 + 'am'
    : num === 12
      ? 12 + 'pm'
      : num < 12
        ? (num % 12) + 'am'
        : (num % 12) + 'pm';
```

<details>
<summary>Examples</summary>

```js
getMeridiemSuffixOfInteger(0); // "12am"
getMeridiemSuffixOfInteger(11); // "11am"
getMeridiemSuffixOfInteger(13); // "1pm"
getMeridiemSuffixOfInteger(25); // "1pm"
```

</details>

<br>[⬆ Back to top](#contents)

### isAfterDate

Check if a date is after another date.

检查一个日期是否在另一个日期后面。

Use the greater than operator (`>`) to check if the first date comes after the second one.

使用大于比较操作符(`>`)来检查第一个日期是否在第二个后面。

```js
const isAfterDate = (dateA, dateB) => dateA > dateB;
```

<details>
<summary>Examples</summary>

```js
isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true
```

</details>

<br>[⬆ Back to top](#contents)

### isBeforeDate

Check if a date is before another date.

检查一个日期是否在另一个日期前面。

Use the less than operator (`<`) to check if the first date comes before the second one.

使用小于比较操作符(`>`)来检查第一个日期是否在第二个前面。

```js
const isBeforeDate = (dateA, dateB) => dateA < dateB;
```

<details>
<summary>Examples</summary>

```js
isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // true
```

</details>

<br>[⬆ Back to top](#contents)

### isSameDate

Check if a date is the same as another date.

检查一个日期是否与另一个日期相同。

Use `Date.prototype.toISOString()` and strict equality checking (`===`) to check if the first date is the same as the second one.

使用`Date.prototype.toISOString()`和严格的相等符号(`===`) 来检查第一个日期是否与第二个相同。

```js
const isSameDate = (dateA, dateB) => dateA.toISOString() === dateB.toISOString();
```

<details>
<summary>Examples</summary>

```js
isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)); // true
```

</details>

<br>[⬆ Back to top](#contents)

### isWeekday

Results in a boolean representation of a specific date.

Pass the specific date object firstly.
Use `Date.getDay()` to check weekday by using a modulo operator and then returning a boolean.

```js
const isWeekday = (t = new Date()) => {
  return t.getDay() % 6 !== 0;
};
```

<details>
<summary>Examples</summary>

```js
isWeekday(); // true (if current date is 2019-07-19)
```

</details>

<br>[⬆ Back to top](#contents)

### isWeekend

Results in a boolean representation of a specific date.

Pass the specific date object firstly.
Use `Date.getDay()` to check weekend based on the day being returned as 0 - 6 using a modulo operation then return a boolean.

```js
const isWeekend = (t = new Date()) => {
  return t.getDay() % 6 === 0;
};
```

<details>
<summary>Examples</summary>

```js
isWeekend(); // 2018-10-19 (if current date is 2018-10-18)
```

</details>

<br>[⬆ Back to top](#contents)

### maxDate

Returns the maximum of the given dates.

Use the ES6 spread syntax with `Math.max` to find the maximum date value, `new Date()` to convert it to a `Date` object.

使用ES6的展开操作符配合`Math.max`来找到最大的日期值，用`new Date()`把它们转为一个`Date`对象。

```js
const maxDate = dates => new Date(Math.max(...dates));
```

<details>
<summary>Examples</summary>

```js
const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
maxDate(array); // 2018-03-11T22:00:00.000Z
```

</details>

<br>[⬆ Back to top](#contents)

### minDate

Returns the minimum of the given dates.

Use the ES6 spread syntax to find the minimum date value, `new Date()` to convert it to a `Date` object.

使用ES6的展开操作符来找到最小的日期值，用`new Date()`把它们转为一个`Date`对象。

```js
const minDate = dates => new Date(Math.min(...dates));
```

<details>
<summary>Examples</summary>

```js
const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
minDate(array); // 2016-01-08T22:00:00.000Z
```

</details>

<br>[⬆ Back to top](#contents)

### tomorrow

Results in a string representation of tomorrow's date.

返回一个代表明天日期的字符串。

Use `new Date()` to get the current date, increment by one using `Date.getDate()` and set the value to the result using `Date.setDate()`. 
Use `Date.prototype.toISOString()` to return a string in `yyyy-mm-dd` format.

使用`new Date()`来获取今天的日期，使用`Date.getDate()`和`Date.setDate()`设置值来把日期增加一天。使用`Date.prototype.toISOString()`返回`yyyy-mm-dd`格式的字符串。

```js
const tomorrow = () => {
  let t = new Date();
  t.setDate(t.getDate() + 1);
  return t.toISOString().split('T')[0];
};
```

<details>
<summary>Examples</summary>

```js
tomorrow(); // 2018-10-19 (if current date is 2018-10-18)
```

</details>

<br>[⬆ Back to top](#contents)

### yesterday

Results in a string representation of yesterday's date.

Use `new Date()` to get the current date, decrement by one using `Date.getDate()` and set the value to the result using `Date.setDate()`.
Use `Date.prototype.toISOString()` to return a string in `yyyy-mm-dd` format.

```js
const yesterday = () => {
  let t = new Date();
  t.setDate(t.getDate() - 1);
  return t.toISOString().split('T')[0];
};
```

<details>
<summary>Examples</summary>

```js
yesterday(); // 2018-10-17 (if current date is 2018-10-18)
```

</details>

<br>[⬆ Back to top](#contents)


---

## 🎛️ Function

### attempt

Attempts to invoke a function with the provided arguments, returning either the result or the caught error object.

尝试用给定的参数执行一个函数，返回结果或者捕获一个错误对象。

Use a `try... catch` block to return either the result of the function or an appropriate error.

使用`try... catch`块返回函数结果或者一个合适的错误。

```js
const attempt = (fn, ...args) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};
```

<details>
<summary>Examples</summary>

```js
var elements = attempt(function(selector) {
  return document.querySelectorAll(selector);
}, '>_>');
if (elements instanceof Error) elements = []; // elements = []
```

</details>

<br>[⬆ Back to top](#contents)

### bind

Creates a function that invokes `fn` with a given context, optionally adding any additional supplied parameters to the beginning of the arguments.

创建一个在指定上下文执行`fn`的函数，可选的在参数列表的头部添加额外提供的参数。

Return a `function` that uses `Function.prototype.apply()` to apply the given `context` to `fn`.
Use `Array.prototype.concat()` to prepend any additional supplied parameters to the arguments.

返回一个的函数`function`，它使用`Function.prototype.apply()`来把给定的`context`应用到`fn`。使用`Array.prototype.concat()`来把给定的额外参数添加到参数列表的头部。

```js
const bind = (fn, context, ...boundArgs) => (...args) => fn.apply(context, [...boundArgs, ...args]);
```

<details>
<summary>Examples</summary>

```js
function greet(greeting, punctuation) {
  return greeting + ' ' + this.user + punctuation;
}
const freddy = { user: 'fred' };
const freddyBound = bind(greet, freddy);
console.log(freddyBound('hi', '!')); // 'hi fred!'
```

</details>

<br>[⬆ Back to top](#contents)

### bindKey

Creates a function that invokes the method at a given key of an object, optionally adding any additional supplied parameters to the beginning of the arguments.

创建一个执行给定对象的指定key中的方法的函数（调用对象的某个方法属性），可选的在参数列表的头部添加任何额外提供的参数。

Return a `function` that uses `Function.prototype.apply()` to bind `context[fn]` to `context`.
Use the spread operator (`...`) to prepend any additional supplied parameters to the arguments.

返回一个函数`function`，它使用`Function.prototype.apply()`来把`context[fn]`的上下文绑定为`context`。使用展开操作符(`...`)来把给定的额外参数添加到参数列表的头部。

```js
const bindKey = (context, fn, ...boundArgs) => (...args) =>
  context[fn].apply(context, [...boundArgs, ...args]);
```

<details>
<summary>Examples</summary>

```js
const freddy = {
  user: 'fred',
  greet: function(greeting, punctuation) {
    return greeting + ' ' + this.user + punctuation;
  }
};
const freddyBound = bindKey(freddy, 'greet');
console.log(freddyBound('hi', '!')); // 'hi fred!'
```

</details>

<br>[⬆ Back to top](#contents)

### chainAsync

Chains asynchronous functions.

链式执行异步函数。

Loop through an array of functions containing asynchronous events, calling `next` when each asynchronous event has completed.

遍历执行一个包含异步事件的函数数组，当每个异步事件被完成时调用`next`。（创建了一个使用next来触发下一步的链式执行机制）

```js
const chainAsync = fns => {
  let curr = 0;
  const last = fns[fns.length - 1];
  const next = () => {
    const fn = fns[curr++];
    fn === last ? fn() : fn(next);
  };
  next();
};
```

<details>
<summary>Examples</summary>

```js
chainAsync([
  next => {
    console.log('0 seconds');
    setTimeout(next, 1000);
  },
  next => {
    console.log('1 second');
    setTimeout(next, 1000);
  },
  () => {
    console.log('2 second');
  }
]);
```

</details>

<br>[⬆ Back to top](#contents)

### checkProp

Given a `predicate` function and a `prop` string, this curried function will then take an `object` to inspect by calling the property and passing it to the predicate.

Summon `prop` on `obj`, pass it to a provided `predicate` function and return a masked boolean.

```js
const checkProp = (predicate, prop) => obj => !!predicate(obj[prop]);
```

<details>
<summary>Examples</summary>

```js
















const lengthIs4 = checkProp(l => l === 4, 'length');
lengthIs4([]); // false
lengthIs4([1,2,3,4]); // true
lengthIs4(new Set([1,2,3,4])); // false (Set uses Size, not length)

const session = { user: {} };
const validUserSession = checkProps(u => u.active && !u.disabled, 'user');

validUserSession(session); // false

session.user.active = true;
validUserSession(session); // true

const noLength(l => l === undefined, 'length');
noLength([]); // false
noLength({}); // true
noLength(new Set()); // true
```

</details>

<br>[⬆ Back to top](#contents)

### compose

Performs right-to-left function composition.

执行从右到左的函数复合（嵌套的函数调用）。

Use `Array.prototype.reduce()` to perform right-to-left function composition.
The last (rightmost) function can accept one or more arguments; the remaining functions must be unary.

使用`Array.prototype.reduce()`来执行从右到左的函数复合。最后（最右边）的函数可以接收一个或多个参数；剩余的函数必须是一元的。

```js
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
```

<details>
<summary>Examples</summary>

```js
const add5 = x => x + 5;
const multiply = (x, y) => x * y;
const multiplyAndAdd5 = compose(
  add5,
  multiply
);
multiplyAndAdd5(5, 2); // 15
```

</details>

<br>[⬆ Back to top](#contents)

### composeRight

Performs left-to-right function composition.

执行从左到右的函数复合（嵌套的函数调用）。

Use `Array.prototype.reduce()` to perform left-to-right function composition.
The first (leftmost) function can accept one or more arguments; the remaining functions must be unary.

使用`Array.prototype.reduce()`来执行从左到右的函数组合。第一个（最左边）的函数可以接收一个或多个参数；剩余的函数必须是一元的。

```js
const composeRight = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));
```

<details>
<summary>Examples</summary>

```js
const add = (x, y) => x + y;
const square = x => x * x;
const addAndSquare = composeRight(add, square);
addAndSquare(1, 2); // 9
```

</details>

<br>[⬆ Back to top](#contents)

### converge

Accepts a converging function and a list of branching functions and returns a function that applies each branching function to the arguments and the results of the branching functions are passed as arguments to the converging function.

接受一个聚合函数和一个分支函数列表并返回一个把每个分支函数应用到参数列表的函数，分支函数列表的结果列表被作为参数传给聚合函数。

Use `Array.prototype.map()` and `Function.prototype.apply()` to apply each function to the given arguments.
Use the spread operator (`...`) to call `coverger` with the results of all other functions.

使用`Array.prototype.map()`和`Function.prototype.apply()`来对给定的参数执行每个函数。使用展开操作符(`...`)来对其他函数的结果列表调用`coverger`。

```js
const converge = (converger, fns) => (...args) => converger(...fns.map(fn => fn.apply(null, args)));
// 返回结果是一个函数，这个函数接受的参数传给分支函数，每个分支函数处理后把结果列表作为聚合函数的参数。
```

<details>
<summary>Examples</summary>

```js
const average = converge((a, b) => a / b, [
  arr => arr.reduce((a, v) => a + v, 0),
  arr => arr.length
]);
average([1, 2, 3, 4, 5, 6, 7]); // 4
```

</details>

<br>[⬆ Back to top](#contents)

### curry

Curries a function.

柯里化一个函数。

Use recursion.
If the number of provided arguments (`args`) is sufficient, call the passed function `fn`.
Otherwise, return a curried function `fn` that expects the rest of the arguments.
If you want to curry a function that accepts a variable number of arguments (a variadic function, e.g. `Math.min()`), you can optionally pass the number of arguments to the second parameter `arity`.

使用递归。如果给定参数列表(`args`)的个数是足够的，则使用它们调用传入的函数`fn`。否则返回一个接收剩余参数的柯里化的函数`fn`。如果你想柯里化一个接受可变数目参数的函数（可变参数函数, 例如`Math.min()`），你可以可选的传入参数列表的长度到第二个参数`arity`。

```js
const curry = (fn, arity = fn.length, ...args) =>
  // fn.length可以取得fn的参数数目
  arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args); // 已经有的参数先绑上；bind一方面绑上下文this，一方面绑参数
```

<details>
<summary>Examples</summary>

```js
curry(Math.pow)(2)(10); // 1024
curry(Math.min, 3)(10)(50)(2); // 2
```

</details>

<br>[⬆ Back to top](#contents)

### debounce

Creates a debounced function that delays invoking the provided function until at least `ms` milliseconds have elapsed since the last time it was invoked.

创建一个最少延迟`ms`毫秒执行（本次在上一次执行`ms`毫秒之后）给定函数的防抖的函数。通俗的讲：停止改变大小n毫秒后才执行函数。

Each time the debounced function is invoked, clear the current pending timeout with `clearTimeout()` and use `setTimeout()` to create a new timeout that delays invoking the function until at least `ms` milliseconds has elapsed. Use `Function.prototype.apply()` to apply the `this` context to the function and provide the necessary arguments.
Omit the second argument, `ms`, to set the timeout at a default of 0 ms.

每次防抖的函数被执行，都用`clearTimeout()`把当前挂起的timeout清除，并用`setTimeout()`创建一个新的最少延迟`ms`毫秒执行这个函数的timeout。使用`Function.prototype.apply()`来把`this`上下文环境应用到这个函数上并提供需要的参数列表。如果不传第二个参数`ms`，则timeout默认为0ms。
```js
const debounce = (fn, ms = 0) => {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};
```

<details>
<summary>Examples</summary>

```js
window.addEventListener(
  'resize',
  debounce(() => {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
  }, 250)
); // Will log the window dimensions at most every 250ms
```

</details>

<br>[⬆ Back to top](#contents)

### defer

Defers invoking a function until the current call stack has cleared.

延迟直到当前的调用栈清空后才执行函数（原理涉及到JS任务队列机制）。

Use `setTimeout()` with a timeout of 1ms to add a new event to the browser event queue and allow the rendering engine to complete its work. Use the spread (`...`) operator to supply the function with an arbitrary number of arguments.

使用一个1ms的timeout的`setTimeout()`来向浏览器事件队列中添加一个新的事件，然后让渲染引擎继续它的工作。使用展开操作符(`...`)来给函数提供相应参数数目的参数列表。

```js
const defer = (fn, ...args) => setTimeout(fn, 1, ...args);
```

<details>
<summary>Examples</summary>

```js
// Example A:
defer(console.log, 'a'), console.log('b'); // logs 'b' then 'a'

// Example B:
document.querySelector('#someElement').innerHTML = 'Hello';
longRunningFunction(); // Browser will not update the HTML until this has finished
defer(longRunningFunction); // Browser will update the HTML then run the function
```

</details>

<br>[⬆ Back to top](#contents)

### delay

Invokes the provided function after `wait` milliseconds.

`wait`毫秒后执行给定的函数。

Use `setTimeout()` to delay execution of `fn`.
Use the spread (`...`) operator to supply the function with an arbitrary number of arguments.

使用`setTimeout()`来延迟执行`fn`。使用展开操作符(`...`)来给函数提供相应参数数目的参数列表。

```js
const delay = (fn, wait, ...args) => setTimeout(fn, wait, ...args);
```

<details>
<summary>Examples</summary>

```js
delay(
  function(text) {
    console.log(text);
  },
  1000,
  'later'
); // Logs 'later' after one second.
```

</details>

<br>[⬆ Back to top](#contents)

### functionName

Logs the name of a function.

打印出函数的名称。

Use `console.debug()` and the `name` property of the passed method to log the method's name to the `debug` channel of the console.

使用`console.debug()`和传入方法的`name`属性来把方法的名称输出到console的`debug`通道。

```js
const functionName = fn => (console.debug(fn.name), fn);
```

<details>
<summary>Examples</summary>

```js
functionName(Math.max); // max (logged in debug channel of console)
```

</details>

<br>[⬆ Back to top](#contents)

### hz

Returns the number of times a function executed per second. 
`hz` is the unit for `hertz`, the unit of frequency defined as one cycle per second.

返回一个函数每秒执行的次数。`hz`是`hertz`的单位，被定义为以每秒为一个周期的频率单位。

Use `performance.now()` to get the difference in milliseconds before and after the iteration loop to calculate the time elapsed executing the function `iterations` times. 
Return the number of cycles per second by converting milliseconds to seconds and dividing it by the time elapsed. 
Omit the second argument, `iterations`, to use the default of 100 iterations.

使用`performance.now()`来获取迭代循环执行`iterations`次函数的执行时间的前后差值（以毫秒为单位）。把毫秒转换为秒并除以时间长度，返回每秒的循环次数。如果不传第二个参数`iterations`，默认值为循环100次。

```js
const hz = (fn, iterations = 100) => {
  const before = performance.now();
  for (let i = 0; i < iterations; i++) fn();
  return (1000 * iterations) / (performance.now() - before);
};
```

<details>
<summary>Examples</summary>

```js
// 10,000 element array
const numbers = Array(10000)
  .fill()
  .map((_, i) => i);

// Test functions with the same goal: sum up the elements in the array
const sumReduce = () => numbers.reduce((acc, n) => acc + n, 0);
const sumForLoop = () => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  return sum;
};

// `sumForLoop` is nearly 10 times faster
Math.round(hz(sumReduce)); // 572
Math.round(hz(sumForLoop)); // 4784
```

</details>

<br>[⬆ Back to top](#contents)

### memoize ![advanced](/advanced.svg)

Returns the memoized (cached) function.

返回存（缓存）的函数。

Create an empty cache by instantiating a new `Map` object.
Return a function which takes a single argument to be supplied to the memoized function by first checking if the function's output for that specific input value is already cached, or store and return it if not. The `function` keyword must be used in order to allow the memoized function to have its `this` context changed if necessary.
Allow access to the `cache` by setting it as a property on the returned function.

初始化一个新的`Map`对象作为空缓存。返回一个接收一个参数的函数，用这个参数作为存函数检查这个函数收到指定的输入所得到的输出是否已经被缓存的主要依据。`function`关键字必须按顺序使用，以允许保存函数在必要时改变它的`this`上下文。把`cache`作为返回的函数的一个属性，从而让它可以被访问。

```js
const memoize = fn => {
  const cache = new Map();
  const cached = function(val) {
    return cache.has(val) ? cache.get(val) : cache.set(val, fn.call(this, val)) && cache.get(val);
  };
  cached.cache = cache;
  return cached;
};
```

<details>
<summary>Examples</summary>

```js
// See the `anagrams` snippet.
const anagramsCached = memoize(anagrams);
anagramsCached('javascript'); // takes a long time
anagramsCached('javascript'); // returns virtually instantly since it's now cached
console.log(anagramsCached.cache); // The cached anagrams map
```

</details>

<br>[⬆ Back to top](#contents)

### negate

Negates a predicate function.

否定化一个断言函数。

Take a predicate function and apply the not operator (`!`) to it with its arguments.

接收一个断言函数并把否定操作符(`!`)和参数应用给它。

```js
const negate = func => (...args) => !func(...args);
```

<details>
<summary>Examples</summary>

```js
[1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0)); // [ 1, 3, 5 ]
```

</details>

<br>[⬆ Back to top](#contents)

### once

Ensures a function is called only once.

保证一个函数只调用一次。

Utilizing a closure, use a flag, `called`, and set it to `true` once the function is called for the first time, preventing it from being called again. In order to allow the function to have its `this` context changed (such as in an event listener), the `function` keyword must be used, and the supplied function must have the context applied.
Allow the function to be supplied with an arbitrary number of arguments using the rest/spread (`...`) operator.

利用一个闭包，使用标志位`called`，并在函数第一被调用时把它设置到`true`，以防止它被再次调用。为了让函数可以有特定的`this`上下文（类似在一个事件监听器中），所以要使用函数关键字`function`，提供的函数必须应用了上下文。使用剩余展开操作符(`...`) 来让这个函数支持提供相应参数数目的参数列表。

```js
const once = fn => {
  let called = false;
  return function(...args) {
    if (called) return;
    called = true;
    return fn.apply(this, args);
  };
};
```

<details>
<summary>Examples</summary>

```js
const startApp = function(event) {
  console.log(this, event); // document.body, MouseEvent
};
document.body.addEventListener('click', once(startApp)); // only runs `startApp` once upon click
```

</details>

<br>[⬆ Back to top](#contents)

### partial

Creates a function that invokes `fn` with `partials` prepended to the arguments it receives.

创建一个用部分参数`partials`结合新接收的参数来执行`fn`的函数。

Use the spread operator (`...`) to prepend `partials` to the list of arguments of `fn`.

使用展开操作符(`...`)来把`partials`放到`fn`的参数列表前部。

```js
const partial = (fn, ...partials) => (...args) => fn(...partials, ...args);
```

<details>
<summary>Examples</summary>

```js
const greet = (greeting, name) => greeting + ' ' + name + '!';
const greetHello = partial(greet, 'Hello');
greetHello('John'); // 'Hello John!'
```

</details>

<br>[⬆ Back to top](#contents)

### partialRight

Creates a function that invokes `fn` with `partials` appended to the arguments it receives.

创建一个用部分参数`partials`放到新接收的参数尾部来执行`fn`的函数。

Use the spread operator (`...`) to append `partials` to the list of arguments of `fn`.

使用展开操作符(`...`)来把`partials`放到`fn`的参数列表尾部。

```js
const partialRight = (fn, ...partials) => (...args) => fn(...args, ...partials);
```

<details>
<summary>Examples</summary>

```js
const greet = (greeting, name) => greeting + ' ' + name + '!';
const greetJohn = partialRight(greet, 'John');
greetJohn('Hello'); // 'Hello John!'
```

</details>

<br>[⬆ Back to top](#contents)

### runPromisesInSeries

Runs an array of promises in series.

按顺序执行一个promise的数组。

Use `Array.prototype.reduce()` to create a promise chain, where each promise returns the next promise when resolved.

使用`Array.prototype.reduce()`来创建一个每个prosmise解决后返回下一个promise的promise链。

```js
const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());
```

<details>
<summary>Examples</summary>

```js
const delay = d => new Promise(r => setTimeout(r, d));
runPromisesInSeries([() => delay(1000), () => delay(2000)]); // Executes each promise sequentially, taking a total of 3 seconds to complete
```

</details>

<br>[⬆ Back to top](#contents)

### sleep

Delays the execution of an asynchronous function.

延迟一个异步函数的执行。

Delay executing part of an `async` function, by putting it to sleep, returning a `Promise`.

通过把`async`函数放到sleep后，延迟它的部分执行，返回一个`Promise`。

```js
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
```

<details>
<summary>Examples</summary>

```js
async function sleepyWork() {
  console.log("I'm going to sleep for 1 second.");
  await sleep(1000);
  console.log('I woke up after 1 second.');
}
```

</details>

<br>[⬆ Back to top](#contents)

### throttle ![advanced](/advanced.svg)

Creates a throttled function that only invokes the provided function at most once per every `wait` milliseconds

创建一个每`wait`毫秒中最多执行给定的函数一次的节流函数。

Use `setTimeout()` and `clearTimeout()` to throttle the given method, `fn`.
Use `Function.prototype.apply()` to apply the `this` context to the function and provide the necessary `arguments`.
Use `Date.now()` to keep track of the last time the throttled function was invoked.
Omit the second argument, `wait`, to set the timeout at a default of 0 ms.

使用`setTimeout()`和`clearTimeout()`来节制给定的方法`fn`。使用`Function.prototype.apply()`把`this`上下文应用到这个函数并提供必要的`arguments`。使用`Date.now()`来记录被节流的函数的上一次执行时间。如果不传第二个参数`wait`，则把timeout(时间间隔)设置为默认的0ms。

```js
const throttle = (fn, wait) => {
  let inThrottle, lastFn, lastTime;
  return function() {
    const context = this,
      args = arguments;
    if (!inThrottle) {
      fn.apply(context, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(function() {
        if (Date.now() - lastTime >= wait) {
          fn.apply(context, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};
```

<details>
<summary>Examples</summary>

```js
window.addEventListener(
  'resize',
  throttle(function(evt) {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
  }, 250)
); // Will log the window dimensions at most every 250ms
```

</details>

<br>[⬆ Back to top](#contents)

### times

Iterates over a callback `n` times

循环一个回调函数`n`次。

Use `Function.call()` to call `fn` `n` times or until it returns `false`.
Omit the last argument, `context`, to use an `undefined` object (or the global object in non-strict mode).

使用`Function.call()`来调用`fn`函数`n`次或者直到它返回`false`。如果不传最后一个参数`context`，则使用一个`undefined`对象（在non-strict模式下使用全局对象）。

```js
const times = (n, fn, context = undefined) => {
  let i = 0;
  while (fn.call(context, i) !== false && ++i < n) {}
};
```

<details>
<summary>Examples</summary>

```js
var output = '';
times(5, i => (output += i));
console.log(output); // 01234
```

</details>

<br>[⬆ Back to top](#contents)

### uncurry

Uncurries a function up to depth `n`.

去柯里化一个函数，最大处理深度为`n`。

Return a variadic function.
Use `Array.prototype.reduce()` on the provided arguments to call each subsequent curry level of the function.
If the `length` of the provided arguments is less than `n` throw an error.
Otherwise, call `fn` with the proper amount of arguments, using `Array.prototype.slice(0, n)`.
Omit the second argument, `n`, to uncurry up to depth `1`.

返回一个参数数目不确定的函数。对给定的参数列表使用`Array.prototype.reduce()`来调用这个函数的每个柯里化的层级。如果给定参数列表的`length`比`n`小则抛出异常。否则使用`Array.prototype.slice(0, n)`获取合适数目的参数列表来调用`fn`。如果不传第二个参数`n`，则最大去柯里化深度为`1`。

```js
const uncurry = (fn, n = 1) => (...args) => {
  const next = acc => args => args.reduce((x, y) => x(y), acc);
  if (n > args.length) throw new RangeError('Arguments too few!');
  return next(fn)(args.slice(0, n));
};
```

<details>
<summary>Examples</summary>

```js
const add = x => y => z => x + y + z;
const uncurriedAdd = uncurry(add, 3);
uncurriedAdd(1, 2, 3); // 6
```

</details>

<br>[⬆ Back to top](#contents)

### unfold

Builds an array, using an iterator function and an initial seed value.

使用一个遍历函数或者一个初始种子值来创建一个数组。

Use a `while` loop and `Array.prototype.push()` to call the function repeatedly until it returns `false`.
The iterator function accepts one argument (`seed`) and must always return an array with two elements ([`value`, `nextSeed`]) or `false` to terminate.

使用一个`while`循环和`Array.prototype.push()`来重复调用函数直到它返回`false`。这个遍历函数接收一个参数（`seed`）并且必须返回一个具有两个元素的数组（[`value`, `nextSeed`]）或者返回`false`来结束迭代。

```js
const unfold = (fn, seed) => {
  let result = [],
    val = [null, seed];
  while ((val = fn(val[1]))) result.push(val[0]);
  return result;
};
```

<details>
<summary>Examples</summary>

```js
var f = n => (n > 50 ? false : [-n, n + 10]);
unfold(f, 10); // [-10, -20, -30, -40, -50]
```

</details>

<br>[⬆ Back to top](#contents)

### when

Tests a value, `x`, against a predicate function. If `true`, return `fn(x)`. Else, return `x`. 

用断言函数测试一个值`x`。如果结构为`true`则返回`fn(x)`,否则返回`x`。

Return a function expecting a single value, `x`, that returns the appropriate value based on `pred`.

返回一个接收一个值`x`，并且根据`pred`决定合适的返回值的函数。

```js
const when = (pred, whenTrue) => x => (pred(x) ? whenTrue(x) : x);
```

<details>
<summary>Examples</summary>

```js
const doubleEvenNumbers = when(x => x % 2 === 0, x => x * 2);
doubleEvenNumbers(2); // 4
doubleEvenNumbers(1); // 1
```

</details>

<br>[⬆ Back to top](#contents)


---

## ➗ Math

### approximatelyEqual

Checks if two numbers are approximately equal to each other.

检查两个数是否近似相等。

Use `Math.abs()` to compare the absolute difference of the two values to `epsilon`.
Omit the third parameter, `epsilon`, to use a default value of `0.001`.

使用`Math.abs()`计算两个值的差的绝对值，比较它和`epsilon`的大小。如果不传第三个参数`epsilon`，使用默认值`0.001`。

```js
const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon; // 程序中比较近似相等的通用思路，epsilon可以被看做一个比较精度
```

<details>
<summary>Examples</summary>

```js
approximatelyEqual(Math.PI / 2.0, 1.5708); // true
```

</details>

<br>[⬆ Back to top](#contents)

### average

Returns the average of two or more numbers.

返回两个或多个数的平均值。

Use `Array.prototype.reduce()` to add each value to an accumulator, initialized with a value of `0`, divide by the `length` of the array.

使用`Array.prototype.reduce()`来把每个值添加到累加器中，初始累加值为`0`，再除以数组的长度`length`。

```js
const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;
```

<details>
<summary>Examples</summary>

```js
average(...[1, 2, 3]); // 2
average(1, 2, 3); // 2
```

</details>

<br>[⬆ Back to top](#contents)

### averageBy

Returns the average of an array, after mapping each element to a value using the provided function.

把每个元素使用给出的函数映射到一个值，返回值数组的平均值。

Use `Array.prototype.map()` to map each element to the value returned by `fn`, `Array.prototype.reduce()` to add each value to an accumulator, initialized with a value of `0`, divide by the `length` of the array.

使用`Array.prototype.map()`来把每个元素映射到`fn`返回的值，使用`Array.prototype.reduce()`来把每个返回的值添加到累加器中，初始累计值为`0`，最后除以数组的长度`length`。

```js
const averageBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /
  arr.length;
```

<details>
<summary>Examples</summary>

```js
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5
```

</details>

<br>[⬆ Back to top](#contents)

### binomialCoefficient

Evaluates the binomial coefficient of two integers `n` and `k`.

计算两个整数`n`和`k`产生的二项式系数。

Use `Number.isNaN()` to check if any of the two values is `NaN`.
Check if `k` is less than `0`, greater than or equal to `n`, equal to `1` or `n - 1` and return the appropriate result.
Check if `n - k` is less than `k` and switch their values accordingly.
Loop from `2` through `k` and calculate the binomial coefficient.
Use `Math.round()` to account for rounding errors in the calculation.

使用`Number.isNaN()`检查两个值是否是`NaN`。检查`k`是否小于`0`、大于或等于`n`、等于`1`或者`n-1`并返回这些情况下合适的结果。检查`n - k`是否小于`k`并交换它们的值。循环`2`到`k`并计算相应的二项式系数。使用`Math.round()`来处理计算中的近似错误（由于有除法计算，可能产生浮点数结果）。

```js
const binomialCoefficient = (n, k) => {
  if (Number.isNaN(n) || Number.isNaN(k)) return NaN;
  if (k < 0 || k > n) return 0;
  if (k === 0 || k === n) return 1;
  if (k === 1 || k === n - 1) return n;
  if (n - k < k) k = n - k;
  let res = n;
  for (let j = 2; j <= k; j++) res *= (n - j + 1) / j; // 这一步也是计算组合数的代码片段
  return Math.round(res);
};
```

<details>
<summary>Examples</summary>

```js
binomialCoefficient(8, 2); // 28
```

</details>

<br>[⬆ Back to top](#contents)

### clampNumber

Clamps `num` within the inclusive range specified by the boundary values `a` and `b`.

把`num`限制在通过边界值`a`和`b`指定的包含区间内。

If `num` falls within the range, return `num`.
Otherwise, return the nearest number in the range.

如果`num`落在区间内，则返回`num`。否则，返回区间内最接近它的数。

```js
const clampNumber = (num, a, b) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b)); // 画个数轴可以想明白这个代码的逻辑，通过min/max的组合使用把代码精简到一行，且没有分支
```

<details>
<summary>Examples</summary>

```js
clampNumber(2, 3, 5); // 3
clampNumber(1, -1, -5); // -1
```

</details>

<br>[⬆ Back to top](#contents)

### degreesToRads

Converts an angle from degrees to radians.

把一个角的角度值转为弧度值。

Use `Math.PI` and the degree to radian formula to convert the angle from degrees to radians.

使用`Math.PI`和角度到弧度的计算公式来把角的角度值转为弧度值。

```js
const degreesToRads = deg => (deg * Math.PI) / 180.0;
```

<details>
<summary>Examples</summary>

```js
degreesToRads(90.0); // ~1.5708
```

</details>

<br>[⬆ Back to top](#contents)

### digitize

Converts a number to an array of digits.

把一个数转换为每一位的数组。

Convert the number to a string, using the spread operator (`...`) to build an array.
Use `Array.prototype.map()` and `parseInt()` to transform each value to an integer.

把这个数转为一个字符串，是一种展开操作符(`...`)来创建一个数组。使用`Array.prototype.map()`和`parseInt()`来把每个值转为整数。

```js
const digitize = n => [...`${n}`].map(i => parseInt(i));
```

<details>
<summary>Examples</summary>

```js
digitize(123); // [1, 2, 3]
```

</details>

<br>[⬆ Back to top](#contents)

### distance

Returns the distance between two points.

返回两个点之间的距离。

Use `Math.hypot()` to calculate the Euclidean distance between two points.

使用`Math.hypot()`来计算两个点之间的欧式距离。

```js
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);
```

<details>
<summary>Examples</summary>

```js
distance(1, 1, 2, 3); // 2.23606797749979
```

</details>

<br>[⬆ Back to top](#contents)

### elo ![advanced](/advanced.svg)

Computes the new ratings between two or more opponents using the [Elo rating system](https://en.wikipedia.org/wiki/Elo_rating_system). It takes an array
of pre-ratings and returns an array containing post-ratings.
The array should be ordered from best performer to worst performer (winner -> loser).

使用[Elo rating system](https://en.wikipedia.org/wiki/Elo_rating_system)计算两个或更多竞争者的新评分。接收一个之前评分的数组，并返回一个包含之后评分的数组。数组应该以最优到最差的顺序排序（胜者->败者）。

Use the exponent `**` operator and math operators to compute the expected score (chance of winning).
of each opponent and compute the new rating for each.
Loop through the ratings, using each permutation to compute the post-Elo rating for each player in a pairwise fashion. 
Omit the second argument to use the default `kFactor` of 32.

使用指数操作符`**`和数学操作符来计算期望的分值（获胜概率）。每个竞争者都计算新的评分。遍历排序列表，使用每种排列来计算成对方式的每个选手的后Elo评分。如果不传第二个参数`kFactor`，默认值为32。

```js
const elo = ([...ratings], kFactor = 32, selfRating) => {
  const [a, b] = ratings;
  const expectedScore = (self, opponent) => 1 / (1 + 10 ** ((opponent - self) / 400));
  const newRating = (rating, i) =>
    (selfRating || rating) + kFactor * (i - expectedScore(i ? a : b, i ? b : a));
  if (ratings.length === 2) return [newRating(a, 1), newRating(b, 0)];

  for (let i = 0, len = ratings.length; i < len; i++) {
    let j = i;
    while (j < len - 1) {
      j++;
      [ratings[i], ratings[j]] = elo([ratings[i], ratings[j]], kFactor);
    }
  }
  return ratings;
};
```

<details>
<summary>Examples</summary>

```js
// Standard 1v1s
elo([1200, 1200]); // [1216, 1184]
elo([1200, 1200], 64); // [1232, 1168]
// 4 player FFA, all same rank
elo([1200, 1200, 1200, 1200]).map(Math.round); // [1246, 1215, 1185, 1154]
/*
For teams, each rating can adjusted based on own team's average rating vs.
average rating of opposing team, with the score being added to their
own individual rating by supplying it as the third argument.
*/
```

</details>

<br>[⬆ Back to top](#contents)

### factorial

Calculates the factorial of a number.

计算一个数的阶乘。

Use recursion.
If `n` is less than or equal to `1`, return `1`.
Otherwise, return the product of `n` and the factorial of `n - 1`.
Throws an exception if `n` is a negative number.

使用递归。如果`n`小于或等于`1`，则返回`1`。否则返回`n`和`n-1`的阶乘的乘积。如果`n`是一个负数则抛出一个异常。

```js
const factorial = n =>
  n < 0
    ? (() => {
      throw new TypeError('Negative numbers are not allowed!');
    })()
    : n <= 1
      ? 1
      : n * factorial(n - 1);
```

<details>
<summary>Examples</summary>

```js
factorial(6); // 720
```

</details>

<br>[⬆ Back to top](#contents)

### fibonacci

Generates an array, containing the Fibonacci sequence, up until the nth term.

生成一个包含直到nth终结的斐波那契数列的数组。

Create an empty array of the specific length, initializing the first two values (`0` and `1`).
Use `Array.prototype.reduce()` to add values into the array, using the sum of the last two values, except for the first two.

创建一个指定长度的空数组，用(`0`和`1`)初始前两个值。使用`Array.prototype.reduce()`把最后两个值的和添加值到数组中，除了最开始两个数的。

```js
const fibonacci = n =>
  Array.from({ length: n }).reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  );
```

<details>
<summary>Examples</summary>

```js
fibonacci(6); // [0, 1, 1, 2, 3, 5]
```

</details>

<br>[⬆ Back to top](#contents)

### gcd

Calculates the greatest common divisor between two or more numbers/arrays.

计算两个或多个数组或数组的最大公因数。

The inner `_gcd` function uses recursion.
Base case is when `y` equals `0`. In this case, return `x`.
Otherwise, return the GCD of `y` and the remainder of the division `x/y`.

内部的`_gcd`函数使用递归。基本情况是当`y`等于`0`，这种情况返回`x`。否则返回`y`的GCD和`x/y`的余数。

```js
const gcd = (...arr) => {
  const _gcd = (x, y) => (!y ? x : gcd(y, x % y));
  return [...arr].reduce((a, b) => _gcd(a, b));
};
```

<details>
<summary>Examples</summary>

```js
gcd(8, 36); // 4
gcd(...[12, 8, 32]); // 4
```

</details>

<br>[⬆ Back to top](#contents)

### geometricProgression

Initializes an array containing the numbers in the specified range where `start` and `end` are inclusive and the ratio between two terms is `step`.
Returns an error if `step` equals `1`.

范围通过`start`和`end`指定，两个点之间的比值通过`step`指定，初始化一个数组（即生成一个等比数列）。

Use `Array.from()`, `Math.log()` and `Math.floor()` to create an array of the desired length, `Array.prototype.map()` to fill with the desired values in a range.
Omit the second argument, `start`, to use a default value of `1`.
Omit the third argument, `step`, to use a default value of `2`.

使用`Array.from()`，`Math.log()` 和 `Math.floor()`来创建一个期望长度的数组，用`Array.prototype.map()`来给它填充上期望的值。如果不传第二个参数`start`，默认值为`1`；如果不传第三个参数`step`，默认值为`2`。

```js
const geometricProgression = (end, start = 1, step = 2) =>
  Array.from({ length: Math.floor(Math.log(end / start) / Math.log(step)) + 1 }).map(
    (v, i) => start * step ** i
  );
```

<details>
<summary>Examples</summary>

```js
geometricProgression(256); // [1, 2, 4, 8, 16, 32, 64, 128, 256]
geometricProgression(256, 3); // [3, 6, 12, 24, 48, 96, 192]
geometricProgression(256, 1, 4); // [1, 4, 16, 64, 256]
```

</details>

<br>[⬆ Back to top](#contents)

### hammingDistance

Calculates the Hamming distance between two values.

计算两个值之间的汉明距离。

Use XOR operator (`^`) to find the bit difference between the two numbers, convert to a binary string using `toString(2)`.
Count and return the number of `1`s in the string, using `match(/1/g)`.

使用异或操作符(`^`)来找到两个数之间的bit位差异，用`toString(2)`把它转换二进制字符串。使用`match(/1/g)`计算并返回字符串中`1`的数目。

```js
const hammingDistance = (num1, num2) => ((num1 ^ num2).toString(2).match(/1/g) || '').length;
```

<details>
<summary>Examples</summary>

```js
hammingDistance(2, 3); // 1
```

</details>

<br>[⬆ Back to top](#contents)

### inRange

Checks if the given number falls within the given range.

检查给定的数是否落在给定的范围内。

Use arithmetic comparison to check if the given number is in the specified range.
If the second parameter, `end`, is not specified, the range is considered to be from `0` to `start`.

使用算术比较符来检查给定的数是否在指定的范围中。如果第二个参数`end`不指定，这个范围则视为从`0`到`start`。

```js
const inRange = (n, start, end = null) => {
  if (end && start > end) [end, start] = [start, end];
  return end == null ? n >= 0 && n < start : n >= start && n < end;
};
```

<details>
<summary>Examples</summary>

```js
inRange(3, 2, 5); // true
inRange(3, 4); // true
inRange(2, 3, 5); // false
inRange(3, 2); // false
```

</details>

<br>[⬆ Back to top](#contents)

### isDivisible

Checks if the first numeric argument is divisible by the second one.

检查第一个数字参数是否能被第二个整除。

Use the modulo operator (`%`) to check if the remainder is equal to `0`.

使用取余操作符(`%`)检查余数是否为`0`。

```js
const isDivisible = (dividend, divisor) => dividend % divisor === 0;
```

<details>
<summary>Examples</summary>

```js
isDivisible(6, 3); // true
```

</details>

<br>[⬆ Back to top](#contents)

### isEven

Returns `true` if the given number is even, `false` otherwise.

如果给出的数字是偶数则返回`true`，否则返回`false`。

Checks whether a number is odd or even using the modulo (`%`) operator.
Returns `true` if the number is even, `false` if the number is odd.

使用取余操作符(`%`)检查一个数字是奇数还是偶数。如果给出的数字是偶数则返回`true`，否则返回`false`。

```js
const isEven = num => num % 2 === 0;
```

<details>
<summary>Examples</summary>

```js
isEven(3); // false
```

</details>

<br>[⬆ Back to top](#contents)

### isNegativeZero

Checks if the given value is equal to negative zero (`-0`).

检查给出的值是否与负数0相等(`-0`)。

Checks whether a passed value is equal to `0` and if `1` divided by the value equals `-Infinity`.

检查传入的是否等于`0`，并且`1`被这个值除是否等于`-Infinity`。

```js
const isNegativeZero = val => val === 0 && 1 / val === -Infinity;
```

<details>
<summary>Examples</summary>

```js
isNegativeZero(-0); // true
isNegativeZero(0); // false
```

</details>

<br>[⬆ Back to top](#contents)

### isPrime

Checks if the provided integer is a prime number.

检查给出的整数是否为质数。

Check numbers from `2` to the square root of the given number.
Return `false` if any of them divides the given number, else return `true`, unless the number is less than `2`.

检查从`2`到给出数字的平方根范围内的数字。如果给出的数被其中任意一个整除，则返回`false`，否则返回`true`，除非这个数小于`2`。

```js
const isPrime = num => {
  const boundary = Math.floor(Math.sqrt(num));
  for (var i = 2; i <= boundary; i++) if (num % i === 0) return false;
  return num >= 2;
};
```

<details>
<summary>Examples</summary>

```js
isPrime(11); // true
```

</details>

<br>[⬆ Back to top](#contents)

### lcm

Returns the least common multiple of two or more numbers.

返回两个或多个数字的最小公倍数。

Use the greatest common divisor (GCD) formula and the fact that `lcm(x,y) = x * y / gcd(x,y)` to determine the least common multiple.
The GCD formula uses recursion.

使用最大公因数（GCD）和因子`lcm(x,y) = x * y / gcd(x,y)`来判断最小公倍数。GCD的公式使用递归。

```js
const lcm = (...arr) => {
  const gcd = (x, y) => (!y ? x : gcd(y, x % y));
  const _lcm = (x, y) => (x * y) / gcd(x, y);
  return [...arr].reduce((a, b) => _lcm(a, b));
};
```

<details>
<summary>Examples</summary>

```js
lcm(12, 7); // 84
lcm(...[1, 3, 4, 5]); // 60
```

</details>

<br>[⬆ Back to top](#contents)

### luhnCheck ![advanced](/advanced.svg)

Implementation of the [Luhn Algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm) used to validate a variety of identification numbers, such as credit card numbers, IMEI numbers, National Provider Identifier numbers etc.

[Luhn Algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm)的实现，用来验证一个id的合法性，例如信用卡号，IMEI号，国家身份证号。

Use `String.prototype.split('')`, `Array.prototype.reverse()` and `Array.prototype.map()` in combination with `parseInt()` to obtain an array of digits.
Use `Array.prototype.splice(0,1)` to obtain the last digit.
Use `Array.prototype.reduce()` to implement the Luhn Algorithm.
Return `true` if `sum` is divisible by `10`, `false` otherwise.

使用`String.prototype.split('')`, `Array.prototype.reverse()`和`Array.prototype.map()`结合`parseInt()`来获取一个十进制数的数组。使用`Array.prototype.splice(0,1)`来获取十进制数的最后一位。使用`Array.prototype.reduce()`来实行Luhn算法。如果`sum`可以被`10`整除则返回`true`，否则返回`false`。

```js
const luhnCheck = num => {
  let arr = (num + '')
    .split('')
    .reverse()
    .map(x => parseInt(x));
  let lastDigit = arr.splice(0, 1)[0];
  let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
  sum += lastDigit;
  return sum % 10 === 0;
};
```

<details>
<summary>Examples</summary>

```js
luhnCheck('4485275742308327'); // true
luhnCheck(6011329933655299); //  false
luhnCheck(123456789); // false
```

</details>

<br>[⬆ Back to top](#contents)

### mapNumRange

Maps a number from one range to another range.

把一个数字从一个范围映射到另一个范围。

Returns `num` mapped between `outMin`-`outMax` from `inMin`-`inMax`.

返回从`inMin`-`inMax`范围映射到`outMin`-`outMax`范围的数字`num`。

```js
const mapNumRange = (num, inMin, inMax, outMin, outMax) =>
  ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
```

<details>
<summary>Examples</summary>

```js
mapNumRange(5, 0, 10, 0, 100); // 50
```

</details>

<br>[⬆ Back to top](#contents)

### maxBy

Returns the maximum value of an array, after mapping each element to a value using the provided function.

在给数组中每个元素应用指定的函数后，返回一个其中的最大值。

Use `Array.prototype.map()` to map each element to the value returned by `fn`, `Math.max()` to get the maximum value.

使用`Array.prototype.map()`把每个元素映射到`fn`返回值，使用`Math.max()`来获取最大值。

```js
const maxBy = (arr, fn) => Math.max(...arr.map(typeof fn === 'function' ? fn : val => val[fn]));
```

<details>
<summary>Examples</summary>

```js
maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 8
maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 8
```

</details>

<br>[⬆ Back to top](#contents)

### median

Returns the median of an array of numbers.

返回一个数字数组的中位数。

Find the middle of the array, use `Array.prototype.sort()` to sort the values.
Return the number at the midpoint if `length` is odd, otherwise the average of the two middle numbers.

使用`Array.prototype.sort()`排序数值后，找到数组的中间值。如果数组`length`是奇数，则返回最中间的数字，否则返回中间两个数字的平均值。

```js
const median = arr => {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};
```

<details>
<summary>Examples</summary>

```js
median([5, 6, 50, 1, -5]); // 5
```

</details>

<br>[⬆ Back to top](#contents)

### midpoint

Calculates the midpoint between two pairs of (x,y) points.

计算一对`(x,y)`形式点的中间点。

Destructure the array to get `x1`, `y1`, `x2` and `y2`, calculate the midpoint for each dimension by dividing the sum of the two endpoints by `2`.

解构数组得到`x1`, `y1`, `x2`和`y2`，通过把两个端点的和除以`2`来计算每个维度的中间点。

```js
const midpoint = ([x1, y1], [x2, y2]) => [(x1 + x2) / 2, (y1 + y2) / 2];
```

<details>
<summary>Examples</summary>

```js
midpoint([2, 2], [4, 4]); // [3, 3]
midpoint([4, 4], [6, 6]); // [5, 5]
midpoint([1, 3], [2, 4]); // [1.5, 3.5]
```


</details>

<br>[⬆ Back to top](#contents)

### minBy

Returns the minimum value of an array, after mapping each element to a value using the provided function.

在给数组中每个元素应用指定的函数后，返回一个其中的最小值。

Use `Array.prototype.map()` to map each element to the value returned by `fn`, `Math.min()` to get the minimum value.

使用`Array.prototype.map()`把每个元素映射到`fn`的返回值，使用`Math.min()`来获取其中最小值。

```js
const minBy = (arr, fn) => Math.min(...arr.map(typeof fn === 'function' ? fn : val => val[fn]));
```

<details>
<summary>Examples</summary>

```js
minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 2
minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 2
```

</details>

<br>[⬆ Back to top](#contents)

### percentile

Uses the percentile formula to calculate how many numbers in the given array are less or equal to the given value.

使用百分号公式来计算给定的数组中有多少个数字小于等于给定的值。

Use `Array.prototype.reduce()` to calculate how many numbers are below the value and how many are the same value and apply the percentile formula.

使用`Array.prototype.reduce()`来计算多少数字小于给定值，多少是相同的值，并且应用百分比公式。

```js
const percentile = (arr, val) =>
  (100 * arr.reduce((acc, v) => acc + (v < val ? 1 : 0) + (v === val ? 0.5 : 0), 0)) / arr.length;
```

<details>
<summary>Examples</summary>

```js
percentile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6); // 55
```

</details>

<br>[⬆ Back to top](#contents)

### powerset

Returns the powerset of a given array of numbers.

返回给定的数字数组的幂集合。

Use `Array.prototype.reduce()` combined with `Array.prototype.map()` to iterate over elements and combine into an array containing all combinations.

使用`Array.prototype.reduce()`结合`Array.prototype.map()`来遍历所有元素并将结果结合到一个包含所有组合情况的数组中。

```js
const powerset = arr => arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);
```

<details>
<summary>Examples</summary>

```js
powerset([1, 2]); // [[], [1], [2], [2, 1]]
```

</details>

<br>[⬆ Back to top](#contents)

### primes

Generates primes up to a given number, using the Sieve of Eratosthenes.

使用Sieve of Eratosthenes方法生成以给定数字为上限的质数数组。

Generate an array from `2` to the given number. Use `Array.prototype.filter()` to filter out the values divisible by any number from `2` to the square root of the provided number.

生成从`2`到给定数字的数组。使用`Array.prototype.filter()`来过滤掉可以被某个从`2`到它本身的平方根中任意数字整除的数字（即过滤掉非质数）。

```js
const primes = num => {
  let arr = Array.from({ length: num - 1 }).map((x, i) => i + 2),
    sqroot = Math.floor(Math.sqrt(num)),
    numsTillSqroot = Array.from({ length: sqroot - 1 }).map((x, i) => i + 2);
  numsTillSqroot.forEach(x => (arr = arr.filter(y => y % x !== 0 || y === x)));
  return arr;
};
```

<details>
<summary>Examples</summary>

```js
primes(10); // [2,3,5,7]
```

</details>

<br>[⬆ Back to top](#contents)

### radsToDegrees

Converts an angle from radians to degrees.

把一个角从弧度转换为弧度。

Use `Math.PI` and the radian to degree formula to convert the angle from radians to degrees.

使用`Math.PI`和弧度到角度公式来把角的弧度转为角度。

```js
const radsToDegrees = rad => (rad * 180.0) / Math.PI;
```

<details>
<summary>Examples</summary>

```js
radsToDegrees(Math.PI / 2); // 90
```

</details>

<br>[⬆ Back to top](#contents)

### randomIntArrayInRange

Returns an array of n random integers in the specified range.

返回一个指定范围内的随机整数数组。

Use `Array.from()` to create an empty array of the specific length, `Math.random()` to generate a random number and map it to the desired range, using `Math.floor()` to make it an integer.

使用`Array.from()`来创建一个指定长度的空数组，使用`Math.random()`来生成一个随机数并把它映射到这个期望的范围，使用`Math.floor()`来把它变为整数。

```js
const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
```

<details>
<summary>Examples</summary>

```js
randomIntArrayInRange(12, 35, 10); // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]
```

</details>

<br>[⬆ Back to top](#contents)

### randomIntegerInRange

Returns a random integer in the specified range.

返回指定范围内的一个随机整数。

Use `Math.random()` to generate a random number and map it to the desired range, using `Math.floor()` to make it an integer.

使用`Math.random()`来生成一个随机数，然后把它映射到指定范围，使用`Math.floor()`来把它变为整数。

```js
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
```

<details>
<summary>Examples</summary>

```js
randomIntegerInRange(0, 5); // 2
```

</details>

<br>[⬆ Back to top](#contents)

### randomNumberInRange

Returns a random number in the specified range.

返回指定范围内的一个随机数。

Use `Math.random()` to generate a random value, map it to the desired range using multiplication.

使用`Math.random()`来生成一个随机数，然后使用乘法把它映射到指定范围。

```js
const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;
```

<details>
<summary>Examples</summary>

```js
randomNumberInRange(2, 10); // 6.0211363285087005
```

</details>

<br>[⬆ Back to top](#contents)

### round

Rounds a number to a specified amount of digits.

返回一个指定精度的数字的近似值。

Use `Math.round()` and template literals to round the number to the specified number of digits.
Omit the second argument, `decimals` to round to an integer.

使用`Math.round()`和模板字面量来把这个数字近似到指定的位数。如果不传第二个参数`decimals`，则近似到一个整数。

```js
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);
```

<details>
<summary>Examples</summary>

```js
round(1.005, 2); // 1.01
```

</details>

<br>[⬆ Back to top](#contents)

### sdbm

Hashes the input string into a whole number.

把输入hash成一个完整数字。

Use `String.prototype.split('')` and `Array.prototype.reduce()` to create a hash of the input string, utilizing bit shifting.

使用`String.prototype.split('')`和`Array.prototype.reduce()`来创建一个输入字符串的hash，使用位移操作。

```js
const sdbm = str => {
  let arr = str.split('');
  return arr.reduce(
    (hashCode, currentVal) =>
      (hashCode = currentVal.charCodeAt(0) + (hashCode << 6) + (hashCode << 16) - hashCode),
    0
  );
};
```

<details>
<summary>Examples</summary>

```js
sdbm('name'); // -3521204949
```

</details>

<br>[⬆ Back to top](#contents)

### standardDeviation

Returns the standard deviation of an array of numbers.

返回一个数字数组的标准差。

Use `Array.prototype.reduce()` to calculate the mean, variance and the sum of the variance of the values, the variance of the values, then
determine the standard deviation.
You can omit the second argument to get the sample standard deviation or set it to `true` to get the population standard deviation.

使用`Array.prototype.reduce()`来计算平均值，方差和所有值的方差和还有整体方差，然后计算出标准差。你可以不传第二个参数来获得样本标准差，如果把它设置为`true`则获取总体标准差。

```js
const standardDeviation = (arr, usePopulation = false) => {
  const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
  return Math.sqrt(
    arr.reduce((acc, val) => acc.concat((val - mean) ** 2), []).reduce((acc, val) => acc + val, 0) /
      (arr.length - (usePopulation ? 0 : 1))
  );
};
```

<details>
<summary>Examples</summary>

```js
standardDeviation([10, 2, 38, 23, 38, 23, 21]); // 13.284434142114991 (sample)
standardDeviation([10, 2, 38, 23, 38, 23, 21], true); // 12.29899614287479 (population)
```

</details>

<br>[⬆ Back to top](#contents)

### sum

Returns the sum of two or more numbers/arrays.

返回两个或更多数字列表或者数组列表的和。

Use `Array.prototype.reduce()` to add each value to an accumulator, initialized with a value of `0`.

使用`Array.prototype.reduce()`来把每个值累加，初始累加值为0。

```js
const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);
```

<details>
<summary>Examples</summary>

```js
sum(1, 2, 3, 4); // 10
sum(...[1, 2, 3, 4]); // 10
```

</details>

<br>[⬆ Back to top](#contents)

### sumBy

Returns the sum of an array, after mapping each element to a value using the provided function.

在把每个元素应用提供的函数后，返回一个数组的和。

Use `Array.prototype.map()` to map each element to the value returned by `fn`, `Array.prototype.reduce()` to add each value to an accumulator, initialized with a value of `0`.

使用`Array.prototype.map()`来把每个元素映射到应用`fn`的返回值，使用`Array.prototype.reduce()`来把每个值累加，初始累加值为0。

```js
const sumBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0);
```

<details>
<summary>Examples</summary>

```js
sumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 20
sumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 20
```

</details>

<br>[⬆ Back to top](#contents)

### sumPower

Returns the sum of the powers of all the numbers from `start` to `end` (both inclusive).

返回从`start`到`end`（两边都闭区间）的所有数字的加权和。

Use `Array.prototype.fill()` to create an array of all the numbers in the target range, `Array.prototype.map()` and the exponent operator (`**`) to raise them to `power` and `Array.prototype.reduce()` to add them together.
Omit the second argument, `power`, to use a default power of `2`.
Omit the third argument, `start`, to use a default starting value of `1`.

使用`Array.prototype.fill()`来创建一个在目标范围内的所有数字的数组，使用`Array.prototype.map()`和求幂操作符(`**`) 来把它们加权到`power`并用`Array.prototype.reduce()`把结果加和起来。如果不传第二个参数`power`，默认值权重为`2`；如果不传第三个参数`start`，默认从`1`开始。

```js
const sumPower = (end, power = 2, start = 1) =>
  Array(end + 1 - start)
    .fill(0)
    .map((x, i) => (i + start) ** power)
    .reduce((a, b) => a + b, 0);
```

<details>
<summary>Examples</summary>

```js
sumPower(10); // 385
sumPower(10, 3); // 3025
sumPower(10, 3, 5); // 2925
```

</details>

<br>[⬆ Back to top](#contents)

### toSafeInteger

Converts a value to a safe integer.

把一个值转换为安全整数。

Use `Math.max()` and `Math.min()` to find the closest safe value.
Use `Math.round()` to convert to an integer.

使用`Math.max()`和`Math.min()`来找到最近的安全值。使用`Math.round()`把它转换为一个整数。

```js
const toSafeInteger = num =>
  Math.round(Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER));
```

<details>
<summary>Examples</summary>

```js
toSafeInteger('3.2'); // 3
toSafeInteger(Infinity); // 9007199254740991
```

</details>

<br>[⬆ Back to top](#contents)

### vectorDistance

Returns the distance between two vectors.

Use `Array.prototype.reduce()`, `Math.pow()` and `Math.sqrt()` to calculate the Euclidean distance between two vectors.

```js
const vectorDistance = (...coords) => {
  let pointLength = Math.trunc(coords.length / 2);
  let sum = coords
    .slice(0, pointLength)
    .reduce((acc, val, i) => acc + Math.pow(val - coords[pointLength + i], 2), 0);
  return Math.sqrt(sum);
};
```

<details>
<summary>Examples</summary>

```js
vectorDistance(10, 0, 5, 20, 0, 10); // 11.180339887498949
```

</details>

<br>[⬆ Back to top](#contents)


---

## 📦 Node

### atob

Decodes a string of data which has been encoded using base-64 encoding.

解码一个被base-64编码的字符串（Base64解码）。

Create a `Buffer` for the given string with base-64 encoding and use `Buffer.toString('binary')` to return the decoded string.

用base-64为给定的字符串创建一个`Buffer`，使用`Buffer.toString('binary')`来返回解码后的字符串。

```js
const atob = str => Buffer.from(str, 'base64').toString('binary'); // 不支持中文；Buffer是Node中处理编码转换的以一个好工具；
```

<details>
<summary>Examples</summary>

```js
atob('Zm9vYmFy'); // 'foobar'
```

</details>

<br>[⬆ Back to top](#contents)

### btoa

Creates a base-64 encoded ASCII string from a String object in which each character in the string is treated as a byte of binary data.

从字符串对象中创建一个base-64编码ASCII字符串，其中字符串中每个字符都被当做一个比特的二进制数据。

Create a `Buffer` for the given string with binary encoding and use `Buffer.toString('base64')` to return the encoded string.

为给定的字符串创建一个二进制编码的`Buffer`，然后使用`Buffer.toString('base64')`来返回编码后的字符串。

```js
const btoa = str => Buffer.from(str, 'binary').toString('base64');
```

<details>
<summary>Examples</summary>

```js
btoa('foobar'); // 'Zm9vYmFy'
```

</details>

<br>[⬆ Back to top](#contents)

### colorize

Add special characters to text to print in color in the console (combined with `console.log()`).

把特定的字符串添加到console中打印的文字，以使它们被打印为彩色（配合`console.log()`）。

Use template literals and special characters to add the appropriate color code to the string output.
For background colors, add a special character that resets the background color at the end of the string.

使用模板字面量和特定的字符来给字符串输出添加合适的颜色码。对于背景颜色，在字符串的结尾添加重置背景颜色的特定字符。

```js
const colorize = (...args) => ({
  black: `\x1b[30m${args.join(' ')}`,
  red: `\x1b[31m${args.join(' ')}`,
  green: `\x1b[32m${args.join(' ')}`,
  yellow: `\x1b[33m${args.join(' ')}`,
  blue: `\x1b[34m${args.join(' ')}`,
  magenta: `\x1b[35m${args.join(' ')}`,
  cyan: `\x1b[36m${args.join(' ')}`,
  white: `\x1b[37m${args.join(' ')}`,
  bgBlack: `\x1b[40m${args.join(' ')}\x1b[0m`,
  bgRed: `\x1b[41m${args.join(' ')}\x1b[0m`,
  bgGreen: `\x1b[42m${args.join(' ')}\x1b[0m`,
  bgYellow: `\x1b[43m${args.join(' ')}\x1b[0m`,
  bgBlue: `\x1b[44m${args.join(' ')}\x1b[0m`,
  bgMagenta: `\x1b[45m${args.join(' ')}\x1b[0m`,
  bgCyan: `\x1b[46m${args.join(' ')}\x1b[0m`,
  bgWhite: `\x1b[47m${args.join(' ')}\x1b[0m`
});
```

<details>
<summary>Examples</summary>

```js
console.log(colorize('foo').red); // 'foo' (red letters)
console.log(colorize('foo', 'bar').bgBlue); // 'foo bar' (blue background)
console.log(colorize(colorize('foo').yellow, colorize('foo').green).bgWhite); // 'foo bar' (first word in yellow letters, second word in green letters, white background for both)
```

</details>

<br>[⬆ Back to top](#contents)

### createDirIfNotExists

Creates a directory, if it does not exist.

如果文件夹不存在则创建一个。

Use `fs.existsSync()` to check if the directory exists, `fs.mkdirSync()` to create it.

使用`fs.existsSync()`来检查文件夹是否存在，使用`fs.mkdirSync()` 来创建它。

```js
const fs = require('fs');
const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);
```

<details>
<summary>Examples</summary>

```js
createDirIfNotExists('test'); // creates the directory 'test', if it doesn't exist
```

</details>

<br>[⬆ Back to top](#contents)

### hasFlags

Check if the current process's arguments contain the specified flags.

检测当前的进程参数是否包含特定的标志（全部包含了才返回`true`）。

Use `Array.prototype.every()` and `Array.prototype.includes()` to check if `process.argv` contains all the specified flags.
Use a regular expression to test if the specified flags are prefixed with `-` or `--` and prefix them accordingly.

使用`Array.prototype.every()`和`Array.prototype.includes()`来检查`process.argv`是否包含全部的特定标志。使用一个正则表达式来测试特定标志的前缀是`-`还是`--`并分别给它们添加前缀。

```js
const hasFlags = (...flags) =>
  flags.every(flag => process.argv.includes(/^-{1,2}/.test(flag) ? flag : '--' + flag));
```

<details>
<summary>Examples</summary>

```js
// node myScript.js -s --test --cool=true
hasFlags('-s'); // true
hasFlags('--test', 'cool=true', '-s'); // true
hasFlags('special'); // false
```

</details>

<br>[⬆ Back to top](#contents)

### hashNode

Creates a hash for a value using the [SHA-256](https://en.wikipedia.org/wiki/SHA-2) algorithm. Returns a promise.

使用[SHA-256](https://en.wikipedia.org/wiki/SHA-2)算法为值创建hash。返回一个promise。

Use `crypto` API to create a hash for the given value, `setTimeout` to prevent blocking on a long operation, and a `Promise` to give it a familiar interface.

使用`crypto`API来为给定的值创建hash，使用`setTimeout`来避免长时间操作时阻塞，并使用`Promise`来给出一个通用接口。

```js
const crypto = require('crypto');
const hashNode = val =>
  new Promise(resolve =>
    setTimeout(
      () =>
        resolve(
          crypto
            .createHash('sha256')
            .update(val)
            .digest('hex')
        ),
      0
    )
  );
```

<details>
<summary>Examples</summary>

```js
hashNode(JSON.stringify({ a: 'a', b: [1, 2, 3, 4], foo: { c: 'bar' } })).then(console.log); // '04aa106279f5977f59f9067fa9712afc4aedc6f5862a8defc34552d8c7206393'
```

</details>

<br>[⬆ Back to top](#contents)

### isDuplexStream

Checks if the given argument is a duplex (readable and writable) stream.

检查给出的参数是否是双向的（可读可写的）流。

Check if the value is different from `null`, use `typeof` to check if a value is of type `object` and the `pipe` property is of type `function`.
Additionally check if the `typeof` the `_read`, `_write` and `_readableState`, `_writableState` properties are `function` and `object` respectively.

检查给出的值是否不是`null`，使用`typeof`来检查这个值是否是`object`类型，它的`pipe`属性是否是一个`function`类型。再检查它的`_read`、`_write`和`_readableState`, `_writableState`属性的`typeof`是否分别是`function`和`object`类型。

```js
const isDuplexStream = val =>
  val !== null &&
  typeof val === 'object' &&
  typeof val.pipe === 'function' &&
  typeof val._read === 'function' &&
  typeof val._readableState === 'object' &&
  typeof val._write === 'function' &&
  typeof val._writableState === 'object';
```

<details>
<summary>Examples</summary>

```js
const Stream = require('stream');
isDuplexStream(new Stream.Duplex()); // true
```

</details>

<br>[⬆ Back to top](#contents)

### isReadableStream

Checks if the given argument is a readable stream.

检测给出的参数是否是可写的流。

Check if the value is different from `null`, use `typeof` to check if the value is of type `object` and the `pipe` property is of type `function`.
Additionally check if the `typeof` the `_read` and `_readableState` properties are `function` and `object` respectively.

检查给出的值是否不是`null`，使用`typeof`来检查这个值是否是`object`类型，它的`pipe`属性是否是一个`function`类型。再检查它的`_read`、和`_readableState`属性的`typeof`是否分别是`function`和`object`类型。

```js
const isReadableStream = val =>
  val !== null &&
  typeof val === 'object' &&
  typeof val.pipe === 'function' &&
  typeof val._read === 'function' &&
  typeof val._readableState === 'object';
```

<details>
<summary>Examples</summary>

```js
const fs = require('fs');
isReadableStream(fs.createReadStream('test.txt')); // true
```

</details>

<br>[⬆ Back to top](#contents)

### isStream

Checks if the given argument is a stream.

检测给出的参数是否是一个流。

Check if the value is different from `null`, use `typeof` to check if the value is of type `object` and the `pipe` property is of type `function`.

检查给出的值是否不是`null`，使用`typeof`来检查这个值是否是`object`类型，它的`pipe`属性是否是一个`function`类型。

```js
const isStream = val => val !== null && typeof val === 'object' && typeof val.pipe === 'function';
```

<details>
<summary>Examples</summary>

```js
const fs = require('fs');
isStream(fs.createReadStream('test.txt')); // true
```

</details>

<br>[⬆ Back to top](#contents)

### isTravisCI

Checks if the current environment is [Travis CI](https://travis-ci.org/).

检测当前环境是不是[Travis CI](https://travis-ci.org/)的环境。

Checks if the current environment has the `TRAVIS` and `CI` environment variables ([reference](https://docs.travis-ci.com/user/environment-variables/#Default-Environment-Variables)).

检测当前环境是否有`TRAVIS`和`CI`环境变量([reference](https://docs.travis-ci.com/user/environment-variables/#Default-Environment-Variables))。

```js
const isTravisCI = () => 'TRAVIS' in process.env && 'CI' in process.env;
```

<details>
<summary>Examples</summary>

```js
isTravisCI(); // true (if code is running on Travis CI)
```

</details>

<br>[⬆ Back to top](#contents)

### isWritableStream

Checks if the given argument is a writable stream.

检测给出的参数是否是可读的流。

Check if the value is different from `null`, use `typeof` to check if the value is of type `object` and the `pipe` property is of type `function`.
Additionally check if the `typeof` the `_write` and `_writableState` properties are `function` and `object` respectively.

检查给出的值是否不是`null`，使用`typeof`来检查这个值是否是`object`类型，它的`pipe`属性是否是一个`function`类型。再检查它的`_write`、和`_writableState`属性的`typeof`是否分别是`function`和`object`类型。

```js
const isWritableStream = val =>
  val !== null &&
  typeof val === 'object' &&
  typeof val.pipe === 'function' &&
  typeof val._write === 'function' &&
  typeof val._writableState === 'object';
```

<details>
<summary>Examples</summary>

```js
const fs = require('fs');
isWritableStream(fs.createWriteStream('test.txt')); // true
```

</details>

<br>[⬆ Back to top](#contents)

### JSONToFile

Writes a JSON object to a file.

把一个JSON对象写到文件中。

Use `fs.writeFile()`, template literals and `JSON.stringify()` to write a `json` object to a `.json` file.

使用`fs.writeFile()`、模板字面量和`JSON.stringify()`来把这个`json`对象写到一个`.json`文件中。

```js
const fs = require('fs');
const JSONToFile = (obj, filename) =>
  fs.writeFile(`${filename}.json`, JSON.stringify(obj, null, 2));
```

<details>
<summary>Examples</summary>

```js
JSONToFile({ test: 'is passed' }, 'testJsonFile'); // writes the object to 'testJsonFile.json'
```

</details>

<br>[⬆ Back to top](#contents)

### readFileLines

Returns an array of lines from the specified file.

返回一个从指定文件中读取的行数组。

Use `readFileSync` function in `fs` node package to create a `Buffer` from a file.
convert buffer to string using `toString(encoding)` function.
creating an array from contents of file by `split`ing file content line by line (each `\n`).

使用`fs`node包中的`readFileSync`函数从文件创建一个`Buffer`。用`toString(encoding)`函数把buffer转到字符串。通过把文件内容一行一行（每`\n`）的`split`开，创建一个文件内容的数组。

```js
const fs = require('fs');
const readFileLines = filename =>
  fs
    .readFileSync(filename)
    .toString('UTF8')
    .split('\n');
```

<details>
<summary>Examples</summary>

```js
/*
contents of test.txt :
  line1
  line2
  line3
  ___________________________
*/
let arr = readFileLines('test.txt');
console.log(arr); // ['line1', 'line2', 'line3']
```


</details>

<br>[⬆ Back to top](#contents)

### untildify

Converts a tilde path to an absolute path.

把斜线路径（绝对）转换成相对路径。

Use `String.prototype.replace()` with a regular expression and `OS.homedir()` to replace the `~` in the start of the path with the home directory.

使用`String.prototype.replace()`和正则表达式，还有`OS.homedir()`来把路径开头的`~`替换为用户家目录。

```js
const untildify = str => str.replace(/^~($|\/|\\)/, `${require('os').homedir()}$1`);
```

<details>
<summary>Examples</summary>

```js
untildify('~/node'); // '/Users/aUser/node'
```

</details>

<br>[⬆ Back to top](#contents)

### UUIDGeneratorNode

Generates a UUID in Node.JS.

在Node.JS中生成一个UUID。

Use `crypto` API to generate a UUID, compliant with [RFC4122](https://www.ietf.org/rfc/rfc4122.txt) version 4.

使用`crypto`API来生成一个UUID，兼容[RFC4122](https://www.ietf.org/rfc/rfc4122.txt)版本4。

```js
const crypto = require('crypto');
const UUIDGeneratorNode = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ (crypto.randomBytes(1)[0] & (15 >> (c / 4)))).toString(16)
  );
```

<details>
<summary>Examples</summary>

```js
UUIDGeneratorNode(); // '79c7c136-60ee-40a2-beb2-856f1feabefc'
```

</details>

<br>[⬆ Back to top](#contents)


---

## 🗃️ Object

### bindAll

Binds methods of an object to the object itself, overwriting the existing method.

把对象的方法绑定到对象本身上（方法的执行上下文都设置为对象本身），覆盖已经存在的方法。（为了解决一些指定的上下文不合适的情况，例如Dom中事件的监听回调中）

Use `Array.prototype.forEach()` to return a `function` that uses `Function.prototype.apply()` to apply the given context (`obj`) to `fn` for each function specified.

使用`Array.prototype.forEach()`返回一个函数，它使用`Function.prototype.apply()`来把指定的上下文(`obj`)应用到每个给出的`fn`函数上。

```js
const bindAll = (obj, ...fns) =>
  fns.forEach(
    fn => (
      (f = obj[fn]),
      (obj[fn] = function() {
        return f.apply(obj);
      })
    )
  );
```

<details>
<summary>Examples</summary>

```js
var view = {
  label: 'docs',
  click: function() {
    console.log('clicked ' + this.label);
  }
};
bindAll(view, 'click');
jQuery(element).on('click', view.click); // Logs 'clicked docs' when clicked.
```

</details>

<br>[⬆ Back to top](#contents)

### deepClone

Creates a deep clone of an object.

创建一个对象的深拷贝。

Use recursion.
Use `Object.assign()` and an empty object (`{}`) to create a shallow clone of the original.
Use `Object.keys()` and `Array.prototype.forEach()` to determine which key-value pairs need to be deep cloned.

使用递归。使用`Object.assign()`和一个空对象(`{}`)来创建一个原始对象的浅拷贝。使用`Object.keys()`和`Array.prototype.forEach()`来确定哪个键值对需要深拷贝。

```js
const deepClone = obj => {
  let clone = Object.assign({}, obj);
  Object.keys(clone).forEach(
    key => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
  );
  return Array.isArray(obj) && obj.length
    ? (clone.length = obj.length) && Array.from(clone)
    : Array.isArray(obj)
      ? Array.from(obj)
      : clone;
};
```

<details>
<summary>Examples</summary>

```js
const a = { foo: 'bar', obj: { a: 1, b: 2 } };
const b = deepClone(a); // a !== b, a.obj !== b.obj
```

</details>

<br>[⬆ Back to top](#contents)

### deepFreeze

Deep freezes an object.

深层冻结一个对象。

Calls `Object.freeze(obj)` recursively on all unfrozen properties of passed object that are `instanceof` object.

递归的对传入的是对象（通过`instanceof`判断是否是对象）实例的所有没有冻结的属性调用`Object.freeze(obj)`。

```js
const deepFreeze = obj =>
  Object.keys(obj).forEach(
    prop =>
      !(obj[prop] instanceof Object) || Object.isFrozen(obj[prop]) ? null : deepFreeze(obj[prop])
  ) || Object.freeze(obj);
```

<details>
<summary>Examples</summary>

```js
'use strict';

const o = deepFreeze([1, [2, 3]]);

o[0] = 3; // not allowed
o[1][0] = 4; // not allowed as well
```

</details>

<br>[⬆ Back to top](#contents)

### deepGet

Returns the target value in a nested JSON object, based on the `keys` array.

Compare the keys you want in the nested JSON object as an `Array`.
Use `Array.prototype.reduce()` to get value from nested JSON object one by one. 
If the key exists in object, return target value, otherwise, return `null`.

```js
const deepGet = (obj, keys) => keys.reduce((xs, x) => (xs && xs[x] ? xs[x] : null), obj);
```

<details>
<summary>Examples</summary>

```js
let index = 2;
const data = {
  foo: {
    foz: [1, 2, 3],
    bar: {
      baz: ['a', 'b', 'c']
    }
  }
};
deepGet(data, ['foo', 'foz', index]); // get 3
deepGet(data, ['foo', 'bar', 'baz', 8, 'foz']); // null
```

</details>

<br>[⬆ Back to top](#contents)

### deepMapKeys ![advanced](/advanced.svg)

Deep maps an object keys.

建立一个对象键列表的深度映射。（对对象中每个key都应用指定函数）

Creates an object with the same values as the provided object and keys generated by running the provided function for each key.

用和给出的对象相同的值和对每个键应用给出的函数后的新键，创建一个对象。

Use `Object.keys(obj)` to iterate over the object's keys. 
Use `Array.prototype.reduce()` to create a new object with the same values and mapped keys using `fn`.

使用`Object.keys(obj)`来遍历对象的键列表。使用`Array.prototype.reduce()`来用相同的值和用`fn`映射后的键来创建一个新对象。

```js
const deepMapKeys = (obj, f) =>
  Array.isArray(obj)
    ? obj.map(val => deepMapKeys(val, f))
    : typeof obj === 'object'
      ? Object.keys(obj).reduce((acc, current) => {
        const val = obj[current];
        acc[f(current)] =
            val !== null && typeof val === 'object' ? deepMapKeys(val, f) : (acc[f(current)] = val);
        return acc;
      }, {})
      : obj;
```

<details>
<summary>Examples</summary>

```js
const obj = {
  foo: '1',
  nested: {
    child: {
      withArray: [
        {
          grandChild: ['hello']
        }
      ]
    }
  }
};
const upperKeysObj = deepMapKeys(obj, key => key.toUpperCase());
/*
{
  "FOO":"1",
  "NESTED":{
    "CHILD":{
      "WITHARRAY":[
        {
          "GRANDCHILD":[ 'hello' ]
        }
      ]
    }
  }
}
*/
```

</details>

<br>[⬆ Back to top](#contents)

### defaults

Assigns default values for all properties in an object that are `undefined`.

把默认值赋给一个对象中所有`undefined`的属性。

Use `Object.assign()` to create a new empty object and copy the original one to maintain key order, use `Array.prototype.reverse()` and the spread operator `...` to combine the default values from left to right, finally use `obj` again to overwrite properties that originally had a value.

使用`Object.assign()`来创建一个新的空对象，然后拷贝一个原始对象维护键的顺序，使用`Array.prototype.reverse()`和展开从操作符`...`来把默认值从左到右整合到对象中，最后再次使用`obj`来覆盖（恢复）原来就有值的属性。

```js
const defaults = (obj, ...defs) => Object.assign({}, obj, ...defs.reverse(), obj);
```

<details>
<summary>Examples</summary>

```js
defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }); // { a: 1, b: 2 }
```

</details>

<br>[⬆ Back to top](#contents)

### dig

Returns the target value in a nested JSON object, based on the given key.

根据给出的键，返回嵌套JSON对象中的目标值。

Use the `in` operator to check if `target` exists in `obj`.
If found, return the value of `obj[target]`, otherwise use `Object.values(obj)` and `Array.prototype.reduce()` to recursively call `dig` on each nested object until the first matching key/value pair is found.

使用`in`操作符来检查`obj`中是否存在`target`。如果找到了，返回`obj[target]`的值，否则使用`Object.values(obj)`和`Array.prototype.reduce()`来对嵌套对象递归调用`dig`直到第一个匹配的键值对被找到。

```js
const dig = (obj, target) =>
  target in obj
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
      if (acc !== undefined) return acc;
      if (typeof val === 'object') return dig(val, target);
    }, undefined);
```

<details>
<summary>Examples</summary>

```js
const data = {
  level1: {
    level2: {
      level3: 'some data'
    }
  }
};
dig(data, 'level3'); // 'some data'
dig(data, 'level4'); // undefined
```

</details>

<br>[⬆ Back to top](#contents)

### equals ![advanced](/advanced.svg)

Performs a deep comparison between two values to determine if they are equivalent.

在两个值之间执行深度比较来确定它们是否相等。

Check if the two values are identical, if they are both `Date` objects with the same time, using `Date.getTime()` or if they are both non-object values with an equivalent value (strict comparison).
Check if only one value is `null` or `undefined` or if their prototypes differ.
If none of the above conditions are met, use `Object.keys()` to check if both values have the same number of keys, then use `Array.prototype.every()` to check if every key in the first value exists in the second one and if they are equivalent by calling this method recursively.

检测两个值是否相等，如果它们都是拥有相同时间的`Date`对象，使用`Date.getTime()`或者它们都是拥有相同值的非对象类型值(使用严格比较)。检测是否只有一个值为`null`或者`undefined`，或者它们的属性是否不同。如果以上场景都没有出现，使用`Object.keys()`来检查是否每个值都有相同数目的键，然后用`Array.prototype.every()`来检测第一个值中的每个键是否都在第二个值中存在，递归调用这套方法来确定它们是否深度相等。

```js
const equals = (a, b) => {
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b;
  if (a === null || a === undefined || b === null || b === undefined) return false;
  if (a.prototype !== b.prototype) return false;
  let keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;
  return keys.every(k => equals(a[k], b[k]));
};
```

<details>
<summary>Examples</summary>

```js
equals({ a: [2, { e: 3 }], b: [4], c: 'foo' }, { a: [2, { e: 3 }], b: [4], c: 'foo' }); // true
```

</details>

<br>[⬆ Back to top](#contents)

### findKey

Returns the first key that satisfies the provided testing function. Otherwise `undefined` is returned.

返回满足给定的测试函数的第一个键。否则返回`undefined`。

Use `Object.keys(obj)` to get all the properties of the object, `Array.prototype.find()` to test the provided function for each key-value pair. The callback receives three arguments - the value, the key and the object.

使用`Object.keys(obj)`来获取对象所有属性， `Array.prototype.find()`来对每个键值对测试指定的函数。回调函数接受三个参数——值，键，和对象。

```js
const findKey = (obj, fn) => Object.keys(obj).find(key => fn(obj[key], key, obj));
```

<details>
<summary>Examples</summary>

```js
findKey(
  {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  },
  o => o['active']
); // 'barney'
```

</details>

<br>[⬆ Back to top](#contents)

### findLastKey

Returns the last key that satisfies the provided testing function.
Otherwise `undefined` is returned.

返回满足给定测试函数的最后一个键。否则返回`undefined`。

Use `Object.keys(obj)` to get all the properties of the object, `Array.prototype.reverse()` to reverse their order and `Array.prototype.find()` to test the provided function for each key-value pair.
The callback receives three arguments - the value, the key and the object.

使用`Object.keys(obj)`来获取对象所有属性，使用`Array.prototype.reverse()`来倒转它们的顺序，使用`Array.prototype.find()`来对每个键值对测试指定的函数。回调函数接受三个参数——值，键，和对象。

```js
const findLastKey = (obj, fn) =>
  Object.keys(obj)
    .reverse()
    .find(key => fn(obj[key], key, obj));
```

<details>
<summary>Examples</summary>

```js
findLastKey(
  {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  },
  o => o['active']
); // 'pebbles'
```

</details>

<br>[⬆ Back to top](#contents)

### flattenObject

Flatten an object with the paths for keys.

用路径和键列表的方式把一个对象扁平化。（路径就是用`.`分隔对象层级）

Use recursion.
Use `Object.keys(obj)` combined with `Array.prototype.reduce()` to convert every leaf node to a flattened path node.
If the value of a key is an object, the function calls itself with the appropriate `prefix` to create the path using `Object.assign()`.
Otherwise, it adds the appropriate prefixed key-value pair to the accumulator object.
You should always omit the second argument, `prefix`, unless you want every key to have a prefix.

使用递归。使用`Object.keys(obj)`和`Array.prototype.reduce()`来把每一个叶子节点转换为扁平化路径节点。如果这个键的值是一个对象，这个函数则使用`Object.assign()`来用合适的`prefix`调用自己来创建一个路径。否则，它把合适的前缀键值对添加到累加器中。除非你想要每个键都有一个前缀，否则你应该总是不传第二个参数`prefix`。

```js
const flattenObject = (obj, prefix = '') =>
  Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + '.' : '';
    if (typeof obj[k] === 'object') Object.assign(acc, flattenObject(obj[k], pre + k));
    else acc[pre + k] = obj[k];
    return acc;
  }, {});
```

<details>
<summary>Examples</summary>

```js
flattenObject({ a: { b: { c: 1 } }, d: 1 }); // { 'a.b.c': 1, d: 1 }
```

</details>

<br>[⬆ Back to top](#contents)

### forOwn

Iterates over all own properties of an object, running a callback for each one.

对对象中每个自有属性都迭代的执行一个回调。

Use `Object.keys(obj)` to get all the properties of the object, `Array.prototype.forEach()` to run the provided function for each key-value pair. The callback receives three arguments - the value, the key and the object.

使用`Object.keys(obj)`来获取对象的属性列表，`Array.prototype.forEach()`来对每个键值对运行给定的函数。回调函数接受三个参数——值，键，和对象。

```js
const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));
```

<details>
<summary>Examples</summary>

```js
forOwn({ foo: 'bar', a: 1 }, v => console.log(v)); // 'bar', 1
```

</details>

<br>[⬆ Back to top](#contents)

### forOwnRight

Iterates over all own properties of an object in reverse, running a callback for each one.

反向的对对象中每个自有属性（按照默认顺序相反的顺序）都迭代的执行一个回调。

Use `Object.keys(obj)` to get all the properties of the object, `Array.prototype.reverse()` to reverse their order and `Array.prototype.forEach()` to run the provided function for each key-value pair. The callback receives three arguments - the value, the key and the object.

使用`Object.keys(obj)`来获取对象的每个属性，使用`Array.prototype.reverse()`来反转它们的顺序，`Array.prototype.forEach()`来对每个键值对运行给定的函数。回调函数接受三个参数——值，键，和对象。

```js
const forOwnRight = (obj, fn) =>
  Object.keys(obj)
    .reverse()
    .forEach(key => fn(obj[key], key, obj));
```

<details>
<summary>Examples</summary>

```js
forOwnRight({ foo: 'bar', a: 1 }, v => console.log(v)); // 1, 'bar'
```

</details>

<br>[⬆ Back to top](#contents)

### functions

Returns an array of function property names from own (and optionally inherited) enumerable properties of an object.

从一个对象的自有的（可选的从继承属性）可枚举属性中返回一个函数属性名字的数组。

Use `Object.keys(obj)` to iterate over the object's own properties.
If `inherited` is `true`, use `Object.get.PrototypeOf(obj)` to also get the object's inherited properties.
Use `Array.prototype.filter()` to keep only those properties that are functions.
Omit the second argument, `inherited`, to not include inherited properties by default.

使用`Object.keys(obj)`来迭代对象的每个自有属性。如果`inherited`参数为`true`，使用`Object.getPrototypeOf(obj)`把对象的继承属性也获取到。使用`Array.prototype.filter()`来只保留那些是函数的属性。如果不传第二个参数`inherited`，则默认不包含继承属性。

```js
const functions = (obj, inherited = false) =>
  (inherited
    ? [...Object.keys(obj), ...Object.keys(Object.getPrototypeOf(obj))]
    : Object.keys(obj)
  ).filter(key => typeof obj[key] === 'function');
```

<details>
<summary>Examples</summary>

```js
function Foo() {
  this.a = () => 1;
  this.b = () => 2;
}
Foo.prototype.c = () => 3;
functions(new Foo()); // ['a', 'b']
functions(new Foo(), true); // ['a', 'b', 'c']
```

</details>

<br>[⬆ Back to top](#contents)

### get

Retrieve a set of properties indicated by the given selectors from an object.

从一个对象中使用给出的选择器获取一个指定属性列表。

Use `Array.prototype.map()` for each selector, `String.prototype.replace()` to replace square brackets with dots, `String.prototype.split('.')` to split each selector, `Array.prototype.filter()` to remove empty values and `Array.prototype.reduce()` to get the value indicated by it.

使用`Array.prototype.map()` 遍历每个selector，使用`String.prototype.replace()`来用点来替换方括号，`String.prototype.split('.')`来拆分每个选择器，使用`Array.prototype.filter()`来把空值删除，然后使用`Array.prototype.reduce()`来获取被它指定的值。

```js
const get = (from, ...selectors) =>
  [...selectors].map(s =>
    s
      .replace(/\[([^\[\]]*)\]/g, '.$1.')
      .split('.')
      .filter(t => t !== '')
      .reduce((prev, cur) => prev && prev[cur], from)
  );
```

<details>
<summary>Examples</summary>

```js
const obj = { selector: { to: { val: 'val to select' } }, target: [1, 2, { a: 'test' }] };
get(obj, 'selector.to.val', 'target[0]', 'target[2].a'); // ['val to select', 1, 'test']
```

</details>

<br>[⬆ Back to top](#contents)

### invertKeyValues

Inverts the key-value pairs of an object, without mutating it. The corresponding inverted value of each inverted key is an array of keys responsible for generating the inverted value. If a function is supplied, it is applied to each inverted key.

转化一个对象的键值对（不改变对象本身）。每个转化后的键的对应的转化后的值是一个与产生的转化后的值对应的键列表。如果提供了函数，它会被应用到每个转化后的值。

Use `Object.keys()` and `Array.prototype.reduce()` to invert the key-value pairs of an object and apply the function provided (if any).
Omit the second argument, `fn`, to get the inverted keys without applying a function to them.

使用`Object.keys()`和`Array.prototype.reduce()`来转化一个对象的键值对，然后应用这个给出的函数（如果有的话）。如果不传第二个参数`fn`，则不对转化后的键应用函数。

```js
const invertKeyValues = (obj, fn) =>
  Object.keys(obj).reduce((acc, key) => {
    const val = fn ? fn(obj[key]) : obj[key];
    acc[val] = acc[val] || [];
    acc[val].push(key);
    return acc;
  }, {});
```

<details>
<summary>Examples</summary>

```js
invertKeyValues({ a: 1, b: 2, c: 1 }); // { 1: [ 'a', 'c' ], 2: [ 'b' ] }
invertKeyValues({ a: 1, b: 2, c: 1 }, value => 'group' + value); // { group1: [ 'a', 'c' ], group2: [ 'b' ] }
```

</details>

<br>[⬆ Back to top](#contents)

### lowercaseKeys

Creates a new object from the specified object, where all the keys are in lowercase.

从指定的对象中创建一个新的每个键都是小写形式的对象。

Use `Object.keys()` and `Array.prototype.reduce()` to create a new object from the specified object.
Convert each key in the original object to lowercase, using `String.toLowerCase()`.

使用`Object.keys()`和`Array.prototype.reduce()`来从指定的对象中创建一个新的对象。使用`String.toLowerCase()`把原始对象中每个键都转到小写形式。

```js
const lowercaseKeys = obj =>
  Object.keys(obj).reduce((acc, key) => {
    acc[key.toLowerCase()] = obj[key];
    return acc;
  }, {});
```

<details>
<summary>Examples</summary>

```js
const myObj = { Name: 'Adam', sUrnAME: 'Smith' };
const myObjLower = lowercaseKeys(myObj); // {name: 'Adam', surname: 'Smith'};
```

</details>

<br>[⬆ Back to top](#contents)

### mapKeys

Creates an object with keys generated by running the provided function for each key and the same values as the provided object.

创建一个对象，它的键是通过对每个键和与给定对象中对应的值应用指定的函数来产生的。

Use `Object.keys(obj)` to iterate over the object's keys.
Use `Array.prototype.reduce()` to create a new object with the same values and mapped keys using `fn`.

使用`Object.keys(obj)`来遍历对象的键列表。使用`Array.prototype.reduce()`来用对应的值和使用`fn`映射出的键列表创建一个新对象。

```js
const mapKeys = (obj, fn) =>
  Object.keys(obj).reduce((acc, k) => {
    acc[fn(obj[k], k, obj)] = obj[k];
    return acc;
  }, {});
```

<details>
<summary>Examples</summary>

```js
mapKeys({ a: 1, b: 2 }, (val, key) => key + val); // { a1: 1, b2: 2 }
```

</details>

<br>[⬆ Back to top](#contents)

### mapValues

Creates an object with the same keys as the provided object and values generated by running the provided function for each value.

创建一个与给出的对象有相同键的一个对象，它的每个值都是用给出的函数处理后的结果。

Use `Object.keys(obj)` to iterate over the object's keys.
Use `Array.prototype.reduce()` to create a new object with the same keys and mapped values using `fn`.

使用`Object.keys(obj)`来遍历对象的键列表。使用`Array.prototype.reduce()`来创建一个拥有相同键和用`fn`映射后的值的新对象。

```js
const mapValues = (obj, fn) =>
  Object.keys(obj).reduce((acc, k) => {
    acc[k] = fn(obj[k], k, obj);
    return acc;
  }, {});
```

<details>
<summary>Examples</summary>

```js
const users = {
  fred: { user: 'fred', age: 40 },
  pebbles: { user: 'pebbles', age: 1 }
};
mapValues(users, u => u.age); // { fred: 40, pebbles: 1 }
```

</details>

<br>[⬆ Back to top](#contents)

### matches

Compares two objects to determine if the first one contains equivalent property values to the second one.

比较两个对象，确定第一个对象是否包含与第二个对象相同的属性值。

Use `Object.keys(source)` to get all the keys of the second object, then `Array.prototype.every()`, `Object.hasOwnProperty()` and strict comparison to determine if all keys exist in the first object and have the same values.

使用`Object.keys(source)`来获取第二个对象的键列表，然后用`Array.prototype.every()`, `Object.hasOwnProperty()`和严格等式来确定第一个对象中是否有相同的键，并且对应的键有相同的值。

```js
const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
```

<details>
<summary>Examples</summary>

```js
matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }); // true
matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true }); // false
```

</details>

<br>[⬆ Back to top](#contents)

### matchesWith

Compares two objects to determine if the first one contains equivalent property values to the second one, based on a provided function.

基于给出的函数，比较两个对象，确定第一个对象是否包含与第二个对象相同的属性值。

Use `Object.keys(source)` to get all the keys of the second object, then `Array.prototype.every()`, `Object.hasOwnProperty()` and the provided function to determine if all keys exist in the first object and have equivalent values.
If no function is provided, the values will be compared using the equality operator.

使用`Object.keys(source)`来获取第二个对象的键列表，然后用`Array.prototype.every()`, `Object.hasOwnProperty()`和给出的函数来确定第一个对象中是否有相同的键，并且对应的键有相同的值。如果没有`fn`函数参数，值将用等号操作符比较。

```js
const matchesWith = (obj, source, fn) =>
  Object.keys(source).every(
    key =>
      obj.hasOwnProperty(key) && fn
        ? fn(obj[key], source[key], key, obj, source)
        : obj[key] == source[key]
  );
```

<details>
<summary>Examples</summary>

```js
const isGreeting = val => /^h(?:i|ello)$/.test(val);
matchesWith(
  { greeting: 'hello' },
  { greeting: 'hi' },
  (oV, sV) => isGreeting(oV) && isGreeting(sV)
); // true
```

</details>

<br>[⬆ Back to top](#contents)

### merge

Creates a new object from the combination of two or more objects.

结合两个或更多个对象创建一个新的对象。

Use `Array.prototype.reduce()` combined with `Object.keys(obj)` to iterate over all objects and keys.
Use `hasOwnProperty()` and `Array.prototype.concat()` to append values for keys existing in multiple objects.

所有`Array.prototype.reduce()`结合`Object.keys(obj)`来遍历所有对象和键。使用`hasOwnProperty()`和`Array.prototype.concat()`来给在多个对象中存在的键添加值（形成值数组）。

```js
const merge = (...objs) =>
  [...objs].reduce(
    (acc, obj) =>
      Object.keys(obj).reduce((a, k) => {
        acc[k] = acc.hasOwnProperty(k) ? [].concat(acc[k]).concat(obj[k]) : obj[k];
        return acc;
      }, {}),
    {}
  );
```

<details>
<summary>Examples</summary>

```js
const object = {
  a: [{ x: 2 }, { y: 4 }],
  b: 1
};
const other = {
  a: { z: 3 },
  b: [2, 3],
  c: 'foo'
};
merge(object, other); // { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' }
```

</details>

<br>[⬆ Back to top](#contents)

### nest

Given a flat array of objects linked to one another, it will nest them recursively.
Useful for nesting comments, such as the ones on reddit.com.

给出一个相互链接的扁平的对象列表，它将会递归嵌套它们。用来建立嵌套的注释，例如reddit.com上面的。

Use recursion.
Use `Array.prototype.filter()` to filter the items where the `id` matches the `link`, then `Array.prototype.map()` to map each one to a new object that has a `children` property which recursively nests the items based on which ones are children of the current item.
Omit the second argument, `id`, to default to `null` which indicates the object is not linked to another one (i.e. it is a top level object).
Omit the third argument, `link`, to use `'parent_id'` as the default property which links the object to another one by its `id`.

使用递归。使用`Array.prototype.filter()`来过滤出`id`匹配`link`的项，然后使用`Array.prototype.map()`来把每个项映射到拥有一个`children`属性的对象，`children`属性递归嵌套的包含属于当前项目的子项目。如果不传第二个参数`id`，默认值为`null`，代表这个对象不链接到其他对象（例如它是顶层的对象）。如果不传第三个参数`link`，则使用`'parent_id'`作为它的默认值，通过`id`把这个对象链接到另一个。

```js
const nest = (items, id = null, link = 'parent_id') =>
  items
    .filter(item => item[link] === id)
    .map(item => ({ ...item, children: nest(items, item.id) }));
```

<details>
<summary>Examples</summary>

```js
// One top level comment
const comments = [
  { id: 1, parent_id: null },
  { id: 2, parent_id: 1 },
  { id: 3, parent_id: 1 },
  { id: 4, parent_id: 2 },
  { id: 5, parent_id: 4 }
];
const nestedComments = nest(comments); // [{ id: 1, parent_id: null, children: [...] }]
```


</details>

<br>[⬆ Back to top](#contents)

### objectFromPairs

Creates an object from the given key-value pairs.

从给出的键值对创建一个对象。

Use `Array.prototype.reduce()` to create and combine key-value pairs.

使用`Array.prototype.reduce()`来创建一个对象，它包含了提供的键值对。

```js
const objectFromPairs = arr => arr.reduce((a, [key, val]) => ((a[key] = val), a), {});
```

<details>
<summary>Examples</summary>

```js
objectFromPairs([['a', 1], ['b', 2]]); // {a: 1, b: 2}
```

</details>

<br>[⬆ Back to top](#contents)

### objectToPairs

Creates an array of key-value pair arrays from an object.

从一个对象创建一个键值对数组。

Use `Object.keys()` and `Array.prototype.map()` to iterate over the object's keys and produce an array with key-value pairs.

使用`Object.keys()`和`Array.prototype.map()`来遍历对象的键来生成一个键值对数组。

```js
const objectToPairs = obj => Object.keys(obj).map(k => [k, obj[k]]);
```

<details>
<summary>Examples</summary>

```js
objectToPairs({ a: 1, b: 2 }); // [ ['a', 1], ['b', 2] ]
```

</details>

<br>[⬆ Back to top](#contents)

### omit

Omits the key-value pairs corresponding to the given keys from an object.

根据给出的键列表把一个对象中的键值对去除掉。

Use `Object.keys(obj)`, `Array.prototype.filter()` and `Array.prototype.includes()` to remove the provided keys.
Use `Array.prototype.reduce()` to convert the filtered keys back to an object with the corresponding key-value pairs.

使用`Object.keys(obj)`, `Array.prototype.filter()`和`Array.prototype.includes()`来删除给出的键列表。使用`Array.prototype.reduce()`来把过滤出的键转换回拥有相应键值对一个对象。

```js
const omit = (obj, arr) =>
  Object.keys(obj)
    .filter(k => !arr.includes(k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
```

<details>
<summary>Examples</summary>

```js
omit({ a: 1, b: '2', c: 3 }, ['b']); // { 'a': 1, 'c': 3 }
```

</details>

<br>[⬆ Back to top](#contents)

### omitBy

Creates an object composed of the properties the given function returns falsy for. The function is invoked with two arguments: (value, key).

创建一个由给出的函数作用后返回假值的属性组成的对象。这个函数执行时有两个参数：(value, key)。

Use `Object.keys(obj)` and `Array.prototype.filter()`to remove the keys for which `fn` returns a truthy value.
Use `Array.prototype.reduce()` to convert the filtered keys back to an object with the corresponding key-value pairs.

使用`Object.keys(obj)`和`Array.prototype.filter()`来去除`fn`函数返回真值的键。使用`Array.prototype.reduce()`来把过滤后的键转换回一个包含到对应的键值对的对象。

```js
const omitBy = (obj, fn) =>
  Object.keys(obj)
    .filter(k => !fn(obj[k], k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
```

<details>
<summary>Examples</summary>

```js
omitBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'number'); // { b: '2' }
```

</details>

<br>[⬆ Back to top](#contents)

### orderBy

Returns a sorted array of objects ordered by properties and orders.

返回一个根据属性列表和顺序列表来排序的对象数组。

Uses `Array.prototype.sort()`, `Array.prototype.reduce()` on the `props` array with a default value of `0`, use array destructuring to swap the properties position depending on the order passed.
If no `orders` array is passed it sort by `'asc'` by default.

对`props`（默认值为`0`）数组使用`Array.prototype.sort()`, `Array.prototype.reduce()`，使用数组解构来根据传入的顺序交换属性的位置。如果`orders`数组不传，默认按照`'asc'`顺序排序。

```js
const orderBy = (arr, props, orders) =>
  [...arr].sort((a, b) =>
    props.reduce((acc, prop, i) => {
      if (acc === 0) {
        const [p1, p2] = orders && orders[i] === 'desc' ? [b[prop], a[prop]] : [a[prop], b[prop]];
        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
      }
      return acc;
    }, 0)
  );
```

<details>
<summary>Examples</summary>

```js
const users = [{ name: 'fred', age: 48 }, { name: 'barney', age: 36 }, { name: 'fred', age: 40 }];
orderBy(users, ['name', 'age'], ['asc', 'desc']); // [{name: 'barney', age: 36}, {name: 'fred', age: 48}, {name: 'fred', age: 40}]
orderBy(users, ['name', 'age']); // [{name: 'barney', age: 36}, {name: 'fred', age: 40}, {name: 'fred', age: 48}]
```

</details>

<br>[⬆ Back to top](#contents)

### pick

Picks the key-value pairs corresponding to the given keys from an object.

根据给定的键列表从一个对象中挑选出相应的键值对。

Use `Array.prototype.reduce()` to convert the filtered/picked keys back to an object with the corresponding key-value pairs if the key exists in the object.

使用`Array.prototype.reduce()`遍历过滤/挑选出的键列表，如果键存在于原对象中，则把相应的键值对转换回新的对象中。

```js
const pick = (obj, arr) =>
  arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});
```

<details>
<summary>Examples</summary>

```js
pick({ a: 1, b: '2', c: 3 }, ['a', 'c']); // { 'a': 1, 'c': 3 }
```

</details>

<br>[⬆ Back to top](#contents)

### pickBy

Creates an object composed of the properties the given function returns truthy for. The function is invoked with two arguments: (value, key).

创建一个给定的函数返回真值的属性组成的对象。这个函数接受两个参数：(value, key)。

Use `Object.keys(obj)` and `Array.prototype.filter()`to remove the keys for which `fn` returns a falsy value.
Use `Array.prototype.reduce()` to convert the filtered keys back to an object with the corresponding key-value pairs.

使用`Object.keys(obj)`和`Array.prototype.filter()`来把`fn`返回假值的键删除。使用`Array.prototype.reduce()`把过滤出来的键列表用相应的键值对转换回一个新对象中。

```js
const pickBy = (obj, fn) =>
  Object.keys(obj)
    .filter(k => fn(obj[k], k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
```

<details>
<summary>Examples</summary>

```js
pickBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'number'); // { 'a': 1, 'c': 3 }
```

</details>

<br>[⬆ Back to top](#contents)

### renameKeys

Replaces the names of multiple object keys with the values provided.

用给定的值列表替换多个对象中键的名字。

Use `Object.keys()` in combination with `Array.prototype.reduce()` and the spread operator (`...`) to get the object's keys and rename them according to `keysMap`.

使用`Object.keys()`结合`Array.prototype.reduce()`还有展开操作符(`...`)来获取对象的键列表，并根据`keysMap`重命名它们。

```js
const renameKeys = (keysMap, obj) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] }
    }),
    {}
  );
```

<details>
<summary>Examples</summary>

```js
const obj = { name: 'Bobo', job: 'Front-End Master', shoeSize: 100 };
renameKeys({ name: 'firstName', job: 'passion' }, obj); // { firstName: 'Bobo', passion: 'Front-End Master', shoeSize: 100 }
```

</details>

<br>[⬆ Back to top](#contents)

### shallowClone

Creates a shallow clone of an object.

创建一个对象的浅拷贝。

Use `Object.assign()` and an empty object (`{}`) to create a shallow clone of the original.

使用`Object.assign()`和一个空对象来创建一个原始对象的浅拷贝。

```js
const shallowClone = obj => Object.assign({}, obj);
```

<details>
<summary>Examples</summary>

```js
const a = { x: true, y: 1 };
const b = shallowClone(a); // a !== b
```

</details>

<br>[⬆ Back to top](#contents)

### size

Get size of arrays, objects or strings.

获取数组、对象或字符串的大小。

Get type of `val` (`array`, `object` or `string`). 
Use `length` property for arrays.
Use `length` or `size` value if available or number of keys for objects.
Use `size` of a [`Blob` object](https://developer.mozilla.org/en-US/docs/Web/API/Blob) created from `val` for strings.

获取`val`的类型 (`array`, `object`或者`string`)。对于数组则使用`length`，对于对象则使用`length`或`size`或者键列表的数目这三个值中可用的。对于字符串则使用从`val`创建的[`Blob` object](https://developer.mozilla.org/en-US/docs/Web/API/Blob)的`size`。

Split strings into array of characters with `split('')` and return its length.

```js
const size = val =>
  Array.isArray(val)
    ? val.length
    : val && typeof val === 'object'
      ? val.size || val.length || Object.keys(val).length
      : typeof val === 'string'
        ? new Blob([val]).size
        : 0;
```

<details>
<summary>Examples</summary>

```js
size([1, 2, 3, 4, 5]); // 5
size('size'); // 4
size({ one: 1, two: 2, three: 3 }); // 3
```

</details>

<br>[⬆ Back to top](#contents)

### transform

Applies a function against an accumulator and each key in the object (from left to right).

对一个累加器和一个对象中每个键应用一个函数（从左到右）。

Use `Object.keys(obj)` to iterate over each key in the object, `Array.prototype.reduce()` to call the apply the specified function against the given accumulator.

使用`Object.keys(obj)`来遍历对象中每个键，`Array.prototype.reduce()`来对给出的累加器调用指定的函数（使用这个函数对对象中的键值进行累加操作）。

```js
const transform = (obj, fn, acc) => Object.keys(obj).reduce((a, k) => fn(a, obj[k], k, obj), acc);
```

<details>
<summary>Examples</summary>

```js
transform(
  { a: 1, b: 2, c: 1 },
  (r, v, k) => {
    (r[v] || (r[v] = [])).push(k);
    return r;
  },
  {}
); // { '1': ['a', 'c'], '2': ['b'] }
```

</details>

<br>[⬆ Back to top](#contents)

### truthCheckCollection

Checks if the predicate (second argument) is truthy on all elements of a collection (first argument).

检查一个集合（第一个参数）中的所有元素的断言（第二个参数）是否为真值。

Use `Array.prototype.every()` to check if each passed object has the specified property and if it returns a truthy value.

使用`Array.prototype.every()`来检查是否传入的对象有指定的属性，并且它是否返回真值。

```js
const truthCheckCollection = (collection, pre) => collection.every(obj => obj[pre]);
```

<details>
<summary>Examples</summary>

```js
truthCheckCollection([{ user: 'Tinky-Winky', sex: 'male' }, { user: 'Dipsy', sex: 'male' }], 'sex'); // true
```

</details>

<br>[⬆ Back to top](#contents)

### unflattenObject ![advanced](/advanced.svg)

Unflatten an object with the paths for keys.

用键的路径列表去扁平化一个对象（变为多级结构）。

Use `Object.keys(obj)` combined with `Array.prototype.reduce()` to convert flattened path node to a leaf node.
If the value of a key contains a dot delimiter (`.`), use `Array.prototype.split('.')`, string transformations and `JSON.parse()` to create an object, then `Object.assign()` to create the leaf node.
Otherwise, add the appropriate key-value pair to the accumulator object.

使用`Object.keys(obj)`结合`Array.prototype.reduce()`来把扁平的路径节点转换成一个叶子节点。如果键的值包含一个点分符合(`.`)，使用`Array.prototype.split('.')`，字符串变形和`JSON.parse()`来创建一个对象，然后用`Object.assign()`来创建一个叶子节点。否则，向累加器中添加合适的键值对。

```js
const unflattenObject = obj =>
  Object.keys(obj).reduce((acc, k) => {
    if (k.indexOf('.') !== -1) {
      const keys = k.split('.');
      Object.assign(
        acc,
        JSON.parse(
          '{' +
            keys.map((v, i) => (i !== keys.length - 1 ? `"${v}":{` : `"${v}":`)).join('') +
            obj[k] +
            '}'.repeat(keys.length)
        )
      );
    } else acc[k] = obj[k];
    return acc;
  }, {});
```

<details>
<summary>Examples</summary>

```js
unflattenObject({ 'a.b.c': 1, d: 1 }); // { a: { b: { c: 1 } }, d: 1 }
```

</details>

<br>[⬆ Back to top](#contents)


---

## 📜 String

### byteSize

Returns the length of a string in bytes.

返回字节维度的字符串的长度。

Convert a given string to a [`Blob` Object](https://developer.mozilla.org/en-US/docs/Web/API/Blob) and find its `size`.

把字符串转换为一个[`Blob` Object](https://developer.mozilla.org/en-US/docs/Web/API/Blob)，并找出它的`size`。

```js
const byteSize = str => new Blob([str]).size;
```

<details>
<summary>Examples</summary>

```js
byteSize('😀'); // 4
byteSize('Hello World'); // 11
```

</details>

<br>[⬆ Back to top](#contents)

### capitalize

Capitalizes the first letter of a string.

大写字符串的第一个字母。

Use array destructuring and `String.prototype.toUpperCase()` to capitalize first letter, `...rest` to get array of characters after first letter and then `Array.prototype.join('')` to make it a string again.
Omit the `lowerRest` parameter to keep the rest of the string intact, or set it to `true` to convert to lowercase.

使用数组解构和`String.prototype.toUpperCase()`来大写化第一个字母，使用`...rest`来获取第一个字母后的字符数组，然后用`Array.prototype.join('')`把它们重新连结为字符串。如果不传`lowerRest`参数，则原封不动的保留字符串剩余的字符，如果设置`lowerRest`为`true`则把剩余的字符转换为小写。

```js
const capitalize = (
  [first, ...rest],
  lowerRest = false // [first, ...rest]解构的巧妙应用，不光是对象和数组才能解构
) => first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));
```

<details>
<summary>Examples</summary>

```js
capitalize('fooBar'); // 'FooBar'
capitalize('fooBar', true); // 'Foobar'
```

</details>

<br>[⬆ Back to top](#contents)

### capitalizeEveryWord

Capitalizes the first letter of every word in a string.

大写化字符串中每一个词的第一个字母。

Use `String.prototype.replace()` to match the first character of each word and `String.prototype.toUpperCase()` to capitalize it.

使用`String.prototype.replace()`来匹配每个词的第一个字符，并使用`String.prototype.toUpperCase()`来把它大写化。

```js
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());
```

<details>
<summary>Examples</summary>

```js
capitalizeEveryWord('hello world!'); // 'Hello World!'
```

</details>

<br>[⬆ Back to top](#contents)

### compactWhitespace

Returns a string with whitespaces compacted.

返回一个压缩了空白字符的字符串。

Use `String.prototype.replace()` with a regular expression to replace all occurrences of 2 or more whitespace characters with a single space.

使用`String.prototype.replace()`和一个正则表达式来把出现了2个或更多次（连续）的空白字符替换为单个空格。

```js
const compactWhitespace = str => str.replace(/\s{2,}/g, ' ');
```

<details>
<summary>Examples</summary>

```js
compactWhitespace('Lorem    Ipsum'); // 'Lorem Ipsum'
compactWhitespace('Lorem \n Ipsum'); // 'Lorem Ipsum'
```

</details>

<br>[⬆ Back to top](#contents)

### CSVToArray

Converts a comma-separated values (CSV) string to a 2D array.

把一个逗号分隔值（CSV）字符串转为二维数组。

Use `Array.prototype.slice()` and `Array.prototype.indexOf('\n')` to remove the first row (title row) if `omitFirstRow` is `true`.
Use `String.prototype.split('\n')` to create a string for each row, then `String.prototype.split(delimiter)` to separate the values in each row.
Omit the second argument, `delimiter`, to use a default delimiter of `,`.
Omit the third argument, `omitFirstRow`, to include the first row (title row) of the CSV string.

如果`omitFirstRow`是`true`，则使用`Array.prototype.slice()`和`Array.prototype.indexOf('\n')`删除第一行(标题行)。使用`String.prototype.split('\n')`来为每一行创建一个字符串，然后用`String.prototype.split(delimiter)`来拆分每一行的值。如果不传第二个参数`delimiter`，默认值为`,`。如果不传第三个参数`omitFirstRow`，默认包含CSV字符串的第一行（标题行）。

```js
const CSVToArray = (data, delimiter = ',', omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
    .split('\n')
    .map(v => v.split(delimiter));
```

<details>
<summary>Examples</summary>

```js
CSVToArray('a,b\nc,d'); // [['a','b'],['c','d']];
CSVToArray('a;b\nc;d', ';'); // [['a','b'],['c','d']];
CSVToArray('col1,col2\na,b\nc,d', ',', true); // [['a','b'],['c','d']];
```

</details>

<br>[⬆ Back to top](#contents)

### CSVToJSON ![advanced](/advanced.svg)

Converts a comma-separated values (CSV) string to a 2D array of objects.
The first row of the string is used as the title row.

将一个逗号分隔值（CSV）字符串转为对象的二维数组。字符串的第一行用作标题行。

Use `Array.prototype.slice()` and `Array.prototype.indexOf('\n')` and `String.prototype.split(delimiter)` to separate the first row (title row) into values.
Use `String.prototype.split('\n')` to create a string for each row, then `Array.prototype.map()` and `String.prototype.split(delimiter)` to separate the values in each row.
Use `Array.prototype.reduce()` to create an object for each row's values, with the keys parsed from the title row.
Omit the second argument, `delimiter`, to use a default delimiter of `,`.

使用`Array.prototype.slice()`和`Array.prototype.indexOf('\n')`还有`String.prototype.split(delimiter)`来把第一行（标题行）转为值列表。使用`String.prototype.split('\n')`来为每一行创建一个字符串，然后用`Array.prototype.map()`和`String.prototype.split(delimiter)`来拆分每一行的值。使用`Array.prototype.reduce()` 来为每一行的值创建一个对象，它的键解析自CSV字符串的标题行。如果不传第二个参数`delimiter`，默认值为`,`。

```js
const CSVToJSON = (data, delimiter = ',') => {
  const titles = data.slice(0, data.indexOf('\n')).split(delimiter);
  return data
    .slice(data.indexOf('\n') + 1)
    .split('\n')
    .map(v => {
      const values = v.split(delimiter);
      return titles.reduce((obj, title, index) => ((obj[title] = values[index]), obj), {});
    });
};
```

<details>
<summary>Examples</summary>

```js
CSVToJSON('col1,col2\na,b\nc,d'); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
CSVToJSON('col1;col2\na;b\nc;d', ';'); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
```

</details>

<br>[⬆ Back to top](#contents)

### decapitalize

Decapitalizes the first letter of a string.

去大写化一个字符串的首字母。

Use array destructuring and `String.toLowerCase()` to decapitalize first letter, `...rest` to get array of characters after first letter and then `Array.prototype.join('')` to make it a string again.
Omit the `upperRest` parameter to keep the rest of the string intact, or set it to `true` to convert to uppercase.

使用数组解构和`String.toLowerCase()`来去大写化首字母，使用`...rest`来获取首字母后的字符数组，然后用`Array.prototype.join('')`把它们重新变为字符串。如果不传`upperRest`参数则保持字符串剩余部分不变；把它设置成`true`，代表将剩余部分转换为大写。

```js
const decapitalize = ([first, ...rest], upperRest = false) =>
  first.toLowerCase() + (upperRest ? rest.join('').toUpperCase() : rest.join(''));
```

<details>
<summary>Examples</summary>

```js
decapitalize('FooBar'); // 'fooBar'
decapitalize('FooBar', true); // 'fOOBAR'
```

</details>

<br>[⬆ Back to top](#contents)

### escapeHTML

Escapes a string for use in HTML.

转译一个HTML中使用的字符串（转换HTML实例）。

Use `String.prototype.replace()` with a regexp that matches the characters that need to be escaped, using a callback function to replace each character instance with its associated escaped character using a dictionary (object).

使用`String.prototype.replace()`和一个匹配需要转义的字符的正则表达式，还有一个回调函数来用相应的转义后的字符串（通过一个字典对象匹配）替换每个字符实例。

```js
const escapeHTML = str =>
  str.replace(
    /[&<>'"]/g,
    tag =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
  );
```

<details>
<summary>Examples</summary>

```js
escapeHTML('<a href="#">Me & you</a>'); // '&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;'
```

</details>

<br>[⬆ Back to top](#contents)

### escapeRegExp

Escapes a string to use in a regular expression.

转义一个在正则表达式中使用的字符串。

Use `String.prototype.replace()` to escape special characters.

使用`String.prototype.replace()`来转义特殊字符。

```js
const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
```

<details>
<summary>Examples</summary>

```js
escapeRegExp('(test)'); // \\(test\\)
```

</details>

<br>[⬆ Back to top](#contents)

### fromCamelCase

Converts a string from camelcase.

从驼峰写法的字符串转换出一个字符串。

Use `String.prototype.replace()` to remove underscores, hyphens, and spaces and convert words to camelcase.
Omit the second argument to use a default `separator` of `_`.

使用`String.prototype.replace()`来去掉下划线、连字符，还有空白字符，并把每个词转换为驼峰的。如果不传第二个参数，默认`separator`为`_`。（这段说明应该说的是驼峰化，反了）

```js
const fromCamelCase = (str, separator = '_') =>
  str
    .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
    .toLowerCase();
```

<details>
<summary>Examples</summary>

```js
fromCamelCase('someDatabaseFieldName', ' '); // 'some database field name'
fromCamelCase('someLabelThatNeedsToBeCamelized', '-'); // 'some-label-that-needs-to-be-camelized'
fromCamelCase('someJavascriptProperty', '_'); // 'some_javascript_property'
```

</details>

<br>[⬆ Back to top](#contents)

### indentString

Indents each line in the provided string.

缩进给定字符串的每一行。

Use `String.replace` and a regular expression to add the character specified by `indent` `count` times at the start of each line.
Omit the third parameter, `indent`, to use a default indentation character of `' '`.

使用`String.replace`和一个正则表达式在每一行的开始添加指定的`indent``count`次的字符串。如果不传第三个参数`indent`，使用默认的缩进字符`' '`。

```js
const indentString = (str, count, indent = ' ') => str.replace(/^/gm, indent.repeat(count));
```

<details>
<summary>Examples</summary>

```js
indentString('Lorem\nIpsum', 2); // '  Lorem\n  Ipsum'
indentString('Lorem\nIpsum', 2, '_'); // '__Lorem\n__Ipsum'
```

</details>

<br>[⬆ Back to top](#contents)

### isAbsoluteURL

Returns `true` if the given string is an absolute URL, `false` otherwise.

如果给出的字符串是绝对路径的URL，则返回`true`，否则返回`false`。

Use a regular expression to test if the string is an absolute URL.

使用正则表达式来测试这个字符串是否为一个绝对路径的URL。

```js
const isAbsoluteURL = str => /^[a-z][a-z0-9+.-]*:/.test(str);
```

<details>
<summary>Examples</summary>

```js
isAbsoluteURL('https://google.com'); // true
isAbsoluteURL('ftp://www.myserver.net'); // true
isAbsoluteURL('/foo/bar'); // false
```

</details>

<br>[⬆ Back to top](#contents)

### isAnagram

Checks if a string is an anagram of another string (case-insensitive, ignores spaces, punctuation and special characters).

检测一个字符串是否是另一个字符串的重新排列（大小写敏感，忽略空格、点号和特定的字符）。重新排列就是说两个字符串拥有相同的字母元素和个数。

Use `String.toLowerCase()`, `String.prototype.replace()` with an appropriate regular expression to remove unnecessary characters, `String.prototype.split('')`, `Array.prototype.sort()` and `Array.prototype.join('')` on both strings to normalize them, then check if their normalized forms are equal.

使用`String.toLowerCase()`, `String.prototype.replace()`和合适的正则表达式来删除非必要的字符串。对两个字符串都使用`String.prototype.split('')`, `Array.prototype.sort()`和`Array.prototype.join('')`来标准化它们，然后检测它们的标准化格式是否相等。

```js
const isAnagram = (str1, str2) => {
  const normalize = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, '')
      .split('')
      .sort()
      .join('');
  return normalize(str1) === normalize(str2);
};
```

<details>
<summary>Examples</summary>

```js
isAnagram('iceman', 'cinema'); // true
```

</details>

<br>[⬆ Back to top](#contents)

### isLowerCase

Checks if a string is lower case.

检测一个字符串是否为小写格式。

Convert the given string to lower case, using `String.toLowerCase()` and compare it to the original.

使用`String.toLowerCase()`把给定的字符串转换为小写格式，并把它和原始字符串比较。

```js
const isLowerCase = str => str === str.toLowerCase();
```

<details>
<summary>Examples</summary>

```js
isLowerCase('abc'); // true
isLowerCase('a3@$'); // true
isLowerCase('Ab4'); // false
```

</details>

<br>[⬆ Back to top](#contents)

### isUpperCase

Checks if a string is upper case.

检测一个字符串是否为大写格式。

Convert the given string to upper case, using `String.prototype.toUpperCase()` and compare it to the original.

使用`String.toLowerCase()`把给定的字符串转换为大写格式，并把它和原始字符串比较。

```js
const isUpperCase = str => str === str.toUpperCase();
```

<details>
<summary>Examples</summary>

```js
isUpperCase('ABC'); // true
isLowerCase('A3@$'); // true
isLowerCase('aB4'); // false
```

</details>

<br>[⬆ Back to top](#contents)

### mapString

Creates a new string with the results of calling a provided function on every character in the calling string.

创建一个由给出的字符串中每个字符上都应用给定的函数后产生的结果组成的字符串。

Use `String.prototype.split('')` and `Array.prototype.map()` to call the provided function, `fn`, for each character in `str`.
Use `Array.prototype.join('')` to recombine the array of characters into a string.
The callback function, `fn`, takes three arguments (the current character, the index of the current character and the string `mapString` was called upon).

使用`String.prototype.split('')`和`Array.prototype.map()`来对`str`中的每个字符调用给定的函数`fn`。使用`Array.prototype.join('')`来把产生的字符数组重新组合为字符串。回调函数`fn`接受三个参数（当前字符，当前字符的序号，`mapString`所作用的字符串）。

```js
const mapString = (str, fn) =>
  str
    .split('')
    .map((c, i) => fn(c, i, str))
    .join('');
```

<details>
<summary>Examples</summary>

```js
mapString('lorem ipsum', c => c.toUpperCase()); // 'LOREM IPSUM'
```

</details>

<br>[⬆ Back to top](#contents)

### mask

Replaces all but the last `num` of characters with the specified mask character.

用指定的掩盖字符替换除了最后`num`个字符（只保留最后`num`个，其他字符替换为掩盖字符）。

Use `String.prototype.slice()` to grab the portion of the characters that will remain unmasked and use `String.padStart()` to fill the beginning of the string with the mask character up to the original length.
Omit the second argument, `num`, to keep a default of `4` characters unmasked. If `num` is negative, the unmasked characters will be at the start of the string.
Omit the third argument, `mask`, to use a default character of `'*'` for the mask.

使用`String.prototype.slice()`获取将要保留为不掩盖的字符串部分，并使用`String.padStart()`来用掩盖字符填充字符串的头部，直到填充为原始长度。
如果不传第二个参数`num`，则默认保留`4`个字符不掩盖。如果`num`是负数，不掩盖的字符将会在字符串的头部。如果不传第三个参数`mask`，默认使用`'*'`作为掩盖字符。

```js
const mask = (cc, num = 4, mask = '*') => `${cc}`.slice(-num).padStart(`${cc}`.length, mask);
```

<details>
<summary>Examples</summary>

```js
mask(1234567890); // '******7890'
mask(1234567890, 3); // '*******890'
mask(1234567890, -4, '$'); // '$$$$567890'
```

</details>

<br>[⬆ Back to top](#contents)

### pad

Pads a string on both sides with the specified character, if it's shorter than the specified length.

如果字符串的长度比指定的长度短，则用指定的字符填充它的两端。

Use `String.padStart()` and `String.padEnd()` to pad both sides of the given string.
Omit the third argument, `char`, to use the whitespace character as the default padding character.

使用`String.padStart()`和`String.padEnd()`来用指定字符串填充两端。如果不传第三个参数`char`，使用空白字符作为默认的填充字符。

```js
const pad = (str, length, char = ' ') =>
  str.padStart((str.length + length) / 2, char).padEnd(length, char);
```

<details>
<summary>Examples</summary>

```js
pad('cat', 8); // '  cat   '
pad(String(42), 6, '0'); // '004200'
pad('foobar', 3); // 'foobar'
```

</details>

<br>[⬆ Back to top](#contents)

### palindrome

Returns `true` if the given string is a palindrome, `false` otherwise.

如果给定的字符串是回文的，则返回`true`，否则返回`false`。

Convert the string to `String.prototype.toLowerCase()` and use `String.prototype.replace()` to remove non-alphanumeric characters from it.
Then, use the spread operator (`...`) to split the string into individual characters, `Array.prototype.reverse()`, `String.prototype.join('')` and compare it to the original, unreversed string, after converting it to `String.prototype.toLowerCase()`.

把字符串转换到`String.prototype.toLowerCase()`，并使用`String.prototype.replace()`从其中删除非数字和字母的字符。然后，使用展开操作符(`...`)来把字符串分解成独立的字符，使用`Array.prototype.reverse()`, `String.prototype.join('')`并把它在`String.prototype.toLowerCase()`后和原始的未翻转的字符串比较。

```js
const palindrome = str => {
  const s = str.toLowerCase().replace(/[\W_]/g, '');
  return s === [...s].reverse().join('');
};
```

<details>
<summary>Examples</summary>

```js
palindrome('taco cat'); // true
```

</details>

<br>[⬆ Back to top](#contents)

### pluralize

Returns the singular or plural form of the word based on the input number. If the first argument is an `object`, it will use a closure by returning a function that can auto-pluralize words that don't simply end in `s` if the supplied dictionary contains the word.

根据输入的数字返回单词的单数或者复数形式。如果第一个参数是`object`，他将返回一个可以自动的把单词列表复数化的函数闭包，这个函数根据给出的字典（`object`）来判断并非简单的以`s`结尾的单词，并转化它。

If `num` is either `-1` or `1`, return the singular form of the word. If `num` is any other number, return the plural form. Omit the third argument to use the default of the singular word + `s`, or supply a custom pluralized word when necessary. If the first argument is an `object`, utilize a closure by returning a function which can use the supplied dictionary to resolve the correct plural form of the word.

如果`num`是`1`或`-1`，返回单词的单数形式。如果`num`是其他任何数，返回复数形式。如果不传第三个参数，则使用单数单词+`s`，或者当必要时提供一个自定义的复数形式。如果第一个参数是`object`，返回一个使用提供的字典来解析单词的正确复数形式的函数闭包。

```js
const pluralize = (val, word, plural = word + 's') => {
  const _pluralize = (num, word, plural = word + 's') =>
    [1, -1].includes(Number(num)) ? word : plural;
  if (typeof val === 'object') return (num, word) => _pluralize(num, word, val[word]);
  return _pluralize(val, word, plural);
};
```

<details>
<summary>Examples</summary>

```js
pluralize(0, 'apple'); // 'apples'
pluralize(1, 'apple'); // 'apple'
pluralize(2, 'apple'); // 'apples'
pluralize(2, 'person', 'people'); // 'people'

const PLURALS = {
  person: 'people',
  radius: 'radii'
};
const autoPluralize = pluralize(PLURALS);
autoPluralize(2, 'person'); // 'people'
```

</details>

<br>[⬆ Back to top](#contents)

### removeNonASCII

Removes non-printable ASCII characters.

删除非打印ASCII字符。

Use a regular expression to remove non-printable ASCII characters.

使用一个正则表达式来删除非打印ASCII字符。

```js
const removeNonASCII = str => str.replace(/[^\x20-\x7E]/g, '');
```

<details>
<summary>Examples</summary>

```js
removeNonASCII('äÄçÇéÉêlorem-ipsumöÖÐþúÚ'); // 'lorem-ipsum'
```

</details>

<br>[⬆ Back to top](#contents)

### reverseString

Reverses a string.

翻转一个字符串。

Use the spread operator (`...`) and `Array.prototype.reverse()` to reverse the order of the characters in the string.
Combine characters to get a string using `String.prototype.join('')`.

使用展开操作符(`...`)和`Array.prototype.reverse()`来翻转字符串中字符的顺序。使用`String.prototype.join('')`来结合这些字符来获得一个字符串。

```js
const reverseString = str => [...str].reverse().join('');
```

<details>
<summary>Examples</summary>

```js
reverseString('foobar'); // 'raboof'
```

</details>

<br>[⬆ Back to top](#contents)

### sortCharactersInString

Alphabetically sorts the characters in a string.

按字母序排序一个字符串中的字符。

Use the spread operator (`...`), `Array.prototype.sort()` and  `String.localeCompare()` to sort the characters in `str`, recombine using `String.prototype.join('')`.

使用展开操作符(`...`), `Array.prototype.sort()`和`String.localeCompare()`来排序`str`的字符，使用`String.prototype.join('')`重新结合它们。

```js
const sortCharactersInString = str => [...str].sort((a, b) => a.localeCompare(b)).join('');
```

<details>
<summary>Examples</summary>

```js
sortCharactersInString('cabbage'); // 'aabbceg'
```

</details>

<br>[⬆ Back to top](#contents)

### splitLines

Splits a multiline string into an array of lines.

把多行字符拆分成行的数组。

Use `String.prototype.split()` and a regular expression to match line breaks and create an array.

使用`String.prototype.split()`和一个匹配换行的正则表达式来并创建一个数组。

```js
const splitLines = str => str.split(/\r?\n/);
```

<details>
<summary>Examples</summary>

```js
splitLines('This\nis a\nmultiline\nstring.\n'); // ['This', 'is a', 'multiline', 'string.' , '']
```

</details>

<br>[⬆ Back to top](#contents)

### stringPermutations ![advanced](/advanced.svg)

⚠️ **WARNING**: This function's execution time increases exponentially with each character. Anything more than 8 to 10 characters will cause your browser to hang as it tries to solve all the different combinations.

⚠️ **WARNING**: 这个函数的执行时间随每个字符指数级增长。每个超过8到10个字符的字符串将因为尝试所有不同的组合而导致你的浏览器挂起（无响应）。

Generates all permutations of a string (contains duplicates).

生成一个字符串的所有排列（包括重复的）。

Use recursion.
For each letter in the given string, create all the partial permutations for the rest of its letters.
Use `Array.prototype.map()` to combine the letter with each partial permutation, then `Array.prototype.reduce()` to combine all permutations in one array.
Base cases are for string `length` equal to `2` or `1`.

使用递归。对给定字符串中的每个字母，创建剩余字母的所有的部分全排列。使用`Array.prototype.map()`来把这个字母和每个部分全排列组装起来，然后使用`Array.prototype.reduce()`把所有排列组装到一个数组中。基本的场景是字符串`length`等于`2`或`1`。

```js
const stringPermutations = str => {
  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
  return str
    .split('')
    .reduce(
      (acc, letter, i) =>
        acc.concat(stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)),
      []
    );
};
```

<details>
<summary>Examples</summary>

```js
stringPermutations('abc'); // ['abc','acb','bac','bca','cab','cba']
```

</details>

<br>[⬆ Back to top](#contents)

### stripHTMLTags

Removes HTML/XML tags from string.

删除字符串中的HTML/XML标签。

Use a regular expression to remove HTML/XML tags from a string.

使用正则表达式来删除一个字符串中的HTML/XML标签。

```js
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');
```

<details>
<summary>Examples</summary>

```js
stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'); // 'lorem ipsum'
```

</details>

<br>[⬆ Back to top](#contents)

### toCamelCase

Converts a string to camelcase.

把字符串转换为驼峰形式。

Break the string into words and combine them capitalizing the first letter of each word, using a regexp.

使用正则表达式把字符串拆分为单词列表，并在大写化每个词的首字母后合并它们。

```js
const toCamelCase = str => {
  let s =
    str &&
    str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
      .join('');
  return s.slice(0, 1).toLowerCase() + s.slice(1);
};
```

<details>
<summary>Examples</summary>

```js
toCamelCase('some_database_field_name'); // 'someDatabaseFieldName'
toCamelCase('Some label that needs to be camelized'); // 'someLabelThatNeedsToBeCamelized'
toCamelCase('some-javascript-property'); // 'someJavascriptProperty'
toCamelCase('some-mixed_string with spaces_underscores-and-hyphens'); // 'someMixedStringWithSpacesUnderscoresAndHyphens'
```

</details>

<br>[⬆ Back to top](#contents)

### toKebabCase

Converts a string to kebab case.

把字符串转换为中划线形式。

Break the string into words and combine them adding `-` as a separator, using a regexp.

使用正则表达式把字符串拆分为单词列表，并在添加`-`作为分隔符后合并它们。

```js
const toKebabCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-');
```

<details>
<summary>Examples</summary>

```js
toKebabCase('camelCase'); // 'camel-case'
toKebabCase('some text'); // 'some-text'
toKebabCase('some-mixed_string With spaces_underscores-and-hyphens'); // 'some-mixed-string-with-spaces-underscores-and-hyphens'
toKebabCase('AllThe-small Things'); // "all-the-small-things"
toKebabCase('IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML'); // "i-am-listening-to-fm-while-loading-different-url-on-my-browser-and-also-editing-xml-and-html"
```

</details>

<br>[⬆ Back to top](#contents)

### toSnakeCase

Converts a string to snake case.

把字符串转换为下划线形式。

Break the string into words and combine them adding `_` as a separator, using a regexp.

使用正则表达式把字符串拆分为单词列表，并在添加`_`作为分隔符后合并它们。

```js
const toSnakeCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_');
```

<details>
<summary>Examples</summary>

```js
toSnakeCase('camelCase'); // 'camel_case'
toSnakeCase('some text'); // 'some_text'
toSnakeCase('some-mixed_string With spaces_underscores-and-hyphens'); // 'some_mixed_string_with_spaces_underscores_and_hyphens'
toSnakeCase('AllThe-small Things'); // "all_the_smal_things"
toSnakeCase('IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML'); // "i_am_listening_to_fm_while_loading_different_url_on_my_browser_and_also_editing_some_xml_and_html"
```

</details>

<br>[⬆ Back to top](#contents)

### toTitleCase

Converts a string to title case.

把字符串转换为标题形式（首字母大写，用空格做分隔）。

Break the string into words, using a regexp, and combine them capitalizing the first letter of each word and adding a whitespace between them.

使用正则表达式把字符串拆分为单词列表，并在大写化每个词的首字母和添加一个空格作为分隔符后合并它们。

```js
const toTitleCase = str =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.charAt(0).toUpperCase() + x.slice(1))
    .join(' ');
```

<details>
<summary>Examples</summary>

```js
toTitleCase('some_database_field_name'); // 'Some Database Field Name'
toTitleCase('Some label that needs to be title-cased'); // 'Some Label That Needs To Be Title Cased'
toTitleCase('some-package-name'); // 'Some Package Name'
toTitleCase('some-mixed_string with spaces_underscores-and-hyphens'); // 'Some Mixed String With Spaces Underscores And Hyphens'
```

</details>

<br>[⬆ Back to top](#contents)

### truncateString

Truncates a string up to a specified length.

把字符串截断到最多指定的长度。

Determine if the string's `length` is greater than `num`.
Return the string truncated to the desired length, with `'...'` appended to the end or the original string.

判断字符串的`length`是否大于`num`。返回一个按指定长度截断并加上`'...'`后缀的字符串，或者原始的字符串。

```js
const truncateString = (str, num) =>
  str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str;
```

<details>
<summary>Examples</summary>

```js
truncateString('boomerang', 7); // 'boom...'
```

</details>

<br>[⬆ Back to top](#contents)

### unescapeHTML

Unescapes escaped HTML characters.

解析转义后的HTML字符列表。

Use `String.prototype.replace()` with a regex that matches the characters that need to be unescaped, using a callback function to replace each escaped character instance with its associated unescaped character using a dictionary (object).

使用`String.prototype.replace()`和匹配需要解析的字符的正则表达式，使用一个回调函数来用相应的解析后的字符替换每个转义后的字符实例，解析规则通过一个字典指定（object）。

```js
const unescapeHTML = str =>
  str.replace(
    /&amp;|&lt;|&gt;|&#39;|&quot;/g,
    tag =>
      ({
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&#39;': "'",
        '&quot;': '"'
      }[tag] || tag)
  );
```

<details>
<summary>Examples</summary>

```js
unescapeHTML('&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;'); // '<a href="#">Me & you</a>'
```

</details>

<br>[⬆ Back to top](#contents)

### URLJoin ![advanced](/advanced.svg)

Joins all given URL segments together, then normalizes the resulting URL.

把所有给出的URL片段连结起来，然后把结果URL标准化。

Use `String.prototype.join('/')` to combine URL segments, then a series of `String.prototype.replace()` calls with various regexps to normalize the resulting URL (remove double slashes, add proper slashes for protocol, remove slashes before parameters, combine parameters with `'&'` and normalize first parameter delimiter).

使用`String.prototype.join('/')`来连结URL片段，然后用一系列传入正则表达式调用的`String.prototype.replace()`来标准化结果URL（删除连续的双斜线，为协议添加合适的可选符号`|`，删除参数前面的可选符号`|`，用`&`连结参数列表，然后标准化第一个参数分隔符）。

```js
const URLJoin = (...args) =>
  args
    .join('/')
    .replace(/[\/]+/g, '/')
    .replace(/^(.+):\//, '$1://')
    .replace(/^file:/, 'file:/')
    .replace(/\/(\?|&|#[^!])/g, '$1')
    .replace(/\?/g, '&')
    .replace('&', '?');
```

<details>
<summary>Examples</summary>

```js
URLJoin('http://www.google.com', 'a', '/b/cd', '?foo=123', '?bar=foo'); // 'http://www.google.com/a/b/cd?foo=123&bar=foo'
```

</details>

<br>[⬆ Back to top](#contents)

### words

Converts a given string into an array of words.

把给出的字符串转换为一个单词列表。

Use `String.prototype.split()` with a supplied pattern (defaults to non-alpha as a regexp) to convert to an array of strings. Use `Array.prototype.filter()` to remove any empty strings.
Omit the second argument to use the default regexp.

使用`String.prototype.split()`和给出的标识（默认是一个非字母正则表达式）来转换一个字符串数组。使用`Array.prototype.filter()`删除掉所有的空字符串。如果不传第二个参数，则使用默认的正则表达式。

```js
const words = (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern).filter(Boolean);
```

<details>
<summary>Examples</summary>

```js
words('I love javaScript!!'); // ["I", "love", "javaScript"]
words('python, javaScript & coffee'); // ["python", "javaScript", "coffee"]
```

</details>

<br>[⬆ Back to top](#contents)


---

## 📃 Type

### getType

Returns the native type of a value.

返回值的原生类型。

Returns lowercased constructor name of value, `"undefined"` or `"null"` if value is `undefined` or `null`.

返回值的小写形式的构造器名称，如果值是`undefined`或`null`则返回`"undefined"`或`"null"`。

```js
const getType = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
```

<details>
<summary>Examples</summary>

```js
getType(new Set([1, 2, 3])); // 'set'
```

</details>

<br>[⬆ Back to top](#contents)

### is

Checks if the provided value is of the specified type.

检查提供的值是不是特定的类型。

Ensure the value is not `undefined` or `null` using `Array.prototype.includes()`, and compare the `constructor` property on the value with `type` to check if the provided value is of the specified `type`.

使用`Array.prototype.includes()`确保这个值不是`undefined`或者`null`，然后比较值的`constructor`属性和`type`来检查提供的值是不是特定的类型。

```js
const is = (type, val) => ![, null].includes(val) && val.constructor === type;
```

<details>
<summary>Examples</summary>

```js
is(Array, [1]); // true
is(ArrayBuffer, new ArrayBuffer()); // true
is(Map, new Map()); // true
is(RegExp, /./g); // true
is(Set, new Set()); // true
is(WeakMap, new WeakMap()); // true
is(WeakSet, new WeakSet()); // true
is(String, ''); // true
is(String, new String('')); // true
is(Number, 1); // true
is(Number, new Number(1)); // true
is(Boolean, true); // true
is(Boolean, new Boolean(true)); // true
```

</details>

<br>[⬆ Back to top](#contents)

### isArrayLike

Checks if the provided argument is array-like (i.e. is iterable).

检查给定的参数是否是类数组类型（例如iterable）。

Check if the provided argument is not `null` and that its `Symbol.iterator` property is a function.

检查给定的参数是否不是`null`，并且它的`Symbol.iterator`属性是一个函数。

```js
const isArrayLike = obj => obj != null && typeof obj[Symbol.iterator] === 'function';
```

<details>
<summary>Examples</summary>

```js
isArrayLike(document.querySelectorAll('.className')); // true
isArrayLike('abc'); // true
isArrayLike(null); // false
```

</details>

<br>[⬆ Back to top](#contents)

### isBoolean

Checks if the given argument is a native boolean element.

检查给出的参数是否是一个原生boolean元素。

Use `typeof` to check if a value is classified as a boolean primitive.

使用`typeof`来检查一个值是否被分类为一个boolean原生类型。

```js
const isBoolean = val => typeof val === 'boolean';
```

<details>
<summary>Examples</summary>

```js
isBoolean(null); // false
isBoolean(false); // true
```

</details>

<br>[⬆ Back to top](#contents)

### isEmpty

Returns true if the a value is an empty object, collection, has no enumerable properties or is any type that is not considered a collection.

如果一个值是一个空对象、集合、映射或者非重复集合，或者没有可枚举属性，或者是任何一种不被当做集合的类型，则返回真。

Check if the provided value is `null` or if its `length` is equal to `0`.

检查给出的值是否是`null`或者是否它的`length`属性等于`0`。

```js
const isEmpty = val => val == null || !(Object.keys(val) || val).length;
```

<details>
<summary>Examples</summary>

```js
isEmpty([]); // true
isEmpty({}); // true
isEmpty(''); // true
isEmpty([1, 2]); // false
isEmpty({ a: 1, b: 2 }); // false
isEmpty('text'); // false
isEmpty(123); // true - type is not considered a collection
isEmpty(true); // true - type is not considered a collection
```

</details>

<br>[⬆ Back to top](#contents)

### isFunction

Checks if the given argument is a function.

检查给出的参数是否是一个函数。

Use `typeof` to check if a value is classified as a function primitive.

使用`typeof`来检查一个值是否被分类为一个原生的函数类型。

```js
const isFunction = val => typeof val === 'function';
```

<details>
<summary>Examples</summary>

```js
isFunction('x'); // false
isFunction(x => x); // true
```

</details>

<br>[⬆ Back to top](#contents)

### isNil

Returns `true` if the specified value is `null` or `undefined`, `false` otherwise.

如果指定的值是`null`或者`undefined`则返回`true`，否则返回`false`。

Use the strict equality operator to check if the value and of `val` are equal to `null` or `undefined`.

使用严格相等操作符来检查`val`的值是否等于`null`或者`undefined`。

```js
const isNil = val => val === undefined || val === null;
```

<details>
<summary>Examples</summary>

```js
isNil(null); // true
isNil(undefined); // true
```

</details>

<br>[⬆ Back to top](#contents)

### isNull

Returns `true` if the specified value is `null`, `false` otherwise.

如果指定的值是`null`则返回`true`，否则返回`false`。

Use the strict equality operator to check if the value and of `val` are equal to `null`.

使用严格相等操作符来检查`val`的值是否等于`null`。

```js
const isNull = val => val === null;
```

<details>
<summary>Examples</summary>

```js
isNull(null); // true
```

</details>

<br>[⬆ Back to top](#contents)

### isNumber

Checks if the given argument is a number.

检查给出的参数是否是一个数字。

Use `typeof` to check if a value is classified as a number primitive. 
To safeguard against `NaN`, check if `val === val` (as `NaN` has a `typeof` equal to `number` and is the only value not equal to itself).

使用`typeof`来检查一个值是否被分类为一个原生数字类型。为了确保关于`NaN`的类型安全，检查`val === val`（因为`NaN`的`typeof`也是`number`，但它的值不等于它本身）（检查`NaN`的常见方法）

```js
const isNumber = val => typeof val === 'number' && val === val;
```

<details>
<summary>Examples</summary>

```js
isNumber(1); // true
isNumber('1'); // false
isNumber(NaN); // false
```

</details>

<br>[⬆ Back to top](#contents)

### isObject

Returns a boolean determining if the passed value is an object or not.

返回一个布尔判定，判定传入的值是一个对象或者不是。

Uses the  `Object` constructor to create an object wrapper for the given value. 
If the value is `null` or `undefined`, create and return an empty object. Οtherwise, return an object of a type that corresponds to the given value.

使用`Object`构造函数来创建一个给出值的对象包裹。如果这个值是`null`或`undefined`，创建并返回一个空对象。否则返回一个与给出值相应类型的对象。

```js
const isObject = obj => obj === Object(obj);
```

<details>
<summary>Examples</summary>

```js
isObject([1, 2, 3, 4]); // true
isObject([]); // true
isObject(['Hello!']); // true
isObject({ a: 1 }); // true
isObject({}); // true
isObject(true); // false
```

</details>

<br>[⬆ Back to top](#contents)

### isObjectLike

Checks if a value is object-like.

检查一个值是否是对象类似类型。

Check if the provided value is not `null` and its `typeof` is equal to `'object'`.

检查给出的值是否不是`null`，它的`typeof`是否等于`'object'`。

```js
const isObjectLike = val => val !== null && typeof val === 'object';
```

<details>
<summary>Examples</summary>

```js
isObjectLike({}); // true
isObjectLike([1, 2, 3]); // true
isObjectLike(x => x); // false
isObjectLike(null); // false
```

</details>

<br>[⬆ Back to top](#contents)

### isPlainObject

Checks if the provided value is an object created by the Object constructor.

检查给出的值是否是一个对象构造器创建的对象。

Check if the provided value is truthy, use `typeof` to check if it is an object and `Object.constructor` to make sure the constructor is equal to `Object`.

检查给出的值是否为真值，使用`typeof`来检查它是否是一个对象，使用`Object.constructor`来确保它的构造器等于`Object`。

```js
const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;
```

<details>
<summary>Examples</summary>

```js
isPlainObject({ a: 1 }); // true
isPlainObject(new Map()); // false
```

</details>

<br>[⬆ Back to top](#contents)

### isPrimitive

Returns a boolean determining if the passed value is primitive or not.

返回一个布尔判定， 它判定传入的值是否是原始的类型。

Create an object from `val` and compare it with `val` to determine if the passed value is primitive (i.e. not equal to the created object).

从`val`创建一个对象，把它和`val`本身比较来判定传入的值是否是原始的类型（例如：不等于创建的对象）。

```js
const isPrimitive = val => Object(val) !== val;
```

<details>
<summary>Examples</summary>

```js
isPrimitive(null); // true
isPrimitive(50); // true
isPrimitive('Hello!'); // true
isPrimitive(false); // true
isPrimitive(Symbol()); // true
isPrimitive([]); // false
```

</details>

<br>[⬆ Back to top](#contents)

### isPromiseLike

Returns `true` if an object looks like a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), `false` otherwise.

如果一个对象类似一个[`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)则返回`true`，否则返回`false`。

Check if the object is not `null`, its `typeof` matches either `object` or `function` and if it has a `.then` property, which is also a `function`.

检查这个对象是否不是`null`，它的`typeof`是否匹配`object`或者`function`，并且是否有一个`function`类型的`.then`属性。

```js
const isPromiseLike = obj =>
  obj !== null &&
  (typeof obj === 'object' || typeof obj === 'function') &&
  typeof obj.then === 'function';
```

<details>
<summary>Examples</summary>

```js
isPromiseLike({
  then: function() {
    return '';
  }
}); // true
isPromiseLike(null); // false
isPromiseLike({}); // false
```

</details>

<br>[⬆ Back to top](#contents)

### isString

Checks if the given argument is a string. Only works for string primitives.

检查给出的参数是否是一个字符串，只对原始的字符串类型生效。

Use `typeof` to check if a value is classified as a string primitive.

使用`typeof`来检查一个值是否被分类为一个原始的字符串类型。

```js
const isString = val => typeof val === 'string';
```

<details>
<summary>Examples</summary>

```js
isString('10'); // true
```

</details>

<br>[⬆ Back to top](#contents)

### isSymbol

Checks if the given argument is a symbol.

检查给出的值是否是一个symbol类型。

Use `typeof` to check if a value is classified as a symbol primitive.

使用`typeof`来检查一个值是否被分类为一个原始的symbol类型。

```js
const isSymbol = val => typeof val === 'symbol';
```

<details>
<summary>Examples</summary>

```js
isSymbol(Symbol('x')); // true
```

</details>

<br>[⬆ Back to top](#contents)

### isUndefined

Returns `true` if the specified value is `undefined`, `false` otherwise.

如果指定的值是`undefined`则返回`true`，否则返回`false`。

Use the strict equality operator to check if the value and of `val` are equal to `undefined`.

使用严格相等操作符来检查`val`的值是否等于`undefined`。

```js
const isUndefined = val => val === undefined;
```

<details>
<summary>Examples</summary>

```js
isUndefined(undefined); // true
```

</details>

<br>[⬆ Back to top](#contents)

### isValidJSON

Checks if the provided string is a valid JSON.

检查给出的字符串是否是一个合法的JSON。

Use `JSON.parse()` and a `try... catch` block to check if the provided string is a valid JSON.

使用`JSON.parse()`和一个`try... catch`代码块来检查给出的字符串是否是一个合法的JSON。

```js
const isValidJSON = str => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};
```

<details>
<summary>Examples</summary>

```js
isValidJSON('{"name":"Adam","age":20}'); // true
isValidJSON('{"name":"Adam",age:"20"}'); // false
isValidJSON(null); // true
```

</details>

<br>[⬆ Back to top](#contents)


---

## 🔧 Utility

### castArray

Casts the provided value as an array if it's not one.

如果给出的值不是一个数组，则把它放到一个数组中。（统一化的返回一个数组）

Use `Array.prototype.isArray()` to determine if `val` is an array and return it as-is or encapsulated in an array accordingly.

使用`Array.prototype.isArray()`来判定`val`是否是一个数组，并根据情况返回它本身或者包裹在一个数组中后的结果。

```js
const castArray = val => (Array.isArray(val) ? val : [val]);
```

<details>
<summary>Examples</summary>

```js
castArray('foo'); // ['foo']
castArray([1]); // [1]
```

</details>

<br>[⬆ Back to top](#contents)

### cloneRegExp

Clones a regular expression.

复制一个正则表达式。

Use `new RegExp()`, `RegExp.source` and `RegExp.flags` to clone the given regular expression.

使用`new RegExp()`, `RegExp.source`和`RegExp.flags`来复制给出的正则表达式。

```js
const cloneRegExp = regExp => new RegExp(regExp.source, regExp.flags);
```

<details>
<summary>Examples</summary>

```js
const regExp = /lorem ipsum/gi;
const regExp2 = cloneRegExp(regExp); // /lorem ipsum/gi
```

</details>

<br>[⬆ Back to top](#contents)

### coalesce

Returns the first non-null/undefined argument.

返回第一个不是null/undefined的参数。

Use `Array.prototype.find()` to return the first non `null`/`undefined` argument.

使用`Array.prototype.find()`来返回第一个非`null`/`undefined`参数。

```js
const coalesce = (...args) => args.find(_ => ![undefined, null].includes(_));
```

<details>
<summary>Examples</summary>

```js
coalesce(null, undefined, '', NaN, 'Waldo'); // ""
```

</details>

<br>[⬆ Back to top](#contents)

### coalesceFactory

Returns a customized coalesce function that returns the first argument that returns `true` from the provided argument validation function.

返回一个自定义联合函数，它从返回参数中第一个被验证函数`valid`返回`true`的参数。

Use `Array.prototype.find()` to return the first argument that returns `true` from the provided argument validation function.

使用`Array.prototype.find()`来从给出的验证函数参数中返回第一个返回`true`的参数。

```js
const coalesceFactory = valid => (...args) => args.find(valid); // 建立了一个找到第一符合条件元素的通用方法
```

<details>
<summary>Examples</summary>

```js
const customCoalesce = coalesceFactory(_ => ![null, undefined, '', NaN].includes(_));
customCoalesce(undefined, null, NaN, '', 'Waldo'); // "Waldo"
```

</details>

<br>[⬆ Back to top](#contents)

### extendHex

Extends a 3-digit color code to a 6-digit color code.

把3位的颜色码扩充到6位颜色码。

Use `Array.prototype.map()`, `String.prototype.split()` and `Array.prototype.join()` to join the mapped array for converting a 3-digit RGB notated hexadecimal color-code to the 6-digit form.
`Array.prototype.slice()` is used to remove `#` from string start since it's added once.

使用`Array.prototype.map()`, `String.prototype.split()`和`Array.prototype.join()`来把映射的数组连结起来，用来把3位的RGB形式的十六进制颜色码转为6位格式。

```js
const extendHex = shortHex =>
  '#' +
  shortHex
    .slice(shortHex.startsWith('#') ? 1 : 0)
    .split('')
    .map(x => x + x)
    .join('');
```

<details>
<summary>Examples</summary>

```js
extendHex('#03f'); // '#0033ff'
extendHex('05a'); // '#0055aa'
```

</details>

<br>[⬆ Back to top](#contents)

### getURLParameters

Returns an object containing the parameters of the current URL.

返回一个包含当前URL的参数的对象。

Use `String.match()` with an appropriate regular expression to get all key-value pairs, `Array.prototype.reduce()` to map and combine them into a single object.
Pass `location.search` as the argument to apply to the current `url`.

使用`String.match()`和一个合适的正则表达式来获取所有键值对，使用`Array.prototype.reduce()`来映射并把它们组合成一个单一对象。把`location.search`作为参数传入以应用到当前的`url`参数。

```js
const getURLParameters = url =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
    {}
  );
```

<details>
<summary>Examples</summary>

```js
getURLParameters('http://url.com/page?name=Adam&surname=Smith'); // {name: 'Adam', surname: 'Smith'}
getURLParameters('google.com'); // {}
```

</details>

<br>[⬆ Back to top](#contents)

### hexToRGB ![advanced](/advanced.svg)

Converts a color code to a `rgb()` or `rgba()` string if alpha value is provided.

则把一个颜色码转换为一个`rgb()`字符串，或者提供了alpha值时转换为`rgba()`字符串。

Use bitwise right-shift operator and mask bits with `&` (and) operator to convert a hexadecimal color code (with or without prefixed with `#`) to a string with the RGB values. If it's 3-digit color code, first convert to 6-digit version. If an alpha value is provided alongside 6-digit hex, give `rgba()` string in return.

使用向右位移操作符和掩码位还有`&`(相与)操作符来把十六进制的颜色码（有没有前缀的`#`都可以）转换为一个RGB值字符串。如果它是一个3位的颜色码，先转换为6位版本。如果随着6位十六进制提供了一个alpha值，则返回`rgba()`字符串。

```js
const hexToRGB = hex => {
  let alpha = false,
    h = hex.slice(hex.startsWith('#') ? 1 : 0);
  if (h.length === 3) h = [...h].map(x => x + x).join('');
  else if (h.length === 8) alpha = true;
  h = parseInt(h, 16);
  return (
    'rgb' +
    (alpha ? 'a' : '') +
    '(' +
    (h >>> (alpha ? 24 : 16)) +
    ', ' +
    ((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)) +
    ', ' +
    ((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0)) +
    (alpha ? `, ${h & 0x000000ff}` : '') +
    ')'
  );
};
```

<details>
<summary>Examples</summary>

```js
hexToRGB('#27ae60ff'); // 'rgba(39, 174, 96, 255)'
hexToRGB('27ae60'); // 'rgb(39, 174, 96)'
hexToRGB('#fff'); // 'rgb(255, 255, 255)'
```

</details>

<br>[⬆ Back to top](#contents)

### httpGet

Makes a `GET` request to the passed URL.

创建一个到传入URL的`GET`请求。

Use [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest) web api to make a `get` request to the given `url`.
Handle the `onload` event, by calling the given `callback` the `responseText`.
Handle the `onerror` event, by running the provided `err` function.
Omit the third argument, `err`, to log errors to the console's `error` stream by default.

使用[`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)网络api来创建一个给出`url`的`get`请求。通过对`responseText`调用给出的`callback`来处理`onload`事件，通过执行提供的`err`函数来处理`onerror`事件。如果不传第三个参数`err`，则把错误打印到默认的控制台`error`流中。

```js
const httpGet = (url, callback, err = console.error) => {
  const request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.onload = () => callback(request.responseText);
  request.onerror = () => err(request);
  request.send();
};
```

<details>
<summary>Examples</summary>

```js
httpGet(
  'https://jsonplaceholder.typicode.com/posts/1',
  console.log
); /*
Logs: {
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
*/
```

</details>

<br>[⬆ Back to top](#contents)

### httpPost

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

<details>
<summary>Examples</summary>

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

</details>

<br>[⬆ Back to top](#contents)

### isBrowser

Determines if the current runtime environment is a browser so that front-end modules can run on the server (Node) without throwing errors.

判定当前的执行环境是否是浏览器，以判断是否前端的模块可以不报错的在server上运行（Node）。

Use `Array.prototype.includes()` on the `typeof` values of both `window` and `document` (globals usually only available in a browser environment unless they were explicitly defined), which will return `true` if one of them is `undefined`.
`typeof` allows globals to be checked for existence without throwing a `ReferenceError`.
If both of them are not `undefined`, then the current environment is assumed to be a browser.

对`window`和`docoment`（通常除了显示定义，只在浏览器中才可用的全局变量）的`typeof`值使用`Array.prototype.includes()`，如果它们中有一个是`undefined`则返回`true`。`typeof`运行在不报`ReferenceError`错误的情况下检查全局变量的存在性。如果它们都不是`undefined`，则当前的环境被当做一个浏览器环境。

```js
const isBrowser = () => ![typeof window, typeof document].includes('undefined');
```

<details>
<summary>Examples</summary>

```js
isBrowser(); // true (browser)
isBrowser(); // false (Node)
```

</details>

<br>[⬆ Back to top](#contents)

### mostPerformant

Returns the index of the function in an array of functions which executed the fastest.

返回一个函数数组中执行的最快的函数的序号。

Use `Array.prototype.map()` to generate an array where each value is the total time taken to execute the function after `iterations` times. Use the difference in `performance.now()` values before and after to get the total time in milliseconds to a high degree of accuracy.
Use `Math.min()` to find the minimum execution time, and return the index of that shortest time which corresponds to the index of the most performant function.
Omit the second argument, `iterations`, to use a default of 10,000 iterations. The more iterations, the more reliable the result but the longer it will take.

使用`Array.prototype.map()`来生成一个元素是每个函数执行`iterations`次后的总时间的数组。使用执行前后的`performance.now()`差值来获取毫秒为单位的总时间，以获取更高精度。使用`Math.min()`来找到最小执行时间，并把相应最高效的函数的序号（即最短的执行时间的序号）返回。如果不传第二个参数`iterations`，则使用默认的10,000次循环。循环次数越多，结果越可靠，但是花费的时间越长。

```js
const mostPerformant = (fns, iterations = 10000) => {
  const times = fns.map(fn => {
    const before = performance.now();
    for (let i = 0; i < iterations; i++) fn();
    return performance.now() - before;
  });
  return times.indexOf(Math.min(...times));
};
```

<details>
<summary>Examples</summary>

```js
mostPerformant([
  () => {
    // Loops through the entire array before returning `false`
    [1, 2, 3, 4, 5, 6, 7, 8, 9, '10'].every(el => typeof el === 'number');
  },
  () => {
    // Only needs to reach index `1` before returning false
    [1, '2', 3, 4, 5, 6, 7, 8, 9, 10].every(el => typeof el === 'number');
  }
]); // 1
```

</details>

<br>[⬆ Back to top](#contents)

### nthArg

Creates a function that gets the argument at index `n`. If `n` is negative, the nth argument from the end is returned.

创建一个获取序号`n`位置上的参数的函数。如果`n`是负数，则返回倒数第n个参数。

Use `Array.prototype.slice()` to get the desired argument at index `n`.

使用`Array.prototype.slice()`来获取序号`n`位置上的所需的参数。

```js
const nthArg = n => (...args) => args.slice(n)[0];
```

<details>
<summary>Examples</summary>

```js
const third = nthArg(2);
third(1, 2, 3); // 3
third(1, 2); // undefined
const last = nthArg(-1);
last(1, 2, 3, 4, 5); // 5
```

</details>

<br>[⬆ Back to top](#contents)

### parseCookie

Parse an HTTP Cookie header string and return an object of all cookie name-value pairs.

解析一个HTTP Cookie头字符串，并返回一个包含所有cookie键值对的对象。

Use `String.prototype.split(';')` to separate key-value pairs from each other.
Use `Array.prototype.map()` and `String.prototype.split('=')` to separate keys from values in each pair.
Use `Array.prototype.reduce()` and `decodeURIComponent()` to create an object with all key-value pairs.

使用`String.prototype.split(';')`来把每个键值对分隔开。使用`Array.prototype.map()`和`String.prototype.split('=')`来从每个对中分隔键和值。使用`Array.prototype.reduce()`和`decodeURIComponent()`来创建一个包含所有键值对的对象。

```js
const parseCookie = str =>
  str
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});
```

<details>
<summary>Examples</summary>

```js
parseCookie('foo=bar; equation=E%3Dmc%5E2'); // { foo: 'bar', equation: 'E=mc^2' }
```

</details>

<br>[⬆ Back to top](#contents)

### prettyBytes ![advanced](/advanced.svg)

Converts a number in bytes to a human-readable string.

把一个字节形式的数字转换为一个人类可读字符串。

Use an array dictionary of units to be accessed based on the exponent.
Use `Number.toPrecision()` to truncate the number to a certain number of digits.
Return the prettified string by building it up, taking into account the supplied options and whether it is negative or not.
Omit the second argument, `precision`, to use a default precision of `3` digits.
Omit the third argument, `addSpace`, to add space between the number and unit by default.

使用一个根据指数来判断单位的字典数组。使用`Number.toPrecision()`来把数字截断为一个特定的位数。根据提供的选项还有它是否为负数来创建一个易读的字符串并返回。如果不传第二个参数`precision`，则使用`3`位精度作为默认值。如果不传第三个参数`addSpace`，则默认在数字和单位中间添加一个空格。

```js
const prettyBytes = (num, precision = 3, addSpace = true) => {
  const UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  if (Math.abs(num) < 1) return num + (addSpace ? ' ' : '') + UNITS[0];
  const exponent = Math.min(Math.floor(Math.log10(num < 0 ? -num : num) / 3), UNITS.length - 1);
  const n = Number(((num < 0 ? -num : num) / 1000 ** exponent).toPrecision(precision));
  return (num < 0 ? '-' : '') + n + (addSpace ? ' ' : '') + UNITS[exponent];
};
```

<details>
<summary>Examples</summary>

```js
prettyBytes(1000); // "1 KB"
prettyBytes(-27145424323.5821, 5); // "-27.145 GB"
prettyBytes(123456789, 3, false); // "123MB"
```

</details>

<br>[⬆ Back to top](#contents)

### randomHexColorCode

Generates a random hexadecimal color code.

生成一个随机的十六进制颜色码。

Use `Math.random` to generate a random 24-bit(6x4bits) hexadecimal number. Use bit shifting and then convert it to an hexadecimal String using `toString(16)`.

使用`Math.random`来生成一个随机的24-bit(6x4bits)十六进制数字。使用位移，然后使用`toString(16)`把它转换为一个十六进制的String。

```js
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};
```

<details>
<summary>Examples</summary>

```js
randomHexColorCode(); // "#e34155"
```

</details>

<br>[⬆ Back to top](#contents)

### RGBToHex

Converts the values of RGB components to a color code.

把一个RGB组合值转换为颜色码。

Convert given RGB parameters to hexadecimal string using bitwise left-shift operator (`<<`) and `toString(16)`, then `String.padStart(6,'0')` to get a 6-digit hexadecimal value.

使用向左位移操作符(`<<`)和`toString(16)`来把RGB参数转换为十六进制字符串，然后使用`String.padStart(6,'0')`来获取一个6位的十六进制值。

```js
const RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');
```

<details>
<summary>Examples</summary>

```js
RGBToHex(255, 165, 1); // 'ffa501'
```

</details>

<br>[⬆ Back to top](#contents)

### serializeCookie

Serialize a cookie name-value pair into a Set-Cookie header string.

把一个cookie键值对序列化为一个Set-Cookie HTTP头字符串。

Use template literals and `encodeURIComponent()` to create the appropriate string.

使用模板字面量和`encodeURIComponent()`来创建一个合适的字符串。

```js
const serializeCookie = (name, val) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;
```

<details>
<summary>Examples</summary>

```js
serializeCookie('foo', 'bar'); // 'foo=bar'
```

</details>

<br>[⬆ Back to top](#contents)

### timeTaken

Measures the time taken by a function to execute.

测量函数执行所花费的时间。

Use `console.time()` and `console.timeEnd()` to measure the difference between the start and end times to determine how long the callback took to execute.

使用`console.time()`和`console.timeEnd()`来测量开始和结束时间的差值来确定函数花费了多少时间来执行。

```js
const timeTaken = callback => {
  console.time('timeTaken');
  const r = callback();
  console.timeEnd('timeTaken');
  return r;
};
```

<details>
<summary>Examples</summary>

```js
timeTaken(() => Math.pow(2, 10)); // 1024, (logged): timeTaken: 0.02099609375ms
```

</details>

<br>[⬆ Back to top](#contents)

### toCurrency

Take a number and return specified currency formatting.

接受一个数字，返回指定的货币化格式。

Use `Intl.NumberFormat` to enable country / currency sensitive formatting.

使用`Intl.NumberFormat`来打开国家/货币（country / currenc）敏感格式。

```js
const toCurrency = (n, curr, LanguageFormat = undefined) =>
  Intl.NumberFormat(LanguageFormat, { style: 'currency', currency: curr }).format(n);
```

<details>
<summary>Examples</summary>

```js
toCurrency(123456.789, 'EUR'); // €123,456.79  | currency: Euro | currencyLangFormat: Local
toCurrency(123456.789, 'USD', 'en-us'); // $123,456.79  | currency: US Dollar | currencyLangFormat: English (United States)
toCurrency(123456.789, 'USD', 'fa'); // ۱۲۳٬۴۵۶٫۷۹ ؜$ | currency: US Dollar | currencyLangFormat: Farsi
toCurrency(322342436423.2435, 'JPY'); // ¥322,342,436,423 | currency: Japanese Yen | currencyLangFormat: Local
toCurrency(322342436423.2435, 'JPY', 'fi'); // 322 342 436 423 ¥ | currency: Japanese Yen | currencyLangFormat: Finnish
```

</details>

<br>[⬆ Back to top](#contents)

### toDecimalMark

Use `toLocaleString()` to convert a float-point arithmetic to the [Decimal mark](https://en.wikipedia.org/wiki/Decimal_mark) form. It makes a comma separated string from a number.

使用`toLocaleString()`来把一个浮点数转换为[Decimal mark](https://en.wikipedia.org/wiki/Decimal_mark)格式。它从数字创建一个用逗号分隔的字符串。

 ```js
const toDecimalMark = num => num.toLocaleString('en-US');
```

<details>
<summary>Examples</summary>

```js
toDecimalMark(12305030388.9087); // "12,305,030,388.909"
```

</details>

<br>[⬆ Back to top](#contents)

### toOrdinalSuffix

Adds an ordinal suffix to a number.

给一个数字添加一个序数后缀。

Use the modulo operator (`%`) to find values of single and tens digits.
Find which ordinal pattern digits match.
If digit is found in teens pattern, use teens ordinal.

使用取模操作符(`%`)来找到个位和十位。找到它匹配哪个序数标识。如果某一位在十位数标志中找到，则使用十位数序数后缀。

```js
const toOrdinalSuffix = num => {
  const int = parseInt(num),
    digits = [int % 10, int % 100],
    ordinals = ['st', 'nd', 'rd', 'th'],
    oPattern = [1, 2, 3, 4],
    tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];
  return oPattern.includes(digits[0]) && !tPattern.includes(digits[1])
    ? int + ordinals[digits[0] - 1]
    : int + ordinals[3];
};
```

<details>
<summary>Examples</summary>

```js
toOrdinalSuffix('123'); // "123rd"
```

</details>

<br>[⬆ Back to top](#contents)

### validateNumber

Returns `true` if the given value is a number, `false` otherwise.

如果给出的值是一个数字则返回`true`，否则返回`false`。

Use `!isNaN()` in combination with `parseFloat()` to check if the argument is a number.
Use `isFinite()` to check if the number is finite.
Use `Number()` to check if the coercion holds.

使用`!isNaN()`和`parseFloat()`来检查这个参数是否是一个数字。使用`isFinite()`来检查这个数字是否是有穷尽的。使用`Number()`来检查是否强制持有（是否为转换后为`Number`？）。

```js
const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;
```

<details>
<summary>Examples</summary>

```js
validateNumber('10'); // true
```

</details>

<br>[⬆ Back to top](#contents)

### yesNo

Returns `true` if the string is `y`/`yes` or `false` if the string is `n`/`no`.

如果一个字符串是`y`/`yes`则返回`true`，或者是`n`/`no`则返回`false`。

Use `RegExp.test()` to check if the string evaluates to `y/yes` or `n/no`.
Omit the second argument, `def` to set the default answer as `no`.

使用`RegExp.test()`来检查这个字符串是否是`y/yes`或者`n/no`。如果不传第二个参数`def`，则把默认的回答设置为`no`。

```js
const yesNo = (val, def = false) =>
  /^(y|yes)$/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def;
```

<details>
<summary>Examples</summary>

```js
yesNo('Y'); // true
yesNo('yes'); // true
yesNo('No'); // false
yesNo('Foo', true); // true
```

</details>

<br>[⬆ Back to top](#contents)


## Collaborators

| [<img src="https://github.com/Chalarangelo.png" width="100px;"/>](https://github.com/Chalarangelo)<br/> [<sub>Angelos Chalaris</sub>](https://github.com/Chalarangelo) | [<img src="https://github.com/flxwu.png" width="100px;"/>](https://github.com/flxwu)<br/> [<sub>Felix Wu</sub>](https://github.com/Pl4gue) | [<img src="https://github.com/fejes713.png" width="100px;"/>](https://github.com/fejes713)<br/> [<sub>Stefan Feješ</sub>](https://github.com/fejes713)  | [<img src="https://github.com/kingdavidmartins.png" width="100px;"/>](https://github.com/kingdavidmartins)<br/> [<sub>King David Martins</sub>](https://github.com/iamsoorena) | [<img src="https://github.com/iamsoorena.png" width="100px;"/>](https://github.com/iamsoorena)<br/> [<sub>Soorena Soleimani</sub>](https://github.com/iamsoorena) |
| --- | --- | --- | --- | --- |
| [<img src="https://github.com/elderhsouza.png" width="100px;"/>](https://github.com/elderhsouza)<br/> [<sub>Elder Henrique Souza</sub>](https://github.com/elderhsouza) | [<img src="https://github.com/skatcat31.png" width="100px;"/>](https://github.com/skatcat31)<br/> [<sub>Robert Mennell</sub>](https://github.com/skatcat31) | [<img src="https://github.com/atomiks.png" width="100px;"/>](https://github.com/atomiks)<br/> [<sub>atomiks</sub>](https://github.com/atomiks)  |


## Credits

*Logos made by [Angelos Chalaris](https://github.com/Chalarangelo) are licensed under the [MIT](https://opensource.org/licenses/MIT) license.*
*This README is built using [markdown-builder](https://github.com/30-seconds/markdown-builder).*

