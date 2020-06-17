<template>
	<div class="titleWrap clearfix">
		<slot name='user'></slot>
		<div class="info">
			<h6>{{ name }}</h6>
			<span class="me">{{ me }}</span>
			<span class="id">ID:<i>{{ id }}</i></span>
		</div><br/>
		<span class="like">关注<em>{{ num1 }}</em></span>
		<span>被关注<em>{{ num2 }}</em></span>
	</div>
</template>
<script>
export default{
	props:['name','me','id','num1','num2']
}
</script>
<style>
.titleWrap {background: #4DBA4F;padding: 20px 0 20px 20px;color: #fff;font-size: 14px;}
.titleWrap img{width:70px;float: left;margin:10px 20px 0 0}
.titleWrap .info{border-bottom: 1px solid #fff;float: left;width: 70%;padding:10px 5px;margin-bottom: 10px}
.titleWrap .info h6{font-size: 20px;line-height: 30px}
.titleWrap .info .me{float: right;}
.titleWrap .like{padding:0 20px 0 90px;}
.titleWrap em{padding: 0 5px}
</style>