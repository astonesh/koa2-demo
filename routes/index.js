const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})
router.get('/one', async (ctx, next) => {
  ctx.response.status = 200;
  ctx.body = {
    title: 'koa2 one'
  }
})
router.get('/two', async (ctx, next) => {
  ctx.response.status = 200;
  ctx.body = {
    title: 'koa2 one'
  }
  ctx.response.set('redirect11', './one/one')
})
router.get('/thr', async (ctx, next) => {
  ctx.response.status = 301;
  ctx.response.set('location', 'http://localhost:3000/one')
})
module.exports = router
