<template>
  <div class="Choice">
  	<!--轮播图-->
    <van-swipe class="banner" :autoplay="2000" indicator-color="white">
      <van-swipe-item><img class="auto-img" src="../../public/banner0.png"/></van-swipe-item>
      <van-swipe-item><img class="auto-img" src="../../public/banner1.png"/></van-swipe-item>
      <van-swipe-item><img class="auto-img" src="../../public/banner2.png"/></van-swipe-item>
      <van-swipe-item><img class="auto-img" src="../../public/banner3.png"/></van-swipe-item>

    </van-swipe>
    
    <!--导航栏-->
  <div class="nav2">
  	<div class="mybooks">
  		<router-link class="icon" to="/mybook"></router-link>
  		<span>书架</span>
  	</div>
  	
  	<div class="bookList">
  		<router-link class="icon" to="/Booklist"></router-link>
  		<span>书单</span>
  	</div>
  	
  	<div class="cartoon" @click="goState({name: 'Search'})">
  		<i class="icon"></i>
  		<span>搜索</span>
  	</div>
  	
  	<div class="setting">
  		<i class="icon"></i>
  		<span>我的</span>
  	</div>
  </div>
  
  <!--奇幻系列-->
  <div class="fiction">
  	<div class="title">奇幻系列</div>
  	
  	<div class="fiction1" v-for="(item, index) in books" :key="index" 
  		
  		@click="goState({name: 'Bookdetail', params: {pid: item._id}})">
  		
  		<div class="fiction1img">
  			<img class="auto-img" :src="'http://statics.zhuishushenqi.com' + item.cover">  			
  		</div>
  		
  		<div class="msg">
  			<div class="name">{{item.title}}</div>
  			<p class="desc">{{item.shortIntro}}</p>
  			
  			<div class="category">
  				<span>{{item.minorCate}}</span>
  				<span class="split">|</span>
  				<span class="number">{{item.latelyFollower}}</span>
  				<span>人气</span>
  				<span class="type">{{item.majorCate}}</span>
  			</div>
  			
  		</div>
  		
  	</div>
  	
  	<div class="more">
  		<span>查看更多</span>
  		<span class="arrow"></span>
  	</div>
  	
  </div>
  
    <!--武侠系列-->
  <div class="fiction">
  	<div class="title">仙侠系列</div>
  	
  	<div class="fiction1" v-for="(item, index) in books2" :key="index" 
  		
  		@click="goState({name: 'Bookdetail', params: {pid: item._id}})">
  		
  		<div class="fiction1img">
  			<img class="auto-img" :src="'http://statics.zhuishushenqi.com' + item.cover">  			
  		</div>
  		
  		<div class="msg">
  			<div class="name">{{item.title}}</div>
  			<p class="desc">{{item.shortIntro}}</p>
  			
  			<div class="category">
  				<span>{{item.minorCate}}</span>
  				<span class="split">|</span>
  				<span class="number">{{item.latelyFollower}}</span>
  				<span>人气</span>
  				<span class="type">{{item.majorCate}}</span>
  			</div>
  			
  		</div>
  		
  	</div>
  	
  	<div class="more">
  		<span>查看更多</span>
  		<span class="arrow"></span>
  	</div>
  	
  </div>
  
  <div>
  	<router-view></router-view>
  </div>
  
 </div>  
</template>

<script>
export default {
  name: 'Choice',
  
  data(){
  	return{
  		books:[],
  		
  		books2:[]
  	};
  },
  
    created () {
   this.getData();
   this.getData2()
  },
  
//computed:{
//	dataC(){
//		
//		return this.books.splice(3,8);
//	}
//},
  
  methods:{
  	getData(){
  		this.axios.get('api/book/by-categories?gender=male&type=hot&major=%E5%A5%87%E5%B9%BB&minor=&start=0&limit=4')
  		.then((result) => {
//    console.log(result.data.books);
  	  this.books = result.data.books;
//	  console.log('this.books => ' ,this.books);
  		});
  	},
  	
  	getData2(){
  		this.axios.get('api/book/by-categories?gender=male&type=hot&major=仙侠&minor=&start=0&limit=4')
  		.then((result) => {
//    console.log(result.data.books);
  	  this.books2 = result.data.books;
//	  console.log('this.books2 => ' ,this.books2);
  		});
  	},
  	
  	goState(path) {
  		this.$router.push(path);
  	}
  	
  	
  }

}
</script>

