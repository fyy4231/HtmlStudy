##HTML5 教程

### 1、HTML 5 简介

####什么是 HTML5？

HTML5 将成为 HTML、XHTML 以及 HTML DOM 的新标准。

HTML 的上一个版本诞生于 1999 年。自从那以后，Web 世界已经经历了巨变。

HTML5 仍处于完善之中。然而，大部分现代浏览器已经具备了某些 HTML5 支持。

####HTML5 是如何起步的？

HTML5 是 W3C 与 WHATWG 合作的结果。

编者注：W3C 指 World Wide Web Consortium，万维网联盟。

编者注：WHATWG 指 Web Hypertext Application Technology Working Group。

WHATWG 致力于 web 表单和应用程序，而 W3C 专注于 XHTML 2.0。在 2006 年，双方决定进行合作，来创建一个新版本的 HTML。

为 HTML5 建立的一些规则：

- 新特性应该基于 HTML、CSS、DOM 以及 JavaScript。
- 减少对外部插件的需求（比如 Flash）
- 更优秀的错误处理
- 更多取代脚本的标记
- HTML5 应该独立于设备
- 开发进程应对公众透明

####新特性

HTML5 中的一些有趣的新特性：

- 用于绘画的 canvas 元素
- 用于媒介回放的 video 和 audio 元素
- 对本地离线存储的更好的支持
- 新的特殊内容元素，比如 article、footer、header、nav、section
- 新的表单控件，比如 calendar、date、time、email、url、search

####浏览器支持

最新版本的 Safari、Chrome、Firefox 以及 Opera 支持某些 HTML5 特性。Internet Explorer 9 将支持某些 HTML5 特性。

###2、HTML 5 视频

####视频格式

当前，video 元素支持三种视频格式：

| 格式     | IE   | Firefox | Opera | Chrome | Safari |
| ------ | ---- | ------- | ----- | ------ | ------ |
| Ogg    | No   | 3.5+    | 10.5+ | 5.0+   | No     |
| MPEG 4 | 9.0+ | No      | No    | 5.0+   | 3.0+   |
| WebM   | No   | 4.0+    | 10.6+ | 6.0+   | No     |

Ogg = 带有 Theora 视频编码和 Vorbis 音频编码的 Ogg 文件

MPEG4 = 带有 H.264 视频编码和 AAC 音频编码的 MPEG 4 文件

WebM = 带有 VP8 视频编码和 Vorbis 音频编码的 WebM 文件

#### 如何工作

```
<video src="movie.ogg" controls="dontrols" width="320" height="240">
Your browser does not support the video tag.</video>
```

control 属性供添加播放、暂停和音量控件。

包含宽度和高度属性也是不错的主意。

<video> 与 </video> 之间插入的内容是供不支持 video 元素的浏览器显示的：

####Internet Explorer

Internet Explorer 8 不支持 video 元素。在 IE 9 中，将提供对使用 MPEG4 的 video 元素的支持。

####<video> 标签的属性

