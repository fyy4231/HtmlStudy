 <template>
	<div class="groupmain">
		<MyHeader txt='小组' style='background:fixed;top:0px;background:#fff;'>
			<img src="../../src/assets/images/ic_group_search.png" slot='leftImg' class="audio_pic1">
			<img src="../../src/assets/images/ic_create_group_chat_blue.png" slot='rightImg' class="audio_pic2">

		</MyHeader>
		<div class='banner'>
			<img src='../../src/assets/images/ic_group_banner.png'/>
			<span><em>418832</em>个小组等你来玩<a href="#"><br/>立即选择加入吧!</a></span>
			<i>根据你的兴趣推荐</i>
		</div>
		<img src='../../src/assets/images/ic_rec_group_banner_6.png' class='bot_img'/>
		<GroupItem txt='影视'></GroupItem>
		<Choose-item txt='选好了,去玩小组'></Choose-item>

	</div>
</template>
<script type="text/javascript">
	import MyHeader from '../../src/components/Header'
	import GroupItem from '../../src/components/groupItem'
	import ChooseItem from '../../src/components/chooseItem'

	export default{
		components:{
			MyHeader,GroupItem,ChooseItem
		}
	}
</script>
<style type="text/css">
	.audio_pic1{width: 20px; position: absolute;top:15px;right:15%;}
	.audio_pic2{width: 20px; position: absolute;top:15px;right:5%;}
	.groupmain .banner{position:relative;text-align:center}
	.groupmain .banner img{width:100%;}
	.groupmain .banner span{position:absolute;left:25%;top:40%;font-weight:bold;font-size:20px}
	.groupmain .banner a{font-size:14px;color:#999;font-weight:normal}
	.groupmain .banner i{position:absolute;left:5%;bottom:5%;font-size:12px;color:#999}
	.groupmain .bot_img{width:95%;margin-left:10px}
	.groupmain .choose{width:100%;height:50px;background:#fff;position:fixed;left:0;bottom:64px;opacity:.95;text-align:center}
	.groupmain .choose a{display:block;width:150px;height:30px;background:#E2E3E2;font-size:14px;color:#fff;line-height:30px;position:absolute;right:20px;bottom:10px;border-radius:5px}
	
</style>