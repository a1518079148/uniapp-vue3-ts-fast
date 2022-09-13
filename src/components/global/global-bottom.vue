<template>
    <div class="tab-bar" @click="switchTab(0)">
        <div class="tab-bar-border"></div>
        <view v-for="(item, index) in conf.list" :key="index" @click="switchTab(item)" class="tab-bar-item">
            <img :src="router.item.item.pagePath === item.pagePath ? item.selectedIconPath : item.iconPath"
                class="icon" />
            <div :style="{ color: router.item.item.pagePath === item.pagePath ? conf.selectedColor : conf.color }"
                class="text">{{
                        item.tabsText
                }}</div>
        </view>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { reactive } from 'vue';

const conf = reactive({
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: router.tabslist,
})

const switchTab = (item: any) => {
    router.replace(item.pagePath)
}

</script>

<style lang="scss" scoped>
.tab-bar {
    z-index: 999;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: white;
    display: flex;
    padding-bottom: env(safe-area-inset-bottom);
}

.tab-bar-border {
    background-color: rgba(0, 0, 0, 0.33);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    transform: scaleY(0.5);
}

.tab-bar-item {
    flex: 1;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.tab-bar-item {
    .icon {
        width: 27px;
        height: 27px;
    }

    .text {
        font-size: 10px;
        margin-top: 5px;
    }
}
</style>

