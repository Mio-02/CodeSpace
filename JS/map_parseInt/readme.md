# map + parseInt 经典题 --- 1.js

- 我在解决这道题的时候首先去看了一下MDN文档
    map --- callback 返回值是由callback的每一项组成的新数组
    callback 在执行的时候会接收到 item 当前项、index 下标、array 数组本身

    parseIn --- 就是当前的callback，第一项是item，第二项是可选的参数radix?进制表达
    默认10进制，
    0无效，使用10
    1进制，item为2，NaN
    2进制，item为3，NaN