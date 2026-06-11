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
    // entrance animation trigger
    setTimeout(() => setMounted(true), 100)

    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % lines.length)
        setVisible(true)
      }, 500)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const current = lines[index]

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* ── Animated dotted wave background ── */}
      <DottedSurface className="absolute inset-0 z-0" />

      {/* ── Dark overlay so text stays readable ── */}
      <div className="absolute inset-0 z-[1] bg-black/50" />

      {/* ── Glows ── */}
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-30 pointer-events-none z-[2]"
        style={{ background: 'radial-gradient(circle, #1a3a8f 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none z-[2]"
        style={{ background: 'radial-gradient(circle, #cc1a1a 0%, transparent 70%)' }}
      />

      {/* ── Spotlight follows mouse ── */}
      <Spotlight size={600} className="z-[3]" />

      {/* ── Split layout ── */}
      <div className="relative z-10 h-full w-full flex flex-col md:flex-row">

        {/* LEFT — text */}
        <div
          className="flex-1 flex flex-col justify-center px-6 md:px-12 pt-28 md:pt-0"
          style={{
            transition: 'opacity 0.8s ease, transform 0.8s ease',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateX(0)' : 'translateX(-40px)',
          }}
        >
          {/* Cycling headline */}
          <div
            style={{
              transition: 'opacity 0.5s ease, transform 0.5s ease',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(16px)',
            }}
          >
            <div
              className="hero-title font-black text-[10vw] md:text-[7vw] leading-[0.9] block"
              style={{ color: current.colors[0] }}
            >
              {current.word1}
            </div>
            <div
              className="hero-title font-black text-[10vw] md:text-[7vw] leading-[0.9] block md:text-center"
              style={{ color: current.colors[1] }}
            >
              {current.word2}
            </div>
            <div
              className="hero-title font-black text-[10vw] md:text-[7vw] leading-[0.9] block md:text-right"
              style={{ color: current.colors[2] }}
            >
              {current.word3}
            </div>
          </div>

          {/* Description */}
          <p className="mt-6 max-w-[280px] text-[15px] leading-snug text-white/70">
            end-to-end technology solutions — from cybersecurity to cloud, AI to automation.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Link
              to="/contact"
              className="bg-red-600 text-white text-sm font-medium rounded-full px-7 py-3 hover:bg-red-700 transition-colors inline-block"
            >
              get started
            </Link>
            <Link
              to="/about"
              className="border border-white/30 text-white text-sm font-medium rounded-full px-7 py-3 hover:bg-white/10 transition-colors inline-block"
            >
              learn more
            </Link>
          </div>

          {/* Dots */}
          <div className="flex gap-2 mt-8">
            {lines.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setVisible(false)
                  setTimeout(() => { setIndex(i); setVisible(true) }, 300)
                }}
                className="h-1 rounded-full transition-all duration-300"
                style={{
                  width: i === index ? '24px' : '8px',
                  backgroundColor: i === index ? current.colors[0] : 'rgba(255,255,255,0.3)',
                }}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT — Spline 3D */}
        <div
          className="hidden md:block flex-1 relative h-full"
          style={{
            transition: 'opacity 1.2s ease, transform 1.2s ease',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateX(0)' : 'translateX(40px)',
          }}
        >
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 z-20"
        style={{ background: 'linear-gradient(to bottom, transparent, #000)' }}
      />
    </section>
  )
}
