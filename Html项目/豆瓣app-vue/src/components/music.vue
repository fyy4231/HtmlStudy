<template>
	<div>

			<div class="head_o1">
				<h4 class="h4">华语新碟榜</h4>
				<p class="ppp">更多 ></p>
				<div class="fudong"></div>

				<Bannermovie swipeid='aasfaaa' :slidesPerView='3.5' :loop='false' :pagination='false' >
				<div class="swiper-slide"  slot='swiper-content' v-for='(item,i) in arr1' @click='fn5(i)'>
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


			<div class="head_o1">
				<h4 class="h4">欧美新碟榜</h4>
				<p class="ppp">更多 ></p>
				<div class="fudong"></div>

				<Bannermovie swipeid='aaasdfaa' :slidesPerView='3.5' :loop='false' :pagination='false' >
				<div class="swiper-slide"  slot='swiper-content' v-for='(item,i) in arr2' @click='fn6(i)'>
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


			<div class="head_o1">
				<h4 class="h4">日韩新碟榜</h4>
				<p class="ppp">更多 ></p>
				<div class="fudong"></div>

				<Bannermovie swipeid='aaasdfaa' :slidesPerView='3.5' :loop='false' :pagination='false' >
				<div class="swiper-slide"  slot='swiper-content' v-for='(item,i) in arr3' @click='fn7(i)'>
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
		<div class="textWrap" v-for='item in arr5'>
		<div class="tushu">
			<h4 class="h4">音乐资讯</h4>
			<p class="ppp">更多 ></p>
			<div class="fudong"></div>
		</div>
			<div class="left_content" >
			<h4>{{ item.title }}</h4>
			<p class="smalltext">{{ item.target.desc }}</p>
			<p class="smalltext1">作者：{{ item.target.author.name }}</p>
			</div>
			<img :src="item.target.cover_url" class="rightpic">
			<div class="clearfloat"></div> 
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
			<div class="textWrap" v-for='item in arr7'>
		<div class="tushu">
			<div class="fudong"></div>
		</div>
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
	.head_o1{padding:15px;background: #fff;margin-top: 8px;}
	.head_o1:first-child{margin-top: 46px;}
	.yyWrap{background: #fff;padding:10px 15px 30px 15px;border-bottom: 1px solid #eee;}
	.yy-yy{margin-top: 25px;}
	.yinyue{border: 1px solid green;border-radius: 25px;padding: 3px 15px;color: green;font-size: 12px;margin-left: 10px;margin-top: 20px;}
	.tushu{padding: 5px 15px;}

</style>
<script type="text/javascript">
	import Bannermovie from './banner-new'
	import booksd from './book-turn'


	export default{
		data:function(){
			return{
				arr1:[],
				arr2:[],
				arr3:[],
				arr5:[],
				arr7:[],
				arr4:[],
				arr8:[],
				arr9:[],
			}
		},
		components:{
			booksd,
			Bannermovie
		},
		mounted:function(){
			this.search(),
			this.search1()
		},
		methods:{
			search:function(){
				this.axios.get('/api/audioData').then((response) => {
					this.arr1=response.data.data.subjects.slice(25,35)
					this.arr2=response.data.data.subjects.slice(6,15)
					this.arr3=response.data.data.subjects.slice(3,13)
		          
		        })
			},
			search1:function(){
				this.axios.get('/api/homeData').then((response) => {
					this.arr5=response.data.data.recommend_feeds.slice(18,19) 
					this.arr7=response.data.data.recommend_feeds.slice(23,24) 
		        })
			},
			fn5:function(i){
				this.arr4=this.arr1[i]

				this.$router.push({path:'/book-tiaozhuan',
					query:{
						suibian:this.arr4
					}
				})
			},
			fn6:function(i){
				this.arr8=this.arr2[i]

				this.$router.push({path:'/book-tiaozhuan',
					query:{
						suibian:this.arr8
					}
				})
			},
			fn7:function(i){
				this.arr9=this.arr3[i]

				this.$router.push({path:'/book-tiaozhuan',
					query:{
						suibian:this.arr9
					}
				})
			}

		},
		
	}
</script>