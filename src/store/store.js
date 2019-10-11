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
    mutations: {
        // payload: {id: <int>, amount:<int>}
        reduceStockAmount(state, payload) {
            let stock = state.stocks.find(stock => {
                return stock.id === payload.id;
            });

            stock.amount -= payload.amount;
        }
    },
    actions: {
        processOrder({ commit }, order) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    commit({
                        type: 'reduceStockAmount',
                        id: order.stockId,
                        amount: order.quantity
                    });

                    resolve();
                }, 1000);
            });
        }
    },
    modules: {}
});