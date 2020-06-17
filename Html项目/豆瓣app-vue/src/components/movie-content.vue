<template>
	<div class="movie_movie">
		<div class="head_one">
			<h4 class="h4">影院热映</h4>
			<p class="ppp">更多 ></p>
			<div class="fudong"></div>
			<div class="movie_one">
			<Bannermovie swipeid='aaaa' :slidesPerView='3.5' :loop='false' :pagination='false' >
			<div class="swiper-slide"  slot='swiper-content'v-for='(item,i) in arr0' @click='fn(i)'>
					<img :src="item.cover" class="movie_pic">
					<p class="nvxia">{{ item.title }}</p>
						<img src="../assets/images/IMG_0380_18.png" class="star">
						<img src="../assets/images/IMG_0380_18.png" class="star">
						<img src="../assets/images/IMG_0380_18.png" class="star">
						<img src="../assets/images/IMG_0380_18.png" class="star">
						<img src="../assets/images/IMG_0380sd_18.png" class="star">
<!-- 					<div class="starshow" v-show='item.rate>8.5 && item.rate<9.5 ? true:false'>
						<img src="../assets/images/IMG_0380_18.png" class="star">
						<img src="../assets/images/IMG_0380_18.png" class="star">
						<img src="../assets/images/IMG_0380_18.png" class="star">
						<img src="../assets/images/IMG_0380_18.png" class="star">
						<img src="../assets/images/IMG_0380sd_18.png" class="star">
					</div>
					<div class="starshow" v-show='item.rate>=9.5 ? true:false'>
						<img src="../assets/images/IMG_0380_18.png" class="star">
						<img src="../assets/images/IMG_0380_18.png" class="star">
						<img src="../assets/images/IMG_0380_18.png" class="star">
						<img src="../assets/images/IMG_0380_18.png" class="star">
						<img src="../assets/images/IMG_0380_18.png" class="star">
					</div>
					<div class="starshow" v-show='item.rate>=7.5 && item.rate<=8.5 ? true:false'>
						<img src="../assets/images/IMG_0380_18.png" class="star">
						<img src="../assets/images/IMG_0380_18.png" class="star">
						<img src="../assets/images/IMG_0380_18.png" class="star">
						<img src="../assets/images/IMG_0380_18.png" class="star">
						<img src="../assets/images/IMG_0380_20.png" class="star">
					</div>
					<div class="starshow" v-show='item.rate<7.5 && item.rate>=6.5 ? true:false'>
						<img src="../assets/images/IMG_0380_18.png" class="star">
						<img src="../assets/images/IMG_0380_18.png" class="star">
						<img src="../assets/images/IMG_0380_18.png" class="star">
						<img src="../assets/images/IMG_0380sd_18.png" class="star">
						<img src="../assets/images/IMG_0380_20.png" class="star">
					</div>
					<div class="starshow" v-show='item.rate<6.5 && item.rate>5.5 ? true:false'>
						<img src="../assets/images/IMG_0380_18.png" class="star">
						<img src="../assets/images/IMG_0380_18.png" class="star">
						<img src="../assets/images/IMG_0380_18.png" class="star">
						<img src="../assets/images/IMG_0380_20.png" class="star">
						<img src="../assets/images/IMG_0380_20.png" class="star">
					</div>
					<div class="starshow" v-show='item.rate<=5.5? true:false'>
						<img src="../assets/images/IMG_0380_18.png" class="star">
						<img src="../assets/images/IMG_0380_18.png" class="star">
						<img src="../assets/images/IMG_0380sd_18.png" class="star">
						<img src="../assets/images/IMG_0380_20.png" class="star">
						<img src="../assets/images/IMG_0380_20.png" class="star">
					</div> -->
					
					<p style="display:inline-block;font-size:12px;color:#666">{{ item.rate }}</p>
			</div>
			</Bannermovie>
			<div class="fudong"></div>
			
			</div>
			
		</div>
		<div class="head_on">
			<Com txt='神奇女侠竟然是逗比？和她恋爱注定要悲剧？' tet='《神奇女侠》圆桌访谈'> 
				<img src="../assets/images/img12.jpg" style="width:100%;">
			</Com>
			<div class="head_o">
				<h4 class="h4">院线即将上映</h4>
				<p class="ppp">更多 ></p>
				<div class="fudong"></div>

				<Bannermovie swipeid='aaaa' :slidesPerView='3.5' :loop='false' :pagination='false' >
				<div class="swiper-slide"  slot='swiper-content' v-for='(item,i) in arr1' @click='fn1(i)'>
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


				
			<div class="bangdan">
				<h4 class="bd">精选榜单</h4>
				<Bannermovie swipeid='bbbb' :slidesPerView='2.8' :loop='false' :pagination='false' :spaceBetween='15'>
				<div class="banner-img swiper-slide"  slot='swiper-content' v-for='item in arr'>
				<img :src="item.bannerimg" class="zouban">
				</div>
				</Bannermovie>
			</div>
			<Com txt='我可能就是个人工智能--《异形》导演专访' tet='每个人都有袭击的幸福所在'>
				<img src="../assets/images/IMG_0377_03.jpg" style="width:100%;">
			</Com>
	</div>
