<template>
	<div class="mybook">
		<div class="head">
			<div class="return">
				<div class="icon"></div>
				<div class="returntext" @click="goClick">返回</div>
			</div>

			<h1>搜索</h1>

			<div class="home" @click="goState({path: '/'})">
				<div class="icon2"></div>
			</div>
		</div>
        
        <div class="searchbox">
        	<!--搜索框-->
        	<form>
               <van-search v-model="keyWord" @input="searchinput" placeholder="请输入搜索关键词" show-action>
               	 <div slot="action" @click="search" v-on:input="isshow = !isshow">搜索</div>

               </van-search>
               <!--下拉列表-->
               <transition name="fade">
                <ul v-if="isshow" class="list">
				    <li v-for="(item,index) in searchkeyword" :key="index" @click="searchkeywords(item,index)">{{item}}</li>
			    </ul>
			    </transition>
           </form>
           
           <!--搜索内容-->
           <div v-show="show" class="seachmsg">以下为搜索内容:</div>
           <div class="weekRank" v-for="(item,index) in searchProducts" :key="index" 
           	@click="goState({name: 'Bookdetail', params: {pid: item._id}})">
           	
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
           	
           	
           
        </div>
        
           <!--<div v-show="isshow" class="noData">
			     <div class="smile"></div>
			     <p>数据空空如也</p>
		   </div>-->

        
	</div>
</template>

<script>
	import { Search } from 'vant';
	
	export default {
		name: 'Mybook',
		
		data() {
			return{
				keyWord: '',
				searchProducts: [],
				show: false,
				isshow: false,
                searchkeyword: []
			};
		},
		
		components:{
			[Search.name]:Search,
		},
		methods: {
			goClick() {
				this.$router.go(-1);
			},
			
			goState(path) {
				this.$router.push(path);
			},
			//点击搜索内容
			search(){
				if (this.keyWord == '' || this.keyWord == undefined) {
					this.$toast('搜索关键不能为空');
					return;
				}
				this.searchProducts = [];
				
				var match = new RegExp('(' + this.keyWord + ')', 'img');
//				console.log('match =>',match);

				this.axios.get('api/book/fuzzy-search?query='+match+'').then((result) => {

			    var bookDatas = result.data.books;
			    					
					bookDatas.forEach(v => {
						if(match.test(v.title)){
							this.searchProducts.push(v);

							
						}
					})
				})
				this.show = true;
				
				this.isshow = false;
				
			},
			//输入搜索自动补充
			searchinput(){
				this.isshow = true;
				
				this.axios.get('api/book/auto-complete?query='+this.keyWord+'').then((a) => {
                this.searchkeyword = a.data.keywords;
				})
			},
			
			//点击关键字搜索
			searchkeywords(item){
               this.keyWord = item;
               
               this.axios.get('api/book/fuzzy-search?query='+this.keyWord+'').then((b) => {
//             	 console.log('b',b.data.books);
               	
               	this.searchProducts = b.data.books;
               	
               })
               
               
               this.isshow = false;
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
		position: relative;
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
    .searchbox{
    	position: relative;
    }
    
    .list{
    	position: absolute;
    	left: 0.4106rem;
    	top: 1.2rem;
    	width: 7.75rem;
    	border: 1px solid #F0F0F0;
    	background-color: #FFF;
    	padding-left: 0.5rem;
    }
    
    .list li{
    	float: left;
    	width: 100%;
    	height: 1rem;
    	line-height: 1rem;
    	font-size: 14px;
        
    }
    .seachmsg{
       padding: 0.26667rem 0.42667rem;
       font-size: 14px;
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
    
    .noData {
		position: absolute;
		width: 100%;
		top: 50%;
		margin-top: -50%;
		text-align: center;
		color: #999;
		z-index: 10;
	}
	
	.noData .smile {
		width: 2.66667rem;
		height: 2.66667rem;
		background: url(../../public/smile.png) no-repeat;
		background-size: 100%;
		background-position: 50%;
		margin: 0 auto;
	}
	
	.noData p{
		padding-top: 0.5rem;
	}
	
	.fade-enter-active, .fade-leave-active {
        transition: opacity 0.7s;
    }
    .fade-enter, .fade-leave-to  {
        opacity: 0;
    }
</style>