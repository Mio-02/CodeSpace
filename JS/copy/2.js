// let a = {name: '小明'}
// let b = Object.create(a) // 让b这个对象继承与a（隐式继承）

// console.log(b); // 直接打印是一个空对象
// console.log(b.name); // 但我们可以拿到属性，所以是隐式继承

// a.name = '小红'
// console.log(b.name); // a的属性值变了之后隐式继承的b也改变了属性值，所以是浅拷贝



// let a = {name: '小明'}
// let b = Object.assign({}, a) // assign是把多个对象合在一起

// console.log(b);

// a.name = '小红'

// console.log(b); // a的属性值变了之后隐式继承的b没有改变属性值，所以是深拷贝



// let a = {
//     name: '小明',
//     like: {
//         n: 'coding'
//     }
// }
// let b = Object.assign({}, a)
// // a.like = {}

// // console.log(b); // a的like值改了之后b没有改，这种情况是深拷贝

// a.like.n = 'running'

// console.log(b); // 但要是这样就变成了浅拷贝（只要有一种情况会改变就叫做浅拷贝，什么情况都不改变才叫做深拷贝）



// let arr = [1, 2, 3]
// let newArr = [].concat(arr)

// // arr.push(4)
// // console.log(newArr);

// arr[0] = 10
// console.log(newArr);

// let arr2 = [1, 2, 3, {a: 10}]
// let newArr2 = [].concat(arr2)

// arr2[3].a = 100
// console.log(newArr2); // [ 1, 2, 3, { a: 100 } ],还是改变了，所以看到这我们就清楚了引用地址是关键



// let arr = [1, 2, 3, {a: 10}]

// // let newArr = arr.slice(0)
// // arr[3].a = 100
// // console.log(newArr); // [ 1, 2, 3, { a: 100 } ], 还是浅拷贝

// let newArr = [...arr]
// arr[3].a = 100
// console.log(newArr); // [ 1, 2, 3, { a: 100 } ]，所以解构也是浅拷贝的方法



let arr = [1, 2, 3, {a: 10}]
let newArr = arr.toReversed().reverse() // toReversed()方法比较新，拿到浏览器执行
arr[3].a = 100
console.log(newArr); // 还是会改变，是浅拷贝