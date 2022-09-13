export default class http {
    static post<T = any>(url: string = '', data: any = {}, options?: {}): Promise<Res<T>> {
        return new Promise<Res<T>>((resolve, reject) => {
            uni.request({
                url: "http://192.168.1.6:8101" + url,
                method: "POST",
                data: data,
                header: {
                    'content-type': 'application/json;charset=UTF-8',
                    'token': '666'
                },
                timeout: 3000,
                success: (res: any) => {
                    uni.showToast({ title: "成功" })
                    resolve(<Res<T>>res)
                },
                fail: (res: any) => {
                    uni.showToast({ title: "失败" })
                    reject(<Res<T>>res)
                },
                complete: () => { }
            })
        })
    }
}

export interface Res<T = any> {
    code: number
    isOk: boolean
    msg: string
    data: T
}