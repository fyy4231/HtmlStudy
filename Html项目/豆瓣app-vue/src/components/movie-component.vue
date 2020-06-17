<template>
	<div>
		<div class="content_one">
			<slot></slot>
			
			<p class="wenzia" v-text='txt'></p>
			<p class="wenzih" v-text='tet'></p>
		</div>
	</div>
</template>
<style type="text/css">
	.content_one{width: 100%;margin-top: 8px;background: #fff;}
	.wenzia{padding:10px 0 0 15px;font-size:14px;}
	.wenzih{font-size:12px;padding:5px 0 20px 15px;}
</style>
<script type="text/javascript">


	export default{
		props:['txt','tet','img']
	}
		
	
</script>
