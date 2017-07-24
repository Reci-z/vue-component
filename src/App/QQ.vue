<template>
<div class="zMouse-qq" >
	<!-- 头部 -->
	<z-header title="QQ消息列表">
        <div slot="left">
        	<router-link to="/">
        		<img src="../assets/point.png" />
        	</router-link>
        </div>
    </z-header>
    <!-- 加载 -->
    
    <z-scroll class="stare">
   		<z-loading slot="loading"></z-loading>
	   	<ul class="qqlist" ref="itemList" style="background: #fff;">
	   		<!-- 列表 -->
			<z-li v-for="lidatas in lidata" :scr="lidatas.src" :name="lidatas.name" class="items"></z-li>
	   	</ul>
    </z-scroll>
</div>
</template>

<script>
import ZHeader from '@/components/ZHeader';
import ZScroll from '@/components/ZScroll';
import ZLi from '@/components/ZLi';
import ZLoading from '@/components/ZLoading';
export default {

  name: 'QQ',
  data(){
  	return{
  		lidata:[
  			{
  				src:'/static/dj.jpg',
  				name:'杜鹃'
  			},
  			{
  				src:'/static/gyy.jpg',
  				name:'高圆圆'
  			},
  			{
  				src:'/static/jjw.jpg',
  				name:'贾静雯'
  			},
  			{
  				src:'/static/lry.jpg',
  				name:'刘若英'
  			},
  			{
  				src:'/static/lz.jpg',
  				name:'黎姿'
  			},
  			{
  				src:'/static/qsz.jpg',
  				name:'邱淑贞'
  			},
  			{
  				src:'/static/sylm.jpg',
  				name:'石原里美'
  			},
  			{
  				src:'/static/wld.jpg',
  				name:'王珞丹'
  			},
  			{
  				src:'/static/wzx.jpg',
  				name:'王祖贤'
  			},
  			{
  				src:'/static/xyjy.jpg',
  				name:'新垣结衣'
  			},
  			{
  				src:'/static/yyy.jpg',
  				name:'袁咏仪'
  			},
  			{
  				src:'/static/zhm.jpg',
  				name:'周慧敏'
  			},
  			{
  				src:'/static/zy.jpg',
  				name:'朱茵'
  			}
  		],
  		beforelist:''
  	}
  },
  mounted(){
  	var itemList = this.$refs.itemList.children;
  	for(var i=0;i<itemList.length;i++){
  		itemList[i].style.animation="fadeInUp .5s "+i*.2+'s forwards';
  	}
  },
  components: {
        ZHeader,
        ZScroll,
        ZLi,
        ZLoading
   }

};
</script>

<style lang="css">
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  100% {
    opacity: 1;
    transform: none;
  }
}

ul{
 margin: 0;
 padding: 0;
 list-style: none;
}
.qqlist{
 width: 100%;
 height: auto;
 overflow: hidden;
}
.items{ opacity: 0; }
.stare{
	background:#000;
	z-index: 2;
}
</style>