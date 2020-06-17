function getPlayList(n,callback){
	if(checkcache()){
		console.log('请求缓存');
		var list = JSON.parse(localStorage.playlists);
		callback(list);
	}else{
		console.log('请求网络');
		$.ajax({
			type:"get",
			url:"data/topPlayList.json",
			async:true,
			success:function(data){
				console.log(data.playlists);
				
				var list = data.playlists;
				callback(list);
				localStorage.playlists = JSON.stringify(list);
				localStorage.cacheTime = new Date().getTime();
			}
		});
	}
}
//检查是否有缓存
function checkcache(){
	if(!localStorage.playlists){
		return false;
	}
	//判断缓存时间
	var cTime = localStorage.cacheTime;
	var time = new Date().getTime();
	if(time - cTime >5*1000){
		return false;
	}
	return true;
}

getPlayList(8,function(list){
	var $songlist = $('.songlist');
	var item = $('#songItem').html();//js对象
	
	for(var i=0;i<list.length;i++){
		var $item = $(item);
		$item.find('span').html(list[i].playCount);
		$item.find('img').attr('src',list[i].coverImgUrl);
		$item.find('p').html(list[i].name);
		$item.find('a').attr('href','#detail?id='+list[i].id).click(function(){
			router('detail');
		})
		$item.appendTo($songlist);
	}
	
})
