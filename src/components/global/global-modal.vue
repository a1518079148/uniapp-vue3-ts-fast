<template>
    <div class="g-popup">
        <uni-popup ref="popupRef" type="bottom" style="z-index:101">
            <view class="show-modal">
                <view class="title">{{ props.title }}</view>
                <view v-if="content" class="modal-content">{{ props.content }}</view>
                <view class="btn-box rowBC">
                    <view class="cc cancel" @click="onCancel">{{ cancelText }}</view>
                    <view class="cc sure" @click="onConfirm">{{ confirmText }}</view>
                </view>
            </view>
        </uni-popup>
    </div>
</template>

<script setup lang="ts">
/**
 * UI 需要自定义的modal
 */
import { ref, watch } from 'vue';
const popupRef = ref()
const emit = defineEmits(['cancel', 'confirm', 'update:show'])
const props = defineProps({
    show: { default: false, },
    type: { default: 'center' },
    title: { default: '提示' },
    content: { default: '' },
    confirmText: { default: '确认' },
    cancelText: { default: '取消' },
    confirmColor: { default: '#007aff' },
    cancelColor: { default: '#000' },
    width: {
        type: [String, Number],
        default: 600
    },
    height: {
        type: [String, Number],
        default: 350
    }
})
const onCancel = () => {
    emit('update:show', false)
    emit('cancel')
}
const onConfirm = () => {
    emit('update:show', false)
    emit('confirm')
}

const showModal = () => {
    popupRef.value.open(props.type)
}
const hideModal = () => {
    popupRef.value.close()
}

watch(() => props.show, (val) => {
    if (val) showModal()
    else hideModal()
})

</script>

<style lang="scss" scoped>
.g-popup {
    z-index: 101;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
}

.show-modal {
    z-index: 102;
    width: 630rpx;
    margin: 0 30px;
    padding: 50rpx;
    box-sizing: border-box;
    background: white;
    border-radius: 28rpx;

    .title {
        margin-bottom: 24rpx;
        text-align: center;
        font-size: 40rpx;
        color: #333333;
        font-weight: bold;
    }

    .modal-content {
        margin-bottom: 54rpx;
        font-size: 28rpx;
        font-weight: 400;
        color: #666666;
        line-height: 48rpx;
    }

    .btn-box {
        .cc {
            width: 252rpx;
            height: 96rpx;
            line-height: 96rpx;
            background: #e5eeff;
            text-align: center;
            font-weight: 500;
            font-size: 32rpx;
            border-radius: 60rpx;
        }

        .cancel {
            color: #4989fe;
        }

        .sure {
            background: linear-gradient(270deg, #4989fe 0%, #49adfe 100%);
            color: white;
        }
    }
}
</style>
