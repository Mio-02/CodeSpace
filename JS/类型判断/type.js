// 7种原始类型：

// es6支持的5种常见类型：
let str = 'hello' // string
let num = 123 // number
let flag = false // boolean
let und = undefined // undefined
let nu = null // null

// es7更新的剩下两种：
let big = 123n // bigint 大整型
// 正常来说2的53次方：2 ** 53 是JS中的最大安全值
// 但大整型就没有这个安全值的限制

let s1 = Symbol('hello') // Symbol 这种类型会将定义的内容被判定为独一无二的
let s2 = Symbol('hello')
let str1 = 'hello'
let str2 = 'hello'
console.log(str1 === str2); // 这个会判定为true
console.log(s1 === s2); // 但这个会判定为false
// = 是赋值
// == 只会判断数字会不会相等
// === 会判断数字和类型是不是完全相等

// 引用类型：
let obj = {}
let arr = []
let fn = function() {}
let date = new Date()



// 判断类型
console.log(typeof str); // 或者可以这么写：typeof(str)
console.log(typeof num); // number
console.log(typeof flag); // boolean
console.log(typeof und); // undefined
console.log(typeof big); // bigint
console.log(typeof s); // symbol
// 上面这几种原始类型都能很正常地判断出来是什么类型
console.log(typeof nu); // 但唯独null类型被判断为object，这是bug。
// 因为当年制定判定类型的方法首先就是先转换为二进制，三个零开头的会被认定为object(在typeof眼里所有引用类型都会被判定为object,但function除外，下面我们会聊)，唯独null找不到很好的二进制来表示，所以直接定为了一串0，这样开头三个0就会被识别判定为object。

console.log(typeof obj); // object
console.log(typeof arr); // object
console.log(typeof fn); // function 唯独这个引用类型能够判断
console.log(typeof date); // object

// 那我们怎么判断引用类型呢？看instance.js