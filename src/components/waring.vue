<template>
<div>
	<h2>你好我是预警组件</h2>
	 <div class="index">
        <my-scroll :page="page" :on-refresh="onRefresh" :on-pull="onPull">
        <div slot="scrollList">
            <ul>
                <li v-for="(x,index) in list" :key="index">{{x}}列表</li>
            </ul>
        </div>
        </my-scroll>
    </div>
</div>

</template>

<script>
import myScroll from './pullAndLoad.vue'
    export default {
        data(){
            return{
                list:[],
                page:{
                    counter:1,  
                    pageStart:1,  
                    pageEnd:1,  
                    total:10
                },
            }
        },
        methods:{
            onRefresh(mun){ //刷新回调
                    setTimeout(()=>{
                        this.$root.$emit('setState',3)
                    },500)
            },
            onPull(mun){ //加载回调
                if(this.page.counter<=this.page.total){
                    setTimeout(()=>{
                        this.page.counter++
                        this.$root.$emit('setState',5)
                        for(let i=0;i<10;i++){
                            this.listdata.push(i)
                        }
                    },500)
                }else{
                    this.$root.$emit('setState',7)
                }
            },

        },
        components:{
            myScroll
        },
        created(){

        },
        mounted(){
            for(let i=0;i<1*30;i++){
                this.list.push(i)
            }

        },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
	.index
		font-size:18px
		li
			background-color:#ccc
			margin:5px
			color:black
</style>
