<!--
 * @Author: Zzceaon
 * @Date: 2020-06-17 11:03:35
 * @LastEditTime: 2020-06-26 16:59:20
 * @LastEditors: Please set LastEditors
 * @Description: README.md
 * @FilePath: \Course\React\react-mobx-realworld\README.md
--> 
在package.json中：
只有三个依赖，分别是react，react-dom,react-scripts,依赖为什么这么少，是因为像webpack，babel等等都是被creat react app封装到了react-scripts这个项目当中，包括基本启动命令 都是通过调用react-scripts这个依赖下面的命令进行启动的，creat react app搭建出来的项目默认支持这4种命令，start以开发模式启动项目，build将整个项目进行构建，test进行测试，eject，会将原本creat react app对webpack，babel等相关配置的封装弹射出来，如果我们要将creat react app配置文件进行修改，现有目录下是没有地方修改的，此时，我们就可以通过eject命令将原本被封装到脚手架当中的命令弹射出来，然后就可以在项目的目录下看到很多配置文件。

建议：
安装完毕后,首先执行npm run eject;

补救方法：
先git add .
然后git commit -m “init”
然后再npm run eject

## 状态
```js
let isLogin = false

isLogin = true  // xxx
```
let arr = [0, 1, 2, 3]  // 状态
let sum  // 依赖 arr

如果 arr 变化 输出 console.log
<!-- log -->

## mbox mbox-react
1.Provider
2.const store = {
  articleStore
}
3.取出 store @inject('articleStore') @observer
4.怎么取: 通过 props 取出来 (组件的状态, action)

## 响应式
angular rxjs vue mbox