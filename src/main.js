import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import VueLazyload from 'vue-lazyload'
import { DropdownMenu, DropdownItem } from 'vant';

// with options
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(VueLazyload)
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: 'dist/error.png',
    loading: 'dist/loading.gif',
    attempt: 1
})
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')