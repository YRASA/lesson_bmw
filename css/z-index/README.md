## 网页是沿着Z轴展开的

## 层叠上下文形成 z-index 调整的就是这个层叠上下文
- 1.position 不为 static
- 2.filter(将模糊或颜色偏移等图形效果应用于元素。滤镜通常用于调整图像，背景和边框的渲染) transform perspective 不为none
- 3.will-change(将要改变)

## layers
- 共同点: 都是Z轴顺序
- transform: translate3d
- will-change
- perspective
- backface-visibility(属性定义当元素不面向屏幕时是否可见) 为 hidden
    - visible	背面是可见的
    - hidden	背面是不可见的
- video
- CSS3 animation动画开始的时候

## js
js -> relayout -> repaint -> composite(合成) -> GPU

## 提升 layers 的好处
- 当前这个layers不会影响其他layers
- 对于 transform opacity 产生变化不会经过 relayout repaint 直接跃迁到 composite

video
有 3D transform
backface-visibility 为 hidden
对 opacity、transform、fliter、backdropfilter(可以让你为一个元素后面区域添加图形效果（如模糊或颜色偏移）。 因为它适用于元素背后的所有元素，为了看到效果，必须使元素或其背景至少部分透明) 应用了 animation 或者 transition（需要是 active 的 animation 或者 transition，当 animation 或者 transition 效果未开始或结束后，提升合成层也会失效）
will-change 设置为 opacity、transform、top、left、bottom、right（其中 top、left 等需要设置明确的定位属性，如 relative 等）

## flex
- 主轴
- 交叉轴
flex容器:
display: flex
flex-direction: row cloumn -> 决定主轴
flex-wrap: 规定flex容器是单行或者多行, 同时横轴的方向决定了新行堆叠的方向
justify-content: 主轴
align-items 定义flex子项在flex容器的当前行的侧轴（纵轴）方向上的对齐方式
align-content: 在弹性容器内的各项没有占用交叉轴上所有可用的空间时对齐容器内的各项（垂直）

flex容器里面的每一项:
order: 设置或检索弹性盒模型对象的子元素出现的順序
flex属性顺序:
    - flex-grow 
    - flex=shrink
    - flex-basis 用于设置或检索弹性盒伸缩基准值
align-self: 定义flex子项单独在侧轴（纵轴）方向上的对齐方式