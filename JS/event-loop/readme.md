# JS 单线程语言

- 进程：CPU运行指令和保存上下文所需时间

- 线程：进程中的更小的单位，描述了一段指令执行所需的时间

## 浏览器新开一个tab页面，就是新开一个进程
需要多个线程配合才能完成页面的展示
例子：假如有三个线程
1. 渲染线程（GPU）
2. http请求线程
3. js引擎线程

渲染线程（GPU） 和 js引擎线程 是互斥的，它俩都能操作动结构，会造成“不安全的渲染” 

# JS 单线程
- 优点：
    1. 节省内存
    2. 单线程没有锁的概念，节省上下文切换时间

# 异步
- 宏任务（macrotask）：
    script
    setTimeout
    setInterval
    setImmediate
    Input/Output (I/O)
    UI-rendering (页面渲染)

- 微任务（microtask）
    promise.then()
    MutationObserver
    Process.nextTick()



# event-loop (事件循环) --- 2.js
1. 执行同步代码（这属于宏任务）
2. 当调用栈为空，查询是否有异步代码需要执行
3. 执行微任务
4. 如果有需要，会渲染页面
5. 执行宏任务（也叫下一轮event-loop的开启）
