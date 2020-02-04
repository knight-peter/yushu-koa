const Router = require('koa-router')
const router = new Router()

const {
    HttpException,
    ParameterException
} = require('../../../core/http-exception')


router.post('/v1/:id/classic/latest',(ctx,next)=>{
    // header
    // body
    // params指:id参数
    const path = ctx.params
    const query = ctx.request.query
    const headers = ctx.request.header
    const body = ctx.request.body
    if(true){
        // 动态 面向对象方式 一个类
        const error = new ParameterException()
        /* const error = new Error('为什么错误')
        error.errorCode = 10001
        error.status = 400
        error.requestUrl = `${ctx.method} ${ctx.path}` */
        throw error
    }
    ctx.body = body
})

module.exports = router
