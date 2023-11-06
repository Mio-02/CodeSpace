// var a = 1

// function foo() {
//     console.log(this.a);
// }

// foo()



function foo() {
    var a = 2;
    this.bar()
}

function bar() {
    var b = 3
    // console.log(this.a);
    console.log(this.b);
}

// foo()
bar()
// this不能引用一个词法作用域中的内容



function foo() { // [[scope]]
    var b = 1
    bar()
}

function bar() {
    console.log(this.b);
}

foo()



var b = 2

function foo() {
    var b = 1
    function bar() {
        baz()
    }
    function baz() {
        console.log(this.b);
    }
    bar()
}

foo()
// 打印出来的b是2，这就是默认绑定。
// 绝大部分情况this指向的都是全局，但也有特殊情况