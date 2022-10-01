<template>
    <div class="absolute fit column">
        <uni-swiper-dot :info="conf.info" :current="conf.current" field="content" :mode="conf.mode"
            :dots-styles="conf.dotsStyles" style="margin-bottom:10rpx;">
            <swiper class="swiper-box" @change="change" autoplay circular style="height:400rpx">
                <swiper-item>
                    <img class="fit" src="@/static/image/pro.png" />
                </swiper-item>
                <swiper-item>
                    <view class="fit flex flex-center">
                        B
                    </view>
                </swiper-item>
                <swiper-item>
                    <view class="fit flex flex-center">
                        C
                    </view>
                </swiper-item>
            </swiper>
        </uni-swiper-dot>
        <div class="col scroll-y">
            <div class="row" style="gap:30rpx;padding: 30rpx;">
                <div class="val-item column flex-center no-wrap" v-for="l in 15" :key="l">
                    <div class="val-item-text1">0.00</div>
                    <div class="val-item-text2">KW</div>
                    <div class="val-item-text3">运动距离</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import store from '@/store';
import { reactive } from 'vue';

const conf = reactive({
    info: [1, 1, 1],
    current: 0,
    mode: 'round',
    dotsStyles: {
        backgroundColor: 'rgba(66,66,66,0.1)',
        border: '1px rgba(66,66,66,0) solid',
        color: '#fff',
        selectedBackgroundColor: 'rgba(66,66,66,0.4)',
        selectedBorder: '1px rgba(66,66,66,0) solid'
    }
})

router.item.item.title = store.user.proinfo.name + "-酱油"

const change = (e: any) => {
    conf.current = e.detail.current;
}

</script>

<style lang="scss">
.val-item {
    width: 210rpx;
    height: 156rpx;
    border-radius: 20rpx;
    background: rgba(0, 0, 0, 0.03);

    &-text1 {
        font-size: 44rpx;
        line-height: 44rpx;
        color: #3EB958;
    }

    &-text2 {
        font-size: 20rpx;
        margin: 10rpx 0rpx 5rpx 0rpx;
        color: rgba(66, 66, 66, 0.5);
    }

    &-text3 {
        font-size: 22rpx;
        color: rgba(66, 66, 66, 0.6);
    }

}
</style>
