var obj = {
    a: 1,
    foo: foo
}
function foo(x, y) {
    console.log(this.a, x + y);
}
// foo.call(obj)
// obj.foo()

// foo.call(obj, 1, 2)

Function.prototype.myCall = function(context) {
    // myCall只能给函数调用，得先判断一下
    // if (this instanceof Function) {
    // 或者
    if (typeof this !== 'function') {
        throw new TypeError('myCall is not a function')
    }
    // let args = Array.from(arguments).slice(1)
    // 或者
    let args = [...arguments].slice(1)

    context.fn = this
    let res = context.fn(...args) // 触发this隐式绑定规则
    delete context.fn
    return res
}

// foo.myCall(obj)
console.log(obj);
foo.myCall(obj, 1, 2)