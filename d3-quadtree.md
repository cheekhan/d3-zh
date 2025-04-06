<script setup>

import * as Plot from "@observablehq/plot";
import * as d3 from "d3";
import {computed, shallowRef, onMounted} from "vue";
import ExampleAnimatedQuadtree from "./components/ExampleAnimatedQuadtree.vue";
import PlotRender from "./components/PlotRender.js";
import quadtree_findVisited from "./components/quadtreeFindVisited.js";
import quadtree_nodes from "./components/quadtreeNodes.js";

const random = d3.randomNormal.source(d3.randomLcg(42))();
const points = Array.from({length: 1000}, () => [random(), random()]);
const tree = d3.quadtree(d3.range(points.length), (i) => points[i][0], (i) => points[i][1]);
const findState = shallowRef({x: 0, y: 0, i: -1});

</script>

# 四叉树:d3-quadtree

<ExampleAnimatedQuadtree :points="points" />

四叉树算法,会使用递归的方式将二维空间切割为正方形,每个正方形又分割为四个相等尺寸的正方形.
四叉树将整个空间划分后,进行数据结构的存储,然后把每个节点,都分配到唯一的空间叶子节点里.同一个空间的节点,用链表的形式表示.
四叉树可以加速各种空间操作，例如用于计算多体力的Barnes-Hut近似、碰撞检测以及搜索附近点.

<!-- http://bl.ocks.org/mbostock/9078690 -->
<!-- http://bl.ocks.org/mbostock/4343214 -->

## quadtree(*data*, *x*, *y*) {#quadtree}

