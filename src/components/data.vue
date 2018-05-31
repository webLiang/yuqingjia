<template>
<div class="yunger">
	<keep-alive>
		<div class="keywordclass">
		<ul>
			<li class="class-item" :class="{active:ind===index}" v-for="(item,index) in classWord" @click="chooseKeyWord(item,index)">
				{{item}}
			</li>
		</ul>
	</div>
	</keep-alive>	
	<div class="yungercontent">
 	<ul v-show="yungerdata">
 		<li v-for="item in yungerdata.info"class="yungerdata-item">
			<div class="item-main">
				<div class="item-main-header">
					<a  class="title" :href="item.url" v-html="item.title" :url="item.image"></a>
					<span class="site">{{item.site}}</span>
					<span class="time">{{item.time}}</span>
				</div>
				<div class="item-main-foot">
					<span v-html="item.content" class="content"></span>
				</div>	
			</div>
 		</li>
 	</ul>
 </div>
</div>

</template>

<script>
//import axios from 'axios'
export default {
	props:{
		
		classWord:{
			//type:Object,
			default:[
				'我们',
				'竟对'
			]		
		}
	},
	data() {
      return {
      	yungerdata:{},
      	keyword:
      	"\"天猫\"",
      	toggle:false,
      	ind:''
      }
    },
   mounted(){
   	
   	this.$http.get("http://api.yunger.com/news/search?accesstoken=80fbdfb42acf134fb128a67a16811192&class=我们&num=50&days=7").then((res) =>{
   			this.yungerdata=res.data.data
   			//console.log(res)
   			//console.log(this.yungerdata)
   		}).catch((err) =>{
   			console.log(err)
   		})
   },
   methods:{
   	chooseKeyWord(item,index){
   		this.ind = index;
   		let _item = item
   		this.$http.get("http://api.yunger.com/news/search?accesstoken=80fbdfb42acf134fb128a67a16811192&class="+item+"&num=50&days=7").then((res) =>{
   			this.yungerdata=res.data.data
   			//console.log(res)
   			//console.log(this.yungerdata)
   		//console.log('hello',item)
   		})
   		//console.log('hello',item
   	}
   }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
	.yunger
		.keywordclass
			margin:0
			padding-right:10px
			position:relative
			height:500px
			.class-item
				display:inline-block
				padding-right:10px
				line-height:40px
				text-align:center
		
		.keywordclass
			position:fixed
			top:40px
			left:0
			height:40px
			width:100%
			background:#fff
			z-index:10
			border-bottom:1px solid #ccc
			.class-item
				&.active
					color:blue
					background:#ccc
					border-bottom:3px solid #f0f
		.yungercontent
			font-size:14px
			margin:40px 0
			.yungerdata-item
				margin:10px 0
				padding:10px 0
				border-bottom:1px solid rgba(7,17,27,0.3)
				.item-main
					height:100%
					.item-main-header
						font-size:14 px
						font-weight:700px
						.title
							padding-bottom:10px
							color:rgba(7,17,27,0.8)
						.site
							display:inline-block
							font-size:8px
							margin:5px 30px 10px 10px
							color:blue
						.time
							display:inline-block
							font-size:8px
					.item-main-foot
						font-size:8px
						.content
							color:#222
							margin-top:8px

</style>
