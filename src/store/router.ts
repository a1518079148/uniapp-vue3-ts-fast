import ctimer from "@/utils/ctimer"
import { reactive } from "vue"
const router = reactive({
    show: false,
    close: false,
    showRouter: () => {
        router.show = false
        ctimer.add(() => {
            router.show = true
            router.close = false
        }, 1)
    }
})
export default router