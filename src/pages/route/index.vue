<template>
    <view :class="['', store.theme.theme]" style="overflow: hidden;">
        <page-container position="center" :duration="0" :show="store.router.show" :overlay="false"
            @beforeleave="beforeleave">
        </page-container>
        <div style="width:200vw;height:100vh;overflow: hidden;">
            <div class="router-box">
                <div style="position: absolute;z-index: 100;height: 100vh;width: 100vw;" :style="{
                    transform: conf.router.item1.transform,
                    transition: conf.router.item1.transition
                }">
                    <box :item="conf.router.item1.item" />
                </div>
            </div>
            <div class="router-box">
                <div style="position: absolute;z-index: 100;height: 100vh;width: 100vw;" :style="{
                    transform: conf.router.item2.transform,
                    transition: conf.router.item2.transition
                }">
                    <box :item="conf.router.item2.item" />
                </div>
            </div>
        </div>
        <global-bottom :show="router.item.item.showTabs"></global-bottom>
        <log v-if="conf.debug" />
        <mask v-if="conf.mask" />
        <fps :show="conf.fps" />
    </view>
</template>

<script setup lang="ts">
import fps from '@/components/canvas/index.vue';
import router from '@/router';
import store from '@/store';
import ctimer from '@/utils/ctimer';
import { onMounted, reactive, watch } from 'vue';
import box from './box.vue';

const conf = reactive({
    debug: false,
    mask: false,
    fps: true,
    router: {
        item1: {
            item: null as any,
            transform: 'translate(0vw, 0vh)',
            transition: 'all 0s',
        },
        item2: {
            item: null as any,
            transform: 'translate(0vw, 0vh)',
            transition: 'all 0s',
        },
        timerId: 0,
        timerFun: () => { }
    }
})

const ani = (val: any, item1: any, item2: any, str1: string, str2: string, str3: string) => {

    // conf.mask = true

    item1.transition = 'all 0s'
    item1.transform = `translate(${str1}, 0vh)`
    item1.item = val

    ctimer.add(() => {
        if (str1 !== str2)
            item1.transition = 'all .3s'
        item1.transform = `translate(${str2}, 0vh)`
        item2.transition = 'all .3s'
        item2.transform = `translate(${str3}, 0vh)`
    }, 8)

    conf.router.timerFun = () => {

        // conf.mask = false

        item2.item = null
        ctimer.remove(conf.router.timerId)
        conf.router.timerFun = () => { }
    }

    conf.router.timerId = ctimer.add(conf.router.timerFun, 300)
}

router.init()

onMounted(() => {
    watch(() => router.item, (val, oldVal) => {
        if (val != null) {
            conf.router.timerFun()
            //从左进-返回上一级路由
            if (router.type === 'back') {
                if (conf.router.item2.item === null) {
                    ani(val.item, conf.router.item2, conf.router.item1, '-200vw', '-100vw', '100vw')
                } else {
                    ani(val.item, conf.router.item1, conf.router.item2, '-100vw', '0vw', '0vw')
                }
            }
            //从右进-添加路由
            else {
                if (conf.router.item2.item === null) {
                    const startX = conf.router.item1.item ? '0vw' : '-100vw'
                    ani(val.item, conf.router.item2, conf.router.item1, startX, '-100vw', '-100vw')
                } else {
                    ani(val.item, conf.router.item1, conf.router.item2, '100vw', '0vw', '-200vw')
                }
            }
        }
    })

    //第一个页面
    router.clear('/load')
})

const beforeleave = () => {
    if (store.router.close) {
        store.router.close = false
        return
    }
    store.router.showRouter(() => {
        router.back()
    })

}
</script>

<style lang="scss" scoped>
.router-box {
    display: inline-block;
    width: 100vw;
    height: 100vh;
}
</style>