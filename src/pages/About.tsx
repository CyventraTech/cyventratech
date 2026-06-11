import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

/* ── simple intersection-observer hook for scroll animations ── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

const fadeUp = (visible: boolean) =>
  `transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`

export default function About() {
  const s1 = useInView()
  const s2 = useInView()
  const s3 = useInView()
  const s4 = useInView()
  const s5 = useInView()
  const s6 = useInView()
  const s7 = useInView()

  return (
    <main className="bg-black text-white overflow-hidden">

      {/* ══════════════════════════════════════════
          HERO — cinematic full-height opener
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center px-4 sm:px-8 md:px-16 pt-24 sm:pt-28 pb-16 overflow-hidden">

        {/* background grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute -left-40 top-1/3 w-72 h-72 md:w-[600px] md:h-[600px] rounded-full opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #1a3a8f 0%, transparent 70%)' }} />
        <div className="absolute -right-40 bottom-1/4 w-72 h-72 md:w-[500px] md:h-[500px] rounded-full opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #cc1a1a 0%, transparent 70%)' }} />

        <div className="relative max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* LEFT — text */}
          <div className="flex-1 w-full">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-12 bg-red-600" />
              <span className="text-red-500 text-xs uppercase tracking-[0.3em] font-bold">our story</span>
            </div>

            <h1 className="font-black leading-[0.95] tracking-tight mb-6">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[7.5vw] text-white">we didn't</span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[7.5vw] text-red-600">start with</span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[7.5vw] text-blue-500">money.</span>
              <span className="block text-xl sm:text-2xl md:text-3xl lg:text-[4vw] text-white/70 mt-3">
                we started with <span className="text-white">belief.</span>
              </span>
            </h1>

            <p className="text-white/50 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
              Mid-2025. A handful of dreamers. Zero investors. Infinite conviction.
              <span className="text-white font-medium">
                {' '}That's how{' '}
                <span style={{ color: '#1a3a8f' }}>CYVE</span><span style={{ color: '#cc1a1a' }}>NTRA</span>
                {' '}was born.
              </span>
            </p>

            <div className="mt-10 flex items-center gap-3 text-white/30 text-xs uppercase tracking-widest">
              <div className="w-px h-10 bg-white/20" />
              scroll to explore our journey
            </div>
          </div>

          {/* RIGHT — animated logo (md+) */}
          <div className="hidden md:flex flex-shrink-0 items-center justify-center">
            <div className="relative flex items-center justify-center w-56 h-56 lg:w-80 lg:h-80">

              <style>{`
                @keyframes orbitSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes orbitSpinReverse { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
                @keyframes logoPulse {
                  0%, 100% { transform: scale(1);    filter: brightness(1)   drop-shadow(0 0 20px #3b82f6); }
                  50%      { transform: scale(1.06); filter: brightness(1.2) drop-shadow(0 0 40px #ef4444); }
                }
                @keyframes blinkBlue { 0%, 100% { opacity: 1; box-shadow: 0 0 8px 4px #3b82f6; } 50% { opacity: 0.2; } }
                @keyframes blinkRed  { 0%, 100% { opacity: 1; box-shadow: 0 0 8px 4px #ef4444; } 50% { opacity: 0.2; } }
                @keyframes outerRingPulse { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 0.6; transform: scale(1.04); } }
              `}</style>

              <div className="absolute inset-0 rounded-full border border-blue-600/30"
                style={{ animation: 'outerRingPulse 3s ease-in-out infinite' }} />
              <div className="absolute w-[88%] h-[88%] rounded-full border-2 border-transparent"
                style={{ animation: 'orbitSpin 4s linear infinite', borderTopColor: '#ef4444', borderRightColor: '#ef444440', borderBottomColor: 'transparent', borderLeftColor: '#ef444440', boxShadow: '0 0 12px #ef444480' }}>
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-red-500"
                  style={{ animation: 'blinkRed 1.2s ease-in-out infinite' }} />
              </div>
              <div className="absolute w-[78%] h-[78%] rounded-full border-2 border-transparent"
                style={{ animation: 'orbitSpinReverse 3s linear infinite', borderTopColor: '#3b82f6', borderLeftColor: '#3b82f640', borderBottomColor: 'transparent', borderRightColor: '#3b82f640', boxShadow: '0 0 12px #3b82f680' }}>
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500"
                  style={{ animation: 'blinkBlue 0.9s ease-in-out infinite' }} />
              </div>
              <div className="absolute w-[68%] h-[68%] rounded-full border border-white/20"
                style={{ animation: 'orbitSpin 6s linear infinite' }} />

              <div className="relative z-10 flex items-center justify-center" style={{ isolation: 'isolate' }}>
                <div className="absolute w-28 h-28 rounded-full"
                  style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.25) 0%, transparent 70%)' }} />
                <img src="/logo-icon.png" alt="CYVENTRA"
                  className="w-28 h-28 lg:w-40 lg:h-40 object-contain"
                  style={{ mixBlendMode: 'screen', filter: 'brightness(3) saturate(1.4)', animation: 'logoPulse 3s ease-in-out infinite' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 1 — The Beginning
      ══════════════════════════════════════════ */}
      <section className="py-14 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16 bg-neutral-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div ref={s1.ref} className={fadeUp(s1.visible)}>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-4xl font-black text-white/60 font-mono">01</span>
              <span className="h-px flex-1 bg-blue-800/50" />
              <span className="text-blue-400 text-xs uppercase tracking-widest font-bold">the beginning</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              <span className="text-white">no boardroom.</span><br />
              <span className="text-red-500">no investor deck.</span><br />
              <span className="text-blue-400">just conviction.</span>
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-6">
              In the middle of 2025, a few dreamers came together with nothing but passion, knowledge,
              and a belief that technology could make a real difference. No company registration.
              No big office. No funding round.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              What we had was <span className="text-white font-semibold">trust in each other</span> and
              the courage to think beyond the ordinary. Every late-night discussion, every challenge,
              every small win — became a stepping stone in a journey we're still writing.
            </p>
          </div>

          {/* Visual card */}
          <div ref={s1.ref} className={`${fadeUp(s1.visible)} delay-200`}>
            <div className="relative bg-gradient-to-br from-blue-950 to-neutral-900 border border-blue-800/30 rounded-3xl p-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-20"
                style={{ background: 'radial-gradient(circle, #1a3a8f 0%, transparent 70%)' }} />
              <div className="text-7xl mb-6">🌟</div>
              <blockquote className="text-2xl font-bold text-white leading-snug mb-4">
                "Born not from capital,<br />but from <span className="text-blue-400">conviction.</span>"
              </blockquote>
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold text-sm">C</div>
                <div>
                  <div className="text-white text-sm font-semibold">CYVENTRA Technologies</div>
                  <div className="text-white/40 text-xs">Founded · Mid 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 2 — The Struggle (emotional)
      ══════════════════════════════════════════ */}
      <section className="py-12 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="absolute right-0 top-0 w-[400px] h-[400px] opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #cc1a1a 0%, transparent 70%)' }} />

        <div className="max-w-6xl mx-auto">
          <div ref={s2.ref} className={`${fadeUp(s2.visible)} text-center mb-16`}>
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-16 bg-red-700/50" />
              <span className="text-red-500 text-xs uppercase tracking-widest font-bold">the struggle</span>
              <span className="h-px w-16 bg-red-700/50" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              <span className="text-white">we know what</span><br />
              <span className="text-red-500">2 AM feels like</span><br />
              <span className="text-white/60 text-3xl md:text-4xl">when everything breaks.</span>
            </h2>
          </div>

          {/* Pain-point cards */}
          <div ref={s2.ref} className={`${fadeUp(s2.visible)} grid md:grid-cols-3 gap-6`}>
            {[
              {
                icon: '🚨',
                time: '2:00 AM',
                title: 'The Cyberattack',
                body: 'Your business is under attack in the dead of night. Ransomware crawling through your systems. Panic sets in. We\'ve been there — and now we make sure you never face it alone.',
                color: 'border-red-700/40 hover:border-red-500',
                glow: 'bg-red-600',
              },
              {
                icon: '💥',
                time: 'T-2 Hours',
                title: 'The Server Crash',
                body: 'A critical deadline. A presentation to your biggest client. And your server decides it\'s the perfect moment to go dark. We built CYVENTRA for exactly this moment.',
                color: 'border-blue-700/40 hover:border-blue-500',
                glow: 'bg-blue-600',
              },
              {
                icon: '😤',
                time: 'Every. Day.',
                title: 'The IT Chaos',
                body: 'Five vendors. Ten phone calls. Zero answers. IT was supposed to be a backbone, not a burden. We said enough — and built a single team that handles everything.',
                color: 'border-red-700/40 hover:border-red-500',
                glow: 'bg-red-600',
              },
            ].map((card) => (
              <div key={card.title}
                className={`relative bg-neutral-900 border rounded-2xl p-7 transition-all duration-300 group overflow-hidden ${card.color}`}>
                <div className={`absolute -top-8 -right-8 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-500 ${card.glow}`} />
                <div className="text-xs font-mono text-white/30 mb-3 uppercase tracking-widest">{card.time}</div>
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-white font-bold text-xl mb-3">{card.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PULL QUOTE — full bleed
      ══════════════════════════════════════════ */}
      <section className="bg-gradient-to-r from-blue-950 via-black to-red-950 py-12 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16 border-y border-white/10">
        <div ref={s3.ref} className={`${fadeUp(s3.visible)} max-w-4xl mx-auto text-center`}>
          <div className="text-6xl mb-6">💬</div>
          <blockquote className="text-3xl md:text-5xl font-black leading-tight">
            <span className="text-white">"When your network goes down,</span><br />
            <span className="text-red-500">we lose sleep too.</span><br />
            <span className="text-blue-400">That's not a tagline —</span><br />
            <span className="text-white">that's our promise."</span>
          </blockquote>
          <div className="mt-8 text-white/40 text-sm tracking-widest uppercase">— The CYVENTRA Team</div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 3 — The Promise
      ══════════════════════════════════════════ */}
      <section className="py-12 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16 bg-neutral-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Visual left */}
          <div ref={s4.ref} className={fadeUp(s4.visible)}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🤝', label: 'We take ownership', color: 'bg-blue-950 border-blue-800/40' },
                { icon: '🔐', label: 'Your data is sacred', color: 'bg-red-950 border-red-800/40' },
                { icon: '⚡', label: 'Speed is survival', color: 'bg-red-950 border-red-800/40' },
                { icon: '🌍', label: 'Built for every scale', color: 'bg-blue-950 border-blue-800/40' },
                { icon: '🧠', label: 'We speak technology', color: 'bg-blue-950 border-blue-800/40' },
                { icon: '❤️', label: 'We genuinely care', color: 'bg-red-950 border-red-800/40' },
              ].map((item) => (
                <div key={item.label}
                  className={`${item.color} border rounded-2xl p-5 flex flex-col gap-3 hover:scale-105 transition-transform duration-200`}>
                  <div className="text-3xl">{item.icon}</div>
                  <div className="text-white text-sm font-semibold leading-snug">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div ref={s4.ref} className={`${fadeUp(s4.visible)}`}>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-4xl font-black text-white/60 font-mono">03</span>
              <span className="h-px flex-1 bg-red-800/50" />
              <span className="text-red-500 text-xs uppercase tracking-widest font-bold">the promise</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              <span className="text-white">we don't just</span><br />
              <span className="text-blue-400">sell services.</span><br />
              <span className="text-red-500">we take ownership.</span>
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-5">
              At CYVENTRA, when your network goes down — we lose sleep too. We've built a team
              that speaks every dialect of modern technology, so you never have to juggle
              five different vendors again.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              One call. One team. <span className="text-white font-semibold">Full responsibility.</span> That's
              not a pitch — that's the standard we hold ourselves to every single day.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 4 — The Vision
      ══════════════════════════════════════════ */}
      <section className="py-12 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16 bg-black relative overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #cc1a1a 0%, #1a3a8f 50%, transparent 70%)' }} />

        <div className="max-w-6xl mx-auto">
          <div ref={s5.ref} className={`${fadeUp(s5.visible)} text-center mb-16`}>
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-16 bg-blue-700/50" />
              <span className="text-blue-400 text-xs uppercase tracking-widest font-bold">the vision</span>
              <span className="h-px w-16 bg-blue-700/50" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              <span className="text-white">we're not building</span><br />
              <span className="text-blue-500">a company.</span><br />
              <span className="text-red-500">we're building a legacy.</span>
            </h2>
          </div>

          {/* Vision pillars */}
          <div ref={s5.ref} className={`${fadeUp(s5.visible)} grid md:grid-cols-3 gap-6`}>
            {[
              {
                number: '01',
                icon: '🛡️',
                title: 'Protect',
                body: 'Every business we safeguard — from a startup\'s first server to an enterprise\'s global network — is a client who sleeps better tonight.',
                accent: 'text-red-500',
                border: 'border-red-800/30 hover:border-red-500',
              },
              {
                number: '02',
                icon: '⚙️',
                title: 'Optimise',
                body: 'Every system we tune, every process we automate, every second we save your team — that\'s compounding value, not just a service call.',
                accent: 'text-blue-400',
                border: 'border-blue-800/30 hover:border-blue-500',
              },
              {
                number: '03',
                icon: '🚀',
                title: 'Elevate',
                body: 'Every client who grows because their technology finally works for them instead of against them — that\'s CYVENTRA\'s mark on the world.',
                accent: 'text-white',
                border: 'border-white/10 hover:border-white/40',
              },
            ].map((p) => (
              <div key={p.title}
                className={`bg-neutral-900 border rounded-2xl p-8 transition-all duration-300 group ${p.border}`}>
                <div className="text-xs font-mono text-white/60 mb-4">{p.number}</div>
                <div className="text-5xl mb-5">{p.icon}</div>
                <h3 className={`text-3xl font-black mb-4 ${p.accent}`}>{p.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 5 — The Team Spirit
      ══════════════════════════════════════════ */}
      <section className="py-12 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16 bg-neutral-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div ref={s6.ref} className={fadeUp(s6.visible)}>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-4xl font-black text-white/60 font-mono">05</span>
              <span className="h-px flex-1 bg-red-800/50" />
              <span className="text-red-500 text-xs uppercase tracking-widest font-bold">the people</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              <span className="text-white">we remember</span><br />
              <span className="text-red-500">where we started.</span><br />
              <span className="text-blue-400">it keeps us hungry.</span>
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-5">
              We started without a company registration, without a big office, without investors.
              What we had was <span className="text-white font-semibold">trust in each other</span> and
              the courage to think beyond the ordinary.
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Every late-night debugging session, every "we'll figure it out", every small win celebrated
              with terrible coffee — those moments are in our DNA. We carry them into every client
              engagement because <span className="text-white font-semibold">that hunger never left.</span>
            </p>

            {/* Values chips */}
            <div className="flex flex-wrap gap-2">
              {['Hungry', 'Honest', 'Hands-on', 'Human', 'Hardworking'].map((v, i) => (
                <span key={v}
                  className={`rounded-full px-5 py-2 text-sm font-bold border ${
                    i % 2 === 0
                      ? 'border-red-700/50 text-red-400 bg-red-950/30'
                      : 'border-blue-700/50 text-blue-400 bg-blue-950/30'
                  }`}>
                  {v}
                </span>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div ref={s6.ref} className={fadeUp(s6.visible)}>
            <div className="relative border-l-2 border-gradient pl-8 space-y-10"
              style={{ borderImage: 'linear-gradient(to bottom, #1a3a8f, #cc1a1a) 1' }}>
              {[
                { date: 'Mid 2025', event: 'The spark ignites — a few dreamers, one shared screen, zero budget, infinite belief.', color: 'bg-blue-600' },
                { date: 'Late 2025', event: 'First clients trust us. We deliver beyond promises. Word spreads organically.', color: 'bg-blue-700' },
                { date: 'Early 2026', event: 'Full service stack launches — cybersecurity, cloud, IoT, AI automation, CCTV, AMC.', color: 'bg-red-600' },
                { date: 'Today', event: 'Building a legacy of innovation, trust, and endless possibilities — one client at a time.', color: 'bg-red-700' },
                { date: 'Tomorrow', event: 'The chapter is still being written. And it\'s going to be extraordinary.', color: 'bg-white' },
              ].map((item) => (
                <div key={item.date} className="relative">
                  <div className={`absolute -left-11 top-1 w-4 h-4 rounded-full border-2 border-black ${item.color}`} />
                  <div className="text-xs font-bold tracking-widest uppercase mb-1"
                    style={{ color: item.color === 'bg-blue-600' || item.color === 'bg-blue-700' ? '#60a5fa' : item.color === 'bg-white' ? '#ffffff' : '#f87171' }}>
                    {item.date}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FINAL CTA — The Future
      ══════════════════════════════════════════ */}
      <section className="relative py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden">
        {/* Full-bleed gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-black to-red-950" />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '60px 60px' }} />

        <div ref={s7.ref} className={`${fadeUp(s7.visible)} relative max-w-4xl mx-auto text-center`}>
          <div className="text-7xl mb-8">🔮</div>
          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            <span className="text-white">the future belongs</span><br />
            <span className="text-blue-400">to those who</span><br />
            <span className="text-red-500">prepare for it today.</span>
          </h2>
          <p className="text-white/60 text-xl leading-relaxed max-w-2xl mx-auto mb-12">
            We help you get there — with the technology, the team, and the tenacity to make it real.
            Today, we are building more than a company.
            <span className="text-white font-bold"> We are building a legacy.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              to="/contact"
              className="bg-red-600 text-white font-bold rounded-full px-10 py-5 text-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-900/40"
            >
              start your journey →
            </Link>
            <Link
              to="/services"
              className="border-2 border-blue-600 text-blue-400 font-bold rounded-full px-10 py-5 text-lg hover:bg-blue-950/50 transition-colors"
            >
              explore our services
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
