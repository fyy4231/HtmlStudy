 <template>
	<div>
		<MyHeader txt='我的' style='position:fixed;top:0px;'>
			<img src="../../src/assets/images/ic_settings.png" slot='leftImg' class="audio_pic5">
		</MyHeader>
		<My-title name='张媛' me='个人主页>' id='123456789' num1='10' num2='10'>
			<img src="../../src/assets/images/ic_user_info_gender.png" slot='user'>
		</My-title>
		<Remind></Remind>
		<Place></Place>
	</div>
</template>
<script type="text/javascript">
	import MyHeader from '../../src/components/Header'
	import MyTitle from '../../src/components/myTitle'
	import Remind from '../../src/components/remind'
	import Place from '../../src/components/minePlace'
	export default{
		components:{
			MyHeader,MyTitle,Remind,Place
		}
	}
</script>
<style type="text/css">
	.audio_pic5{width: 20px; position: absolute;top:15px;right:5%;}
</style>