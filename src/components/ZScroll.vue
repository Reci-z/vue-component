 <template>
 <div class="main-scroll" ref="scrollclientW">
      <slot name="loading"></slot>
    <div class="myscroll" @touchstart="scrollstart($event)" @touchmove="scrollmove($event)" @touchend="scrollend($event)"  ref="usescroll">
      <slot></slot>   
    </div>
    <transition name="scrollflash">
         <div class="zmouse-scroll" v-show="scrolldata.showBar" ref="backscrool"></div>
   </transition>  
 </div>
 
 </template>
 
 <script>
 import Vue from 'vue'
 export default {
   name: 'ZScroll',
   data(){
   	return {
   		scrolldata:{
   			showBar:true,
   			SCROLL:null,
   			startEl:0,
   			startPoint:{},
   			lastDateNow:0,
   			lastTime:0,
   			lastTranslate:0,
   			lastDis:0,
            disTime:0,
            isgo:true,
            showtoast:false
   		}
   	}
   },
   created(){
   		this.scrolldata.showBar = false;
         
   },
	mounted(){
      //滑动的元素
		this.scrolldata.SCROLL = this.$refs.usescroll
      //可视区高度
		this.scrolldata.wrapW = this.$refs.scrollclientW.clientHeight;

      //内容高
		this.scrolldata.ScrollH =this.$refs.usescroll.offsetHeight;
      // console.log(this.scrolldata.wrapW,this.scrolldata.ScrollH)
      if(this.scrolldata.ScrollH<this.scrolldata.wrapW){
         this.scrolldata.SCROLL.style.height="100%";
      }

      //最大移动高度
		this.scrolldata.max = this.scrolldata.wrapW - this.scrolldata.ScrollH;

      
      //比例
      
		this.scrolldata.scale = this.scrolldata.wrapW/this.scrolldata.ScrollH; 

      this.$refs.backscrool.style.height = this.scrolldata.wrapW * this.scrolldata.scale+'px';

      this.scrolldata.SCROLL.style.transform ="translateY(0)" 

	},
   methods:{
      change(){
         Vue.nextTick(function(){
            console.log(1)
         })
      },
   	scrollstart(e){
         if(this.scrolldata.ScrollH<this.scrolldata.wrapW){
            return
         }
   		this.scrolldata.showBar = false;

         this.scrolldata.startPoint = {
            x:e.changedTouches[0].pageX,
            y:e.changedTouches[0].pageY
         }
   

   		this.scrolldata.startEl = this.getPoint();

   		this.scrolldata.lastDateNow = Date.now();
         this.disTime = Date.now()
         // console.log(this.scrolldata.lastDateNow)
   		this.scrolldata.lastTranslate = this.scrolldata.startPoint.y;
         this.scrolldata.lastTime = 0;
         this.scrolldata.lastDis = 0;

         this.$refs.usescroll.style.transition="none";
         this.$refs.backscrool.style.transition="none";

   	},
   	scrollmove(e){
         if(this.scrolldata.ScrollH<this.scrolldata.wrapW){
            return
         }
         
         
         var nowPoint={},dis={}
             nowPoint.x = e.changedTouches[0].pageX;
             nowPoint.y = e.changedTouches[0].pageY;

             dis.y = nowPoint.y - this.scrolldata.startPoint.y;
             dis.x = nowPoint.x - this.scrolldata.startPoint.x;
             // console.log(nowPoint.x)
         var nowTime = Date.now();
         if((nowTime-this.disTime>0)&&(nowTime-this.disTime<300)){
            // console.log(Math.abs(dis.y))
            // console.log(Math.abs(dis.x))
            if(Math.abs(dis.y)<Math.abs(dis.x)){
               this.scrolldata.isgo = false;
            }
         }

         // console.log(this.scrolldata.isgo)
         if(!this.scrolldata.isgo){
            return
         }
         this.scrolldata.showBar = true;
         var translate = dis.y + this.scrolldata.startEl;
         // console.log(translate)
         var F = 1

         if(translate>0){
            F = (this.scrolldata.wrapW - translate)/this.scrolldata.wrapW;
            translate *= F;
         }else if(translate<this.scrolldata.max){

            F = (this.scrolldata.wrapW - (this.scrolldata.max - translate))/this.scrolldata.wrapW;
            translate = this.scrolldata.max - (this.scrolldata.max - translate)*F;
         }
         this.$refs.usescroll.style.transform="translateY("+translate+"px)";

         if(this.scrolldata.showBar){
            // console.log(-translate*this.scrolldata.scale)
            this.$refs.backscrool.style.transform="translate3d(0,"+(-translate*this.scrolldata.scale)+"px,0)"

             // this.$refs.backscrool.style.transition=".3s transform"
         };

         var DateNow = Date.now();
         // console.log(DateNow)
         this.scrolldata.lastTime = DateNow - this.scrolldata.lastDateNow;
         // console.log(this.scrolldata.lastTime)

         this.scrolldata.lastDis = nowPoint.y -this.scrolldata.lastTranslate;

         // console.log(this.scrolldata.lastDis)

         this.scrolldata.lastDateNow = DateNow;
         this.scrolldata.lastTranslate = nowPoint.y;

   	},
   	scrollend(){
         if(this.scrolldata.ScrollH<this.scrolldata.wrapW){
            return
         }
         var speed = this.scrolldata.lastDis/this.scrolldata.lastTime

         speed = isNaN(speed)? 0 : speed;
         var dis = speed * 266;
         var target = dis + this.getPoint() ;
         // console.log(this.scrolldata.startEl)

         if(target>=0||(this.scrolldata.ScrollH<this.scrolldata.wrapW)){
            // console.log(target)
            target = 0;
         }else if(target<this.scrolldata.max){
            // console.log(this.scrolldata.max)
            target=this.scrolldata.max
         }
         var time = Math.abs(target - this.scrolldata.startEl)*1.1

         time = time<200?200:time;
         time = time>1200?1200:time;
         this.change();

         this.$refs.usescroll.style.transform="translateY("+target+"px)";
         // console.log(time*0.01)
         this.$refs.usescroll.style.transition=time*0.001+"s transform";
         this.$refs.backscrool.style.transition=time*0.001+"s transform";
         
         if(this.scrolldata.showBar){
            if(-target*this.scrolldata.scale == 0){
               this.scrolldata.showBar = false;
            }
            // console.log(-translate*this.scrolldata.scale)
           this.$refs.backscrool.style.transform="translate3d(0,"+(-target*this.scrolldata.scale)+"px,0)"
           this.$refs.backscrool.style.transition=time*0.001+"s transform";
         };

         this.$refs.backscrool.addEventListener('transitionend',()=>{
            this.scrolldata.showBar = false;
         })
         this.scrolldata.isgo = true;
   	},
      getPoint(){
         var getnum = this.scrolldata.SCROLL.style.transform
         // 移动距离
         
         getnum = getnum.substring(getnum.indexOf('(')+1,getnum.indexOf('p'))

         return Number(getnum)       

      }
   }
 };
 </script>
 
 <style lang="css">
 .main-scroll{
   position: absolute;
   left: 0;
   top: 50px;
   right: 0;
   bottom: 0;
   overflow: hidden;
 }
 .myscroll{
 	position: absolute;
 	left: 0;
 	right: 0;
 	overflow: hidden;
   z-index: 2;
 }
 .zmouse-scroll{
 	position: absolute;
 	top: 0;
 	right: 0;
 	background: rgba(0,0,0,.5);
 	border-radius: 10px;
 	width: 10px;
 	transition: .5s .5s opacity;
 }
 .scrollflash-enter-active{
	opacity: 1;
}
.scrollflash-leave-active{
	opacity: 0;
}
 </style>