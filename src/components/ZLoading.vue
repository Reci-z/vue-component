<template>
		<div class="my-load" ref="loadings">
		    <div class="line">
		        <div></div>
		        <div></div>
		        <div></div>
		        <div></div>
		        <div></div>
		        <div></div>
		    </div>
		    <div class="circlebg"></div>
		</div>
</template>

<script>
export default {

  name: 'ZLoading',
  mounted(){
  	var windowW = document.body.clientWidth;
  	var loadingW = this.$refs.loadings.offsetWidth;
  	this.$refs.loadings.style.left = (windowW-this.$refs.loadings.offsetWidth)/2+'px';
  },
  methods:{
  	
  }
};
</script>

<style lang="css" >
.my-load{
	width:36px;
	height:36px;
	margin:0px auto;
	position:absolute;
	z-index: 1;
	top: 50px;}
.my-load .line div{
	position:absolute;
	left:16px;
	top:0;
	width:3px;
	height:36px;
}
.my-load .line div:before,.my-load .line div:after{
	content:'';
	display:block;
	height:50%;
	background:#fff;
	border-radius:5px;
}

.my-load .line div:nth-child(2){-webkit-transform:rotate(30deg);}
.my-load .line div:nth-child(3){-webkit-transform:rotate(60deg);}
.my-load .line div:nth-child(4){-webkit-transform:rotate(90deg);}
.my-load .line div:nth-child(5){-webkit-transform:rotate(120deg);}
.my-load .line div:nth-child(6){-webkit-transform:rotate(150deg);}
.my-load .circlebg{
	position:absolute;
	left:50%;
	top:50%;
	width:18px;
	height:18px;
	margin:-9px 0 0 -9px;
	background:#000;
	border-radius:18px;
}

@keyframes load{
    0%{opacity:0;}
    100%{opacity:1;}
}
.my-load .line div:nth-child(1):before{animation:load 1.2s linear 0s infinite;}
.my-load .line div:nth-child(2):before{animation:load 1.2s linear 0.1s infinite;}
.my-load .line div:nth-child(3):before{animation:load 1.2s linear 0.2s infinite;}
.my-load .line div:nth-child(4):before{animation:load 1.2s linear 0.3s infinite;}
.my-load .line div:nth-child(5):before{animation:load 1.2s linear 0.4s infinite;}
.my-load .line div:nth-child(6):before{animation:load 1.2s linear 0.5s infinite;}
.my-load .line div:nth-child(1):after{animation:load 1.2s linear 0.6s infinite;}
.my-load .line div:nth-child(2):after{animation:load 1.2s linear 0.7s infinite;}
.my-load .line div:nth-child(3):after{animation:load 1.2s linear 0.8s infinite;}
.my-load .line div:nth-child(4):after{animation:load 1.2s linear 0.9s infinite;}
.my-load .line div:nth-child(5):after{animation:load 1.2s linear 1s infinite;}
.my-load .line div:nth-child(6):after{animation:load 1.2s linear 1.1s infinite;}
</style>