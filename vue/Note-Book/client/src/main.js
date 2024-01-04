import { createApp } from 'vue'
import App from './App.vue'
import 'amfe-flexible' // 自动设置根字体大小 
import './assets/style/reset.css'

import { Button } from 'vant'; // 引入你需要的组件
import 'vant/lib/index.css'; // 引入组件样式

const app = createApp(App);

app.mount('#app')
app.use(Button); // 注册你需要的组件