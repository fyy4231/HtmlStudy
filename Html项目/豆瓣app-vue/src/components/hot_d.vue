<template>
	<div class="maintwo">
		<div>
			<Hot msg='热点'></Hot>
			<div class="textWrap" v-for='(item,i) in arr' @click='fn(i)'>
				
				<div class="left_content" >
				<h4>{{ item.title }}</h4>
				<p class="smalltext">{{ item.target.desc }}</p>
				<p class="smalltext1">作者：{{ item.target.author.name }}</p>
				</div>
				<img :src="item.target.cover_url" class="rightpic">
				<div class="clearfloat"></div> 
			</div>
		</div>
	</div>
</template>
<style type="text/css">
	.clearfloat{clear:both} 
	.maintwo{width: 100%;margin-top: 10px;}
	.left_content{width:60%;padding: 10px 15px;float:left;}
	.smalltext{font-size: 12px;color:#999;margin-top: 10px;position: relative;}
	.smalltext::before{display: inline-block; content:'';width: 20px;height: 1px;border-bottom: 1px solid #E5E5E5;position: absolute;bottom: -12px;}
	.smalltext1{font-size: 12px;margin-top: 20px;color: #CCC}
	.rightpic{width: 25%;float:left;margin: 14px 0 0 8px;}
	.textWrap{width: 100%;height: 100%; border-bottom: 1px solid #e5e5e5;padding-bottom: 10px;padding-top:10px;background: #fff;}
</style>
<script type="text/javascript">
	import Hot from './hot-content'
	export default{
		components:{
			Hot
		},
		data:function(){
			return{
				arr:[],
				arr1:[]
			} 
		},
		mounted:function(){
			this.search()
		},
		methods:{
			search:function(){
				this.axios.get('/api/homeData').then((response) => {
					this.arr=response.data.data.recommend_feeds
		          
		        })
			},
			fn:function(i){
				this.arr1=this.arr[i],
				this.$router.push({path:'/content',
				query:{
					suibian:this.arr1
				}
			})
			}

		},
		
	}
</script>