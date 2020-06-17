<template>
	<div class="swiper-container" :class='swipeid'>
		<div class="swiper-wrapper">
			<slot name='swiper-content'></slot>
		</div>
		<div :class="{'swiper-pagination':pagination}" :style='{"text-align":paginationDirection}'></div>
	</div>

</template>
<script type="text/javascript">
import  '../assets/libs/swiper/js/swiper.js'
	export default {
		props:{
			swipeid:{
				type:String,
				default:''
			},
			pagination:{
				type:Boolean,
				default:true
			},
			paginationDirection:{
				type:String,
				default:'center'
			},
			effect:{
				type:String,
				default:'slide'
			},
			loop:{
				type:Boolean,
				default:true
			},
		 	direction:{
				type:String,
				default:'horizontal'
			},
			autoplay:{
				type:Number,
				default:0
			},
			paginationType:{
				type:String,
				default:"bullets"
			},
			slidesPerView:{
				type:Number,
				default:1
			},
			freeModeMomentum:{
				type:Boolean,
				default:false
			},
			freeMode:{
				type:Boolean,
				default:true
			},
			// slidesPerGroup:{
			// 	type:Number,
			// 	default:3.5
			// },
			observer:{
				type:Boolean,
				default:true
			},
			observeParents:{
				type:Boolean,
				default:true
			},
			spaceBetween:{
				type:Number,
				default:0
			}


		},
		mounted:function(){
			var That = this;
			new Swiper('.'+That.swipeid,{
				pagination:'.swiper-pagination',
				loop:That.loop,
				direction:That.direction,
				autoplay:That.autoplay,
				effect:That.effect,
				paginationType:That.paginationType,
				paginationDirection:That.paginationDirection,
				slidesPerView:That.slidesPerView,
				slidesPerGroup:That.slidesPerGroup,
				freeModeMomentum:That.freeModeMomentum,
				freeMode:That.freeMode,
				// observeParents:That.observeParents,
				observer:That.observer,
				spaceBetween:That.spaceBetween

			});
		}
	}
</script>
<style type="text/css">
	@import '../assets/libs/swiper/css/swiper.css';
	.swiper-pagination-bullet-active{background: white}
	.swiper-container img{width: 100%}
</style>