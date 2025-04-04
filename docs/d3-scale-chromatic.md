# d3-scale-chromatic

这个模块提供了顺序、离散、和分类的颜色方案。用于和[d3-scale](./d3-scale.md)模块的 [d3.scaleOrdinal](./d3-scale/ordinal.md) and [d3.scaleSequential](./d3-scale/sequential.md)配合使用。

大部分配色方案都来源于[ColorBrewer](http://colorbrewer2.org)，其中顺序和离散颜色方案，是通过[uniform B-splines](https://observablehq.com/@d3/colorbrewer-splines)进行插值的:

* 分类颜色：[Categorical schemes](./d3-scale-chromatic/categorical.md)
* 循环颜色：[Cyclical schemes](./d3-scale-chromatic/cyclical.md)
* 离散：[Diverging schemes](./d3-scale-chromatic/diverging.md)
* 顺序：[Sequential schemes](./d3-scale-chromatic/sequential.md)
