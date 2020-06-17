<template>
	<div class='chooseWrap'>
		<span><slot name='change'></slot></span>
		<a href='#' class="txt">{{ txt }}</a>
	</div>

</template>
<script>
export default{
	props:['txt']
}

</script>

<style>
.chooseWrap{width:100%;height:50px;background:#fff;position:fixed;left:0;bottom:64px;opacity:.95;text-align:center}
.chooseWrap .txt{display:block;width:150px;height:30px;background:#E2E3E2;font-size:14px;color:#fff;line-height:30px;position:absolute;right:20px;bottom:10px;border-radius:5px}
.chooseWrap .round{width:30px;position:absolute;top:10px;left:20px}
.chooseWrap span a{position: absolute;top: 25%;left: 15%;color: #999}
</style>