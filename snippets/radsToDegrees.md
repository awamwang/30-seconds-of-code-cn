### radsToDegrees

Converts an angle from radians to degrees.

把一个角从弧度转换为弧度。

Use `Math.PI` and the radian to degree formula to convert the angle from radians to degrees.

使用`Math.PI`和弧度到角度公式来把角的弧度转为角度。

```js
const radsToDegrees = rad => (rad * 180.0) / Math.PI;
```

```js
radsToDegrees(Math.PI / 2); // 90
```
