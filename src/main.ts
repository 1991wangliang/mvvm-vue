import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { beanScanner } from '@/activity/scanner'

createApp(App).use(beanScanner).use(store).use(router).mount('#app')
