<template>
  <input type="button" @click="myfunc()" />
</template>

<script>
export default {
  name: 'ScriptOrderingError',
  head() {
    return {
      script: [
        {
          type: 'text/javascript',
          //  src: 'parent.js'
          src:
            'https://gist.githubusercontent.com/GoTamura/5ac641548375e7bbf0b429e5deb5a3f2/raw/6efe83f4c281a535440d83e35ab9416c481c4666/parent.js'
        },
        {
          type: 'text/javascript',
          //  src: 'child.js'
          src:
            'https://gist.githubusercontent.com/GoTamura/37e9f2822a40d5f725fd25f9f4b8e363/raw/8e5e525a77e887409324c304ce05942de124c89e/child.js'
        }
      ]
    }
  },
  methods: {
    myfunc: function() {
      alert(window.helloworld)
    }
  }
}
</script>

<style></style>
