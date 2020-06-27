<!--
 * @Author: Zzceaon
 * @Date: 2020-06-27 12:15:40
 * @LastEditTime: 2020-06-27 13:33:07
 * @LastEditors: Please set LastEditors
 * @Description: README.md
 * @FilePath: \Course\interview\node\url\README.md
--> 
1.queryString 是常考题
  前端入手为主
  - 反其道而行之，前后端都有解决方案，全栈工程师
  - queryString queryObject query js|php|go a = ?
  - 前端split很无力, 但后端url 模块又不能用
    有没有什么方法改善下?
  应用的场景
  http://baidu.com:8080/test/h?query=js&a=1#node
  解析成查询对象 {query: js, a: 1}

  当前的url 需要解析出来查询对象, 作为 ajax(axios) 查询
