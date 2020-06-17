<template>
	<div>
		<div class="head_one">
			<h5 class="h4">今日更新</h5>
			<p class="ppp">更多 ></p>
			<div class="fudong"></div>
		<CCtvc></CCtvc>

		</div>
	</div>
</template>
<script type="text/javascript">
import CCtvc from './cctv-component'
	export default{
		components:{
			CCtvc
		},
	}
</script>
<style type="text/css">
	.head_one:first-child{margin-top: 46px;}
	.head_one{padding:15px;background: #fff;margin-bottom: 8px;}
	.tuwen_one{width: 90px;float:left;margin-right: 8px;margin-top: 20px;}
	.fudong{clear:both;}
</style>