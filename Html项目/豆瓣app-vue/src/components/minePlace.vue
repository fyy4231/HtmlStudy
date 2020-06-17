<template>
	<div class="placeWrap clearfix">
		<MineItem con='喜欢'>
			<img src="../assets/images/ic_my_likes.png" slot='icon'>
		</MineItem>
		<MineItem con='日记'>
			<img src="../assets/images/ic_my_note.png" slot='icon'>
		</MineItem>
		<MineItem con='相册'>
			<img src="../assets/images/ic_my_album.png" slot='icon'>
		</MineItem>
		<MineItem con='我的广播'>
			<img src="../assets/images/ic_my_status.png" slot='icon'>
		</MineItem>
		<MineItem con='电影▪电视'>
			<img src="../assets/images/ic_my_movies_tvs.png" slot='icon'>
		</MineItem>
		<MineItem con='读书'>
			<img src="../assets/images/ic_my_books.png" slot='icon'>
		</MineItem>
		<MineItem con='音乐'>
			<img src="../assets/images/ic_my_music.png" slot='icon'>
		</MineItem>
		<MineItem con='同城活动'>
			<img src="../assets/images/ic_my_events.png" slot='icon'>
		</MineItem>
		<MineItem con='豆瓣时间'>
			<img src="../assets/images/ic_mine_notification.png" slot='icon'>
		</MineItem>
		<MineItem con='豆列'>
			<img src="../assets/images/ic_my_doulist.png" slot='icon'>
		</MineItem>
		<MineItem con='订单'>
			<img src="../assets/images/ic_my_orders.png" slot='icon'>
		</MineItem>
		<MineItem con='钱包'>
			<img src="../assets/images/ic_my_wallet.png" slot='icon'>
		</MineItem>
	</div>
</template>
<script>
import MineItem from './mineItem'
export default{
	components:{
		MineItem
	}
}
</script>
<style>
.placeWrap{width: 100%;background: #fff;text-align: center;}
</style>