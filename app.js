const Koa = require('koa')
const parser = require('koa-bodyparser')

const InitManager = require('./core/init')
// 全局异常处理函数
const catchError = require('./middlewares/exception')

const app = new Koa()
app.use(catchError)
app.use(parser())
InitManager.initCore(app)



app.listen(3000)
console.log('Koa服务已开启')
