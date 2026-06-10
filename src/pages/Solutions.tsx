import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const categories = ['all', 'cloud', 'endpoint', 'network', 'identity', 'compliance']

const solutions = [
  {
    category: 'cloud',
    title: 'CYVENTRA Cloud Shield',
    tagline: 'Unified cloud security posture management',
    description: 'Continuously monitor and enforce security policies across AWS, Azure, and GCP. Detect misconfigurations, excessive permissions, and threats in real-time.',
    icon: '☁️',
  },
  {
    category: 'endpoint',
    title: 'CYVENTRA EndGuard',
    tagline: 'Next-gen endpoint detection & response',
    description: 'AI-powered EDR that stops ransomware, fileless malware, and advanced persistent threats across all endpoints — laptops, servers, and mobile devices.',
    icon: '💻',
  },
  {
    category: 'network',
    title: 'CYVENTRA NetSense',
    tagline: 'Deep packet inspection & network analytics',
    description: 'Full network visibility with behavioral analytics. Detect lateral movement, data exfiltration, and command-and-control traffic in real-time.',
    icon: '🌐',
  },
  {
    category: 'identity',
    title: 'CYVENTRA IdentityIQ',
    tagline: 'Zero-trust identity and access management',
    description: 'Enforce least-privilege access, detect credential abuse, and automate identity lifecycle management across all your SaaS and on-prem systems.',
    icon: '🔑',
  },
  {
    category: 'compliance',
    title: 'CYVENTRA ComplyAI',
    tagline: 'Automated compliance and audit readiness',
    description: 'Stay perpetually audit-ready with automated control testing, evidence collection, and cross-framework mapping for GDPR, SOC2, ISO 27001, and more.',
    icon: '📋',
  },
  {
    category: 'cloud',
    title: 'CYVENTRA DataVault',
    tagline: 'Data discovery, classification & protection',
    description: 'Find, classify, and protect sensitive data wherever it lives. Prevent data leakage with policy-based DLP and real-time access controls.',
    icon: '🗄️',
  },
]

export default function Solutions() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? solutions : solutions.filter((s) => s.category === active)

  return (
    <main className="bg-black text-white pt-28">
      {/* Hero */}
      <section className="px-6 md:px-10 py-20 max-w-7xl mx-auto text-center">
        <span className="text-red-600 text-xs uppercase tracking-widest font-semibold">solutions</span>
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight mt-4 mb-6 leading-tight">
          security<br /><span className="text-red-600">solutions</span>
        </h1>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
          Modular, interoperable security products that work together — and work even better alongside your existing stack.
        </p>
      </section>

      {/* Filter tabs */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-12">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium capitalize transition-colors ${
                active === cat
                  ? 'bg-red-600 text-white'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Solutions grid */}
      <section className="px-6 md:px-10 pb-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((sol) => (
            <div
              key={sol.title}
              className="bg-neutral-900 border border-white/10 rounded-2xl p-8 hover:border-red-600/50 transition-colors"
            >
              <div className="text-4xl mb-4">{sol.icon}</div>
              <div className="text-xs uppercase tracking-widest text-red-500 font-semibold mb-2">{sol.category}</div>
              <h3 className="text-white font-bold text-xl mb-1">{sol.title}</h3>
              <p className="text-neutral-400 text-sm italic mb-4">{sol.tagline}</p>
              <p className="text-neutral-400 text-sm leading-relaxed">{sol.description}</p>
              <Link
                to="/contact"
                className="inline-block mt-6 text-sm text-red-500 hover:text-red-400 transition-colors font-medium"
              >
                learn more →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-neutral-950 py-20 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-center mb-12">compare plans</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 text-neutral-400 font-normal">feature</th>
                  {['starter', 'growth', 'enterprise'].map((plan) => (
                    <th key={plan} className={`py-4 font-semibold capitalize text-center ${plan === 'growth' ? 'text-red-500' : 'text-white'}`}>
                      {plan}
                      {plan === 'growth' && <div className="text-xs text-red-600 font-normal">most popular</div>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['24/7 monitoring', '✓', '✓', '✓'],
                  ['Endpoints covered', 'up to 50', 'up to 500', 'unlimited'],
                  ['Cloud accounts', '1', '5', 'unlimited'],
                  ['Incident response', '—', '✓', '✓'],
                  ['Dedicated analyst', '—', '—', '✓'],
                  ['Custom integrations', '—', 'limited', '✓'],
                  ['SLA', '99.5%', '99.9%', '99.99%'],
                ].map(([feature, ...values]) => (
                  <tr key={feature as string} className="border-b border-white/5">
                    <td className="py-4 text-neutral-400">{feature}</td>
                    {values.map((val, i) => (
                      <td key={i} className={`py-4 text-center ${val === '✓' ? 'text-green-400' : val === '—' ? 'text-neutral-600' : 'text-neutral-300'}`}>
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex gap-4 justify-center mt-10">
            <Link to="/contact" className="bg-red-600 text-white rounded-full px-8 py-3 text-sm font-medium hover:bg-red-700 transition-colors">
              get a quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
