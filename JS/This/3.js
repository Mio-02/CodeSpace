var a = 3

function foo() {
    console.log(this.a);
}

var obj = {
    a: 2,
    foo: foo
}

obj.foo()

// 此时this指向的结果是2，而不是全局的3
// 这就是隐式绑定

var a = 3

function foo() {
    console.log(this.a);
}

var obj = {
    a: 2,
    foo: foo()
}

obj.foo

// 此时this指向的结果是3，而不是对象中的2
// 当foo不是被对象所拥有时，this就不会被对象所束缚，从而指向了全局

var a = 3

function foo() {
    console.log(this.a);
}

var obj = {
    a: 2,
    foo: foo
}

var obj2 = {
    a: 1,
    obj: obj
}

obj2.obj.foo()

// 结果是指向了obj中的2，并没有被第一层的obj2所束缚，这个叫隐式丢失