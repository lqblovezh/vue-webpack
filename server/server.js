const Koa = require('koa')
const send = require('koa-send')
const path = require('path')

const app = new Koa()

const pageRouter = require('./routers/dev-ssr')

const isDev = process.env.NODE_ENV === 'development'

app.use(async (ctx, next) => {
  try {
    console.log(`request width path${ctx.path}`)
    await next()
  } catch (error) {
    if (isDev) {
      ctx.body = error.message
    } else {
      ctx.body = 'please try agring later'
    }
  }
})

app.use(async (ctx, next) => {
  if (ctx.path == '/favicon.ico') {
    await send(ctx, '/favicon.ico', { root: path.join(__dirname, '../') })
  } else {
    await next()
  }
})

app.use(pageRouter.routes()).use(pageRouter.allowedMethods())

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 3333

app.listen(PORT, HOST, () => {
  console.log(`server is listening on ${HOST}:${PORT}`)
})
