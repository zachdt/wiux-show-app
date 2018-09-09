<template>
  <div id="app">
      <show-array></show-array>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {'show-array': require('@/components/show-array.vue')}
}
</script>

<style>
@import 'bootstrap/dist/css/bootstrap.css';
@import 'bootstrap-vue/dist/css/bootstrap-vue.cs';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
