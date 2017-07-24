<template>
<div class="zMouse-li" ref="item">
	<transition name="listop">
		<li v-if="scr" ref="itemli" class="messageli" @touchstart="startli($event)" @touchmove="moveli($event)" @touchend="endli($event)">
	   		<span class="qq-img"><img :src="scr" /></span>
	   		<span class="qq-name">{{name}}</span>
	   		<span class="messagetip" ref="itembtn">
		        <span class="delectli" @touchstart.stop="delectli">删除</span><span class="gettopli" @touchstart.stop="gettopli">置顶</span>
		    </span>
		</li>
	</transition>
</div>
</template>

<script>
export default {

  name: 'ZLi',
  props:['scr','name'],
  data(){
  	return {
  		startPoint:{},
  		startElement:0,
  		clientW:0,
  		liW:0,
  		tipW:0,
  		translateX:0,
  		dist:0,
  		startPoints:0,
  		disTime:0,
  		isgo:true
  	}
  },
  mounted(){
  		this.liW = this.$refs.itemli.offsetWidth;
  		this.tipW=this.$refs.itembtn.offsetWidth;
  },
  methods:{
  	startli(e){
  		this.startPoint.x = e.changedTouches[0].pageX;
  		this.startPoint.y = e.changedTouches[0].pageY;
  		this.startElem = this.getPoint();
  		this.dist = 0;
  		
  		this.disTime=Date.now();
  		this.$refs.itemli.style.transition="none";
  		if(Math.abs(this.startElem)==Math.abs(this.tipW)){
  			this.translateX = 0;
  			this.$refs.itemli.style.transform = "translateX("+this.translateX+"px)";
  			this.$refs.itemli.style.transition=".5s transform"
  			return;
  		}



  	},
  	moveli(e){	
  		if(Math.abs(this.startElem)==Math.abs(this.tipW)){
  			return;
  		}
  		if(!this.isgo){
  			return;
  		}

  		var nowPoint = {},dis={};
  			nowPoint.x = e.changedTouches[0].pageX;
  			nowPoint.y = e.changedTouches[0].pageY;
  			// console.log(nowPoint)
  		
  			this.dist = this.startPoint.x - nowPoint.x;
  			dis.y = this.startPoint.y - nowPoint.y;
  			dis.x = this.startPoint.x - nowPoint.x;
  			// console.log(dis)
  		var nowTime = Date.now();
  		// console.log(nowTime-this.disTime)
  		if((nowTime-this.disTime>0)&&(nowTime-this.disTime<300)){
  			if(Math.abs(dis.y)>Math.abs(dis.x)){
  				this.isgo = false;
  			}
  		}

  		if(this.dist>0){
  			if(this.dist>this.tipW){
  				this.dist=this.tipW
  			}
  			this.translateX = -this.dist;
  			this.$refs.itemli.style.transform = "translateX("+this.translateX+"px)";
  			this.$refs.itemli.style.transition=".5s transform"
  		}
  	},
  	endli(e){
  		if(Math.abs(this.startElem)==Math.abs(this.tipW)){
  			return;
  		}
  		if(this.dist>0){	
  		   if(this.dist<this.tipW/2){
  				this.translateX=0;
  	    	}		
  		   else if(this.dist>=this.tipW/2){
  				this.translateX=-this.tipW
  			}
  		}		
  			this.$refs.itemli.style.transform = "translateX("+this.translateX+"px)";
  			this.$refs.itemli.style.transition=".5s transform"

  			this.isgo = true;
  			// console.log(this.isgo)

  	},
  	getPoint(){
	    var getnum = this.$refs.itemli.style.transform
	    // 移动距离	     
	    getnum = getnum.substring(getnum.indexOf('(')+1,getnum.indexOf('p'))
	    return Number(getnum)       
    },
    delectli(){
    	console.log(1)
    },
    gettopli(){
    	console.log(2)
    }
  }
};
</script>

<style lang="css">
.qqlist{
 width: 100%;
 height: auto;
 overflow: hidden;
}
.messageli{
 width: 100%;
 height: 100px;
 border-bottom: 1px solid #000;
 position: relative;
}
.messageli .qq-img{
 width: 30%;
 float: left;
 display: block;
 height: 100px;
 overflow: hidden;
 text-align: center;
}
.messageli .qq-img img{
 padding:10px 0; 
 height: 80px;
 width: 80px;
 border-radius: 50%;

}
.messageli .qq-name{
 width: 70%;
 float: left;
 height: 100px;
}
.messageli .messagetip{
 width: 20%;
 right: -20%;
 position: absolute;
 z-index: 9;
 height: 100px;
 border-bottom: 1px solid #000;
 line-height: 100px;
}
.delectli, .gettopli{
	text-align: center;
	width: 50%;
	display: inline-block;
	
}
.delectli{
	background: #ccc;
	color: #000;
}
.gettopli{
	background: orange;
	color: #fff;
}
</style>