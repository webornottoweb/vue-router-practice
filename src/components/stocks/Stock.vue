<template>
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" :src="img" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{ stock.name }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Price: {{ currency }}{{ stock.price }}</h6>
            <p class="card-text">{{ stock.description }}</p>
            <div class="d-flex flex-row justify-content-between">
                <input type="number" class="form-control flex-fill" style="width: 150px;" placeholder="Amount" v-model.number="quantity" />
                <button class="btn btn-primary buy-btn" @click="buyStock" :disabled="quantity <= 0 || !Number.isInteger(quantity)">Buy</button>
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
            quantity: 0
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
            const order = {
                stockId: this.stock.id,
                quantity: this.quantity,
                price: this.stock.price
            };

            console.log(order);
            this.quantity = 0;
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
</style>