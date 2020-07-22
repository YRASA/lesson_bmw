<!--
 * @Author: Zzceaon
 * @Date: 2020-07-21 01:35:53
 * @LastEditTime: 2020-07-22 22:18:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\HookDemo\demo1\README.md
--> 
- hook包含了无状态和有状态组件
- React 16.8以上才有hook特性
- useState 通过顺序记住(必须以完全一样的顺序), 且不能存在于条件判断语句中
- useEffect 代替生命周期
- 生命周期: 副作用
- useEffect是异步的(父组件状态改变也会触发useEffect)
- useContext 解决父子传值(状态全局化, 统一管理)
    createContext 创建共享
- useReducer redux 状态共享
- useRef 还可以保存变量
- useMemo 存状态
- useCallback 存方法

useReducer + useContext => Redux

shouldComponentUpdate在组件更新之前对比状态, 状态变化了才更新。useEffect因为父组件更新了, 子组件也会跟着更新, 假如子组件有向外请求数据, 父组件一更新, 子组件就会向外请求数据, 网页就会出现性能问题, 甚至崩溃, 可以用useMemo来解决这样的问题

自定义hook组件以use开头
