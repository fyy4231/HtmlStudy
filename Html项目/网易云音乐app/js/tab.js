$(function(){
	router('home',$('#tabContainer'));

	$('nav li').eq(0).click(function(){
		$(this).addClass('ac').siblings().removeClass('ac');
		router('home',$('#tabContainer'));
	})

	$('nav li').eq(1).click(function(){
		$(this).addClass('ac').siblings().removeClass('ac');
		router('songList',$('#tabContainer'));
	})

	$('nav li').eq(2).click(function(){
		$(this).addClass('ac').siblings().removeClass('ac');
		router('musicChart',$('#tabContainer'));
	})

	$('nav li').eq(3).click(function(){
		$(this).addClass('ac').siblings().removeClass('ac');
		router('collection',$('#tabContainer'));
	})
})