<template>
    <template v-if="item != null">
        <global-title v-if="item.showTitle" :title="item.title ?? item.tabsText" :styles="item.titleStyles">
        </global-title>
        <view style="overflow: hidden auto;z-index: 100;position: fixed;width:100vw;" :style="{
            marginTop: `${item.showTitle ? store.system.statusBarHeight + store.system.uniBarHeight : 0}px`,
            height: `calc(100vh - ${item.showTabs ? store.system.uniTabsHeight + (item.showTitle ? store.system.statusBarHeight + store.system.uniBarHeight : 0) : item.showTitle ? store.system.statusBarHeight + store.system.uniBarHeight : 0}px)`
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
    item: { default: {} as any },
})

</script>
<style lang="less" scoped>
</style>