import store from "@/store"

export default class clog {
    static info(message?: any, ...optionalParams: any[]) {
        if (typeof message === 'object') message = JSON.stringify(message)
        store.log.list.push(message+'')
        optionalParams.forEach(msg => {
            if (typeof msg === 'object') msg = JSON.stringify(msg)
            store.log.list.push(msg+'')
        })
    }
}
