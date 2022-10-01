<template>
    <div class="content row flex-center">
        <div class="box column flex-center no-wrap">
            <img src="/static/image/logo.png" class="logo" />
            <input v-model="conf.form.name" class="wty-input wty-btn-wh" style="margin-top:77rpx" placeholder="请输入账号"
                placeholder-style="font-size: 35rpx;" />
            <input v-model="conf.form.password" class="wty-input wty-btn-wh" style="margin-top:64rpx"
                placeholder="请输入密码" placeholder-style="font-size: 35rpx;" />
            <div style="margin-top:64rpx" class="wty-btn column flex-center wty-btn-wh" @click="formSubmit">登录</div>
            <div class="bottom-text" @click="changeMode">切换主题</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import store from '@/store';
import { reactive } from 'vue';

const conf = reactive({
    form: {
        name: '1',
        password: '2'
    },
    theme: store.theme.theme
})

const formSubmit = () => {
    router.pushParam('/prolist', {
        id: '123'
    })
}

const changeMode = () => {
    const theme = conf.theme === 'light' ? 'dark' : 'light'
    store.theme.setTheme(theme)
    conf.theme = theme
}

</script>

<style lang="scss" scoped>
@import 'index.scss';
</style>
