import '@/styles/index.scss'

import { createSSRApp } from 'vue'

import GlobalBottom from '@/components/global/global-bottom.vue'
import GlobalModal from '@/components/global/global-modal.vue'
import GlobalTitle from '@/components/global/global-title.vue'
import log from '@/components/log/index.vue'
import mask from '@/components/mask/index.vue'
import RouteView from '@/router/index.vue'
import App from './App.vue'
import ctimer from './utils/ctimer'
ctimer.init()
export function createApp() {
    const app = createSSRApp(App)
    app.component('GlobalTitle', GlobalTitle)
    app.component('GlobalModal', GlobalModal)
    app.component('GlobalBottom', GlobalBottom)
    app.component('RouteView', RouteView)
    app.component('log', log)
    app.component('mask', mask)
    return {
        app
    }
}