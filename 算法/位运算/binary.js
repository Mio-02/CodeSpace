let a = 13

// 13 / 2 = 6 ··· 1
// 6 / 2 = 3 ··· 0
// 3 / 2 = 1 ··· 1
// 1 / 2 = 0 ··· 1

// 倒着看，所以13转换为二进制数是1101

// x * 2 ^ n + x * 2 ^ (n - 1) + x * 2 ^ (n - 2) + ... + x * 2 ^ 0 = 13
// 1 * 2 ^ 3 + 1 * 2 ^ 2 + 0 * 2 ^ 1 + 1 * 2 ^ 0 = 13



let b = 1101

console.log(parseInt(2.3)); // 2
console.log(parseInt(2.7)); // 2
// parseInt() --- 向下取整

console.log(parseInt(1101, 10)); // 1101
console.log(parseInt(1101, 2)); // 13
// 第二个参数的意思是第一个参数的进制

const arr = [1, 2, 3]
// const newArr = arr.map((item, i) => parseInt(item, i)) 相当于：
const newArr = arr.map(parseInt)
// parseInt(1, 0)，会得到1，0 相当于没放，也就是十进制
// parseInt(2, 1)，会得到NaN，因为没有一进制
// parseInt(3, 2)，会得到NaN，因为二进制里没有3

console.log(newArr); // [ 1, NaN, NaN ]