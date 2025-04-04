# Many-body force

many-body力（或者n-body力），在所有[节点](./simulation.md#simulation_nodes)间相互租用。
将所有节点当作电荷，然后模拟它们之间的引力或斥力。
如果将[强度属性](#manyBody_strength)设置为负数，则代表斥力；如果设置为正数，则代表引力。
这个力仿真，是使用四叉树和[Barnes–Hut approximation](https://en.wikipedia.org/wiki/Barnes–Hut_simulation)算法来实现的，
并且可以使用[theta属性](#manyBody_theta)来自定义仿真的精度。

和[连接力](./link.md)有所区别的是，连接力只影响被连接的两个节点。而n-body力的作用是全局的，每个节点之间都会互相影响，即便他们之间没有边关系也会影响。


## forceManyBody() {#forceManyBody}

[Source](https://github.com/d3/d3-force/blob/main/src/manyBody.js) · Creates a new many-body force with the default parameters.

```js
const manyBody = d3.forceManyBody().strength(-100);
```

## *manyBody*.strength(*strength*) {#manyBody_strength}

[Source](https://github.com/d3/d3-force/blob/main/src/manyBody.js) · If *strength* is specified, sets the strength accessor to the specified number or function, re-evaluates the strength accessor for each node, and returns this force. A positive value causes nodes to attract each other, similar to gravity, while a negative value causes nodes to repel each other, similar to electrostatic charge. If *strength* is not specified, returns the current strength accessor, which defaults to:

```js
function strength() {
  return -30;
}
```

The strength accessor is invoked for each [node](./simulation.md#simulation_nodes) in the simulation, being passed the *node* and its zero-based *index*. The resulting number is then stored internally, such that the strength of each node is only recomputed when the force is initialized or when this method is called with a new *strength*, and not on every application of the force.

## *manyBody*.theta(*theta*) {#manyBody_theta}

[Source](https://github.com/d3/d3-force/blob/main/src/manyBody.js) · If *theta* is specified, sets the Barnes–Hut approximation criterion to the specified number and returns this force. If *theta* is not specified, returns the current value, which defaults to 0.9.

To accelerate computation, this force implements the [Barnes–Hut approximation](http://en.wikipedia.org/wiki/Barnes–Hut_simulation) which takes O(*n* log *n*) per application where *n* is the number of [nodes](./simulation.md#simulation_nodes). For each application, a [quadtree](../d3-quadtree.md) stores the current node positions; then for each node, the combined force of all other nodes on the given node is computed. For a cluster of nodes that is far away, the charge force can be approximated by treating the cluster as a single, larger node. The *theta* parameter determines the accuracy of the approximation: if the ratio *w* / *l* of the width *w* of the quadtree cell to the distance *l* from the node to the cell’s center of mass is less than *theta*, all nodes in the given cell are treated as a single node rather than individually.

## *manyBody*.distanceMin(*distance*) {#manyBody_distanceMin}

[Source](https://github.com/d3/d3-force/blob/main/src/manyBody.js) · If *distance* is specified, sets the minimum distance between nodes over which this force is considered. If *distance* is not specified, returns the current minimum distance, which defaults to 1. A minimum distance establishes an upper bound on the strength of the force between two nearby nodes, avoiding instability. In particular, it avoids an infinitely-strong force if two nodes are exactly coincident; in this case, the direction of the force is random.

## *manyBody*.distanceMax(*distance*) {#manyBody_distanceMax}

[Source](https://github.com/d3/d3-force/blob/main/src/manyBody.js) · If *distance* is specified, sets the maximum distance between nodes over which this force is considered. If *distance* is not specified, returns the current maximum distance, which defaults to infinity. Specifying a finite maximum distance improves performance and produces a more localized layout.
