const fs = require('fs');
console.log("查看test目录");
fs.readdir("test", (err, files) => {
    if (err) {
        return console.error(err);
    }
    files.forEach((file) => {
        console.log(file);
    });
});