<template>
    <div class="" >
        <m-header title="标题">
            <div slot="left" @click="open = !open"><img src="../assets/stealth.png" /></div>
        </m-header>
        <m-aside :addClass="open">
        	<div slot="butta" @click="open = !open">
                关闭
            </div>
        </m-aside>
    </div>
</template>

<script>
import MHeader from '@/components/MHeader';
import MAside from '@/components/MAside'

export default {
    name: 'Main',
    data(){
        return {
            open:false
        }
    },
    components: {
        MHeader,
        MAside
    }
}
</script>

<style>
</style>
