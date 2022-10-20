import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'

//app.config.globalPropertis : 글로벌 변수 보관함
let emitter = mitt()
let app = createApp(App)
app.config.globalProperties.emitter = emitter
app.mount('#app')
// createApp(App).mount('#app')
