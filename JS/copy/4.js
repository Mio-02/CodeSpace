let obj = {
    name: '阿伟',
    age: 18,
    like: {
        type: 'coding'
    },
    a: undefined,
    b: null,
    c: function() {},
    d: {
        n: 100
    },
    e: Symbol('hello')
}

// let newObj = JSON.parse(JSON.stringify(obj))

// obj.like.type = 'eating'
// console.log(newObj); // { name: '阿伟', age: 18, like: { type: 'coding' } }，没有改变，确实是深拷贝

// console.log(newObj); // { name: '阿伟', age: 18, like: { type: 'coding' }, b: null },我们发现a，c，e不见了
// 所以这个方法确确实实是深拷贝，但它无法拷贝 undefined, function, Symbol, bigint 这几种类型的数据



obj.c = obj.d
obj.d.m = obj.c

let newObj = JSON.parse(JSON.stringify(obj))
console.log(newObj);
// 报错，无法拷贝循环引用的对象