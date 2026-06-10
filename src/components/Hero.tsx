import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const lines = [
  { word1: 'Build',    word2: 'your',  word3: 'Application', colors: ['#ffffff', '#3b82f6', '#ef4444'] },
  { word1: 'Protect',  word2: 'your',  word3: 'Data',        colors: ['#ef4444', '#ffffff', '#3b82f6'] },
  { word1: 'Automate', word2: 'your',  word3: 'Space',       colors: ['#3b82f6', '#ef4444', '#ffffff'] },
  { word1: 'Secure',   word2: 'your',  word3: 'Network',     colors: ['#ffffff', '#ef4444', '#3b82f6'] },
  { word1: 'Scale',    word2: 'your',  word3: 'Business',    colors: ['#3b82f6', '#ffffff', '#ef4444'] },
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      // fade out
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
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_063509_7d167302-4fd4-480b-8260-18ab572333d4.mp4"
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      {/* Blue glow top-left */}
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #1a3a8f 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      {/* Red glow bottom-right */}
      <div
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #cc1a1a 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Foreground */}
      <div className="relative h-full w-full flex flex-col justify-center px-6 md:px-12 pt-28 md:pt-32">

        {/* Animated 3-word staggered headline */}
        <div
          className="select-none"
          style={{
            transition: 'opacity 0.5s ease, transform 0.5s ease',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          {/* Word 1 — left aligned */}
          <div
            className="hero-title font-black text-[10vw] md:text-[8vw] leading-[0.9] block"
            style={{ color: current.colors[0] }}
          >
            {current.word1}
          </div>

          {/* Word 2 — center */}
          <div
            className="hero-title font-black text-[10vw] md:text-[8vw] leading-[0.9] block text-center"
            style={{ color: current.colors[1] }}
          >
            {current.word2}
          </div>

          {/* Word 3 — right aligned */}
          <div
            className="hero-title font-black text-[10vw] md:text-[8vw] leading-[0.9] block text-right"
            style={{ color: current.colors[2] }}
          >
            {current.word3}
          </div>
        </div>

        {/* Description */}
        <p className="mt-8 max-w-[280px] text-[15px] leading-snug text-white/80">
          end-to-end technology solutions — from cybersecurity to cloud, AI to automation.
        </p>

        {/* CTA buttons */}
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

        {/* Slide indicator dots */}
        <div className="flex gap-2 mt-10">
          {lines.map((_, i) => (
            <button
              key={i}
              onClick={() => { setVisible(false); setTimeout(() => { setIndex(i); setVisible(true) }, 300) }}
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

      {/* Bottom gradient */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-48"
        style={{ background: 'linear-gradient(to bottom, transparent, #000)' }}
        aria-hidden="true"
      />
    </section>
  )
}
