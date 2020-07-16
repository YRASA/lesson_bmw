em: 相对于自己的 font-size, (相对于父元素的 font-size 是错误的观点)
rem: 相对于html的font-size
1.font-size 多少
2.如何由设计稿快速还原

DPR: device piex ratio 设备真实的像素 / 1px = 2(3)
css 1px 在不同设备上面 渲染出来的像素是不一样的 2px(iphone6) 3px(iphoneX)

想要 1px
1.meta init-scale: 0.5 所有的元素扩大0.5倍
  我写元素宽高 按照扩大两倍之后的写
  一个元素 本来 20*20
  必须写成 40*40
  所以我们设计稿就需要扩大两倍, 这样量取的时候, 量得的尺寸就是扩大两倍之后的尺寸
2.等比缩放
  屏幕划分 10等份
  750 / 10 = 75 => 0.5
  1125 / 10 = 112.5 => 0.33333
  1份 就是 1rem , html: font-size 75px 或者是 112.5px