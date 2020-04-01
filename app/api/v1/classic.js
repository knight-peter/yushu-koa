const Router = require('koa-router')
const router = new Router()

const {
    HttpException,
    ParameterException
} = require('../../../core/http-exception')
const {
    PositiveIntegerValidator
} = require('../../validators/validator')


router.post('/v1/:id/classic/latest', (ctx, next) => {
    // header
    // body
    // params指:id参数
    const path = ctx.params
    const query = ctx.request.query
    const headers = ctx.request.header
    const body = ctx.request.body



    const v = new PositiveIntegerValidator().validate(ctx)
    // const id = v.get('body.b.e', parsed = false)
    ctx.body = body
})

module.exports = router
