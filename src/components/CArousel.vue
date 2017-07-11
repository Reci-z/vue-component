<template>
<div class="">
	<div class="zMOuse-banner">
		<transition-group tag="ul" class="banner-style" name="list">
			<li v-for="(list,index) in showimg.src" :key="index" v-show="index == currenyt">
				<img :src="list" >
			</li>
		</transition-group>
		<div class="carousel-items">
	    	<span v-for="(item,index) in showimg.src" :class="{'active':index==currenyt}"></span>
	  	</div>
	</div>
</div>
</template>

<script>
export default {
  name: 'CArousel',
  props:['showimg'],
  data(){
  	return {
  		currenyt:0
  	}
  },
  created(){
  	this.autoPlay();
  },
  methods:{
  	autoPlay(){
  		setInterval(()=>{
  			this.currenyt++;
	  		if(this.currenyt>this.showimg.src.length-1){
				this.currenyt = 0;
	  		}
  		},4000)  		
  	}
  }
};
</script>

<style lang="css">
ul{
	margin: 0;
	padding:0; 
	list-style: none;
}
.zMOuse-banner{
	position: relative;
	width: 100%;
	height: 230px;
	overflow: hidden;
	background: #fff;
}
.banner-style,.banner-style li img{
	width: 100%;
	height: 100%;
}
.banner-style li{
	position: absolute;
	width: 100%;
	height: 100%;
}
.carousel-items{
	position: absolute;
	z-index: 10;
	top: 200px;
	width: 100%;
	margin: 0 auto;
	text-align: center;
	font-size: 0;
}
.carousel-items span{
	display: inline-block;
	height: 6px;
	width: 20px;
	margin: 0 3px;
	background:#ccc; 
}
.active{
	background: #fff !important;
}

.list-enter-active {
 transition: all 1s ease;
 transform: translateX(0)
}

.list-leave-active {
 transition: all 1s ease;
 transform: translateX(-100%)
}

.list-enter {
 transform: translateX(100%)
}

.list-leave {
 transform: translateX(0)
}

</style>