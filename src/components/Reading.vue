<template>
	<div class="mybook">
		<!--头部导航-->
		
		<transition name="fade">
		<div class="head" v-if="show">
			<div class="return">
				<div class="icon"></div>
				<div class="returntext" @click="goClick">返回</div>
			</div>

			<h1>Reading</h1>

			<div class="home" @click="goState({path: '/'})">
				<div class="icon2"></div>
			</div>
		</div>
		</transition>
		
		<!--小说内容-->
		<div class="readbox" ref="readbox">
			<div class="readTitle" ref="readTitle">{{chapters.pid}}</div>
			
	        <p ref="size" v-on:click="show = !show" v-html="comBody"></p>
        </div>
			
			
		<!--尾部-->
		<transition name="fade">
		<div class="bottom" v-if="show">
			<div class="item">
				<span class="btn" @click="fontsizejian()">Aa-</span>
				<span class="progress"></span>
				<span class="btn" @click="fontsizeadd()">Aa+</span>
			</div>
			
			<div class="item2">
				<span @click="changeColor1">默认</span>
				<span @click="changeColor2">夜间</span>
				<span @click="changeColor3">护眼</span>
			</div>
			
		    <div class="item3">
				<span @click="previousChapter">上一章</span>
				<span>目录</span>
				<span @click="nextChapter">下一章</span>
			</div>
		</div>
		</transition>


	</div>
</template>

<script>
	export default {
		name: 'Reading',
		
		data(){
			return{
				chapters: null,
				
				readtext: '',
				
				size: 14,
				
				show: false,
								
				keylink: [],
				
				index: 0

			}
		},
		
		created(){
			this.chapters = this.$route.params;

						
			this.index = this.$route.query.index

			
			this.axios.get('chapterup/chapter/'+encodeURIComponent(this.chapters.a)+'').then((result) => {

				this.readtext = result.data.chapter.body;
			
				this.keylink = localStorage.getItem('lslink');
				
				this.keylink = this.keylink == undefined ? [] : JSON.parse(this.keylink);
			});
		},

	    computed:{
          comBody(){
               return this.readtext.replace(/\n/g,'<p>')
            }
        },
		methods: {
			goClick() {
				this.$router.go(-1);
			},
			
			goState(path) {
  		        this.$router.push(path);
  	       },
			//点击增大字体大小
			fontsizeadd(){
				if(this.size >= 20){
					return;
				}

				var changesize = this.$refs.size;
				
				this.size = this.size+1;
		
				changesize.style.fontSize = this.size+'px';
								
			},
			//点击减少字体大小
			fontsizejian(){
				if(this.size <= 15){
					return;
				}

				var changesize = this.$refs.size;
				
				this.size = this.size-1;
		
				changesize.style.fontSize = this.size+'px';
								
			},
			//小说阅读默认模式
			changeColor1(){
				var changeColor = this.$refs.readbox;
				changeColor.style.backgroundColor = '#EEE6DD';
				
				this.show = false;
			},
			//小说阅读夜间模式
			changeColor2(){
				var changeColor = this.$refs.readbox;
				var changetitle = this.$refs.readTitle;
				changeColor.style.backgroundColor = '#0C0C0C';
				changetitle.style.color = '#888888';
				
				this.show = false;
			},
			//小说阅读护眼模式
			changeColor3(){
				var changeColor = this.$refs.readbox;
				var changetitle = this.$refs.readTitle;
				changeColor.style.backgroundColor = '#B8CD8D';
				changetitle.style.color = '#5C5D58';
				
				this.show = false;
			},
			
			//点击下一章
			nextChapter(){
				var index = this.index + 1;
				this.index = index;
				var num = this.keylink[index];

				var link = num.link;

				this.axios.get('chapterup/chapter/'+encodeURIComponent(link)+'').then((result) => {

                    this.readtext = result.data.chapter.body;

				});
				
				this.chapters.pid = num.title;

			},
			
			//点击上一章
			previousChapter(){
				var index = this.index - 1;
				this.index = index;
				
				if(this.index < 0){
					return;
				}

				var num = this.keylink[index];

				var link = num.link;

				this.axios.get('chapterup/chapter/'+encodeURIComponent(link)+'').then((result) => {

                    this.readtext = result.data.chapter.body;

				});
				
				this.chapters.pid = num.title;

			},
			
			
			
		}
	}
</script>

<style scoped>
	.mybook {
		width: 100%;
		background-color: #EEE6DD;		
	}
	
	.mybook .head {
		width: 100%;
	    position: fixed;
		top: 0;
		left: 0;
		height: 1.17333rem;
		background-color: #444545;
		color: #fff;
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
	
	.bottom{
		width: 100%;
		padding: .53333rem;			
		background-color: #444545;
		position: fixed;		
		left: 0;
		bottom: 0;
		z-index: 20;		
	}
	
	.bottom .item{
		width: 100%;
		margin-bottom: .53333rem;		
	}
	
	.bottom .item .progress{
		display: inline-block;
		width: 6.4rem;
        height: .05333rem;
        background: '';
        border-radius: .02667rem;
        margin: 0 .4rem;
	}
	
	.bottom .item .btn{
		color: #FFFFFF;
		width: .85333rem;
        font-size: .50667rem;
	}
	
	.bottom .item2{
		margin-bottom: .53333rem;
	}
	
	.bottom .item2 span{
		display: inline-block;
        vertical-align: middle;
        height: .8rem;
        line-height: .8rem;
        text-align: center;
        border-radius: 2px;
        color: #fff;
        font-size: 14px;
        width: 2.66667rem;
        border: 1px solid #535353;
        border-radius: .10667rem;
	}
	
	.bottom .item2 span:nth-of-type(2){
	    margin: 0 .45333rem;
	}	
    
    .bottom .item3 span{
    	display: inline-block;
    	width: 1.33333rem;
        font-size: .4rem;
        color: #FFFFFF;
        text-align: center;
        
    }
    
    .bottom .item3 span:nth-of-type(2){
	    margin: 0 2.4rem;
	}
	
	.readbox{
		background-color: #EEE6DD;
		/*margin-top: 1.17333rem;
		margin-bottom: 4.1693rem;*/
		padding-top: .26667rem;
	}
	
	.readbox .readTitle{
		font-weight: 100;
		padding: 0.9rem 0.53333rem 0.3rem;
		font-size: 20px;
	}
	.readbox p{
		color: #5C5D58;	
		font-size: 14px;
		padding: 0 .53333rem;
		padding-bottom: 4.1693rem;
		line-height: 0.7rem;
		text-indent: 2em;
	}
	
	.fade-enter-active, .fade-leave-active {
        transition: opacity .2s;
    }
    
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }	
</style>