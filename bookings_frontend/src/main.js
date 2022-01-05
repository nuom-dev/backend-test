import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import router from './router/router.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from "axios";
import Vuex from 'vuex';
import store from './store/store.js';


Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

axios.defaults.headers.common["Authorization"] = "Bearer "+store.getters.getAuthToken;

//Acts as an interceptor that acts like a middleware between every request response
//helps in checking when the token is expired and redirects to student login again in order to get a new token
axios.interceptors.response.use(response => {
    return response;
}, err => {
    const {
        response: { status, data}
    } = err;


    if (status === 401 && data.message === "login is required") {
        Promise.reject(err);
        return router.push({ name: "StudentLogin" });
    }
});


new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
