/*
 * @Author: Zzceaon
 * @Date: 2020-07-26 18:08:44
 * @LastEditTime: 2020-07-26 18:10:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\Next\demo3\next.config.js
 */ 
const withCss = require('@zeit/next-css')

if(typeof require !== 'undefined') {
  require.extensions['.css'] = file => {}
}

module.exports = withCss({})