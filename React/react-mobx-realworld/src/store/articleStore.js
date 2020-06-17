import { observable, action } from 'mobx';
import axios from 'axios';
const LIMIT = 10;

class ArticleStore {
  // observable state 用 observable 修饰过的变量 变量被修改了 页面就会重新渲染
  // es @ 装饰器
  LIMIT = LIMIT
  // react state 响应式 VM
  @observable articles = {
    all: []
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
  @action
  getArticle(tag, offset = 0) {
    axios.get('/articles', {
      params: {
        tag: tag === 'all' ? null : tag,
        offset,
        limit: LIMIT
      }
    })
    .then(res => {
      // 修改 store
      // this.setState()
      this.articles[tag] = res.articles
      this.total = res.articlesCount
    })
  }
}

export default new ArticleStore();