/*
 * @Author: Zzceaon
 * @Date: 2020-07-24 14:55:31
 * @LastEditTime: 2020-07-24 17:20:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\js\手势\event.js
 */ 
window.addEventListener('contextmenu', e => e.preventDefault())  // 禁止右键菜单
const my = document.querySelector('#my');
// 即兼容mobile pc
// mousedown
my.addEventListener('mousedown', (event) => {
  start(event);
  function mouseMove(e) {
    move(e);
  }
  function mouseEnd(e) {
    end(e)
    document.removeEventListener('mousemove', mouseMove);
    document.removeEventListener('mouseup', mouseEnd);
  }
  document.addEventListener('mousemove', mouseMove)
  document.addEventListener('mouseup', mouseEnd)
})
my.addEventListener('touchstart', (event) => {
  const touch = event.changedTouches[0];
  // console.log(touch);
  start(touch);
})
my.addEventListener('touchmove', (event) => {
  const touch = event.changedTouches[0];  // 一根手指
  move(touch);
})
my.addEventListener('touchend', (event) => {
  const touch = event.changedTouches[0];  // 一根手指
  end(touch)
})
let isTap = false, isPan = false, isPress = false;
let timeout = null; 
let startX = 0, startY = 0;
let moves = [];
function start(point) {
  console.log('start', point);
  isTap = true;
  startX = point.clientX, startY = point.clientY;
  // tap
  timeout = setTimeout(() => {
    if (isPan) return false;
    isPress = true;
    isTap = false;
  }, 500);
}
function move(point) {
  console.log('move', point);
  let dx = point.clientX - startX;
  let dy = point.clientY - startY;
  // distance
  if (dx ** 2 + dy ** 2 > 100) {
    isPan = true;
    isTap = false;
    isPress = false;
  }
  if (isPan) {
    moves.push({dx, dy, t: Date.now()})
    moves = moves.filter(r => Date.now() - r.t < 300)
  }
}
function end(point) {
  console.log('end', point);
  if (isTap) {
    isTap = false;console.log('tap发生了');
  }
  if (isPress) {
    isPress = false;console.log('press发生了');
  }
  let lastPoint = moves[0];
  let dx = point.clientX - startX;
  let dy = point.clientY - startY;
  let time300dx = dx - lastPoint.dx;
  let time300dy = dy - lastPoint.dy;
  let speed = Math.sqrt(time300dx ** 2 + time300dy ** 2) / (Date.now() - lastPoint.t);
  if (speed > 2.5) {
    isPan = false;
    console.log("flick发生了");
  }
  if (isPan) {
    isPan = false; console.log('pan发生了');
  }
  clearTimeout(timeout);
}