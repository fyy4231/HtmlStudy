<template>
	<div class="headerWrap" :style='{background:col}'>
		<span v-text='txt'></span>
		<slot name='leftImg'></slot>
		<slot name='centerImg'></slot>
		<slot name='rightImg'></slot>
		<slot name='rightImg_one'></slot>
	</div>
</template>
<style type="text/css">
	.headerWrap{width: 100%;height: 48px;line-height: 48px;font-size: 14px;font-weight: bold; border-bottom: 1px solid #ECECEC;text-align: center;position: fixed;z-index: 99}
</style>
<script type="text/javascript">
	export default{
		props:{
			col:{
				default:'#f7f7f7'
			},
			txt:{}
		}	
	}
</script>