// ts内置类型:
// boolean number string (小写)
// 数组:每一项类型都是一样的 元组
// let list = [1, 2, 3, 4, '4', '5'];
// let list1: number[] = [1, 2, 3, 4];
// let list2: [string, number] = ['1', 2];
// 枚举
// enum Color { Red = 0, Green = 1, Blue = 2 };
// let color: Color = Color.Blue;
// let colorName = Color[0];
// any 任意类型
// let a: any; // 不清楚的类型:用户输入
// void 空
// function test(a): void {}
// null, undefined
// let b: null = null;
// never 不存在得类型
// function test(): never {
//     // while (true) {}
//     throw new Error('error');
// }
// 定义一个类型:进入全屏之后调用其中之一
// 联合类型
type RFSmethods = 'requestFullScreen' | 'mozRequestFullScreen' | 'msRequestFullScreen' | 'webkitRequestFullScreen';
// dom 没有帮我们定义
interface Element {
    requestFullScreen(): any,
    mozRequestFullScreen(): any,
    msRequestFullScreen(): any,
    webkitRequestFullScreen(): any
}
// 变量
let RFS_METHOD: RFSmethods;
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
function beFull(el: Element) {
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
const btn = document.getElementById('btn');
const box = document.querySelector('.box');
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
    })
}