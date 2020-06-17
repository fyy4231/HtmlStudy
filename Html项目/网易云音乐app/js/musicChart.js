function getlist(callback){
	$.ajax({
		type:"get",
		url:"data/playlist.json",
		async:true,
		success:function(data){
			callback(data.playlist.tracks);
		}
	});
}
getlist(function(list){
	var item = $('#songbox2').html();
	for(var i=0;i<list.length;i++){
		var $item = $(item);
		$item.find('h4').html(list[i].name);
		$item.find('p').html(list[i].ar[0].name);
		$item.find('.order').html(i+1);
		$item.data('music',list[i]);
		$item.click(function(){
			$('#global').show();
			$('#btn .pause').removeClass('play');
			mControlor.play($(this).data('music').id);
			$('#global').find('h4').html($(this).data('music').name);
			$('#global').find('p').html($(this).data('music').ar[0].name);
			$('#global').find('img').attr('src',$(this).data('music').al.picUrl);
		}).appendTo('.songlist2');
	}
	for(var i =0;i<3;i++){
		$('.songlistV2').find('.order').eq(i).css('color','red');
	}
})
$(function(){
	var oDate = new Date();
	$('.rank').find('.date').html('更新日期:'+(oDate.getMonth()+1)+'.'+oDate.getDate());
});
