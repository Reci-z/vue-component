<template>
	<div class="zmouse-select">
		<slot></slot>
		<div class="zMouse-main">
			<div class="select-input" ref="select" @touchend.stop="showSelect( $event)">
				<span class="valuestyle">{{placeholder}}</span>
				<span class="triangle"></span>
			</div>
			<transition name="selectfage">	
				<ul class="select-options" v-show="open" >
					<li v-for="food in options.various" @touchend.stop="getVaqlue($event,food.text)">{{food.text}}</li>
				</ul>
			</transition>	
		</div>				
	</div>	
</template>

<script>
export default {

  name: 'ZSelect',
  props:{
  	placeholder:{
  		type:String,
  		default:'请选择一个你喜欢的'
  	},
  	options:{
  		type:Object
  	},
  	isshow:{
  		type:Boolean
  	}
  },
  data(){
  	return {
  		open:false,
  		firstValue:''
  	}
  },
  created(){
  	  	this.firstValue = this.placeholder;
  },
  mounted(){
  	document.addEventListener('touchend',this.hide)
  },
  beforeDestroy(){
  	document.removeEventListener('touchend',this.hide)
  },
  methods:{
  	showSelect(e){
  		this.open = !this.open;
  		var thisname = e.target.tagName
  		if(this.open&&(thisname=='DIV')){
  			e.target.style.borderBottom="3px solid rgba(255,0,0,.5)"
  		}else if(this.open&&(thisname=='SPAN')){
			e.target.parentNode.style.borderBottom="3px solid rgba(255,0,0,.5)"
  		}else if(!this.open&&(thisname=='SPAN')){
  			if(this.firstValue != this.placeholder){
  				return;
  			}
  			e.target.parentNode.style.borderBottom="1px solid rgba(0,0,0,.5)"
  		}else{
  			if(this.firstValue != this.placeholder){
  				return;
  			}
  			e.target.style.borderBottom="1px solid rgba(0,0,0,.5)"
  		}
  	},
  	getVaqlue(e,value){
  		var allli = e.target.parentNode.children;
  		for(var i=0;i<allli.length;i++){
  			allli[i].style.color="#666"
  		}
  		e.target.style.color="red"
  		this.open = !this.open;
  		this.$emit('update:placeholder',value)
  	},
  	hide(e){
  		this.open = false;
  		if(this.firstValue == this.placeholder){
  			this.$refs.select.style.borderBottom="1px solid rgba(0,0,0,.5)"
  		}
  		
  	}
  }
};
</script>

<style lang="css">
.zmouse-select{
	width: 94%;
	margin: 5px auto;
}
.zMouse-main{
	width: 100%;
	position: relative;
}
.select-input{
	width: 100%;
	height: 36px;
	line-height: 36px;
	border-bottom: 1px solid rgba(0,0,0,.5);
	position: relative;
}
.select-input .valuestyle{
	color: #666;
	font-size: 18px;
	padding-left: 10px;
}
.select-input .triangle{
	border: 8px solid #fff;
	border-top:8px solid #000;
	position: absolute;
	right: 10px;
	top: 14px;
}

.select-options{
	width: 100%;
	border: 1px solid #ccc;
	border-top: none;
	position: absolute;
	left: 0;
	top: 40px;
	box-shadow: 5px 5px 5px #ccc;
	z-index: 99;
	background: #fff;
}
.select-options li{
	width: 100%;
	height: 40px;
	line-height: 40px;
	text-indent: 10px;
	font-size: 18px;
	color: #666;
}
.selectfage-enter-active{
	transform-origin: 0 0 ;
	animation: goin .3s linear;
}
.selectfage-leave-active{
	transform-origin: 0 0 ;
	animation: goout .3s linear;
}
@keyframes goin {
	0%{
		transform: scaleY(0)
	}
	100%{
		transform: scaleY(1)
	}
}
@keyframes goout {
	0%{
		transform: scaleY(1)
	}
	100%{
		transform: scaleY(0)
	}
}
</style>