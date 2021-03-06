知识点：

● HTTP协议

● AJAX

● XMLHttpRequest对象

=================================================================

**HTTP通讯协议**

简介：

协议是指计算机通信网络中两台计算机之间进行通信所必须共同遵守的规定或规则。

HTTP(超文本传输协议)是一种通信协议，它允许将超文本标记语言(HTML)文档从Web服务器传送到客户端的浏览器。

特点：

HTTP协议永远都是客户端发起请求，服务器回送响应。这样就限制了使用HTTP协议，无法实现在客户端没有发起请求的时候，服务器将消息推送给客户端。


工作流程：

一次HTTP操作称为一个事务，其工作过程可分为四步：

1）首先客户机与服务器需要建立连接。

2）建立连接后，客户机发送一个请求给服务器，请求方式的格式为：统一资源标识符（URL）、协议版本号，客户机信息和可能的内容。

3）服务器接到请求后，给予相应的响应信息，其格式为一个状态行，包括信息的协议版本号、一个成功或错误的代码（status Code状态码），后边服务器信息、实体信息和可能的内容。

4）客户端接收完服务器所返回的信息后，与服务器断开连接。

如果在以上过程中的某一步出现错误，那么产生错误的信息将返回到客户端。

对于用户来说，这些过程是由HTTP自己完成的，用户只要用鼠标点击，等待信息显示就可以了。



**HTTP协议常用状态码（Status Code）及其含义:**

1**：信息，服务器收到请求，需要请求者继续执行操作

100	继续。客户端应继续其请求
101	切换协议。服务器根据客户端的请求切换协议。只能切换到更高级的协议，例如，切换到HTTP的新版本协议


2**：成功，操作被成功接收并处理

200	请求成功。一般用于GET与POST请求
201	已创建。成功请求并创建了新的资源
202	已接受。已经接受请求，但未处理完成
203	非授权信息。请求成功。
204	无内容。服务器成功处理，但未返回内容。
205	重置内容。服务器处理成功，用户终端（例如：浏览器）应重置文档视图。
206	部分内容。服务器成功处理了部分GET请求


3**：重定向，需要进一步的操作以完成请求

300	请求的资源可在多处得到
301	删除请求数据
302	在其他地址发现了请求数据
303	建议客户访问其他URL或访问方式
304	客户端已经执行了GET，但文件未变化
305	请求的资源必须从服务器指定的地址得到
306	前一版本HTTP中使用的代码，现行版本中不再使用
307	申明请求的资源临时性删除


4**：客户端错误，请求包含语法错误或无法完成请求

400	错误请求，如语法错误
401	请求授权失败
402	保留有效ChargeTo头响应
403	请求不允许
404	没有发现文件、查询或URl
405	用户在Request-Line字段定义的方法不允许
406	根据用户发送的Accept拖，请求资源不可访问
407	类似401，用户必须首先在代理服务器上得到授权
408	客户端没有在用户指定的时间内完成请求
409	对当前资源状态，请求不能完成
410	服务器上不再有此资源且无进一步的参考地址
411	服务器拒绝用户定义的Content-Length属性请求
412	一个或多个请求头字段在当前请求中错误
413	请求的资源大于服务器允许的大小
414	请求的资源URL长于服务器允许的长度
415	请求资源不支持请求项目格式
416	请求中包含Range请求头字段，在当前请求资源范围内没有range指示值，请求也不包含If-Range请求头字段
417	服务器不满足请求Expect头字段指定的期望值，如果是代理服务器，可能是下一级服务器不能满足请求


5**：服务器错误，服务器在处理请求的过程中发生了错误

500	服务器产生内部错误
501	服务器不支持请求的函数
502	服务器暂时不可用，有时是为了防止发生系统过载
503	服务器过载或暂停维修
504	关口过载，服务器使用另一个关口或服务来响应用户，等待时间设定值较长
505	服务器不支持或拒绝支请求头中指定的HTTP版本

-------------------------------------------------------------------------------------------------

**AJAX （ Asynchronous JavaScript and XML）**

 synchronous：同步

Asynchronous：异步的

AJAX 是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。

AJAX 通过异步（Asynchronous）方式与服务器进行少量数据交换，使网页实现异步更新。这意味着可以在不重载整个页面的情况下，对网页的某些部分进行更新。


XMLHttpRequest 对象

XMLHttpRequest 对象用于在后台与服务器交换数据，所有现代的浏览器都支持该对象，它能够实现：

在后台（异步方式）向服务器发送数据

在页面已加载后从服务器 请求/接收 数据，在不重新加载页面的情况下更新网页


AJAX通过操作XMLHttpRequest对象，与服务器异步交互数据，要完整实现一个AJAX异步调用和局部刷新,通常需要以下几个步骤:

(1)创建XMLHttpRequest对象

(2)创建一个新的HTTP请求,并指定该HTTP请求的方法、URL及验证信息.

(3)发送数据

(4)接收数据

----------------------------------------------------------------------------------------

**XMLHttpRequest对象是Ajax的核心，它有很多属性和方法:**

属性:

1，readyState属性

