/*
 * @Author: Zzceaon
 * @Date: 2020-08-01 11:26:17
 * @LastEditTime: 2020-08-01 13:53:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\ncm-module\src\components\slider\index.js
 */ 
import React, { useEffect, useState } from 'react';
import { SliderContainer } from './style'
import "swiper/dist/css/swiper.css";
import Swiper from "swiper"

function Slider(props) {
  const [sliderSwiper, setSliderSwiper] = useState(null)
  const { bannerList } = props

  useEffect(() => {
    if (bannerList.length && !sliderSwiper) {
      let newSliderSwiper = new Swiper(".slider-container", {  // .slider-container: 文档要求
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false  // 用户操作swiper之后，是否禁止autoplay
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
        
      })
      setSliderSwiper(newSliderSwiper)
    }
  }, [bannerList.length, sliderSwiper])

  return (
    <SliderContainer>
      <div className="before"></div>
      <div className="slider-container">
        <div className="swiper-wrapper">
          {
            bannerList.map(slider => {
              return (
                <div className="swiper-slide" key={slider.imageUrl}>
                  <div className="slider-nav">
                    <img src={slider.imageUrl} width="100%" height="100%" alt="推荐" />
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="swiper-pagination">
          
        </div>
      </div>
    </SliderContainer>
  )
}

export default React.memo(Slider)