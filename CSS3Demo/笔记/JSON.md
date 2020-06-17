####JSON

=======================================================

JSON(JavaScript Object Notation)  javascript对象标记

JSON 是一种轻量级的数据交换格式,它基于ECMAScript的一个子集

JSON 使用 JavaScript 语法来描述数据对象（JSON本身就是对象）

JSON 仍然独立于语言和平台

JSON 解析器 和JSON 库支持许多不同的编程语言

JSON 内部用 键(key) / 值(value) 进行描述，没有 索引值 和 length属性

JSON 值可以是以下几种类型：数字 字符串 布尔值 数组 对象 null

JSON 键(key)的命名，通常使用英文

JSON 值（value）中的中文，通常使用unicode编码，例如：{"name":"\u5f20\u4e09"}→ {"name":"张三"}


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
	     }
	]
4.数组或对象的每个成员的值，可以是简单值，也可以是复合值。简单值分为四种：字符串、数值（必须以十进制表示）、布尔值和null（NaN, Infinity, -Infinity和undefined都会被转为null）。复合值分为两种：符合JSON格式的对象和符合JSON格式的数组。

```
{"age" : ox16}//不合法,数值必须是十进制的
{"city" : undefined}//使用undefined,不合法
{"city" : null,
"getcity": function() {
   console.log("错误用法");
  }
}
//JSON中不能使用自定义函数或系统内置函数(如Date())
```

**JSON 数据的遍历**

for in 循环

例:

	var obj={"name":"zhangsan","age":18}
	  for(var key in json){    //key 代表键名
	  alert( key+":"+ json[key] )   //分别弹出:  name:zhangsan    age:18
	}
---------------------------------------------------------------------------------------

JSON 序列化：

对象只有在JS语句运行时才有意义，对象是以字符串形式保存在电脑中，使用该数据时，再转换成对象。

序列化(Serialization)是将对象的状态信息转换为可以存储或传输的形式的过程。

JSON方法：（IE8以上）

序列化对象：对象→字符串

var obj = { x: 1, y: 2}

JSON.stringify( obj ); //  {"x":1,"y":2}：返回一个字符串

反序列化成对象： 字符串→对象

var str = '{ "name":"zhangsan","age":18 }'; // 字符串的键(key)要用引号框起来

var Obj= JSON.parse(str);

console.log(Obj.name); // => zhangsan：输出对象属性x的值


兼容IE6/7/8

JSON官方兼容插件：Json2.js

-----------------------------------------------------------------------------------------

JSON在线格式化：
http://tool.chinaz.com/tools/jsonformat.aspx

http://tool.oschina.net/codeformat/json


JSON在线压缩：
http://www.bejson.com/zhuanyi/