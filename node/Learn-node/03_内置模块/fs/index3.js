const fs = require('fs')

// 读取文件状态：
// console.log(fs.statSync('./target.md'));

const info = fs.statSync('./pic')
// 判定是不是文件：
console.log(info.isFile());
// 判定是不是文件夹：
console.log(info.isDirectory());