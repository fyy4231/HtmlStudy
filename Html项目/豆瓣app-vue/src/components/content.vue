<template>
<div>

	<div class="body-content">
		<div class="header-t" v-for='item in arr3'>
			<img src="../assets/images/ic_bar_back_green.png" @click='fnn()'>
			<span class="title"> {{ item.title }}</span>
			<div class="right-tu">
				<img src="../assets/images/ic_menu_like.png">
				<img src="../assets/images/ic_menu_reply.png">
				<img src="../assets/images/ic_action_share_green.png">
			</div>
			<div style="clear:both"></div>
			
			<div><img :src="item.target.cover_url" class="title-img"><br></div>
			<div style="clear:both"></div>
			<h3 class="h33">{{ item.title }}</h3>
			<p class="smalltext1 smalltext12">作者：{{ item.target.author.name }}</p>
			<p class="neirong12">{{ item.target.desc }}</p>
			<p class="neirong12">{{ item.target.desc }}</p>
			<p class="neirong12">{{ item.target.desc }}</p>
			<p class="neirong12">{{ item.target.desc }}</p>
			<p class="neirong12">{{ item.target.desc }}</p>
		</div>
	
	</div>


</div>
</template>
<style type="text/css">

	.neirong12{padding: 20px 20px 10px 20px;}
	.neirong12:nth-child(last){padding-bottom: 64px;}
	.smalltext12{margin-left: 20px;}
	.h33{padding:0 20px;}
	.header-t .title-img{width: 335px;text-align: center; margin-top: 30px;margin-bottom: 20px;}
	.body-content{width: 100%;height: 100;}
	.right-tu{float:left;}
	.right-tu img{padding: 0 10px;}
	.header-t{height: 40px;width: 100%;margin-top: -48px; background: white;float:left;border-bottom: 1px solid #ccc}
	.header-t img{width: 25px;float:left;margin-top: 8px;margin-left: 20px;}
	.title{display: inline-block;width: 100px;float:left;margin-left: 15px;margin-right: 10px;line-height: 40px;display: -webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow: hidden;text-overflow: ellipsis;font-size: 12px;}
	.neirong12:last-child{padding-bottom: 70px;}
</style>
<script type="text/javascript">
	import Hot from './hot-content'
	export default{
		components:{
			Hot
		},
		data:function(){
			return{
				arr3:[],
			}
		},
		created:function(){
			this.arr3=this.$route.query
		},
		methods:{
			fnn:function(){
				this.$router.push({path:'home'})
			}
		}
		
		
	}
</script>