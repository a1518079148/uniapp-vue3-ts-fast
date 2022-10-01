import { reactive } from "vue"

let isWEIXIN = false
let isH5 = false

// #ifdef MP-WEIXIN
isWEIXIN = true
// #endif

// #ifdef H5
isH5 = true
// #endif

/**
 * 判断是否为微信浏览器环境
 */
const isWeixinClient = () => {
    let isWeixinClient = false
    // #ifdef H5
    isWeixinClient = window.navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1
    // #endif
    return isWeixinClient
}

const systemInfo = uni.getSystemInfoSync()
const system = reactive({
    uniBarHeight: 44,
    uniTabsHeight: 70,
    statusBarHeight: systemInfo.statusBarHeight as number,
    windowHeight: systemInfo.windowHeight,
    windowWidth: systemInfo.windowWidth,

    pixelRatio: systemInfo.pixelRatio,//分辨率比值
    platform: systemInfo.platform, // 客户端平台，值域为：ios、android
    system: systemInfo.system, // 操作系统版本
    brand: systemInfo.brand, // 手机品牌
    model: systemInfo.model, // 手机型号
    isAndroid: systemInfo.system.includes('Android') || systemInfo.system.includes('Other'),
    isIOS: systemInfo.system.includes('iOS'),
    isDev: process.env.NODE_ENV === 'development',
    isH5,
    isWEIXIN,
    isWeixinClient: isWeixinClient(),
})

export default system