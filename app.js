// 加载模块
var express=require('express')
var bodyParser=require('body-parser')

// 创建服务器
var app=express()

// 在express中使用art-template
app.engine('html',require('express-art-template'))

// 公开指定目录
app.use('/public',express.static('./public/'))

// 配置body属性
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// 模板对象
var comments=[
    {
        name:'张三',
        message:'天气不错',
        dateTime:'2019-4-16 00:00:00'
    },
    {
        name:'张三',
        message:'天气不错',
        dateTime:'2019-4-16 00:00:00'
    },
    {
        name:'张三',
        message:'天气不错',
        dateTime:'2019-4-16 00:00:00'
    },
    {
        name:'张三',
        message:'天气不错',
        dateTime:'2019-4-16 00:00:00'
    },
]

// 根路径
app.get('/',function(req,res){
    res.render('index.html',{comments:comments})
})

// 发表评论页面
app.get('/post',function(req,res){
    res.render('post.html')
})

// 提交评论
app.post('/post',function(req,res){
    var comment=req.body
    var dd=new Date()
    var y=dd.getFullYear()
    var m=(dd.getMonth()+1).toString().padStart(2,'0')
    var d=dd.getDate().toString().padStart(2,'0')
    var h=dd.getHours().toString().padStart(2,'0')
    var mm=dd.getMinutes().toString().padStart(2,'0')
    var s=dd.getSeconds().toString().padStart(2,'0')
    comment.dateTime=`${y}-${m}-${d} ${h}:${mm}:${s}`
    comments.unshift(comment)
    res.redirect('/')
})

app.listen(5000,function(){
    console.log('running...')
})