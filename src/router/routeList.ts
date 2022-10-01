import router from "."

const tasObj = {
    iconPath: "/static/image/logo.png",
    selectedIconPath: "/static/image/logo.png",
    showTitle: true,
    titleBackText: '退出',
    titleBackFun: () => {
        router.clear('/login')
    },
    titleStyles: {
        background: '#ffffff00',
    },
    showTabs: true,
}

export const routerList = [
    {
        pagePath: "/service/home",
        tabsText: "首页",
        ...tasObj,
    },
    {
        pagePath: "/service/p1",
        tabsText: "摸鱼",
        ...tasObj,
    },
    {
        pagePath: "/service/p2",
        tabsText: "划水",
        ...tasObj,
    },
    {
        pagePath: "/service/p3",
        tabsText: "酱油",
        ...tasObj,
    },
    {
        pagePath: "/service/qh",
        tabsText: "切换",
        routerType: 'push',
        to: '#/prolist',
        ...tasObj,
    },
    {
        pagePath: "/error",
    },
    {
        pagePath: "/load",
    },
    {
        pagePath: "/login",
        param: {
            name: null as any
        },
    },
    {
        pagePath: "/prolist",
        showTitle: true,
        titleTop: true,
        titleStyles: {
            background: 'linear-gradient(90deg, rgba(62,185,88,0.25) 0%, rgba(255,255,255,0.05) 100%)',
            boxShadow: '0px 4px 20px 0px rgba(133,165,113,0.15)',
        },
        title: '选择项目',
        param: {
            id: null as any
        },
    },
] as const //编辑完成后使用
// ] as routerItem[]//编辑路由内容使用,起提示作用，编辑完成后请注释

type RouterList = typeof routerList
export type RouterListPath = RouterList[number]['pagePath']
type RouterListNames = UnionToTuple<RouterListPath>
//@ts-ignore
type RouterParam<T> = RouterList[IndexOf<RouterListNames, T>]['param']
export type RouterListParam<T> = RouterParam<T> extends Object ? RouterParam<T> : undefined
export type getParam<T extends RouterListPath> = RouterParam<T>;