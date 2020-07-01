/*
 * @Author: Zzceaon
 * @Date: 2020-06-17 11:05:20
 * @LastEditTime: 2020-07-01 21:33:10
 * @LastEditors: Please set LastEditors
 * @Description: store
 * @FilePath: \Course\React\react-mobx-realworld\src\store\articleStore.js
 */ 
import { observable, action } from 'mobx';
import axios from 'axios';
const LIMIT = 10;
// observable 可观测的 === react state
// action 修改你的 state 你必须发起一个action
class ArticleStore {
  // observable state 用 observable 修饰过的变量 变量被修改了 页面就会重新渲染
  // es @ 装饰器
  LIMIT = LIMIT
  // react state 响应式 VM
  @observable articles = {
    all: [],
    tag1: [],
    tag2: []
  }

  // getArticle = action((tag, offset = 0) => {
  //   axios.get('/articles', {
  //     params: {
  //       tag: tag === 'all' ? null : tag,
  //       offset,
  //       limit: LIMIT
  //     }
  //   })
  //   .then(res => {
  //     // 修改 store
  //     // this.setState()
  //     this.articles[tag] = res.articles
  //   })
  // })
  @observable total = 0;
  // 繁杂的逻辑尽量写到store
  // tags
  @observable tags = [];  // 不需要写在 reducer
  @observable isLoading = true;
  @observable activityKey = 'all';
  @observable pageCurrent = 1;

  // 文章列表: tag 每页总数 第几页
  @action
  getArticle(tag, offset = 0) {
    this.isLoading = true;
    axios.get('/articles', {
      params: {
        tag: this.activityKey === 'all' ? null : this.activityKey,
        offset: offset * LIMIT,
        limit: LIMIT
      }
    })
    .then(res => {
      this.isLoading = false;
      // 修改 store
      // this.articles = {}  // x
      // 仅仅修改某个属性
      this.articles[tag] = res.articles;
      this.total = res.articlesCount;
    })
  }
  handleTabChange = (key) => {
    // console.log(key);
    this.pageCurrent = 1;
    this.activityKey = key;
    this.getArticle(key);
  }
  // {} action 想支持函数 中间件
  @action
  getTags() {
    axios.get('/tags').then(res => {
      // 修改 state
      // console.log(res.tags);
      this.tag = res.tags
    })
  }
  handleAddTab = (tab) => {
    this.activityKey = tab;
    this.articles[tab] = [];
    this.pageCurrent = 1;
    this.getArticle(tab)
  }
  handlePageChange = (page) => {
    this.pageCurrent = page;
  }
}

export default new ArticleStore();