import React, { Component } from 'react'
import axios from 'axios'
function reqAction() {
  return axios('http://musicapi.leanapp.cn/search?keywords=Aimer')
}
// 公共代码(前后端通用)
// 前端存mbox 后端存redux
class Header extends Component {
  constructor() {
    super()
    this.state = {
      songs: typeof window === 'object' ? window.songs : null
    }
  }
  componentDidMount() {  // 服务器端没有componentDidMount
    // 客户端才有componentDidMount 客户端请求数据回来渲染
    // reqAction().then(res => {
    //   console.log(res)
    //   this.setState({
    //     songs: res.data
    //   })
    // })
  }
  render() {
    const { songs } = this.state
    return (
      <div>
        Hello World
        {songs?.result?.songs.map((s, i) => {
          return <li key={i}>{s.name}</li>
        })}
      </div>
    )
  }
}
Header.loadData = reqAction
export default Header