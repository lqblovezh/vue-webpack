import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    props: true,
    component: Todo
  },
  {
    path: '/login',
    component: () => import('../views/login/login.vue')
    // component: Login
  }
]
