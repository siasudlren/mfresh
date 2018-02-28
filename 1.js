const mysql=require('mysql');

// 最基本使用方法: 不用连接池
var conn=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    port:3306,
    database:'mfresh'
});
// 创建连接是  '同步方法'
// console.log(conn);
let sql='select * from mf_user';
conn.query(sql,(err,result)=>{
    if(err) throw err;
    console.log('查询完成');
    // console.log(result);
    let str=JSON.stringify(result);
    console.log(str);
    conn.end();
});
console.log('脚本执行完成');