import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VCodeBlock } from '@wdns/vue-code-block';
const app = createApp(App)

app.use(router)
app.component('VCodeBlock', VCodeBlock);
app.mount('#app')
