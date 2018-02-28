//使用http模块创建web服务器：
//接收客户端HTTP请求，返回HTTP响应消息

const http = require('http');

var server = http.createServer((req, res)=>{
    //1读取请求消息中的数据

    //2向客户端返回响应消息
    res.writeHeader(200,{
        "Server": "Node-TEDU",
        "Content-Type": "text/html;charset=UTF-8",
        "Cache-Control": "no-cache"
    });
    res.write("<h2>WELCOME</h2>");
    res.write("<hr>");
    res.write("<p>版权所有 TEDU.CN</p>");
    res.end();  //告诉客户端响应消息主体已经结束
});
server.listen(8080);
