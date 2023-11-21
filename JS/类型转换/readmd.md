# 基本数据类型转换
1. 转布尔值
2. 转数字
3. 转字符串
4. 转对象

# 对象转原始值
- 转字符串 调用的其实就是Object.prototype.toString()
    1. 对象转字符串 --- {}.toString() 返回由 "[object" 和 class 和 "]" 组成的字符串
    2. 数组转字符串 --- [].toString() 返回由数组内部元素以逗号拼接的字符串
    3. 其他的 --- xx.toString() 直接返回字符串字面量

- 转数字 valueOf
    1. 用于转换包装类