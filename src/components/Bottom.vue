<template>
	<div class="bottom">
	    <!--<div class="searchbox">
            <div class="search-icon"></div>
            <input class="search-input" type="text" />
            <div class="search-btn">搜索</div>
	    </div>-->
	    
	    <div class="category">
	    	<span @click="goState({name: 'Classify'})">分类</span>
	    	<span @click="goState({name: 'Rank'})">排行</span>
	    	<span @click="goState({name: 'Booklist'})">书单</span>
	    	<span>我的</span>
	    	<span>联系我们</span>
	    </div>
	    
	    <div class="c-info">
	    	<div class="field">
	    		<p>沪公网安备 31011202006103号</p>
	    	</div>
	    	
	    	<div class="field2">
	    		上海元聚网络科技有限公司 增值电信业务经营许可证沪B2-20170022
	    		 网络文化经营许可证沪网文（2016）3206-227号 出版物经营许可证新出发沪批字第U7659号
	    	</div>
	    	
	    	<div class="field2">
	    		客服电话：021-54393188-8048
	    	</div>
	    </div>
		
	</div>
	
</template>

<script>

export default {
  
  name: 'Bottom',
  
  methods:{
  		goState(path) {
		this.$router.push(path);
	}
  }
  
 
}
</script>

<style scoped>
  .bottom{
  	background-color: #F4F4F4;
  }
  
  .searchbox{
  	width: 100%;
  	position: relative;
    padding: 0.4667rem .4rem;
    display: inline-block;
  }
  
  .search-icon{
  	position: absolute;
  	top: 0.4589rem;
  	left: 0.4rem;
  	width: .8rem;
    height: .8rem;
    background: url(../../public/search1.png) no-repeat;
    background-size: 50%;
    background-position: 50%;
  }
  
  .search-input{
  	float: left;
    width: 67%;
    height: .8rem;
    padding-left: .8rem;
    border: 1px solid #ebebeb;
    border-radius: 2px;
    -webkit-appearance: none;
    line-height: .8rem;
  }
  
  .search-btn{
  	width: 10%;
    position: absolute;
    top: 0.4589rem;
    right: 1.2rem;
    height: .8rem;
    line-height: .8rem;
    border-radius: 2px;
    border: 1px solid #ebebeb;
    background: #fff;
    text-align: center;
  }
  
  .category{
  	width: 100%;
  	height: 0.8rem;
  	padding: 0.4667rem 0rem;
  }
  
  .category span{
  	height: .8rem;
    padding-top: 9px;
    float: left;
    display: block;
    width: 20%;
    color: #333;
    font-weight: 600;
    font-size: 12px;
    text-align: center;
     
  }
  
  .c-info{
  	width: 100%;
    margin: 0 auto;
    padding: 0.483rem 0;
    color: #939393;
  }
  
  .field{
  	text-align: center;
  	position: relative;
  }
  .fieldicon{
  	position: absolute;
    top: 0;
    left: 2.3188rem;
  }
  
  .field2{
  	padding: 0 0.3rem;
  	text-align: center;
  	margin-top: 0.4rem;
  }
  

</style>