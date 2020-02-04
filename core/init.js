const requireDirectory = require("require-directory");
const Router = require('koa-router')

class InitManager {
    // 入口方法
    static initCore(app) {
        // 将koa实例绑定到InitManager的app属性上
        InitManager.app = app
        InitManager.initLoadRouters()
        InitManager.loadHttpException()
    }
    static initLoadRouters() {
        // 参数：第一个参数固定参数module，第二个参数要加载的模块的文件路径，第三个参数：每次加载一个参数执行的函数
        // 在node.js中process.cwd()方法可以获取项目的根路径
        const apiDirectory = `${process.cwd()}/app/api`
        requireDirectory(module, apiDirectory, {
            visit: whenLoadModule
        })
        // 当obj是Router时,执行注册路由
        function whenLoadModule(obj) {
            if (obj instanceof Router) {
                InitManager.app.use(obj.routes())
            }
        }
    }
    static loadHttpException() {
        const errors = require('./http-exception')
        global.errs = errors
    }
}

module.exports = InitManager
