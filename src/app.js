/*
 * @Date: 2022-12-15 21:47:32
 * @LastEditTime: 2022-12-25 22:40:02
 * @Description: 程序的入口
 */
const express = require("express");

const { authRouter, userRouter } = require('./router/index.js');

const app = express();

app.use(express.json()); // 必须加上，才能在req中解析到参数
app.use(express.urlencoded({ extended: false })); // 和请求中的Content-Type对应

//设置允许跨域的域名，*代表允许任意域名跨域
app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); //允许的header类型
    res.header("Access-Control-Allow-Headers", "Content-type"); //跨域允许的请求方式
    res.header(
        "Access-Control-Allow-Methods",
        "PUT,POST,GET,DELETE,OPTIONS,PATCH"
    ); //可选，用来指定本次预检请求的有效期，单位为秒。在此期间，不用发出另一条预检请求。
    res.header("Access-Control-Max-Age", 1728000); //预请求缓存20天
    next();
});

app.use('/auth', authRouter);
app.use('/user', userRouter);

app.get("/", (req, res) => res.send("Hello World!"));


app.listen(8080, () => console.log("App is listening on port 8080!"));

