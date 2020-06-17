<template>
	<div>
		<Banner swipeid='swiper01' :autoplay='1000' :freeMode='false'>
			<div class="swiper-slide" slot='swiper-content'>
				<img src="../assets/images/banner/01.jpg">
			</div>
			<div class="swiper-slide" slot='swiper-content'>
				<img src="../assets/images/banner/02.jpg">
			</div>
			<div class="swiper-slide" slot='swiper-content'>
				<img src="../assets/images/banner/03.jpg">
			</div>

		</Banner>
		
		<Mainone></Mainone>
	
		
	</div>
</template>
<script type="text/javascript">
	import Banner from './banner-new'
	import Mainone from './hot_d'
	export default{
		components:{Banner,Mainone},
		mounted:function(){
			this.search()
		},
		methods:{
			search:function(){
				this.axios.get('/api/homeData').then((response) => {
		         // console.log(response.data);
		          
		        })
			}
		},
		data:function(){
			return{
				arr:[]
			}
		}
	}
</script>
