<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'

const container = ref<HTMLDivElement | null>(null)
let frameId = 0
let cleanup = () => {}

onMounted(() => {
  if (!container.value) return
  const el = container.value
  const width = () => el.clientWidth
  const height = () => el.clientHeight

  // Resolve the current foreground color from the theme.
  // White in dark mode, near-black in light mode. Avoids relying on browsers
  // resolving oklch() through a probe (some return the literal back).
  const resolveColor = () => {
    const dark = document.documentElement.classList.contains('dark')
    return new THREE.Color(dark ? 0xffffff : 0x0a0a0a)
  }

  const themeColor = resolveColor()
  const isDark = document.documentElement.classList.contains('dark')

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(45, width() / height(), 0.1, 100)
  camera.position.set(0, 0, 6)

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(width(), height())
  renderer.setClearColor(0x000000, 0)
  el.appendChild(renderer.domElement)

  // Light mode needs much higher opacity — black hairlines on white anti-alias
  // into invisibility at low alpha, so we crank them up.
  const opacities = isDark
    ? { wire: 0.55, core: 0.04, edges: 0.9, points: 0.5 }
    : { wire: 0.85, core: 0.02, edges: 0.35, points: 0.35 }

  // Inner solid faceted core
  const coreGeo = new THREE.IcosahedronGeometry(1.0, 0)
  const coreMat = new THREE.MeshBasicMaterial({
    color: themeColor,
    transparent: true,
    opacity: opacities.core,
  })
  const core = new THREE.Mesh(coreGeo, coreMat)
  scene.add(core)

  // Edges of core
  const edgesGeo = new THREE.EdgesGeometry(coreGeo)
  const edgesMat = new THREE.LineBasicMaterial({
    color: themeColor,
    transparent: true,
    opacity: opacities.edges,
  })
  const edges = new THREE.LineSegments(edgesGeo, edgesMat)
  scene.add(edges)


  // Particle field
  const particleCount = 600
  const positions = new Float32Array(particleCount * 3)
  for (let i = 0; i < particleCount; i++) {
    const r = 4 + Math.random() * 6
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
    positions[i * 3 + 2] = r * Math.cos(phi)
  }
  const pGeo = new THREE.BufferGeometry()
  pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  const pMat = new THREE.PointsMaterial({
    color: themeColor,
    size: isDark ? 0.02 : 0.035,
    transparent: true,
    opacity: opacities.points,
  })
  const points = new THREE.Points(pGeo, pMat)
  scene.add(points)

  // Update materials when theme toggles. Watch the `dark` class on <html>.
  const applyTheme = () => {
    const c = resolveColor()
    const dark = document.documentElement.classList.contains('dark')
    const ops = dark
      ? { core: 0.04, edges: 0.9, points: 0.5 }
      : { core: 0.02, edges: 0.35, points: 0.35 }
    coreMat.color.copy(c)
    edgesMat.color.copy(c)
    pMat.color.copy(c)
    coreMat.opacity = ops.core
    edgesMat.opacity = ops.edges
    pMat.opacity = ops.points
  }

  const themeObserver = new MutationObserver(applyTheme)
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  })

  // Mouse parallax
  const target = { x: 0, y: 0 }
  const onMouse = (e: MouseEvent) => {
    const rect = el.getBoundingClientRect()
    target.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    target.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
  }
  window.addEventListener('mousemove', onMouse)

  const onResize = () => {
    camera.aspect = width() / height()
    camera.updateProjectionMatrix()
    renderer.setSize(width(), height())
  }
  window.addEventListener('resize', onResize)

  const clock = new THREE.Clock()
  const animate = () => {
    const t = clock.getElapsedTime()
    edges.rotation.x = -t * 0.1
    edges.rotation.y = -t * 0.18
    core.rotation.copy(edges.rotation)
    points.rotation.y = t * 0.03

    camera.position.x += (target.x * 0.6 - camera.position.x) * 0.04
    camera.position.y += (-target.y * 0.4 - camera.position.y) * 0.04
    camera.lookAt(0, 0, 0)

    renderer.render(scene, camera)
    frameId = requestAnimationFrame(animate)
  }
  animate()

  cleanup = () => {
    cancelAnimationFrame(frameId)
    themeObserver.disconnect()
    window.removeEventListener('mousemove', onMouse)
    window.removeEventListener('resize', onResize)
    coreGeo.dispose()
    coreMat.dispose()
    edgesGeo.dispose()
    edgesMat.dispose()
    pGeo.dispose()
    pMat.dispose()
    renderer.dispose()
    if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement)
  }
})

onBeforeUnmount(() => cleanup())
</script>

<template>
  <div ref="container" class="absolute inset-0 h-full w-full" aria-hidden="true"></div>
</template>
