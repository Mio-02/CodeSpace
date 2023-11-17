# 拷贝 --- 1.js
通常只针对于引用类型，因为原始类型都是深拷贝，就不多聊；所以聊到拷贝通常针对引用类型。

# 浅拷贝
原对象的修改会影响新对象
- 常见的浅拷贝方法 --- 2.js：
    1. Object.create(x)
    2. Object.assign({}, x)
    3. concat
    4. slice
    5. 数组解构
    6. arr.toReversed().reverse()

- 手写浅拷贝 --- 3.js

# 深拷贝
- 常见的深拷贝方法 --- 4.js：
    JSON.parse(JSON.stringify(obj))

    - 缺点：
        1. 无法拷贝 undefined, function, Symbol, bigint 这几种类型的数据
        2. 无法处理循环引用

- 面试时手写深拷贝 --- 5.js