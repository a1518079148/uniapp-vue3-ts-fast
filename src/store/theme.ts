import cookie from "@/utils/cookie"
import { reactive } from "vue"

const themeCache = cookie.get('theme')
const themeList = ['light', 'dark']
const theme = reactive({
    theme: themeList.includes(themeCache) ? themeCache : 'light',
    setTheme: (name: string) => {
        if (themeList.includes(name)) {
            theme.theme = name
            cookie.set('theme', name)
        }
    }
})
export default theme