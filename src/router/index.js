import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import analysis from '../components/analysis';
import data from '../components/data';
import my from '../components/my';
import waring from '../components/waring';
import app from '../App.vue'
//import layout from '../layout.vue';
Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      name: 'app',
      component: HelloWorld
    },
    {
		path:'/analysis',
		component:analysis
	},
	{
		path:'/data',
		component:data
	},
	{
		path:'/my',
		component:my
	},
	{
		path:'/waring',
		component:waring
	}
  ]
})