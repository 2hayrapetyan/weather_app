import { createApp } from "vue";
import App from './App.vue'
import CardParent from './components/card_parts/CardPrent.vue'

const app = createApp(App)

app.component('base-card',CardParent)
app.mount('#app')
