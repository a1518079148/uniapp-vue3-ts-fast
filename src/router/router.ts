import { reactive } from "vue"
import { RouterListParam as RPm, RouterListPath as RPh } from "./routeList"

const router = reactive({
    //所有路由
    list: [] as routerItem[],
    //底部导航路由
    tabslist: [] as routerItem[],
    //路由历史
    history: [] as routerHistory[],
    //当前路由
    item: null as any as routerHistory,
    //操作类型
    type: 'replace',
    init: () => {
        router.item = null as any
        router.history = null as any
        router.type = 'replace'
    },
    //保留之前路由，添加一个路由
    push: (pagePath: RPh, param: any = {}) => {
        if (router.item != null) if (pagePath === router.item.item.pagePath) return
        const addItem = jumpItem(pagePath, param)
        if (addItem) {
            if (addItem.item.to) {
                to(addItem.item.to, param, 'push')
                return
            }
            const next = () => {
                router.item = addItem
                router.history.push(addItem)
            }
            router.type = 'push'
            router.beforeJump(router.item, addItem, next, router.type)
        } else router.toError(pagePath)
    },
    pushParam: <T extends RPh>(pagePath: T, param: RPm<T>) => {
        router.push(pagePath, param)
    },
    //覆盖最后一个路由
    replace: (pagePath: RPh, param: any = {}) => {
        if (router.item != null) if (pagePath === router.item.item.pagePath) return
        const addItem = jumpItem(pagePath, param)
        if (addItem) {
            if (addItem.item.to) {
                to(addItem.item.to, param, 'replace')
                return
            }
            const next = () => {
                router.item = addItem
                router.history[router.history.length - 1] = addItem
            }
            router.type = 'replace'
            router.beforeJump(router.item, addItem, next, router.type)
        } else router.toError(pagePath)
    },
    replaceParam: <T extends RPh>(pagePath: T, param: RPm<T>) => {
        router.replace(pagePath, param)
    },
    //清空之前路由，添加一个路由
    clear: (pagePath: RPh, param: any = {}) => {
        if (router.item != null) if (pagePath === router.item.item.pagePath) return
        const addItem = jumpItem(pagePath, param)
        if (addItem) {
            if (addItem.item.to) {
                to(addItem.item.to, param, 'clear')
                return
            }
            const next = () => {
                router.item = addItem
                router.history = [addItem]
            }
            router.type = 'clear'
            router.beforeJump(router.item, addItem, next, router.type)
        } else router.toError(pagePath)
    },
    clearParam: <T extends RPh>(pagePath: T, param: RPm<T>) => {
        router.clear(pagePath, param)
    },
    back: () => {
        let addItem = null as any
        if (router.history.length > 1) addItem = router.history[router.history.length - 2]
        const next = () => {
            if (addItem == null) return
            router.history.length = router.history.length - 1
            router.item = addItem
        }
        router.type = 'back'
        router.beforeJump(router.item, addItem, next, router.type)
    },
    beforeJump: (from: routerHistory, to: routerHistory, next: () => void, type: string) => { next() },
    toError: (path: string) => {
        router.push('/error', {
            path
        })
    }
})

const jumpItem = (pagePath: string, param: any): routerHistory => {
    const item = getItem(pagePath)
    param = getParam(pagePath, param)
    let addItem = null as any
    if (item) addItem = { item: item, param: param }
    return addItem
}

const getItem = (pagePath: string) => {
    if (pagePath.indexOf('?') != -1) pagePath = pagePath.split('?')[0]
    const arr = router.list.filter(item => item.pagePath === pagePath)
    if (arr.length > 0) return arr[0]
    return null
}

const getParam = (pagePath: string, param: any) => {
    if (pagePath.indexOf('?') != -1) {
        pagePath.split('?')[1].split('&').forEach(paramTemp => {
            const p = paramTemp.split('=')
            param[p[0]] = p[1]
        })
    }
    return param
}

const to = (toPath: any, param: any, type: string) => {
    if (toPath.indexOf('#') != -1)
        router[type](toPath.substring(1), param)
    else router.toError(toPath+"-前应添加#")
}

export const createRouter = (list: routerItem[], tabsList: routerItem[]) => {
    router.list = list
    router.tabslist = tabsList
    return router
}