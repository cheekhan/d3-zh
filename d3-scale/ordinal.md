# Ordinal scales

序数比例尺。

用于定义离散的定义域和值域。例如，将一个图例的集合，映射到颜色的集合；或者确定柱状图中柱子的水平位置。


## scaleOrdinal(*domain*, *range*) {#scaleOrdinal}

[Examples](https://observablehq.com/@d3/d3-scaleordinal) · [Source](https://github.com/d3/d3-scale/blob/main/src/ordinal.js) · 

构建一个序数比例尺，将定义域[*domain*](#ordinal_domain) 映射到值域 [*range*](#ordinal_range).

```js
const color = d3.scaleOrdinal(["a", "b", "c"], ["red", "green", "blue"]);
```
如果任意一个域是空值，则这个函数会返回undefined。


## *ordinal*(*value*) {#_ordinal}

[Examples](https://observablehq.com/@d3/d3-scaleordinal) · [Source](https://github.com/d3/d3-scale/blob/main/src/ordinal.js) · Given a *value* in the input [domain](#ordinal_domain), returns the corresponding value in the output [range](#ordinal_range).

```js
color("a") // "red"
```

If the given *value* is not in the scale’s [domain](#ordinal_domain), returns the [unknown value](#ordinal_unknown); or, if the unknown value is [implicit](#scaleImplicit) (the default), then the *value* is implicitly added to the domain and the next-available value in the range is assigned to *value*, such that this and subsequent invocations of the scale given the same input *value* return the same output value.

## *ordinal*.domain(*domain*) {#ordinal_domain}

[Examples](https://observablehq.com/@d3/d3-scaleordinal) · [Source](https://github.com/d3/d3-scale/blob/main/src/ordinal.js) ·

如果提供了*domain*参数，就为比例尺设置定义域。


```js
const color = d3.scaleOrdinal(["red", "green", "blue"]).domain(["a", "b", "c"]);
color("a"); // "red"
color("b"); // "green"
color("c"); // "blue"
```
定义域中的元素，会和值域的元素按照顺序匹配。定义域的值，按照【原始值-索引】的结构存储在[InternMap](../d3-array/intern.md)中，然后使用索引从值域中检索值。所以，比例尺的值需要能够转为原始值，并且原始值唯一的标识了对应的值域的值。

```js
color.domain() // ["a", "b", "c"]
```
如果不提供*domain*，就获取比例尺的定义域。
当未知值[unknown value](#ordinal_unknown)得输出是隐式值时[implicit](#scaleImplicit)，
定义域是可以不显式声明的。这种情况下，会使用输入的定义域来自动按序映射值域。

```js
const color = d3.scaleOrdinal(["red", "green", "blue"]);
color("b"); // "red"
color("a"); // "green"
color("c"); // "blue"
color.domain(); // inferred ["b", "a", "c"]
```

:::warning CAUTION
An explicit domain is recommended for deterministic behavior; inferring the domain from usage is dependent on ordering.
:::

## *ordinal*.range(*range*) {#ordinal_range}

[Examples](https://observablehq.com/@d3/d3-scaleordinal) · [Source](https://github.com/d3/d3-scale/blob/main/src/ordinal.js) ·

使用给定的*range*来设置值域。

```js
const color = d3.scaleOrdinal().range(["red", "green", "blue"]);
```

值域的元素，按索引和定义域进行匹配。如果值域小于定义域，则值域会重复列表来匹配定义域。

如果不指定*range*参数，就返回该比例尺的值域。

## *ordinal*.unknown(*value*) {#ordinal_unknown}

[Examples](https://observablehq.com/@d3/d3-scaleordinal) · [Source](https://github.com/d3/d3-scale/blob/main/src/ordinal.js) ·

设置比例尺在输入未知输入值时，所返回的值。该方法返回比例尺本身(可以链式调用).

```js
const color = d3.scaleOrdinal(["a", "b", "c"], d3.schemeTableau10).unknown(null);
color("a"); // "#4e79a7"
color("b"); // "#f28e2c"
color("c"); // "#e15759"
color("d"); // null
```
如果为传入*value*参数，就回去当前比例尺的未知值。默认为隐式值[implicit](#scaleImplicit)。
隐式值启用了隐式定义域。参考[*ordinal*.domain](#ordinal_domain)。

## *ordinal*.copy() {#ordinal_copy}

[Examples](https://observablehq.com/@d3/d3-scaleordinal) · [Source](https://github.com/d3/d3-scale/blob/main/src/ordinal.js) · Returns an exact copy of this ordinal scale.

```js
const c1 = d3.scaleOrdinal(["a", "b", "c"], d3.schemeTableau10);
const c2 = c1.copy();
```

Changes to this scale will not affect the returned scale, and vice versa.

## scaleImplicit {#scaleImplicit}

[Examples](https://observablehq.com/@d3/d3-scaleordinal) · [Source](https://github.com/d3/d3-scale/blob/main/src/ordinal.js) 

[*ordinal*.unknown](#ordinal_unknown)方法的特殊值，用来启用隐式定义域：未知值会隐式的添加到定义域中。


```js
const color = d3.scaleOrdinal(["a", "b", "c"], d3.schemeTableau10);
color.unknown(); // d3.scaleImplicit
```

:::warning CAUTION
An explicit domain is recommended for deterministic behavior; inferring the domain from usage is dependent on ordering.
:::
