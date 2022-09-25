import store from "@/store";

export default class ctimer {

    static init() {
        store.timer.timer = setInterval(() => {
            const thisTime = new Date().getTime()
            store.timer.map.forEach(el => {
                if (thisTime - el.endTime > 0) {
                    el.fun()
                    store.timer.remove(el.id)
                }
            })
        }, 1)
    }

    /**
     * 添加一个延时任务
     * @param fun 
     * @param endTime 
     */
    static add(fun: () => void, endTime: number): number {
        return store.timer.add(fun, endTime)
    }

    /**
     * 移除任务
     * @param id 
     */
    static remove = (id: number) => {
        store.timer.map.delete(id)
    }

    /**
     * 清空任务
     */
    static clear = () => {
        store.timer.map.clear()
    }

}
