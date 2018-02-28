/*
* 用户模块
* */
const pool = require('./pool');

function register() {
    let sql = 'INSERT INTO mf_user VALUES(NULL,?,?,?)';
    pool.query(sql, ['ding', '778899', '13501111111'], (err, result) => {
        if (err) throw err;
        console.log(result);
    });

}

//
// function login() {
//
// }
//
// function checkUname() {
//
// }
//
// function checkPhone() {
//
// }

//导出上述成员方法供外界使用
module.exports.register = register;
// module.exports.login = login;
// module.exports.checkUname = checkUname;
// module.exports.checkPhone = checkPhone;