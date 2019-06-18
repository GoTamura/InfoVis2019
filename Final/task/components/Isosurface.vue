<template>
  <input type="button" @click="mymyfunc()" />
</template>

<script>
export default {
  name: 'CallExternalFunction',
  head() {
    return {
      script: [
        { src: 'three.min.js' },
        { src: 'TrackballControls.js' },
        { src: 'https://naohisas.github.io/KVS.js/Build/KVS.min.js' },
        { src: 'https://naohisas.github.io/KVS.js/Build/KVS2THREE.js' },
        { src: 'https://naohisas.github.io/KVS.js/Source/KVSLobsterData.js' },
        { src: 'Isosurfaces.js' },
        { src: 'Bounds.js' },
        { src: 'w09_main_ex01.js' }
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
