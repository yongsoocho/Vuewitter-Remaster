import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6c42a5b7 = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _1c29ba8b = () => interopDefault(import('../pages/admin2.vue' /* webpackChunkName: "pages/admin2" */))
const _668449de = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _5184db40 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _d4fcc230 = () => interopDefault(import('../pages/user/yongsoo.vue' /* webpackChunkName: "pages/user/yongsoo" */))
const _3ad351ba = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _6c42a5b7,
    name: "admin"
  }, {
    path: "/admin2",
    component: _1c29ba8b,
    name: "admin2"
  }, {
    path: "/profile",
    component: _668449de,
    name: "profile"
  }, {
    path: "/signup",
    component: _5184db40,
    name: "signup"
  }, {
    path: "/user/yongsoo",
    component: _d4fcc230,
    name: "user-yongsoo"
  }, {
    path: "/",
    component: _3ad351ba,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
