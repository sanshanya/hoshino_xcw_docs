# 详细配置
## 前言

在熟悉了hoshinobot的搭建后和初步使用后,你或许发现了在`_bot_.py`中有很多地方你并不了解或你并没有根据自己的实际情况进行修改,相信本篇能帮你了解基础的有关信息.

## 插件结构介绍
HoshinoBot 内文件分布如下：
> * /hoshino/modules 模块目录，每个文件夹是一组插件构成的模块
> * /hoshino/config 配置目录，每个.py文件是同名模块的配置项
> * /hoshino/modules/<my_module> 模块内容，每个文件或目录是一个 python 模块，*.py文件和目录下的__init__.py文件会被加载为模块插件


### 插件开关的方法

一般情况下,**对于部分并不复杂的插件**而言,hoshino开关某插件只需要去`__bot__.py`中的`MODULES_ON`列表去注释或取消注释某模块 ,然后重启即可.


这是一个例子.

> 假如你想关掉空调插件`aircon`
>
> > #### 接下来你需要去`XCW\hoshino\hoshino\config`找到`__bot__.py`
> >
> > 然后利用notepad++打开,然后在`__bot__.py`的末尾处(105行左右)找到了`'aircon'`,然后在`'aircon'`前加`#`最后这一行应该是`#'aircon'`.
> >
> > 再重启即可.
> >
>
>
>
> 假如你想开启空调插件`aircon`
>
> > 接下来你需要去`XCW\hoshino\hoshino\config`找到`__bot__.py`
> >
> > 然后利用notepad++打开,然后在`__bot__.py`的末尾处(105行左右)找到了`'aircon'`,然后把`'aircon'`前的`#`删除
> >
> > 再重启即可
> >



***

### 插件的默认添加方法

一般情况下,**对于部分并不复杂的插件**而言,把相应的模块的文件夹放入`XCW\hoshino\hoshino\modules`,然后再在`__bot__.py`的`MODULES_ON`列表中添加一行`'XXX'`,XXX为模块文件的名字.  

> 但事实上很多模块是比较特殊的,特殊的模块一般会有相应的`readme.txt`或`readme.md`放置在模块文件中,按照说明去做即可  
>


***

### 部分插件的配置方法  

在本bot的`__bot__.py`中,可以看到很多模块是被注释的,其中大部分模块被注释的原因是需要对模块进行再配置才能启用	  

配置方法被放在了对应的模块文件中,请阅读并配置后再开启	  

下面我会对其中一些热门模块的配置进行说明	  



#### setu_mix

基于HoshinoBot v2的涩图插件, 从 [acg-gov.com](https://acg-gov.com) 和 [lolicon.app](https://lolicon.app/) 获取图片.

> **本插件需要填写`__bot__.py`内apikeys中的**
>
> `lolicon_api = ''`和`acggov_api = ''` 
>
> lolicon_api申请指南:
>
> https://api.lolicon.app/#/setu?id=apikey
>
> acggov_api申请指南:
>
> 去https://www.acg-gov.com/   
> 注册账号,并在用户中心找到
>
> 当你填写了这俩个apikey后此插件才能正式发挥作用,此插件的详细帮助请到对应文件夹翻看`readme.md`
>



#### xcw

未完待续........









