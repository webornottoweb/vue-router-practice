<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" tag="a" to="/">Stock trader</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <router-link class="nav-item" to="/portfolio" tag="li"><a class="nav-link">Portfolio</a></router-link>
                <router-link class="nav-item" to="/stocks" tag="li"><a class="nav-link">Stocks</a></router-link>
            </ul>
            <ul class="navbar-nav my-2 my-lg-0">
                <li class="nav-item">
                    <a class="nav-link">End day</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Save & Load
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Save</a>
                        <a class="dropdown-item" href="#">Load</a>
                    </div>
                </li>
                <li class="navbar-text">
                    <span class="badge badge-info">
                        Ballance: {{ currency }}1000
                    </span>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState([
            'currency'
        ])
    }
}
</script>