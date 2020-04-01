const speed = document.querySelector('.speed')
const bar = document.querySelector('.speed-bar')
const video = document.querySelector('.flex')

// console.log(video.offsetTop)
// offsetTop:获取某个dom结构到浏览器顶部的距离
// console.log(video.offsetHeight)
// offsetHeight/offsetWidth:用来获取某dom结构自身的高度/宽度
function handleMove(event) {
    // console.log(event.pageY)
    const y = event.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    // Math.round:返回四舍五入的整数
    const height = Math.round(percent * 100) + '%';
    const playbackRate = percent * ( max - min ) + min;

    // console.log(y, percent, height, playbackRate)
    bar.style.height = height;
    bar.textContent = playbackRate.toFixed(2) + 'x';
    // playbackRate:播放速率
    video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', handleMove)
