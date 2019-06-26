
<template>
  <div class="appbox">
    <!--头部-->
  <div class="title">
  	<div class="logo"></div>
    <div class="img"></div>
  </div>

  <div class="nav">
    <div :class="[item.isSelected ? 'active' : '']" v-for="(item, index) in nav" :key="index" @click="toggleTbas(item)">{{item.title}}</div>
  </div>
	  
	  <!-- 二级路由 -->
    	<router-view></router-view>

	   
	   
  </div>
</template>

<script>
	export default {
  name: 'Home',
  data() {
  	return {

  		nav: [
  			{title: '精选', isSelected: true, path: {name: 'Choice'}},
  			{title: 'VIP', isSelected: false, path: {name: 'Vip'}},
  			{title: '分类', isSelected: false, path: {name: 'Classify'}},
  			{title: '排行', isSelected: false, path: {name: 'Rank'}}
  		]

  	};
  },

  methods: {

    toggleTbas(item) {

      //如果当前tab是激活的,拦截执行
      if (item.isSelected) {
        return;
      }

      for (var i = 0; i < this.nav.length; i++) {
        if (this.nav[i].isSelected) {
          this.nav[i].isSelected = false;
          break;
        }
      }

      item.isSelected = true;

      this.goState(item.path);

    },

  	goState(path) {
  		this.$router.push(path);
  	}
  }
  }


</script>

<style>
.appbox{
	width: 100%;
}

.title{
	width: 100%;
	height: 1.6rem;
	background-color: #fff;
	position: relative;
}

.img{
	  width: 3rem;
    height: .7rem;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -.30667rem;
    margin-left: -1.36rem;
    background: url(../../public/logofont1.png) no-repeat;
    background-size: cover;
}

.nav{
	width: 100%;
	height: 1.06667rem;
	line-height: 1.06667rem;
    background: #0183dc;
    color: #D1D1D1; 
    text-align: center;  
}

.nav>div{
		float: left;
		width: 25%;
		height: 1.06667rem;
		text-align: center;
		line-height: 1.06667rem;
		font-size: 12px;
}

  .nav>div.active{
    color: #fff;
  }
  

	
</style>