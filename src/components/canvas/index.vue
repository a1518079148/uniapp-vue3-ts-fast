<template>
    <canvas id="globalCtx" type="2d" class="fit" />
    <div v-if="show" style="position: fixed;top: 0px;left: 15px;z-index:200;color:#00000055;font-size:30rpx"
        :style="{ marginTop: `${store.system.statusBarHeight + store.system.uniBarHeight}px` }">
        FPS:{{ conf.maxfps }}
    </div>
</template>

<script lang="ts" setup>
import store from '@/store';
import { getCurrentInstance, onMounted, reactive } from 'vue';
defineProps({
    show: { default: true }
})
const conf = reactive({
    fps: 0,
    fpsList: [] as any[],
    maxfps: undefined as any,
    startTime: new Date().getTime()
})
onMounted(() => {
    wx.createSelectorQuery()
        .in(getCurrentInstance())
        .select('#globalCtx')
        .fields({ node: true, size: true })
        .exec((res: any) => {
            const canvas = res[0].node
            const draw = () => {
                if (conf.fps == 0) conf.startTime = new Date().getTime()
                conf.fps++
                if (new Date().getTime() - conf.startTime >= 1000) {
                    conf.startTime = new Date().getTime()
                    if (conf.fpsList.length > 5) {
                        let maxfps = conf.fpsList.reduce((sum, value) => { return sum + value }, 0) / conf.fpsList.length
                        conf.maxfps = maxfps.toFixed(0)
                        conf.fpsList.length = 0
                    }
                    conf.fpsList.push(conf.fps)
                    if (!conf.maxfps) conf.maxfps = conf.fps
                    conf.fps = 0
                }
                store.ctx.run()
                canvas.requestAnimationFrame(draw)
            }
            canvas.requestAnimationFrame(draw)

        })
})
</script>
<style lang="scss" scoped>
</style>