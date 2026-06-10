import React, { useState } from 'react'

const categories = ['all', 'blog', 'whitepaper', 'case study', 'guide']

const resources = [
  {
    type: 'blog',
    date: 'May 28, 2025',
    title: 'The Rise of AI-Powered Ransomware: What You Need to Know',
    excerpt: 'Attackers are now using large language models to craft more convincing phishing lures and automate lateral movement. Here\'s how to stay ahead.',
    readTime: '7 min read',
    tag: 'Threat Intelligence',
  },
  {
    type: 'whitepaper',
    date: 'Apr 15, 2025',
    title: 'Zero Trust Architecture: A Practical Implementation Guide',
    excerpt: 'A comprehensive blueprint for transitioning from perimeter-based to identity-centric security across hybrid cloud environments.',
    readTime: '24 min read',
    tag: 'Architecture',
  },
  {
    type: 'case study',
    date: 'Mar 3, 2025',
    title: 'How FinServe Corp Reduced Breach Risk by 87% with CYVENTRA',
    excerpt: 'A global financial services firm deployed CYVENTRA Cloud Shield and EndGuard, cutting incident response time from 4 hours to 8 minutes.',
    readTime: '12 min read',
    tag: 'Case Study',
  },
  {
    type: 'guide',
    date: 'Feb 20, 2025',
    title: 'SOC 2 Type II Compliance: The Complete 2025 Checklist',
    excerpt: 'Step-by-step guidance for auditing your controls, collecting evidence, and achieving SOC 2 Type II certification with minimal disruption.',
    readTime: '18 min read',
    tag: 'Compliance',
  },
  {
    type: 'blog',
    date: 'Jan 10, 2025',
    title: 'Kubernetes Security Best Practices in 2025',
    excerpt: 'Container orchestration misconfigurations remain the #1 cloud breach vector. We break down the top 10 risks and how to remediate each.',
    readTime: '9 min read',
    tag: 'Cloud Security',
  },
  {
    type: 'whitepaper',
    date: 'Dec 5, 2024',
    title: 'State of Enterprise Cybersecurity 2025 Report',
    excerpt: 'Our annual analysis of 2,000+ security incidents reveals the top attack vectors, industry trends, and recommendations for the year ahead.',
    readTime: '35 min read',
    tag: 'Research',
  },
]

const typeColors: Record<string, string> = {
  blog: 'text-blue-400 bg-blue-950/50 border-blue-800/30',
  whitepaper: 'text-red-400 bg-red-950/50 border-red-800/30',
  'case study': 'text-green-400 bg-green-950/50 border-green-800/30',
  guide: 'text-yellow-400 bg-yellow-950/50 border-yellow-800/30',
}

export default function Resources() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? resources : resources.filter((r) => r.type === active)

  return (
    <main className="bg-black text-white pt-28">
      {/* Hero */}
      <section className="px-6 md:px-10 py-20 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <span className="text-red-600 text-xs uppercase tracking-widest font-semibold">knowledge hub</span>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight mt-4 mb-6 leading-tight">
            resources &<br /><span className="text-red-600">insights</span>
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed">
            Stay informed with the latest threat intelligence, research, and practical guides from the CYVENTRA security team.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-10">
        <div className="flex flex-wrap gap-2">
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

      {/* Resources grid */}
      <section className="px-6 md:px-10 pb-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((r) => (
            <article
              key={r.title}
              className="bg-neutral-900 border border-white/10 rounded-2xl p-7 hover:border-red-600/40 transition-colors flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full border capitalize ${typeColors[r.type]}`}>
                  {r.type}
                </span>
                <span className="text-neutral-600 text-xs">{r.date}</span>
              </div>
              <h3 className="text-white font-semibold text-lg leading-snug mb-3">{r.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed flex-grow">{r.excerpt}</p>
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
                <span className="text-xs text-neutral-500">{r.readTime}</span>
                <button className="text-sm text-red-500 hover:text-red-400 transition-colors font-medium">
                  read more →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-neutral-950 py-20 px-6 md:px-10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-medium mb-4">stay one step ahead</h2>
          <p className="text-neutral-400 mb-8">Get the latest threat intelligence and security insights delivered to your inbox weekly.</p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-neutral-900 border border-white/20 rounded-full px-5 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-red-600 transition-colors"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="bg-red-600 text-white rounded-full px-7 py-3 text-sm font-medium hover:bg-red-700 transition-colors whitespace-nowrap"
            >
              subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
