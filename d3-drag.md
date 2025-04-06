# d3-drag

[Examples](https://observablehq.com/collection/@d3/d3-drag)

拖拽元素，是很常见的操作元素的交互行为。d3为拖拽行为提供了进行了良好的抽象。例如在力导图中拖拽节点：

[<img alt="Force-Directed Graph" src="https://raw.githubusercontent.com/d3/d3-drag/master/img/force-graph.png" width="420" height="219">](https://observablehq.com/@d3/force-directed-graph/2?intent=fork)

当然，拖拽行为不仅仅可以移动元素，可以在监听到拖拽时做更多的事儿，例如在画布上绘制拖拽的路径：

[<img alt="Line Drawing" src="https://raw.githubusercontent.com/d3/d3-drag/master/img/drawing.png" width="420" height="219">](https://observablehq.com/@d3/draw-me)

拖拽行为可以和其他行为组合使用，例如[d3-zoom](./d3-zoom.md)。同时，拖拽可以用在SVG, HTML甚至Canvas。

拖拽行为，统一了鼠标和触摸设备，屏蔽了浏览器差异，后续还将支持[Pointer Events](https://www.w3.org/TR/pointerevents/)。

## drag() {#drag}

[Source](https://github.com/d3/d3-drag/blob/main/src/drag.js)

创建一个新的拖拽行为对象。返回的拖拽行为对象[*drag*](#_drag)既是对象，又是一个方法。通常通过调用[*selection*.call](./d3-selection/control-flow.md#selection_call)
来给具体的元素添加行为。

```js
const drag = d3.drag();
```

## *drag*(*selection*) {#_drag}

[Source](https://github.com/d3/d3-drag/blob/main/src/drag.js)

给特定的[*selection*](./d3-selection.md)应用一个拖拽行为。这个方法通常情况不会直接调用，而是通过[*selection*.call](./d3-selection/control-flow.md#selection_call)
调用。例如，实例化一个拖拽行为，并且应用到选择器上：

```js
d3.selectAll(".node").call(d3.drag().on("start", started));
```

拖拽行为是使用[*selection*.on](./d3-selection/events.md#selection_on)来绑定的拖拽事件监听回调。
所有的事件名称都是`.drag`结尾，所以可以使用如下方式取消监听：

```js
selection.on(".drag", null);
```

Applying the drag behavior also sets the [-webkit-tap-highlight-color](https://developer.apple.com/library/mac/documentation/AppleApplications/Reference/SafariWebContent/AdjustingtheTextSize/AdjustingtheTextSize.html#//apple_ref/doc/uid/TP40006510-SW5) style to transparent, disabling the tap highlight on iOS. If you want a different tap highlight color, remove or re-apply this style after applying the drag behavior.

## *drag*.container(*container*) {#drag_container}

[Source](https://github.com/d3/d3-drag/blob/main/src/drag.js)

传入一个容器*container*（*HTMLElement*,*SVGSVGElement*,*SVGGElement*），将拖拽行为对象操作节点的容器设置为传入的值。默认情况是元素的父节点。

```js
function container() {
  return this.parentNode;
}
```
如果修改了*container*，会影响[拖拽事件](#drag-events)的坐标系统。容器访问器返回的元素会传递给[pointer](./d3-selection/events.md#pointer)。默认的容器访问器，会返回拖拽元素的父节点，这种情况比较适用于SVG或者HTML。但是对于Canvas，可能需要进行调整。

```js
function container() {
  return this;
}
```

Alternatively, the container may be specified as the element directly, such as `drag.container(canvas)`.


## *drag*.filter(*filter*) {#drag_filter}

[Source](https://github.com/d3/d3-drag/blob/main/src/drag.js) · If *filter* is specified, sets the event filter to the specified function and returns the drag behavior. If *filter* is not specified, returns the current filter, which defaults to:

```js
function filter(event) {
  return !event.ctrlKey && !event.button;
}
```

If the filter returns falsey, the initiating event is ignored and no drag gestures are started. Thus, the filter determines which input events are ignored; the default filter ignores mousedown events on secondary buttons, since those buttons are typically intended for other purposes, such as the context menu.

## *drag*.touchable(*touchable*) {#drag_touchable}

[Source](https://github.com/d3/d3-drag/blob/main/src/drag.js) · If *touchable* is specified, sets the touch support detector to the specified function and returns the drag behavior. If *touchable* is not specified, returns the current touch support detector, which defaults to:

```js
function touchable() {
  return navigator.maxTouchPoints || ("ontouchstart" in this);
}
```

Touch event listeners are only registered if the detector returns truthy for the corresponding element when the drag behavior is [applied](#_drag). The default detector works well for most browsers that are capable of touch input, but not all; Chrome’s mobile device emulator, for example, fails detection.

## *drag*.subject(*subject*) {#drag_subject}

[Source](https://github.com/d3/d3-drag/blob/main/src/drag.js)

如果传入了函数入参*subject*，就将subject设置为传入的值或函数。默认的subject获取值：

```js
function subject(event, d) {
  return d == null ? {x: event.x, y: event.y} : d;
}
```

subject代表正在被拖拽的对象，当发生拖拽时，会计算出拖拽对象。
默认的拖拽对象，就是拖拽元素绑定的数据对象；如果元素未设置对象，则计算出鼠标的坐标。

例如，一个在给定搜索半径内选择鼠标附近最近的圆形的访问器：

```js
function subject(event) {
  let n = circles.length,
      i,
      dx,
      dy,
      d2,
      s2 = radius * radius,
      circle,
      subject;

  for (i = 0; i < n; ++i) {
    circle = circles[i];
    dx = event.x - circle.x;
    dy = event.y - circle.y;
    d2 = dx * dx + dy * dy;
    if (d2 < s2) subject = circle, s2 = d2;
  }

  return subject;
}
```

:::tip
If necessary, the above can be accelerated using [*quadtree*.find](./d3-quadtree.md#quadtree_find), [*simulation*.find](./d3-force/simulation.md#simulation_find) or [*delaunay*.find](./d3-delaunay/delaunay.md#delaunay_find).
:::

The returned subject should be an object that exposes `x` and `y` properties, so that the relative position of the subject and the pointer can be preserved during the drag gesture. If the subject is null or undefined, no drag gesture is started for this pointer; however, other starting touches may yet start drag gestures. See also [*drag*.filter](#drag_filter).

The subject of a drag gesture may not be changed after the gesture starts. The subject accessor is invoked with the same context and arguments as [*selection*.on](./d3-selection/events.md#selection_on) listeners: the current event (`event`) and datum `d`, with the `this` context as the current DOM element. During the evaluation of the subject accessor, `event` is a beforestart [drag event](#drag-events). Use *event*.sourceEvent to access the initiating input event and *event*.identifier to access the touch identifier. The *event*.x and *event*.y are relative to the [container](#drag_container), and are computed using [pointer](./d3-selection/events.md#pointer).

## *drag*.clickDistance(*distance*) {#drag_clickDistance}

[Source](https://github.com/d3/d3-drag/blob/main/src/drag.js) · If *distance* is specified, sets the maximum distance that the mouse can move between mousedown and mouseup that will trigger a subsequent click event. If at any point between mousedown and mouseup the mouse is greater than or equal to *distance* from its position on mousedown, the click event following mouseup will be suppressed. If *distance* is not specified, returns the current distance threshold, which defaults to zero. The distance threshold is measured in client coordinates ([*event*.clientX](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX) and [*event*.clientY](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientY)).

## *drag*.on(*typenames*, *listener*) {#drag_on}

[Source](https://github.com/d3/d3-drag/blob/main/src/drag.js) · If *listener* is specified, sets the event *listener* for the specified *typenames* and returns the drag behavior. If an event listener was already registered for the same type and name, the existing listener is removed before the new listener is added. If *listener* is null, removes the current event listeners for the specified *typenames*, if any. If *listener* is not specified, returns the first currently-assigned listener matching the specified *typenames*, if any. When a specified event is dispatched, each *listener* will be invoked with the same context and arguments as [*selection*.on](./d3-selection/events.md#selection_on) listeners: the current event (`event`) and datum `d`, with the `this` context as the current DOM element.

The *typenames* is a string containing one or more *typename* separated by whitespace. Each *typename* is a *type*, optionally followed by a period (`.`) and a *name*, such as `drag.foo` and `drag.bar`; the name allows multiple listeners to be registered for the same *type*. The *type* must be one of the following:

* `start` - after a new pointer becomes active (on mousedown or touchstart).
* `drag` - after an active pointer moves (on mousemove or touchmove).
* `end` - after an active pointer becomes inactive (on mouseup, touchend or touchcancel).

See [*dispatch*.on](./d3-dispatch.md#dispatch_on) for more.

Changes to registered listeners via *drag*.on during a drag gesture *do not affect* the current drag gesture. Instead, you must use [*event*.on](#event_on), which also allows you to register temporary event listeners for the current drag gesture. **Separate events are dispatched for each active pointer** during a drag gesture. For example, if simultaneously dragging multiple subjects with multiple fingers, a start event is dispatched for each finger, even if both fingers start touching simultaneously. See [Drag Events](#drag-events) for more.

## dragDisable(*window*) {#dragDisable}

[Source](https://github.com/d3/d3-drag/blob/main/src/nodrag.js) · Prevents native drag-and-drop and text selection on the specified *window*. As an alternative to preventing the default action of mousedown events (see [#9](https://github.com/d3/d3-drag/issues/9)), this method prevents undesirable default actions following mousedown. In supported browsers, this means capturing dragstart and selectstart events, preventing the associated default actions, and immediately stopping their propagation. In browsers that do not support selection events, the user-select CSS property is set to none on the document element. This method is intended to be called on mousedown, followed by [dragEnable](#dragEnable) on mouseup.

## dragEnable(*window*, *noclick*) {#dragEnable}

[Source](https://github.com/d3/d3-drag/blob/main/src/nodrag.js) · Allows native drag-and-drop and text selection on the specified *window*; undoes the effect of [dragDisable](#dragDisable). This method is intended to be called on mouseup, preceded by [dragDisable](#dragDisable) on mousedown. If *noclick* is true, this method also temporarily suppresses click events. The suppression of click events expires after a zero-millisecond timeout, such that it only suppress the click event that would immediately follow the current mouseup event, if any.

## Drag events

当[拖拽事件监听回调](#drag_on)触发后，会将事件对象当作第一个参数进行传递。
事件对象对外开放了如下字段：

* `target` - 事件对象关联的[drag 行为对象](#drag).
* `type` -“start”, “drag”, “end”，参考[*drag*.on](#drag_on).
* `subject` - 拖拽事件的subject，参考[*drag*.subject](#drag_subject).
* `x` - subject的新的x坐标，参考[*drag*.container](#drag_container).
* `y` - subject新的y坐标，参考[*drag*.container](#drag_container).
* `dx` - 两次拖拽之间的x轴差
* `dy` - 两次拖拽之间的y轴差
* `identifier` - 枚举的触发设备，“mouse”或[touch identifier](https://www.w3.org/TR/touch-events/#widl-Touch-identifier).
* `active` - 正在活跃的拖拽手势。再开始和结束的拖拽事件中，没有这个属性
* `sourceEvent` - 拖拽事件的原型，例如鼠标或者触摸

The *event*.active field is useful for detecting the first start event and the last end event in a sequence of concurrent drag gestures: it is zero when the first drag gesture starts, and zero when the last drag gesture ends.

The *event* object also exposes the [*event*.on](#event_on) method.

This table describes how the drag behavior interprets native events:

| Event        | Listening Element | Drag Event | Default Prevented? |
| ------------ | ----------------- | ---------- | ------------------ |
| mousedown⁵   | selection         | start      | no¹                |
| mousemove²   | window¹           | drag       | yes                |
| mouseup²     | window¹           | end        | yes                |
| dragstart²   | window            | -          | yes                |
| selectstart² | window            | -          | yes                |
| click³       | window            | -          | yes                |
| touchstart   | selection         | start      | no⁴                |
| touchmove    | selection         | drag       | yes                |
| touchend     | selection         | end        | no⁴                |
| touchcancel  | selection         | end        | no⁴                |

The propagation of all consumed events is [immediately stopped](https://dom.spec.whatwg.org/#dom-event-stopimmediatepropagation). If you want to prevent some events from initiating a drag gesture, use [*drag*.filter](#drag_filter).

¹ Necessary to capture events outside an iframe; see [#9](https://github.com/d3/d3-drag/issues/9).
<br>² Only applies during an active, mouse-based gesture; see [#9](https://github.com/d3/d3-drag/issues/9).
<br>³ Only applies immediately after some mouse-based gestures; see [*drag*.clickDistance](#drag_clickDistance).
<br>⁴ Necessary to allow [click emulation](https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW7) on touch input; see [#9](https://github.com/d3/d3-drag/issues/9).
<br>⁵ Ignored if within 500ms of a touch gesture ending; assumes [click emulation](https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW7).

## *event*.on(*typenames*, *listener*) {#event_on}

[Source](https://github.com/d3/d3-drag/blob/main/src/event.js) · Equivalent to [*drag*.on](#drag_on), but only applies to the current drag gesture. Before the drag gesture starts, a [copy](./d3-dispatch.md#dispatch_copy) of the current drag [event listeners](#drag_on) is made. This copy is bound to the current drag gesture and modified by *event*.on. This is useful for temporary listeners that only receive events for the current drag gesture. For example, this start event listener registers temporary drag and end event listeners as closures:

```js
function started(event) {
  const circle = d3.select(this).classed("dragging", true);
  const dragged = (event, d) => circle.raise().attr("cx", d.x = event.x).attr("cy", d.y = event.y);
  const ended = () => circle.classed("dragging", false);
  event.on("drag", dragged).on("end", ended);
}
```
