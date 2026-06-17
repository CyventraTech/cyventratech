import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import caseStudies from '../data/caseStudies'

const categories = ['all', 'cybersecurity', 'cloud', 'ai automation', 'it infrastructure', 'cctv & security']

const categoryColors: Record<string, string> = {
  'cybersecurity': 'text-red-400 bg-red-950/50 border-red-800/40',
  'cloud': 'text-blue-400 bg-blue-950/50 border-blue-800/40',
  'ai automation': 'text-purple-400 bg-purple-950/50 border-purple-800/40',
  'it infrastructure': 'text-green-400 bg-green-950/50 border-green-800/40',
  'cctv & security': 'text-yellow-400 bg-yellow-950/50 border-yellow-800/40',
}

export default function CaseStudies() {
  const [active, setActive] = useState('all')
  const filtered = active === 'all' ? caseStudies : caseStudies.filter(c => c.category === active)

  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* Hero */}
      <section className="bg-neutral-950 border-b border-white/10 pt-24 pb-14 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <span className="text-red-600 text-xs uppercase tracking-widest font-semibold">resources</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mt-3 mb-5 leading-tight">
            case <span className="text-blue-500">studies</span>
          </h1>
          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Real results for real businesses. See how CYVENTRA has helped organisations across India solve complex technology and security challenges.
          </p>
          <div className="flex flex-wrap gap-8 mt-8">
            {[
              { number: '+550', label: 'clients served' },
              { number: '100%', label: 'project success rate' },
              { number: '24/7', label: 'ongoing support' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-3xl font-black text-red-500">{s.number}</div>
                <div className="text-neutral-500 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="px-4 sm:px-6 md:px-10 py-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium capitalize transition-colors ${
                active === cat ? 'bg-red-600 text-white' : 'bg-neutral-900 text-neutral-400 hover:text-white border border-white/10'
              }`}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="px-4 sm:px-6 md:px-10 pb-20 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(cs => (
            <Link key={cs.id} to={`/case-studies/${cs.slug}`}
              className="bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden hover:border-red-600/40 transition-all hover:scale-[1.02] duration-200 flex flex-col">
              <div className="relative h-44 overflow-hidden">
                <img src={cs.image} alt={cs.title} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur rounded-xl px-3 py-2 text-center">
                  <div className="text-white font-black text-lg leading-none">{cs.metric}</div>
                  <div className="text-white/60 text-[10px] mt-0.5">{cs.metricLabel}</div>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border capitalize ${categoryColors[cs.category] || ''}`}>
                    {cs.category}
                  </span>
                  <span className="text-neutral-600 text-xs">{cs.industry}</span>
                </div>
                <h3 className="text-white font-bold text-sm sm:text-base leading-snug mb-3 flex-1">{cs.title}</h3>
                <div className="space-y-1 mb-4">
                  {cs.results.slice(0, 2).map((r, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-neutral-400">
                      <span className="text-green-400 flex-shrink-0">✓</span>
                      <span className="line-clamp-1">{r}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <span className="text-neutral-600 text-xs">{cs.duration}</span>
                  <span className="text-xs text-red-500 font-semibold">read full case study →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-950 via-neutral-950 to-red-950 border-t border-white/10 py-16 px-4 sm:px-6 md:px-10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">ready to be our next success story?</h2>
          <p className="text-neutral-400 text-sm mb-8">Tell us your challenge — our team will design a solution with measurable results.</p>
          <Link to="/contact"
            className="inline-flex items-center bg-red-600 text-white font-semibold rounded-full px-10 py-4 hover:bg-red-700 transition-colors min-h-[44px]">
            get in touch →
          </Link>
        </div>
      </section>
    </main>
  )
}
