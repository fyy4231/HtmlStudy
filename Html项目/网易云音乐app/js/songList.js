function getPlaylist(callback){
	if(checkcache()){
		var list=JSON.parse(localStorage.playlists);
		callback(list);
	}else{
		$.ajax({
			url:"data/topPlayList.json",
			success:function(data){
				callback(data.playlists);
				localStorage.playlists=JSON.stringify(data.playlists);
			}
		});
	};
};
getPlaylist(function(list){
	var item=$("#songbox").html();
	for(var i=0;i<list.length;i++){
		$item=$(item);
		$item.find("p").html(list[i].name);
		$item.find("span").html(list[i].playCount);
		$item.find("img").attr("src",list[i].coverImgUrl);
		$item.find("a").attr("href","#detail?id="+list[i].id).click(function(){
			router("detail");
		});
		$(".songlist").append($item);
	};
	localStorage.time=new Date().getTime();
});

function checkcache(){
	var time=new Date().getTime()-localStorage.time;
	//更新缓存
	if(localStorage.playlists&&time<1000*5){
		return true;
	}else{
		return false;
	};
};

