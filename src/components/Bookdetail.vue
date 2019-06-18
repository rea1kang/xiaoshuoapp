<!--小说详情页-->
<template>
	<div class="mybook">
		<!--头部导航-->
		<div class="head">
			<div class="return">
				<div class="icon"></div>
				<div class="returntext" @click="goClick">返回</div>
			</div>

			<h1>书籍详情</h1>

			<div class="home" @click="goState({path: '/'})">
				<div class="icon2"></div>
			</div>
		</div>
        
        <!--书籍信息-->
		<div class="detail">
			<div class="book-detail">
				<div class="detailimg">
					<img class="auto-img" :src="'http://statics.zhuishushenqi.com' + book.cover">
				</div>

				<div class="desc">
					<p class="desc-title">{{book.title}}</p>
					<div class="desc-msg">
						<span class="desc-author">{{book.author}}</span>
						<span>|</span>
						<span>{{book.minorCate}}</span>
						<span>|</span>
						<span>人气: {{book.latelyFollower}}</span>						
						<div class="desc-read">读者留存率: {{book.retentionRatio}}%</div>
						
					</div>
				</div>

			</div>

			<div class="detail-btn">
				<button ref="Bookcase" @click="AddBookcase">加入书架</button>
				<button @click="goState({name: 'Bookdirectory' , params: {pid: book._id}})">开始阅读</button>
			</div>
			<!--小说介绍-->
			<div class="introduction">
				<p>{{book.longIntro}}</p>
			</div>
			<!--小说目录-->
			<div class="directory">
				<div class="directory-title">完结</div>
				<div class="chapter">{{book.lastChapter}}</div>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		name: 'Bookdetail',

		data() {
			return {
				itemdetail: [],
				book: [],
				bookarr: []

			};
		},

		created() {
			this.itemdetail = this.$route.params.pid;

			this.axios.get('api/book/'+this.itemdetail+'').then((result) => {

            this.book = result.data;

			});
		},

		methods: {
			goClick() {
				this.$router.go(-1);
			},
			
			goState(path) {
  		        this.$router.push(path);
  	       },
  	       
  	        AddBookcase() {
  	        	var Bookcase = this.$refs.Bookcase;
  	        	Bookcase.style.backgroundColor = "#999999";
  	        	Bookcase.style.color = "#FFF";
  	        	Bookcase.innerHTML = "撤出书架";
	        	console.log('this.itemdetail',this.itemdetail);
//               
//         	localStorage.setItem('Bookcase',JSON.stringify(this.itemdetail));
//              
//              var kk = JSON.parse(localStorage.getItem('Bookcase'));
//              console.log('kk',kk);
//              
//           
//              this.bookarr = JSON.parse(localStorage.getItem('Book'));
//              console.log('bookarr',this.bookarr);
//              this.bookarr.push(kk);
//              
//              console.log('array',bookarr);
//              localStorage.setItem('Book',JSON.stringify(bookarr));
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
	
	.book-detail {
		width: 100%;
		padding: .53333rem;
		background: #fff;
	}
	
	.book-detail .detailimg {
		float: left;
		width: 1.73333rem;
		height: 2.33333rem;
	}
	
	.book-detail .desc {
		margin-left: 2rem;
		color: #999999;
		height: 2.33333rem;
	}
	
	.desc-title {
		
		font-size: 16px;
		color: #222222;
	}
	
	.desc-msg {
		padding-top: 0.3rem;
	}
	
	.desc-msg span {
		padding-right: 0.3rem;
	}
	
	.desc-read{
		padding-top: 0.3rem;
	}
	
	.desc-color{
		color: #0183DC;
	}
	
	.detail-btn {
		padding: 0 .53333rem .53333rem;
	}
	
	.detail-btn button {
		display: inline-block;
		height: 1.17333rem;
		line-height: 1.17333rem;
		background-color: #0183DC;
		border: 1px solid #0183DC;
		border-radius: 2px;
		text-align: center;
		color: #fff;
		font-size: 14px;
		width: 45%;
		
	}
	
	.detail-btn button:first-child {
		color: #0183DC;
		background-color: #fff;
		margin-right: 10%;
	}
	
	.introduction{
		border-top: 1px solid #F2F2F2;
		border-bottom: 1px solid #F2F2F2;
		padding: .53333rem;
		font-size: 13PX;
	}
	
	.introduction p{
        line-height: .66667rem;
	}
	
	.directory{
		padding: 0.53333rem;
	    font-size: 14px;
        border-bottom: 1px solid #F2F2F2;
	}
	
    .directory{
    	overflow: hidden;
    	line-height: .53333rem;
    }
	.directory .directory-title{
		float: left;
	}
	.directory .chapter{
		float: right;
		color: #999;
		font-size: 13PX;
	}
</style>