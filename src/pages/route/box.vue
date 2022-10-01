<template>
    <template v-if="item != null">
        <global-title v-if="item.showTitle" :title="item.title ?? item.tabsText" :backText="item.titleBackText" :backFun="item.titleBackFun" :styles="item.titleStyles">
        </global-title>
        <view style="overflow: hidden auto;z-index: 100;position: fixed;width:100vw;background-color: #F7F7F7;" :style="{
            marginTop: `${item.showTitle && item.titleTop ? store.system.statusBarHeight + store.system.uniBarHeight : 0}px`,
            height: `calc(100vh - ${getHeight(item)}px)`
        }">
            <route-view :pagePath="item.pagePath" />
        </view>
    </template>
</template>

<script lang="ts" setup>

import store from '@/store';

defineProps({
    transform: { default: 'translate(0vw, 0vh)' as any },
    transition: { default: 'all 0s' as any },
    item: { default: {} as any as routerItem },
})

const getHeight = (item: routerItem) => {
    let getTitleHeight = () => {
        return item.showTitle && item.titleTop ? store.system.statusBarHeight + store.system.uniBarHeight : 0
    }
    return getTitleHeight() + (item.showTabs ? store.system.uniTabsHeight : 0)
}

</script>
<style lang="less" scoped>
</style>