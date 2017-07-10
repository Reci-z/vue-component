<template>
<div class="">
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
  props:['addClass']
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
.zMouse-aside{
	height: 100%;
	position: absolute;
	background:#ccc;
	width: 65%;
	left: 0;
	top: 0;
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