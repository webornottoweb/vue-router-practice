<template>
  <div id="app" class="container">
    <app-header></app-header>
      <div class="row content">
        <div class="col">
          <router-view></router-view>
        </div>
      </div>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  components: {
    appHeader: Header
  }
}
</script>

<style scoped>
  body {
    padding: 30px;
  }
  .content {
    margin-left: 0px!important;
  }
</style>
