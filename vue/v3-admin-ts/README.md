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






npm i -D unplugin-auto-import unplugin-vue-components
npm i element-plus