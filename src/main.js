import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { routes } from './routes';

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
