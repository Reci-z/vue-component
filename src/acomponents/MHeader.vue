<template>
    <div class="zMouse-header">
        <div class="zMouse-header-left">
            <slot name="left"></slot>
        </div>
        <h1 class="zMouse-header-title">
            <slot>
                <span v-show="title">{{title}}</span>
            </slot>
        </h1>
        <div class="zMouse-header-right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MHeader',
    props: {
        title: {
          type:String
        }
    }
}
</script>

<style>
.zMouse-header {
    width: 100%;
    position: fixed;
    box-sizing: border-box;
    background:#474a4f;
}
.zMouse-header .zMouse-header-title,.zMouse-header h1 {
    margin: 0 50px;
    line-height: 50px;
    text-align: center;
    height: 50px;
    font-size: 18px;
    font-weight: 400;
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: white;
}

.zMouse-header .zMouse-header-title > span {
  display: inline-block;
}
.zMouse-header .zMouse-header-left img{width: 36px;}
.zMouse-header .zMouse-header-left,.zMouse-header .zMouse-header-right {
  position: absolute;
  top: 7px;
  display: block;
  font-size: 14px;
  line-height: 21px;
  color: white;
}
.zMouse-header .zMouse-header-left {
  left: 18px
}
.zMouse-header .zMouse-header-right {
  right: 18px
}
</style>
