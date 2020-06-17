
$.fn.extend({
	//选项卡轮播图
	imgTab:function(opt){
		var def={
			"autoPlay":true,
			"time":1000
		}
		var n_opt=$.extend(def,opt);
		return this.each(function(){
			var _this=$(this);
			var n=0;
			var timer=null;
			//点击按钮切换图片
			_this.find('ol li').click(function(){
				var i=$(this).index();
				n=i;
				//console.log(i)
				//找按钮
				$(this).addClass('ac').siblings().removeClass('ac');
				//切换图片
				_this.find('ul li:eq('+i+')').fadeIn().siblings().hide();
			});
			//自动切换
			if(n_opt.autoPlay){
				function run(){
					timer=setInterval(function(){
//							n++;
//							if(n==_this.find('ol li').length){
//								n=0;
//							}
						//三元运算
						n==_this.find('ol li').length-1 ? n=0 : n++;
						//对应的按钮添加类名
						_this.find('ol li:eq('+n+')').addClass('ac').siblings().removeClass('ac');
						//对应的图片显示
						_this.find('ul li:eq('+n+')').fadeIn().siblings().hide();
					},n_opt.time)
				}
				run();
				_this.hover(
					function(){
						clearInterval(timer);
					},
					function(){
						run();
					}
				)
			}	
		})
	},
	//二级菜单
	subMenu:function(opt){
		return this.each(function(){
			$(this).mouseover(function(){
				var _this=$(this);
				var t_index=_this.attr('data-index');//获取索引值
				//console.log(t_index);
				var d_index=$('.section').eq(t_index-1).attr('data-id');
				_this.addClass('ac').siblings().removeClass('ac');
				if(d_index==t_index){
					$('.section:eq('+(t_index-1)+')').show().siblings().hide();
				};
				$('.section').mouseenter(function(){
					_this.addClass('ac').siblings().removeClass('ac');
					$('.section:eq('+(t_index-1)+')').show().siblings().hide();
				});
				$('.section').mouseleave(function(){
					_this.removeClass('ac');
					$('.section').hide();
				});
				_this.mouseout(function(){
					_this.removeClass('ac');
					$('.section').hide();
				})
			});
		})
	},
	floor:function(opt){
	 //当楼层到达某个位置时 旁边的导航出现相应的楼层
	 	  var aLi=$('#floor li');
		  var aBox = $('.f1'); 	  
	 	  var arr=[];
	      for(var i=0;i<aBox.length;i++){
	      	var obj={};
	      	obj.name=i;
	      	obj.offsettop=aBox.eq(i).offset().top;
	      	arr.push(obj);     	
	      }
	 	   $(window).scroll(function(){
	 	   	    var last_arr=[];
	 	   	    var s_t=$(window).scrollTop();//滚动条距顶部的距离
	 	        var w_t=$(aBox).offset().top;//文档的高度
	 	        var s_h=$(window).height();
	 	        var h=w_t-s_t;//div相对于屏幕顶部的高度
	 	        for(var j=0;j<aBox.length;j++){
	 	        	if(arr[j].offsettop<s_t+400){
	 	        		last_arr.push(arr[j].name);
	 	        		//console.log(last_arr);
	 	        	}
	 	        }
	 	        if(s_t>100){
			       $('#floor').show();		       
				}
				if(s_t==0){
			       $('#floor').hide();				
				}
	 	        var lastIndex=last_arr.length-1;//最后一个索引值
	 	        aLi.removeClass('ac');
	 	  });
	 	  	 $(aLi).click(function(){ 
	 	  	 	$('body,html').animate({"scrollTop":arr[$(this).index()].offsettop},1000)
	 	  	 })
	},
	//右侧滑动效果
	slide:function(opt){
		//自定义开关
		var onOff=true;
		$('#icon .top').mouseenter(function(){
			var i=$(this).index();
			//console.log(i);
			if(onOff){
				$('#icon .bot').slideUp('fast');//下边四个向上滑动
				$('#icon .top').animate({"height":30,"line-height":30});
				$('#icon .top a').children('i').hide();
				$('#icon .top a').children('span').css({"padding-top":0});
				$('#icon .top:eq('+i+') a').children('span').removeClass('ac');
				$(this).children('span').addClass('ac');
				$(this).addClass('ac').siblings().removeClass('ac');
				$('.wrap3 .slide').animate({"top":30},100);//使盒子向上滑动，遮挡住下边4个li
				$('.wrap3 .slide:eq('+i+')').show().siblings().hide();
			}
		})
		$('#icon .top').mouseleave(function(){
			onOff=true;
		})
		$('.wrap1 .slide span').click(function(){
			$('#icon .bot').slideDown('fast');//下边四个向下滑动
			$('#icon .top , .slide').finish();//动画完成
			$('#icon .top a').children('i').show();
			$('#icon .top a').children('span').css({"padding-top":40});
			$('#icon .top').animate({"height":70,"line-height":70}).removeClass('ac');//恢复自身的行高
			$('#icon .top a').children('span').removeClass('ac');
			$('.wrap1 .slide').hide().animate({"top":210},500);
			onOff=false;
		})
	},
	//右边导航条
	backtop:function(){
		//var _this=$(this);
		$('.bott1 li').mouseenter(function(){
			var i=$(this).index();
			$(this).addClass('act').siblings().removeClass('act');
			//alert(12)
			var i=$(this).index();
			//console.log(i)
			$('.bott1 li em').hide();
			$('.bott1 li em:eq('+i+')').show().animate({"left":-62},500).addClass('act');
		});
		$('.bott1 li').mouseleave(function(){
			var i=$(this).index();
			$(this).removeClass('act');
			//$('.bott1 li em:eq('+i+')').hide();
			$('.bott1 li em:eq('+i+')').hide().animate({"left":0},100).removeClass('act');
		})
	},
	//返回顶部
	backup:function(){
		$('.ding').click(function(){
			$("html,body").animate({"scrollTop":0},1000);
		})
	},
	//底部右侧定时器
	hot:function(){
		var n=0;
		var timer=null;
		var li_h=$('.remen ul li').height();//获取li的高度
		//console.log(li_h);
		$('#hot li').clone().prependTo('#hot');//再次克隆li复制到ul中
		var li_num=$('.remen ul li').size();//获取li的长度
		//console.log(li_num)
		//console.log($('#hot li').length)
		function run(){
			timer=setInterval(function(){
			n++;
			//console.log(n)
			if(n>$('#hot li').length/2){
				$('#hot').css('top',0)
				n=1;
			}
			$('#hot').animate({'top':-n*li_h});
		},1000)
		//$('.box ul').animate({'top':-num*li_h})
		}
		run();
		$('.remen').mouseover(function(){
			clearInterval(timer);
		})
		$('.remen').mouseout(function(){
			run();
		})
	},
	//点击楼层选项卡切换图片
	imgTab1:function(opt){
		return this.each(function(){
			var _this=$(this);
			_this.find('.navi li').mouseover(function(){
				$(this).addClass('active').siblings().removeClass('active');
				var i=$(this).index();
				_this.find('.message:eq('+i+')').show().siblings().hide();
			});
		})
	}
})
