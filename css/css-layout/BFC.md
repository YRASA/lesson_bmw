## 格式化上下文
koa: ctx === context
token: 泛指

```js
let a = 123;
function foo() {
    return a + 1;
}
foo()
```

## BFC
block-formating-context

## 新建一个 BFC
block containers that are not block boxes
- float
- absolute
- display: inline-blocks || table-cell || table-caption || flex || grid
- overflow 不为 visiable
- 根元素默认新建 BFC

## flex 布局
react-native 只支持flex, RN已经证明了只用flex也是可以很好的完成布局的

## float
文字环绕
后来才用来布局, float清除
clear: both(left, right)

## BFC规则
- 盒子在垂直方向上, 从上往下依次布局
- 垂直方向上的距离由 margin 决定, 同一个BFC之内垂直方向上block-level-box margin会折叠(留白, 够了就行)
- 由于有float元素, 一个盒子的大小可能会缩小, 除非它新建一个BFC(overflow清除浮动)
- BFC区域不会与float重叠(左侧固定, 右边自适应)

## layout
normal flow
position
float: 本意: 文字环绕, 后才来用来布局(几行几列)
flex