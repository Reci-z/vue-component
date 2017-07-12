<template>
    <div class="Maside">
        <transition name="fage">
            <div class="zMouse-aside" v-if="isShow" @click.stop>
                <a href="javascript:;" class="hideButton" @click="hide">×</a>
                <!--只有一个slot，不需要加name，默认为default-->
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'ZAside',
        props: {
            isShow: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
            // 不需要遮罩，可以绑定事件
            document.addEventListener('click', this.hide);
        },
        beforeDestroy() {
            document.removeEventListener('click', this.hide);
        },
        methods: {
            hide() {
                if (this.isShow) {
                    this.$emit('update:isShow', !this.isShow);
                }
            }
        }
    }
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
        background:#fff;
        width: 65%;
        left: 0;
        top: 0;
        z-index: 99;
    }

    .hideButton {
        position: absolute;
        right: 10px;
        top: 10px;
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
