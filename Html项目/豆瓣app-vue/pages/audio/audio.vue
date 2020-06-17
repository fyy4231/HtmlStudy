 <template>
	<div>
		<MyHeader txt='书影音' style='position:fixed;top:0px;'>
			<img src="../../src/assets/images/ic_group_search.png" slot='leftImg' class="audio_pic1">
			<img src="../../src/assets/images/ic_create_group_chat_blue.png" slot='rightImg' class="audio_pic2">
		</MyHeader>
		<div id="navv">
		<span @click='choose(0)'><router-link to='/audio/movie' :class='{aiya:selecte==0}'>电影</router-link></span>
		<span @click='choose(1)'><router-link to='/audio/book' :class='{aiya:selecte==1}'>读书</router-link></span>
		<span @click='choose(2)'><router-link to='/audio/cctv' :class='{aiya:selecte==2}'>电视</router-link></span>
		<span @click='choose(3)'><router-link to='/audio/city' :class='{aiya:selecte==3}'>同城</router-link></span>
		<span @click='choose(4)'><router-link to='/audio/music' :class='{aiya:selecte==4}'>音乐</router-link></span>
		</div>
		<router-view></router-view>

		
	</div>
</template>
<script type="text/javascript">

	import MyHeader from '../../src/components/Header'
	export default{
		components:{
			MyHeader
			
		},
		data:function(){
			return{
				selecte:0
			}
		},
		methods:{
			choose:function(i){
				this.selecte=i
			}
		}
	}
</script>
<style type="text/css">
	 #navv .aiya{border-bottom: 2px solid green;color:green;}
	.audio_pic1{width: 20px; position: absolute;top:15px;right:15%;}
	.audio_pic2{width: 20px; position: absolute;top:15px;right:5%;}
	#navv{width: 100%;height: 40px;text-align: center;line-height: 40px;font-size: 14px;border-bottom: 1px solid #EDEDED;position:fixed;top:48px; background: #fff;z-index: 99}
	#navv a{display:block;width:20%;float:left;text-decoration: none;color: #666}
</style>