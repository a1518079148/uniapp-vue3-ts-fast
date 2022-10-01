<template>
    <div :class="conf.class">
        <div style="margin-top:-64rpx;position: absolute;" class="log-btn column flex-center log-btn-wh" @click="show">{{
                conf.show ? '隐藏' : '显示'
        }}日志</div>
        <div style="margin-top:-64rpx;position: absolute;right:10rpx;width: 100rpx;" class="log-btn column flex-center log-btn-wh"
            @click="store.log.clear">
            清空</div>
        <div class="log-content">
            <template v-for="(item, index) in store.log.list" :key="index">
                <div>
                    {{ item }}
                </div>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import store from '@/store';
import { reactive } from 'vue';
const conf = reactive({
    show: false,
    transform: 'translateY(20vh)',
    class: ['', 'log-box']
})

const show = () => {
    conf.show = !conf.show
    if (conf.show) conf.class.push('log-box-show')
    else conf.class.pop()
}

show()

</script>

<style lang="scss">
.log-box {
    z-index: 110;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 20vh;
    background: rgba(255, 255, 255, 0.616);
    display: flex;
    padding-bottom: env(safe-area-inset-bottom);
    border-top: 1px solid #a39797;
    justify-content: center;
    transform: translateY(20vh);
    transition: all .3s;
}

.log-box-show {
    transform: translateY(0vh);
}

.log-content {
    font-size: 30rpx;
    height: 20vh;
    width: 100vw;
    overflow-y: auto;
}

.log-btn-wh {
    width: 200rpx;
    height: 44rpx;
    border-radius: 44rpx;
    padding: 5rpx 18rpx;
    font-size: 30rpx;
}

.log-btn {
    background: var(--primary);
    color: #FFFFFF;
    border: 1px solid var(--primary);
    transition: all .3s;

    &:active {
        color: #C5C5C5;
        background: none;
        border: 1px solid #C5C5C5;
    }
}
</style>

