import React from 'react'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Stats bar */}
      <section className="bg-red-700 py-12 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '+550',    label: 'clients served' },
            { number: '+1.5B',   label: 'gb data secured' },
            { number: '+100',    label: 'security solutions implemented' },
            { number: '99.99%',  label: 'uptime guarantee' },
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
