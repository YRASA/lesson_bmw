/*
 * @Author: Zzceaon
 * @Date: 2020-08-01 11:26:41
 * @LastEditTime: 2020-08-01 16:40:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\ncm-module\src\components\slider\style.js
 */ 
import styled from 'styled-components'
import style from '../../assets/global-style'

export const SliderContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: auto;
  background: white;
  .before{
    position: absolute;
    top: -300px;
    height: 400px;
    width: 100%;
    background: ${style["theme-color"]};
  }
  .slider-container{
    position: relative;
    width: 98%;
    height: 160px;
    overflow: hidden;
    margin: auto;
    border-radius: 6px;
    .slider-nav{
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
    }
    .swiper-pagination-bullet-active{
      background: ${style["theme-color"]};
    }
  }
`