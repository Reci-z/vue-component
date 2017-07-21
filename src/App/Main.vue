<template>
    <div class="" >
        <!-- 头部 -->
        <z-header title="标题">
            <div slot="left" @touchend="open = !open"><img src="../assets/stealth.png" /></div>
        </z-header>
        
        <!-- 侧边滑出栏 mask控制遮罩层-->
       <z-asideleft :addClass.sync="open" mask="false">
            <div @touchend="open = !open">
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
        <z-scroll>
            <!-- 轮播图 -->
            <z-arousel :showimg="lists" time="1500" autoplay="true" autonav="true" class="main-carousel">
            </z-arousel>

            <!-- 下拉选择 -->
            <z-select :placeholder.sync="value" :options="foods">
                <h3 >下拉选择框</h3>
            </z-select>

            <!-- 日期选择 -->
            <div class="main-datashow">
                <h3 class="h3date">日期选择：<span style="color: red">{{defaultNum}}</span></h3> 
                <button class="selectyear" @touchend="changeyear">选择日期</button>
            </div>  

        </z-scroll> 
        <z-date class="datestyle" :showDate.sync="isshowdata" :start="2000" :end="2099" :defaultNum.sync="defaultNum"></z-date>  
         
    </div>
</template>

<script>
import ZHeader from '@/components/ZHeader';
import ZAsideleft from '@/components/ZAsideleft';
import ZArousel from '@/components/ZArousel';
import ZSelect from '@/components/ZSelect';
import ZDate from '@/components/ZDate';
import ZScroll from '@/components/ZScroll';
import ZDrog from '@/components/ZDrog';

export default {
    name: 'Main',
    data(){
        return {
            open:false,
            defaultNum:2000,
            start:2000,
            end:2090,
            isshowdata:false,
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
    methods:{
        changeyear(){
            this.isshowdata = true;
        }
    },
    components: {
        ZHeader,
        ZAsideleft,
        ZArousel,
        ZSelect,
        ZDate,
        ZScroll,
        ZDrog
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
.datestyle{
    padding-top: 20px;
}
.main-datashow{
    width: 94%;
    margin: 40px auto 0 ;
}
.selectyear{
  border-radius: 0;
  border: 1px solid #000;
  background: #fff;
  font-size: 16px;
  outline: none;
}
</style>
