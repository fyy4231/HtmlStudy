<template>
	<div class="mainb">
	<div class="bbb" v-for='(item,i) in arr'>
		<div class="fdd"></div>
		<div class="neirong">
			<div class="touxiang">
				<img :src="item.url" class="imgi">
			</div>
			<div class="ziliao">
				<h4 class="text07">{{ item.name }}</h4><br>
				<p class="text06">{{ item.guanzhu1 }}人关注</p><br>
				<p class="text05">{{ item.text }}</p><br>
				<span class="text04" @click='fn(i)' :class='{huise:item.bol}'>{{ item.guanzhu }}</span>
				<img :src="item.url1" style="width:90%;"><br>

				<span class="zuihou">
				<img :src="item.url3" style="width:15px;position:relative;top:1px;margin:0 2px;"><span style="font-size:10px;color:#999" @click='fn1(i)'> {{ item.zan }} </span>
				<img :src="item.url4" style="width:15px;position:relative;top:3px;margin:0 3px">
				<span style="font-size:10px;color:#999;"> 12 </span>
				</span>
				<span class="text03" @click='fn2(i)'>×</span>
			</div>
			<div class="fdd"></div> 
		</div>
	</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data:function(){
			return{
				
				arr:[
					{
						url:require('../assets/images/IMG_0387_10.jpg'),
						name:'陆大鹏Hans',
						text:'今天上午签的',
						url1:require('../assets/images/45254_03.jpg'),
						guanzhu1:'7656',
						url3:require('../assets/images/ic_like_full.png'),
						url4:require('../assets/images/ic_comment_full.png'),
						zan:65,
						guanzhu:'关注',
						bol:false,
					},
					{
						url:require('../assets/images/IMG_0386_03.jpg'),
						name:'格里高尔',
						text:'如果把美国置换成国内空气清新的六线城市，还会引发轩然大波吗？所以还是自卑感作祟。其实只有特别耿直或情商不高的中国人才会瞎说这种大实话，留学才几年你就忘了假话国的假话传统了？虽然美国空气ko中国空气，就像MMA ko太极拳一样没悬念，但传统不能丢啊。',
						guanzhu1:'6966',
						url3:require('../assets/images/ic_like_full.png'),
						url4:require('../assets/images/ic_comment_full.png'),
						zan:45,
						guanzhu:'关注',
						bol:false,
					},
					{
						url:require('../assets/images/IMG_0387_03.jpg'),
						name:'蒲扇',
						text:'突然发神经去做了理综题#有毒#',
						url1:require('../assets/images/IMG_0381_11.jpg'),
						guanzhu1:'109',
						url3:require('../assets/images/ic_like_full.png'),
						url4:require('../assets/images/ic_comment_full.png'),
						zan:89,
						guanzhu:'关注',
						bol:false,
					},
					{
						url:require('../assets/images/ic_user_info_gender.png'),
						name:'默',
						text:'2015年9月中旬之前， 我是一个胖子，胖了25年， 喊着减肥无数次，当然，也失败了无数次。',
						guanzhu1:'42542',
						url1:require('../assets/images/ic_rec_group_banner_4.png'),
						url3:require('../assets/images/ic_like_full.png'),
						url4:require('../assets/images/ic_comment_full.png'),
						zan:12,
						guanzhu:'关注',
						bol:false,
					},
					{
						url:require('../assets/images/ic_user_info_birthday.png'),
						name:'by 小叮当',
						text:'周末去哪儿·北京丨那最难忘的情色记忆，是你展现给我的无限遐想',
						url1:require('../assets/images/IMG_0381_12.jpg'),
						guanzhu1:'1472',
						url3:require('../assets/images/ic_like_full.png'),
						url4:require('../assets/images/ic_comment_full.png'),
						zan:656,
						guanzhu:'关注',
						bol:false,
					},
				]
			}
		},
		methods:{
			fn1:function(i){
				this.arr[i].zan++
			},
			fn:function(i){
				this.arr[i].bol=!this.arr[i].bol
			},
			fn2:function(i){
				this.arr.splice(this.arr[i],1)
			}
		}
	}
</script>
<style type="text/css">
	
	.text07{display:inline-block;font-size:14px;}
	.text06{display:inline-block;font-size:10px;color:#999}
	.text05{display:inline-block;font-size:12px;margin-bottom:5px;padding:5px 15px 0 0}
	.text04{width:60px;height:20px;background:green;display:inline-block;border-radius:3px;color:#fff;text-align:center;font-size:12px;line-height:20px;position:absolute;top:25px;right:25px;}
	.text03{color:#999;position:absolute;top:5px;right:5px;}
	.zuihou{padding: 10px 0;display: inline-block; height: 20px;line-height: 20px;}
	.imgi{width: 50px;}
	.touxiang{float: left;width: 15%;display: inline-block;padding:20px 0 0 15px;}
	.ziliao{float: left;display: inline-block;position: relative;width: 78%;padding-top:25px;margin-left: 5px;}
	.neirong{width: 95%;background:#fff;margin:0 auto;border-radius: 5px;margin-top: 10px;box-shadow: 0 0 3px #999;}
	.fdd{clear: both}
	.mainb:last-child{width:100%;float: left;padding-bottom: 64px;}
	.bbb:last-child{padding-bottom: 48px;}
	.huise{background: #ccc;color:green;}
</style>