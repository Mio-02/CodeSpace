let arr = ['a', 'b', 'c']

for (let i = 0; i < arr.length; i++) {
    
}
// 可以写成：
for (let item of arr) {
    console.log(item);
}
// 但得具有迭代器属性

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }

// for (let item of obj) {
//     console.log(item);
// }
// // 会报错，这就说明对象不具有迭代器属性