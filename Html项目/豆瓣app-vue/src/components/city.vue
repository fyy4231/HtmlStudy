<template>
	<div>
		<div class="head_one">
			<h4 class="h4">热门活动</h4>
			<p class="ppp">更多 ></p>
			<div class="fudong"></div>
			<div class="movie_one">
			<Bannermovie swipeid='gsad' :slidesPerView='3.5' :loop='false' :pagination='false' >
			<div class="swiper-slide"  slot='swiper-content' v-for='(item,i) in arr' @click='fn6(i)'>
				<img :src="item.cover" class="movie_pic">
				<p class="nvxia">{{ item.title }}</p>
				<p class="shijian">2017-06-08</p>
				<p class="piao">官方售票</p>
			</div>
			</Bannermovie>
			<div class="fudong"></div>
			</div>
		</div>

		<div class="head_one">
			<h4 class="h4">官方售票</h4>
			<p class="ppp">更多 ></p>
			<div class="fudong"></div>
			<div class="movie_one">
			<Bannermovie swipeid='fdas' :slidesPerView='3.5' :loop='false' :pagination='false' >
			<div class="swiper-slide"  slot='swiper-content' v-for='(item,i) in arr0' @click='fn7(i)'>
				<img :src="item.cover" class="movie_pic">
				<p class="nvxia">{{ item.title }}</p>
				<p class="shijian">2017-06-11</p>
				<p class="piao">官方售票</p>
			</div>
			</Bannermovie>
			<div class="fudong"></div>
			</div>
		</div>
		<div class="yyWrap">
			<h5 style="margin-bottom:15px;">选音乐</h5>
			<span class="yinyue">流行</span>
			<span class="yinyue">摇滚</span>
			<span class="yinyue">民谣</span>
			<span class="yinyue">独立</span><br>
			<div class="yy-yy">
			<span class="yinyue">华语</span>
			<span class="yinyue">欧美</span>
			<span class="yinyue">日本</span>
			<span class="yinyue">韩国</span>
			</div>
		</div>
		<div class="gxq">
			<h4 class="h4">最受欢迎乐评</h4>
			<p class="ppp">更多 ></p>
			<div class="fudong"></div>
		</div>
		<div class="textWrap textWrap4" v-for='item in arr3'>
			
			<div class="left_content" >
			<h4>{{ item.title }}</h4>
			<p class="smalltext">{{ item.target.desc }}</p>
			<p class="smalltext1">作者：{{ item.target.author.name }}</p>
			</div>
			<img :src="item.target.cover_url" class="rightpic">
			<div class="clearfloat"></div> 
		</div>

		
	</div>
</template>
<style type="text/css">
	.textWrap4{margin-top: -10px;}
	.gxq{background: #fff;padding:15px 15px 0 15px}
	.yyWrap{background: #fff;padding:10px 15px 30px 15px;}
	.yy-yy{margin-top: 25px;}
	.yinyue{border: 1px solid green;border-radius: 25px;padding: 3px 15px;color: green;font-size: 12px;margin-left: 10px;margin-top: 20px;}
	.piao{font-size: 12px;color:red;border: 1px solid red;display: inline-block;padding: 1px 5px;transform: scale(0.8);margin-left: -5px}
	.shijian{color:#999;font-size: 12px;}
	.head_one:first-child{margin-top: 46px;}
	.head_one{padding:15px;background: #fff;margin-bottom: 8px;}
	.fudong{clear:both;}
</style>
<script type="text/javascript">
import Bannermovie from './banner-new'
import booktzz from './book-turn'
	export default{
		components:{
			Bannermovie,
			booktzz
		},
		data:function(){
			return{
				arr:[],
				arr0:[],
				arr3:[],
				arr4:[],
				arr5:[],
			}
		},
		mounted:function(){
			this.search(),
			this.search1()
		},
		methods:{
			search:function(){
				this.axios.get('/api/audioData').then((response) => {
					this.arr=response.data.data.subjects.slice(29,39)
					this.arr0=response.data.data.subjects.slice(15,25)


		          
		        })
			},
			search1:function(){
				this.axios.get('/api/homeData').then((response) => {
					this.arr3=response.data.data.recommend_feeds.slice(5,8)
		        })
			},
			fn6:function(i){
				this.arr4=this.arr[i]

				this.$router.push({path:'/book-tiaozhuan',
					query:{
						suibian:this.arr4
					}
				})
			},
			fn7:function(i){
				this.arr5=this.arr0[i]

				this.$router.push({path:'/book-tiaozhuan',
					query:{
						suibian:this.arr5
					}
				})
			}

		},
	}
</script>