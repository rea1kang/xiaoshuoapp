<template>
	<div class="mybook">
		<div class="head">
			<div class="return">
				<div class="icon"></div>
				<div class="returntext" @click="goClick">返回</div>
			</div>

			<h1>{{rankid.title}}</h1>

			<div class="home" @click="goState({path: '/'})">
				<div class="icon2"></div>
			</div>
		</div>
		
		<van-tabs v-model="active" color="#0183DC" sticky>
			
           <van-tab title="周榜">
           	<div class="weekRank" v-for="(item,index) in books" :key="index" @click="goState({name: 'Bookdetail', params: {pid: item._id}})">
           		<div class="cover">
           			<img class="auto-img" :src="'http://statics.zhuishushenqi.com' + item.cover" />
           		</div>
           		<div class="right">
           			<p class="title1">{{item.title}}</p>
           			<p>{{item.author}}</p>
           			<p class="text">{{item.shortIntro}}</p>
           			<p>
           			    <span class="color">{{item.latelyFollower}}</span>人气
           			    <span class="split">|</span>
           			    <span class="color">{{item.retentionRatio}}%</span>读者留存
           			</p>
           		</div>
           	</div>
            </van-tab>
           
           <van-tab title="月榜">
           <div class="weekRank" v-for="(item,index) in books1" :key="index" @click="goState({name: 'Bookdetail', params: {pid: item._id}})">
           		<div class="cover">
           			<img class="auto-img" :src="'http://statics.zhuishushenqi.com' + item.cover" />
           		</div>
           		<div class="right">
           			<p class="title1">{{item.title}}</p>
           			<p>{{item.author}}</p>
           			<p class="text">{{item.shortIntro}}</p>
           			<p>
           			    <span class="color">{{item.latelyFollower}}</span>人气
           			    <span class="split">|</span>
           			    <span class="color">{{item.retentionRatio}}%</span>读者留存
           			</p>
           		</div>
           	</div>
           	

           </van-tab>
           
           <van-tab title="总榜" >
           <div class="weekRank" v-for="(item,index) in books2" :key="index" @click="goState({name: 'Bookdetail', params: {pid: item._id}})">
           		<div class="cover">
           			<img class="auto-img" :src="'http://statics.zhuishushenqi.com' + item.cover" />
           		</div>
           		<div class="right">
           			<p class="title1">{{item.title}}</p>
           			<p>{{item.author}}</p>
           			<p class="text">{{item.shortIntro}}</p>
           			<p>
           			    <span class="color">{{item.latelyFollower}}</span>人气
           			    <span class="split">|</span>
           			    <span class="color">{{item.retentionRatio}}%</span>读者留存
           			</p>
           		</div>
           	</div>
           	
           	
           </van-tab>
           
        </van-tabs>
		
	</div>
</template>

<script>
	import { Tab, Tabs } from 'vant';
	
	export default {
		name: 'Mybook',
		
		data(){
			return{
				active: 0,
				books: [],
				books1: [],
				books2: [],
				rankid: []

			}
		},
		
		components:{
			[Tab.name]:Tab,
			[Tabs.name]:Tabs
			
		},
		
		created() {
//			console.log(this.$route.params);
			this.rankid = this.$route.params;
        if(this.rankid.pid){
			this.axios.get('api/ranking/'+this.rankid.pid+'').then((result) => {
//           console.log('result.data =>',result.data.ranking.books);
            this.books = result.data.ranking.books;
           
		});

		}
        		
		if(this.rankid.month){
			this.axios.get('api/ranking/'+this.rankid.month+'').then((result) => {
//           console.log('result.data1 =>',result.data);             
             this.books1 = result.data.ranking.books;
		});

		}
		
		if(this.rankid.total){
			this.axios.get('api/ranking/'+this.rankid.total+'').then((result) => {
//           console.log('result.data2 =>',result.data.ranking.books);             
             this.books2 = result.data.ranking.books;            
		});

		}
		    
		
		},
		
		methods: {
			goClick() {
				this.$router.go(-1);
			},
			
			goState(path) {
				this.$router.push(path);
			}
		}
		

	}
</script>

<style scoped>
	.mybook {
		width: 100%;
	}
	
	.mybook .head {
		width: 100%;
		height: 1.17333rem;
		background-color: #0183DC;
		color: #fff;
/*		position: relative;*/
	}
	
	.mybook .head .return {
		float: left;
		width: 1.6rem;
		text-align: center;
		padding-left: 0.4rem;
	}
	
	.mybook .head .return .icon {
		float: left;
		height: 1.17333rem;
		line-height: 1.17333rem;
		width: 0.4rem;
		background: url(../../public/return.png) no-repeat;
		background-size: 125%;
		background-position: 50%;
	}
	
	.mybook .head .return .returntext {
		float: left;
		height: 1.17333rem;
		line-height: 1.17333rem;
		vertical-align: middle;
		font-style: normal;
		color: #FFFFFF;
	}
	
	.mybook .head h1 {
		width: 70%;
		height: 100%;
		margin: 0 auto;
		line-height: 1.17333rem;
		text-align: center;
		font-size: 14px;
	}
	
	.mybook .head .home {
		position: absolute;
		top: 0;
		right: 0.4rem;
		width: 0.4rem;
		height: 1.17333rem;
		background: url(../../public/home.png) no-repeat;
		background-size: 125%;
		background-repeat: no-repeat;
		background-position: 50%;
	}
	
	.weekRank{
		display: block;
		padding: 0.4rem;
		overflow: hidden;
		border-bottom: 1px solid #DDDDDD;
	}
	
	.weekRank .cover{
		float: left;
		width: 1.6rem;
		height: 2rem;
	}
        
    .weekRank .right{
    	height: 2rem;
        margin-left: 2rem;
    }
    
    .weekRank .title1{
    	font-weight: bold;
    	font-size: 13px;
    }
    
    .weekRank .right p{
    	line-height: .53333rem;
    }
    
    .weekRank .right .text{
    	white-space: nowrap;
    	text-overflow: ellipsis;
    	overflow: hidden;
    }
    
    .weekRank .right .split{
    	padding: 0 .26667rem;
    }
    
    .weekRank .right p .color{
    	color: #0183DC;
    }
    
</style>