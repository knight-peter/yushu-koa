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
        // 如果不报错就直接next()
        await next()
    } catch (error) {
        // 开发环境 生产环境
        if (global.config.environment === 'dev') {
            throw error
        }
        // 判断errow是否是HttpException类型
        if (error instanceof HttpException) {
            ctx.body = {
                msg: error.msg,
                error_code: error.errorCode,
                request_url: `${ctx.method} ${ctx.path}`
            }
            ctx.status = error.code
        } else {
            ctx.body = {
                msg: '出现了未知异常',
                error_code: 999,
                require: `${ctx.method} ${ctx.path}`
            }
        }
    }
}

module.exports = catchErrow
