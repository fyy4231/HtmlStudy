//改变屏幕尺寸大小
function fontSize() {
	var w = w > 750 ? 750 : document.documentElement.clientWidth;
	var _html = document.getElementsByTagName('html')[0];
	_html.style.fontSize = w / 3.2 + 'px';
}
fontSize();
window.onresize = fontSize;


function getUrlParams() {

	var url = window.location.href;
	//console.log(url);//http://127.0.0.1:8020/month4/week02/day03/music/index.html?a=1&b=2&c=3

	var arr = url.split('?');
	//console.log(arr);

	var str = arr[1];
	var p_arr = str.split('&');
	//console.log(p_arr);//{a:1,b:2,c:3}

	var params = {}; //定义空的json对象
	for(var i = 0; i < p_arr.length; i++) {
		var p = p_arr[i];

		var kv = p.split('=');

		//console.log(kv);//["a", "1"]  ["b", "2"]   ["c", "3"]

		params[kv[0]] = kv[1];

	}
	return params; //{a: "1", b: "2", o: "3"}
}
//console.log(getUrlParams());

function getModel() {
	var url = window.location.href;
	//console.log(url);//http://127.0.0.1:8020/month4/week02/day03/music/index.html#music?a=1&b=2&c=3
	var arr = url.split('#');
	//console.log(arr);//["http://127.0.0.1:8020/month4/week02/day03/music/index.html", "music?a=1&b=2&c=3"]
	var str = arr[1];
	//console.log(str);//music?a=1&b=2&c=3
	if(arr.length==2){
		var music = str.split('?');
		//console.log(music);// ["music", "a=1&b=2&c=3"]
		var model = music[0];
		//console.log(model);//music
	}
	
	return model;
}
//console.log(getModel());

function router(m,$container) {
	$container = $container || $('#share');
	$.ajax({
		
		url: 'views/' + m + '.html',
		success: function(data) {
			$container.html(data);
			getjs(m);
		}
	})
}

function getjs(m) {
	$.ajax({
		url: 'js/' + m + '.js'
	})
}

$(function() {
	//JSON对象转化为字符串    JSON.stringify();
	//字符串转换为JSON对象，JSON.parse();
//	var data = {'name':'tom'};
//	localStorage.data = JSON.stringify(data);
//	console.log(localStorage.data);
//	console.log(JSON.parse(localStorage.data).name);
	
	
	
	
	if(!localStorage.count){
		localStorage.count = 0;
	}else{
		localStorage.count++;
	}
	
	if(localStorage.count == 1){
		router('welcome');
	}else{
		router('tab');
		router('audio',$('#global'));
	}
	
	
	
})