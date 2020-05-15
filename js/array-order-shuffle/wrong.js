let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// []
// [3, 1, 0, 4, 7, 2, 6, 8, 9, 5]
// [9, 5, 6, 7, 1, 0, 3, 8, 4, 2]
// 没有达到真正的乱序 伪随机
// 正确:每一个数在每一位出现的概率是均等的 => 把重复乱序足够多的次数
// 那么把每一位计算出一个平均值 ~ 4.5
// console.log(arr.sort(() => Math.random() - 0.5));
function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5)
}
let t = 1000;
for (let i = 0; i < t; i++) {
    // 浅拷贝
    let sorted = shuffle(arr.slice(0));
    for (let i = 0; i < sorted.length; i++) {
        res[i] = sorted[i] + res[i]
    }
}
console.log(res.map(sum => sum / t));
// concat不会对原来的数组造成影响,push可以

// 正在比较的两个数
// 小于0,a会排到b前面
// 大于0,b会排到a前面
// a - b > 0
// a - b < 0
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// a - b升序:
// 0 - 1 = -1 < 0
// 0 1
// b - a降序:
// 1 - 0 = 1 > 0
// 1 0
// console.log(arr.sort((a, b) => a - b))

function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            let k = j + 1;
            // a, b
            // sort 的回调函数 控制条件成不成立
            // [0, 1)
            // () => Math.random() - 0.5
            // 两个数交换概率 50%
            // 两个数 可能交换也可能不交换
            // 降序
            if (arr[j] < arr[k]) {
                [arr[j], arr[k]] = [arr[k], arr[j]];
            }
        }
    }
    console.log(arr);
}
bubbleSort(arr);