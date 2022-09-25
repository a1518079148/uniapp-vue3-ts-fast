import { reactive } from "vue"
const timer = reactive({
    id: 1000,
    getId: () => {
        timer.id++
        return timer.id
    },
    timer: null as any,
    map: new Map<number, { endTime: number, fun: () => void, id: number }>(),
    add: (fun: () => void, endTime: number) => {
        const id = timer.getId()
        timer.map.set(id, {
            endTime: new Date().getTime() + endTime,
            fun,
            id,
        })
        return id
    },
    remove: (id: number) => {
        timer.map.delete(id)
    }
})
export default timer