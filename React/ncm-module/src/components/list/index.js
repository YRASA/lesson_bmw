/*
 * @Author: Zzceaon
 * @Date: 2020-08-01 14:05:07
 * @LastEditTime: 2020-08-06 06:14:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\ncm-module\src\components\list\index.js
 */ 
import React from 'react';
import { ListWrapper, ListItem, List } from './style'
import { getCount } from '../../api/utils'
import LazyLoad from 'react-lazyload'
import { withRouter } from 'react-router-dom'

function RecommendList(props) {
  const enterDetail = (id) => {
    props.history.push(`/recommend/${id}`)
  }
  return (
    <ListWrapper>
      <h1 className="title"> 推荐歌单 </h1>
      <List>
        {
          props.recommendList.map((item, index) => {
            return (
              <ListItem
                key={item.id + index}
                onClick={() => enterDetail(item.id)}
              >
                <div className="img_wrapper">
                  {/* 提供文字阴影 */}
                  <div className="decorate"></div>
                  {/* 加此参数可以减小请求的图片资源大小 */}
                  <LazyLoad placeholder={<img width="100%" height="100%" src={require('./music.png')} alt="music" />}>
                    <img src={item.picUrl + "?param=300x300"} width="100%" height="100%" alt="music"/>
                  </LazyLoad>
                  <div className="play_count">
                    <i className="iconfont play">&#xe60c;</i>
                    <span className="count">{getCount (item.playCount)}</span>
                  </div>
                </div>
                <div className="desc">{item.name}</div>
              </ListItem>
            )
          })
        }
      </List>
    </ListWrapper>
  )
}

// 采用withRouter的理由: List作为RecommendList的子组件, 并不能从props拿到history变量, 无法跳转路由
export default React.memo(withRouter(RecommendList))