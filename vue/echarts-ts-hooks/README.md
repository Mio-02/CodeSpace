# 全新项目技术栈

- ts
- echarts 百度开源的2D数据可视化
- hooks
  - 函数式编程，use开头
  - 将状态、生命周期等封装到函数中，提升了项目的复用
    到处都是hooks useStore useRouter useRoute defineStore
    (useTodoList)
  - vueuse 第三方的hooks
    useLocalization useMemory
  - 自定义hook
    自定了useResize、useLocalStorage等hook函数，提升状态/生命周期在函数中的复用
    - 如果不封装，onMount、onUnmount生命周期函数挺复杂的，都在重复
    - 定时器、事件处理器等，在组件卸载后，要移除，不然会带来内存泄漏

- 项目亮点
  - 介绍项目架构
    - utils —— JS功能函数复用 DRY（don't repeat yourself）
      直接拿到下个项目中去 防抖节流、格式化数据等
    - 公用css文件放入assets/css/
      因为大型项目的需要，例如：index.css、reset.css、variables.css...
    - hooks
      复用的是有状态的函数，将组件的状态逻辑也可以复用，加速UI组件化
  - 适配
    - rem
      - em vw
    - onDomContentLoaded 设置html的fontSize
      设计稿
    - 1920 移动端适配、大屏适配
  - cssr variables