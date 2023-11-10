let str = 'hello'
let num = 123
let flag = false
let und = undefined
let nu = null
let big = 123n
let s1 = Symbol('hello') 
let obj = {}
let arr = []
let fn = function() {}
let date = new Date()

// instance能判断所有的引用类型
console.log(obj instanceof Object); // true
console.log(arr instanceof Array); // true
console.log(fn instanceof Function); // true
console.log(date instanceof Date); // true
// 但instance判断不了原始类型，原始类型在instance眼里都是false
console.log(str instanceof String); // false

console.log(arr instanceof Object); // 会被判断为true，毕竟引用类型确实是对象
// 会有什么问题呢：
function test(obj) {
    if (obj instanceof Object) {
        return obj.name
    }
}
test({name:'军军'}) //正常这么写也确实判断正确
test(['军军']) // 但当我们这么写他也会将数组判定为Object从而得到输出，但这并不是我们想要的，所以会出问题

// 那instance是怎么进行判断的呢？看instanceof.js