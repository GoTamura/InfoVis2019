<template>
  <div id="app">
    <script-ordering-error></script-ordering-error>
    <slider @:child-event="parentMethod"></slider>
    <isosurface></isosurface>
    <call-external-function></call-external-function>
    <rotate-box></rotate-box>
    <shader-box></shader-box>
  </div>
</template>

<script>
import RotateBox from '../components/RotateBox'
import Slider from '../components/Slider'
import ShaderBox from '../components/ShaderBox'
import CallExternalFunction from '../components/CallExternalFunction'
import Isosurface from '../components/Isosurface'
import ScriptOrderingError from '../components/ScriptOrderingError'

export default {
  name: 'App',
  components: {
    RotateBox,
    Slider,
    ShaderBox,
    CallExternalFunction,
    Isosurface,
    ScriptOrderingError
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
