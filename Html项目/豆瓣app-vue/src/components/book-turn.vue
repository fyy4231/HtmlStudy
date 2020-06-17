<template>
	<div>
	<div class="header-t" v-for='item in arr3'>
		<img src="../assets/images/ic_bar_back_green.png" @click='fnn()'>
		<span class="title1"> {{ item.title }}</span>
		<div class="right-tu">
			<img src="../assets/images/ic_menu_like.png">
			<img src="../assets/images/ic_menu_reply.png">
			<img src="../assets/images/ic_action_share_green.png">
		</div>
		<div style="clear:both"></div>
		<img :src="item.cover" class="datuimg">

		<h3>{{ item.title }}</h3>
		<span class="xiangqing">{{ item.text }}</span>
		<p style="color:#999;margin-top:20px;">{{ item.url }}</p>
	</div>
	</div>
</template>
<style type="text/css">
	.xiangqing{padding: 10px  20px;text-indent: 2em}
	.header-t .title-img{width: 335px;text-align: center; margin-top: 30px;margin-bottom: 20px;float:left;}
	.body-content{width: 100%;height: 100;}
	.right-tu{float:left;}
	.right-tu img{padding: 0 10px;}
	.header-t{height: 40px;width: 100%;margin-top: -48px; background: white;float:left;border-bottom: 1px solid #ccc}
	.header-t img{width: 25px;float:left;margin-top: 8px;margin-left: 20px;}
	.title1{display: inline-block;width: 100px;float:left;margin-left: 15px;margin-right: 10px;line-height: 40px;display: -webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow: hidden;text-overflow: ellipsis;font-size: 12px;}
	.header-t .datuimg{width: 150px;padding: 10px 20px 20px 0;}
	h3{padding: 10px ;}

</style>
<script type="text/javascript">
	export default{
		props:['txt'],
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
				this.$router.push({path:'/audio'})
			}
		}
		
		
		
	}
</script>