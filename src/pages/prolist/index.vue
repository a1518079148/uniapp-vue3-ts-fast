<template>
    <div class="absolute fit column">
        <div class="col scroll-y">
            <template v-for="item in conf.list" :key="item.id">
                <div :class="[item.id === conf.choose.id ? 'pro-show' : undefined]">
                    <div class="pro-line row items-center" @click="conf.choose = item">
                        <div class="pro-choose">
                            <div class="pro-choose-p">
                            </div>
                        </div>
                        <div class="pro-text">{{ item.name }}</div>
                    </div>
                </div>
            </template>
        </div>
        <div class="flex flex-center" style="height:158rpx;margin-bottom:26rpx;">
            <div style="width:526rpx;margin-top:5rpx;" class="wty-btn column flex-center wty-btn-wh" @click="choose">
                下一步</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import router from '@/router';
import { getParam } from "@/router/routeList";
import store from '@/store';
import { reactive } from 'vue';

const conf = reactive({
    item: router.item.param as getParam<'/prolist'>,
    list: [
        {
            id: 1,
            name: '电商项目',
        },
        {
            id: 2,
            name: '运动项目',
        },
        {
            id: 3,
            name: '躺平项目',
        },
    ],
    choose: {
        id: 1,
        name: '电商项目'
    }
})

const choose = () => {
    store.user.proinfo = {
        id: conf.choose.id,
        name: conf.choose.name
    }
    router.clear('/service/home')
}

</script>
<style lang="scss" scoped>
.pro-line {
    width: 698rpx;
    height: 60rpx;
    border-radius: 30rpx;
    background: #EFEFEF;
    margin: 14rpx auto;
    color: #706460;
    border: 2rpx solid #C2EDCB00;

    &:nth-of-type(1) {
        margin-top: 24rpx;
    }

    &:nth-last-of-type(1) {
        margin-bottom: 24rpx;
    }
}

.pro-choose {
    margin-left: 6rpx;
    width: 46rpx;
    height: 46rpx;
    border: 2rpx solid #C5C5C5;
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &-p {
        position: absolute;
        width: 0rpx;
        height: 0rpx;
        background-color: #3EB958;
        border-radius: 50%;
        transition: all .3s;
        transform-origin: center center;
    }

}

.pro-text {
    margin-left: 30rpx;
    font-size: 32rpx;

    &-p {
        color: #3EB958;
    }

}

.pro-show {

    .pro-line {
        background: #E7F3E9;
        color: #3EB958;
        border: 2rpx solid #C2EDCB;
    }

    .pro-choose {
        border: 2rpx solid #3EB958;
    }

    .pro-choose-p {
        width: calc(100% - 5rpx);
        height: calc(100% - 5rpx);
    }
}
</style>