<template>
	<div>
  <div class="rank">
    <ul>
        <li v-for="(item, index) in males" :key="index" 
        	@click="goState({name: 'Rankdetail' , params: {pid: item._id, month: item.monthRank, total: item.totalRank, title: item.title}})">
             <div class="rankimg"><img class="auto-img" :src="'http://statics.zhuishushenqi.com' + item.cover"></div>
             <div class="rangktext">{{item.title}}</div>
        </li>
        
    </ul>
  </div>
  
  <div>
  	<router-view></router-view>
  </div>
  
  </div>
</template>

<script>
export default {
  name: 'Rank',
  
  data() {
  	return{
  		male:[]
  	};
  },
  
  created () {
   this.getData();
   
  },
  
  computed:{
  	males(){
  		return this.male.splice(0,7);
  	}
  },
  
  methods: {
  	getData(){
  		this.axios.get('api/ranking/gender').then((result) => {
    //  console.log('result.data =>',result.data);
  			this.male = result.data.male;
  		});
  	},
  	
  	goState(path){
  		this.$router.push(path);
  	}
  }
}
</script>

<style scoped>
	.rank{
		width: 100%;
		background-color: #fff;
		margin-top: 1.6rem;
		border-top: 0.02667rem solid #EBEBEB;		
	}
	
	.rank ul li{
   border-bottom: 1px solid #EBEBEB;
	}
	
	.rangktext{
		color: #333;
    font-size: 12px;
    font-weight: 500;
    height: 100%;
    line-height: 1.6rem;
    margin-left: 1.46667rem;
	}
	
	.rankimg{
		float: left;
    width: .8rem;
    height: .8rem;
    margin: .4rem 0 0 .4rem;
	}
	

</style>