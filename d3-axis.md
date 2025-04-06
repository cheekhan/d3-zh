<script setup>

import * as d3 from "d3";
import {shallowRef, onMounted, onUnmounted} from "vue";
import ExampleAxis from "./components/ExampleAxis.vue";

const domain = shallowRef([0, 100]);
const range = [20, 668];

let timer;

onMounted(() => {
  timer = d3.interval(() => {
    const x = Math.random() * 100;
    const l = Math.random() * 100;
    domain.value = [x, x + l];
  }, 5000);
});

onUnmounted(() => {
  timer?.stop();
});

</script>

# 坐标轴：d3-axis

<ExampleAxis :axis="d3.axisBottom(d3.scaleLinear([0, 100], range))" :y="7" />

<ExampleAxis :axis="d3.axisBottom(d3.scaleLog([1, 1000], range))" :y="7" />

<ExampleAxis :axis="d3.axisBottom(d3.scaleBand([...'ABCDEFGHIJKL'], range)).tickSizeOuter(0)" :y="7" />

<ExampleAxis :axis="d3.axisBottom(d3.scaleUtc([new Date('2011-01-01'), new Date('2013-01-01')], range))" :y="7" />

最标轴，将位置刻度渲染为人类友好的表现形式。坐标轴支持很多刻度表现形式，例如线性刻度、对数刻度、带状刻度、时间刻度等。了解刻度是什么[scales](./d3-scale.md)。

