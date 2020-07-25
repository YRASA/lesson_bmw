## Next.js路由
    - <Link><a></a></Link> -> 标记跳转
    - Router.push方法 -> 编程跳转

Link里只支持父标签, 不支持兄弟标签:
1.错误：
    <Link href="/" >
        <span>返回首页</span>
        <span>Icon</span>
    </Link>
2.正确：
    <Link href="/" >
        <a>
            <span>返回首页</span>
            <span>Icon</span>
        </a>
    </Link>

=> 后面如果只有return的就写(), 如果除了return还有其他的, 就写{}
export default () => (
  <>
    <h2>Zzceaon-A Page</h2>
  </>
)
export default () => {
    function foo() {}
  <>
    <h2>Zzceaon-A Page</h2>
  </>
}