<template>
    <div class="row stocks-store">
        <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Stock from './Stock';

export default {
    components: {
        appStock: Stock
    },
    computed: {
        ...mapState([
            'stocks'
        ])
    }
}
</script>

<style scoped>
    .stocks-store {
        margin-top: 20px;
    }
</style>