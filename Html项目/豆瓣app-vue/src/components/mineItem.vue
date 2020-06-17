<template>
	<div class="mineItemWrap">
		<slot name='icon'></slot><br/>
		<span>{{ con }}</span>
	</div>
</template>
<script>
export default{
	props:['con']
}
</script>
<style>
.mineItemWrap{width: 25%;float: left;border-bottom: 1px solid #ccc;padding: 15px 0}
.mineItemWrap img{width: 40px}
.mineItemWrap span{font-size: 14px}
</style>