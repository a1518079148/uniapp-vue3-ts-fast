export const routerList = [
    {
        pagePath: "/home",
        iconPath: "/static/image/logo.png",
        selectedIconPath: "/static/image/logo.png",
        tabsText: "首页",
        showTitle: true,
        showTabs: true,
    },
    {
        pagePath: "/user",
        iconPath: "/static/image/logo.png",
        selectedIconPath: "/static/image/logo.png",
        tabsText: "用户",
        showTabs: true,
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
        titleStyles: {
            background: '#000fff',
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