import React from 'react'
// import './style.css'
import styles from './style.css'  // css-module

export default function App() {
  return (
    <div
      // className="swiper-container"
      className={styles['swiper-container']}
    >
      {/* webapck.config.js -> devServer   非相对路径 */}
      <img src="/1.jpg" alt="图片加载出错"/>
      this is a App
    </div>
  )
}