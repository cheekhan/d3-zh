# d3-shape

可视化可以通过独立的图形（例如[符号](./d3-shape/symbol.md), [弧线](./d3-shape/arc.md), [直线](./d3-shape/line.md)，[面积](./d3-shape/area.md)）来表示。例如当一个柱状图中，一个矩形可能很简单，但是还会有其他复杂的图形，像圆角的环形扇区和卡特穆尔-罗姆样条曲线。
shape模块就提供了很多图形生成器。

和其它模块一样，这个模块的图形，也是由数据驱动的：每个图形生成器都提供了访问器，用于控制输入数据如何映射到可视化的表示形式。例如，您可能会通过将数据字段按比例缩放以适应图表，来定义一个用于时间序列的折线生成器：

```js
const line = d3.line()
    .x((d) => x(d.date))
    .y((d) => y(d.value));
```

然后，这个线生成器，就能用来计算path标签的d属性：
```js
path.datum(data).attr("d", line);
```

或者用Canvas 2D上下文来将其渲染：

```js
line.context(context)(data);
```

See one of:

- [弧线](./d3-shape/arc.md) - 圆形或环形扇区，例如在饼图中
- [区域](./d3-shape/area.md) - 由顶线和基线定义的区域，例如在区域图中
- [曲线](./d3-shape/curve.md) - 将各个点连接起来，以产生连续的形状
- [线条](./d3-shape/line.md) - 样条曲线(有控制点的曲线)或者折线，例如在折线图中
- [连接线](./d3-shape/link.md) - 连接源和目标点的贝塞尔曲线
- [饼](./d3-shape/pie.md) - 计算饼图或者甜甜圈图的角度
- [堆叠](./d3-shape/stack.md) - 相邻的形状堆叠在一起，例如在堆叠柱状图中
- [符号](./d3-shape/symbol.md) - 用于分类的形状编码，例如在散点图中
- [径向区域](./d3-shape/radial-area.md) - 和[区域](./d3-shape/area.md)类似，但是使用极坐标
- [径向线条](./d3-shape/radial-line.md) - 和[线条](./d3-shape/line.md)类似, 但是使用极坐标
- [径向连接线](./d3-shape/radial-link.md) - 和[连接线](./d3-shape/link.md)类似, 但是使用极坐标
