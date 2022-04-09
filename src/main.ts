import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { scannerBeans } from '@/activity/scanner'

createApp(App).use(scannerBeans).use(store).use(router).mount('#app')
