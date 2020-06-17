function getPlaylist2(callback){
	var obj = JSON.parse(localStorage.like);
	var list = [];
	for(var key in obj){
		list.push(obj[key]);
	}
	callback(list);
}
getPlaylist2(function(list){
	var item = $('#songbox2').html();
	for(var i=0;i<list.length;i++){
		$item=$(item);
		$item.find("h4").html(list[i].name);
		$item.find("p").html(list[i].author);
		$item.find(".order").html(i+1);
		$item.data("music",list[i])
		$item.click(function(){
			$("#global").show();
			$("#btn .pause").removeClass("play");
			mControlor.play($(this).data("music").id);
			$("#global").find("h4").html($(this).data("music").name);
			$("#global").find("p").html($(this).data("music").author);
			$("#global").find("img").attr("src",$(this).data("music").pic);
		}).appendTo(".songlist2");
	}
})