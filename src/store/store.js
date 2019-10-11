import Vue from 'vue';
import Vuex from 'vuex';

import stocks from '../data/stocks';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        stocks
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {}
});