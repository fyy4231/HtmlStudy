<template>
	<div class='groupItemWrap'>
		<h3>{{ txt }}</h3>
		<SmallItem title='佳片推荐(只迷电影......' intro='加入豆瓣人数最多的影视组织，互相推荐和交流自认为好的电影、剧集...' num='6128'>
			<img src='../../src/assets/images/media.jpg' class='media' slot='user'/>
		</SmallItem>
		<SmallItem title='The Criterion Collection....' intro='Criterion Collection的出品是最传统亦是最具没敢的DVD产品。如果你..' num='6060'>
			<img src='../../src/assets/images/ic_award_tag.png' class='media' slot='user'/>
			<img src='../../src/assets/images/ic_group_check_anonymous.png' class='check' slot='check'/>
		</SmallItem>
		<SmallItem title='老友记' intro='喜欢FRIENDS申请进组时请引用一句老话....' num='65145'>
			<img src='../../src/assets/images/ic_my_likes.png' class='media' slot='user'/>
			<img src='../../src/assets/images/ic_group_check_anonymous.png' class='check' slot='check'/>
		</SmallItem>
		<SmallItem title='The Criterion Collection....' intro='Criterion Collection的出品是最传统亦是最具没敢的DVD产品。如果你酷爱..' num='612808'>
			<img src='../../src/assets/images/ic_award_tag.png' class='media' slot='user'/>
			<img src='../../src/assets/images/ic_group_check_anonymous.png' class='check' slot='check'/>
		</SmallItem>
	</div>
</template>

<script>
import SmallItem from './smallItem'
export default{
	components:{
		SmallItem
	},
	props:['txt']
}

</script>

<style>
.groupItemWrap {margin-top:20px;border-top:1px solid #ccc;width:100%;position:absolute;text-align:center}
.groupItemWrap h3{width:100px;position:relative;top:-15px;left:35%;background-color: #EEEEEE;}
</style>