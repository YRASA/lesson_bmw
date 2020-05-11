const https = require('https');
const fs = require('fs');
https.get('https://movie.douban.com/top250', function(res) {
  console.log(res); // 继承了 流 可读流 提供数据的那一方
  // html 保存为本地的douban.html
  const writeStream = fs.createWriteStream('./douban.html');
  res.pipe(writeStream);
});
https.get('https://img3.doubanio.com/view/photo/s_ratio_poster/public/p511118051.jpg', function(res) {
  const writeStream = fs.createWriteStream('./1.jpg');
  res.pipe(writeStream);
});
// https.createServer((req, res) => {

// })
