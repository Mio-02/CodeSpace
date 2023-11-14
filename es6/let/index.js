// let a = 1
// if (true) {
//     console.log(a); // 暂时性死区
//     let a = 2
// }



// var a = 1
// var a = 2

// console.log(a); // a = 2



// let a = 1
// let a = 2

// console.log(a); // 报错，let不能声明重复的变量,const也一样



// var a = 2
// console.log(window.a); // 2

// let a = 2
// console.log(window.a); // undefined



// const a = 1
// a = 2
// console.log(a); // 报错，const声明的变量不允许修改



const obj = {
    name: '军军'
}
obj.name = '明明'

console.log(obj); // { name: '明明' }