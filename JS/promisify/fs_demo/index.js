// mode 内置的模块化系统 commonJS
// fs 文件模块 内置的
const fs = require('fs');
// - 硬盘到内存
// - 文件大小
fs.readFile ('./a.txt', ((err, data) => {
    // 后端 稳定性第一位
    if (err) {
        console.log(err);
        return;
    }
    // Buffer 二进制流
    // 得转换一下
    console.log(data.toString());
    fs.readFile ('./b.txt', 'UTF-8', ((err, data2) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(data2);
        fs.readFile ('./c.txt', 'UTF-8', ((err, data3) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(data3);
        }))
    }))
}))