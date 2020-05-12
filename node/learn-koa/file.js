const fs = require('fs');
fs.readFile('./readme.md', (err, data) => {
    // 异步
    if (err) {
        console.log('Error');
    }
    console.log(data);
})
console.log('123');