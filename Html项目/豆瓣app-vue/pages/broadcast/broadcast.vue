 <template>
	<div>
		<MyHeader txt='广播' style='background:fixed;top:0px;background:#fff;border-bottom:1px solid #eee'>
			<img src="../../src/assets/images/ic_create_group_chat_blue.png" slot='leftImg' class="audio_pic3">
			<img src="../../src/assets/images/ic_status_search_user.png" slot='leftImg' class="audio_pic4">
		</MyHeader>
		<Broadcastwrap></Broadcastwrap>
	</div>
</template>
<script type="text/javascript">
	import MyHeader from '../../src/components/Header'
	import Broadcastwrap from '../../src/components/broadcast-Wrap'
	export default{
		components:{
			MyHeader,
			Broadcastwrap
		}
	}
</script>
<style type="text/css">
	.audio_pic3{width: 20px; position: absolute;top:15px;right:5%;}
	.audio_pic4{width: 20px; position: absolute;top:15px;right:15%;}
	
</style> 