<script setup lang="ts">
import { onHide, onLaunch, onLoad, onShow } from '@dcloudio/uni-app';
import clog from './utils/clog';
onLaunch(() => {
    clog.info('App Launch')
})
onShow(() => {
    clog.info('App Show')
})
onHide(() => {
    clog.info('App Hide')
})
onLoad(() => {
    clog.info('App Load')
})
</script>
<style>
</style>
