$(function(){
	pages('recommend',$('#main'));
	$('ul li:eq(0)').click(function(){
		pages('recommend',$('#main'));
		$(this).addClass('color').siblings().removeClass('color');
	})
	$('ul li:eq(1)').click(function(){
		pages('update',$('#main'));
		$(this).addClass('color').siblings().removeClass('color');
	})
	$('ul li:eq(2)').click(function(){
		pages('classify',$('#main'));
		$(this).addClass('color').siblings().removeClass('color');
	})
	$('ul li:eq(3)').click(function(){
		pages('ranking',$('#main'));
		$(this).addClass('color').siblings().removeClass('color');
	})
	$('ul li:eq(4)').click(function(){
		pages('special',$('#main'));
		$(this).addClass('color').siblings().removeClass('color');
	})
})