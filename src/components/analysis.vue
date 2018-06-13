<template>
<div>
	<h2>你好我是分析组件</h2>
	<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom">
	  <ul>
	    <li v-for="item in list">{{ item }}</li>
	  </ul>
	</mt-loadmore>
</div>

</template>

<script>
export default {
	data(){
		return{
			list:['量1','量1','量1','量1','量1','量1','量1','量1','量1','量1','量1','量1','量1','量1','量1','量1',]
		}
		

	},
	methods:{
		loadTop(id) {
		  //...// 加载更多数据
		  this.$broadcast('onTopLoaded', id);
		},
		loadBottom(id) {
		  //...// 加载更多数据
		  this.allLoaded = true;// 若数据已全部获取完毕
		  this.$broadcast('onBottomLoaded', id)
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
