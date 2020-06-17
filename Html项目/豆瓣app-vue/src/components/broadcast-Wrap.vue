<template>
	<div>
			<img src="../assets/images/ic_status_anonymous_header.png" class="mpimg">
			<div class="hezi">
			<h4 class="faxian">发现有趣的人</h4><br>
			<p class="shijie">关注他们，发现更大的世界</p>
			</div>
		<Broadcastcontent></Broadcastcontent>
		<div class="huan1">
		<img src="../assets/images/ic_reshare_flag.png" class="huanyipi1">
		<p class="text02">换一批</p>
		<p class="text01">选好了，去玩广播</p>
		<p class="tiao">跳过</p>
		</div>

	</div>
</template>
<script type="text/javascript">
import Broadcastcontent from './broadcast-Wrap-content'
	export default{
		components:{
			Broadcastcontent
		}
	}
</script>
<style type="text/css">
	.mpimg{width: 80px;margin-top: 10px;margin-left: 70px;}
	.faxian{display: inline-block;font-size: 14px;}
	.shijie{display: inline-block;font-size: 12px;color:#999;}
	.hezi{float: right;margin-top: 20px;margin-right: 60px;}
	.text02{display:inline-block;font-size:12px;padding-left:40px;padding-right:120px;}
	.text01{display:inline-block;width:120px;height:20px;background:#ccc;text-align:center;line-height:20px;color:#fff;font-size:12px;}
	.tiao{display: inline-block;font-size: 12px;color:#999;margin-left: 5px;}
	.huanyipi1{width: 20px;line-height: 50px;position: absolute;top:12px;left:10px;}
	.huan1{width: 100%;height: 40px;background:#fff;border-top: 1px solid #ccc;line-height: 40px;margin-top: 8px;position: fixed;bottom:64px;}

</style>
