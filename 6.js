//使用express 模块简化web服务器端开发

const http = require('http');

const express=require('express');

let app= new express();
http.createServer(app).listen(8080);

/*
* res.sendFile(__dirname+'路径')
* */

app.get('/index',(req,res)=>{
    res.sendFile(__dirname+'/static/index.html')
});
app.get('/logo',(req,res)=>{
    res.sendFile(__dirname+'/static/logo.png')
});
app.get('jq',(req,res)=>{
    res.sendFile(__dirname+'/static/jquery.js')
});
app.get('/user/register',(req,res)=>{
    let n=req.query.uname;
    let p=req.query.upwd;
    let sql='INSERT INTO mf_user VALUES(null,?,?,null)';
    require('./pool').query(sql,[n,p],(err,result)=>{
        res.send('New User Id:'+result.insertId);
    });

});