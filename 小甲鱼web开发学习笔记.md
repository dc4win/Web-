[TOC]

# <u>**小甲鱼web开发学习笔记**</u>

[markdown基础](https://github.com/Sakiyary/Markdown-Typora-VSCode-Doc)

[课堂案例演示](http://demo.fishc.com)

[HTML5速查宝典](http://man.fishc.com/html5)

[CSS3速查宝典](http://man.fishc.com/css3)

---

## **第一课**

[视频教程](https://www.bilibili.com/video/BV1QW411N762/?p=3&spm_id_from=pageDriver&vd_source=bcc1d9a7193b5cc64f0719559c9e2c2f)

### 1、[html5声明](https://man.ilovefishc.com/pageHTML5/!DOCTYPE.html)

 `<!DOCTYPE html>`是一个声明，表示该文档是由 HTML5 进行编写的。

 在 HTML 4.01 中， 声明引用 DTD，因为 HTML 4.01 基于 SGML。DTD 规定了标记语言的规则，这样浏览器才能正确地呈现内容。

 HTML5 不基于 SGML，所以不需要引用 DTD。

 从html5开始到以后所有版本，声明将一直使用该格式


### 2、[标签`<head>`](https://man.ilovefishc.com/pageHTML5/head.html)

`<head>` 标签用于定义文档的头部，它是所有头部元素的容器。

`<head>` 中的元素可以引用脚本、指示浏览器在哪里找到样式表、提供元信息等等。

`<head>`标签中可使用的标签有：`<base>`,`<link>`,`<meta>`,`<script>`,`<title>`。

`<title>`是head部分中唯一必需的标签。

### 3、[标签`<title>`](https://man.ilovefishc.com/pageHTML5/title.html)

`<title>`标签用于定义文档的标题。

浏览器通常将其内容显示在浏览器窗口的标题栏或状态栏上。

如果把网页加入用户的链接列表或者收藏夹、书签列表，`<title>`元素的内容将成为该网页链接的默认名称。

### 4、[标签`<body>`](https://man.ilovefishc.com/pageHTML5/body.html)

`<body>`标签定义文档的主体。

body 元素包含文档的所有内容（比如文本、超链接、图像、表格和列表等等）。

### 5、[标签`<h1>-<h6>`](https://man.ilovefishc.com/pageHTML5/h.html)

`<h1>` - `<h6>` 标签可定义标题。

由于 h 元素拥有确切的语义，因此请慎重地选择恰当的标签层级来构建文档的结构。因此，**请不要利用标题标签来改变同一行中的字体大小**。

相反，应当使用层叠样式表定义来达到漂亮的显示效果。
