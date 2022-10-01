<template>
    <div class="title-bar" :style="getStyle(styles)">
        <div class="title-box" :style="{ marginTop: `${store.system.statusBarHeight}px` }">
            <div class="title-left" @click="back">
                <div class="title-left-icon" v-if="backShow">
                    <img src="@/static/image/left.svg" style="width:22px;margin-top: 2px;height: 44px;" />
                    {{ backText }}
                </div>
            </div>
            <div class="title-centent ellipsis">{{ title }}</div>
            <div class="title-right"></div>
        </div>
    </div>
</template>
<script setup lang="ts">
import router from '@/router';
import store from '@/store';
import { reactive } from 'vue';

const props = defineProps({
    styles: { default: {} },
    title: { default: '标题' },
    backText: { default: '' },
    backShow: { default: true },
    backFun: { default: null as any as Function },
})

const conf = reactive({
    style: {
        background: '#fff000',
    } as CSSStyleDeclaration
})

const getStyle = (val: any = {}): any => {
    Object.keys(val).forEach(key => {
        conf.style[key] = val[key]
    })
    return conf.style
}

const back = () => {
    if (props.backFun) props.backFun()
    else router.back()
}

</script>
<style lang="scss" scoped>
.title {
    &-bar {
        position: fixed;
        z-index: 101;
        width: 100vw;
    }

    &-box {
        display: flex;
        height: 44px;
        padding: 0 10px;
        justify-content: flex-start;
        align-items: center;
        color: #000;
    }

    &-left {
        width: 60px;
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;

        &-icon {
            display: inline-flex;
            align-items: center;
            color: rgb(51, 51, 51);
        }
    }

    &-centent {
        flex: 1;
        text-align: center;
        font-size: 16px;
    }

    &-right {
        width: 80px;
    }

}
</style>
