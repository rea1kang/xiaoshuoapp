<template>
	<div class="mybook">
		<div class="head">
			<div class="return">
				<div class="icon"></div>
				<div class="returntext" @click="goClick">返回</div>
			</div>

			<h1>分类</h1>

			<div class="home">
				<div class="icon2"></div>
			</div>
		</div>
		
		<div class="classify">
			<!--<div class="classifyitem">
			     <div class="inner">
					<div @click="" class="item">热门</div>
					<div @click="" class="item">新书</div>
					<div @click="" class="item">好评</div>
					<div @click="" class="item">完结</div>
					<div @click="" class="item">包月</div>
				</div>
			</div>-->
			
			<div class="classifyitem">
			     <div class="inner">
					<div @click="" class="item">全部</div>
					<div @click="getData1" class="item" v-for="(c,index) in result" :key="index">{{c}}</div>
				</div>
			</div>
		</div>
		
		<div class="classifybooks">
			<div class="weekRank" v-for="(item,index) in dataCC" :key="index" @click="goState({name: 'Bookdetail', params: {pid: item._id}})">
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

	</div>
</template>

<script>
	export default {
		name: 'Mybook',
		
		data() {
			return{
				male: [],
				famale: [],
				result: [],
				results: [],
				dataCC: []
			}
		},
		
		created() {
			var name = this.$route.params.name;
			this.axios.get("/api/cats/lv2").then(result =>{
				console.log('result.data',result.data);
				this.male = result.data.male;
				this.female = result.data.female;
//				console.log('this.male',this.male);
										
				   this.male.map( m=>{
                    if(name === m.major){
                    this.result = m.mins;
//                  console.log('this.result =>',this.result[0]);
                  }
               })
				   
				   	this.female.map( m=>{
                    if(name === m.major){
                    this.result = m.mins;
//                  console.log('this.result =>',this.result[0]);
                  }
               })
				   
				  
			})
			
			this.getData();
			
		},
		
		methods: {
			goClick() {
				this.$router.go(-1);
			},
			
			goState(path){
				this.$router.push(path);
			},
			
            getData() {
            	this.axios.get(`/api/book/by-categories?gender=male&type=hot&major=${this.$route.params.name}&minor=&start=0&limit=10`).then(aa =>{
//              console.log('aa==>',aa.data)
                this.dataCC = aa.data.books;
             })
            },
          
			
			getData1() {
               console.log('this.result =>',this.result);
               for(var i = 0; i < this.result.length; i++) {
//             	  console.log(this.result[i]);
                this.axios.get(`/api/book/by-categories?gender=male&type=hot&major=${this.$route.params.name}&minor=${this.result[i]}&start=0&limit=10`).then(bb =>{
                console.log('bb ==>',bb.data);
                
                if(this.result[i] == bb.data.books.minorCate){
                  this.dataCC = bb.data.books;
                }
//              
            })
                
                this.axios.get(`/api/book/by-categories?gender=female&type=hot&major=${this.$route.params.name}&minor=${this.result[i]}&start=0&limit=10`).then(cc =>{
//              console.log('bb ==>',bb.data);
                
                if(this.result[i] == cc.data.books.minorCate){
                  this.dataCC = cc.data.books;
                }
//              
            })
                
            }
               
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
	
	.classify {
	   color: #666;
	}
	
	.classify .classifyitem{
		width: 100%;
	    overflow: hidden;
	    border-bottom: 1px solid #DDDDDD;
	}
	
	.classify .classifyitem .item{
		float: left;
		padding-left: .4rem;
		font-size: 12px;
		line-height: 1.2rem;
	}
	
	.blue-acitve{
		color: #0183DC;
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