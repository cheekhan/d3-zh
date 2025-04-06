# Selecting elements

选择器 *selection* 是DOM中元素的集合。元素的标识方式，采用标准的选择器[selectors](http://www.w3.org/TR/selectors-api/)，例如通过 `.fancy` 选择所有样式类是 *fancy* 的元素，或者用 `div` 选择出所有的DIV 元素。

选择器方法有两种形式： **select** 和 **selectAll**：第一个方法只选择匹配的第一个元素，第二个方法选择匹配到的所有元素。[d3.select](#select) 和 [d3.selectAll](#selectAll) 这两个方法，会查询整个文档流；可以在查询结果上继续调用[*selection*.select](#selection_select) 和 [*selection*.selectAll](#selection_selectAll)，这样再次查询的范围就圈定在上次查询的结果之上。还有便捷方法 [*selection*.selectChild](#selection_selectChild) and [*selection*.selectChildren](#selection_selectChildren)直接选择子元素。

按照开发管理，支持链式调用的方法（返回选择器自身，例如[*selection*.attr](./modifying.md#selection_attr)）使用4个空格进行缩进，而返回新选择器的方法使用2个空格缩进，使代码更加直观：

```js
d3.select("body")
  .append("svg")
    .attr("width", 960)
    .attr("height", 500)
  .append("g")
    .attr("transform", "translate(20,20)")
  .append("rect")
    .attr("width", 920)
    .attr("height", 460);
```

## selection() {#selection}

[Source](https://github.com/d3/d3-selection/blob/main/src/selection/index.js) · [Selects](#select) 选择根元素, `document.documentElement`.

```js
const root = d3.selection();
```

这个函数也可以用来测试选择结果是否为选择器(`instanceof d3.selection`) 也可以拓展选择器原型，例子是一个判断复选框的函数：

```js
d3.selection.prototype.checked = function(value) {
  return arguments.length < 1
      ? this.property("checked")
      : this.property("checked", !!value);
};
```

使用的例子：

```js
d3.selectAll("input[type=checkbox]").checked(true);
```

## select(*selector*) {#select}

[Source](https://github.com/d3/d3-selection/blob/main/src/select.js) · 选择出和特定选择器 *selector* 匹配的第一个元素。

```js
const svg = d3.select("#chart");
```

如果没有元素匹配，就返回空的元素集；如果多个元素都匹配，只返回元素集的第一个元素。例子是选择`a` 标签：

```js
const anchor = d3.select("a");
```

如果函数入参 *selector* 不是字符串，那么就选择这个特定的元素。一般是将一个已有的元素（例如`document.body`）包装为一个选择器：

```js
d3.select(document.body).style("background", "red");
```

这个例子，是让一个P标签，在点击时文字变红：

```js
d3.selectAll("p").on("click", (event) => d3.select(event.currentTarget).style("color", "red"));
```

## selectAll(*selector*) {#selectAll}

[Source](https://github.com/d3/d3-selection/blob/main/src/selectAll.js) · 选择所有和给定选择器 *selector* 匹配的元素。

```js
const p = d3.selectAll("p");
```

元素将按照在文档流中的顺序（从上到下）被选择。如果*selector*的值是null、undefined，或者没有匹配到的元素，则函数返回空选择器。

如果传入的是节点集合的引用，则返回一个包装后的节点数组。常用于对已知节点列表的使用，例如 `this.childNodes` 或 `document.links`等。 节点集合，可以是伪数据对象或者是可迭代对象：

```js
d3.selectAll(document.links).style("color", "red");
```

## *selection*.select(*selector*) {#selection_select}

[Source](https://github.com/d3/d3-selection/blob/main/src/selection/select.js) · 使用给定选择器字符串*selector* 对选择集的每一个元素的子元素进行匹配，并且返回匹配到的第一个元素：

```js
const b = d3.selectAll("p").select("b"); // the first <b> in every <p>
```

上面例子说明了遍历选择器集合，对集合的每一项分别调用select，然后将匹配到的结果按照集合遍历的顺序，拼接成一个新的集合进行返回。如果在遍历过程中，选择器字符串没匹配到元素，当前位置就返回一个null（如果函数参数*selector*是null，则返回一个返回空集合），对于匹配到多个子选择器时，只返回第一个子选择器。

在遍历选择器集合时，如果当前选择器已经绑定了数据，那么匹配出来的子选择器，会自动绑定这个数据。

函数参数*selector*支持传入函数。选择器集合遍历调用函数，集合元素当作调用函数时的*this* ，同时函数会按顺序传入三个参数：集合元素绑定的数据*d*，元素在集合中的索引*i*，和整个集合*nodes*。函数应该返回一个元素或者null：

```js
const previous = d3.selectAll("p").select(function() {
  return this.previousElementSibling;
});
```

和[*selection*.selectAll](#selection_selectAll)不同，*selection*.select 不会改变分组，会保留调用时元素集合的顺序和结构，并且将绑定的数据传递给子元素。参阅[嵌套Selections](http://bost.ocks.org/mike/nest/)、[Selections是如何工作的](http://bost.ocks.org/mike/selection/)、[data join](./joining.md)

:::warning CAUTION
*selection*.select propagates the parent’s data to the selected child.
:::

## *selection*.selectAll(selector) {#selection_selectAll}

[Source](https://github.com/d3/d3-selection/blob/main/src/selection/selectAll.js) · 迭代一个已经选出来的元素集合，查询每一个元素符合*selector* 的子元素。结果是一个嵌套的数组。

```js
const b = d3.selectAll("p").selectAll("b"); // every <b> in every <p>
```

选出来的子元素集合，按照父节点的来进行分组，所以是一个嵌套的数据。如果某个索引上没选择出子元素，该位置就使用null占位。

在这个API中，数据不会自动关联子元素，需要调用额外的API，给子元素绑定数据。

函数入参*selector* 同样可以是一个函数，对父元素集合中的每个元素，调用函数。函数入参依旧是遍历到的那个元素当作*this*，同时函数会按顺序传入三个参数：集合元素绑定的数据*d*，元素在集合中的索引*i*，和整个集合*nodes*。函数返回值需要是元素集合（或者可迭代对象、类数组对象等）：

```js
const sibling = d3.selectAll("p").selectAll(function() {
  return [
    this.previousElementSibling,
    this.nextElementSibling
  ];
});
```

和 [*selection*.select](#selection_select) 不同， *selection*.selectAll 会影响分组：选择出来的子元素，会根据其父元素进行分组。参阅[嵌套Selections](http://bost.ocks.org/mike/nest/)、[Selections是如何工作的](http://bost.ocks.org/mike/selection/)、[data join](./joining.md)


## *selection*.filter(*filter*) {#selection_filter}

[Source](https://github.com/d3/d3-selection/blob/main/src/selection/filter.js) · Filters the selection, returning a new selection that contains only the elements for which the specified *filter* is true. For example, to filter a selection of table rows to contain only even rows:

```js
const even = d3.selectAll("tr").filter(":nth-child(even)");
```

This is approximately equivalent to using [d3.selectAll](#selectAll) directly, although the indexes may be different:

```js
const even = d3.selectAll("tr:nth-child(even)");
```

The *filter* may be specified either as a selector string or a function. If the *filter* is a function, it is evaluated for each selected element, in order, being passed the current datum (*d*), the current index (*i*), and the current group (*nodes*), with *this* as the current DOM element (*nodes*[*i*]). Using a function:

```js
const even = d3.selectAll("tr").filter((d, i) => i & 1);
```

Or using [*selection*.select](#selection_select) (and avoiding an arrow function, since *this* is needed to refer to the current element):

```js
const even = d3.selectAll("tr").select(function(d, i) { return i & 1 ? this : null; });
```

Note that the `:nth-child` pseudo-class is a one-based index rather than a zero-based index. Also, the above filter functions do not have precisely the same meaning as `:nth-child`; they rely on the selection index rather than the number of preceding sibling elements in the DOM.

The returned filtered selection preserves the parents of this selection, but like [*array*.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), it does not preserve indexes as some elements may be removed; use [*selection*.select](#selection_select) to preserve the index, if needed.

## *selection*.selectChild(*selector*) {#selection_selectChild}

[Source](https://github.com/d3/d3-selection/blob/main/src/selection/selectChild.js) · Returns a new selection with the (first) child of each element of the current selection matching the *selector*.

```js
d3.selectAll("p").selectChild("b") // the first <b> child of every <p>
```

If no *selector* is specified, selects the first child (if any). If the *selector* is specified as a string, selects the first child that matches (if any). If the *selector* is a function, it is evaluated for each of the children nodes, in order, being passed the child (*child*), the child’s index (*i*), and the list of children (*children*); the method selects the first child for which the selector return truthy, if any.

:::warning CAUTION
*selection*.selectChild propagates the parent’s data to the selected child.
:::

## *selection*.selectChildren(*selector*) {#selection_selectChildren}

[Source](https://github.com/d3/d3-selection/blob/main/src/selection/selectChildren.js) · Returns a new selection with the children of each element of the current selection matching the *selector*. If no *selector* is specified, selects all the children. If the *selector* is specified as a string, selects the children that match (if any). If the *selector* is a function, it is evaluated for each of the children nodes, in order, being passed the child (*child*), the child’s index (*i*), and the list of children (*children*); the method selects all children for which the selector return truthy.

## *selection*.selection() {#selection_selection}

[Source](https://github.com/d3/d3-selection/blob/main/src/selection/index.js) · Returns the selection (for symmetry with [*transition*.selection](../d3-transition/selecting.md#transition_selection)).

## matcher(*selector*) {#matcher}

[Source](https://github.com/d3/d3-selection/blob/main/src/matcher.js) · Given the specified *selector*, returns a function which returns true if `this` element [matches](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches) the specified selector. This method is used internally by [*selection*.filter](#selection_filter). For example, this:

```js
const div = selection.filter("div");
```

Is equivalent to:

```js
const div = selection.filter(d3.matcher("div"));
```

(Although D3 is not a compatibility layer, this implementation does support vendor-prefixed implementations due to the recent standardization of *element*.matches.)

## selector(*selector*) {#selector}

[Source](https://github.com/d3/d3-selection/blob/main/src/selector.js) · Given the specified *selector*, returns a function which returns the first descendant of `this` element that matches the specified selector. This method is used internally by [*selection*.select](#selection_select). For example, this:

```js
const div = selection.select("div");
```

Is equivalent to:

```js
const div = selection.select(d3.selector("div"));
```

## selectorAll(*selector*) {#selectorAll}

[Source](https://github.com/d3/d3-selection/blob/main/src/selectAll.js) · Given the specified *selector*, returns a function which returns all descendants of `this` element that match the specified selector. This method is used internally by [*selection*.selectAll](#selection_selectAll). For example, this:

```js
const div = selection.selectAll("div");
```

Is equivalent to:

```js
const div = selection.selectAll(d3.selectorAll("div"));
```

## window(*node*) {#window}

[Source](https://github.com/d3/d3-selection/blob/main/src/window.js) · Returns the owner window for the specified *node*. If *node* is a node, returns the owner document’s default view; if *node* is a document, returns its default view; otherwise returns the *node*.

## style(*node*, *name*) {#style}

[Source](https://github.com/d3/d3-selection/blob/main/src/selection/style.js) · Returns the value of the style property with the specified *name* for the specified *node*. If the *node* has an inline style with the specified *name*, its value is returned; otherwise, the [computed property value](https://developer.mozilla.org/en-US/docs/Web/CSS/computed_value) is returned. See also [*selection*.style](./modifying.md#selection_style).
