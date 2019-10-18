import Vue from 'vue';
import Vuex from 'vuex';

import stocks from '../data/stocks';
import { isToday } from '../helpers/date';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        stocks,
        currency: '$',
        ballance: 1000,
        portfolio: []
    },
    getters: {
        todayPortfolio(state) {
            // semanthically this is a list of stocks without profit calculation
            return state.portfolio.filter(_ => _.profit === undefined);
        },
        // payload: {id: <int>}
        stockById: (state) => (id) => {
            return state.stocks.find(_ => _.id === id);
        }
    },
    mutations: {
        // payload: {id: <int>, amount:<int>}
        reduceStockAmount(state, payload) {
            let stock = state.stocks.find(stock => {
                return stock.id === payload.id;
            });

            stock.amount -= payload.amount;
        },
        // payload: {amount:<int>}
        reduceBallance(state, payload) {
            state.ballance -= payload.amount;
        },
        // payload: {}
        addPortfolio(state, payload) {
            state.portfolio.push(payload);
        },
        randomizeStocksCosts(state, payload) {
            console.log(Math.random() * 100);
            const positive = Math.random() * 100 > 50;
            state.stocks.forEach(_ => {
                if (positive) {
                    _.price += Math.floor(Math.random() * 10);
                } else {
                    _.price -= Math.floor(Math.random() * 10);
                }
            });
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
                    });

                    commit({
                        type: 'addPortfolio',
                        date: Math.floor(Date.now() / 1000),
                        ...order
                    });

                    resolve();
                }, 1000);
            });
        },
        endDate({ state, commit }) {
            // randomize all stocks costs
            commit('randomizeStocksCosts');
            // calculate profit for each today purchase
        }
    },
    modules: {}
});