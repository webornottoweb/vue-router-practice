<template>
    <div>
        <ul class="nav nav-pills justify-content-center">
            <li class="nav-item">
                <router-link class="nav-link" active-class="active" to="/" exact>News</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" active-class="active" to="/profile">Profile</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" active-class="active" to="/projects">Projects</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>