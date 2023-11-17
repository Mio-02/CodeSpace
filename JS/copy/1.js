// let a = 1
// let b = a
// a = 2
// console.log(b);
// 传的是值
// a改变之后b不会改变，这种叫做深拷贝
// 原始类型都是深拷贝，就不多聊
// 所以聊到拷贝通常针对引用类型

let obj = {
    age: 18
}
let obj2 = obj
obj.age = 20
console.log(obj2.age);
// 传的是地址
// obj中的值改变后obj2也会改变，这种叫浅拷贝