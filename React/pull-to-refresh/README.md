1. 触发下拉
   加上 ptr-start 的类名
2. 下拉过程中

pan.distance > 40px
加上 ptr-refresh 的类名

3. panEnd
   如果 上一步成立 即 pan.distance > 40px
   加上 ptr-loading 的类名
   代表 【正在加载中。。。这一动画】loading 中

由外界 loadingFunction 告知 什么时候加载完毕

4. 加载完毕
   reset 清理工作