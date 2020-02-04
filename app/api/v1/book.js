const Router = require('koa-router')
const router = new Router()


router.get('/v1/book/latest',(ctx,next)=>{
    ctx.body = {key:'book'}
    throw new Error('API Exception')
    // AOP 面向切面编程
    //  监听错误
    // 输出一段有意义的提示信息

    // KOA 中间件
})

module.exports = router
