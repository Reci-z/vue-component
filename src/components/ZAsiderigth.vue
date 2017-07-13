<template>
<div class="Maside">
	<transition name="fage">
		<div class="zMouse-aside" v-if="isshow" @click.stop>
			 <slot></slot>
		</div>
	</transition>
</div>
</template>

<script>
export default {

  name: 'ZAsideleft',
  props:{
  	isshow:{
  		type:Boolean,
  		default:false
  	}
  },
  mounted(){
  	document.addEventListener('click',this.hide)
  },
  beforeDestroy(){
  	document.removeEventListener('click',this.hide)
  },
  methods:{
  	hide() {
        if (this.isshow) {
            this.$emit('update:isshow', !this.isshow);
        }
    }
  }
};
</script>

<style lang="css">
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
	animation: usegoin .5s linear;
}
.fage-leave-active{
	animation: usegoout .5s linear;
}
@keyframes usegoin {
	0%{
		transform: translateX(-65%)
	}
	100%{
		transform: translateX(0px)
	}
}
@keyframes usegoout {
	0%{
		transform: translateX(0px)
	}
	100%{
		transform: translateX(-100%)
	}
}

</style>