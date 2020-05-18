import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

// 页面
// - 列表: /?tab=all
// - 详情: /topic/
// let tab =
// mv-vm
// view 视图
// model 数据
// vm 绑定: model变了 view自动更新
class App extends React.Component {
  constructor() {
    super()
    // model
    this.state = {
      value: '123456',
      tabs: [
        {content: '全部', param: 'all'},
        {content: '招聘', param: 'job'},
        {content: '精华', param: 'good'},
        {content: '分享', param: 'share'},
        {content: '问答', param: 'ask'},
      ],
      tab: 'all',
      isLoading: true,
      lists: [] // 文章列表
    }
  }
  // 生命周期
  // App 被 reactDom 渲染到 pc 上
  // 渲染: 一套流程(生命周期)
  handleGetPost = () => {
    const { tab } = this.state;
    axios({
      url: 'https://cnodejs.org/api/v1/topics',
      params: {
        // 渲染传chotent 后端传param
        tab: tab,
        page: 1,
        limit: 40
      }
    })
    .then(res => {
      // console.log(res.data)
      // 修改状态
      this.setState({
        lists: res.data.data,
        isLoading: false
      })
    })
    .catch(err => {
      this.setState({
        isLoading: false
      })
    })
  }
  componentDidMount() {
    // 总数/40 = 总页数
    this.handleGetPost()
  }
  // 事件绑定推荐用=>函数
  handleTabChange = (event) => {
    // =>函数的this为定义的时候位置决定
    // 就不用 bind(this)了
    // 知道点了哪一项
    // event.target 点的对象
    // console.log(event.target)
    const tab = event.target.getAttribute('data-tab')
    // 发个请求
    this.setState({
      tab,
      isLoading: true,
    }, () => {
      // setState 异步
      this.handleGetPost()
    })
    // handleGetPost

  }
  handleChange = (event) => {
    this.setState({
      // event.target.value: 输入内容
      value: event.target.value
    })
  }
  render() {
    const { lists, tabs, tab, isLoading, value } = this.state;
    // js表达式都用{}包起来
    // view
    return (
      <div>
        {/* 受控组件: value + onChange, 输入框里面的内容受本组件里面的state控制 */}
        {/* 假如取到用户输入了什么? this.state.value */}
        {/* 非受控组件: defaultValue */}
        {/* 假如取到用户输入了什么? 取到input真实的dom节点 dom.value */}
        {/* 涉及dom操作,现代前端框架不提倡 */}
        <input type="text" placeholder="123" value={value}
        onChange={this.handleChange} />
        <input type="text" placeholder="123" defaultValue={value}
        id="name" />
        {/* &&： 第一个成立  第二个也要成立 */}
        {/* || : 第一个成立就执行第一个 不然就执行第二个 */}
        {/* react 不渲染那些值为 空数组 false null undefined 的内容 */}
        {isLoading && '正在加载中...'}
        { lists.length === 0 && '暂无文章请重试' }
        {
          tabs.map((tabObj, i) => {
            return (
              // data-tab={tabObj.param}埋点:点了哪一项
              <div key={i} data-tab={tabObj.param}
              className={tabObj.param === tab ? 'hight-light' : ''}
              onClick={this.handleTabChange}>
                { tabObj.content }
              </div>
            )
          })
        }
        {
          // map 返回, 数组, react 如果 jsx(html + js) 存在数组, react 自己展开数组里面的每一项
          // react 列表渲染
          // forEach
          lists.map((list, i) => {
            return (
              <div key={i}>
                { list.title }
              </div>
            )
          })
        }
      </div>
    )
  }
}
// 默认导出
export default App;
//命名导出
// export const name = 'zc';
