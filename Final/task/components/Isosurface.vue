<template>
  <input type="button" @click="mymyfunc()" />
</template>

<script>
export default {
  name: 'CallExternalFunction',
  head() {
    return {
      script: [
        { src: '/InfoVis2019/Final/task/dist/three.min.js' },
        { src: '/InfoVis2019/Final/task/dist/TrackballControls.js' },
        { src: 'https://naohisas.github.io/KVS.js/Build/KVS.min.js' },
        { src: 'https://naohisas.github.io/KVS.js/Build/KVS2THREE.js' },
        { src: 'https://naohisas.github.io/KVS.js/Source/KVSLobsterData.js' },
        { src: '/InfoVis2019/Final/task/dist/Isosurfaces.js' },
        { src: '/InfoVis2019/Final/task/dist/Bounds.js' },
        { src: '/InfoVis2019/Final/task/dist/w09_main_ex01.js' }
      ]
    }
  },
  methods: {
    mymyfunc: function() {
      window.main()
    }
  }
}
</script>

<style></style>
