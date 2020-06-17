$(function(){
	$(".play .cont").addClass("act");
	$(".play .pic").css("transform","rotate(36000deg)");
	$(".play .cd_w").css("transform","rotate(36000deg)");
	var o_min="0"+parseInt(parseInt(time)/60);
	var o_sec=parseInt(time)%60<10?"0"+parseInt(time)%60:parseInt(time)%60;
	$(".play .over").html(o_min+":"+o_sec);
	index=0;
	bar();
	function getlist(callback){
		$.ajax({
			type:"get",
			url:"data/playlist.json",
			success:function(data){
				callback(data.playlist.tracks);
			}
		});
	};
	getlist(function(list){
		for(var i=0;i<list.length;i++){
			if(songId==list[i].id){
				$(".play .txt h4").html(list[i].name);
				$(".play .txt p").html(list[i].ar[0].name);
				$(".play .pic").attr("src",list[i].al.picUrl);
			}
		}
	});
});
$(".play .back").click(function(){
	router("detail");
	$(".play .cont").removeClass("act");
	$(".play .pic").css("transform","rotate(0)");
	$(".play .cd_w").css("transform","rotate(0)");
});
