import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

const init = async () =>
    createApp(App)
        .use(router)
        .mount('#app')

init().then(() => console.log('App initialized 🚀'))
