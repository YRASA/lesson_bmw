/*
 * @Author: Zzceaon
 * @Date: 2020-08-01 15:38:54
 * @LastEditTime: 2020-08-01 17:18:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\ncm-module\src\baseUI\scroll\index.js
 */ 
import React, { forwardRef, useState, useEffect, useRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types'
import BScroll from 'better-scroll'
import styled from 'styled-components'

const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const Scroll = forwardRef((props, ref) => {
  const [bScroll, setBScroll] = useState()
  // 指向初始化 bs 实例需要的 DOM 元素
  const ScrollContainerRef = useRef()
  const { direction, click, refresh, bounceTop, bounceBottom } = props
  const { pullUp, pullDown, onScroll } = props
  useEffect(() => {
    const scroll = new BScroll(ScrollContainerRef.current, {
      scrollX: direction === "horizental",
      scrollY: direction === "vertical",
      probeType: 3,
      click: click,
      bounce: {
        top: bounceTop,
        bottom: bounceBottom
      }
    })
    setBScroll(scroll)
    return () => {
      setBScroll(null)
    }
    // eslint-disable-next-line
  }, [])
  useEffect(() => {
    if (!bScroll || !onScroll) return
    bScroll.on('scroll', (scroll) => {
      onScroll(scroll)
    })
    return () => {
      bScroll.off('scroll')
    }
  }, [onScroll, bScroll])
  useEffect(() => {
    if (!bScroll || !pullUp) return
    bScroll.on('scrollEnd', () => {
      // 判断是否滑动到了底部
      if (bScroll.y <= bScroll.maxScrollY + 100) {
        pullUp()
      }
    })
    return () => {
      bScroll.off('scrollEnd')
    }
  }, [pullUp, bScroll])
  useEffect(() => {
    if (!bScroll || !pullDown) return
    bScroll.on('touchEnd', (pos) => {
      // 判断用户的下拉动作
      if (pos.y > 50) {
        pullDown()
      }
    })
    return () => {
      bScroll.off('touchEnd')
    }
  }, [pullDown, bScroll])
  useEffect(() => {
    if (refresh && bScroll) {
      bScroll.refresh()
    }
  })
  // 一般和 forwardRef 一起使用, ref 已经在 forwardRef 中默认传入
  useImperativeHandle(ref, () => ({
    // 给外界暴露 refresh 方法
    refresh() {
      if (bScroll) {
        bScroll.refresh()
        bScroll.scrollTo(0, 0)
      }
    },
    // 个体外界暴露 getBScroll 方法, 提供 bs 实例
    getBScroll() {
      if (bScroll) {
        return bScroll
      }
    }
  }))
  return (
    <ScrollContainer ref={ScrollContainerRef}>
      {props.children}
    </ScrollContainer>
  )
})

Scroll.defaultProps = {
  direction: "vertical",
  click: true,
  refresh: true,
  onScroll: null,
  pullUpLoading: false,
  pullDownLoading: false,
  pullUp: null,
  pullDown: null,
  bounceTop: true,
  bounceBottom: true
}

Scroll.propTypes = {
  direction: PropTypes.oneOf(['vertical', 'horizental']),  // 滚动的方向
  refresh: PropTypes.bool,  // 是否刷新
  onScroll: PropTypes.func,  // 滚动触发的回调函数
  pullUp: PropTypes.func,  // 上拉加载逻辑
  pullDown: PropTypes.func,  // 下拉加载逻辑
  pullUpLoading: PropTypes.bool,  // 是否显示上拉 loading 动画
  pullDownLoading: PropTypes.bool,  // 是否显示下拉 loading 动画
  bounceTop: PropTypes.bool,  // 是否支持向上吸顶
  bounceBottom: PropTypes.bool  // 是否支持向下吸顶
}

export default Scroll