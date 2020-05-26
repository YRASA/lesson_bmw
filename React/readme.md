文章列表
组件 组合heml, css, js 新的自定义标签<PostsApp />
    1.PostsApp
        Tab
            TabItem
        PostsList
            Post
    this.state = [{
        title:,
        id:,
        type:1|2|3
    }]
    TabItem onclick
    this.props.onItemClick(1)
    this.setState({
        filter
    })

## 生命周期
Mounting中为组件的挂载过程
               componentWillMount组件挂载之前
               render组件的渲染方法
               componentDidMount组件挂载完成执行
Updation中为组件数据发生变化的过程
               props独有 
               componentWillReceiveProps 
                触发条件  1. 当一个组件从父组件接收了参数。
                                 2.如果这个组件第一次被父组件加载的时候不会被执行。
                                 3.这个组件之前已经存在于父组件中，并且接收的数据发生变动这时此方法才会被触发。  
               props和states共有
               shouldComponentUpdata  是否要更新数据？需要一个返回值true继续执行下面的生命周期，false就会终止当前组件数                                                            据变动的生命周期继续执行。
               componentWillUpdate  组件将要更新
               render组件的重新渲染
               componentDidUpdata  组件完成更新
Unmounting组件卸载
                componentWillUnmount  组件销毁的时候触发

## 生命周期执行顺序
(1) getDefaultProps()，调用1次

(2) getInitialState()，调用1次

(3) componentWillMount()，调用1次

(4) render()，调用>=1次

(5) componentDidMount()：仅客户端，调用1次

(6) componentWillReceiveProps(object nextProps)，调用>=0次

(7) ShouldComponentUpdate(object nextProps, object nextState)，调用>=0次

(8) componentWillUpdate(object nextProps, object nextState)，调用>=0次

(9) render()，调用>=1次

(10) componentDidUpdate(object prevProps, object prevState)，调用>=0次

(11) componentWillUnmount()，调用1次