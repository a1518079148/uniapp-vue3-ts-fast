<template>
    <global-title v-if="router.item.item.showTitle" :title="router.item.item.title ?? router.item.item.tabsText">
    </global-title>
    <page-container position="center" :duration="0" :show="conf.show" :overlay="false" @beforeleave="beforeleave">
        <view style="overflow: hidden auto;" :style="{
            paddingTop: `${router.item.item.showTitle ? store.system.statusBarHeight + store.system.uniBarHeight : 0}px`,
            height: `calc(100vh - ${router.item.item.showTabs ? store.system.uniTabsHeight : 0}px)`
        }">
            <phome v-if="router.item.item.pagePath === '/home'" />
            <puser v-if="router.item.item.pagePath === '/user'" />
            {{ router.item.item.pagePath }}
        </view>
    </page-container>
    <global-bottom v-if="router.item.item.showTabs"></global-bottom>
</template>

<script setup lang="ts">
import phome from '@/pages/home/index.vue';
import puser from '@/pages/user/index.vue';
import router from '@/router';
import store from '@/store';
import { onMounted, reactive } from 'vue';

const conf = reactive({
    show: true
})

onMounted(() => {
})

const beforeleave = () => {
    conf.show = false
    setTimeout(() => {
        conf.show = true
    }, 0)
}
</script>

<style>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>