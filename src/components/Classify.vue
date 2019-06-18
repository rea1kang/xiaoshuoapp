<template>
  <div class="classify">
  	
    <div class="classify-list">
    	<div class="list" v-for="(item, index) in male" :key="index" 
    		@click="goState({name: 'Classifydetail' , params: {name: item.name}})">
    		<span class="name">{{item.name}}</span>
    		<span class="count">{{item.bookCount}}</span>
    	</div>
    </div>
    
    <div class="classify-list">
    	<div class="list" v-for="(item, index) in female" :key="index" 
    		@click="goState({name: 'Classifydetail' , params: {name: item.name}})">
    		<span class="name">{{item.name}}</span>
    		<span class="count">{{item.bookCount}}</span>
    	</div>
    </div>
    
    <div>
         <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Classify',
  
  data() {
  	return {
  		male: [],
  		female: []

  	};
  },
  
  created () {
  	this.getData();
  },
  
  methods: {
			getData() {
				this.axios.get('api/cats/lv2/statistics').then((response) => {
				// console.log('response.data => ', response.data);
				
				this.male = response.data.male;
				this.female = response.data.female;
//	       console.log('this.male => ', this.male);	
//	       console.log('this.female', this.female);
				});
				
			},
			
			goState(path){
			   this.$router.push(path);
		  }
		}

}
</script>


<style scoped>
  .classify{
  	overflow-y: auto;
  }
	.classify-list{
		width: 100%;
		margin-top: 1.6rem;
		background-color: #fff;
	}

	.list{
		padding-top: 0.3rem;
		background-color: #fff;
		display: inline-block;
    width: 33%;
    height: 1.6rem;
    line-height: 1.6rem;
    text-align: center;
    border-top: 1px solid #f8f8f8;
    border-right: 1px solid #f8f8f8;
    border-bottom: 1px solid #f8f8f8;

	}
	
	.list .name{
		display: block;
		height: .53333rem;
		line-height: .53333rem;
    font-size: 14px;
    font-weight: 700;
    color: #333;
		
	}
	
	.list .count{
		display: block;
		height: .53333rem;
	  line-height: .53333rem;
    font-size: 12px;
    color: #ccc;
	}

</style>