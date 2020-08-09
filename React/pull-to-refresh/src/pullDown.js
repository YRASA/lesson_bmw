/*
 * @Author: Zzceaon
 * @Date: 2020-08-05 14:57:32
 * @LastEditTime: 2020-08-05 16:55:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\pull-to-refresh\src\pullDown.js
 */
import hammer from 'hammerjs'

export default function WebPullToRefresh() {
  var defaults = {
    bodyEl: document.body,  // 最外层盒子
    contentEl: null,  // 内容区域
    ptrEl: null,  // Loading
    distance: 40,
    loadingFunction: () => {},  // 返回Promise
    resistance: 2.5  // 阻尼 100px / 2.5
  }
  function init(options) {
    options = {
      ...defaults,
      ...options
    }
    const h = new hammer(options.contentEl)
    h.get('pan').set({ direction: hammer.DIRECTION_VERTICAL })
    h.on('panstart', _panStart)
    h.on('pandown', _panDown)
    h.on('panup', _panUp)
    h.on('panend', _panEnd)
    const ptrClass = options.ptrEl.classList
    let pan = {}
    function _setContentPan(distance) {
      options.contentEl.style.transform = `translate3d(0, ${distance}px, 0)`
      options.ptrEl.style.transform = `translate3d(0, ${distance}px, 0)`
      if (distance > options.distance) {
        ptrClass.add('ptr-refresh')
      } else {
        ptrClass.remove('ptr-refresh')
      }
    }
    function _loading() {
      options.contentEl.style.transform = `translate3d(0, 40px, 0)`
      options.ptrEl.style.transform = `translate3d(0, 40px, 0)`
      options.loadingFunction().then(() => {
        _reset()
      })
    }
    function _reset() {
      options.contentEl.style.transform = `translate3d(0, 0px, 0)`
      options.ptrEl.style.transform = `translate3d(0, 0px, 0)`
    }
    function _panStart() {
      ptrClass.add('ptr-start')
    }
    function _panDown(e) {
      console.log("pandown")
      pan.distance = e.distance / options.resistance
      _setContentPan(pan.distance)
    }
    function _panUp(e) {
      pan.distance = e.distance / options.resistance
      _setContentPan(pan.distance)
    }
    function _panEnd() {
      if (ptrClass.contains('ptr-refresh')) {
        _loading()
      } else {
        _reset()
      }
    }
  }
  return {
    init
  }
}