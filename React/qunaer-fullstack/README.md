## fullstack project
    - 分治思想
        前后端分离
        UI和redux分离
    - cityData null
        actionType
    - action setCityData
    - 是否显示 isCitySelectorVisible false
        ACTION_SET_IS_CITY_SELECTOR_VISIBLE
        isLoadingCityData
        ACTION_SET_IS_LOADING_CITY_DATA
    - 后端API设计流程
        1.MongDB/MySQL 真后端
            mockerAPI 解决了跨域问题
        2.模块化输出API配置
        3.require json  Mocker.mock random
            配置
    - api -> action -> reducer -> connect -> 组件
    - 所有的数据请求都放在action之中
        异步的action中, dispatch多个action
    