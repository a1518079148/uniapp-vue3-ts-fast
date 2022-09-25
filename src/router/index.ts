import store from "@/store";
import { routerList } from "./routeList";
import { createRouter } from "./router";

const tabsList = [
    routerList[0],
    routerList[1],
]

const router = createRouter(<any>routerList, tabsList)


router.beforeJump = async (from, to, next, type) => {
    let bhl = router.history.length
    next()
    if (bhl != router.history.length && router.history.length == 2 && type !== 'back') {
        store.router.showRouter(true)
    }
    else if ((router.history.length == 1 && type === 'back') || type === 'clear' || type === 'replace') {
        store.router.show = false
    }
}


export default router