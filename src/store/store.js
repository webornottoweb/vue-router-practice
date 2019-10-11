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
        },
        reduceBallance(state, payload) {
            state.ballance -= payload.amount;
        }
    },
    actions: {
        processOrder({ state, commit }, order) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const orderPrice = order.quantity * order.price;

                    if (state.ballance < orderPrice) {
                        reject();
                        return;
                    }

                    commit({
                        type: 'reduceStockAmount',
                        id: order.stockId,
                        amount: order.quantity
                    });

                    commit({
                        type: 'reduceBallance',
                        amount: orderPrice
                    })

                    resolve();
                }, 1000);
            });
        }
    },
    modules: {}
});