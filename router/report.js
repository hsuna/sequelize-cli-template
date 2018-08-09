// 上报接口
const Router = require('koa-router')

const router = new Router()

router.post('/report/loading', (ctx, next) => {
    ctx.body = 'path: /report/loading'
})

router.post('/report/exception', (ctx, next) => {
    ctx.body = 'path: /report/exception'
})


module.exports = router