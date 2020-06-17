var time;
var timer;
var index;
var songId;
mControlor = {
	server:'http://music.126.com/song.php?id=',
	play:function(id){
		$.ajax({
			type:"get",
			url:"data/music.json",
			async:true,
			success:function(data){
				var url = data[id].url;
				songId = id;
				time = data[id].time;
				$('#audio').attr('src',url);
				$('#audio').get(0).play();
			}
		});
	}
}
$('#btn .pause').click(function(ev){
	ev.stopPropagation();
	if($(this).hasClass('play')){
		$('.play .pic').css('transform','rotate(36000deg)');
		$('.play .cd_w').css('transform','rotate(36000deg)');
		$('#audio').get(0).play();
		bar();
	}else{
		$('.play .pic').css('transform','rotate(0)');
		$('.play .cd_w').css('transform','rotate(0)');
		$('#audio').get(0).pause();
		clearInterval(timer);
	}
	$(this).toggleClass('play');
	$('.play .cont').toggleClass('act');
});
function bar(){
	timer = setInterval(function(){
		index++;
		$('.play .red').css('width',2*index/parseInt(time)+'rem');
		var s_min = '0'+parseInt(index/60);
		var s_sec = index%60<10?'0'+index%60:index%60;
		$('.play .start').html(s_min+':'+s_sec);
		if(index == parseInt(time)){
			clearInterval(timer);
		}
	},1000)
}
