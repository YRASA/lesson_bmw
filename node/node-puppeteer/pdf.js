// Promise 对回调 封装，封装出了 then 这种 api
// async await
const fs = require('fs');
const axios = require('axios');
// 成功resolve 失败reject
const promise1 = new Promise((resolve, reject) => {
    // 回调
    fs.readFile('./package.json', (err, info) => {
        resolve(info);
    })
})
const promise2 = (info) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./p.json', info, (err) => {
            if (!err) {
                resolve();
            } else {
                reject();
            }
        })
    })
}
const promise3 = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time)
    })
}
// 异步转同步: X
// 写法上同步, 执行起来依然异步 (Pending, Fullfiled, Reject)
// then 链式调用
// promise1
// .then((info) => {
//     // 返回promise
//     return promise2(info);
// })
// .then(() => {
//     // 等着 前面 这个 promise
//     console.log('读写完成');
//     return promise3(3000);
// })
// .then(() => {
//     console.log('ok');
// })

async function run() {
    // await 接一个 promise 那么后面的代码就会等待, 等promise resolve 才会执行
    // async + await 替代了 .then
    let info = await promise1; // promoise1 info === resolve 了什么
    await promise2(info);
    await promise3(3000);
    console.log('ok');
    // ...code
}
run();

// 同步的
// let a = 1 + 1;
// let b = a + 3;
// let c = b + 4;
// fs.readFile('./package.json', (err, info) => {
//     resolve(info);
// })

// 异步的顺序, 怎么保证异步的顺序?
// 1.原始写法: 回调函数嵌套在一起, 可能形成回调地狱
fs.readFile('./package.json', (err, info) => {
    // 读完再写
    let a = 1;
    let b = 2;
    fs.writeFile('./p.json', info, (err) => {
        if (!err) {
            setTimeout(() => {
                console.log('ok');
            }, 2000)
        } 
    })
})
// 回调 -> promise 只是以then这个api保证了异步任务的顺序 -> async + await
// XmlHttprequest -> axios