var fs = require('fs'); // node核心模块:file system
var path = require('path'); // 路径模块
// fs.readFile('textdd.txt', function(err, data) {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data.toString());
// })
// function getDirFiles(startPath) {
//     let result = [];
//     // process node 全局变量 进程
//     // console.log(path.join(process.cwd(), startPath), '------');
//     let files = fs.readdirSync(path.join(process.cwd(), startPath));
//     // console.log(files);
//     for (let file of files) {
//         // console.log(file);
//         let stats = fs.statSync(path.join(process.cwd(), startPath,file));
//         if (stats.isFile()) {
//             result.push(file)
//         }
//         if (stats.isDirectory()) {

//         }
//         // console.log(stats);
//     }
//     return result;
// }
function getDirFiles(startPath) {
    let result = [];
    // 递归
    function finder(parentPath) {
        // console.log(path);
        let files = fs.readdirSync(parentPath);
        if (!files.length) return;
        files.forEach(function(val, index) {
            // console.log(val, index);
            let fPath = path.join(parentPath, val);
            // console.log(fPath);
            let stats = fs.statSync(fPath);
            if (stats.isDirectory()) {
                finder(fPath);
            }
            if (stats.isFile()) {
                result.push(fPath);
            }
        })
    }
    finder(path.join(process.cwd(), startPath));
    return result;
}
console.log(getDirFiles('src'));