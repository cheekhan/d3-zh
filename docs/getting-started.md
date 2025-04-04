<script setup>

import ExampleBlankChart from "./components/ExampleBlankChart.vue";

</script>

# 准备开始

D3 可以在任意的JavaScript环境运行。

## 在线尝试D3

开始学习D3最快的途径是通过[Observable](https://observablehq.com)! `Observable` 对D3支持很好。D3可以通过一个数据单元，来创建DOM元素。下面例子就是创建一个空的表格:

<ExampleBlankChart />

```js
{
  // Declare the chart dimensions and margins.
  const width = 640;
  const height = 400;
  const marginTop = 20;
  const marginRight = 20;
  const marginBottom = 30;
  const marginLeft = 40;

  // Declare the x (horizontal position) scale.
  const x = d3.scaleUtc()
      .domain([new Date("2023-01-01"), new Date("2024-01-01")])
      .range([marginLeft, width - marginRight]);

  // Declare the y (vertical position) scale.
  const y = d3.scaleLinear()
      .domain([0, 100])
      .range([height - marginBottom, marginTop]);

  // Create the SVG container.
  const svg = d3.create("svg")
      .attr("width", width)
      .attr("height", height);

  // Add the x-axis.
  svg.append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(d3.axisBottom(x));

  // Add the y-axis.
  svg.append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y));

  // Return the SVG element.
  return svg.node();
}
```

通过在线方式，尝试下面例子吧:

* [Area chart](https://observablehq.com/@d3/area-chart/2?intent=fork)
* [Bar chart](https://observablehq.com/@d3/bar-chart/2?intent=fork)
* [Donut chart](https://observablehq.com/@d3/donut-chart/2?intent=fork)
* [Histogram](https://observablehq.com/@d3/histogram/2?intent=fork)
* [Line chart](https://observablehq.com/@d3/line-chart/2?intent=fork)

点这个连接[D3 gallery](https://observablehq.com/@d3/gallery) 查看更多的例子.

反正 `Observable` 很牛逼，这里有一大段描述，关于它的描述，就不翻译了。


## 纯HTML里用D3

在纯HTML中，可以使用CDN引入d3，也可以下载到本地。D3支持es模式的包，也支持UMD格式的包（会挂载全局变量d3）。

:::code-group
```html [ESM + CDN]
<!DOCTYPE html>
<div id="container"></div>
<script type="module">

import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

// Declare the chart dimensions and margins.
const width = 640;
const height = 400;
const marginTop = 20;
const marginRight = 20;
const marginBottom = 30;
const marginLeft = 40;

// Declare the x (horizontal position) scale.
const x = d3.scaleUtc()
    .domain([new Date("2023-01-01"), new Date("2024-01-01")])
    .range([marginLeft, width - marginRight]);

// Declare the y (vertical position) scale.
const y = d3.scaleLinear()
    .domain([0, 100])
    .range([height - marginBottom, marginTop]);

// Create the SVG container.
const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height);

// Add the x-axis.
svg.append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(d3.axisBottom(x));

// Add the y-axis.
svg.append("g")
    .attr("transform", `translate(${marginLeft},0)`)
    .call(d3.axisLeft(y));

// Append the SVG element.
container.append(svg.node());

</script>
```

```html [UMD + CDN]
<!DOCTYPE html>
<div id="container"></div>
<script src="https://cdn.jsdelivr.net/npm/d3@7"></script>
<script type="module">

// Declare the chart dimensions and margins.
const width = 640;
const height = 400;
const marginTop = 20;
const marginRight = 20;
const marginBottom = 30;
const marginLeft = 40;

// Declare the x (horizontal position) scale.
const x = d3.scaleUtc()
    .domain([new Date("2023-01-01"), new Date("2024-01-01")])
    .range([marginLeft, width - marginRight]);

// Declare the y (vertical position) scale.
const y = d3.scaleLinear()
    .domain([0, 100])
    .range([height - marginBottom, marginTop]);

// Create the SVG container.
const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height);

// Add the x-axis.
svg.append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(d3.axisBottom(x));

// Add the y-axis.
svg.append("g")
    .attr("transform", `translate(${marginLeft},0)`)
    .call(d3.axisLeft(y));

// Append the SVG element.
container.append(svg.node());

</script>
```

```html [UMD + local]
<!DOCTYPE html>
<div id="container"></div>
<script src="d3.js"></script>
<script type="module">

// Declare the chart dimensions and margins.
const width = 640;
const height = 400;
const marginTop = 20;
const marginRight = 20;
const marginBottom = 30;
const marginLeft = 40;

// Declare the x (horizontal position) scale.
const x = d3.scaleUtc()
    .domain([new Date("2023-01-01"), new Date("2024-01-01")])
    .range([marginLeft, width - marginRight]);

// Declare the y (vertical position) scale.
const y = d3.scaleLinear()
    .domain([0, 100])
    .range([height - marginBottom, marginTop]);

// Create the SVG container.
const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height);

// Add the x-axis.
svg.append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(d3.axisBottom(x));

// Add the y-axis.
svg.append("g")
    .attr("transform", `translate(${marginLeft},0)`)
    .call(d3.axisLeft(y));

// Append the SVG element.
container.append(svg.node());

</script>
```
:::

也可以通过以下方式，直接导入并结构:

```html
<script type="module">

import {forceSimulation, forceCollide, forceX} from "https://cdn.jsdelivr.net/npm/d3-force@3/+esm";

const nodes = [{}, {}];
const simulation = forceSimulation(nodes)
    .force("x", forceX())
    .force("collide", forceCollide(5))
    .on("tick", () => console.log(nodes[0].x));

</script>
```

如果想要本地运行UMD格式的依赖，下载这俩文件：

- <a href="./d3.v7.js" download>d3.v7.js</a>
- <a href="./d3.v7.min.js" download>d3.v7.min.js</a>

然后按照上面 **UMD + local** 里的例子去使用。

## 通过npm安装

如果是通过yarn, npm, pnpm等依赖管理工具管理的项目，可以直接安装。

:::code-group

```bash [yarn]
yarn add d3
```

```bash [npm]
npm install d3
```

```bash [pnpm]
pnpm add d3
```

:::

然后再项目里导入：

```js
import * as d3 from "d3";
```

可以解构导入特定的功能：

```js
import {select, selectAll} from "d3";
```

还可以只安装D3的一个子模块：

```js
import {mean, median} from "d3-array";
```

TypeScript声明文件在这儿：[DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped).

# 在React和Svelte中使用D3

不太熟，不想翻译