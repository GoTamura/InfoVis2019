<template>
  <div id="app">
    <script-ordering-error></script-ordering-error>
  </div>
</template>

<script>
import ScriptOrderingError from '../components/ScriptOrderingError'

export default {
  name: 'App',
  components: {
    ScriptOrderingError
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
