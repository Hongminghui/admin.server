/*
 * @Date: 2022-11-30 20:28:34
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-12-18 20:57:02
 * @Description: 数据库的配置
 */

const mysql = require("mysql");

const mysqlConfig = {
    host: "localhost",
    user: "root",
    password: "@hmh6861860",
    port: "3306",
    database: "cms",
};

const sqlPool = mysql.createPool(mysqlConfig); // 使用连接池，避免开太多的线程，提升性能

module.exports = sqlPool;

