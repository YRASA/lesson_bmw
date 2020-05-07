css表示能力很强，现代变革让css具有了编程语言的能力，请问哪些方面技术可以让css更具有程序表达能力?
stylus 变量定义 嵌套 函数 css预编译
- css4 推出了css variable能力,可以实现stylus(预编译)一样的效果,css4是原生支持的
- stylus在头部也可以定义变量 variable = value
    stylus并不需要$开头，但是用$是良好的编程风格
- css3 css4
    每一代都有一些新特性
    css3新特性: animation(复杂动画设计) transition(修改css属性带来过渡) translate3D transform box-shadow flex            linear-gradient flex带来了新的盒子能力(css2盒子模型) box-sizing:border-box(css3的新计算方式) rgba()带有透明特性 grid布局 filter

- 弹性布局 flex
    三栏布局 传统的双飞翼 圣杯
    面试里表达创新flex挺好的
    main为什么放到第一位? 优先显示用户看到的重要主题内容
    我们看到的页面是绘制出来的,重绘,重排
    绘制页面(布局,大小,颜色)需要花时间,主题main区域内容重要，吸引用户眼球,优先绘制很重要,眼睛能够感觉的时间差为60FPS
    order: -1 position/