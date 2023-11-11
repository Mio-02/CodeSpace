global.gc() // 强制执行垃圾回收
console.log(process.memoryUsage()); // 计算node中内存占用情况
// 返回了：
// {
//     rss: 32284672,
//     heapTotal: 7528448,
//     heapUsed: 4613264,
//     external: 430884,
//     arrayBuffers: 16762
//   }
