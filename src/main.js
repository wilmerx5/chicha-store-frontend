import './assets/main.css'

import 'vuetify/styles'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify/lib/framework.mjs'


import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
    components,
    directives
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)


app.mount('#app')
