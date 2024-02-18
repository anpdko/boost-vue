import { registerPlugins } from '@/plugins'
import App from './App.vue'
import components from './components/UI'
import { createApp } from 'vue'
import './styles/styles.scss'

const app = createApp(App)

components.forEach(component => {
   app.component(component.name, component)
})

registerPlugins(app)

app.mount('#app')
