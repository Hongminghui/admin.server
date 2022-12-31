/*
 * @Date: 2022-12-18 20:26:08
 * @LastEditTime: 2022-12-22 21:59:34
 * @Description: 定义错误码的异常
 */
const errorMap = {
    dbError: { code: 1000, text: '数据库异常' },
    loginError: { code: 1001, text: '用户名或密码错误' }
};

module.exports = errorMap;