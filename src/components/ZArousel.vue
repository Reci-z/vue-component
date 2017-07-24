<template>
<div class="">
	<div class="zMOuse-banner" ref="bannerWrap">

		<ul ref="bannerlist" @touchstart="bannerstart($event)" @touchmove="bannermove($event)" @touchend="bannerend($event)">
			<li v-for="(list,index) in showimg.src"  >	
				<img :src="list" >
			</li>
		</ul>
		<div class="carousel-items" v-show="getautonav">
	    	<span v-for="(item,index) in showimg.src" :class="{'active':index==currenyt%length}"></span>
	  	</div>
	</div>
</div>
</template>

<script>
export default {
  name: 'ZArousel',
  props:['showimg','time','autoplay','autonav'],
  data(){
  	return {
  		currenyt:0,
  		bannerul:'',
  		bannerli:[],
  		oTimer:0,
  		translateX:'',
  		wrapW:'',
  		length:'',
  		startPonint:0,
  		startElement:0,
      isEnd:true
  	}
  },
  computed:{
  		getautoplay(){
  			return this.autoplay=='true'?true:false;
  		},
  		getautonav(){
  			return this.autonav=='true'?true:false;
  		}
  },
  mounted(){
  	this.bannerul = this.$refs.bannerlist; 	
  	this.bannerul.innerHTML += this.bannerul.innerHTML;
  	this.bannerli = Array.from(this.bannerul.children);
  	this.length = this.bannerli.length/2;
  	this.wrapW = this.$refs.bannerWrap.clientWidth;


  	this.bannerul.style.width = this.wrapW*this.bannerli.length+'px';

  	for(var i=0;i<this.bannerli.length;i++){
  		this.bannerli[i].style.width = 100/this.bannerli.length+'%';
  	};

  	if(this.getautoplay){
	  	this.oTimer = setInterval(()=>{
	  		this.gocontinue();
	  	},this.time); 
	  	document.addEventListener('visibilitychange',()=>{
	  		var isHidden = document.hidden;
	  		if(isHidden){
	  			clearInterval(this.oTimer);
	  		}else{
	  			this.oTimer = setInterval(()=>{
			  		this.gocontinue();
			  	},this.time);
	  		}
	  	}) 

  	}
  },
  methods:{
  	transitionEnd(){
      // console.log(1)
  		this.bannerul.style.transition = "none"; 	
  		this.currenyt = this.bannerli.length/2-1;	
  		this.translateX = -this.currenyt* this.wrapW;
		  this.bannerul.style.transform = "translateX("+this.translateX+"px)";
      this.startElement = this.translateX;
      this.isEnd = true;
  	},
    transitionEndtwo(){
      this.bannerul.style.transition = "none";  
      this.currenyt = this.bannerli.length/2; 
      this.translateX = -this.currenyt* this.wrapW;
      this.bannerul.style.transform = "translateX("+this.translateX+"px)";
      this.startElement = this.translateX;
      this.isEnd = true;
    },
  	bannerstart(e){
      if(!this.isEnd)return ;
  		clearInterval(this.oTimer);	
      this.bannerul.style.transition = "none";
  		if(this.currenyt==0){
        this.currenyt = this.bannerli.length/2;
      }
      this.translateX = -this.currenyt*this.wrapW;
      this.bannerul.style.transform = "translateX("+this.translateX+"px)";
  		this.startElement = this.translateX;

  		// console.log(this.translateX)
  		this.startPonint = e.changedTouches[0].pageX;
  	},
  	bannermove(e){
      if(!this.isEnd)return ;
      this.bannerul.transition = "none";
  		var nowPoint = e.changedTouches[0].pageX;
  		var dis = nowPoint - this.startPonint;
  		// console.log(dis)
  		this.translateX = this.startElement + dis;
  		this.bannerul.style.transform = "translateX("+this.translateX+"px)";
  	},
  	bannerend(e){
      if(!this.isEnd)return ;
  		this.currenyt = Math.round(Math.abs(this.translateX/this.wrapW));

      this.bannerul.removeEventListener('transitionend',this.transitionEnd)
      this.bannerul.removeEventListener('transitionend',this.transitionEndtwo)

  		this.translateX = -this.currenyt* this.wrapW;		
  	  this.bannerul.style.transform = "translateX("+this.translateX+"px)";
      this.bannerul.style.transition = ".5s";
      this.startElement = this.translateX;

      // console.log(this.currenyt)
      if(this.currenyt >= this.bannerli.length-1 ){
        this.isEnd=false;
        this.bannerul.addEventListener('transitionend',this.transitionEnd);
        return;
        // this.transitionEnd();
      }
      if(this.currenyt <= 0 ){
        this.isEnd=false;
        this.bannerul.addEventListener('transitionend',this.transitionEndtwo);
        return;
        // this.transitionEndtwo();
      };

	  	if(this.getautoplay){
	  		this.oTimer = setInterval(()=>{
		  		this.gocontinue();
		  	},this.time); 
	  	};	
  	},
  	gocontinue(){
  		this.currenyt++;	
  		
    		if(this.currenyt==this.bannerli.length-1){
    			this.translateX = -this.currenyt* this.wrapW;
    			this.bannerul.style.transform = "translateX("+this.translateX+"px)";

    			this.bannerul.addEventListener('transitionend',this.transitionEnd);
    			return;
    		};

    		this.bannerul.removeEventListener('transitionend',this.transitionEnd);
    		this.translateX = -this.currenyt* this.wrapW;
    		this.bannerul.style.transform = "translateX("+this.translateX+"px)"
    		this.bannerul.style.transition = ".5s transform";

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
	width: 100%;
	height: 230px;
	overflow: hidden;
	background: #fff;
}
.zMOuse-banner ul{
	overflow: hidden;
	position: relative;
	transform: translateX(0px);
}
.zMOuse-banner ul li{
	float: left;
}
.zMOuse-banner ul li img{
	width: 100%;
	height: 100%;
	vertical-align: top;
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
	background:rgba(255,255,255,.3); 
}
.active{
	background:rgba(255,255,255,1) !important; 
}

</style>