// 两数比较 100%交换
// 洗牌算法
// 从后往前洗
// 从后往前去一个数a
// 从未洗牌的区间随机取一个数b
// a b交换
// a 完成了
// 从后往前重复
function shuffle(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        // - i 从后往前
        // floor向下取整
        let idx = Math.floor(Math.random() * (len - i));
        [arr[len - 1 - i], arr[idx]] = [arr[idx], arr[len - 1 - i]];
    }
    return arr;
}