| 属性                                       | 值        | 描述                                       |
| ---------------------------------------- | -------- | ---------------------------------------- |
| [autoplay](http://www.w3school.com.cn/tags/att_video_autoplay.asp) | autoplay | 如果出现该属性，则视频在就绪后马上播放。                     |
| [controls](http://www.w3school.com.cn/tags/att_video_controls.asp) | controls | 如果出现该属性，则向用户显示控件，比如播放按钮。                 |
| [height](http://www.w3school.com.cn/tags/att_video_height.asp) | *pixels* | 设置视频播放器的高度。                              |
| [loop](http://www.w3school.com.cn/tags/att_video_loop.asp) | loop     | 如果出现该属性，则当媒介文件完成播放后再次开始播放。               |
| [preload](http://www.w3school.com.cn/tags/att_video_preload.asp) | preload  | 如果出现该属性，则视频在页面加载时进行加载，并预备播放。如果使用 "autoplay"，则忽略该属性。 |
| [src](http://www.w3school.com.cn/tags/att_video_src.asp) | *url*    | 要播放的视频的 URL。                             |
| [width](http://www.w3school.com.cn/tags/att_video_width.asp) | *pixels* | 设置视频播放器的宽度。                              |

####HTML5 <video> - 方法、属性以及事件

下面列出了大多数浏览器支持的视频方法、属性和事件：

| 方法          | 属性          | 事件             |
| ----------- | ----------- | -------------- |
| play()      | currentSrc  | play           |
| pause()     | currentTime | pause          |
| load()      | videoWidth  | progress       |
| canPlayType | videoHeight | error          |
|             | duration    | timeupdate     |
|             | ended       | ended          |
|             | error       | abort          |
|             | paused      | empty          |
|             | muted       | emptied        |
|             | seeking     | waiting        |
|             | volume      | loadedmetadata |
|             | height      |                |
|             | width       |                |

注释：在所有属性中，只有 videoWidth 和 videoHeight 属性是立即可用的。在视频的元数据已加载后，其他属性才可用。

###3、HTML 5 音频

####音频格式

当前，audio 元素支持三种音频格式：

|            | IE 9 | Firefox 3.5 | Opera 10.5 | Chrome 3.0 | Safari 3.0 |
| ---------- | ---- | ----------- | ---------- | ---------- | ---------- |
| Ogg Vorbis |      | √           | √          | √          |            |
| MP3        | √    |             |            | √          | √          |
| Wav        |      | √           | √          |            | √          |

####如何工作

如需在 HTML5 中播放音频，您所有需要的是：

```
<audio src="song.ogg" controls="controls">
Your browser does not support the audio tag.</audio>
```

control 属性供添加播放、暂停和音量控件。

<audio> 与 </audio> 之间插入的内容是供不支持 audio 元素的浏览器显示的：

####实例

```
<audio src="song.ogg" controls="controls">
  Your browser does not support the audio tag.
</audio>
------------------------------------------
<audio controls="controls">
  <source src="song.ogg" type="audio/ogg">
  <source src="song.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>
```

上面的例子使用一个 Ogg 文件，适用于Firefox、Opera 以及 Chrome 浏览器。

要确保适用于 Safari 浏览器，音频文件必须是 MP3 或 Wav 类型。

audio 元素允许多个 source 元素。source 元素可以链接不同的音频文件。浏览器将使用第一个可识别的格式：

####<audio> 标签的属性

| 属性                                       | 值        | 描述                                       |
| ---------------------------------------- | -------- | ---------------------------------------- |
| [autoplay](http://www.w3school.com.cn/tags/att_audio_autoplay.asp) | autoplay | 如果出现该属性，则音频在就绪后马上播放。                     |
| [controls](http://www.w3school.com.cn/tags/att_audio_controls.asp) | controls | 如果出现该属性，则向用户显示控件，比如播放按钮。                 |
| [loop](http://www.w3school.com.cn/tags/att_audio_loop.asp) | loop     | 如果出现该属性，则每当音频结束时重新开始播放。                  |
| [preload](http://www.w3school.com.cn/tags/att_audio_preload.asp) | preload  | 如果出现该属性，则音频在页面加载时进行加载，并预备播放。如果使用 "autoplay"，则忽略该属性。 |
| [src](http://www.w3school.com.cn/tags/att_audio_src.asp) | *url*    | 要播放的音频的 URL。                             |

### 4、HTML 5 拖放

#### 拖放

拖放是一种常见的特性，即抓取对象以后拖到另一个位置。

在 HTML5 中，拖放是标准的一部分，任何元素都能够拖放。

####浏览器支持

Internet Explorer 9、Firefox、Opera 12、Chrome 以及 Safari 5 支持拖放。

注释：在 Safari 5.1.2 中不支持拖放。

#### HTML5 拖放实例

```
<!DOCTYPE HTML>
<html>
<head>
<script type="text/javascript">
function allowDrop(ev){
	ev.preventDefault();
}
function drag(ev){
	ev.dataTransfer.setData("Text",ev.target.id);
}
function drop(ev){
	ev.preventDefault();
	var data=ev.dataTransfer.getData("Text");
	ev.target.appendChild(document.getElementById(data));
}
</script>
</head>
<body>
<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div> 
// ondragover="allowDrop(event) 放到什么地方  ondrop="drop(event)" 进行放置
<img id="drag1" src="img_logo.gif" draggable="true" ondragstart="drag(event)" width="336" height="69" />  // draggable="true"设置元素为可拖动 ondragstart="drag(event)"元素拖动时发生了什么
</body>
</html>
```

####代码解释：

- 调用 preventDefault() 来避免浏览器对数据的默认处理（drop 事件的默认行为是以链接形式打开）
- 通过 dataTransfer.getData("Text") 方法获得被拖的数据。该方法将返回在 setData() 方法中设置为相同类型的任何数据。
- 被拖数据是被拖元素的 id ("drag1")
- 把被拖元素追加到放置元素（目标元素）中

### 5、HTML 5 画布Canvas

**canvas 元素用于在网页上绘制图形。**

####什么是 Canvas？

HTML5 的 canvas 元素使用 JavaScript 在网页上绘制图像。画布是一个矩形区域，您可以控制其每一像素。canvas 拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。

####创建 Canvas 元素

向 HTML5 页面添加 canvas 元素。

规定元素的 id、宽度和高度：

```
<canvas id="myCanvas" width="200" height="100"></canvas>
```

####通过 JavaScript 来绘制

canvas 元素本身是没有绘图能力的。所有的绘制工作必须在 JavaScript 内部完成：

```
<script type="text/javascript">
var c=document.getElementById("myCanvas"); //JavaScript 使用 id 来寻找 canvas 元素：
var cxt=c.getContext("2d"); //然后，创建 context 对象：
cxt.fillStyle="#FF0000"; //这两行代码绘制一个红色的矩形，fillStyle 方法将其染成红色
cxt.fillRect(0,0,150,75); //fillRect 方法规定了形状、位置和尺寸。
</script>
```

getContext("2d") 对象是内建的 HTML5 对象，拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。

#### 更多 Canvas 实例

```
<script type="text/javascript">
var c=document.getElementById("myCanvas");
var cxt=c.getContext("2d");
//线条：通过指定从何处开始，在何处结束，来绘制一条线
cxt.moveTo(10,10);
cxt.lineTo(150,50);
cxt.lineTo(10,50);
cxt.stroke();
//圆：通过规定尺寸、颜色和位置，来绘制一个圆
cxt.fillStyle="#FF0000";
cxt.beginPath();
cxt.arc(70,18,15,0,Math.PI*2,true); //arc(x,y,r,begin,rad,direction) x,y为圆心坐标，r为半径，begin为画图起点，rad为画图角度，true为画图方向
cxt.closePath();
cxt.fill();
//颜色渐变：使用您指定的颜色来绘制渐变背景
var grd=cxt.createLinearGradient(0,0,175,50);
grd.addColorStop(0,"#FF0000");
grd.addColorStop(1,"#00FF00");
cxt.fillStyle=grd;
cxt.fillRect(0,0,175,50);
//图像：把一幅图像放置到画布上
var img=new Image()
img.src="flower.png"
cxt.drawImage(img,0,0);
</script>
```

###6、HTML 5 Web存储

####在客户端存储数据

HTML5 提供了两种在客户端存储数据的新方法：

- localStorage - 没有时间限制的数据存储
- sessionStorage - 针对一个 session 的数据存储

之前，这些都是由 cookie 完成的。但是 cookie 不适合大量数据的存储，因为它们由每个对服务器的请求来传递，这使得 cookie 速度很慢而且效率也不高。

在 HTML5 中，数据不是由每个服务器请求传递的，而是只有在请求时使用数据。它使在不影响网站性能的情况下存储大量数据成为可能。

对于不同的网站，数据存储于不同的区域，并且一个网站只能访问其自身的数据。

HTML5 使用 JavaScript 来存储和访问数据。

####localStorage 方法

localStorage 方法存储的数据没有时间限制。第二天、第二周或下一年之后，数据依然可用。

**实例**

```
<script type="text/javascript">
	//创建和访问localStorage；
	localStorage.lastname="Smith";
	document.write(localStorage.lastname);
	//对用户访问页面的次数进行计数
    if (localStorage.pagecount){
        localStorage.pagecount=Number(localStorage.pagecount) +1;
    }else{
        localStorage.pagecount=1;
    }
    document.write("Visits "+ localStorage.pagecount + " time(s).");
</script>

```

####sessionStorage 方法

sessionStorage 方法针对一个 session 进行数据存储。当用户关闭浏览器窗口后，数据会被删除。

**实例**

```
<script type="text/javascript">
	//创建并访问一个 sessionStorage
	sessionStorage.lastname="Smith";
	document.write(sessionStorage.lastname);
	//对用户在当前 session 中访问页面的次数进行计数
	if (sessionStorage.pagecount){
  		sessionStorage.pagecount=Number(sessionStorage.pagecount) +1;
  	}else{
  		sessionStorage.pagecount=1;
  	}
	document.write("Visits "+sessionStorage.pagecount+" time(s) this session.");
</script>
```

###7、HTML 5 服务器发送事件

**HTML5 服务器发送事件（server-sent event）允许网页获得来自服务器的更新。**

####Server-Sent 事件 - 单向消息传递

Server-Sent 事件指的是网页自动获取来自服务器的更新。

以前也可能做到这一点，前提是网页不得不询问是否有可用的更新。通过服务器发送事件，更新能够自动到达。例子：Facebook/Twitter 更新、估价更新、新的博文、赛事结果等。

####浏览器支持

所有主流浏览器均支持服务器发送事件，除了 Internet Explorer。

####接收 Server-Sent 事件通知

EventSource 对象用于接收服务器发送事件通知：

```
var source=new EventSource("demo_sse.php");
source.onmessage=function(event){
  	document.getElementById("result").innerHTML+=event.data + "<br />";
};
```

例子解释：

- 创建一个新的 EventSource 对象，然后规定发送更新的页面的 URL（本例中是 "demo_sse.php"）
- 每接收到一次更新，就会发生 onmessage 事件
- 当 onmessage 事件发生时，把已接收的数据推入 id 为 "result" 的元素中

####检测 Server-Sent 事件支持

在上面的 TIY 实例中，我们编写了一段额外的代码来检测服务器发送事件的浏览器支持情况：

```
if(typeof(EventSource)!=="undefined"){
  // Yes! Server-sent events support!
  // Some code.....
  }else{
  // Sorry! No server-sent events support..
  }
```

####服务器端代码实例

为了让上面的例子可以运行，您还需要能够发送数据更新的服务器（比如 PHP 和 ASP）。

服务器端事件流的语法是非常简单的。把 "Content-Type" 报头设置为 "text/event-stream"。现在，您可以开始发送事件流了。

**PHP 代码 (demo_sse.php)：**

```
<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');
$time = date('r');
echo "data: The server time is: {$time}\n\n";
flush();
?>
```

**ASP 代码 (VB) (demo_sse.asp):**

```
<%
Response.ContentType="text/event-stream"
Response.Expires=-1
Response.Write("data: " & now())
Response.Flush()
%>
```

代码解释：

- 把报头 "Content-Type" 设置为 "text/event-stream"
- 规定不对页面进行缓存
- 输出发送日期（始终以 "data: " 开头）
- 向网页刷新输出数据

####EventSource 对象

在上面的例子中，我们使用 onmessage 事件来获取消息。不过还可以使用其他事件：

| 事件        | 描述           |
| --------- | ------------ |
| onopen    | 当通往服务器的连接被打开 |
| onmessage | 当接收到消息       |
| onerror   | 当错误发生        |

## HTML5 表单

###一、HTML5 新的 Input 类型

HTML5 拥有多个新的表单输入类型。这些新特性提供了更好的输入控制和验证。

以下全面介绍这些新的输入类型：

- email
- url
- number
- range
- Date pickers (date, month, week, time, datetime, datetime-local)
- search
- color

####1、Input 类型 - email

email 类型用于应该包含 e-mail 地址的输入域。在提交表单时，会自动验证 email 域的值。

```
E-mail: <input type="email" name="user_email" />
```

提示：iPhone 中的 Safari 浏览器支持 email 输入类型，并通过改变触摸屏键盘来配合它（添加 @ 和 .com 选项）。

####2、Input 类型 - url

url 类型用于应该包含 URL 地址的输入域。在提交表单时，会自动验证 url 域的值。

```
Homepage: <input type="url" name="user_url" />
```

提示：iPhone 中的 Safari 浏览器支持 url 输入类型，并通过改变触摸屏键盘来配合它（添加 .com 选项）。

####3、Input 类型 - number

number 类型用于应该包含数值的输入域。

您还能够设定对所接受的数字的限定：

```
Points: <input type="number" name="points" min="1" max="10" />
```

请使用下面的属性来规定对数字类型的限定：

| 属性    | 值        | 描述                                       |
| ----- | -------- | ---------------------------------------- |
| max   | *number* | 规定允许的最大值                                 |
| min   | *number* | 规定允许的最小值                                 |
| step  | *number* | 规定合法的数字间隔（如果 step="3"，则合法的数是 -3,0,3,6 等） |
| value | *number* | 规定默认值                                    |

提示：iPhone 中的 Safari 浏览器支持 number 输入类型，并通过改变触摸屏键盘来配合它（显示数字）。

#### 4、Input 类型 - range

range 类型用于应该包含一定范围内数字值的输入域。range 类型显示为滑动条。

您还能够设定对所接受的数字的限定：

```
<input type="range" name="points" min="1" max="10" />
```

请使用下面的属性来规定对数字类型的限定：

| 属性    | 值        | 描述                                       |
| ----- | -------- | ---------------------------------------- |
| max   | *number* | 规定允许的最大值                                 |
| min   | *number* | 规定允许的最小值                                 |
| step  | *number* | 规定合法的数字间隔（如果 step="3"，则合法的数是 -3,0,3,6 等） |
| value | *number* | 规定默认值                                    |

#### 5、Input 类型 - Date Pickers（日期选择器）

HTML5 拥有多个可供选取日期和时间的新输入类型：

- date - 选取日、月、年
- month - 选取月、年
- week - 选取周和年
- time - 选取时间（小时和分钟）
- datetime - 选取时间、日、月、年（UTC 时间）
- datetime-local - 选取时间、日、月、年（本地时间）

下面的例子允许您从日历中选取一个日期：

```
Date: <input type="date" name="user_date" />
```

#### 6、Input 类型 - search

search 类型用于搜索域，比如站点搜索或 Google 搜索。search 域显示为常规的文本域。

```
Search Google: <input type="search" name="googlesearch">
```

#### 7、Input 类型 - color

color 类型用在input字段主要用于选取颜色

```
color: <input type="color" name="user_color">
```

### 二、HTML 5 表单元素

HTML 5 拥有若干涉及表单的元素和属性。

- datalist
- keygen
- output

####1、datalist 元素

datalist 元素规定输入域的选项列表。

列表是通过 datalist 内的 option 元素创建的。

如需把 datalist 绑定到输入域，请用输入域的 list 属性引用 datalist 的 id：

```
Webpage: <input type="url" list="url_list" name="link" />
<datalist id="url_list">
	<option label="W3School" value="http://www.W3School.com.cn" />
	<option label="Google" value="http://www.google.com" />
	<option label="Microsoft" value="http://www.microsoft.com" />
</datalist>
```

提示：option 元素永远都要设置 value 属性。

####2、keygen 元素

keygen 元素的作用是提供一种验证用户的可靠方法。

keygen 元素是密钥对生成器（key-pair generator）。当提交表单时，会生成两个键，一个是私钥，一个公钥。私钥（private key）存储于客户端，公钥（public key）则被发送到服务器。公钥可用于之后验证用户的客户端证书（client certificate）。

目前，浏览器对此元素的糟糕的支持度不足以使其成为一种有用的安全标准。

```
<form action="demo_form.asp" method="get">
	Username: <input type="text" name="usr_name" />
	Encryption: <keygen name="security" />
	<input type="submit" />
</form>
```

####3、output 元素

output 元素用于不同类型的输出，比如计算或脚本输出：

```
<output id="result" onforminput="resCalc()"></output>
```

### 三、HTML5 表单属性

**新的 form 属性：**

- autocomplete
- novalidate

**新的 input 属性：**

- autocomplete
- autofocus
- form
- form overrides (formaction, formenctype, formmethod, formnovalidate, formtarget)
- height 和 width
- list
- min, max 和 step
- multiple
- pattern (regexp)
- placeholder
- required

#### novalidate 属性

novalidate 属性规定在提交表单时不应该验证 form 或 input 域。

注释：novalidate 属性适用于 <form> 以及以下类型的 <input> 标签：text, search, url, telephone, email, password, date pickers, range 以及 color.

```
<form action="demo_form.asp" method="get" novalidate="true">
	E-mail: <input type="email" name="user_email" />
	<input type="submit" />
</form>
```

#### 1、autocomplete 属性

autocomplete 属性规定 form 或 input 域应该拥有自动完成功能。

**注释**：autocomplete 适用于 <form> 标签，以及以下类型的 <input> 标签：text, search, url, telephone, email, password, datepickers, range 以及 color。

当用户在自动完成域中开始输入时，浏览器应该在该域中显示填写的选项：

```
<form action="demo_form.asp" method="get" autocomplete="on">
	First name: <input type="text" name="fname" /><br />
	Last name: <input type="text" name="lname" /><br />
	E-mail: <input type="email" name="email" autocomplete="off" /><br />
	<input type="submit" />
</form>
```
####2、autofocus属性

autofocus 属性规定在页面加载时，域自动地获得焦点。

注释：autofocus 属性适用于所有 <input> 标签的类型。

```
User name: <input type="text" name="user_name"  autofocus="autofocus" />
```

####3、form 属性

form 属性规定输入域所属的一个或多个表单。

注释：form 属性适用于所有 <input> 标签的类型。

form 属性必须引用所属表单的 id：

```
<form action="demo_form.asp" method="get" id="user_form">
First name:<input type="text" name="fname" />
<input type="submit" />
</form>
Last name: <input type="text" name="lname" form="user_form" />
```

####4、form overrides表单重写属性

表单重写属性（form override attributes）允许您重写 form 元素的某些属性设定。

表单重写属性有：

- formaction - 重写表单的 action 属性
- formenctype - 重写表单的 enctype 属性
- formmethod - 重写表单的 method 属性
- formnovalidate - 重写表单的 novalidate 属性
- formtarget - 重写表单的 target 属性

注释：表单重写属性适用于以下类型的 <input> 标签：submit 和 image。

```
<form action="demo_form.asp" method="get" id="user_form">
	E-mail: <input type="email" name="userid" /><br />
	<input type="submit" value="Submit" /><br />
	<input type="submit" formaction="demo_admin.asp" value="Submit as admin" /><br />
	<input type="submit" formnovalidate="true" value="Submit without validation"/><br/>
</form>
```

#### 5、height 和 width 属性

height 和 width 属性规定用于 image 类型的 input 标签的图像高度和宽度。

注释：height 和 width 属性只适用于 image 类型的 <input> 标签。

```
<input type="image" src="img_submit.gif" width="99" height="99" />
```

#### 6、list 属性

list 属性规定输入域的 datalist。datalist 是输入域的选项列表。

注释：list 属性适用于以下类型的 <input> 标签：text, search, url, telephone, email, date pickers, number, range 以及 color。

```
Webpage: <input type="url" list="url_list" name="link" />
<datalist id="url_list">
	<option label="W3Schools" value="http://www.w3school.com.cn" />
	<option label="Google" value="http://www.google.com" />
	<option label="Microsoft" value="http://www.microsoft.com" />
</datalist>
```

####7、min、max 和 step 属性

min、max 和 step 属性用于为包含数字或日期的 input 类型规定限定（约束）。

max 属性规定输入域所允许的最大值。

min 属性规定输入域所允许的最小值。

step 属性为输入域规定合法的数字间隔（如果 step="3"，则合法的数是 -3,0,3,6 等）。

注释：min、max 和 step 属性适用于以下类型的 <input> 标签：date pickers、number 以及 range。

下面的例子显示一个数字域，该域接受介于0到10之间的值且步进为3（即合法的值为0、3、6 和 9）：

```
Points: <input type="number" name="points" min="0" max="10" step="3" />
```

####8、multiple 属性

multiple 属性规定输入域中可选择多个值。

注释：multiple 属性适用于以下类型的 <input> 标签：email 和 file。

```
Select images: <input type="file" name="img" multiple="multiple" />
```

####9、pattern 属性

pattern 属性规定用于验证 input 域的模式（pattern）。

模式（pattern） 是正则表达式。您可以在我们的 [JavaScript 教程](http://www.w3school.com.cn/js/index.asp)中学习到有关正则表达式的内容。

注释：pattern 属性适用于以下类型的 <input> 标签：text, search, url, telephone, email 以及 password。

下面的例子显示了一个只能包含三个字母的文本域（不含数字及特殊字符）：

```
Country code: <input type="text" name="country_code"
pattern="[A-z]{3}" title="Three letter country code" />
```

####10、placeholder 属性

placeholder 属性提供一种提示（hint），描述输入域所期待的值。

注释：placeholder 属性适用于以下类型的 <input> 标签：text, search, url, telephone, email 以及 password。

提示（hint）会在输入域为空时显示出现，会在输入域获得焦点时消失：

```
<input type="search" name="user_search"  placeholder="Search W3School" />
```

####11、required 属性

required 属性规定必须在提交之前填写输入域（不能为空）。

注释：required 属性适用于以下类型的 <input> 标签：text, search, url, telephone, email, password, date pickers, number, checkbox, radio 以及 file。

```
Name: <input type="text" name="usr_name" required="required" />
```

### HTML 5标签

| HTML 5标签     | 描述                        |
| :----------- | :------------------------ |
| <article>    | 定义文章                      |
| <aside>      | 定义页面内容之外的内容               |
| <audio>      | 定义声音内容。                   |
| <bdi>        | 定义文本的文本方向，使其脱离其周围文本的方向设置。 |
| <canvas>     | 定义图形                      |
| <command>    | 定义命令按钮                    |
| <datalist>   | 定义下拉列表                    |
| <details>    | 定义元素的细节                   |
| <dialog>     | 定义对话框或窗口                  |
| <embed>      | 定义外部交互内容或插件               |
| <figcaption> | 定义 figure 元素的标题。          |
| <figure>     | 定义媒介内容的分组，以及它们的标题         |
| <footer>     | 定义 section 或 page 的页脚     |
| <header>     | 定义 section 或 page 的页眉     |
| <keygen>     | 定义生成密钥                    |
| <mark>       | 定义有记号的文本                  |
| <meter>      | 定义预定义范围内的度量               |
| <nav>        | 定义导航链接                    |
| <output>     | 定义输出的一些类型                 |
| <progress>   | 定义任何类型的任务的进度              |
| <section>    | 定义 section                |
| <source>     | 定义媒介源                     |
| <summary>    | 为 <details> 元素定义可见的标题     |
| <time>       | 定义日期/时间                   |
| <track>      | 定义用在媒体播放器中的文本轨道           |
| <video>      | 定义视频                      |
| <wvr>        | 定义可能的换行符                  |

### HTML(5) 代码规范

####使用正确的文档类型

文档类型声明位于HTML文档的第一行：

```
<!DOCTYPE html>
```

如果你想跟其他标签一样使用小写，可以使用以下代码：

```
<!doctype html>
```

####使用小写元素名

HTML5 元素名可以使用大写和小写字母。

推荐使用小写字母：

- 混合了大小写的风格是非常糟糕的。
- 开发人员通常使用小写 (类似 XHTML)。
- 小写风格看起来更加清爽。
- 小写字母容易编写。

####关闭所有 HTML 元素

在 HTML5 中, 你不一定要关闭所有元素 (例如 <p> 元素)，但我们建议每个元素都要添加关闭标签。

####关闭空的 HTML 元素

在 HTML5 中, 空的 HTML 元素也不一定要关闭：

我们可以这么写：

```
<meta charset="utf-8">
```

也可以这么写：

```
<meta charset="utf-8" />
```

在 XHTML 和 XML 中斜线 (/) 是必须的。

####使用小写属性名

HTML5 属性名允许使用大写和小写字母。

我们推荐使用小写字母属性名:

- 同时使用大小写是非常不好的习惯。
- 开发人员通常使用小写 (类似 XHTML)。
- 小写风格看起来更加清爽。
- 小写字母容易编写。

####属性值

HTML5 属性值可以不用引号。

但是属性值我们推荐使用引号:

- 如果属性值含有空格需要使用引号。
- 混合风格不推荐的，建议统一风格。
- 属性值使用引号易于阅读。

####图片属性

图片通常使用 **alt** 属性。 在图片不能显示时，它能替代图片显示

####空格和等号

等号前后可以使用空格。

####避免一行代码过长

使用 HTML 编辑器，左右滚动代码是不方便的。

每行代码尽量少于 80 个字符。

####空行和缩进

不要无缘无故添加空行。

为每个逻辑功能块添加空行，这样更易于阅读。

缩进使用两个空格，不建议使用 TAB。

比较短的代码间不要使用不必要的空行和缩进。

####省略 <html>,<head> 和 <body>?

在标准 HTML5 中， <html> ,<head>和 <body> 标签是可以省略的。

**不推荐省略 <html>  ,<head>和 <body> 标签。**

####元数据

HTML5 中 <title> 元素是必须的，标题名描述了页面的主题:

标题和语言可以让搜索引擎很快了解你页面的主题

####HTML 注释

注释可以写在 <!-- 和 --> 中

####样式表

样式表使用简洁的语法格式 ( type 属性不是必须的):

```
<link rel="stylesheet" href="styles.css">
```

短的规则可以写成一行:

```
p.into {font-family: Verdana; font-size: 16em;}
```

长的规则可以写成多行:

```
body {
  background-color: lightgrey;
  font-family: "Arial Black", Helvetica, sans-serif;
  font-size: 16em;
  color: black;
}
```

- 将左花括号与选择器放在同一行。

- 左花括号与选择器间添加一个空格。

- 使用两个空格来缩进。

- 冒号与属性值之间添加一个空格。

- 逗号和符号之后使用一个空格。

- 每个属性与值结尾都要使用分号。

- 只有属性值包含空格时才使用引号。

- 右花括号放在新的一行。

- 每行最多 80 个字符。

  **注意：**在逗号和冒号后添加空格是常用的一个规则。

####在 HTML 中载入 JavaScript

使用简洁的语法来载入外部的脚本文件 ( type 属性不是必须的 ):

```
<script src="myscript.js">
```



