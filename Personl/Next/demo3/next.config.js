/*
 * @Author: Zzceaon
 * @Date: 2020-07-26 18:20:37
 * @LastEditTime: 2020-07-26 18:28:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Personl\Next\demo3\next.config.js
 */ 
const withCss = require('@zeit/next-css')

if(typeof require !== 'undefined') {
  require.extensions['.css'] = file => {}
}

module.exports = withCss({})