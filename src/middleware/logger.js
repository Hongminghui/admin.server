/*
 * @Date: 2022-11-22 23:02:51
 * @LastEditTime: 2022-12-15 21:28:35
 * @Description: 日志记录
 */
const fs = require('fs');
const morgan = require('morgan');

const loggerWriter = fs.createWriteStream('./log/access.log', {
    flags: 'a+'
});

function logger(app) {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    console.log({ year, month, day });
    app.use(morgan(function (tokens, req, res) {
        return [
            tokens.method(req, res),
            tokens.url(req, res),
            tokens.status(req, res),
            tokens.res(req, res, 'content-length'), '-',
            tokens['response-time'](req, res), 'ms'
        ].join(' ')
    }, { stream: loggerWriter }));
}

module.exports = logger;
