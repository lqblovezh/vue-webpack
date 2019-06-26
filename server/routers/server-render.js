const ejs = require('ejs')

module.exports = async (ctx, render, template) => {
  ctx.headers['Content-Type'] = 'text/html'
  const context = { url: ctx.path }
  try {
    const appString = await render.renderToString(context)

    const { meta } = context.meta.inject()

    const html = ejs.render(template, {
      appString,
      style: context.renderStyles(),
      scripts: context.renderScripts(),
      title: meta.text(),
    })
    ctx.body = html
  } catch (error) {
    console.log('render error', error)
    throw error
  }
}
