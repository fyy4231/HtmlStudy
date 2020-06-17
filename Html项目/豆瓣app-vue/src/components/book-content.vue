<template>
	<div class="movie_movie">
		<div class="head_one">

			<h4 class="h4">新书速递</h4>
			<p class="ppp">更多 ></p>
			<div class="fudong"></div>
			<div class="movie_one">
			<Bannermovie swipeid='gggg' :slidesPerView='3.5' :loop='false' :pagination='false' >
			<div class="swiper-slide"  slot='swiper-content' v-for='(item,i) in arr0' @click='fn(i)'>
				<img :src="item.cover" class="movie_pic">
				<p class="nvxia">{{ item.title }}</p>
				<img src="../assets/images/IMG_0380_18.png" class="star">
				<img src="../assets/images/IMG_0380_18.png" class="star">
				<img src="../assets/images/IMG_0380_18.png" class="star">
				<img src="../assets/images/IMG_0380_18.png" class="star">
				<img src="../assets/images/IMG_0380sd_18.png" class="star">
				<p style="display:inline-block;font-size:12px;color:#666">{{ item.rate }}</p>
			</div>
			</Bannermovie>
			<div class="fudong"></div>
			</div>
		</div>
		<div class="head_one">
			<h4 class="h4">最受关注的虚构类图书</h4>
			<p class="ppp">更多 ></p>
			<div class="fudong"></div>
			<div class="movie_one">
			<Bannermovie swipeid='hhhh' :slidesPerView='3.5' :loop='false' :pagination='false' >
			<div class="swiper-slide"  slot='swiper-content' v-for='(item,i) in arr1'  @click='fn3(i)'>
				<img :src="item.cover" class="movie_pic">
				<p class="nvxia">{{ item.title }}</p>
				<img src="../assets/images/IMG_0380_18.png" class="star">
				<img src="../assets/images/IMG_0380_18.png" class="star">
				<img src="../assets/images/IMG_0380_18.png" class="star">
				<img src="../assets/images/IMG_0380_18.png" class="star">
				<img src="../assets/images/IMG_0380sd_18.png" class="star">
				<p style="display:inline-block;font-size:12px;color:#666">{{ item.rate }}</p>
			</div>
			</Bannermovie>
			<div class="fudong"></div>	
			</div>
		</div>
		<div class="head_one">
			<h4 class="h4">非虚构类图书</h4>
			<p class="ppp">更多 ></p>
			<div class="fudong"></div>
			<div class="movie_one">
			<Bannermovie swipeid='iiii' :slidesPerView='3.5' :loop='false' :pagination='false' >
			<div class="swiper-slide"  slot='swiper-content' v-for='(item,i) in arr2' @click='fn4(i)'>
				<img :src="item.cover" class="movie_pic">
				<p class="nvxia">{{ item.title }}</p>
				<img src="../assets/images/IMG_0380_18.png" class="star">
				<img src="../assets/images/IMG_0380_18.png" class="star">
				<img src="../assets/images/IMG_0380_18.png" class="star">
				<img src="../assets/images/IMG_0380_18.png" class="star">
				<img src="../assets/images/IMG_0380sd_18.png" class="star">
				<p style="display:inline-block;font-size:12px;color:#666">{{ item.rate }}</p>
			</div>
			</Bannermovie>
			<div class="fudong"></div>	
			</div>
		</div>

		<div class="tushu">
			<h4 class="h4">图书资讯</h4>
			<p class="ppp">更多 ></p>
			<div class="fudong"></div>
		</div>
		<div class="textWrap" v-for='(item,i) in arr3'> 
		
			<div class="left_content" >
			<h4>{{ item.title }}</h4>
			<p class="smalltext">{{ item.target.desc }}</p>
			<p class="smalltext1">作者：{{ item.target.author.name }}</p>
			</div>
			<img :src="item.target.cover_url" class="rightpic">
			<div class="clearfloat"></div> 
			
		</div>
		<div class="textWrap" v-for='(item,i) in arr4'> 
		
			<div class="left_content" >
			<h4>{{ item.title }}</h4>
			<p class="smalltext">{{ item.target.desc }}</p>
			<p class="smalltext1">作者：{{ item.target.author.name }}</p>
			</div>
			<img :src="item.target.cover_url" class="rightpic">
			<div class="clearfloat"></div> 
			
		</div>
		<div class="textWrap" v-for='(item,i) in arr5'> 
		
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
<script type="text/javascript">
	import Bannermovie from './banner-new'
	import Booktz from './book-turn'
	export default{
		data:function(){
			return{
				arr0:[],
				arr1:[],
				arr2:[],
				arr3:[],
				arr4:[],
				arr5:[],
				arr6:[],
				arr8:[],
				arr9:[],
				arr10:[],
				arr11:[],
				arr12:[],
			}
		},
		components:{
			Bannermovie,
			Booktz
		},
		mounted:function(){
			this.search(),
			this.search1()
		},
		methods:{
			search:function(){
				this.axios.get('/api/audioData').then((response) => {
					this.arr0=response.data.data.subjects.slice(0,10)
					this.arr1=response.data.data.subjects.slice(6,15)
					this.arr2=response.data.data.subjects.slice(10,20)  
		        })
			},
			search1:function(){
				this.axios.get('/api/homeData').then((response) => {
					this.arr3=response.data.data.recommend_feeds.slice(16,17) 
					this.arr4=response.data.data.recommend_feeds.slice(17,18) 
					this.arr5=response.data.data.recommend_feeds.slice(19,20) 

		        })
			},
			fn:function(i){
				this.arr6=this.arr0[i]

			this.$router.push({path:'/book-tiaozhuan',
				query:{
					suibian:this.arr6
				}
			})
			},
			fn3:function(i){
				this.arr8=this.arr1[i]

			this.$router.push({path:'/book-tiaozhuan',
				query:{
					suibian:this.arr8
				}
			})
			},
			fn4:function(i){
				this.arr9=this.arr2[i]

			this.$router.push({path:'/book-tiaozhuan',
				query:{
					suibian:this.arr9
				}
			})
			},


		},	
	}
</script>
<style type="text/css">
	.tushu{padding: 10px 18px 0 18px;background: white}
	.movie_pic{width:100px;height: 125px;}
	.swiper-slide .star{width: 8px;}
	.fudong{clear:both;}
	.movie_movie{margin-top: 46px;}
	.head_one{padding:15px;background: #fff;margin-top: 8px;}
	.head_o{padding:15px;background: #fff;margin-top: 8px;}
	.h4{float:left;font-size: 14px;}
	.ppp{float:right;font-size: 12px;color:green;}
	.swiper-slide .movie_pic{width: 88px;}
	.tuwen_one{width: 90px;float:left;margin-right: 8px;margin-top: 20px;}
	.nvxia{font-size: 12px;width: 88px;overflow: hidden;text-overflow: ellipsis;height: 16px;}
	.wrap{z-index: 99}
</style>