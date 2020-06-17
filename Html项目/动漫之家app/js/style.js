function fontsize(){
	var w=document.documentElement.clientWidth;
	_html=document.getElementsByTagName('html')[0];
	_html.style.fontSize=w/7.5+'px';
}
fontsize();
window.onresize=fontsize;

function pages(ev,$contianer){
	$contianer=$contianer || $('#share');
	$.ajax({
		url:'pages/'+ev+'.html',
		success:function(data){
			$contianer.html(data);
			getjs(ev);
		}
	})
}
function getjs(ev){
	$.ajax({
		url:'js/'+ev+'.js'
	})
}
$(function(){
	pages('cartoon',$('#share'));
	$('.item:eq(0)').click(function(){
		pages('cartoon',$('#share'));
		$(this).addClass('active').siblings().removeClass('active');
	})
	$('.item:eq(1)').click(function(){
		pages('news',$('#share'));
		$(this).addClass('active').siblings().removeClass('active');
	})
	$('.item:eq(2)').click(function(){
		pages('fiction',$('#share'));
		$(this).addClass('active').siblings().removeClass('active');
	})
	$('.item:eq(3)').click(function(){
		pages('myself',$('#share'));
		$(this).addClass('active').siblings().removeClass('active');
	})
})
