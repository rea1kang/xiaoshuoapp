<!--小说章节-->
<template>
	<!--头部导航-->
	<div class="mybook">
		<div class="head">
			<div class="return">
				<div class="icon"></div>
				<div class="returntext" @click="goClick">返回</div>
			</div>

			<h1>优质书源</h1>

			<div class="home" @click="goState({path: '/'})">
				<div class="icon2"></div>
			</div>
		</div>
		<!--小说章节列表-->
		<div class="chapter">
			<div class="chapterhead">目录</div>
		</div>
		
		<ul v-for="(item, index) in chapters" :key="index">
			<li @click="goState({name: 'Reading' , params: {pid: item.title, a: item.link}, query: {index: index
			}})">{{item.title}}</li>
		</ul>

	</div>
</template>

<script>
	export default {
		name: 'Bookdirectory',
		
		data(){
			return{
				bookid: null,
				
				chapters: []
			}
		},
		
		created(){
            
            this.bookid = this.$route.params.pid;
            
            this.axios.get('api/mix-atoc/'+this.bookid+'?view=chapters').then((result) => {
            // console.log('result.data',result.data);
			this.chapters = result.data.mixToc.chapters;
            
            localStorage.setItem('lsid',JSON.stringify(this.bookid));
            localStorage.setItem('lslink',JSON.stringify(this.chapters));
			});
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
   
    .chapterhead{
    	padding: .4rem .53333rem;
        font-size: 13px;
        border-bottom: 1px solid #f8f8f8;
    }
    
    ul li{
    	font-size: 13px;
    	height: 1.33333rem;
        line-height: 1.33333rem;
        border-bottom: 1px solid #f8f8f8;
        margin-left: .53333rem;
    }
</style>