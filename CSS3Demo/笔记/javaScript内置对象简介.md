### javaScript内置对象简介

● javaScript内置对象------Object对象

● javaScript内置对象------Number对象

● javaScript内置对象------Stringh对象

● javaScript内置对象------Math对象

● javaScript内置对象------Array对象

● javaScript内置对象------Date对象

=================================================================

javaScript内置对象(十个)

1、Object对象		是所有JavaScript对象的超类(基类)

2、Array对象			数组对象--定义数组属性和方法

3、Boolean对象		布尔对象--布尔值相关

4、Date对象			日期对象--日期时间相关

5、Error对象			错误对象--处理程序错误

6、Function对象		函数对象--定义函数属性和方法

7、Math对象			数学对象--各种数学运算工具(不是构造函数)

8、Number对象		数字对象--定义数字属性和方法

9、RegExp对象		正则表达式对象--定义文本匹配与筛选规则

10、String对象		字符串对象--定义字符串属性和方法

-----------------------------------------------------------------

**Object对象**

Object对象，是所有JavaScript对象的超类(基类),也就是说JS中的所有对象都是由Object对象衍生的。

Object对象主要用于将任意数据封装成对象形式。

自定义对象

在Js中，除了Array、Date、Number等内置对象外，开发者还可以自己创建对象

创建对象：

1、通过new运算符,得到对象实例:

var obj=new Object（）


2、对象直接量(字面量):

var obj= { name:"zhangsan", age:22, work:["老师","工人","司机"] };

获取 / 设置对象属性值：

通过 “.” 语法 获取/设置 属性值,例:obj.name   

通过 "[]" 获取/设置 属性值, 例:obj["name"]


设置对象属性值：

通过 "." 语法设置属性值,必须是合法字符(不能以数字开头，可以用 _ 或 $ )   

通过 "[]" 设置属性值, 可以是非合法字符 例如： obj["123name"]   obj["my-name"]

工厂模式

定义一个函数,函数内部声明一个对象,并将这个对象return出去,通过调用这个函数,得到该对象。

此种方法可以快速制造相同的对象(每个对象没有内在联系)

-----------------------------------------------------------------------------------

**Number对象(数字对象)**

toString()	把数字转换成字符串

toFixed()	把数字转换成字符串,结果的小数点后有指定位数的数字 (四舍五入)

---------------------------------------------------------------

**String对象(字符串对象)**


转义符:

反斜杠"\"用来将一些被语言占用的标点符号,转义成字符串

\'	单引号

\"	双引号

\\	反斜杠

\n	换行符

\r	回车符


属性:length

方法:

slice(start[,end])    start开始索引--end结束索引

substr(start[,length])  start开始，取length个字符

split([separator[,limit]])  按条件分割字符串，保存成数组

indexOf(substr[,startIndex]) （string）在父串中首次出现的位置，从0开始！没有返回-1

lastIndexOf(substr[,startindex]) 倒序查找

charAt(index)  指定索引的字符

toLowerCase 转小写

toUpperCase 转大写


支持正则方法:

search	第一个与正则相匹配的字符串的索引（不执行全局匹配，它将忽略标志 g）

match	找到一个或多个正则表达式的匹配，没有找到任何匹配的文本，返回 null，否则，返回一个数组，

replace	替换与正则表达式匹配的子串  

split 也支持正则


★注意:

所有String的方法，都是以返回值方式，返回新字符串，不会破坏原字符串。

-------------------------------------------------------------------

**Math对象(数学对象)**

用来执行一些数学任务

Math.abs(x)	返回数的绝对值 （去除正负）

Math.random()	随机数 

Math.round(x)	四舍五入

Math.floor(x)	下舍入(向下取整计算 例 x:12.53 → 12)

Math.ceil(x)	上舍入(向上取整计算 例: x:12.23 → 13)

Math.max(x,y)	返回 x 和 y 中的最高值

Math.min(x,y)	返回 x 和 y 中的最低值

Math.cos(x)	返回x的余弦

Math.sin(x)	返回x的正弦

Math.sqrt(x)	返回x的平方根

★注意:

Math.floor和parseInt差异:

Math.floor 只对number类型数字进行下舍入

parseInt 不但可以处理number类型数字,还可以处理字符串，并返回一个整数


Math.floor(-0.1)  结果：-1

parseInt(-0.1)    结果： 0

随机数详解:

Math.random()  随机数   0－1  1不会出现

Math.random()*10          0-10之间的浮点数 0 ---9.xxx

parseInt(Math.random()*10) 取整后 0-9

parseInt(Math.random()*11)    0-10 

parseInt(Math.random()*10+1)  1-10


Math.random()*(90-30)+30       30－90  parseInt后 不包含90

Math.random()*(大－小)+小 parseInt后 不包含“大”

--------------------------------------------------------------------------

**Array对象(数组对象)**

属性:length

方法:

concat() 连接两个或更多的数组，并返回结果

join() 把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔

pop() 删除并返回数组的最后一个元素

push() 向数组的末尾添加一个或更多元素，并返回新的长度

reverse() 颠倒数组中元素的顺序

shift() 删除并返回数组的第一个元素

slice() 从某个已有的数组返回选定的元素

sort() 对数组的元素进行排序  参数必须是个函数 arr.sort( function(a,b){ return a-b } )

splice() 插入 删除  替换  数组的元素

toString() 把数组转换为字符串，并返回结果


★注意:

shift  pop  push  splice，将会对原数组进行修改(破坏)。

--------------------------------------------------------------

**Date对象(日期对象)**

getFullYear()	返回年

getMouth()	返回月份0--11

getDate()	返回某一天。

getDay()	返回星期0-6

getHours()	返回小时

getMinutes()	返回分钟

getSeconds()	返回秒

getTime()	返回1970年1月1日午夜到指定日期（字符串）的毫秒数


setFullYear()	设置年份

setMouth()	设置月

setDate()	设置天

setHours()	设置小时

setMinutes()	设置分钟

setSeconds()	设置秒

setTime()	使用毫秒的形式设置时间对象


★注意:

setDay( 这个真没有!!!!,星期是通过设定日期自动计算的 )

-----------------------------------------------------------------

1秒=1000毫秒

1分钟=60秒

1小时=60分=3600秒

1天=24小时=1440分=86400秒


实例： setFullYear(year，month，day)	

year：必需，表示年份的四位整数

month：可选,介于 0 ~ 11 之间：如果不填，取系统当月

-1 为去年的最后一个月
12 为明年的第一个月
13 为明年的第二个月

day：可选,表示月中某一天的数值。如果不填，取系统当日

用本地时间表示。介于 1 ~ 31 之间：

0 为上个月最后一天

-1 为上个月最后一天之前的天数

如果当月有31天：

32 为下个月的第一天

如果当月有30天：

32 为下一个月的第二天

例：现在时间：13:11:43

```
var date = new Date(2012, 2, 15, 13, 11, 43);
//2012年3月15日 13:11:43
date.setFullYear(2013, 5);
//2013年6月15日 13:11:43
date.setFullYear(2012, 20, 5);
//2013年9月5日 13:11:43
```


判断闰年:

	function runYear(year){
	  if(year%4==0 && year%100!=0 || year%400==0){
	      return true;
	  }
	};
