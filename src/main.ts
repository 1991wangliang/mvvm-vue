import { createApp, onMounted } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { init } from '@/components/helloworld.impl'
init()

createApp(App).use(store).use(router).mount('#app')
