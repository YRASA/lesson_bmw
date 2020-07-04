浅谈block, inline和inline-block的区别
block 块元素    inline 内联元素
常见的块元素有：div, p, h1~h6, table, form, ol, ul等
常见的内联元素有：span, a, strong, em, label, input, select, textarea, img, br等

display:block特点
1、独占一行，多个block元素另起一行，默认情况下，block元素宽度自动填满其父元素宽度
2、block元素可以设置width,height属性。块元素即使设置了宽度,仍然是独占一行。
3、block元素可以设置margin和padding属性。

display:inline特点
1、inline元素不会独占一行，多个相邻的行内元素会排列在同一行里，直到一行排列不下，才会新换一行，其宽度随元素的内容而变化
2、inline元素设置width,height属性无效。
3、inline元素的margin和padding属性，水平方向的padding-left, padding-right, margin-left, margin-right都产生边距效果；但竖直方向的padding-top, padding-bottom, margin-top, margin-bottom不会产生边距效果。
可以看出对inline元素设置宽度不起作用，它的宽度是随着内容的长度变化的

display:inline-block特点
简单的说，就是将对象呈现为inline对象，让block元素不再独占一行，多个block元素可以同排一行，且元素具有block的属性，可设置宽高，是block和inline元素的综合体。