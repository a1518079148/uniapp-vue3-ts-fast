<template>
    <div style="width:100vw;height:100vh;overflow: hidden;" class="row flex-center">
        <div class="box row flex-center">
            <img src="/static/image/bg2.png" class="icon" />
            <div style="position: absolute;">
                <img src="/static/image/logo.png" class="logo" />
            </div>
            <div class="logo_text">
                Uniapp+Vue3+TypeScript
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import ctimer from '@/utils/ctimer';
ctimer.add(() => {
    router.clear('/login')
}, 1500)

</script>

<style lang="scss" scoped>
.box {
    position: relative;
}

.icon {
    width: 750rpx;
    height: 1010rpx;
}

.logo {
    width: 200rpx;
    height: 200rpx;
}

.logo_text {
    position: absolute;
    bottom: -20rpx;
    font-size: 40rpx;
    font-weight: bold;
    color: #85A571;
    font-family: 'bsfont';
}
</style>
