import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6c9e6c5f = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _0b173690 = () => interopDefault(import('../pages/advices/index.vue' /* webpackChunkName: "pages/advices/index" */))
const _68ae9a71 = () => interopDefault(import('../pages/contacts.vue' /* webpackChunkName: "pages/contacts" */))
const _e75371b8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _d981b302 = () => interopDefault(import('../pages/services/index.vue' /* webpackChunkName: "pages/services/index" */))
const _3a02d8a0 = () => interopDefault(import('../pages/tours/index.vue' /* webpackChunkName: "pages/tours/index" */))
const _c5bcc610 = () => interopDefault(import('../pages/advices/_id.vue' /* webpackChunkName: "pages/advices/_id" */))
const _5d12bca7 = () => interopDefault(import('../pages/services/_id.vue' /* webpackChunkName: "pages/services/_id" */))
const _c9047bd0 = () => interopDefault(import('../pages/tours/_id.vue' /* webpackChunkName: "pages/tours/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _6c9e6c5f,
    name: "about___ru"
  }, {
    path: "/advices",
    component: _0b173690,
    name: "advices___ru"
  }, {
    path: "/contacts",
    component: _68ae9a71,
    name: "contacts___ru"
  }, {
    path: "/en",
    component: _e75371b8,
    name: "index___en"
  }, {
    path: "/kk",
    component: _e75371b8,
    name: "index___kk"
  }, {
    path: "/services",
    component: _d981b302,
    name: "services___ru"
  }, {
    path: "/tours",
    component: _3a02d8a0,
    name: "tours___ru"
  }, {
    path: "/en/about",
    component: _6c9e6c5f,
    name: "about___en"
  }, {
    path: "/en/advices",
    component: _0b173690,
    name: "advices___en"
  }, {
    path: "/en/contacts",
    component: _68ae9a71,
    name: "contacts___en"
  }, {
    path: "/en/services",
    component: _d981b302,
    name: "services___en"
  }, {
    path: "/en/tours",
    component: _3a02d8a0,
    name: "tours___en"
  }, {
    path: "/kk/about",
    component: _6c9e6c5f,
    name: "about___kk"
  }, {
    path: "/kk/advices",
    component: _0b173690,
    name: "advices___kk"
  }, {
    path: "/kk/contacts",
    component: _68ae9a71,
    name: "contacts___kk"
  }, {
    path: "/kk/services",
    component: _d981b302,
    name: "services___kk"
  }, {
    path: "/kk/tours",
    component: _3a02d8a0,
    name: "tours___kk"
  }, {
    path: "/",
    component: _e75371b8,
    name: "index___ru"
  }, {
    path: "/en/advices/:id",
    component: _c5bcc610,
    name: "advices-id___en"
  }, {
    path: "/en/services/:id",
    component: _5d12bca7,
    name: "services-id___en"
  }, {
    path: "/en/tours/:id",
    component: _c9047bd0,
    name: "tours-id___en"
  }, {
    path: "/kk/advices/:id",
    component: _c5bcc610,
    name: "advices-id___kk"
  }, {
    path: "/kk/services/:id",
    component: _5d12bca7,
    name: "services-id___kk"
  }, {
    path: "/kk/tours/:id",
    component: _c9047bd0,
    name: "tours-id___kk"
  }, {
    path: "/advices/:id",
    component: _c5bcc610,
    name: "advices-id___ru"
  }, {
    path: "/services/:id",
    component: _5d12bca7,
    name: "services-id___ru"
  }, {
    path: "/tours/:id",
    component: _c9047bd0,
    name: "tours-id___ru"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
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
