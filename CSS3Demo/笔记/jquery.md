### jquery

=================================================================

一．什么是 jQuery

jQuery是一个JavaScript库，它通过封装原生的JavaScript函数得到一整套定义好的方法。

其宗旨是——WRITE LESS,DO MORE,写更少的代码,做更多的事情。

它的作者是John Resig，于2006年创建的一个开源项目，随着越来越多开发者的加入jQuery已经集成了JavaScript、CSS、DOM和Ajax于一体的强大功能。

它可以用最少的代码，完成更多复杂而困难的功能，从而得到了开发者的青睐。

JQuery的优点:小巧、方便、功能强大。插件丰富、开源、免费。


二.Jquery的功能和优势

jQuery作为 JavaScript 封装的库，他的目的就是为了简化开发者使用 JavaScript。主要功能有以下几点：


1.一款轻量级的js库

2.丰富的DOM选择器

3.链式表达式

4.事件、样式、动画支持

5.Ajax操作支持

6.跨浏览器兼容

7.插件扩展开发

8.可扩展性强

JQuery提供了扩展接口：JQuery.extend(object),可以在JQuery的命名空间上增加新函数。JQuery的所有插件都是基于这个扩展接口开发的。

jQuery 最大的优势，就是特别的方便。比如模仿 CSS 获取 DOM，比原生的 JavaScript要方便太多。

并且在多个 CSS 设置上的集中处理非常舒服，而最常用的 CSS 功能又封装到单独的方法，感觉非常有心。

最重要的是 jQuery 的代码兼容性非常好，你不需要总是头疼着考虑不同浏览器的兼容问题。


三.JQuery优点:

1.JQuery实现脚本与页面的分离

2.最少的代码做最多的事情

3.性能支持比较好

4.它是一个“标准” 

5.插件发开

6.节约学习成本

7.让JS编程变得有趣 


四.JQuery的缺点:

1.不能向后兼容。
每一个新版本不能兼容早期的版本。举例来说，有些新版本不再支持某些selector，新版jQuery却没有保留对它们的支持，而只是简单的将其移除。这可能会影响到开发者已经编写好的代码或插件。

2.插件兼容性。
与上一点类似，当新版jQuery推出后，如果开发者想升级的话，要看插件作者是否支持。通常情况下，在最新版jQuery版本下，现有插件可能无法正常使用。开发者使用的插件越多，这种情况发生的几率也越高。我有一次为了升级到jQuery 1.3，不得不自己动手修改了一个第三方插件。 

3.多个插件冲突。
在同一页面上使用多个插件时，很容易碰到冲突现象，尤其是这些插件依赖相同事件或selector时最为明显。这虽然不是jQuery自身的问题，但却又确实是一个难于调试和解决的问题。 

4.jQuery的稳定性。
jQuery没有让浏览器崩溃，这里指的是其版本发布策略。jQuery 1.3版发布后仅过数天，就发布了一个漏洞修正版1.3.1。他们还移除了对某些功能的支持，可能会影响许多代码的正常运行。我希望类似修改不要再出现。 

5.对动画和特效的支持差。
在大型框架中，jQuery核心代码库对动画和特效的支持相对较差。但是实际上这不是一个问题。目前在这方面有一个单独的jQuery UI项目和众多插件来弥补此点。

2.0、3.0版不再支持IE 6/7/8，相较1.x版，代码小了12%，代码运行效率更高！

--------------------------------------------------------------------------------------
jquery选择器

基本

```
#id
element 
.class
.selector1,selector2,selectorN 
```

层级
ancestor descendant 
parent > child 
prev + next 
prev ~ siblings 

基本
:first 
:not(selector) 
:even 
:odd 
:eq(index) 
:gt(index) 
:lang1.9+ 
:last 
:lt(index) 
:header 
:animated 
:focus 
:root1.9+ 
:target1.9+ 

内容
:contains(text) 
:empty 
:has(selector) 
:parent 

可见性
:hidden 
:visible

属性
[attribute] 
[attribute=value] 
[attribute!=value] 
[attribute^=value] 
[attribute$=value] 
[attribute*=value] 
[attrSel1][attrSel2][attrSelN]

子元素
:first-child 
:first-of-type1.9+ 
:last-child 
:last-of-type1.9+ 
:nth-child 
:nth-last-child()1.9+ 
:nth-last-of-type()1.9+ 
:nth-of-type()1.9+ 
:only-child1.9+ 
:only-of-type1.9+ 


表单
:input 
:text 
:password 
:radio 
:checkbox 
:submit 
:image 
:reset 
:button 
:file 
:hidden 

表单对象属性
:enabled 
:disabled 
:checked 
:selected 

