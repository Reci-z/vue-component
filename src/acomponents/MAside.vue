<template>

		<div class="zMouse-aside" :style="{transform: move}">
			{{addClass}}
			<span  @click="close">关闭123</span>
		</div>

</template>

<script>
export default {

  name: 'MAside',
  props:['addClass'],
  data(){
  	return { }
  },
  computed:{
  	  move(){
  	  		return this.addClass?'translateX(100%)':'translateX(0)';
  	  }
  },
  methods:{
 		close(){
 				this.$emit('update:addClass',false)
 		}
  }
};
</script>

<style lang="css">

.zMouse-aside{
	height: 100%;
	position: absolute;
	background:#ccc;
	width: 65%;
	left: -65%;
	transition: 1s all;
}
.go{
	transform: translateX(100%);
}


</style>