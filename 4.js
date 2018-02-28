const http=require('http');

let  server=http.createServer((req,res)=>{
    console.log('请求方式: ',req.method);
    console.log('请求地址: ',req.url);
    console.log('协议版本: ',req.httpVersion);
    console.log('请求头部: ',req.headers);
    res.end('this is a res......')
});

server.listen(8080);