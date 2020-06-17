<template>
	<div class="homemain">
		<div>
			<MyHeader col='#42c055' style='position:fixed;top:0px;'>
			<input slot='centerImg' placeholder="影视 图书 唱片 小组等">
			<img src="../../src/assets/images/ic_search.png" slot='leftImg' class="search_one">
			<img src="../../src/assets/images/ic_scan_gray.png" slot='rightImg' class="search_two">
			<img src="../../src/assets/images/ic_chat_white.png" slot='rightImg_one' class="search_three">
			</MyHeader>
		</div>
			<Maincon></Maincon>
	</div>
</template>
<script type="text/javascript">
	import MyHeader from '../../src/components/Header'
	
	import Maincon from '../../src/components/main'

	export default{
		components:{
			MyHeader,
			Maincon
		}
	}
</script>
<style type="text/css">
	input{height:25px;width: 80%;position:absolute;left:8px;top:15px;border-radius: 5px;border:none;padding-left: 30px;}
	.search_one{width: 15px; position: absolute;top:20px;left:14px;z-index: 1;}
	.search_two{width: 15px; position: absolute;top:20px;left:82%;z-index: 1;}
	.search_three{width: 20px;position: absolute;top:18px;right:2%;z-index: 1;}
	.maintwo{background: #fff}
	.homemain{background: #fff}
</style>