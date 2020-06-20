import React, { Component, Fragment } from 'react'
import axios from 'axios'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'
import Boss from './Boss'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class Xiaojiejie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
  }

  // componentWillMount() {
  //   console.log('componentWillMount---')
  // }

  // componentDidMount() {
  //   console.log('componentDidMount---')
  // }

  // shouldComponentUpdate() {
  //   console.log('1-shouldComponentUpdate---')
  //   return true
  // }

  // componentWillUpdate() {
  //   console.log('2-componentWillUpdate---')
  // }

  // componentDidUpdate() {
  //   console.log('4-componentDidUpdate---')
  // }

  // componentWillReceiveProps() {
  //   console.log('componentWillReceiveProps---')
  // }

  componentDidMount() {
    axios.get('https://www.easy-mock.com/mock/5eedaf09aa78635a7b462543/xiaojiejie')
      .then((res) => {
        console.log('axios 获取数据成功:'+JSON.stringify(res))
        this.setState({
          list: res.data.data
        })
      })
      .catch((error) => {console.log('axios 获取数据失败:'+error)})
  }

  render() {
    // console.log('3-render---')
    return ( 
      // flex
      <Fragment>
        {/* 注释格式 */}
        <div>
          <label htmlFor="input">增加服务:</label>
          <input
            id="input"
            className="input"
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
            ref={(input) => {this.input=input}}
          />
          <button onClick={this.addList.bind(this)}>增加服务</button>
        </div>
        <ul ref={(ul) => {this.ul=ul}}>
          <TransitionGroup>
            {
              this.state.list.map((item, index) => {
                return (
                    <CSSTransition
                      timeout={2000}
                      classNames="boss-text"
                      unmountOnExit
                      appear={true}
                      key={index+item}
                    >
                      <XiaojiejieItem
                        key={index+item}
                        content={item}
                        index={index}
                        list={this.state.list}
                        deleteItem={this.deleteItem.bind(this)}
                      />
                    </CSSTransition>
                )
              })
            }
          </TransitionGroup>
        </ul>
        <Boss />
      </Fragment>
     );
  }

  inputChange() {
    // console.log(this)
    // this.state.inputValue = e.target.value
    this.setState({
      inputValue: this.input.value
    })
  }

  // 增加列表
  addList() {
    this.setState({
      inputValue: '',
      list: [...this.state.list, this.state.inputValue]
    })
  }

  // 删除列表项
  deleteItem(index) {
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}
 
export default Xiaojiejie