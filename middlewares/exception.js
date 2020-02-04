/* 全局异常处理函数 */
/*
异常返回信息
HTTP Status Code 2**,4**,5**
message
error_code 详细，开发者自己定义 10001 20003
request_url 当前请求的url
*/
/*
已知型错误 参数传错等等

未知型错误 程序潜在错误 无意识 根本就不知道哪出错了

使用try catch处理已知错误和未知错误
*/
const {
    HttpException
} = require('../core/http-exception')

const catchErrow = async (ctx, next) => {
    try {
        await next()
    } catch (error) {
        if (error instanceof HttpException) {
            ctx.body = {
                msg: error.msg,
                error_code: error.errorCode,
                request_url: `${ctx.method} ${ctx.path}`
            }
            ctx.status = error.code
        } else {
            ctx.body = {
                msg: 'we made a mistake'
            }
        }
    }
}

module.exports = catchErrow
