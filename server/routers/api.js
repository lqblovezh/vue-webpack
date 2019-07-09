const Router = require('koa-router')

const apiRouter = new Router({ prefix: '/api' })

const valiDateUser = async (ctx, next) => {
  if (!ctx.session.user) {
    ctx.status = 401
    ctx.body = 'need login'
  } else {
    await next()
  }
}

apiRouter.use(valiDateUser)

const successResponse = data => {
  return {
    success: true,
    data,
  }
}

apiRouter
  .get('/todo', async ctx => {
    const todos = await ctx.db.getAllTodos()
    ctx.body = successResponse(todos)
  })
  .post('/todo', async ctx => {
    const todo = await ctx.db.addTodo(ctx.request.body)
    ctx.body = successResponse(todo)
  })
  .put('/todo/:id', async ctx => {
    const todo = await ctx.db.updateTodo(ctx.params.id, ctx.request.body)
    ctx.body = successResponse(todo)
  })
  .delete('/todo/:id', async ctx => {
    const todo = await ctx.db.deleteTodo(ctx.params.id)
    ctx.body = successResponse(todo)
  })
  .post('/delete/completed', async ctx => {
    const todo = await ctx.db.deleteCompleted(ctx.request.body.ids)
    ctx.body = successResponse(todo)
  })

module.exports = apiRouter
