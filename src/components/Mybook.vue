<template>
	<div class="mybook">
		<div class="head">
			<div class="return">
				<div class="icon"></div>
				<div class="returntext" @click="goClick">返回</div>
			</div>

			<h1>我的书架</h1>

			<div class="home">
				<div class="icon2"></div>
			</div>
		</div>
		
		<div class="middle">
			<div class="right">编辑</div>
		</div>
		
		<div class="books">
			<div class="container" v-for="(item,index) in Bookmsg" :key="index">
				<div class="cover">
					<img class="auto-img" :src="'http://statics.zhuishushenqi.com' + item.cover"  />
				</div>
				
				<div class="msg">
				    <div class="title1">{{item.title}}</div>
				    <div class="title2">{{item.author}}</div>
				</div>
			</div>
		</div>

		<!--<div class="noData">
			<div class="smile"></div>
			<p>书架空空如也，快去逛逛找书</p>
		</div>-->
	</div>
</template>

<script>
	export default {
		name: 'Mybook',
		data() {
			return{
				Bookcase: [],
				Bookmsg: []
			}
		},
		
		created() {
			this.Bookcase = JSON.parse(localStorage.getItem('Book'));
//			this.Bookcase = this.Bookcase == undefined ? [] : JSON.parse(this.Bookcase);
//			console.log('this.Bookcase',this.Bookcase);
			
            // this.Bookcase.forEach( v => {
            // 	console.log('v',v);
            // 	this.axios.get('api/book/'+v+'').then((result) => {
//				console.log('result.data',result.data);
				// this.Bookmsg.push(result.data);
			
			//   })
            // })
		},
		methods: {
			goClick() {
				this.$router.go(-1);
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
	
	.noData {
		position: absolute;
		width: 100%;
		top: 50%;
		margin-top: -50%;
		text-align: center;
		color: #999;
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
	
	.middle{
	    height: 1.46667rem;
        line-height: 1.46667rem;
        padding: 0 .4rem;
        color: #999;
	}
	
	.middle .right{
		float: right;
	}
	.books{
		border: 1px solid #0183DC;
		border-bottom: 1px solid #FFF;
	}
	.books .container{
		overflow: hidden;
		padding: .4rem;
		border-bottom: 1px solid #0183DC;
	}
	
	.books .container .cover{
		float: left;
        width: 1.6rem;
/*        height: 2rem;*/
	}
	
	.books .container .msg{
		float: left;
		margin-left: 0.4rem;
	}
	
	.books .container .msg .title1{
		font-weight: bold;
		font-size: 14px;
	}
	
</style>