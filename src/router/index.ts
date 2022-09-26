import store from "@/store";
import clog from "@/utils/clog";
import { routerList } from "./routeList";
import { createRouter } from "./router";

const tabsList = [
    routerList[0],
    routerList[1],
]

const router = createRouter(<any>routerList, tabsList)


router.beforeJump = async (from, to, next, type) => {
    next()
    if (router.history.length == 2 && type === 'push') {
        store.router.close = true
        store.router.showRouter()
    }
    else if (router.history.length == 1) {
        store.router.close = true
        store.router.show = false
    }
}


export default router