<template>
	<div class='smallItem'>
		
		<span><slot name='user'></slot></span>
		<div class='txt'>
			<h4>{{ title }}</h4><br/>
			<p>{{ intro }}</p>
		</div>
		<span>{{ num }}人</span>
		<div @click='fn'>
			<img src='../../src/assets/images/ic_group_check_anonymous.png' class='check' v-show='bol'/>
			<img src='../../src/assets/images/ic_group_checked_anonymous.png' class='check' v-show='!bol'/>
		</div>	
		
	</div>
</template>
<script>
export default{
	props:['title','intro','num'],
	data:function(){
		return{
			bol:true
		}
	},
	methods:{
		fn:function(){
			this.bol=!this.bol;
		}
	}
}
</script>
<style>
.smallItem{padding:15px 10px;text-align:left;height:40%;position: relative;}
.smallItem .media{width:60px;float:left;border-radius:5px;}
.smallItem .txt {padding:0 10px;float:left;overflow:hidden;width:55%;}
.smallItem .txt h4{display:inline-block}
.smallItem .txt p{font-size:12px;line-height:20px;color:#999}
.smallItem span{font-size:12px;color:#ccc;line-height:60px}
.smallItem .check{width:25px;position: absolute;top: 35%;right: 10px;}
</style>