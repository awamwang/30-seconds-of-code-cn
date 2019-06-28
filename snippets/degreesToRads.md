### degreesToRads

Converts an angle from degrees to radians.

把一个角的角度值转为弧度值。

Use `Math.PI` and the degree to radian formula to convert the angle from degrees to radians.

使用`Math.PI`和角度到弧度的计算公式来把角的角度值转为弧度值。

```js
const degreesToRads = deg => (deg * Math.PI) / 180.0;
```

```js
degreesToRads(90.0); // ~1.5708
```
