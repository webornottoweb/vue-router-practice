<template>
    <div class="row portfolio-stocks">
        <app-stock v-for="stock in portfolio" :key="stock.id" :stock="stock"></app-stock>
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
            'portfolio'
        ])
    }
}
</script>

<style scoped>
    .portfolio-stocks {
        margin-top: 20px;
    }
</style>