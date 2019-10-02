<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Routing</h1>
    <hr>
    <app-navbar></app-navbar>
    <hr>
    <router-view class="block bordered"></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'app',
  components: {
    appNavbar: Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.block {
  display: inline-block;
  width: 400px;
  padding: 10px;
  margin: 10px;
  height: 100%;
}

.bordered {
  border: 1px solid lightcoral;
  border-radius: 4px;
}
</style>
