var express = require('express')
var app = express();
var path = require("path");

/*
*1.解释：
*   设置静态文件区域，外界可以直接通过url对文件进行访问
* 2.方法：
*   express.static('public') 意为开放public目录下的文件给外界
*   app.use 挂载完才能真正的提供访问
*/
app.use("/static",express.static('public')); //访问路径 localhost:8085/static/view.html
//app.use(express.static('public')); //不要static路径, 则访问路径是 localhost:8085/view.html

//设置一个get请求的路由
app.get("/",function(req,res){
  res.send("hello")
})

app.engine('html', require('ejs').__express);
app.set('views', './internal_resource/template_resource/') //设置模板文件的位置
app.set('view engine', 'ejs');  //设置模板后缀，ejs引擎模板的后缀是ejs。如果不想文件的后缀为ejs，可通过下面的步骤修改
/*
  app.engine('html', require('ejs').__express);  //意为设置后缀为html的文件使用ejs模板引擎解析，同时引擎的名称也为html
  app.set('view engine','html');                //
*/
app.get("/test/template",function(req,res){
  res.render('template',{
    user:JSON.stringify('Labin')
  })
})


//测试sendFile函数
app.get("/test/sendfile",function(req,res){
  var options = {
    root: './internal_resource/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };

  //提供绝对路径
  //res.sendFile("D:\\workspace\\sublime\\study_node\\internal_resource\\testSendFile.html");

  //提供相对于root的路径
  res.sendFile('testSendFile.html', options, function (err) {
    if (err) {
      console.log('error');
    } else {
      console.log('success');
    }
  });
})

//开启服务监听本地8085端口
var port = 8085;
app.listen(port, function () {
  console.log('Example app listening on port '+port+'!');
});


