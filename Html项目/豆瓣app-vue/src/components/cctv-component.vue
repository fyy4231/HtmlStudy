<template>
	<div id="meiyou">
	<div class="Wrapp">
		<Bannermovie swipeid='ffff' :slidesPerView='1.3' :loop='false' :pagination='false' :spaceBetween='15'>
		<div class="day swiper-slide" slot='swiper-content' v-for='(item,i) in arrp' @click='fn4(i)'>
			<img  :src="item.cover" class="imgday">
			<div class="rightday">
				<p style="font-size:14px;">{{ item.title }}</p>
				<img src="../assets/images/rating_star_card_on.png"><img src="../assets/images/rating_star_card_on.png"><img src="../assets/images/rating_star_card_on.png"><img src="../assets/images/rating_star_card_on.png"><img src="../assets/images/rating_star_card_on.png">
				<span class="zi">{{ item.rate }}</span>
				<p class="zi">更新至54级/每天更新/腾讯会员</p>
				<p class="zi">14327人想看</p>
			</div>
			<div style="clear:both"></div>
		</div>
		</Bannermovie>
	</div>
	
	
			<div class="headone">
			<h4 class="h4">影院热映</h4>
			<p class="ppp">更多 ></p>
			<div class="fudong"></div>
			
			<div class="movie_one">
			<Bannermovie swipeid='dddd' :slidesPerView='3.5' :loop='false' :pagination='false'>
			<div class="swiper-slide"  slot='swiper-content' v-for='(item,i) in arr0' @click='fn5(i)'>
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




			<div class="headone">
			<h4 class="h4">影院热映</h4>
			<p class="ppp">更多 ></p>
			<div class="fudong"></div>
			
			<div class="movie_one">
			<Bannermovie swipeid='eeee' :slidesPerView='3.5' :loop='false' :pagination='false'>
			<div class="swiper-slide"  slot='swiper-content' v-for='(item,i) in arr1' @click='fn6(i)'>
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



			<div class="headone">
			<div class="gxq">
			<h4 class="h4">你可能感兴趣</h4>
			<p class="ppp">更多 ></p>
			<div class="fudong"></div>
			</div>
			
			<div class="movie_one">
			
			<div class="abcd"  slot='swiper-content' v-for='(item,i) in arr2' @click='fn7(i)'>
					<img :src="item.cover" class="movie_pic11">
					<p class="nvxia">{{ item.title }}</p>
					<img src="../assets/images/IMG_0380_18.png" class="star">
					<img src="../assets/images/IMG_0380_18.png" class="star">
					<img src="../assets/images/IMG_0380_18.png" class="star">
					<img src="../assets/images/IMG_0380_18.png" class="star">
					<img src="../assets/images/IMG_0380sd_18.png" class="star">
					<p style="display:inline-block;font-size:12px;color:#666">{{ item.rate }}</p>
			</div>
			<div class="fudong"></div>
			<p class="chakan">查看更多></p>
			
			
			
			</div>
			</div>

		<div class="gxq">
			<h4 class="h4">最受欢迎剧评</h4>
			<p class="ppp">更多 ></p>
			<div class="fudong"></div>
		</div>
		<div class="textWrap" v-for='item in arr3'>
			
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
	.chakan{text-align: center;margin-top: 15px;color:green;font-size: 12px;}
	.movie_pic{width: 90px;}
	.movie_one .movie_pic11{width: 90px;height: 120px;}
	.abcd{float: left;margin-left: 20px;}
	.headone{padding-top: 10px;margin-top: 8px;}
	.day .imgday{float:left;height: 90px;width: 70px;}
	.day{padding:5px 10px;border:1px solid #ccc;width: 280px;margin-top: 10px;}
	.day .rightday{margin-left: 10px;float: left;}
	.day .rightday img{width: 10px;}
	.day .rightday p{padding: 2px 0;}
	.day .zi{color:#999;font-size: 12px;}
	.gxq{margin-bottom: 10px;}
</style>
<script type="text/javascript">
import Bannermovie from './banner-new'
import bookas from './book-turn'
	export default{
		components:{
			Bannermovie,
			bookas
		},
		data:function(){
			return{
				arrp:[],
				arr0:[],
				arr1:[],
				arr2:[],
				arr3:[],
				arr4:[],
				arr5:[],
				arr6:[],
				arr7:[]
			}
		},
		mounted:function(){
			this.search(),
			this.search1()
		},
		methods:{
			search:function(){
				this.axios.get('/api/audioData').then((response) => {
					this.arrp=response.data.data.subjects.slice(0,10)
					this.arr0=response.data.data.subjects.slice(20,30)
					this.arr1=response.data.data.subjects.slice(5,16)
					this.arr2=response.data.data.subjects.slice(16,22)


		          
		        })
			},
			search1:function(){
				this.axios.get('/api/homeData').then((response) => {
					this.arr3=response.data.data.recommend_feeds.slice(3,6)
	

		          
		        })
			},
			fn4:function(i){
				this.arr4=this.arrp[i]

				this.$router.push({path:'/book-tiaozhuan',
					query:{
						suibian:this.arr4
					}
				})
			},
			fn5:function(i){
				this.arr5=this.arr0[i]

				this.$router.push({path:'/book-tiaozhuan',
					query:{
						suibian:this.arr5
					}
				})
			},
			fn6:function(i){
				this.arr6=this.arr1[i]

				this.$router.push({path:'/book-tiaozhuan',
					query:{
						suibian:this.arr6
					}
				})
			},
			fn7:function(i){
				this.arr7=this.arr2[i]

				this.$router.push({path:'/book-tiaozhuan',
					query:{
						suibian:this.arr7
					}
				})
			}

		},


	}
</script>