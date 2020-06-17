var param = getUrlParams();
$('.back').click(function(){
	router('tab');
});
//歌曲列表
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
	var arr = [];
	for(var key in (localStorage.like)){
		arr.push(key);
	}
	var item = $('#songbox2').html();
	for(var i=0;i<list.length;i++){
		var $item = $(item);
		$item.find('h4').html(list[i].name);
		$item.find('p').html(list[i].ar[0].name);
		$item.find('.order').html(i+1);
		$item.data('music',list[i]);
		$item.click(function(){
			router('sing');
			$('#global').show();
			$('#btn .pause').removeClass('play');
			mControlor.play($(this).data('music').id);
			$('#global').find('h4').html($(this).data('music').name);
			$('#global').find('p').html($(this).data('music').ar[0].name);
			$('#global').find('img').attr('src',$(this).data('music').al.picUrl);	
		}).appendTo('.songlist2');
		for(var j=0;j<arr.length;j++){
			if(list[i].id == arr[j]){
				$('.songlist2 li').eq(i).find('.liked').css('display','block');
				$('.songlist2 li').eq(i).find('.like').css('display','none');
			}
		}
	}
	$('.songlist2 img').click(function(ev){
		ev.stopPropagation();
		$(this).hide().siblings().show();
		var obj = {};
		for(var i = 0;i<$('.songlist2 li').length;i++){
			if($('.songlist2 .liked').eq(i).css('display')=='block'){
				obj[list[i].id] = {'name':list[i].name,'author':list[i].ar[0].name,'pic':list[i].al.picUrl,'id':list[i].id}
			}
		}
		localStorage.like = JSON.stringify(obj);
		console.log(localStorage.like);
	});
})

function getPlaylist2(callback){
	$.ajax({
		type:"get",
		url:"data/topPlayList.json",
		async:true,
		success:function(data){
			callback(data.playlists);
		}
	});
}
getPlaylist2(function(list){
	var id = getUrlParams().id;
	for(var i=0;i<list.length;i++){
		if(list[i].id == id){
			$('.bglist').find('.count').html(list[i].playCount);
			$(".bglist").find(".des").html(list[i].name);
			$(".bglist").find(".big").attr("src",list[i].coverImgUrl);
			$(".bglist").find(".name").html(list[i].creator.nickname);
			$(".bglist").find(".small").attr("src",list[i].creator.avatarUrl);
			$(".bglist").css("backgroundImage","url("+list[i].creator.backgroundUrl+")")
			$(".taglist").find(".des").html("简介："+list[i].description);
			for(var j=0;j<list[i].tags.length;j++){
				$("<span>").html(list[i].tags[j]).appendTo(".taglist .tag");
			};
		}
	}
})