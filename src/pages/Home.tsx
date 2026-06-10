import React from 'react'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Trusted By Section */}
      <section className="bg-black py-16 px-6 md:px-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-neutral-500 text-sm uppercase tracking-widest mb-10">
            trusted by leading enterprises
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {['Microsoft', 'AWS', 'Google', 'IBM', 'Oracle', 'Cisco'].map((brand) => (
              <span
                key={brand}
                className="text-neutral-600 text-xl font-semibold tracking-wide hover:text-neutral-400 transition-colors"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-neutral-950 py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-red-600 text-xs uppercase tracking-widest font-semibold">what we do</span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mt-3 mb-6 leading-tight">
              enterprise-grade<br />
              <span className="text-red-600">cyber defense</span><br />
              for every scale
            </h2>
            <p className="text-neutral-400 text-base leading-relaxed mb-8">
              CYVENTRA delivers end-to-end cybersecurity solutions — from proactive threat intelligence to real-time incident response — engineered to protect your most critical assets.
            </p>
            <div className="flex gap-4">
              <a href="/solutions" className="bg-red-600 text-white rounded-full px-7 py-3 text-sm font-medium hover:bg-red-700 transition-colors">
                explore solutions
              </a>
              <a href="/why-cyventra" className="border border-white/20 text-white rounded-full px-7 py-3 text-sm font-medium hover:bg-white/5 transition-colors">
                why cyventra
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: '🛡️', title: 'threat detection', desc: 'AI-powered real-time monitoring across all endpoints' },
              { icon: '🔐', title: 'data encryption', desc: 'Military-grade encryption for data at rest and transit' },
              { icon: '☁️', title: 'cloud security', desc: 'Zero-trust architecture for multi-cloud environments' },
              { icon: '📊', title: 'compliance', desc: 'GDPR, SOC2, ISO 27001 compliance automation' },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-neutral-900 border border-white/10 rounded-2xl p-6 hover:border-red-600/40 transition-colors group"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-white font-medium text-sm mb-2 capitalize">{item.title}</h3>
                <p className="text-neutral-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-red-700 py-12 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '+65k', label: 'startups protected' },
            { number: '+1.5B', label: 'gb data secured' },
            { number: '+300k', label: 'downloads' },
            { number: '99.99%', label: 'uptime guarantee' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold tracking-tight">{stat.number}</div>
              <div className="text-red-200 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-neutral-950 py-24 px-6 md:px-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            ready to secure your <span className="text-red-600">future?</span>
          </h2>
          <p className="text-neutral-400 text-base mb-10">
            Join thousands of organizations that trust CYVENTRA to protect their digital infrastructure.
          </p>
          <a
            href="/contact"
            className="inline-block bg-red-600 text-white font-medium rounded-full px-10 py-4 text-base hover:bg-red-700 transition-colors"
          >
            get in touch today
          </a>
        </div>
      </section>
    </main>
  )
}
