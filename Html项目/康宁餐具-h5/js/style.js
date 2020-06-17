//banner轮播
function bannerRun(){
	var i=0;
	var timer;
	//给按钮添加点击事件
	$(".banner dl dd").click(function(){
		var n=$(this).index();
		i=n;
		$(this).addClass("choose").siblings().removeClass("choose");
		$("#banPic li:eq("+i+")").addClass("active").siblings().removeClass("active");
	})
	function autoPlay(){
		timer=setInterval(function(){
			i==$(".banner dl dd").length-1? i=0: i++;
			$(".banner dl dd:eq("+i+")").addClass("choose").siblings().removeClass("choose");
			$("#banPic li:eq("+i+")").addClass("active").siblings().removeClass("active");
		},2500)
	}
	autoPlay();
	$("#banPic").hover(function(){clearInterval(timer);},function(){autoPlay();})
}
bannerRun();
	
//brand商标动画
function runBrand(){
	var inHtml=$("#runBrank").html();
	$("#runBrank").html(inHtml+inHtml);
	var w=$("#runBrank li").width();
	var i=0;
	var timer;
	autoRun();
	function autoRun(){
		timer=setInterval(function(){
			i++;
			$("#runBrank").animate({"left":-i*w+"px"});
			if (i>$("#runBrank li").length/2-1) {
				i=0;
				$("#runBrank").animate({"left":0},0)
			}
		},2000)
	};
	$(".brandLink .wrap").mouseover(function(){
		clearInterval(timer);
	});
	$(".brandLink .wrap").mouseout(function(){
		autoRun();
	})
}
runBrand();
//swiper明星产品轮播
var mySwiper = new Swiper ('.swiper-container', {
    pagination: '.swiper-pagination',
    autoplay: 2000,
    loop: true,
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 15,
    freeMode: true,
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
})
//视频播放
function videoPlay(){
	var video=document.getElementById("video1");
	$(".switch").click(function(){
		if (video.paused) {
			video.play();
			$(".switch").hide();
		}else{
			video.pause();
			$(".switch").show();
		}
	})
	$("#video1").click(function(){
		if (video.paused) {
			video.play();
			$(".switch").hide();
		}else{
			video.pause();
			$(".switch").show();
		}
	})
}
videoPlay();
//返回顶部按钮
function showScroll(){
	$(window).scroll(function(){
		var scrollNum=$(window).scrollTop();
		scrollNum > 100 ? $('div[id="topback"]').fadeIn(): $('div[id="topback"]').fadeOut();
	})
	$("#topback").click(function(){
		$("html,body").animate({"scrollTop":0},1000);
	})
}
showScroll();
	
