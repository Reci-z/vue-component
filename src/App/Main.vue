<template>
    <div class="" >
        <m-header title="标题">
            <div slot="left" @click="open = !open"><img src="../assets/stealth.png" /></div>
        </m-header>
        <m-aside :addClass.sync="open">
        	<div slot="butta" @click="open = !open">
                <div class="header-mean">
                    <div class="header-phone">
                        <span><img src="../assets/avatar.jpg" /></span>
                    </div>
                    <div class="header-describe">
                        滑出的侧边栏，可以添加自己喜欢的内容
                    </div>
                </div>
            </div>
        </m-aside>
        <c-arousel :showimg="lists" class="main-carousel">
            
        </c-arousel>

        <div style="text-align: right;">
            <button @click.stop="isShow = true">123</button>
        </div>

        <z-aside :is-show.sync="isShow">
            <h1>内容</h1>
        </z-aside>
    </div>
</template>

<script>
import MHeader from '@/components/MHeader';
import MAside from '@/components/MAside';
import CArousel from '@/components/CArousel';

import ZAside from '@/components/ZAside';

export default {
    name: 'Main',
    data(){
        return {
            open:false,
            lists:{
                src:['/static/b1.jpg','/static/b2.jpg','/static/b3.jpg']
            },

            isShow: false
        }
    },
    components: {
        MHeader,
        MAside,
        CArousel,

        ZAside
    }
}
</script>

<style>
.header-mean{
    width: 100%;
    height: 240px;
    background: #313334;
}
.header-phone{
    height: 130px;
    width: 100%;
    text-align: center;
    padding-top: 30px;
}
.header-phone span,.header-phone span img{
    height: 100px;
    width: 100px;
    background: #fff;
    display: inline-block;
    border-radius: 50%;
}
.header-describe{
    color: #fff;
    padding: 0 10px;
}
.main-carousel{
    padding-top: 50px;
}
</style>
