/**
 * Created by dllo on 17/4/25.
 */

var mysql = require('mysql');
var handler = require('./handlerSQLError');
var options ={
    connectionLimit:10,
    host:'localhost',
    post:3306,
    user:'root',
    password:'123456',
    database:'HTML5',
    charset:'utf8'
};

//通过选项options创建连接池
var pool = mysql.createPool(options);
//连接池可以直接执行sql语句
//与connection.query执行相同
pool.query('select * from H161217',function (error,results) {
    handler(error,'查询',results);
    //关闭连接池
    // pool.end(function (error) {
    //     handler(error,'关闭');
    // });
});

//获取一个连接
//通过该连接执行查询
pool.getConnection(function (error,connection) {
   connection.query('select * from H161217',function (error,results) {
     handler(error,'查询',results);
       //回收
       connection.release();
   });
});