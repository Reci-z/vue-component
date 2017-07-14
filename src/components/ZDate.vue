<template>
<div class="zmouse-date">
	<slot></slot>
	<div class="date-main" ref="dateselect" @touchstart="getStart($event)" @touchmove="getMove($event)" @touchend="getEnd($event)">
		<div class="date-mask"></div>
		<div class="date-select"></div>
		<div class="date-content" ref="dateheight">
			<div class="date-items" v-for="list in lists">{{list}}</div>
		</div>
	</div>
	<div>{{defaultNum}}</div>
</div>
</template>

<script>
export default {

  name: 'ZDate',
  props:{
  	start:{
  		type:Number,
  		default:2000
  	},
  	end:{
  		type:Number,
  		default:2099
  	},
  	defaultNum:{
  		type:Number,
  		default:2000
  	}
  },
  data(){
  	return {
  		msater:[],
  		movestart:0,
  		moveend:0,
  		moving:0,
  		startEl:0,
  		now:0,
  		translateY:0,
  		wrapheight:0,
  		dist:0,
  		contentheight:0
  	}
  },
  mounted(){
  	//获取行高度
  	
  	this.wrapheight = this.$refs.dateheight.children[0].offsetHeight;
  	this.contentheight = this.$refs.dateheight.offsetHeight;

  	this.translateY = -(this.defaultNum-this.start)*this.wrapheight;
  	this.dist = this.translateY ;
  	this.$refs.dateheight.style.transform="translate3d(0,"+this.translateY+"px,0)";
  },
  computed:{
  		lists(){
  			for(var i=this.start;i<this.end;i++){
  				this.msater.push(i)
  			}
  			return this.msater
  		}
  },
  methods:{
  	getStart(e){
  		//初始按下
  		this.startEl = this.translateY;
  		this.movestart = e.changedTouches[0].pageY;

  	},
  	getMove(e){
  		this.dist = e.changedTouches[0].pageY-this.movestart
  		this.translateY  = this.dist +this.startEl; 			
  		this.$refs.dateheight.style.transform="translate3d(0,"+this.translateY+"px,0)"

  	},
  	getEnd(){

  		if(this.translateY>0){
  			this.translateY=0;
  		}else if(Math.abs(this.translateY)>this.contentheight){
  			this.translateY=this.contentheight-this.wrapheight;
  		}

  		this.now = Math.round(Math.abs(this.translateY)/this.wrapheight);
  		this.translateY = -this.now*this.wrapheight;
  		this.$refs.dateheight.style.transform="translate3d(0,"+this.translateY+"px,0)"
  		this.$emit('update:defaultNum',this.msater[this.now]);
  	}
  }
};
</script>

<style lang="css" scoped>
.zmouse-date{
	width: 94%;
	margin: 5px auto;
}
.zmouse-date .date-main{
	width: 100%;
	font-size: 18px;
	text-align: center;
	height: 200px;
	overflow: hidden;
	position: relative;
}
.zmouse-date .date-main .date-mask{
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-image:
    linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.6)),
    linear-gradient(to top, rgba(255,255,255,0.95), rgba(255,255,255,0.6));
    background-position: top, bottom;
    background-size: 100% 70px;
    background-repeat: no-repeat;
}
.zmouse-date .date-main .date-select{
	width: 100%;
    height: 40px;
    position: absolute;
    left: 0;
    top: 81px;
	background-image:
            linear-gradient(to bottom, #d0d0d0, #d0d0d0, transparent, transparent),
            linear-gradient(to top, #d0d0d0, #d0d0d0, transparent, transparent);
    background-position: top, bottom;
    background-size: 100% 1px;
    background-repeat: no-repeat;
}

.zmouse-date .date-main .date-content{
	position: absolute;
	left: 0;
	top: 80px;
	width: 100%;
	transform: translateY(0px);
	transition: .5s all;
	z-index: -1;
}
.zmouse-date .date-main .date-items{
	height: 40px;
	line-height: 40px;
}
</style>