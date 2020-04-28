const https = require('https');
const cheerio = require('cheerio');
// 文件读写
const fs = require('fs');
https.get('https://movie.douban.com/top250', function(res) {
    console.log(res);
    // node是分段返回的 需要拼接
    let html = '';
    // 有数据产生时
    res.on('data', function(chunk) {
        html += chunk;
    })
    // 返回完毕时
    res.on('end', function() {
        console.log(html);
        const $ = cheerio.load(html);
        let allFilms = [];
        $('li .item').each(function() {
            // this 循环当前电影
            // 不加this代表再整个页面需寻找title,下同
            const title = $('.title', this).text();
            const star = $('.rating_num', this).text();
            const pic = $('.pic img', this).attr('src');
            // console.log(title, star, pic);
            allFilms.push({
                title, star, pic
            })
            fs.writeFile('./films.json', JSON.stringify(allFilms), function(err) {
                if (!err) {
                    console.log('文件写入完毕！')
                }
            })
        })
        // 图片下载
        downloadImage(allFilms);
    })
})
function downloadImage(allFilms) {
    for (let i = 0; i < allFilms.length; i++) {
        const picUrl = allFilms[i].pic;
        https.get(picUrl, function(res) {
            res.setEncoding('binary');
            let str = '';
            res.on('data', function(chunk) {
                str += chunk;
            })
            res.on('end', function() {
                fs.writeFile(`./images/${i+1}.png`, str, 'binary', function(err) {
                    if (!err) {
                        console.log(`第${i+1}张图片下载成功！`)
                    }
                })
            })
        })
    }
}