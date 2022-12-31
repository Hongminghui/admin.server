/*
 * @Date: 2022-12-15 21:55:39
 * @LastEditTime: 2022-12-24 23:12:36
 * @Description: 权限接口
 */
const express = require('express');

const { sqlPool } = require('../db/index.js');
const { errorMap } = require('../constants');

const router = express.Router();

/**
 * @description: 登陆接口的响应
 * @return {*}
 */
router.post('/login', async (req, res) => {
    const { body: { userName, password } } = req;

    sqlPool.query(`SELECT * from db_user where user_name="${userName}"`, function (error, results) {
        if(error) {
            res.json(errorMap.dbError);
        }
        
        const userInfo = JSON.parse(JSON.stringify(results))[0];
        
        const dbPassword = userInfo?.user_password;
        
        console.log({ dbPassword, password });

        if(dbPassword !== password) {
            res.json(errorMap.loginError);
            
        } else {
            res.json({
                text: '登陆成功',
            });
        }
    });
});

module.exports = router;