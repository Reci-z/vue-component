<template>
<div class="Maside">

	<div class="zMouse-zezhao" v-if="addClass" @click.stop="clearClass">
		
	</div>
	<transition name="fage">
		<div class="zMouse-aside" v-if="addClass" @click.stop>
			 <slot name="butta"></slot>
		</div>
	</transition>
</div>
</template>

<script>
export default {

  name: 'MAside',
  props:['addClass'],
  methods:{
  	clearClass(){
  		this.$emit('update:addClass',false)
  	}
  }
};
</script>

<style lang="css">
@keyframes zMousetranslateX{
	0%{
		transform: translateX(0px)
	}
	100%{
		transform: translateX(100%)
	}
}
.zMouse-zezhao{
	width: 100%;
	height: 100%;
	position: absolute;
	background: rgba(0,0,0,.1);
	z-index: 2;
}
.zMouse-aside{
	height: 100%;
	position: absolute;
	background:#fff;
	width: 65%;
	left: 0;
	top: 0;
	z-index: 99;
}

.fage-enter-active{
	animation: goin .5s linear;
}
.fage-leave-active{
	animation: goout .5s linear;
}
@keyframes goin {
	0%{
		transform: translateX(-65%)
	}
	100%{
		transform: translateX(0px)
	}
}
@keyframes goout {
	0%{
		transform: translateX(0px)
	}
	100%{
		transform: translateX(-100%)
	}
}

</style>