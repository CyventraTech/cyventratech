import React from 'react'
import Hero from '../components/Hero'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />

      {/* Stats bar */}
      <section className="bg-red-700 py-10 px-4 sm:px-6 md:px-10" aria-label="Company statistics">
        <h2 className="sr-only">CYVENTRA Technologies — Key Statistics</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { number: '+550',   label: 'clients served' },
            { number: '+1.5B',  label: 'gb data secured' },
            { number: '+100',   label: 'security solutions' },
            { number: '99.99%', label: 'uptime guarantee' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">{stat.number}</div>
              <div className="text-red-200 text-xs sm:text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-neutral-950 py-14 md:py-20 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <span className="text-red-600 text-xs uppercase tracking-widest font-semibold">what we do</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mt-3 mb-5 leading-tight">
              full-stack<br />
              <span className="text-red-600">technology services</span><br />
              for every scale
            </h2>            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-7">
              From cybersecurity and cloud migration to AI automation and CCTV — CYVENTRA delivers end-to-end IT solutions engineered to protect and power your business.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/services" className="bg-red-600 text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-red-700 transition-colors min-h-[44px] flex items-center">
                explore services
              </Link>
              <Link to="/about" className="border border-white/20 text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-white/5 transition-colors min-h-[44px] flex items-center">
                our story
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {[
              { icon: '🛡️', title: 'cybersecurity', desc: 'AI-powered threat detection & incident response' },
              { icon: '☁️', title: 'cloud services', desc: 'AWS, Azure & GCP migration and management' },
              { icon: '🤖', title: 'AI automation', desc: 'RPA, chatbots and custom ML pipelines' },
              { icon: '📹', title: 'CCTV & security', desc: 'IP cameras, access control & remote monitoring' },
            ].map((item) => (
              <div key={item.title} className="bg-neutral-900 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-red-600/40 transition-colors">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{item.icon}</div>
                <h3 className="text-white font-medium text-xs sm:text-sm mb-1 sm:mb-2 capitalize">{item.title}</h3>
                <p className="text-neutral-500 text-xs leading-relaxed hidden sm:block">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-black py-14 md:py-20 px-4 sm:px-6 md:px-10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-5">
            ready to secure your <span className="text-red-600">future?</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mb-8">
            Join hundreds of businesses that trust CYVENTRA to power and protect their digital infrastructure.
          </p>
          <Link to="/contact"
            className="inline-flex items-center bg-red-600 text-white font-medium rounded-full px-8 py-4 text-sm sm:text-base hover:bg-red-700 transition-colors min-h-[44px]">
            get in touch today
          </Link>
        </div>
      </section>
    </main>
  )
}
