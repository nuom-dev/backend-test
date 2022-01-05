import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'

Vue.use(VueRouter)

const router = new VueRouter({ mode: 'history', base: process.env.BASE_URL, routes })
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in -> if not, redirect to login page.
        // https://router.vuejs.org/guide/advanced/meta.html
        // meta: { requiresAuth: true }
        // TODO: build this to check auth on private pages
        // if (!auth.loggedIn()) {
        //     next({
        //         path: '/login',
        //         query: { redirect: to.fullPath }
        //     })
        // } else {
        //     next()
        // }
        next()
    } else {
        next() // make sure to always call next()!
    }
})

export default router
