<template>
    <error v-if="show('/error')" />
    <load v-else-if="show('/load')" />
    <login v-else-if="show('/login')" />
    <prolist v-else-if="show('/prolist')" />

    <shome v-else-if="show('/service/home')" />
    <sp1 v-else-if="show('/service/p1')" />
    <sp2 v-else-if="show('/service/p2')" />
    <sp3 v-else-if="show('/service/p3')" />

</template>

<script lang="ts" setup>
import error from '@/pages/error/index.vue';
import load from '@/pages/load/index.vue';
import login from '@/pages/login/index.vue';
import prolist from '@/pages/prolist/index.vue';
import shome from '@/pages/service/home/index.vue';
import sp1 from '@/pages/service/p1/index.vue';
import sp2 from '@/pages/service/p2/index.vue';
import sp3 from '@/pages/service/p3/index.vue';

const props = defineProps({
    pagePath: { default: '' }
})

const show = (name: string) => {
    return props.pagePath === name
}
</script>
<style lang="less" scoped>
</style>