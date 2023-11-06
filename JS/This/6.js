var a = 1
// 定义一个函数：
function foo() {}
// 函数表达式：
var bar = function() {
    console.log(this.a);
}
bar()
// 箭头函数
var baz = () => {
    console.log(this.a);
}
baz()

// 区别：上面的两个函数比如bar中的this是写在bar中的函数，而箭头函数中的this是写在全局中的



var obj = {
    name: "Tom",
    show: function() {
        // console.log(this);

        // var bar = function() { // 这时指向的就是全局
        var bar = () => { // 而用箭头函数this就是写在了bar的外层，在这题的情况下形成了隐式绑定，从而拿到了name
            console.log(this.name);
        }
        bar()
    }
}
obj.show()