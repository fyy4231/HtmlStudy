<template>
	<div class="bookm">
		<Book></Book>
	</div>
</template>
<script type="text/javascript">
	import Book from './book-content'
	export default{
		components:{
			Book
		},
		data:function(){
			return{
				textone:'《神奇女侠》官方指定辅导手册',
				texttwo:'为你带来DC目前口碑最好一部的无剧透前瞻，只为观影更有趣',
				textthree:'作者：女神的秋裤',
				textfour:'一周豆瓣热门影视 |《超感猎杀》不在续订，你还舍得看完第二季？',
				textfive:'《加勒比海盗5》夺得本周电影榜冠军。',
				textsix:'作者：豆瓣'
			}
		}
	}
</script>
<style type="text/css">
	.navv{z-index: 99;}
</style>