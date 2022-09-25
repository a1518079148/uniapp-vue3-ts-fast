export default class cookie {

    static get = (key: string) => {
        return uni.getStorageSync(key)
    }

    static set = (key: string, value: string) => {
        uni.setStorageSync(key, value)
    }

}