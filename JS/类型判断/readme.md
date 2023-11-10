# typeof
1. 可以准确判断除null之外的原始类型
2. 引用类型中只可以判断function

# instanceof
1. 只能判断引用类型
2. 且是通过原型链查找来判断的

# Object.prototype.toString
- 调用toString方法时，将执行以下步骤：
1. 如果this值未定义，则返回“[object undefined]”。
2. 如果此值为null，则返回“[object null]”。
3. 设O是调用ToObject并将此值作为参数传递的结果。
4. 设class为O的[[Class]]内部属性的值。
5. 返回字符串值，该值是连接三个字符串“[object”、class和“]”的结果。

# Array.isArray(arr)
1. 判断一个东西是不是数组（数组独有的）