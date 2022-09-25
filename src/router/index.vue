<template>
    <error v-if="show('/error')" />
    <load v-else-if="show('/load')" />
    <home v-else-if="show('/home')" />
    <user v-else-if="show('/user')" />
    <login v-else-if="show('/login')" />
    <prolist v-else-if="show('/prolist')" />
</template>

<script lang="ts" setup>
import error from '@/pages/error/index.vue';
import home from '@/pages/home/index.vue';
import load from '@/pages/load/index.vue';
import login from '@/pages/login/index.vue';
import prolist from '@/pages/prolist/index.vue';
import user from '@/pages/user/index.vue';

const props = defineProps({
    pagePath: { default: '/load' }
})

const show = (name: string) => {
    return props.pagePath === name
}
</script>
<style lang="less" scoped>
</style>