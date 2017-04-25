/**
 * Created by dllo on 17/4/25.
 */
/**
 * Created by dllo on 17/4/24.
 */
var express = require('express');
var mysql = require('mysql');
var options = {
    connectionLimit:3,
    host:'localhost',
    post:3306,
    user:'root',
    password:'123456',
    database:'HTML5',
    charset:'utf8'
};
var pool = mysql.createPool(options);


// 2.通过express 创建路由
var router = express.Router();
// 3.路由访问, 回调函数
router.post('/',function (req,res) {

    var username = req.body.username;
    var password = req.body.password;

    var user = {
        username :username,
        password: password
    };
    console.log(user.username);
    pool.query('update userdata SET password = ' + password +'where username ='+username,function (error) {
        if(error){
            console.log('更新失败');
        }else{
                res.send('更新失败');
            }

    })




});
// 4.模块导出 路由
module.exports = router;