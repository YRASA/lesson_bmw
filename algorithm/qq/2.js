let enc_qq = [6, 3, 1, 7, 5, 8, 9, 2, 4], //错误QQ号
    qq = [], //正确QQ号
    head = 0, //头指针 变量可以存储中间值
    tail = 9;
// 631758924
// 17589243
// 5892437
// 924378
// 43782
// 238
// 83
// 3
// object 对象的一种,可枚举
// console.log(typeof enc_qq);
// 移除第一个元素,第二个元素放置到最后
// head tail 双指针
while(head < tail) {
    qq.push(enc_qq[head++]);
    // head++;
    enc_qq[tail++] = enc_qq[head++];
    // tail++;
    // head++;
}
console.log(qq.join(''));