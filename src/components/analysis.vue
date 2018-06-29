<template>
<div>
	<h2>你好我是分析组件</h2>
	<pull @load="load">
		<div v-for="i in players" class="list-item">
          {{ i }}
        </div>
	</pull>
</div>

</template>

<script>
import pull from './pull'
export default {
	data(){
		return{
			players: ['kobe', 'fisher', 'jordan', 'shark', 'duncun', 'fisher', 'jordan', 'shark', 'duncun', 'fisher', 'jordan', 'shark', 'duncun', 'fisher', 'jordan', 'shark', 'duncun', 'fisher', 'jordan', 'shark', 'duncun', 'fisher', 'jordan', 'shark', 'duncun', 'fisher', 'jordan', 'shark', 'duncun']
		}
	},
	methods:{
		load(resolve){
        setTimeout(() => {
          for (let i = 0; i < 4; i++) {
            this.players.unshift('player No.' + Math.floor(Math.random() * 10) + 1);
          }
          console.log(resolve)
          resolve();
        }, 1000)
      }
	},
	components:{
		pull
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
	.list-item
		margin-top:8px
</style>
