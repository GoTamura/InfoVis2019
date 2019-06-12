<template>
  <div id="app">
    <rotate-box></rotate-box>
  </div>
</template>

<script>
import RotateBox from '../components/RotateBox'

export default {
  name: 'App',
  components: {
    RotateBox
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
</style>
