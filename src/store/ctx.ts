import { reactive } from "vue"
import store from "."
const ctx = reactive({
    timer: null as any,
    map: new Map<number, { fun: () => void, id: number }>(),
    add: (fun: () => void) => {
        const id = store.timer.getId()
        ctx.map.set(id, {
            fun,
            id,
        })
        return id
    },
    run: () => {
        ctx.map.forEach(item => {
            item.fun()
            store.ctx.remove(item.id)
        })
    },
    remove: (id: number) => {
        ctx.map.delete(id)
    }
})
export default ctx