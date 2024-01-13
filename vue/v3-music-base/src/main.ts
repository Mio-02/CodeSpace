import { createApp } from 'vue'
import '@/assets/base.scss'
import '@/assets/theme.scss'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'


createApp(App)
    .use(createPinia())
    .use(router)
    .mount('#app')