当一个XMLHttpRequest对象被创立后，readyState属性标示了当前对象处于什么状态，可以通过对该属性的访问，来判读此次请求的状态然后做出相应的操作，
case 0 :
未初始化状态，此时，已经创建了一个XMLHttpRequest对象，但是还没有初始化。
Case 1:
准备发送状态：此时，已经调用了XMLHttpRequest对象的open()方法，并且XMLHttpRequest对象已经准备好将一个请求发送到服务器。
case 2：
已发送状态，此时已经通过send方法把一个请求发送到服务器，等待响应。
case 3:
正在接收状态，此时已经接收到HTTP响应头部信息，但是消息体部分还没有完全接收到。
case 4:
完成响应状态，此时已经完成了HttpResponse响应的接收


2.responseText属性
responseText属性包含客服端接收到的HTTP响应的文本内容，当readyState属性为0、1或2时，responseText属性包含一个空字符串：当readyState属性值为3时，响应中包含客服端还没完成的响应信息；当readyState属性值卫4，responseText属性才包含完整的响应信息。

3.responseXML属性
只有当readyState属性为4，并且响应头部的Content-Type的MIME类型被指定为XML(text/xml或者application/xml)时，该属性才会有值并且被解析成一个XML文档，否则该属性为null。如果是回传的XML文档结构不良或者未完成响应回传，该属性也会为null。responseXML属性用来描述被XMLHttpRequest解析后的XML文档的属性。


4.status属性
status属性描述了HTTP状态代码，注意，仅当readyState属性值为3（正在接受中）或者4（已加载）时，才能对此属性进行访问。如果在readyState属性值小于3时，试图去读取status属性值，将引发一个异常。


5.statusText属性
statusText属性描述了HTTP状态代码文本，并且仅当readyState属性为3或者4才可用。当readyState属性为其他值时试图存取statusText属性将引发一个异常。


方法:
1.onreadystatechange事件
每当readyState属性发生改变时，就好触发onreadystatechange事件，一般都要通过该事件来触发回传处理函数。


2.open()方法
XMLHttpRequest对象是通过调用open(method,uri,async,username,password)方法来进行初始化工作的。调用该方法将得到一个可以用来进行发送的对象，open有五个参数。
//method参数是必须的，用来指定发送请求的HTTP方法（GET,POST,PUT,DELETE,HEAD)参数要大写。
//async参数用用指定是否请求是异步的，默认是true。如果需要发送一个同步请求，需要把该参数设置为false。
//如果需要服务器验证访问用户的情况，可以设置username和password

3.send方法
调用open()方法后，就可以通过调用send()方法按照open方法设定的参数将请求进行发送。当open方法中async为true，在send（）方法调用后立即返回，否则将会中断直到请求返回。要注意的是，send方法必须在readyState为1时调用open方法以后才能调用。
在调用send方法以后到接收响应信息知情，readyState属性的值将被设置成2.一旦接收到响应信息，readyState属性将被设为3.直到响应接收完成，readyState属性的值才会被设定为4。
send()方法使用一个可选的参数，该参数可以包含可变类型的数据。用户可以使用它并通过POST方法把数据发送到服务器。另外可以显示的使用null参数调用sned方法，这与不用参数调用该方法一样。对于大多数其他的数据类型，在调用send方法之前，应该使用setRequestHeader()方法先设置Content-Type头部，如果send（data)方法中的data参数的类型为DOMString,那么数据将被编码成UTF-8，如果是Document类型，那么将使用由data.xmlEncoding指定的编码串行化该数据。

4.abort()方法
该方法可以暂停一个HttpRequest的请求发送或者HttpResponse的接收，并且将XMLHttp Request对象设置 为初始化状态。


5.setRequestHeader()方法
该方法用来设置请求的头部信息。当readyState属性为1时，可以调用opne方法后调用这个方法；否则将得到一个异常。setRequestHeader(header,value)方法包含两个参数，第一个是header键名称，后一个是键值。

6.getResponseHeader方法
此方法用于检索响应的头部值，仅能当readyState属性是3或者4（既响应头部可用以后）才可用调用该方法。否则，该方法返回一个空字符串。此外，还可以通过getAllResponse Header()方法获取所有的HttpResponse的头部信息。



----------------------------------------------------------------------------------------



----------------------------------------------------------------------------------------------------------

★理论上说，JSON就是JS对象，但两者是有区别的,书写JSON的注意事项:

1. 数组或对象之中的字符串必须使用双引号，不能使用单引号

{'user' : 'zhangsan'}//不合法
{"user": 'zhangsan'}//不合法


2. 对象的成员名称必须使用双引号

{"user" : "zhangsan"}//合法


3. 数组或对象最后一个成员的后面，不能加逗号

	[
	  {
	      "city" : "BeiJing",
	      "num" : 5,//不合法
	   }, 
	  {
	      "city" : "ShenZhen",
	      "num" : 5,//不合法
	  }
	]
4.数组或对象的每个成员的值，可以是简单值，也可以是复合值。简单值分为四种：字符串、数值（必须以十进制表示）、布尔值和null（NaN, Infinity, -Infinity和undefined都会被转为null）。复合值分为两种：符合JSON格式的对象和符合JSON格式的数组。


{"age" : ox16}//不合法,数值必须是十进制的

{"city" : undefined}//使用undefined,不合法

{"city" : null,
"getcity": function() {
 console.log("错误用法");
}}
//JSON中不能使用自定义函数或系统内置函数(如Date())


JSON格式在线整理

http://www.sojson.com/

http://tool.oschina.net/codeformat/json



