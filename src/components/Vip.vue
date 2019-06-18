<template>
    <div class="vip">
    <van-swipe class="banner" :autoplay="2000" indicator-color="white">
      <van-swipe-item><img class="auto-img" src="../../public/banner5.png"/></van-swipe-item>
      <van-swipe-item><img class="auto-img" src="../../public/banner6.png"/></van-swipe-item>
    </van-swipe>
    
    <div class="login">
    	<div class="left">
    		<div class="userimg"></div>
    		<div class="usertext">大侠先登录一个呗</div>
    	</div>
    	<div class="right">
    		<div class="loginbtn">立即登录</div>
    	</div>
    </div>
    
    <div class="mid">
    	<div class="mid1">
    		<span class="booksImg"></span>
    		<span class="booktext">VIP书库</span>
    	</div>
    	<div class="mid2">
    		<span class="starImg"></span>
    		<span class="startext">VIP特权</span>
    	</div>
    </div>
    <!--青春校园-->
    <div class="fiction">
  	<div class="title">青春校园</div>
  	
  	<div class="fiction1" v-for="(item, index) in books" :key="index" @click="goState({name: 'Bookdetail', params: {pid: item._id}})">
  		<div class="fiction1img">
  			<img class="auto-img" :src="'http://statics.zhuishushenqi.com' + item.cover">  			
  		</div>
  		
  		<div class="msg">
  			<div class="name">{{item.title}}</div>
  			<p class="desc">{{item.shortIntro}}
  			</p>
  			
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
    
    <!--科幻-->
    <div class="fiction">
  	<div class="title">科幻</div>
  	
  	<div class="fiction1" v-for="(item, index) in books2" :key="index" @click="goState({name: 'Bookdetail', params: {pid: item._id}})">
  		<div class="fiction1img">
  			<img class="auto-img" :src="'http://statics.zhuishushenqi.com' + item.cover">  			
  		</div>
  		
  		<div class="msg">
  			<div class="name">{{item.title}}</div>
  			<p class="desc">{{item.shortIntro}}
  			</p>
  			
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
  
  name: 'Vip',
  
  data(){
  	return{
  		books:[],
  		books2:[]
  	}
  },
  
  created(){
  	this.getData();
  	this.getData2();
  },
  
  methods:{
  	getData(){
		this.axios.get('api/book/by-categories?gender=female&type=hot&major=%E9%9D%92%E6%98%A5%E6%A0%A1%E5%9B%AD&minor=&start=0&limit=4').then((result) => {
//    console.log(result.data.books);
	  this.books = result.data.books;
		});
  		
  	},
  	
  	getData2(){
		this.axios.get('api/book/by-categories?gender=male&type=hot&major=科幻&minor=&start=0&limit=4').then((result) => {
//    console.log(result.data.books);
	  this.books2 = result.data.books;
		});
  		
  	},
  	
  	goState(path) {
  		this.$router.push(path);
  	}
  }
 
}
</script>


<style scoped>
	.vip{
		overflow-y: auto;
		width: 100%;
	}
	.banner{
    width: 100%;
    height: 3.2rem;
	}
	
	.login{
		/*width: 100%;*/
		background-color: #fff;
		padding: 0 0.4rem;
		overflow: hidden;
		position: relative;
		border-bottom: 1px solid #DFDFDF;
		
	}
	
	.login .left{
		float: left;
		overflow: hidden;
	}
	
	.login .left div{
		float: left;
	}
	
	.login .left .userimg{
		margin-top: .26667rem;
		width: 0.8rem;
		height: 0.8rem;
		line-height: 0.8rem;
		background: url(../../public/user.png) no-repeat;
		background-size: cover;
	}
	
	.login .left .usertext{
		font-size: ;
		height: 1.33333rem;
		line-height: 1.33333rem;
		margin-left: 0.4rem;
		
	}
			
	.login .right .loginbtn{
		margin-right: 0.4rem;
		width: 1.8rem;
		height: 0.73333rem;
		line-height: 0.73333rem;
		border-radius: 3px;
		background-color: #0183DC;
		color: #FFFFFF;
		text-align: center;
		position: absolute;
		top: 0;
		right: 0.4rem;
		bottom: 0;
		margin: auto 0;	
	}
	
	.mid{
		/*width: 100%;*/
		background-color: #fff;
		padding: 0 .4rem;
		overflow: hidden;
		position: relative;
	}
	
	.mid div{
		float: left;
		width: 50%;			
	}
	
	.mid .mid1{
		text-align: center;
	}
	
	.mid .mid2{
		text-align: center;
	}
	
	.mid .mid1 .booksImg{
		position: absolute;
		left: 1.2077rem;
		top: 0;
		display: block;
		height: 1.3333rem;
		width: 0.8rem;
		background: url(../../public/books.png) no-repeat;
		background-size: 100%;
		background-position: 50%;		
	}
	
	.mid .mid1 .booktext{
		display: block;
		right: 25%;
		height: 1.3333rem;
		line-height: 1.3333rem;
	}
	
	.mid .mid2 .starImg{
		position: absolute;
		left: 5.7971rem;
		top: 0;
		display: block;
		height: 1.3333rem;
		width: 0.8rem;
		background: url(../../public/star.png) no-repeat;
		background-size: 100%;
		background-position: 50%;
	}
	
	.mid .mid2 .startext{
		display: block;
		height: 1.3333rem;
		line-height: 1.3333rem;
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
  	border-top: 0.26667rem solid #F4F4F4;
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