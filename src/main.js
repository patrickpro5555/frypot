import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/index.css'

import DefaultLayout from './layouts/default.vue'
createApp(App)
  .use(router)
  .component('default', DefaultLayout)
  .mount('#app')
