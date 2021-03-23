import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _390dfc94 = () => interopDefault(import('../pages/messages.vue' /* webpackChunkName: "pages/messages" */))
const _40869203 = () => interopDefault(import('../pages/mypage.vue' /* webpackChunkName: "pages/mypage" */))
const _5184db40 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _28744abc = () => interopDefault(import('../pages/hashtag/_id/index.vue' /* webpackChunkName: "pages/hashtag/_id/index" */))
const _68b207d6 = () => interopDefault(import('../pages/post/_id/index.vue' /* webpackChunkName: "pages/post/_id/index" */))
const _18015585 = () => interopDefault(import('../pages/test/_id.vue' /* webpackChunkName: "pages/test/_id" */))
const _5456e448 = () => interopDefault(import('../pages/test/_id/index.vue' /* webpackChunkName: "pages/test/_id/index" */))
const _7881f3c1 = () => interopDefault(import('../pages/user/_id/index.vue' /* webpackChunkName: "pages/user/_id/index" */))
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
    path: "/messages",
    component: _390dfc94,
    name: "messages"
  }, {
    path: "/mypage",
    component: _40869203,
    name: "mypage"
  }, {
    path: "/signup",
    component: _5184db40,
    name: "signup"
  }, {
    path: "/hashtag/:id",
    component: _28744abc,
    name: "hashtag-id"
  }, {
    path: "/post/:id",
    component: _68b207d6,
    name: "post-id"
  }, {
    path: "/test/:id?",
    component: _18015585,
    children: [{
      path: "",
      component: _5456e448,
      name: "test-id"
    }]
  }, {
    path: "/user/:id",
    component: _7881f3c1,
    name: "user-id"
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
