import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
            path: '/',
            name: 'About',
            component: Home,
            meta: { isShowNav: true },
        },
        {
            path: '/about',
            name: 'About',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ '../views/About.vue'),
            meta: { isShowNav: true },

        },
        {
            path: '/Sreach',
            name: 'Sreach',
            // route level code-splitting
            // this generates a separate chunk (Sreach.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "Sreach" */ '../views/Sreach.vue'),
            meta: { isShowSreach: true },

        },
        {
            path: '/VideoMian',
            name: 'VideoMian',
            // route level code-splitting
            // this generates a separate chunk (VideoMian.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "VideoMian" */ '../views/VideoMian.vue'),
            meta: { isShowNav: false },
        }
    ]
    //push
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

//replace
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(to) {
    return VueRouterReplace.call(this, to).catch(err => err)
}

const router = new VueRouter({
    routes
})

export default router