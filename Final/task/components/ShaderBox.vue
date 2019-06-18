<template>
  <canvas id="canvas_shaderBox" width="600" height="400"></canvas>
</template>

<script>
import * as THREE from 'three'
import vertexshaderImported from './phong.vert'
import fragmentshaderImported from './phong.frag'

export default {
  name: 'RotateBox',
  data() {
    const scene = new THREE.Scene()
    const renderer = null
    const camera = new THREE.PerspectiveCamera(75, 600 / 400, 0.1, 1000)
    //  const light = new THREE.DirectionalLight(0xffffff)
    const light = new THREE.PointLight()
    light.position.set(5, 5, 5)
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    //  const material = new THREE.MeshNormalMaterial()
    const material = new THREE.ShaderMaterial({
      vertexColors: THREE.VertexColors,
      vertexShader: vertexshaderImported,
      fragmentShader: fragmentshaderImported,
      uniforms: {
        light_position: { type: 'v3', value: light.position },
        camera_position: { type: 'v3', value: camera.position }
      }
    })
    const cube = new THREE.Mesh(geometry, material)
    return { scene, renderer, camera, light, geometry, material, cube }
  },
  mounted() {
    const $canvas = document.getElementById('canvas_shaderBox')
    // canvasを後付けで設定する方法あったら教えてほしいー
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: $canvas
    })

    this.camera.position.set(0, 0, 2)
    this.light.position.set(0, 0, 10)
    this.scene.add(this.cube)
    this.scene.add(this.light)

    this.animate()
  },
  methods: {
    animate() {
      requestAnimationFrame(this.animate)

      this.cube.rotation.x += 0.02
      this.cube.rotation.y += 0.02

      this.renderer.render(this.scene, this.camera)
    }
  }
}
</script>

<style></style>
