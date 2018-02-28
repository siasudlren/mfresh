//静态文件的响应,也可以提供动态响应
const http = require('http');
const url = require('url');
const fs = require('fs');


let server = http.createServer((req, res) => {
    let urlObj = url.parse(req.url, true);
    let path = urlObj.pathname; //请求地址
    if (path === '/index') {
        fs.readFile('./static/index.html', (err, buf) => {
            res.writeHeader(200, {
                "Content-Type": "text/html"
            });
            res.end(buf);
        })
    } else if (path === '/logo') {
        fs.readFile('./static/log.png', (err, buf) => {
            res.writeHeader(200, {
                "Content-Type": "image/png"
            });
            res.end(buf);
        })
    } else if (path === '/jq') {
        fs.readFile('./static/jquery.js', (err, buf) => {
            res.writeHeader(200, {
                "Content-Type": "application/javascript"
            });
            res.end(buf);
        })
    } else if (path === '/user/register') {
        let urlObj = url.parse(req.url, true);
        const pool = require('./pool');
        let uname = urlObj.query.uname;
        let upwd = urlObj.query.upwd;
        let sql='INSERT INTO mf_user VALUES(NULL,?,?,NULL)';

        pool.query(sql, [uname, upwd], (err, result) => {
            if (err) throw err;
            res.end('new user id:'+result.insertId);
        })
    } else {
        res.writeHeader(400, {
            "Content-Type": "text/html"
        });
        res.end('页面不存在:404'+path);
    }
});

server.listen(8080);