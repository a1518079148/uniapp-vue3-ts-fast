<template>
    <div class="content rowCC">
        <div class="box columnCC">
            <img src="/static/image/logo.png" class="logo" />
            <input v-model="conf.form.name" class="wty-input wty-btn-wh" style="margin-top:77rpx" placeholder="请输入账号"
                placeholder-style="font-size: 35rpx;" />
            <input v-model="conf.form.password" class="wty-input wty-btn-wh" style="margin-top:64rpx"
                placeholder="请输入密码" placeholder-style="font-size: 35rpx;" />
            <div style="margin-top:64rpx" class="wty-btn columnCC wty-btn-wh" @click="formSubmit">登录</div>
            <div class="bottom-text" @click="changeMode">切换验证码登录</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { reactive } from 'vue';

const conf = reactive({
    form: {
        name: '1',
        password: '2'
    }
})

const formSubmit = () => {
    router.pushParam('/prolist',{
        id:'123'
    })
}

const changeMode = () => {
}

</script>

<style lang="scss" scoped>
@import 'index.scss';
</style>
