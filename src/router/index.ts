import { reactive } from "vue";
const routerList = [
    {
        pagePath: "/home",
        iconPath: "/static/logo.png",
        selectedIconPath: "/static/logo.png",
        tabsText: "首页",
        showTitle: true,
        showTabs: true,
    }, {
        pagePath: "/user",
        iconPath: "/static/logo.png",
        selectedIconPath: "/static/logo.png",
        tabsText: "用户",
        showTabs: true,
    },
] as item[]
const router = reactive({
    list: routerList,
    tabslist: [
        routerList[0],
        routerList[1],
    ],
    history: [] as history[],
    item: {
        item: {},
        param: {}
    } as history,
    push: (pagePath: string, param: any = {}) => {
        const item = getItem(pagePath)
        if (item) {
            const addItem = {
                item: item,
                param: param
            }
            router.item = addItem
            router.history.push(addItem)
        }
    },
    replace: (pagePath: string, param: any = {}) => {
        const item = getItem(pagePath)
        if (item) {
            const addItem = {
                item: item,
                param: param
            }
            router.item = addItem
            router.history = [addItem]
        }
    },
    back: () => {
        if (router.history.length == 1) return
        let arr: any = router.history.pop()
        router.history = arr
        router.item = router.history[router.history.length - 1]
    }
})

const getItem = (pagePath: string) => {
    let index = -1
    const arr = router.list.filter((item, num) => {
        if (item.pagePath === pagePath) {
            index = num
            return true
        }
        return false
    })
    if (arr.length > 0)
        return arr[0]
    return null
}

type item = {
    pagePath: string;

    //顶部导航栏配置
    title?: string;
    showTitle?: boolean

    //底部导航栏配置
    showTabs?: boolean
    iconPath?: string;
    selectedIconPath?: string;
    tabsText?: string;
}
type history = {
    item: item,
    param?: {
        [key: string]: string
    };
}
export default router