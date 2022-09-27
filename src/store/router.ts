import ctimer from "@/utils/ctimer"
import { reactive } from "vue"
const router = reactive({
    show: false,
    close: false,
    showRouter: (callback: () => void = () => { }) => {
        router.show = false
        ctimer.add(() => {
            router.show = true
            router.close = false
            callback()
        }, 1)
    }
})
export default router