import store from "@/store"
import { reactive } from "vue"

const c = reactive({
    ctx: null as any
})

/**
 * canvas工具
 */
export const canvas = (canvas: any, width: number, height: number) => {

    // 渲染上下文
    c.ctx = canvas.getContext('2d')

    // 初始化画布大小
    const dpr = store.system.pixelRatio
    canvas.width = width * dpr
    canvas.height = height * dpr
    c.ctx.scale(dpr, dpr)

    // 清空画布
    c.ctx.clearRect(0, 0, width, height)

    return c.ctx

}