# Force simulations

力仿真，实现了速度Verlet积分算法（该算法用于分子运动模拟），用于模拟作用在粒子上的物理力。

在力仿真中，假设了例子的质量*m* = 1，然后按照固定的时间间隔Δ*t* = 1来计算力的作用。

作用在粒子上的力*F*，就是时间间隔上的例子加速度*a*，然后把速度计算出来，并作用到粒子上，就完成了粒子运动的模拟。

## forceSimulation(*nodes*) {#forceSimulation}

[Source](https://github.com/d3/d3-force/blob/main/src/simulation.js)

创建一个力仿真模拟器，默认时候没有任何的力作用，也没有粒子在运动。
如果已经明确了要给哪些节点进行力仿真，可以传入参数[*nodes*](#simulation_nodes)：

```js
const simulation = d3.forceSimulation(nodes);
```
:::warning
力仿真的函数都是有副作用的，会修改传入节点的属性。参考[*simulation*.nodes](#simulation_nodes).
:::

力仿真将自动开始模拟粒子运动。可以使用[*simulation*.on](#simulation_on)来监听力仿真的帧回调（tick events，就是按照时间间隔的力作用结果）。
如果希望手动运行力仿真，可以先调用[*simulation*.stop](#simulation_stop)来停止计算粒子运动，再按需调用[*simulation*.tick](#simulation_tick)。

## *simulation*.restart() {#simulation_restart}

[Source](https://github.com/d3/d3-force/blob/main/src/simulation.js)

重新运行力仿真。可以结合[*simulation*.alphaTarget](#simulation_alphaTarget)或者[*simulation*.alpha](#simulation_alpha)来重启力仿真的粒子运动模拟。

一般用于交互时，例如拖拽了一个节点，然后从新计算对其粒子的影响；或者在调用了[*simulation*.stop](#simulation_stop)后继续运动。

## *simulation*.stop() {#simulation_stop}

[Source](https://github.com/d3/d3-force/blob/main/src/simulation.js)

停止力仿真的计算。如果仿真已经计算结束，则什么也不做。

## *simulation*.tick(*iterations*) {#simulation_tick}

[Source](https://github.com/d3/d3-force/blob/main/src/simulation.js)

使用传入的数值（缺省为1），手动步进力仿真。

每次迭代，都使用公式
([*alphaTarget*](#simulation_alphaTarget) - *alpha*) × [*alphaDecay*](#simulation_alphaDecay)
计算出一个值，然后和[*alpha*](#simulation_alpha)相加，
将相加后的结果，传给力仿真注册的所有的力；
然后根据力，通过公式velocity* × [*velocityDecay*](#simulation_velocityDecay)计算每个节点的速度，最后根据速度计算出节点的位置。

该方法不会触发[事件](#simulation_on)，只有力仿真默认迭代的时候（例如创建时，或者重新启动时）才会触发事件。力仿真启动时的正常迭代次数是根据公式*log*([*alphaMin*](#simulation_alphaMin)) / *log*(1 - [*alphaDecay*](#simulation_alphaDecay))向上取整计算的，默认是300.

该函数可以搭配[*simulation*.stop](#simulation_stop)来计算[静态力导布局](https://observablehq.com/@d3/static-force-directed-graph)。
对于海量数据，静态布局应该放在[web worker](https://observablehq.com/@d3/force-directed-web-worker)里计算，防止页面卡顿。

## *simulation*.nodes(*nodes*) {#simulation_nodes}

[Source](https://github.com/d3/d3-force/blob/main/src/simulation.js)

给力仿真添加传入的节点*nodes*，并且给这些节点初始化位置和速度，然后[重新初始化](#force_initialize)绑定的[forces](#simulation_force)。

如果未传入节点*nodes*，则返回力仿真的节点列表。

:::warning
这个函数也是有副作用的，会给传入的*nodes*添加T*node*.index, *node*.x, *node*.y, *node*.vx, *node*.vy
:::

每一个节点都需要是一个对象，并且力仿真会将如下属性添加的节点对象上：

* `index` - 节点的自增
* `x` - *x*-坐标
* `y` - *y*-坐标
* `vx` - *x*轴的速度
* `vy` - *y*轴的速度

位置信息⟨*x*,*y*⟩和速度信息⟨*vx*,*vy*⟩可能随即被力仿真和注册的力修改。如果速度信息是NaN，那么速度就被初始化为⟨0,0⟩，如果位置信息是NaN，
位置会按照[phyllotaxis螺旋排列](https://observablehq.com/@d3/force-layout-phyllotaxis)的方式来保证均匀的分布。

如果需要将节点固定在某个位置，可以修改如下两个属性： 

* `fx` - *x*-坐标
* `fy` - *y*-坐标

在每次[tick](#simulation_tick)结束，如果设置了*node*.fx，对会将对应的*node*.x设置为*node*.fx的值，并且将*node*.vx设置为0；
*node*.fy亦是如此。
如果希望解除固定状态，只需将*node*.fx和*node*.fy设置为 null 即可。

如果节点数组*nodes*后来又发生了变化，需要重新调用此方法，然后让力仿真从新进行计算。

## *simulation*.alpha(*alpha*) {#simulation_alpha}

[Source](https://github.com/d3/d3-force/blob/main/src/simulation.js)

*alpha*，力仿真模型的活跃程度。会随着时间而逐渐降低，当达到最低点时，力仿真模型就不在进行运动，所有节点也将静止。

 · *alpha* is roughly analogous to temperature in [simulated annealing](https://en.wikipedia.org/wiki/Simulated_annealing#Overview). It decreases over time as the simulation “cools down”. When *alpha* reaches *alphaMin*, the simulation stops; see [*simulation*.restart](#simulation_restart).

If *alpha* is specified, sets the current alpha to the specified number in the range [0,1] and returns this simulation. If *alpha* is not specified, returns the current alpha value, which defaults to 1.

## *simulation*.alphaMin(*min*) {#simulation_alphaMin}

[Source](https://github.com/d3/d3-force/blob/main/src/simulation.js) · If *min* is specified, sets the minimum *alpha* to the specified number in the range [0,1] and returns this simulation. If *min* is not specified, returns the current minimum *alpha* value, which defaults to 0.001. The simulation’s internal timer stops when the current [*alpha*](#simulation_alpha) is less than the minimum *alpha*. The default [alpha decay rate](#simulation_alphaDecay) of ~0.0228 corresponds to 300 iterations.

## *simulation*.alphaDecay(*decay*) {#simulation_alphaDecay}

[Source](https://github.com/d3/d3-force/blob/main/src/simulation.js) · If *decay* is specified, sets the [*alpha*](#simulation_alpha) decay rate to the specified number in the range [0,1] and returns this simulation. If *decay* is not specified, returns the current *alpha* decay rate, which defaults to 0.0228… = 1 - *pow*(0.001, 1 / 300) where 0.001 is the default [minimum *alpha*](#simulation_alphaMin).

The alpha decay rate determines how quickly the current alpha interpolates towards the desired [target *alpha*](#simulation_alphaTarget); since the default target *alpha* is zero, by default this controls how quickly the simulation cools. Higher decay rates cause the simulation to stabilize more quickly, but risk getting stuck in a local minimum; lower values cause the simulation to take longer to run, but typically converge on a better layout. To have the simulation run forever at the current *alpha*, set the *decay* rate to zero; alternatively, set a [target *alpha*](#simulation_alphaTarget) greater than the [minimum *alpha*](#simulation_alphaMin).

## *simulation*.alphaTarget(*target*) {#simulation_alphaTarget}

[Source](https://github.com/d3/d3-force/blob/main/src/simulation.js) · If *target* is specified, sets the current target [*alpha*](#simulation_alpha) to the specified number in the range [0,1] and returns this simulation. If *target* is not specified, returns the current target alpha value, which defaults to 0.

## *simulation*.velocityDecay(*decay*) {#simulation_velocityDecay}

[Source](https://github.com/d3/d3-force/blob/main/src/simulation.js) · If *decay* is specified, sets the velocity decay factor to the specified number in the range [0,1] and returns this simulation. If *decay* is not specified, returns the current velocity decay factor, which defaults to 0.4. The decay factor is akin to atmospheric friction; after the application of any forces during a [tick](#simulation_tick), each node’s velocity is multiplied by 1 - *decay*. As with lowering the [alpha decay rate](#simulation_alphaDecay), less velocity decay may converge on a better solution, but risks numerical instabilities and oscillation.

## *simulation*.force(*name*, *force*) {#simulation_force}

[Source](https://github.com/d3/d3-force/blob/main/src/simulation.js) · If *force* is specified, assigns the [force](#custom-forces) for the specified *name* and returns this simulation. If *force* is not specified, returns the force with the specified name, or undefined if there is no such force. (By default, new simulations have no forces.) For example, to create a new simulation to layout a graph, you might say:

```js
const simulation = d3.forceSimulation(nodes)
    .force("charge", d3.forceManyBody())
    .force("link", d3.forceLink(links))
    .force("center", d3.forceCenter());
```

To remove the force with the given *name*, pass null as the *force*. For example, to remove the charge force:

```js
simulation.force("charge", null);
```

## *simulation*.find(*x*, *y*, *radius*) {#simulation_find}

[Source](https://github.com/d3/d3-force/blob/main/src/simulation.js) · Returns the node closest to the position ⟨*x*,*y*⟩ with the given search *radius*. If *radius* is not specified, it defaults to infinity. If there is no node within the search area, returns undefined.

## *simulation*.randomSource(*source*) {#simulation_randomSource}

[Source](https://github.com/d3/d3-force/blob/main/src/simulation.js "Source"))

If *source* is specified, sets the function used to generate random numbers; this should be a function that returns a number between 0 (inclusive) and 1 (exclusive). If *source* is not specified, returns this simulation’s current random source which defaults to a fixed-seed [linear congruential generator](https://en.wikipedia.org/wiki/Linear_congruential_generator). See also [*random*.source](../d3-random.md#random_source).

## *simulation*.on(*typenames*, *listener*) {#simulation_on}

[Source](https://github.com/d3/d3-force/blob/main/src/simulation.js) · If *listener* is specified, sets the event *listener* for the specified *typenames* and returns this simulation. If an event listener was already registered for the same type and name, the existing listener is removed before the new listener is added. If *listener* is null, removes the current event listeners for the specified *typenames*, if any. If *listener* is not specified, returns the first currently-assigned listener matching the specified *typenames*, if any. When a specified event is dispatched, each *listener* will be invoked with the `this` context as the simulation.

The *typenames* is a string containing one or more *typename* separated by whitespace. Each *typename* is a *type*, optionally followed by a period (`.`) and a *name*, such as `tick.foo` and `tick.bar`; the name allows multiple listeners to be registered for the same *type*. The *type* must be one of the following:

* `tick` - after each tick of the simulation’s internal timer.
* `end` - after the simulation’s timer stops when *alpha* < [*alphaMin*](#simulation_alphaMin).

Note that *tick* events are not dispatched when [*simulation*.tick](#simulation_tick) is called manually; events are only dispatched by the internal timer and are intended for interactive rendering of the simulation. To affect the simulation, register [forces](#simulation_force) instead of modifying nodes’ positions or velocities inside a tick event listener.

See [*dispatch*.on](../d3-dispatch.md#dispatch_on) for details.

## Custom forces

A *force* is a function that modifies nodes’ positions or velocities. It can simulate a physical force such as electrical charge or gravity, or it can resolve a geometric constraint such as keeping nodes within a bounding box or keeping linked nodes a fixed distance apart. For example, here is a force that moves nodes towards the origin:

```js
function force(alpha) {
  for (let i = 0, n = nodes.length, node, k = alpha * 0.1; i < n; ++i) {
    node = nodes[i];
    node.vx -= node.x * k;
    node.vy -= node.y * k;
  }
}
```

Forces typically read the node’s current position ⟨*x*,*y*⟩ and then mutate the node’s velocity ⟨*vx*,*vy*⟩. Forces may also “peek ahead” to the anticipated next position of the node, ⟨*x* + *vx*,*y* + *vy*⟩; this is necessary for resolving geometric constraints through [iterative relaxation](https://en.wikipedia.org/wiki/Relaxation_\(iterative_method\)). Forces may also modify the position directly, which is sometimes useful to avoid adding energy to the simulation, such as when recentering the simulation in the viewport.

### *force*(*alpha*) {#_force}

Applies this force, optionally observing the specified *alpha*. Typically, the force is applied to the array of nodes previously passed to [*force*.initialize](#force_initialize), however, some forces may apply to a subset of nodes, or behave differently. For example, [forceLink](./link.md) applies to the source and target of each link.

### *force*.initialize(*nodes*) {#force_initialize}

Supplies the array of *nodes* and *random* source to this force. This method is called when a force is bound to a simulation via [*simulation*.force](#simulation_force) and when the simulation’s nodes change via [*simulation*.nodes](#simulation_nodes). A force may perform necessary work during initialization, such as evaluating per-node parameters, to avoid repeatedly performing work during each application of the force.
