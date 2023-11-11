// let arr = [1, 1, 2, 3, 3]
// let obj = {
//     a: 1,
//     b: 1,
//     c: 1
// }
// 可以重复放入1，但当我们想要放入的1是独一无二的该怎么办呢？
// let set = new Set([1, 2, 3, 4])

// console.log(set[0]); // undefined，读不到值，它既不是传统对象也不是数组，就是set结构，所以不能这样读值
// console.log(set); // Set(4) { 1, 2, 3, 4 }

// set.add(5)

// console.log(set); // Set(5) { 1, 2, 3, 4, 5 }

// console.log(set.size); // 5，set具有size属性类似length



// let set = new Set([1, 1, 2, 3, 3, 4])
// console.log(set); // Set(4) { 1, 2, 3, 4 }
// // 自动删去了重复项，set 对象中的值是唯一的



// // 数组去重：
// var arr = [1, 2, 1, 1, '1']

// function unique(arr) {  
//     // return res = Array.from(new Set(arr))
//     // 或者：
//     return [...new Set(arr)]
// }

// console.log(unique(arr)); // [ 1, 2, '1' ]
// // 但这种去重只能用在数组中只有数字和字符串时



// // 现在不止数组有forEach遍历方法，set也有
// let set = new Set([1, 1, 2, 3, 3, 4])
// set.forEach((value) => {
//     console.log(value);
// })
// 看base.js



let set = new Set([1, 1, 2, 3, 3, 4])

for (let item of set) {
    console.log(item);
}
// 具有迭代器（iterator）属性