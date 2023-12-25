const fs = require('fs')

// 读取目录下所有的文件名：
// const info = fs.readdirSync('./test')
// console.log(info);

// 创建目录：
// fs.mkdirSync('./test2/data/list')
// 会报错，不能一次生成多层，允许多层得加一点：
// fs.mkdirSync('./test2/data/list', { recursive: true })

// 删除文件夹：
// fs.rmdirSync('./test2', { recursive: true })

// 监听,只要有文件变更就执行：
fs.watch('./', { recursive: true }, (eventType, filename) => {
  console.log(`当前文件夹下${filename}文件变更为：${eventType}`);
})
// 监听运行起来后不会终止，得新开终端运行其他文件，监听的终端会一直保持监听