const fs = require('fs');

function copy(sourceUrl, destUrl) {
    // fs.readFile(sourceUrl, (err, info) => {
    //     if (!err) {
    //         fs.writeFile(destUrl, info, (err) => {
    //             if (!err) {
    //                 console.log('拷贝完毕');
    //             }
    //         })
    //     }
    // })
    // 源头
    // 流:基础类 Stream
    // 可读流
    // 可写流
    // 双工流与转换流
    const readStream = fs.createReadStream(sourceUrl);
    const writeStream = fs.createWriteStream(destUrl);
    readStream.pipe(writeStream);
    // pipe === |
}
// 不用流:
// 读完一个文件得到内容 info 变量放到计算机内存里面 写到某个地方
// 区别
// 前端: 我 baidu.com -> html,css,js 浏览器 -> 我看到 卡 我自己卡
// 小明 baidu.com -> html,css,js 浏览器 -> 小明看到
// 小红 baidu.com -> html,css,js 浏览器 -> 小红看到
// 浏览器执行 js, 浏览器申请内存 浏览器在各自的电脑上运行 天然就是分布式的 (中心化)
// 高并发

// 后端: baidu.com 1台服务器(linux电脑) 处理多人请求
// 内存占用过多 baidu.com 卡 所有人都卡
copy('./readme.md', './copy.md');