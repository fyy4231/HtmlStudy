<template>
	<div class="tabber">
		<Wrap :sel='selected'>
			
			<Item txt='首页' id='home'  @change='getval'>
				<img src="../assets/images/ic_tab_home_normal.png" slot='nomalImg'>
				<img src="../assets/images/ic_tab_home_active.png" slot='activeImg'>
			</Item>
			
			
			<Item txt='书影音' id='audio' @change='getval'>
				<img src="../assets/images/ic_tab_subject_normal.png" slot='nomalImg'>
				<img src="../assets/images/ic_tab_subject_active.png" slot='activeImg'>
			</Item>
			
			
			<Item txt='广播' id='broadcast' @change='getval'>
				<img src="../assets/images/ic_tab_status_normal.png" slot='nomalImg'>
				<img src="../assets/images/ic_tab_status_active.png" slot='activeImg'>
			</Item>
		
			<Item txt='小组' id='group' @change='getval'>
				<img src="../assets/images/ic_tab_group_normal.png" slot='nomalImg'>
				<img src="../assets/images/ic_tab_group_active.png" slot='activeImg'>
			</Item>
			
			<Item txt='我的' id='mine' @change='getval'>
				<img src="../assets/images/ic_tab_profile_normal.png" slot='nomalImg'>
				<img src="../assets/images/ic_tab_profile_active.png" slot='activeImg'>
			</Item>
		
		</Wrap>
	</div>
</template>
<script type="text/javascript">
	import Wrap from './Wrap'
	import Item from './Item'
	export default{
		components:{
			Wrap,
			Item
		},
		data:function(){
			return{
				selected:'home'
			}
		},
		methods:{
			getval:function(val){
				this.selected=val
			}
		}
	}
</script>
