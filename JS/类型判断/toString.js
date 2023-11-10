// 官方给Object.prototype.toString的解释是：
// Object.prototype.toString（）
// 调用toString方法时，将执行以下步骤：
// 如果this值未定义，则返回“[object undefined]”。
// 如果此值为null，则返回“[object null]”。
// 设O是调用ToObject并将此值作为参数传递的结果。
// 设class为O的[[class]]内部属性的值。
// 返回字符串值，该值是连接三个字符串“[object”、class和“]”的结果。



console.log(
    Object.prototype.toString.call('hello')
); // [object String]

console.log(
    Object.prototype.toString.call(123)
); // [object Number]

console.log(
    Object.prototype.toString.call({})
); // [object Object]

console.log(
    Object.prototype.toString.call([])
); // [object Array]

console.log(
    Object.prototype.toString.call(function() {})
); // [object Function]



let s = 'hello'
function isType(s) {
    return Object.prototype.toString.call(s).slice(8, -1)
}

console.log(isType(s)); // 这样就可以拿到String

// slice:
let s1 = '[object Object]'
console.log(s1.slice(8, -1)); // 从下标8开始切，切到倒数第一个，拿到Object



// 那为什么用的时候要Object.prototype.toString.call()这么写呢
console.log(Object.prototype.toString(123)); // [object Object]
console.log(Object.prototype.toString.call(123)); // [object Number]
// 如果不call一下，无论括号内是什么值，它都会默认返回[object Object]
console.log(Object.prototype.toString()); // [object Object] 所以toString不接收值

// call原理就是在进行隐式绑定规则（详见call.js）