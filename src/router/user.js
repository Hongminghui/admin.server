/*
 * @Date: 2022-12-15 21:54:39
 * @LastEditTime: 2022-12-31 20:45:18
 * @Description: 用户相关的接口
 */
const express = require('express');

const { sqlPool } = require('../db/index.js');
const { operTypeMap, errorMap } = require('../constants');
const { formatField } = require('../utils/index');

const router = express.Router();

/**
 * @description: 获取用户
 * @return {*}
 */
router.get('/userList', async (req, res) => {
    sqlPool.query(`SELECT * from db_user where oper_type != 3`, function (error, results) {
        if (error) {
            res.send(errorMap.dbError);
        }

        const userList = formatField(JSON.parse(JSON.stringify(results)));

        console.log({ userList });

        res.json(userList);
    });
});

router.post('/addUser', async (req, res) => {
    const sql = `INSERT INTO db_user(user_name, user_password, time_created) 
    VALUES ("11111", "11111", "2022-12-18 22:30:00");`
    sqlPool.query(`SELECT * from db_user where oper_type != 3`, function (error, results) {
        if (error) {
            res.send(errorMap.dbError);
        }

        const userList = formatField(JSON.parse(JSON.stringify(results)));

        console.log({ userList });

        res.json(userList);
    });
});

module.exports = router;