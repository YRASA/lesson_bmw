"use strict";
// 变量
var RFS_METHOD;
if ('requestFullScreen' in document.body) {
    RFS_METHOD = 'requestFullScreen';
}
else if ('mozRequestFullScreen' in document.body) {
    RFS_METHOD = 'mozRequestFullScreen';
}
else if ('msRequestFullScreen' in document.body) {
    RFS_METHOD = 'msRequestFullScreen';
}
else if ('webkitRequestFullScreen' in document.body) {
    RFS_METHOD = 'webkitRequestFullScreen';
}
// object
function beFull(el) {
    // 检查兼容性
    // 4个中的1个
    // el.requestFullscreen();
    // console.log(el, RFS_METHOD);
    el[RFS_METHOD]();
}
// ts 结合 html dom
// ts 结合 node
// ts 结合 React
// dom节点
// 节点类型 ts没有内置, lib引进
var btn = document.getElementById('btn');
var box = document.querySelector('.box');
if (btn) {
    btn.addEventListener('click', function () {
        // box.requestFullscreen();
        // instanceof 是不是Elemen的实例
        // Element是内置的一个类
        // html标签都是Element的实例
        // box: Element | null
        if (box instanceof Element) {
            beFull(box);
        }
    });
}
