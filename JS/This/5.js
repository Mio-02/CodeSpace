var a = 2
function foo() {
    var a = 1
    setTimeout(function() {
        console.log(this.a);
    }, 1000) // 定时器函数，单位毫秒。等1000毫秒后执行函数
}
foo()
// 结果this指向的是全局的2，而不是foo中的1



var a = 2
function foo() {
    var a = 1
    var bar = function() {
        console.log(this.a);
    }
    var baz = bar.bind(foo)
    setTimeout(baz, 1000)
}
foo.a = 3
foo()
// 此时结果拿到的就是对象foo的属性a，而不是函数中的变量a