[Source](https://github.com/d3/d3-quadtree/blob/main/src/quadtree.js) · 
创建一个四叉树,该四叉树的范围[extent](#quadtree_extent)是空的,并且使用默认的[x](#quadtree_x),[y](#quadtree_y)访问器.
如果传入了*data*,会默认调用[addAll](#quadtree_addAll)方法来将可迭代的*data*添加到四叉树.

```js
const tree = d3.quadtree(data);
```

和如下写法是等价的:

```js
const tree = d3.quadtree().addAll(data);
```

如果*x*,*y*也是明确的,那么需要在添加数据之前,就设置[x](#quadtree_x)和[y](#quadtree_y)访问器:

```js
const tree = d3.quadtree().x(x).y(y).addAll(data);
```

## *quadtree*.x(x) {#quadtree_x}

[Source](https://github.com/d3/d3-quadtree/blob/main/src/x.js) · If *x* is specified, sets the current x-coordinate accessor and returns the quadtree.

```js
const tree = d3.quadtree().x((d) => d.x);
```

The x accessor is used to derive the x coordinate of data when [adding](#quadtree_add) to and [removing](#quadtree_remove) from the tree. It is also used when [finding](#quadtree_find) to re-access the coordinates of data previously added to the tree; therefore, the x and y accessors must be consistent, returning the same value given the same input.

If *x* is not specified, returns the current x accessor.

```js
tree.x() // (d) => d.x
```

The x accessor defaults to:

```js
function x(d) {
  return d[0];
}
```

## *quadtree*.y(y) {#quadtree_y}

[Source](https://github.com/d3/d3-quadtree/blob/main/src/y.js) · If *y* is specified, sets the current y-coordinate accessor and returns the quadtree.

```js
const tree = d3.quadtree().y((d) => d.y);
```

The y accessor is used to derive the y coordinate of data when [adding](#quadtree_add) to and [removing](#quadtree_remove) from the tree. It is also used when [finding](#quadtree_find) to re-access the coordinates of data previously added to the tree; therefore, the x and y accessors must be consistent, returning the same value given the same input.

If *y* is not specified, returns the current y accessor.

```js
tree.y() // (d) => d.y
```

The y accessor defaults to:

```js
function y(d) {
  return d[1];
}
```

## *quadtree*.extent(*extent*) {#quadtree_extent}

[Source](https://github.com/d3/d3-quadtree/blob/main/src/extent.js) · If *extent* is specified, expands the quadtree to [cover](#quadtree_cover) the specified points [[*x0*, *y0*], [*x1*, *y1*]] and returns the quadtree.

```js
const tree = d3.quadtree().extent([[0, 0], [1, 1]]);
```

If *extent* is not specified, returns the quadtree’s current extent [[*x0*, *y0*], [*x1*, *y1*]], where *x0* and *y0* are the inclusive lower bounds and *x1* and *y1* are the inclusive upper bounds, or undefined if the quadtree has no extent.

```js
tree.extent() // [[0, 0], [2, 2]]
```

The extent may also be expanded by calling [*quadtree*.cover](#quadtree_cover) or [*quadtree*.add](#quadtree_add).

## *quadtree*.cover(*x*, *y*) {#quadtree_cover}

[Source](https://github.com/d3/d3-quadtree/blob/main/src/cover.js) · 

拓展四叉树,以覆盖坐标点⟨*x*,*y*⟩,该方法返回四叉树本身.

```js
const tree = d3.quadtree().cover(0, 0).cover(1, 1);
```

如果四叉树的范围,已经覆盖了指定的点,则该方法不生效.
如果四叉树有了范围,则该范围会重复翻倍,以覆盖指定的坐标点.
如果四叉树未设置范围,则会根据*cover*方法传入的坐标,向下取整作为范围左上角,向上取整作为范围的右下角.
If the quadtree’s extent already covers the specified point, this method does nothing. If the quadtree has an extent, the extent is repeatedly doubled to cover the specified point, wrapping the [root](#quadtree_root) [node](#quadtree-nodes) as necessary; if the quadtree is empty, the extent is initialized to the extent [[⌊*x*⌋, ⌊*y*⌋], [⌈*x*⌉, ⌈*y*⌉]]. (Rounding is necessary such that if the extent is later doubled, the boundaries of existing quadrants do not change due to floating point error.)

## *quadtree*.add(*datum*) {#quadtree_add}

[Source](https://github.com/d3/d3-quadtree/blob/main/src/add.js) · Adds the specified *datum* to the quadtree, deriving its coordinates ⟨*x*,*y*⟩ using the current [x](#quadtree_x) and [y](#quadtree_y) accessors, and returns the quadtree.

```js
const tree = d3.quadtree().add([0, 0]);
```

If the new point is outside the current [extent](#quadtree_extent) of the quadtree, the quadtree is automatically expanded to [cover](#quadtree_cover) the new point.

## *quadtree*.addAll(*data*) {#quadtree_addAll}

[Source](https://github.com/d3/d3-quadtree/blob/main/src/add.js) · 给四叉树添加可迭代的*data*.使用[x](#quadtree_x),[y](#quadtree_y)访问器,给每个节点生成⟨*x*,*y*⟩坐标.此方法返回四叉树本身.

```js
const tree = d3.quadtree().addAll([[0, 0], [1, 2]]);
```

This is approximately equivalent to calling [*quadtree*.add](#quadtree_add) repeatedly:

```js
for (let i = 0, n = data.length; i < n; ++i) {
  quadtree.add(data[i]);
}
```

However, this method results in a more compact quadtree because the extent of the *data* is computed first before adding the data.

## *quadtree*.remove(*datum*) {#quadtree_remove}

[Source](https://github.com/d3/d3-quadtree/blob/main/src/remove.js) · Removes the specified *datum* from the quadtree, deriving its coordinates ⟨*x*,*y*⟩ using the current [x](#quadtree_x) and [y](#quadtree_y) accessors, and returns the quadtree.

```js
tree.remove(data[0]);
```

If the specified *datum* does not exist in this quadtree (as determined by strict equality with *datum*, and independent of the computed position), this method does nothing.

## *quadtree*.removeAll(*data*) {#quadtree_removeAll}

[Source](https://github.com/d3/d3-quadtree/blob/main/src/remove.js) · Removes the specified *data* from the quadtree, deriving their coordinates ⟨*x*,*y*⟩ using the current [x](#quadtree_x) and [y](#quadtree_y) accessors, and returns the quadtree.

```js
tree.removeAll(data);
```

If a specified datum does not exist in this quadtree (as determined by strict equality with *datum*, and independent of the computed position), it is ignored.

## *quadtree*.copy() {#quadtree_copy}

```js
const t1 = d3.quadtree(data);
const t2 = t1.copy();
```

[Source](https://github.com/d3/d3-quadtree/blob/main/src/quadtree.js) · Returns a copy of the quadtree. All [nodes](#quadtree-nodes) in the returned quadtree are identical copies of the corresponding node in the quadtree; however, any data in the quadtree is shared by reference and not copied.

## *quadtree*.root() {#quadtree_root}

[Source](https://github.com/d3/d3-quadtree/blob/main/src/root.js) · Returns the root [node](#quadtree-nodes) of the quadtree.

```js
tree.root() // [{…}, empty × 2, {…}]
```

## *quadtree*.data() {#quadtree_data}

[Source](https://github.com/d3/d3-quadtree/blob/main/src/data.js) · Returns an array of all data in the quadtree.

```js
tree.data() // [[0, 0], [1, 2]]
```

## *quadtree*.size() {#quadtree_size}

[Source](https://github.com/d3/d3-quadtree/blob/main/src/size.js) · Returns the total number of data in the quadtree.

```js
tree.size() // 2
```

## *quadtree*.find(*x*, *y*, *radius*) {#quadtree_find}

<PlotRender defer v-once :options='{
  axis: null,
  aspectRatio: 1,
  round: true,
  marks: [
    Plot.dot(points, {r: 2, fill: "currentColor"}),
    Plot.rect(quadtree_nodes.call(tree), {stroke: "currentColor", x1: "x1", y1: "y1", x2: "x2", y2: "y2"}),
    Plot.rect({length: 1}, {
      stroke: "red",
      strokeOpacity: 0.5,
      render(index, scales, values, dimensions, context, next) {
        function update(x, y) {
          const visited = quadtree_findVisited.call(tree, x, y);
          return next(
            d3.range(visited.length),
            scales,
            {
              x1: visited.map((d, i) => scales.x(d.x0) + d.dx0),
              y1: visited.map((d, i) => scales.y(d.y0) - d.dy0),
              x2: visited.map((d, i) => scales.x(d.x1) + d.dx1),
              y2: visited.map((d, i) => scales.y(d.y1) - d.dy1)
            },
            dimensions,
            context
          );
        }
        let rect = update(0, 0);
        context.ownerSVGElement.addEventListener("pointermove", (event) => {
          const [x, y] = d3.pointer(event);
          const newrect = update(scales.x.invert(x), scales.y.invert(y));
          rect.replaceWith(newrect);
          rect = newrect;
        });
        return rect;
      }
    }),
    Plot.dot(points, {
      r: 3.5,
      stroke: "red",
      strokeWidth: 3,
      render(index, scales, values, dimensions, context, next) {
        function update(x, y) {
          const i = tree.find(x, y);
          findState = {x, y, i};
          return next([i], scales, values, dimensions, context);
        }
        let dot = update(0, 0);
        context.ownerSVGElement.addEventListener("pointermove", (event) => {
          const [x, y] = d3.pointer(event);
          const newdot = update(scales.x.invert(x), scales.y.invert(y));
          dot.replaceWith(newdot);
          dot = newdot;
        });
        return dot;
      }
    }),
  ]
}' />

[Source](https://github.com/d3/d3-quadtree/blob/main/src/find.js) · Returns the datum closest to the position ⟨*x*,*y*⟩ with the given search *radius*. If *radius* is not specified, it defaults to infinity.

```js-vue
tree.find({{findState.x.toFixed(3)}}, {{findState.y.toFixed(3)}}) // {{points[findState.i] && `[${points[findState.i].map((p) => p.toFixed(3)).join(", ")}]`}}
```

If there is no datum within the search area, returns undefined.

```js
tree.find(10, 10, 1) // undefined
```

## *quadtree*.visit(*callback*) {#quadtree_visit}

[Source](https://github.com/d3/d3-quadtree/blob/main/src/visit.js) · 

通过先序遍历,来遍历节点,然后调用回调函数,函数的入参分别是*node*, *x0*, *y0*, *x1*, *y1* .
其中,*node*是当前遍历到的节点,
⟨*x0*, *y0*⟩是上限坐标,是坐标系统的左上角,
⟨*x1*, *y1*⟩是下限坐标,是坐标系统的右下角.


If the *callback* returns true for a given node, then the children of that node are not visited; otherwise, all child nodes are visited. This can be used to quickly visit only parts of the tree, for example when using the [Barnes–Hut approximation](https://en.wikipedia.org/wiki/Barnes–Hut_simulation). Note, however, that child quadrants are always visited in sibling order: top-left, top-right, bottom-left, bottom-right. In cases such as [search](#quadtree_find), visiting siblings in a specific order may be faster.

As an example, the following visits the quadtree and returns all the nodes within a rectangular extent [xmin, ymin, xmax, ymax], ignoring quads that cannot possibly contain any such node:

```js
function search(quadtree, xmin, ymin, xmax, ymax) {
  const results = [];
  quadtree.visit((node, x1, y1, x2, y2) => {
    if (!node.length) {
      do {
        let d = node.data;
        if (d[0] >= xmin && d[0] < xmax && d[1] >= ymin && d[1] < ymax) {
          results.push(d);
        }
      } while (node = node.next);
    }
    return x1 >= xmax || y1 >= ymax || x2 < xmin || y2 < ymin;
  });
  return results;
}
```

## *quadtree*.visitAfter(*callback*) {#quadtree_visitAfter}

[Source](https://github.com/d3/d3-quadtree/blob/main/src/visitAfter.js) · Visits each [node](#quadtree-nodes) in the quadtree in post-order traversal, invoking the specified *callback* with arguments *node*, *x0*, *y0*, *x1*, *y1* for each node, where *node* is the node being visited, ⟨*x0*, *y0*⟩ are the lower bounds of the node, and ⟨*x1*, *y1*⟩ are the upper bounds, and returns the quadtree. (Assuming that positive *x* is right and positive *y* is down, as is typically the case in Canvas and SVG, ⟨*x0*, *y0*⟩ is the top-left corner and ⟨*x1*, *y1*⟩ is the lower-right corner; however, the coordinate system is arbitrary, so more formally *x0* <= *x1* and *y0* <= *y1*.) Returns *root*.

## Quadtree nodes

四叉树内部节点,按照从左到右,从上到下的顺序,分别存储在四个元素数组内:

* `0` - 左上象限
* `1` - 右上象限
* `2` - 左下象限
* `3` - 右下象限

子象限如果是空的,那它的值就是undefined.

叶子节点,都使用带有如下属性的对象表示:

* `data` - 于当前节点关联的数据,通过[*quadtree*.add](#quadtree_add)添加
* `next` - 当前叶子的下一个数据集

The `length` property may be used to distinguish leaf nodes from internal nodes: it is undefined for leaf nodes, and 4 for internal nodes. For example, to iterate over all data in a leaf node:

```js
if (!node.length) do console.log(node.data); while (node = node.next);
```

The point’s x and y coordinates **must not be modified** while the point is in the quadtree. To update a point’s position, [remove](#quadtree_remove) the point and then re-[add](#quadtree_add) it to the quadtree at the new position. Alternatively, you may discard the existing quadtree entirely and create a new one from scratch; this may be more efficient if many of the points have moved.
