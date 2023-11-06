function foo() {
    console.log(this.a);
}

var obj = {
    a: 2
}

// foo() 
// 无法取到a

foo.call(obj)
// call的作用，强行把this的指向“掰”过去，此处是将this强行指向了obj，从而取到a



function foo(n) {
    console.log(this.a, n);
}

var obj = {
    a: 2
}

foo.call(obj, 100)
// foo在使用call方法的时候，call调用了foo，所以可能看出来有点别扭



function foo(n, m) {
    console.log(this.a, n, m);
}

var obj = {
    a: 2
}

foo.call(obj, 100, 200)
// 跟上面同理
// 或者：
foo.apply(obj, [100, 200])
// 区别：apply在装参数的时候得用一个数组装起来，而不是像call一样“散装的”
// 或者：
var bar = foo.bind(obj, 100, 200)
bar()
var bar = foo.bind(obj)
bar(100, 200)
var bar = foo.bind(obj, 100)
bar(200)
// 按顺序来
var bar = foo.bind(obj, 100, 200)
bar(300)
// 如果是这样的话300会被舍去