<template>
    <div>
        项目列表
        {{ JSON.stringify(conf.item) }}
        <div style="margin-top:64rpx;width:300rpx" class="wty-btn columnCC wty-btn-wh" @click="router.push('/home')">
            首页</div>
    </div>
</template>

<script lang="ts" setup>
import router from '@/router';
import { getParam } from "@/router/routeList";
import { reactive } from 'vue';

const conf = reactive({
    item: router.item.param as getParam<'/prolist'>
})

</script>
<style lang="less" scoped>
</style>