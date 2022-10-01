declare type routerItem = {

    pagePath: string;

    //跳转-需要在路径前加上#-如：跳转到'/home'，写成'#/home'
    to?: string

    //顶部导航栏配置
    title?: string;
    titleTop?: boolean
    showTitle?: boolean
    titleBackText?: string
    titleBackFun?: string
    titleStyles?: CSSStyleDeclaration

    //底部导航栏配置
    showTabs?: boolean
    iconPath?: string;
    selectedIconPath?: string;
    tabsText?: string;
    routerType?: string //点击跳转方式
}

declare type routerHistory = {
    item: routerItem,
    param?: {
        [key: string]: any
    };
}