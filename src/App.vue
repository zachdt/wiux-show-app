<template>
  <div id="App">
      <h1 id="appTitle">Show Schedule</h1>
      <landing/>
  </div>
</template>

<script>

import Landing from './components/landing.vue'

export default {
  name: 'App',
  components: {
    Landing
  }
}
</script>

<style>
@import 'style/app.css';
</style>
