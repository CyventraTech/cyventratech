import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
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

      {/* Dark overlay to deepen contrast */}
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

      {/* Blue-red gradient accent top-left */}
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

      {/* Foreground content */}
      <div className="relative h-full w-full">

        {/* === Giant staggered headline === */}
        <h1
          className="hero-title absolute text-white font-medium text-[14vw] md:text-[13vw] left-4 md:left-10"
          style={{ top: '18%' }}
        >
          protect
        </h1>

        <h1
          className="hero-title absolute text-white font-medium text-[14vw] md:text-[13vw] right-4 md:right-10"
          style={{ top: '38%' }}
        >
          your
        </h1>

        {/* "data" with red accent */}
        <h1
          className="hero-title absolute font-medium text-[14vw] md:text-[13vw]"
          style={{ left: '18%', top: '58%', color: '#cc1a1a' }}
        >
          data
        </h1>

        {/* === Description paragraph === */}
        <p
          className="absolute left-6 md:left-10 max-w-[240px] text-[15px] leading-snug text-white/90"
          style={{ top: '46%' }}
        >
          we guard your data with utmost care, empowering you with privacy everywhere
        </p>

        {/* === CTA buttons (bonus) === */}
        <div
          className="absolute left-6 md:left-10 flex flex-col sm:flex-row gap-3"
          style={{ top: 'calc(46% + 90px)' }}
        >
          <Link
            to="/contact"
            className="bg-red-600 text-white text-sm font-medium rounded-full px-7 py-3 hover:bg-red-700 transition-colors inline-block"
          >
            get started
          </Link>
          <Link
            to="/why-cyventra"
            className="border border-white/30 text-white text-sm font-medium rounded-full px-7 py-3 hover:bg-white/10 transition-colors inline-block"
          >
            learn more
          </Link>
        </div>

        {/* === Stat — top-right (+65k) === */}
        <div
          className="absolute right-6 md:right-24"
          style={{ top: '14%' }}
        >
          <div className="flex items-center gap-3 justify-end">
            <div className="hidden md:block h-px w-24 bg-white/40 rotate-[20deg]" aria-hidden="true" />
            <span className="text-4xl md:text-5xl font-medium tracking-tight">+65k</span>
          </div>
          <p className="text-xs md:text-sm text-white/70 mt-1 text-right">startups use</p>
        </div>

        {/* === Bottom gradient overlay === */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-48"
          style={{ background: 'linear-gradient(to bottom, transparent, #000)' }}
          aria-hidden="true"
        />

        {/* === Stat — bottom-left (+1.5b) === */}
        <div className="absolute left-6 md:left-20 bottom-20 md:bottom-24">
          <div className="flex items-center gap-3">
            <span className="text-4xl md:text-5xl font-medium tracking-tight">+1.5b</span>
            <div className="hidden md:block h-px w-24 bg-white/40 rotate-[-20deg]" aria-hidden="true" />
          </div>
          <p className="text-xs md:text-sm text-white/70 mt-1">gb data was protected</p>
        </div>

        {/* === Stat — bottom-right (+300k) === */}
        <div className="absolute right-6 md:right-20 bottom-16 md:bottom-20">
          <div className="flex items-center gap-3 justify-end">
            <div className="hidden md:block h-px w-24 bg-white/40 rotate-[-20deg]" aria-hidden="true" />
            <span className="text-4xl md:text-5xl font-medium tracking-tight">+300k</span>
          </div>
          <p className="text-xs md:text-sm text-white/70 mt-1 text-right">downloads</p>
        </div>
      </div>
    </section>
  )
}
