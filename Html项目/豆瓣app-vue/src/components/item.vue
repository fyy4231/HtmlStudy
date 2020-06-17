<template>
	<div class="item" @click='fn' :class='{ac:bol}'>
		<span v-show='bol'><slot name=nomalImg></slot><br></span>
		<span v-show='!bol'><slot name=activeImg></slot><br></span>
		<span v-text='txt' ></span>
	</div>
</template>
<script type="text/javascript">
	export default{
		props:['txt','url','id'],
		computed:{
			bol:function(){
				if(this.id == this.$parent.$parent.selected){
					return false
				}
				return true
			}		
		},
		methods:{
			fn:function(){
				// this.bol=!this.bol
				//this.$parent.$parent.selected = this.mark
				this.$router.push('/'+this.id)
				this.$emit('change',this.id)

			},
		}
	}
</script>
<style type="text/css">
	.item{width: 20%;float: left;font-size: 12px;color:green}
	.item img{width: 40px;}
	.ac{color:#999}
</style>