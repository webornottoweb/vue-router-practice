<template>
    <div class="col-sm-4">
        <div class="card">
            <transition name="fade">
                <div class="card-overlay card-overlay-await" v-if="buying" key="await">
                    <div class="spinner-border text-light" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                <div class="card-overlay card-overlay-error" v-if="error" key="error">
                    <span class="error-message">{{ errorMessage }}</span>
                </div>
            </transition>
            <img class="card-img-top" :src="img" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{ stock.name }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Price: {{ currency }}{{ stock.price }} ({{ stock.amount }} remaining)</h6>
                <p class="card-text">{{ stock.description }}</p>
                <div class="d-flex flex-row justify-content-between">
                    <input type="number" class="form-control flex-fill" style="width: 150px;" placeholder="Amount" v-model.number="quantity" />
                    <button class="btn btn-primary buy-btn" @click="buyStock" :disabled="quantity <= 0 || !Number.isInteger(quantity)">Buy</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    props: ['stock'],
    data() {
        return {
            image: null,
            quantity: 0,
            buying: false,
            error: false,
        };
    },
    computed: {
        ...mapState([
            'currency'
        ])
    },
    created() {
        this.img = "https://picsum.photos/200?random&t=" + (new Date().getTime());
    },
    methods: {
        buyStock() {
            this.buying = true;

            const order = {
                stockId: this.stock.id,
                quantity: this.quantity,
                price: this.stock.price
            };

            this.$store.dispatch('processOrder', order)
                .catch(() => {
                    this.buying = false;
                    this.error = true;
                    this.errorMessage = 'You don\'t have enough money';
                    
                    setTimeout(() => this.error = false, 2000);
                })
                .finally(() => {
                    this.quantity = 0;
                    this.buying = false;
                });
        }
    }
}
</script>

<style scoped>
    .card {
        margin: 10px;
        display: inline-block;
    }
    .buy-btn {
        margin-left: 10px;
    }
    .card-overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
        opacity: .9;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .card-overlay-await {
        background-color: lightblue;
    }
    .card-overlay-error {
        background-color: lightcoral;
    }
    .fade-enter-active, .fade-leave-active {
        transition: all .3s ease;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    .error-message {
        color: lightcyan;
    }
</style>