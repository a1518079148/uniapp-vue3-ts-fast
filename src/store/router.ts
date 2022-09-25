import ctimer from "@/utils/ctimer"
import { reactive } from "vue"
const router = reactive({
    show: false,
    push: false,
    pushTime: new Date().getTime(),
    showRouter: (push: boolean = false) => {
        router.push = push
        router.show = false
        ctimer.add(() => {
            router.show = true
        }, 1)
        if (push) {
            router.pushTime = new Date().getTime()
            ctimer.add(() => {
                router.push = false
            }, 20)
        }
    }
})
export default router