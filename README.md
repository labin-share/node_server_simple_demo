# node_server_simple_demo
this is a easier demo to study how to illustrate a node server


node 最简入门教程

一.利用express创建服务器
1.解释:express是node的一个web框架，可以使用它在本地监听端口，创建服务，定义http访问的路由
2.使用:引入express模块，新建express()实例，调用listen方法监听端口，使用route,get,post等来定义路由。

二.利用express提供静态文件的访问
1.解释:外界如果需要对html,js,css等文件进行访问，就需要用express进行设置，设置哪一个块区域的文件是可以供外界访问的
2.使用:比如新建一个名为public的目录，里面放置能够提供给外界访问的文件，如html，js，css等。然后利用express.static 对该目录开放给外界

三.用res.render()返回渲染文件
1.解释：如果返回的页面不在服务端预先做一些处理，那直接用上面静态文件的方法提供静态的html即可。但如果需要在返回html之前做一些处理，就需要利用模板引擎。
       模板引擎有多种，比如jagde，ejs等等
2.使用：一下用ejs举例。有两个步骤，设置模板文件所在目录；设置模板的解析引擎。一般模板都有固定的后缀，设置了模板引擎之后利用res.rendder('template')只需要写文件名即可
       app.set('views', './internal_resource')
       app.set('view engine', 'ejs')

四.用res.sendFile()返回指定文件
1.解释：其实所谓的外界可直接访问静态文件，是当你设置了一个目录为静态文件目录的时候，访问那里的文件，express会自动的把那些文件以文件流的方式返回。而
       res.sendFile()函数是可以手动的返回哪个文件（也是文件流的原理），不管这个文件是否在静态目录下。
2.使用：res.sendFile()的路径有两种，一种是绝对路径，一种是相对于option参数里面所提供的root路径。例子见代码