在一个 [selection](./d3-selection.md) 中调用axis，会生成坐标轴。坐标轴默认渲染在原点，可以通过调整过渡属性 [transform attribute](http://www.w3.org/TR/SVG/coords.html#TransformAttribute) 来改变坐标轴相对于图标的位置。

说明：以下两个例子中，x指的就是刻度。

```js
const gx = svg.append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(d3.axisBottom(x));
```

如果刻度发生了变化，需要再次调用坐标轴组件来更新。为了获取平滑的动画效果，需要在[过渡](./d3-transition.md)中调用：

<ExampleAxis :axis="d3.axisBottom(d3.scaleLinear(domain, range))" :y="7" :duration="1500" />

```js
gx.transition()
    .duration(750)
    .call(d3.axisBottom(x));
```

通过坐标轴创建的元素，是一个 `axis` 对象，可以调用API。参考例子[customize the axis appearance](https://observablehq.com/@d3/styled-axes)个性化设置坐标轴元素的样式。
一个轴包含了一个用`"domain"`样式class描述的[path标签](https://www.w3.org/TR/SVG/paths.html#PathElement) ,通过带有 `"tick"` class的[g标签](https://www.w3.org/TR/SVG/struct.html#Groups)显示刻度。每个刻度都有用来画刻度线的[line标签](https://www.w3.org/TR/SVG/shapes.html#LineElement)和显示文字的 [text 标签](https://www.w3.org/TR/SVG/text.html#TextElement) 。看例子：

```html
<g fill="none" font-size="10" font-family="sans-serif" text-anchor="middle">
  <path class="domain" stroke="currentColor" d="M0.5,6V0.5H880.5V6"></path>
  <g class="tick" opacity="1" transform="translate(0.5,0)">
    <line stroke="currentColor" y2="6"></line>
    <text fill="currentColor" y="9" dy="0.71em">0.0</text>
  </g>
  <g class="tick" opacity="1" transform="translate(176.5,0)">
    <line stroke="currentColor" y2="6"></line>
    <text fill="currentColor" y="9" dy="0.71em">0.2</text>
  </g>
  <g class="tick" opacity="1" transform="translate(352.5,0)">
    <line stroke="currentColor" y2="6"></line>
    <text fill="currentColor" y="9" dy="0.71em">0.4</text>
  </g>
  <g class="tick" opacity="1" transform="translate(528.5,0)">
    <line stroke="currentColor" y2="6"></line>
    <text fill="currentColor" y="9" dy="0.71em">0.6</text>
  </g>
  <g class="tick" opacity="1" transform="translate(704.5,0)">
    <line stroke="currentColor" y2="6"></line>
    <text fill="currentColor" y="9" dy="0.71em">0.8</text>
  </g>
  <g class="tick" opacity="1" transform="translate(880.5,0)">
    <line stroke="currentColor" y2="6"></line>
    <text fill="currentColor" y="9" dy="0.71em">1.0</text>
  </g>
</g>
```

The orientation of an axis is fixed; to change the orientation, remove the old axis and create a new axis.

## axisTop(*scale*) {#axisTop}

<ExampleAxis :axis="d3.axisTop(d3.scaleLinear([0, 100], range))" :y="23" />

[Source](https://github.com/d3/d3-axis/blob/main/src/axis.js) · Constructs a new top-oriented axis generator for the given [scale](./d3-scale.md), with empty [tick arguments](#axis_ticks), a [tick size](#axis_tickSize) of 6 and [padding](#axis_tickPadding) of 3. In this orientation, ticks are drawn above the horizontal domain path.

## axisRight(*scale*) {#axisRight}

<ExampleAxis :axis="d3.axisRight(d3.scaleLinear([0, 100], [10, 190]))" :width="60" :height="200" :x="20" />

[Source](https://github.com/d3/d3-axis/blob/main/src/axis.js) · Constructs a new right-oriented axis generator for the given [scale](./d3-scale.md), with empty [tick arguments](#axis_ticks), a [tick size](#axis_tickSize) of 6 and [padding](#axis_tickPadding) of 3. In this orientation, ticks are drawn to the right of the vertical domain path.

## axisBottom(*scale*) {#axisBottom}

<ExampleAxis :axis="d3.axisBottom(d3.scaleLinear([0, 100], range))" :y="7" />

[Source](https://github.com/d3/d3-axis/blob/main/src/axis.js) · Constructs a new bottom-oriented axis generator for the given [scale](./d3-scale.md), with empty [tick arguments](#axis_ticks), a [tick size](#axis_tickSize) of 6 and [padding](#axis_tickPadding) of 3. In this orientation, ticks are drawn below the horizontal domain path.

## axisLeft(*scale*) {#axisLeft}

<ExampleAxis :axis="d3.axisLeft(d3.scaleLinear([0, 100], [10, 190]))" :width="60" :height="200" :x="40" />

[Source](https://github.com/d3/d3-axis/blob/main/src/axis.js) · Constructs a new left-oriented axis generator for the given [scale](./d3-scale.md), with empty [tick arguments](#axis_ticks), a [tick size](#axis_tickSize) of 6 and [padding](#axis_tickPadding) of 3. In this orientation, ticks are drawn to the left of the vertical domain path.

## *axis*(*context*) {#_axis}

[Source](https://github.com/d3/d3-axis/blob/main/src/axis.js) · Render the axis to the given *context*, which may be either a [selection](./d3-selection.md) of SVG containers (either SVG or G elements) or a corresponding [transition](./d3-transition.md).

```js
svg.append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(d3.axisBottom(x));
```

## *axis*.scale(*scale*) {#axis_scale}

[Source](https://github.com/d3/d3-axis/blob/main/src/axis.js) · If *scale* is specified, sets the [scale](./d3-scale.md) and returns the axis. If *scale* is not specified, returns the current scale.

```js
const xAxis = d3.axisBottom().scale(x);
```

## *axis*.ticks(...*arguments*) {#axis_ticks}

Sets the *arguments* that will be passed to [*scale*.ticks](./d3-scale/linear.md#linear_ticks) and [*scale*.tickFormat](./d3-scale/linear.md#linear_tickFormat) when the axis is [rendered](#_axis), and returns the axis generator.

The meaning of the *arguments* depends on the [axis’ scale](#axis_scale) type: most commonly, the arguments are a suggested *count* for the number of ticks (or a [time *interval*](./d3-time.md) for time scales), and an optional [format *specifier*](./d3-format.md) to customize how the tick values are formatted. For example, to generate twenty ticks with SI-prefix formatting on a linear scale, say:

```js
axis.ticks(20, "s");
```

To generate ticks every fifteen minutes with a time scale, say:

```js
axis.ticks(d3.timeMinute.every(15));
```

This method is a convenience function for [*axis*.tickArguments](#axis_tickArguments). For example, this:

```js
axis.ticks(10);
```

Is equivalent to:

```js
axis.tickArguments([10]);
```

This method has no effect if the scale does not implement *scale*.ticks, as with [band](./d3-scale/band.md) and [point](./d3-scale/point.md) scales. To set the tick values explicitly, use [*axis*.tickValues](#axis_tickValues). To set the tick format explicitly, use [*axis*.tickFormat](#axis_tickFormat). To generate tick values directly, use [*scale*.ticks](./d3-scale/linear.md#linear_ticks).

## *axis*.tickArguments(*arguments*) {#axis_tickArguments}

[Source](https://github.com/d3/d3-axis/blob/main/src/axis.js) · If *arguments* is specified, sets the *arguments* that will be passed to [*scale*.ticks](./d3-scale/linear.md#linear_ticks) and [*scale*.tickFormat](./d3-scale/linear.md#linear_tickFormat) when the axis is [rendered](#_axis), and returns the axis generator. See also [*axis*.ticks](#axis_ticks), which is used more commonly.

The meaning of the *arguments* depends on the [axis’ scale](#axis_scale) type: most commonly, the arguments are a suggested *count* for the number of ticks (or a [time *interval*](./d3-time.md) for time scales), and an optional [format *specifier*](./d3-format.md) to customize how the tick values are formatted. For example, to generate twenty ticks with SI-prefix formatting on a linear scale, say:

```js
axis.tickArguments([20, "s"]);
```

To generate ticks every fifteen minutes with a time scale, say:

```js
axis.tickArguments([d3.timeMinute.every(15)]);
```

If *arguments* is not specified, returns the current tick arguments, which defaults to the empty array. If *arguments* is specified, this method has no effect if the scale does not implement *scale*.ticks, as with [band](./d3-scale/band.md) and [point](./d3-scale/point.md) scales. To set the tick values explicitly, use [*axis*.tickValues](#axis_tickValues). To set the tick format explicitly, use [*axis*.tickFormat](#axis_tickFormat).

## *axis*.tickValues(*values*) {#axis_tickValues}

[Source](https://github.com/d3/d3-axis/blob/main/src/axis.js) · If a *values* iterable is specified, the specified values are used for ticks rather than the scale’s automatic tick generator. For example, to generate ticks at specific values:

```js
const axis = d3.axisBottom(x).tickValues([1, 2, 3, 5, 8, 13, 21]);
```

The explicit tick values take precedence over the tick arguments set by [*axis*.tickArguments](#axis_tickArguments). However, any tick arguments will still be passed to the scale’s [tickFormat](#axis_tickFormat) function if a tick format is not also set.

If *values* is null, clears any previously-set explicit tick values and reverts back to the scale’s tick generator. If *values* is not specified, returns the current tick values, which defaults to null.

## *axis*.tickFormat(*format*) {#axis_tickFormat}

[Source](https://github.com/d3/d3-axis/blob/main/src/axis.js) · If *format* is specified, sets the tick format function and returns the axis. For example, to display integers with comma-grouping for thousands:

```js
axis.tickFormat(d3.format(",.0f"));
```

More commonly, a format specifier is passed to [*axis*.ticks](#axis_ticks), which has the advantage of setting the format precision automatically based on the tick interval:

```js
axis.ticks(10, ",f");
```

See [d3-format](./d3-format.md) and [d3-time-format](/d3-time-format.md) for help creating formatters.

If *format* is not specified, returns the current format function, which defaults to null. A null format indicates that the scale’s default formatter should be used, which is generated by calling [*scale*.tickFormat](./d3-scale/linear.md#linear_tickFormat). In this case, the arguments specified by [*axis*.tickArguments](#axis_tickArguments) are likewise passed to *scale*.tickFormat.

## *axis*.tickSize(*size*) {#axis_tickSize}

[Source](https://github.com/d3/d3-axis/blob/main/src/axis.js) · If *size* is specified, sets the [inner](#axis_tickSizeInner) and [outer](#axis_tickSizeOuter) tick size to the specified value and returns the axis.

```js
const axis = d3.axisBottom(x).tickSize(0);
```

If *size* is not specified, returns the current inner tick size, which defaults to 6.

```js
axis.tickSize() // 0, as specified above
```

## *axis*.tickSizeInner(size) {#axis_tickSizeInner}

[Source](https://github.com/d3/d3-axis/blob/main/src/axis.js) · If *size* is specified, sets the inner tick size to the specified value and returns the axis.

```js
const axis = d3.axisBottom(x).tickSizeInner(0);
```

If *size* is not specified, returns the current inner tick size, which defaults to 6.

```js
axis.tickSizeInner() // 0, as specified above
```

The inner tick size controls the length of the tick lines, offset from the native position of the axis.

## *axis*.tickSizeOuter(size) {#axis_tickSizeOuter}

[Source](https://github.com/d3/d3-axis/blob/main/src/axis.js) · If *size* is specified, sets the outer tick size to the specified value and returns the axis.

```js
const axis = d3.axisBottom(x).tickSizeOuter(0);
```

If *size* is not specified, returns the current outer tick size, which defaults to 6.

```js
axis.tickSizeOuter() // 0, as specified above
```

The outer tick size controls the length of the square ends of the domain path, offset from the native position of the axis. Thus, the “outer ticks” are not actually ticks but part of the domain path, and their position is determined by the associated scale’s domain extent. Thus, outer ticks may overlap with the first or last inner tick. An outer tick size of 0 suppresses the square ends of the domain path, instead producing a straight line.

## *axis*.tickPadding(padding) {#axis_tickPadding}

[Source](https://github.com/d3/d3-axis/blob/main/src/axis.js) · If *padding* is specified, sets the padding to the specified value in pixels and returns the axis.

```js
const axis = d3.axisBottom(x).tickPadding(0);
```

If *padding* is not specified, returns the current padding which defaults to 3 pixels.

```js
axis.tickPadding() // 0, as specified above
```

## *axis*.offset(offset) {#axis_offset}

[Source](https://github.com/d3/d3-axis/blob/main/src/axis.js) · If *offset* is specified, sets the pixel offset to the specified value in pixels and returns the axis.

```js
const axis = d3.axisBottom(x).offset(0);
```

If *offset* is not specified, returns the current pixel offset.

```js
axis.offset() // 0
```

The pixel offset defaults to 0 on devices with a [devicePixelRatio](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio) greater than 1, and 0.5 otherwise. This default pixel offset ensures crisp edges on low-resolution devices.
