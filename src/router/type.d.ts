declare type router = {
    list: routerItem[];
    tabslist: routerItem[];
    history: routerHistory[];
    item: routerHistory;
    push: (pagePath: string, param?: any) => void;
    replace: (pagePath: string, param?: any) => void;
    clear: (pagePath: string, param?: any) => void;
    back: () => void;
    beforeJump: (to: routerHistory, from: routerHistory, next: () => void, type: 'push' | 'replace' | 'clear') => void;
    toError: (path: string) => void;
}

declare type routerItem = {

    pagePath: string;

    //顶部导航栏配置
    title?: string;
    showTitle?: boolean
    titleStyles?: CSSStyleDeclaration

    //底部导航栏配置
    showTabs?: boolean
    iconPath?: string;
    selectedIconPath?: string;
    tabsText?: string;
}

declare type routerHistory = {
    item: routerItem,
    param?: {
        [key: string]: any
    };
}