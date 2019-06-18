<template>
  <input type="button" @click="mymyfunc()" />
</template>

<script>
export default {
  name: 'CallExternalFunction',
  head() {
    return {
      script: [{ src: 'function.js' }]
    }
  },
  methods: {
    mymyfunc: function() {
      window.myfunc()
      alert(window.helloworld)
    }
  }
}
</script>

<style></style>
