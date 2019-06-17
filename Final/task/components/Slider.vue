<template>
  <div>
    <input
      type="range"
      min="0"
      max="200"
      v-model="rotate"
      @change="childMethod"
    />
    <input type="number" v-model="rotate" />
  </div>
</template>

<script>
export default {
  name: 'Slider',
  data() {
    return {
      rotate: 0
    }
  },
  methods: {
    childMethod() {
      this.$emit('child-event', this.rotate)
    }
  }
  //  name: 'Slider',
  //  data() {
  //    const scene = new THREE.Scene()
  //    const renderer = null
  //    const camera = new THREE.PerspectiveCamera(75, 600 / 400, 0.1, 1000)
  //    const light = new THREE.DirectionalLight(0xffffff)
  //    const geometry = new THREE.BoxGeometry(1, 1, 1)
  //    const material = new THREE.MeshNormalMaterial()
  //    const cube = new THREE.Mesh(geometry, material)
  //    return { scene, renderer, camera, light, geometry, material, cube }
  //  },
  //  mounted() {
  //    const $canvas = document.getElementById('canvas')
  //    // canvasを後付けで設定する方法あったら教えてほしいー
  //    this.renderer = new THREE.WebGLRenderer({
  //      antialias: true,
  //      canvas: $canvas
  //    })
  //
  //    this.camera.position.set(0, 0, 2)
  //    this.light.position.set(0, 0, 10)
  //    this.scene.add(this.cube)
  //    this.scene.add(this.light)
  //
  //    this.animate()
  //  },
  //  methods: {
  //    animate() {
  //      requestAnimationFrame(this.animate)
  //
  //      this.cube.rotation.x += 0.02
  //      this.cube.rotation.y += 0.02
  //
  //      this.renderer.render(this.scene, this.camera)
  //    }
  //  }
}
</script>

<style>
.square {
  width: 100px;
  height: 100px;
  background: black;
}
</style>
