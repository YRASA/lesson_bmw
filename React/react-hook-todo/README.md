- Input 表单组件
    List dataSource
    Layout
    Tab activeKey onChange
      TabPane tab key
    Icon
    Spin

- BEM命名(Block Element Modifier)
  - BEM是一种前端命名方法论，主要是针对CSS，意思是块（Block）、元素（Element）、修饰符（Modifier）的简写。这种命名方法让CSS便于统一团队开发规范和方便维护。
  - BEM规定是块和元素之间用—连接，元素和修饰符之间用_连接。
  block {}
  block__element {}
  block--modifier {}
  block 代表了更高级别的抽象或组件。
  block__element 代表 .block 的后代，用于形成一个完整的 .block 的整体。
  block--modifier 代表 .block 的不同状态或不同版本。
  .sub-block__element {}
  .sub-block--modifier {}