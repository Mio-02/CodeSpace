- 何为Typescript?
    JavaScript的超集

- 如何使用ts?
    - 像js一样来写
    - 加点啥?
      - ts的核心主要是类型检测
          在你在乎的地方（容易出问题的地方）加 --> 数据



## 项目亮点
- 使用了ElementPlus
  - 在登录注册页 表单使用了这个功能
    - 表单的目的是收集数据，用:model=""进行双向绑定
      每一个el-input v-model=".username"
    - 表单的校验配置一下就好
    - 把用户体验做好
      - 自动聚焦
      - @keyup.enter
    - ref属性 DOM标记
      - const login = ref(); // null
      - mouted <form ref="login">
    - 表单提交
      - validate

- 为什么element-plus的图标要搞的这么复杂呢？
  - 按需加载
    图标库有点大，如果用户使用了别的图标，这样可以省空间
  - 其他的选择
  - 如果要使用的话就可以单独安装图标库
    app.components() 全局挂载一下 用到哪些就挂载哪些



## ts
- 写js就好，再做点加法
- 在最关心的数据上用ts
  - ref
  - reactive
  - props
  - store
- 给函数的参数加上类型



## vue 考题
- <component :is="comName" />
  经常用于循环或动态输出组件中
- <template />
  一般和slot结合
  不会显示到页面上 可以用于接收指令 不添加标签



## 项目亮点
  - 带有角色校验的菜单
    - 菜单
      el-menu>el-sub-menu>el-menu-item
    - 当前选中的菜单
      :default-active="route.path"
    - 那些菜单可以看到？
      指令？自定义指令
      store>permiss roleList user includes?
      添加一个数据 key 任何组件都可以调用
      setkeys action
      localStorage 读取
  - 自定义指令
    app.directives(name)
    可以添加全局指令：v-name
    mounter(el, binding)
    el['hidden'] = true
    el.style.opacity = 0 v-show



## 项目难点
  - 多组件状态的共享和设计
    - vuex 和 pinia
      用pinia   vuex modules 很灵活，加一个defineStore
      没有vuex的树状约束 我们只需要执行一下函数就能拿到hook
      语法很简洁
      学vuex设计模式，state mutation action getter 安全
    - 学习过一些项目   github上开源的项目 例vue-music...
    - 因为当我在多个组件，特别是兄弟或跨页面级别组件，
      有共享状态需求的时候，我封装成了一个store函数
      原来是用 ref + props + emits 换成 store





npm i -D unplugin-auto-import unplugin-vue-components
npm i element-plus
npm i @element-plus/icons-vue