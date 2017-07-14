<template>
    <div class="" >
        <!-- 头部 -->
        <z-header title="标题">
            <div slot="left" @click="open = !open"><img src="../assets/stealth.png" /></div>

            <div slot="right" @click.stop="isshow = true"><img src="../assets/stealth.png" /></div>
        </z-header>

        <!-- 侧边滑出栏 不带遮罩层 -->
        <z-asiderigth :isshow.sync="isshow">
            <div class="header-mean">
                <div class="header-phone">
                    <span><img src="../assets/avatar.jpg" /></span>
                </div>
                <div class="header-describe">
                    无遮罩滑出的侧边栏，可以添加自己喜欢的内容
                </div>
            </div>
        </z-asiderigth>

        <!-- 侧边滑出栏 带遮罩层 -->
       <z-asideleft :addClass.sync="open">
            <div @click="open = !open">
                <div class="header-mean">
                    <div class="header-phone">
                        <span><img src="../assets/avatar.jpg" /></span>
                    </div>
                    <div class="header-describe">
                        滑出的侧边栏，可以添加自己喜欢的内容
                    </div>
                </div>
            </div>
        </z-asideleft>

        <!-- 轮播图 -->
        <z-arousel :showimg="lists" class="main-carousel">
        </z-arousel>

        <!-- 下拉选择 -->
        <z-select :placeholder.sync="value" :options="foods">
            <h3 >下拉选择框</h3>
        </z-select>

        <!-- 日期选择 -->
        <z-date class="datestyle" :start="2000" :end="2099" :defaultNum.sync="defaultNum">
            <h3 >日期选择</h3>
        </z-date>
    </div>
</template>

<script>
import ZHeader from '@/components/ZHeader';
import ZAsideleft from '@/components/ZAsideleft';
import ZAsiderigth from '@/components/ZAsiderigth';
import ZArousel from '@/components/ZArousel';
import ZSelect from '@/components/ZSelect';
import ZDate from '@/components/ZDate';

export default {
    name: 'Main',
    data(){
        return {
            open:false,
            isshow:false,
            defaultNum:2000,
            start:2000,
            end:2090,
            lists:{
                src:['/static/b1.jpg','/static/b2.jpg','/static/b3.jpg']
            },
            foods:{
                various:[
                    {text:'麻辣小龙虾'},
                    {text:'巧克力冰淇淋'},
                    {text:'炸酱面'},
                    {text:'椒盐排条'},
                    {text:'糖醋小排'}
                ]                
            },
            value:'请选择'
        }
    },
    components: {
        ZHeader,
        ZAsideleft,
        ZAsiderigth,
        ZArousel,
        ZSelect,
        ZDate
    }
}
</script>

<style>
h3{
    color: #666;
}
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
.datestyle{
    padding-top: 20px;
}
</style>