</template>
<style type="text/css">
	.movie_pic{width:100px;height: 125px;}
	.swiper-slide .star{width: 8px;}
	.fudong{clear:both;}
	.movie_movie{margin-top: 46px;}
	.head_one{padding:15px;background: #fff;}
	.head_o{padding:15px;background: #fff;margin-top: 8px;}
	.h4{float:left;font-size: 14px;}
	.ppp{float:right;font-size: 12px;color:green;}
	.swiper-slide .movie_pic{width: 88px;}
	.tuwen_one{width: 90px;float:left;margin-right: 8px;margin-top: 20px;}
	.nvxia{font-size: 12px;width: 88px;overflow: hidden;text-overflow: ellipsis;height: 16px;display: -webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;}
	.bangdan{width: 100%;background: #fff;margin-top: 8px;padding-bottom: 20px;}
	.bangdan .bd{padding: 15px}
	.zouban{width:130px;margin-left:15px;float: left;}
	.wrap{z-index: 99}
</style>
<script type="text/javascript">
	import Com from './movie-component'
	import Bannermovie from './banner-new'
	import Booktz from './book-turn'

	export default{
		data:function(){
			return{
				arr0:[],
				arr1:[],
				arr:[
				{bannerimg:require('../assets/images/IMG_0382_03.jpg')},
				{bannerimg:require('../assets/images/IMG_0382_05.jpg')},
				{bannerimg:require('../assets/images/IMG_0382_03.jpg')},
				{bannerimg:require('../assets/images/IMG_0382_05.jpg')},
				{bannerimg:require('../assets/images/IMG_0382_03.jpg')},
				{bannerimg:require('../assets/images/IMG_0382_05.jpg')},
				{bannerimg:require('../assets/images/IMG_0382_03.jpg')},
				{bannerimg:require('../assets/images/IMG_0382_05.jpg')},
				],
				arr6:[],
				arr7:[]
			}
		},
		components:{
			Booktz,
			Com,
			Bannermovie
		},
		mounted:function(){
			this.search()
		},
		methods:{
			search:function(){
				this.axios.get('/api/audioData').then((response) => {
					this.arr0=response.data.data.subjects.slice(25,35)
					this.arr1=response.data.data.subjects.slice(6,15)


		          
		        })
			},

			fn:function(i){
				this.arr6=this.arr0[i]
				this.$router.push({path:'/book-tiaozhuan',
					query:{
						suibian:this.arr6,

					}
				})
			},
			fn1:function(i){
				this.arr7=this.arr1[i],
				this.$router.push({path:'/book-tiaozhuan',
					query:{

						suibian:this.arr7
					}
				})
			}
		}
		
	}
</script>