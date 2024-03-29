# **git命令实现文件上传下载**

---

## 1、git上传本地仓库到github

第一步：在需要上传的文件夹内`git bash here`

第二步：`git init`初始化

> (如果不是第一次，可省略)

第三步：`git add .`将当前目录下所有的文件全部加入队列

第四步：`git commit -m "commit info"`将当前目录文件全部commit

第五步：`git remote add origin https://github.com/dc4win/Web-.git`链接到远程仓库地址

> (如果不是第一次，可省略)

第六步：`git push -u origin master`将本地的 master 分支推送到 origin 主机的 master 分支

> 带上-u 参数其实就相当于记录了push到远端分支的默认值，这样当**下次我们还想要继续push的这个远端分支的时候推送命令就可以简写成*git push*即可**。	

## 2、git pull远程仓库

第一步：在本机目标文件夹内`git bash here`

第二步：`git init`初始化

> (如果不是第一次，可省略)

第三步：`git remote add origin https://github.com/dc4win/Web-.git`链接到远程仓库地址

> (如果不是第一次，可省略)

第四步：`git pull origin master`

## 常见错误或问题汇总

①`error: src refspec main does not match any error: failed to push some refs to 'https:*//github.com/surymy/vue-manage.git'*` 

> 错误原因：本地（一般是master）和gitub（一般是main）仓库名称不一样，导致不能关联
>
> 解决方法：在git push或pull前使用`git branch -m master main`来修改当前分支

②git速度非常慢，只有几kb甚至byte

> 错误原因：github.global.ssl.fastly.net域名被限制了
>
> 解决方法：在[ip查询网站](https://www.ipaddress.com/)查询`github.global.ssl.fastly.net` 以及`github.com`所对应的ip,并添加到hosts文件(目录：C:\Windows\System32\drivers\etc\hosts)，添加方式：
>
> ![image-20221219111703370](images/image-20221219111703370.png)注意：搜索出github.global.ssl.fastly.net有四个ip，可以分别测试使用。

③使用科学上网仍然出现超时现象

> 解决方案：更新设置代理
>
> 第一步：取消原代理
>
> ```
> git config --global --unset http.proxy
> git config --global --unset https.proxy
> ```
>
> 第二步：更新DNS（错误也没问题）
>
> ```
> ipconfig /flushdns
> ```
>
> 第三步：设置代理
>
> ```
>  git config --global https.proxy http://127.0.0.1:1080
>  git config --global https.proxy https://127.0.0.1:1080
> ```
>
> 地址和端口号在 `windows→设置→代理`中自行查看

④修改了某文件并已提交入库，你在pull之前修改了本地该文件，等你修改完代码再pull时，这时会报错如下错误：`error: Your local changes to the following files would be overwritten by merge`	解决方案：

​	1、保留修改（慎用）：

```
git stash #封存修改
git pull origin main 
git stash pop #把修改还原
```

> **git stash**：备份当前工作区内容，从最近的一次提交中读取相关内容，让工作区保证和上次提交的内容一致。同时，将当前工作区内容保存到Git栈中
>
> **git pull**：拉取服务器上当前分支代码
> **git stash pop**：从Git栈中读取最近一次保存的内容，恢复工作区相关内容。同时，用户可能进行多次stash操作，需要保证后stash的最先被取到，所以用栈（先进后出）来管理；pop取栈顶的内容并恢复
> **git stash list**：显示Git栈内的所有备份，可以利用这个列表来决定从那个地方恢复。
> **git stash clear**：清空Git栈

​	2、废弃修改

```
git reset --hard 
git pull origin master
```

