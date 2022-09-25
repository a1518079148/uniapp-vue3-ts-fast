import { reactive } from "vue"
const log = reactive({
    list: [] as string[],
    clear: () => {
        log.list = []
    }
})
export default log