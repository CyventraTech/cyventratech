import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import caseStudies from '../data/caseStudies'

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>()
  const cs = caseStudies.find(c => c.slug === slug)

  if (!cs) return <Navigate to="/case-studies" replace />

  const related = caseStudies.filter(c => c.id !== cs.id).slice(0, 2)

  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* Hero */}
      <section className="relative pt-24">
        <div className="relative h-64 sm:h-80 md:h-[420px] overflow-hidden">
          <img src={cs.image} alt={cs.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
          {/* Metric badge */}
          <div className="absolute top-6 right-6 bg-black/70 backdrop-blur rounded-2xl px-5 py-4 text-center border border-white/10">
            <div className="text-3xl font-black text-white">{cs.metric}</div>
            <div className="text-white/50 text-xs mt-1">{cs.metricLabel}</div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10 md:py-16">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Main */}
          <article className="flex-1 min-w-0">

            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <Link to="/case-studies" className="text-xs text-red-500 hover:text-red-400 transition-colors">← back to case studies</Link>
              <span className="text-neutral-600 text-xs">•</span>
              <span className="text-xs bg-blue-950/60 text-blue-400 border border-blue-800/40 rounded-full px-3 py-1 capitalize">{cs.category}</span>
              <span className="text-neutral-500 text-xs">{cs.industry}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6 text-white">
              {cs.title}
            </h1>

            {/* Client details */}
            <div className="flex flex-wrap gap-5 pb-8 mb-8 border-b border-white/10">
              {[
                { label: 'Client', value: cs.client },
                { label: 'Industry', value: cs.industry },
                { label: 'Location', value: cs.location },
                { label: 'Duration', value: cs.duration },
              ].map(item => (
                <div key={item.label}>
                  <div className="text-xs uppercase tracking-widest text-neutral-600 mb-1">{item.label}</div>
                  <div className="text-white font-semibold text-sm">{item.value}</div>
                </div>
              ))}
            </div>

            {/* Results at a glance */}
            <div className="bg-neutral-900 border border-white/10 rounded-2xl p-6 mb-10">
              <h2 className="text-green-400 text-xs uppercase tracking-widest font-bold mb-4">results at a glance</h2>
              <ul className="space-y-3">
                {cs.results.map((r, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-400 mt-0.5 flex-shrink-0 text-lg">✓</span>
                    <span className="text-white text-sm sm:text-base leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Story */}
            <div className="prose-cyventra">
              {cs.content.map((block, i) => {
                if (block.type === 'paragraph') return (
                  <p key={i} className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-6">{block.text}</p>
                )
                if (block.type === 'heading') return (
                  <h2 key={i} className="text-2xl sm:text-3xl font-black text-white mt-10 mb-4">{block.text}</h2>
                )
                if (block.type === 'quote') return (
                  <blockquote key={i} className="border-l-4 border-blue-600 bg-blue-950/20 rounded-r-xl pl-6 pr-5 py-5 my-8">
                    <p className="text-white/90 text-base sm:text-lg italic leading-relaxed">"{block.text}"</p>
                  </blockquote>
                )
                if (block.type === 'list') return (
                  <ul key={i} className="space-y-3 my-6">
                    {block.items?.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-neutral-300 text-base leading-relaxed">
                        <span className="text-blue-500 mt-1 flex-shrink-0">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )
                if (block.type === 'metric') return (
                  <div key={i} className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-10">
                    {block.metrics?.map((m, j) => (
                      <div key={j} className="bg-neutral-900 border border-white/10 rounded-2xl p-5 text-center">
                        <div className="text-2xl sm:text-3xl font-black text-red-500 mb-1">{m.number}</div>
                        <div className="text-neutral-500 text-xs leading-tight">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )
                return null
              })}
            </div>

            {/* CTA */}
            <div className="mt-10 bg-gradient-to-r from-blue-950 to-red-950 border border-white/10 rounded-2xl p-6 sm:p-8">
              <h3 className="text-white font-bold text-xl mb-2">want a similar result for your business?</h3>
              <p className="text-neutral-400 text-sm mb-5">Tell us about your challenge — we'll design a solution with measurable outcomes.</p>
              <Link to="/contact"
                className="inline-flex items-center bg-red-600 text-white font-semibold rounded-full px-7 py-3 hover:bg-red-700 transition-colors">
                get in touch →
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="lg:sticky lg:top-28 space-y-6">

              {/* Challenge */}
              <div className="bg-neutral-900 border border-red-800/30 rounded-2xl p-6">
                <h3 className="text-red-400 text-xs uppercase tracking-widest font-bold mb-3">the challenge</h3>
                <p className="text-neutral-300 text-sm leading-relaxed">{cs.challenge}</p>
              </div>

              {/* Solution */}
              <div className="bg-neutral-900 border border-blue-800/30 rounded-2xl p-6">
                <h3 className="text-blue-400 text-xs uppercase tracking-widest font-bold mb-3">our solution</h3>
                <p className="text-neutral-300 text-sm leading-relaxed">{cs.solution}</p>
              </div>

              {/* Related */}
              <div className="bg-neutral-900 border border-white/10 rounded-2xl p-6">
                <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">more case studies</h3>
                <div className="space-y-4">
                  {related.map(r => (
                    <Link key={r.id} to={`/case-studies/${r.slug}`} className="flex gap-3 group">
                      <img src={r.image} alt={r.title} className="w-16 h-16 rounded-xl object-cover flex-shrink-0" />
                      <div>
                        <p className="text-white text-xs font-medium leading-snug group-hover:text-blue-400 transition-colors line-clamp-2">{r.title}</p>
                        <p className="text-neutral-600 text-xs mt-1">{r.industry}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-red-700 rounded-2xl p-6 text-center">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="text-white font-bold mb-2">be our next case study</h3>
                <p className="text-red-200 text-xs mb-4">Join 550+ businesses that trust CYVENTRA.</p>
                <Link to="/contact"
                  className="block bg-white text-red-700 font-bold rounded-full px-5 py-2.5 text-sm hover:bg-neutral-100 transition-colors">
                  get started →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
