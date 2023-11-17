// let arr = ['a', 'b', 'c', 'd', 'e']
// //遍历可以这样写：
// for (let item of arr) {
//     console.log(item);
// } // for...of 是专门为具有迭代器属性的方法设定的



let obj = {
    name: '阿伟',
    age: 18,
    like: {
        type: 'coding'
    }
}
// for...in是专门用于遍历对象的：
// for (let key in obj) {
//     // console.log(key); // 这样遍历的是类名
//     console.log(obj[key]); // 这样遍历的是值
// }
// 但for...in也能用于数组



// for (let key of obj) {
//     console.log(key);
// } // 用for...of会报错，因为对象不具有迭代器属性



// let data = Object.create(obj)
// for (let key in data) {
//     console.log(key);
// }
// for...in不仅能遍历对象，还能遍历到对象的原型

// 但我们实际情况一般不希望遍历到隐式原型
// 我们没有办法直接阻止，但我们可以判断拿到的东西我们需不需要
let data = Object.create(obj)
data.sex = 'boy'
for (let key in data) {
    if (data.hasOwnProperty(key)) {
        console.log(key);
    }
} // 这样虽然for...in会全部遍历到，但我们只拿到了我们需要的sex而不是另外的隐式原型