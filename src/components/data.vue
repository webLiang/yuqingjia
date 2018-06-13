<template>
<div class="yunger">
	<keep-alive>
		<div class="keywordclass" ref="keywordclass">
		<ul ref="keywordclasstotal">
			<li class="class-item" :class="{active:ind===index}" v-for="(item,index) in classWord" @click="chooseKeyWord(item,index)">
				{{item}}
			</li>		
			
		</ul>
		<div class="keywordclass-menu">
				<i class="el-icon-tickets"></i>
		</div>
	</div>
	</keep-alive>	
	<div class="yungercontent">
	<!-- <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded">
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
	</mt-loadmore> -->
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
import Bscroll from 'better-scroll'
//import axios from 'axios'
export default {
	props:{
		
		classWord:{
			type:Array,
			default:[
				
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
   	setTimeout(() =>{
   		this._getwidth()
   		//this._initScroll()
   	},50)	
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
   	},
   	_getwidth(){

   		this.$refs.keywordclass.style.width = document.body.clientWidth+'px'
   		
   		let length = this.$refs.keywordclasstotal.children.length;
   		let totalWidth = 0;
   		for(let i=0;i<length;i++){
   			let width = this.$refs.keywordclasstotal.children[i].offsetWidth;
   			totalWidth += width+10;
   			//console.log(totalWidth)
   		}
   		this.$refs.keywordclasstotal.style.width = totalWidth+'px';

      },
      _initScroll(){
   		this.classWorldScroll = new BScroll(this.$refs.keywordclass, {
        scrollX: false,
        scrollY: true,
        momentum: false,
        
        click: true
      })
   	}
	
   	},
   	
   	watch:{
   		classWord(){
   			this._getwidth()
   			//console.log('hello')
   		}
   	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">

	.yunger
		//width:100%
		.keywordclass
			margin:0
			padding-right:10px
			position:relative
			width:100%
			height:20px
			position:fixed
			top:40px
			left:0
			height:40px
			width:300px
			background:#fff
			z-index:10
			border-bottom:1px solid #ccc
			overflow:hidden
			overflow-x:auto
			//overflow-y:hidden
			.class-item
				display:block
				float:left
				padding-right:10px
				line-height:40px
				text-align:center
				overflow:hidden	
				&.active
					color:blue
					background:#ccc
					border-bottom:1px solid #f0f
			.keywordclass-menu
				position:fixed
				display:inline-block
				top:40px
				right:0
				clear:both
				height:40px
				line-height:40px
				width:40px
				background:#fff
				text-align:center
				.el-icon-tickets
					height:40px
					width:40px
					font-size:20px
					
		.yungercontent
			font-size:12px
			margin:40px 0
			.yungerdata-item
				margin:10px 0
				padding:10px 0
				border-bottom:1px solid rgba(7,17,27,0.3)
				.item-main
					height:100%
					.item-main-header
						font-size:12px
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
