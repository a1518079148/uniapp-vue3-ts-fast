<template>
    <view class="content">
        <view>加载中。。。</view>
    </view>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
    uni.navigateTo({
        url: '/pages/route/index'
    })
})
</script>

<style>
.content {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: #fff000;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}
</style>
