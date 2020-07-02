阿里winter重学前端
![](https://static001.geekbang.org/resource/image/96/9e/9684130e423b6734b23652f4f0b6359e.jpg)
原则
- https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/hr
  hr
- 对传统div 块级元素 + span 行内 css 的重构
  em i span
  1.p > div
- 语义化的h5方便爬虫, 让算法了解网页的意义 SEO

语义化
1.html5语义化标签
2.找出不合理的地方
    结构相关?
    header + footer 二线公司
    1.aside + article (main/content)
    2.nav + ol>li
    3.hgroup
    <hgroup>
      <h1>Welcome to my WWF</h1>
      <hr/> 不用
      <h2>For a living planet</h2>
    </hgroup>
    HTML <hr> 元素表示段落级元素之间的主题转换（例如，一个故事中的场景的改变，或一个章节的主题的改变）。
    在HTML的早期版本中，它是一个水平线。现在它仍能在可视化浏览器中表现为水平线，但目前被定义为语义上的，而不是表现层面上。所以如果想画一条横线，请使用适当的css样式来修饰。
    4.<abbr title="World Wide Web">WWW<abbr/>
    5.figure
      <figure>
          <img src="/media/examples/elephant-660-480.jpg"
              alt="Elephant at sunset">
          <figcaption>An elephant at sunset</figcaption>
      </figure>
    6.pre + code
      pre + samp