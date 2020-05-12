const fs = require('fs');
console.log("准备删除目录 /tmp/test");
fs.rmdir("/tmp/test", (err) => {
    if (err) {
        return console.error(err);
    }
    console.log("读取/tmp目录");
    fs.readdir("/tmp/", (err, files) => {
        if (err) {
            return console.error(err);
        }
        files.forEach((file) => {
            console.log(file);
        });
    });
});