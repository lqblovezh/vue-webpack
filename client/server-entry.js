import creatApp from './create-app'

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router } = creatApp()
    router.push(context.url)
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      if (!matchedComponents.length) {
        return reject(new Error('no component matched'))
      }
      context.meta = app.$meta()
      resolve(app)
    }, reject)
  })
}
