let s = '{[()]}'

var isValid = function(s) { 
    const stack = []
    const len = s.length

    // if (len % 2 !== 0) {
    //     return false
    // } //如果长度是奇数，则一定不是有效括号

    const obj = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let i = 0; i < len; i++) {
        const item = s[i]
        if (item === '(' || item === '[' || item === '{') {
            stack.push(item)
        } else {
            // 判断此时的item是否适配栈顶的元素
            // 将栈顶元素取出作为obj的key读取到value判断该value是否===item
            if (!stack.length || obj[stack.pop()] !== item) {
                // continue // 跳出本次循环进行下一次循环
                return false
            }
        }
    }

    return !stack.length
}