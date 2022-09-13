<script setup lang="ts">
import { onBackPress, onHide, onLaunch, onShow } from '@dcloudio/uni-app';
onLaunch(() => {
    console.log('App Launch')
})
onShow(() => {
    console.log('App Show')
})
onHide(() => {
    console.log('App Hide')
})
onBackPress((options) => {
    console.log(options.from);
    if (options.from == 'backbutton') {
        return true;
    }
    else if (options.from == 'navigateBack') {
        return false;
    }
    console.log('App Hide')
})
</script>
<style>
</style>
