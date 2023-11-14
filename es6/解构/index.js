// let [x, y, z] = ['a', 'b', 'c', 'd', 'e']

// console.log(x, y, z); // a b c ,一一对应，能简化代码
// 不然就只能这么写代码比较麻烦
// let x = 'a'
// let y = 'b'
// let z = 'c'



// let arr = [1, 2, 3]
// let newArr = [0]

// console.log(...arr); // 解构
// console.log([...newArr,...arr]); // 放在一起解构




// let {name: name, age: age} = {name: '浪浪', age: 19}

// console.log(name, age); // 这个name访问的是name: name后面的name，下面简写的也是
// 根据base.js我们知道可以简写：
// let {name, age} = {name: '浪浪', age: 19}

// console.log(name, age);
// 要是这么写：
let {name = '杨杨', age} = {name: '浪浪', age: 19}

console.log(name, age);
// 前面的杨杨相当于一个默认值，当后面没有浪浪时，就会默认输出杨杨