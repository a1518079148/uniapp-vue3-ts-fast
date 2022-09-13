import '@/styles/index.scss'

import { createSSRApp } from 'vue'

import GlobalBottom from '@/components/global/global-bottom.vue'
import GlobalModal from '@/components/global/global-modal.vue'
import GlobalTitle from '@/components/global/global-title.vue'
import router from '@/router'
import App from './App.vue'
router.push('/home')
export function createApp() {
    const app = createSSRApp(App)
    app.component('GlobalTitle', GlobalTitle)
    app.component('GlobalModal', GlobalModal)
    app.component('GlobalBottom', GlobalBottom)

    return {
        app
    }
}
