import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

import axios from 'axios'
axios.defaults.timeout = 100000
axios.defaults.baseURL = 'http://localhost:8000'

const app = createApp(App).use(Quasar, quasarUserOptions).use(store).use(router)
// app.provide('project_name', 'Vue3.js Sample')
app.mount('#app')

