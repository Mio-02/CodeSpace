import { createApp } from 'vue'
import './assets/styles/index.css'
import App from './App.vue'

createApp(App)
  .mount('#app');

/**
* 响应式适配 大屏应用
* 动态设置html fontSize，使用rem
**/
(function(doc, win) {
  const fn = () => {
    const docEl = doc.documentElement, // 拿到html元素
      clientWidth = docEl.clientWidth; // 拿到屏幕宽度
    if (!clientWidth) return;
    // 设计稿件 1920px
    docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';
  };
  if (!doc.addEventListener) return;
  win.addEventListener('resize', fn);
  // html下载完后就立即执行，不用等到css，script执行
  doc.addEventListener('DOMContentLoaded', fn);
})(document, window)