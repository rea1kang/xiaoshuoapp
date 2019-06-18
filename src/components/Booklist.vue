<template>
  <div class="mybook">
      <div class="head">
        <div class="return">
            <div class="icon"></div>
            	<div class="returntext" @click="goClick">返回</div>
            </div>
            
            <h1>我的书单</h1>
            
            <div class="home" @click="goState({path: '/'})">
            	<div class="icon2"></div>
            </div>
       </div>
       
       <div class="noData">
       	    <div class="smile"></div>
       	    <p>书架空空如也，快去逛逛找书</p>
       </div>
  </div>
</template>

<script>
export default {
  name: 'Booklist',
  
//created(){
//	this.axios.post('api/post/getPostInCate?cateid=0&p=1').then((a) => {
//	   console.log('a',a);	
//	})
//},
  methods:{
  	goClick() {
				this.$router.go(-1);
			}
  }
}
</script>

<style scoped>
	.mybook{
		width: 100%;
	}
	
	.mybook .head{
		width: 100%;
		height: 1.17333rem;
		background-color: #0183DC;
		color: #fff;
		position: relative;
	}
  .mybook .head .return{
  	float: left;
  	width: 1.6rem;
		text-align: center;
		padding-left: 0.4rem;
	}
	.mybook .head .return .icon{
		float: left;
		height: 1.17333rem;
		line-height: 1.17333rem;
		width: 0.4rem;
		background: url(../../public/return.png) no-repeat;
		background-size: 125%;
    background-position: 50%;
	}
	
	.mybook .head .return .returntext{
		float: left;
		height: 1.17333rem;
		line-height: 1.17333rem;
    vertical-align: middle;
    font-style: normal;
    color: #FFFFFF;
	}
	
	.mybook .head h1{
		width: 70%;
    height: 100%;
    margin: 0 auto;
    line-height: 1.17333rem;
    text-align: center;
    font-size: 14px;
	}
		
	.mybook .head .home{
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
	
	.noData{
		position: absolute;
    width: 100%;
    top: 50%;
    margin-top: -50%;
    text-align: center;
    color: #999;
	}
	
	.noData .smile{
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
</style>