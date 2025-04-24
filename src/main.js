import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


// toasts
import Toastplugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-bootstrap.css";

//vuetify
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css' 
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

import { AUTH } from './utils/firebase'
import { onAuthStateChanged } from 'firebase/auth'

let app;

onAuthStateChanged(AUTH, () => {
if(!app) {
  app = createApp(App)
  app.use(createPinia())
  app.use(router)
  app.use(vuetify)
  app.use(Toastplugin)
  app.mount('#app')
  }
})
