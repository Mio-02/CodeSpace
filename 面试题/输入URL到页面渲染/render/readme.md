# 浏览器加载到了资源之后
1. 解析html代码，生成一个DOM树
2. 解析css，生成CSSOM树
3. 将DOM树和CSSOM树结合，去除不可见的元素，生成Render Tree
4. 计算布局（回流|重排），根据Render Tree进行布局计算，得到每一个节点的几何信息
5. 绘制页面（重绘），GPU根据布局信息绘制页面效果



# 什么是回流？
- 浏览器计算页面布局的过程叫做回流
- 只要页面上的容器的几何属性发生变更，页面就会发生回流
- 举例导致发生回流的操作：
1. 改变窗口的尺寸
2. 改变元素的尺寸
3. 增加或删除可见元素
4. 页面初次渲染

# 什么是重绘？
- 将已经计算好布局的容器在屏幕上展现出来
- 元素的非几何属性变化时，会发生重绘
- 举例导致发生重绘的操作：
1. 修改背景颜色
2. 修改背景图片
3. 修改边框颜色
4. 修改字体颜色

- 回流一定重绘，重绘不一定回流



# 如何减少回流重绘
1. 合理利用浏览器的优化策略 --- index.html
2. 先display: none; 修改完样式后再block回来 --- superior.html的1和2注释代码



# 浏览器的优化策略
当代浏览器都有一个渲染队列机制，当一个元素的样式变更导致需要回流的时候，这个操作会进入渲染队列，然后浏览器继续往下执行代码，如果还有相同行为，继续进入队列，直到下面没有样式修改，浏览器会批量化执行渲染队列中的回流过程，这只发生一次回流

offsetWidth, offsetHeight, offsetTop, offsetLeft,
clientWidth, clientHeight, clientTop, clientLeft,
scrollWidth, scrollHeight, scrollTop, scrollLeft
以上这些为了取得数据的属性全部都会导致浏览器的渲染队列强制执行
