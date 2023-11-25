console.log([1, 2, 3].map(parseInt));
// 会输出什么？

// - map 遍历，callback 返回值 新的数组
parseInt(1, 0, [1, 2, 3]) // 1
parseInt(2, 1, [1, 2, 3]) // NaN
parseInt(3, 2, [1, 2, 3]) // NaN

console.log([1, 2, 3].map((num) => parseInt(num)));