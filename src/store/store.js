import Vue from 'vue';
import Vuex from 'vuex';

import stocks from '../data/stocks';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        stocks,
        currency: '$',
        ballance: 1000
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {}
});