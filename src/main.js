import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import VueRouter from 'vue-router';
import { routes } from './routes';
import store from './store/store';

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
