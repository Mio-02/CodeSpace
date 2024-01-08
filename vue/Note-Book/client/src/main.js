import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'amfe-flexible' // 自动设置根字体大小 
import './assets/style/reset.css'

import { Button, Form, Field, CellGroup } from 'vant'; // 引入你需要的组件
import 'vant/lib/index.css'; // 引入组件样式

const app = createApp(App);
app.use(router);

// 注册你需要的组件
app.use(Button);
app.use(Form);
app.use(Field);
app.use(CellGroup);

app.mount('#app')