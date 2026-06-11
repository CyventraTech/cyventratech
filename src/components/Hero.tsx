import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { DottedSurface } from '@/components/ui/dotted-surface'
import { SplineScene } from '@/components/ui/splite'
import { Spotlight } from '@/components/ui/spotlight'

const lines = [
  { word1: 'Build',    word2: 'your', word3: 'Application', colors: ['#ffffff', '#3b82f6', '#ef4444'] },
  { word1: 'Protect',  word2: 'your', word3: 'Data',        colors: ['#ef4444', '#ffffff', '#3b82f6'] },
  { word1: 'Automate', word2: 'your', word3: 'Space',       colors: ['#3b82f6', '#ef4444', '#ffffff'] },
  { word1: 'Secure',   word2: 'your', word3: 'Network',     colors: ['#ffffff', '#ef4444', '#3b82f6'] },
  { word1: 'Scale',    word2: 'your', word3: 'Business',    colors: ['#3b82f6', '#ffffff', '#ef4444'] },
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => setMounted(true), 100)
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => { setIndex((p) => (p + 1) % lines.length); setVisible(true) }, 500)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const current = lines[index]

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col">

      <DottedSurface className="absolute inset-0 z-0" />
      <div className="absolute inset-0 z-[1] bg-black/50" />

      {/* Glows */}
      <div className="absolute -top-32 -left-32 w-72 h-72 md:w-[600px] md:h-[600px] rounded-full opacity-30 pointer-events-none z-[2]"
        style={{ background: 'radial-gradient(circle, #1a3a8f 0%, transparent 70%)' }} />
      <div className="absolute -bottom-32 -right-32 w-72 h-72 md:w-[500px] md:h-[500px] rounded-full opacity-20 pointer-events-none z-[2]"
        style={{ background: 'radial-gradient(circle, #cc1a1a 0%, transparent 70%)' }} />

      <Spotlight size={400} className="z-[3] hidden md:block" />

      {/* Layout */}
      <div className="relative z-10 flex-1 w-full flex flex-col lg:flex-row items-center">

        {/* LEFT — text */}
        <div
          className="flex-1 flex flex-col justify-center px-4 sm:px-8 md:px-12 pt-24 sm:pt-28 lg:pt-0 pb-8 lg:pb-0"
          style={{
            transition: 'opacity 0.8s ease, transform 0.8s ease',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateX(0)' : 'translateX(-30px)',
          }}
        >
          {/* Headline */}
          <div style={{ transition: 'opacity 0.5s ease, transform 0.5s ease', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(16px)' }}>
            <div className="hero-title font-black text-5xl sm:text-6xl md:text-7xl lg:text-[7vw] leading-[0.9] block"
              style={{ color: current.colors[0] }}>{current.word1}</div>
            <div className="hero-title font-black text-5xl sm:text-6xl md:text-7xl lg:text-[7vw] leading-[0.9] block lg:text-center"
              style={{ color: current.colors[1] }}>{current.word2}</div>
            <div className="hero-title font-black text-5xl sm:text-6xl md:text-7xl lg:text-[7vw] leading-[0.9] block lg:text-right"
              style={{ color: current.colors[2] }}>{current.word3}</div>
          </div>

          <p className="mt-5 max-w-xs text-sm sm:text-base leading-relaxed text-white/70">
            end-to-end technology solutions — cybersecurity, cloud, AI & automation.
          </p>

          <div className="flex flex-row gap-3 mt-5 flex-wrap">
            <Link to="/contact" className="bg-red-600 text-white text-sm font-medium rounded-full px-6 py-3 hover:bg-red-700 transition-colors min-h-[44px] flex items-center">
              get started
            </Link>
            <Link to="/about" className="border border-white/30 text-white text-sm font-medium rounded-full px-6 py-3 hover:bg-white/10 transition-colors min-h-[44px] flex items-center">
              learn more
            </Link>
          </div>

          {/* Dots */}
          <div className="flex gap-2 mt-6">
            {lines.map((_, i) => (
              <button key={i}
                onClick={() => { setVisible(false); setTimeout(() => { setIndex(i); setVisible(true) }, 300) }}
                className="h-1.5 rounded-full transition-all duration-300 min-w-[8px]"
                style={{ width: i === index ? '24px' : '8px', backgroundColor: i === index ? current.colors[0] : 'rgba(255,255,255,0.3)' }}
                aria-label={`Slide ${i + 1}`} />
            ))}
          </div>
        </div>

        {/* RIGHT — Spline (tablet+ only) */}
        <div
          className="hidden lg:block flex-1 relative w-full"
          style={{
            height: 'calc(100vh - 0px)',
            transition: 'opacity 1.2s ease, transform 1.2s ease',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateX(0)' : 'translateX(40px)',
          }}
        >
          <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 z-20"
        style={{ background: 'linear-gradient(to bottom, transparent, #000)' }} />
    </section>
  )
}
