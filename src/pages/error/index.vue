<template>
    <div class="content column flex-center">
        <div style="font-size:100rpx">404</div>

        <div style="font-size:40rpx">
            路径：{{ conf.param.path }}
        </div>

        <div style="margin-top:64rpx;width:300rpx" class="wty-btn column flex-center wty-btn-wh" @click="router.push('/load')">
            重新加载</div>

    </div>
</template>

<script lang="ts" setup>
import router from '@/router';
import { onMounted, reactive } from 'vue';
const conf = reactive({
    param: {} as any
})

onMounted(() => {
    conf.param = router.item.param
})
</script>
<style lang="less" scoped>
</style>