<style scoped>
	.Choice{
  	overflow-y: auto;
  	width: 100%;
  }
	.banner{
		/*width: 100%;*/
    height: 3.2rem;

	}
	
	.nav2{
		width: 100%;
		height: 2.53333rem;
		background-color: #fff;
		text-align: center;
		overflow: hidden;
	}
	
	.nav2 div{
		padding: .4rem 0 0;
		display: block;
		float: left;
		width: 25%;

	}
	
	.nav2 div span{
		display: block;
		height: 0.93333rem;
		line-height: 0.93333rem;
	}
	
	.nav2 .mybooks .icon{
		display: block;
    width: 1.2rem;
    height: 1.2rem;
    margin: 0 auto;
		background: url(../../public/choice1.png) 50% no-repeat;
    background-size: contain;
	}
	
		.nav2 .bookList .icon{
		display: block;
    width: 1.2rem;
    height: 1.2rem;
    margin: 0 auto;
		background: url(../../public/choice2.png) 50% no-repeat;
    background-size: contain;
	}
	
		.nav2 .cartoon .icon{
		display: block;
    width: 1.2rem;
    height: 1.2rem;
    margin: 0 auto;
		background: url(../../public/choice3.png) 50% no-repeat;
    background-size: contain;
	}
	
		.nav2 .setting .icon{
		display: block;
    width: 1.2rem;
    height: 1.2rem;
    margin: 0 auto;
		background: url(../../public/choice4.png) 50% no-repeat;
    background-size: contain;
	}

  .title{
  	width: 100%;
    height: 1.2rem;
    padding: 0 .4rem;
    line-height: 1.2rem;
    font-size: 12px;
    text-align: left;
    font-weight: bold;
  }
  
  .fiction{
  	border-top: 10px solid #F4F4F4;
  }
  
  .fiction1{
    padding: 0 .4rem;
    padding-top: .26667rem;
    
    
  }
  
  
  .fiction1img{
  	float: left;
    width: 1.66667rem;
    
  }
  
  .msg{
  	height: 2.42667rem;
    margin-left: 1.93333rem;
    padding-left: .13333rem;
    border-bottom: 1px solid #DDDDDD;
  }
  
  .msg .name{
    font-weight: 400;
    line-height: .61333rem;
    font-size: 12px;
  }
  
  .msg .desc{
  	color: #999999;
  	float: left;
  	margin: .06667rem 0 .13333rem;
    height: .85333rem;
    line-height: .45333rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  
  .category{
  	color: #666666;
  }
  
  .category .split{
  	padding: 0 .2rem;
  }
  
  .category .number{
  	color: #0183DC;
  }
  
  .category .type{
  	float: right;
  	padding: 0 .10667rem;
    height: .4rem;
    line-height: .4rem;
    border: 1px solid #ff8400;
    color: #ff8400;
    font-style: normal;
    font-size: 12px;
    border-radius: 2px;
    -webkit-transform: scale(.8);
  }
  
  .more{
  	text-align: center;
    height: 1.2rem;
    margin: 0 .4rem;
    color: #0183DC;
    line-height: 1.2rem;
   
  }
  
  .more .arrow{
  	display: inline-block;
  	width: 0.3864rem;
    height: 0.3864rem;
    line-height: 0.3864rem;
    max-width: 0.25rem;
    max-height: 0.25rem;
    background: url(../../public/arrow.png) no-repeat;
    background-size: cover;
    
  }
</style>