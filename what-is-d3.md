<script setup>

import * as Plot from "@observablehq/plot";
import * as d3 from "d3";
import {useData} from "vitepress";
import {computed} from "vue";
import LogoDiagram from "./components/LogoDiagram.vue";
import PlotRender from "./components/PlotRender.js";

const {site: {value: {themeConfig: {sidebar}}}} = useData();

const paths = computed(() => {
  const paths = [];
  (function visit(node, path) {
    paths.push({path, link: node.link && `.${node.link}`});
    if (node.items) {
      for (const item of node.items) {
        visit(item, (path === "/" ? path : path + "/") + item.text);
      }
    }
  })({items: sidebar}, "/D3");
  return paths;
});

// https://github.com/observablehq/plot/issues/1703
function computeTreeWidth(paths) {
  const root = d3.tree().nodeSize([1, 1])(d3.stratify().path((d) => d.path)(paths));
  const [x1, x2] = d3.extent(root, (d) => d.x);
  return x2 - x1;
}

</script>

# What is D3?

<LogoDiagram />

**D3.js**是一个开源的JavaScript可视化库。它基于web标准提供了很多底层方法，能够灵活的创造动态的、数据驱动的图形。多年来，D3推动了许多开创性的、获奖的可视化作品，为很多高级图表库提供了底层支持，并且建立了一个活跃的数据从业者社区。

"D3为该领域带来了前所未有的增长、多样化和创造力"，并且"改变了新闻编辑室、网站和个人作品集中有数百万数据可视化的创建方式"，这是[2022年"信息之美"时间考验奖的评语](https://nightingaledvs.com/information-is-beautiful-awards-test-of-time/)。[IEEE VIS 2021时间考验奖](https://ieeevis.org/year/2021/info/awards/test-of-time-awards)指出："通过创建一个引人入胜且易于网络开发者使用的框架来创作交互式可视化，作者们无疑帮助将数据可视化带入了主流。[D3]是本次会议的一个基石贡献，更普遍地讲，对我们整个领域成功有着重要的贡献。"

D3由Mike Bostock在2011年创建。Mike与Jeff Heer和Vadim Ogievetsky在斯坦福共同撰写了[D3的论文](http://vis.stanford.edu/papers/d3)。从2011年到2013年，Jason Davies对D3做出了重大贡献，最引人注目的是D3的地理投影系统。自2016年以来，Philippe Rivière一直是D3及其文档的主要贡献者。多年来，无数善良的个人通过分享代码和想法，通过教学和回答问题，以及通过将人们聚集在一起来推动可视化实践，为D3做出了贡献。Mike和Philippe现在在[Observable](https://observablehq.com)维护D3和[Observable Plot](https://observablehq.com/plot)。

## D3：底层工具箱

D3不是一个传统意义上的图表库。它没有“图表”的概念。当你使用D3来可视化数据时，你是在组合各种基本图形元素。

例如，如果你想做一个[堆叠区域图](https://observablehq.com/@d3/stacked-area-chart/2)，你可能需要使用：
- [CSV解析工具](./d3-dsv.md)来加载数据
- [时间刻度](./d3-scale/time.md)来生横向位置(*x*)
- [线性刻度](./d3-scale/linear.md)生成纵向位置(*y*)
- 使用[ordinal scale](./d3-scale/ordinal.md)和[categorical scheme](./d3-scale-chromatic/categorical.md)来生成颜色
- 使用[stack layout](./d3-shape/stack.md)排列数据
- 使用带有[linear curve](./d3-shape/curve.md)的[area shape](./d3-shape/area.md)生成SVG中的path标签数据
- 使用[axes](./d3-axis.md)显示位置信息
- 使用[selections](./d3-selection.md)创建SVG元素

虽然完成上述例子需要使用到很多功能，但是并不需要一次性就学完D3的所有功能模块。D3是由30个模块组成的一个工具集，我们可以选择需要使用的部分进行学习即可。

参考如下导图：

<PlotRender :options='{
  axis: null,
  height: computeTreeWidth(paths) * 12,
  marginTop: 4,
  marginBottom: 4,
  marginRight: 120,
  marks: [
    Plot.tree(paths, {path: "path", textStroke: "var(--vp-c-bg)", channels: {href: {value: "link", filter: null}}, treeSort: null})
  ]
}' />

:::tip
Unless you need D3’s low-level control, we recommend our high-level sister library: [Observable Plot](https://observablehq.com/plot). Whereas a histogram in D3 might require 50 lines of code, Plot can do it in one! Plot’s concise yet expressive API lets you focus more on analyzing and visualizing data instead of web development. You can even combine Plot and D3 for the best of both.
:::

## D3：很灵活

D3中没有图标的概念，所以一个基本的图标，需要几十行的代码。好处是能拥有较大的控制权，能够精细的操控到图表的任何细节。D3甚至无法用默认的方式来展示数据，一切都需要自己进行开发。

D3不能替代高级图表库，如果是使用SVG或者canvas，甚至是WebGL，自己制作图表时，D3才是一个好的选择。

## D3：使用web标准

D3没有引入新的图形表示方法，可以和SVG和canvas一起使用。

“D3”这个名字是*data-driven documents*的缩写，其中*documents*指的就是[DOM文档流](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)。
D3的某些模块会涉及到DOM操作，但是大部分模块都只是数据上的操作。同时，D3也可以和vue，react等框架搭配使用。

基于web标准由诸多好处。例如可以使用样式表来修改图表的样式；还能用浏览器的开发者工具调试代码；D3的同步、命令式评估模型，使得在具有复杂异步运行时的框架中的调试变得容易，例如调用[*selection*.attr](./d3-selection/modifying.md#selection_attr)会立即修改DOM。


## D3：适用于定制的可视化

D3可以实现复杂的需求，但是使用起来并不简单。如果需要开发一个表现力强大的定制化可视化方案，那D3是值得选择的。如果只是快速搭建一个私有面板，或者一次性的分析图表，那就有点得不偿失了。

## D3：适用于动态的可视化

D3较新颖的功能，就是[data join](./d3-selection/joining.md)。能够将数据和元素进行绑定，然后对数据集和元素集，进行各种操作。

数据绑定，能够在数据变化时对元素进行精准的控制。这种直接的改变DOM元素，相比于进行DOM diff要高校的多。并且可以在对DOM元素进行修改时，使用各种过渡效果。