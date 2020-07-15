生命周期三个阶段：
  1. 初始化渲染 render componentDidMount
  2. 更新阶段 shouldComponentUpdate render componentDidUpdate
  3. 卸载  componentWillUnMount

1. useState []
2. useEffect []
3. useMemo [] 缓存值
4. useCallback [] 缓存函数
5. useContext
6. useRef ref
7. useReducer(不支持依赖) redux
  依赖:
    1.[xxx] => 多次  componentDidUpdate
    2.[] => 一次  componentDidMopunt

状态码:
  - 301 永久重定向 http -> https
  - 302 临时重定向 meituan.com -> bj.meituan.com  需要登陆权限, 但是没有登陆, 重定向到登陆页面

- relative 保留
- absolute

CORS(跨域资源共享)
Access-Control-allow-origin
Access-Control-allow-method
Access-Control-allow-headers
Access-Control-allow-credentials 是否允许携带cookies
Access-Control-allow-max-age 预检请求, 缓存预检请求的结果

jsonp

ref: 能够让你直接访问 DOM 元素或组件实例