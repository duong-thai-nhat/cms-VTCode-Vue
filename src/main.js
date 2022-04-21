import { createApp } from 'vue'
import App from './App.vue'
import router from "./Router/router"
import store from './Store/index'
import dataUser from './Store/getDataUser'

console.log(dataUser);

const app = createApp(App)
    app.use(router)
    app.use(store)
    
    app.mount('#app')