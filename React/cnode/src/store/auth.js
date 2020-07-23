/*
 * @Author: Zzceaon
 * @Date: 2020-07-23 14:50:55
 * @LastEditTime: 2020-07-23 14:57:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\cnode\src\store\auth.js
 */ 
import { observable, action } from 'mobx'
class Auth {
  @observable isLogin = false  // 没有和页面绑定
  @action
  login() {
    this.isLogin = true
  }
  logout() {
    this.isLogin = false
  }
}

export default new Auth()