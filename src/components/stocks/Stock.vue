<template>
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" :src="img" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{ name }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Price: {{ price }}</h6>
            <p class="card-text">{{ description }}</p>
            <div class="d-flex flex-row justify-content-between">
                <input type="number" class="form-control flex-fill" style="width: 150px;" placeholder="Amount" />
                <button class="btn btn-primary buy-btn">Buy</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['name', 'price', 'description'],
    data() {
        return {
            image: null
        };
    },
    created() {
        this.img = "https://picsum.photos/200?random&t=" + (new Date().getTime());
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