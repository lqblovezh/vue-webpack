import Router from 'vue-router'

import routes from './routes'

export default () => {
  return new Router({
    routes,
    mode: 'history', //vue-router 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。如果不想要很丑的 hash，我们可以用路由的 history 模式，这种模式充分利用 history.pushState API 来完成 URL 跳转而无须重新加载页面。
    // base: '/base/',
    linkActiveClass: 'active-link', //全局配置 <router-link> 的默认“激活 class 类名”。
    linkExactActiveClass: 'exact-active-link', //全局配置 <router-link> 精确激活的默认的 class。
    scrollBehavior(to, from, savedPosition) {
      //路由跳转后是否滚动
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    },
    // fallback: true // 当浏览器不支持 history.pushState 控制路由是否应该回退到 hash 模式。默认值为 true。
    // parseQuery (query) { // 提供自定义查询字符串的解析/反解析函数。覆盖默认行为。

    // },
    // stringifyQuery (obj) {

    // }
  })
}
