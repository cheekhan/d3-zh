# 比例尺：d3-scale

刻度，用于在某个纬度上，将抽象数据映射为可视化表达。尽管常见的情况是将数据表达为位置，
例如将时间转为横向位置，温度转为竖直位置（x轴是时间，y轴是温度），
但是实际情况下，任何数据都可以转为任何的可视化表达，例如颜色、描边宽度、符号尺寸等。
刻度尺可以被用于任何类型的数据。

点击查看常见比例尺:

* [Linear scales](./d3-scale/linear.md)：线性比例尺，通过线性变换，将定量数据都输入，映射到输出范围
* [Time scales](./d3-scale/time.md)：时间比例尺，处理时间序列数据，将输入域的时间或日期，映射到输出域
* [Pow scales](./d3-scale/pow.md)：幂比例尺，将输入域的定量数据，进行指数计算
* [Log scales](./d3-scale/log.md)：对数比例尺，将输入域的定量数据，进行对数计算
* [Symlog scales](./d3-scale/symlog.md)：对称对数比例尺，结合了线性和对数比例尺的特点
* [Ordinal scales](./d3-scale/ordinal.md)：序数比例尺，用于处理分类或序数数据（序数数据是指数据点之间有明确的顺序关系，但相邻数据点之间的差异可能不相等）
* [Band scales](./d3-scale/band.md)：乐队比例尺，处理分类或序数数据，它们将数据映射到一个连续的条带或区间上
* [Point scales](./d3-scale/point.md)：点比例尺，用于将分类或序数数据映射到位置编码的比例尺，它们在数据可视化中常用于确定点的位置
* [Sequential scales](./d3-scale/sequential.md)：顺序比例尺，定量数据的一种颜色编码方式，它们将数值数据映射到一个连续的颜色渐变中，以表示数据值的大小或顺序
* [Diverging scales](./d3-scale/diverging.md)：发散比例尺，用于定量数据的颜色编码，它们将数据值映射到一个从中间值向两个方向发散的颜色渐变中
* [Quantile scales](./d3-scale/quantile.md)：分位比例尺，用于处理定量数据的离散编码，它们将数据值映射到基于分位数的离散范围内
* [Quantize scales](./d3-scale/quantize.md)：量化比例尺，用于定量数据的离散编码，它们将连续的数值数据映射到有限数量的离散值中
* [Threshold scales](./d3-scale/threshold.md)：阈值比例尺，用于定量数据的离散编码，它根据一组阈值将连续的数值数据映射到不同的离散类别中

参考[d3-axis](./d3-axis.md)以及[*scale*.ticks](./d3-scale/linear.md#linear_ticks)、[*scale*.tickFormat](./d3-scale/linear.md#linear_tickFormat)方法将比例尺编码进行可视化，如果是颜色，可以参考[d3-scale-chromatic](./d3-scale-chromatic.md)。
