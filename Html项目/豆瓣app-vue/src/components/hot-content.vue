<template>
	<div class="mainone">
		<p v-text='msg' class="pp"></p>
		<slot></slot>
	</div>
</template>
<style type="text/css">
	.pp{border-left: 6px solid orange;padding-left:15px;font-size: 14px;}
</style>
<script type="text/javascript">
	export default{
		props:['msg']
	}
</script>