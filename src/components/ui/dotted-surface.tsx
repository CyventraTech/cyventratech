import { cn } from '@/lib/utils'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

type DottedSurfaceProps = Omit<React.ComponentProps<'div'>, 'ref'>

export function DottedSurface({ className, ...props }: DottedSurfaceProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const SEPARATION = 120
    const AMOUNTX = 50
    const AMOUNTY = 50

    // ── Scene ──
    const scene = new THREE.Scene()
    const w = el.clientWidth  || window.innerWidth
    const h = el.clientHeight || window.innerHeight

    const camera = new THREE.PerspectiveCamera(60, w / h, 1, 10000)
    camera.position.set(0, 300, 1100)

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(w, h)
    renderer.setClearColor(0x000000, 0)
    el.appendChild(renderer.domElement)

    // ── Geometry ──
    const positions: number[] = []
    const colors: number[]    = []

    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        positions.push(
          ix * SEPARATION - (AMOUNTX * SEPARATION) / 2,
          0,
          iy * SEPARATION - (AMOUNTY * SEPARATION) / 2
        )
        // red → white → blue columns
        const t = ix / AMOUNTX
        if (t < 0.33)      colors.push(239, 68,  68)   // red-500
        else if (t < 0.66) colors.push(220, 220, 220)  // near-white
        else               colors.push(59,  130, 246)  // blue-500
      }
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    geometry.setAttribute('color',    new THREE.Float32BufferAttribute(colors,    3))

    const material = new THREE.PointsMaterial({
      size: 5,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    // ── Animation loop ──
    let count = 0
    let raf: number

    const animate = () => {
      raf = requestAnimationFrame(animate)

      const pos = geometry.attributes.position.array as Float32Array
      let i = 0
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          // wave on Y axis
          pos[i * 3 + 1] =
            Math.sin((ix + count) * 0.3) * 60 +
            Math.sin((iy + count) * 0.5) * 60
          i++
        }
      }
      geometry.attributes.position.needsUpdate = true

      // slowly rotate the whole cloud
      points.rotation.y = count * 0.02

      renderer.render(scene, camera)
      count += 0.06
    }

    animate()

    // ── Resize ──
    const onResize = () => {
      const w2 = el.clientWidth  || window.innerWidth
      const h2 = el.clientHeight || window.innerHeight
      camera.aspect = w2 / h2
      camera.updateProjectionMatrix()
      renderer.setSize(w2, h2)
    }
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(raf)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
      {...props}
    />
  )
}
