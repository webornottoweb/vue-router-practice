<template>
    <div class="col-sm-4">
        <div class="card border-success mb-3" style="max-width: 18rem;">
            <div class="card-header bg-transparent border-success">{{ datePurchased }}</div>
            <div class="card-body text-success">
                <h5 class="card-title">{{ this.baseStock.name }}</h5>
                <p class="card-text">{{ this.baseStock.description }}</p>
            </div>
            <div class="card-footer bg-transparent border-success">{{ currency }}{{ amountPaid }}</div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
    props: ['stock'],
    computed: {
        ...mapGetters([
            'stockById'
        ]),
        ...mapState([
            'currency'
        ]),
        baseStock() {
            return this.stockById(this.stock.stockId);
        },
        datePurchased() {
            const date = new Date(this.stock.date * 1000);
            const dateOptions = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

            return date.toLocaleDateString('en-US', dateOptions);
        },
        amountPaid() {
            return this.stock.quantity * this.stock.price;
        }
    }
}
</script>

<style scoped>

</style>