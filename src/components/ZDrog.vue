<template>
<div class="mydrog">
	<button @touchend="getdrog">点击显示弹出框</button>
	<div class="drogs" v-show="changeboolean">
		
	</div>
</div>
</template>

<script>
export default {

  name: 'ZDrog',
  data(){
  	return {
  		changeboolean:false
  	}
  },
  methods:{
  	getdrog(){
  		this.changeboolean = this.$changDrog(this.changeboolean)
  	}
  }
};
</script>

<style lang="css">
.drogs{
	width: 300px;
	height: 300px;
	position: absolute;
	left: 65px;
	top: 0;
	background: pink;
	z-index: 999
}
</style>