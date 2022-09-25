<template>
    <div @click="switchTab(0)" :class="conf.class">
        <div class="tab-bar-border"></div>
        <view v-for="(item, index) in conf.list" :key="index" @click="switchTab(item)" class="tab-bar-item">
            <img :src="router.item.item.pagePath === item.pagePath ? item.selectedIconPath : item.iconPath"
                class="tab-bar-icon" />
            <div :style="{ color: router.item.item.pagePath === item.pagePath ? conf.selectedColor : conf.color }"
                class="tab-bar-text">{{
                        item.tabsText
                }}</div>
        </view>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { reactive, watch } from 'vue';

const props = defineProps({
    show: { default: false, }
})

const conf = reactive({
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: router.tabslist,
    class: ['', 'tab-bar', 'tab-bar-show']
})

const switchTab = (item: any) => {
    router.clear(item.pagePath)
}

const show = () => {
    if (props.show) conf.class[2] = 'tab-bar-show'
    else conf.class[2] = 'tab-bar-hide'
}

watch(() => props.show, (val) => {
    show()
})

show()

</script>

<style lang="scss">
.tab-bar {
    z-index: 100;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: white;
    display: flex;
    padding-bottom: env(safe-area-inset-bottom);
    transition: all .3s;
}

.tab-bar-hide {
    transform: translate(0px, 60px);
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
    .tab-bar-icon {
        width: 27px;
        height: 27px;
    }

    .tab-bar-text {
        font-size: 10px;
        margin-top: 5px;
    }
}
</style>

