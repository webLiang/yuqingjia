<template>
	<div class="main">
    <div class="header">数据监测</div>
    
   <router-view v-if="classWord.length" class="main" :class-word="classWord"></router-view>
    <div class="link">
      	<div class="link-item">
          <router-link to="/data">
            <span class="el-icon-document"></span><span>数据</span></router-link>       
        </div>
        <div class="link-item">
          <router-link to="/analysis"><span class="el-icon-view"></span>分析</router-link>       
        </div>
        <div class="link-item">
          <router-link to="/waring"><span class="el-icon-warning"></span>预警</router-link>   
        </div>
        <div class="link-item">
          <router-link to="/my"><span class="el-icon-menu"></span>我的</router-link>
      </div>
    </div>
  </div>
</div>


</template>

<script>
//import axios from 'axios'
const API_PROXY = 'https://bird.ioliu.cn/v1/?url='
export default {
data(){
  return{
    classWord:[]
  }
  
},
mounted(){
  this.$http.get(this.HOST +"/user/getclass?accesstoken=80fbdfb42acf134fb128a67a16811192").then((res) =>{
     this.classWord=res.data.data.info
    //console.log(res)
  })
  // this.$http.all([

  //   this.$http.get(API_PROXY +"http://api.yunger.com/user/getclass?accesstoken=80fbdfb42acf134fb128a67a16811192"),

  //   this.$http.get(API_PROXY +"http://api.yunger.com/user/getclass?accesstoken=80fbdfb42acf134fb128a67a16811192")
  // ]).then(this.$http.spread(function (userResp, reposResp) {

  //   // 上面两个请求都完成后，才执行这个回调方法

  //   console.log('class', userResp.data);

  //   console.log('classValue', reposResp.data);

  // }));
}
//this.$http.get(API_PROXY +"http://api.yunger.com/user/getclass?accesstoken=80fbdfb42acf134fb128a67a16811192").then((res) =>{
//         //this.yungerdata=res.data.data
//         let info = res.data.data.info
//         console.log(info)
//         //console.log(this.yungerdata)
//       }).catch((err) =>{
//         console.log(err)
//       })
// }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  .main
    padding:18px 18px 0 18px
    .header
      position:fixed
      top:0
      left:0
      z-index:10
      display:inline-block
      background:#244584
      opsity:1
      height:40px
      width:100%
      line-height:40px
      text-align:center
    
    .link
      position:fixed
      display:flex
      bottom:0
      pidding:20px 0
      width:100%
      height:40px
      line-height:40px
      border-top:1px solid #ccc
      background:#fff

      .link-item
        flex:1
        display:inline-block
        text-decoration:none
        &>a
          display:block
          text-decoration:none
          color:#666
          text-align:center
          font-size:14px
        .router-link-exact-active
          color:blue

</style>
