<template>
    <div>
        Profile page
        <button class="btn btn-info" @click="showProjects">Show projects</button>
    </div>
</template>
<script>
export default {
    methods: {
        showProjects() {
            this.$router.push('/projects');
        }
    }
}
</script>
<style scoped>

</style>