// 包装类

// var obj = {}
// console.log(obj.a);

// var num = 123
// num.abc = 'hello'
// console.log(num.abc);

// var num = new Number(123)
// num.abc = 'hello'
// console.log(num.abc);
// console.log(num * 2); // 参与运算时会被识别成数字

// var str = 'abcd'
// console.log(str.length);

// var num = 4
// num.len = 3

// 隐式执行：
// var num =  new Number(4)
// num.len = 3
// delete num.len
// new Number(4).len // 隐式的包装类
// console.log(num.len);



// 考点
// var arr = [1,2,3,4,5]
// arr.length = 2
// console.log(arr);

// var str = 'abcd'
// new String('abcd').length // 隐式执行
// console.log(str.length);

// str.length = 2
// new String('abcd').length = 2 改完之后紧接着delete // 隐式执行
// console.log(str);

// 面试题
var str = 'abc'
str += 1  // 'abc1'
var test = typeof(str) // 'String'        typeof()用来识别类型的自带函数
if (test.length == 6) {
    // new String(test).length
    test.sign = 'typeOf的返回结果可能为String'
    // new String(test).sign = 'typeOf的返回结果可能为String'
    // delete
}
// new String(test).sign
console.log(test.sign);