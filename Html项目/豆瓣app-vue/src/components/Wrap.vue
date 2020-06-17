<template>
	<div class="wrap">
		<slot></slot>
	</div>
</template>
<style type="text/css">
	.wrap{width: 100%;height: 64px;background: #F9F9F9;position: fixed;bottom:0;border-top: 1px solid #DCDCDC;text-align: center;}
</style>
<script type="text/javascript">
	export default{
		props:['sel']
	}
</script>