<template>
    <div>
        <app-stock v-for="stock in stocks" :key="stock.id" :name="stock.name" :price="stock.price" :description="stock.description"></app-stock>
    </div>
</template>

<script>
import Stock from './Stock';

export default {
    data() {
        return {
            stocks: [
                { id: 1, name: 'Blizzard', description: 'Gaming company (WoW)', price: 100 },
                { id: 2, name: 'Riot', description: 'Gaming company (LoL)', price: 120 },
                { id: 3, name: 'Valve', description: 'Gaming company (Dota2)', price: 90 },
            ]
        };
    },
    components: {
        appStock: Stock
    }
}
</script>

<style scoped>
</style>