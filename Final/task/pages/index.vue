<template>
  <div id="app">
    <slider v-on:child-event="parentMethod"></slider>
    <rotate-box></rotate-box>
    <shader-box></shader-box>
  </div>
</template>

<script>
import RotateBox from '../components/RotateBox'
import Slider from '../components/Slider'
import ShaderBox from '../components/ShaderBox'

export default {
  name: 'App',
  components: {
    RotateBox,
    Slider,
    ShaderBox
  },
  methods: {
    parentMethod(fromChildVal) {
      alert(fromChildVal)
    }
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
