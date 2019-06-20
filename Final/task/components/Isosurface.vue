<template>
  <input type="button" @click="mymyfunc()" />
</template>

<script>
export default {
  name: 'CallExternalFunction',
  head() {
    return {
      script: [
        {
          type: 'text/javascript',
          src: 'three.min.js',
          async: false,
          defer: false,
          body: true
        },
        {
          type: 'text/javascript',
          src: 'https://naohisas.github.io/KVS.js/Build/KVS.min.js',
          async: false,
          defer: false,
          body: true
        },
        {
          type: 'text/javascript',
          src: 'TrackballControls.js',
          async: false,
          defer: false,
          body: true
        },
        {
          type: 'text/javascript',
          src: 'https://naohisas.github.io/KVS.js/Build/KVS2THREE.js',
          async: false,
          defer: false,
          body: true
        },
        {
          type: 'text/javascript',
          src: 'https://naohisas.github.io/KVS.js/Source/KVSLobsterData.js',
          async: false,
          defer: false,
          body: true
        },
        {
          type: 'text/javascript',
          src: 'Isosurfaces.js',
          async: false,
          defer: false,
          body: true
        },
        {
          type: 'text/javascript',
          src: 'Bounds.js',
          async: false,
          defer: false,
          body: true
        },
        {
          type: 'text/javascript',
          src: 'w09_main_ex02.js',
          async: false,
          defer: false,
          body: true
        }
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
