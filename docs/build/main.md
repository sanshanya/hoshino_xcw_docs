# 部署流程

## 配置环境

#### 配置服务器

云服务器请放行9222，8080端口

#### 下载环境包

> 通过[百度网盘链接](https://pan.baidu.com/s/1DvsKWA9jt8lIJwKQEi7CFg)下载
>
> 提取码：2333

<s>然后放在一个你觉得可以用完就删的地方</s>

#### 安装环境包中的软件

1. winrar-x64-590scp.exe(默认安装，也就是一直点确定)

2. VC_redist.x86.exe(默认安装)

3. npp.7.9.3.Installer.exe(默认安装)

4. Git-2.31.1-64-bit.exe(默认安装)

5. ChromeSetup.exe(默认安装)

6. python-3.8.8-amd64.exe(**第一步要勾选add python 3.8 to path**,其余默认即可)

7. 如果你以前装过python或其他,建议先卸载

8. node-v14.16.1-x64 与 latest.msi(yarn)(**这一步可选**)

   ###### PS：可以考虑安装Mirosoft Visual C++ 14.0,如果你后续部署出现了奇怪的错误

#### 下载本体及其他内容

> 通过[百度网盘链接](https://pan.baidu.com/s/1DvsKWA9jt8lIJwKQEi7CFg)下载
>
> 提取码：2333

1. 找个合适的地方，打开powershell，输入
    `git clone https://github.com.cnpmjs.org/sanshanya/hoshino_xcw.git`
    并回车

2. 文件传输完毕后，来到网盘下载res文件夹，go-cqhttp文件夹，yobot文件夹,cq-picsearcher-bot文件夹，放入hoshino_xcw/XCW，即与Hoshino同目录

[图片待放]

## 配置go-cqhttp

在`XCW\go-cqhttp`
右键使用notepad++编辑`config.yml`

[图片待放]

修改第4，5行，即是添加bot的QQ账号与密码


配置好后保存即可




**然后双击`quikstart.bat`,按照指示成功完成账号登录,并关闭**

你可能会遇到需要滑块验证码的情况，请参考[文档](slider.md)



## 配置hoshino

对hoshino的简单配置,如果想了解更多请前往[hoshino](https://github.com/Ice-Cirno/HoshinoBot)

#### **装依赖**

来到XCW\装依赖

推荐选择`A号套餐`
先双击`升级pip.bat`,等待其自动关闭
再双击`装依赖.bat`,等待其自动关闭

> 如果选用B号套餐
>
> 请自行按说明使用
>


#### 修改配置文件

首先来到XCW\Hoshino

**重要**：将`__bot__示例.py`改名为`__bot__.py`并覆盖`XCW\Hoshino\hoshino\config`  文件夹 内的`__bot__.py`


使用notepad++编辑`__bot__.py`,根据注释进行修改.

**首次使用hoshino可暂时只修改第13行,即修改最高权限用户**

保存后关闭即可



推荐修改的配置文件部分如下:

```  python
'''---拥有最高权限的用户们的QQ---'''
SUPERUSERS = [1234567895]    # 填写超级用户的QQ号，可填多个用半角逗号","隔开
PYS ={123214342}            #高级权限用户的QQ号
###################################
'''---------昵称及网址----------'''
NICKNAME = r'镜华|小仓唯|露娜|at,qq=124324234'       # 设置bot的昵称，at，qq=xxxxxxxx处为bot的QQ号,呼叫昵称等@bot
IP = '333.33.33.3'                                      #修改为你的服务器ip,推荐修改
public_address = '333.33.33.3:8080'                     #修改为你的服务器ip+端口,推荐修改
PassWord = '123456'                                           #登录一些只限维护人知道密码的网页
###################################
```



## 启动方法

##### 标准方法

在`XCW\Hoshino`有`run.py`文件,通过打开powershell输入`python run.py`启动.

同时在`XCW\go-cqhttp`有`quikstart.bat`,双击启动.

**注意**:不要只启动一个



##### 简易方法

暂无



## 配置yobot

1.0版本后，hoshino_xcw选择不再缝合yobot，因此你需要独立配置yobot

1. 来到go-cqhttp的`config.yml`文件,把第116行的`true`改为`false`
2. 来到XCW\yobot,双击yobot.exe,即可运行yobot

然后私聊Bot     `登录`     进入设置项进行设置。



## 语音模块配置

1. 安装环境包里的ffmpeg
2. 下载并解压网盘中的语音文件拓展，并放到正确位置

以上文件均内含说明,请按说明配置.



## 配置[cq-picsearcher-bot](https://github.com/Tsuk1ko/cq-picsearcher-bot)

1. 来到`hoshino_xcw\XCW\cq-picsearcher-bot`,修改config.jsonc的18与209行

2. 在当前文件夹的powershell中输入

   ```
   npm i -g yarn --registry=https://registry.npm.taobao.org
   yarn config set registry https://registry.npm.taobao.org --global
   yarn config set disturl https://npm.taobao.org/dist --global
   yarn
   ```

3. 等待安装完成后关闭

4. 在当前文件夹的powershell中输入

   ```
   # 运行
   npm start

   # 停止
   npm stop

   # 重启
   npm restart

   # 查看日志（平时日志也会保存在 logs 文件夹内）
   npm run log
   ```





## 部署失败？

如果无法理解本bot部署方法，推荐：

> 1. 选择[一键包](https://github.com/pcrbot/xcwbot-installer/)
>
> 2. 选择[hoshino原版](https://github.com/Ice-Cirno/HoshinoBot)
> 3. 选择[地河教你搭bot](https://blog.di.he.cn/2020/09/22/deploy-a-priconne-bot-on-linux/)
> 4. 选择[yobot](https://yobot.win/)



当然也可以找我付费代搭或付费咨询（不推荐）
地址:https://afdian.net/@sanshanya

前往群聊[一个名字经常改的群](https://jq.qq.com/?_wv=1027&k=c9WQGns1)去询问群主（不推荐）

查看[常见问题](https://github.com/sanshanya/hoshino_xcw/wiki/常见问题) (推荐)

放弃(推荐!)