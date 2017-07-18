
export default{
	install:function(Vue){
		Vue.prototype.$changDrog  = function(val){
			return !val
		}
	}
}