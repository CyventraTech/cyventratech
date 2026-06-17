import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import blogs from '../data/blogs'

const categories = ['all', 'cybersecurity', 'cloud', 'ai & automation']

const categoryColors: Record<string, string> = {
  'cybersecurity': 'text-red-400 bg-red-950/50 border-red-800/30',
  'cloud': 'text-blue-400 bg-blue-950/50 border-blue-800/30',
  'ai & automation': 'text-purple-400 bg-purple-950/50 border-purple-800/30',
  'compliance': 'text-yellow-400 bg-yellow-950/50 border-yellow-800/30',
  'it infrastructure': 'text-green-400 bg-green-950/50 border-green-800/30',
}

export default function Blogs() {
  const [active, setActive] = useState('all')
  const filtered = active === 'all' ? blogs : blogs.filter(b => b.category === active)

  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* Hero */}
      <section className="bg-neutral-950 border-b border-white/10 pt-24 pb-14 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <span className="text-red-600 text-xs uppercase tracking-widest font-semibold">resources</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mt-3 mb-5 leading-tight">
            insights & <span className="text-red-500">blog</span>
          </h1>
          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Expert insights on cybersecurity, cloud, AI, and technology — written by the CYVENTRA team to help you stay informed, protected, and ahead.
          </p>
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

      {/* Featured */}
      {active === 'all' && blogs[0] && (
        <section className="px-4 sm:px-6 md:px-10 pb-8 max-w-7xl mx-auto">
          <Link to={`/blogs/${blogs[0].slug}`}
            className="relative rounded-3xl overflow-hidden h-64 sm:h-80 md:h-96 group cursor-pointer block">
            <img src={blogs[0].image} alt={blogs[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 sm:p-8 max-w-2xl">
              <span className={`text-xs font-bold px-3 py-1 rounded-full border capitalize ${categoryColors[blogs[0].category] || ''}`}>
                {blogs[0].category}
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white mt-3 mb-2 leading-tight">
                {blogs[0].title}
              </h2>
              <div className="flex items-center gap-4 text-white/50 text-xs">
                <span>{blogs[0].date}</span>
                <span>•</span>
                <span>{blogs[0].readTime}</span>
              </div>
            </div>
            <div className="absolute top-6 right-6 bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-full">featured</div>
          </Link>
        </section>
      )}

      {/* Grid */}
      <section className="px-4 sm:px-6 md:px-10 pb-20 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.slice(active === 'all' ? 1 : 0).map(blog => (
            <Link key={blog.id} to={`/blogs/${blog.slug}`}
              className="bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden hover:border-red-600/40 transition-colors group flex flex-col">
              <div className="relative h-44 overflow-hidden">
                <img src={blog.image} alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border capitalize ${categoryColors[blog.category] || ''}`}>
                    {blog.category}
                  </span>
                  <span className="text-neutral-600 text-xs">{blog.readTime}</span>
                </div>
                <h3 className="text-white font-bold text-base leading-snug mb-2 flex-1">{blog.title}</h3>
                <p className="text-neutral-500 text-xs leading-relaxed mb-4 line-clamp-2">{blog.excerpt}</p>
                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <span className="text-neutral-600 text-xs">{blog.date}</span>
                  <span className="text-xs text-red-500 hover:text-red-400 font-semibold">read more →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-neutral-950 border-t border-white/10 py-16 px-4 sm:px-6 md:px-10 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">stay ahead of cyber threats</h2>
          <p className="text-neutral-400 text-sm mb-7">Get the latest insights delivered to your inbox every week.</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="your@email.com"
              className="flex-1 bg-neutral-900 border border-white/20 rounded-full px-5 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-red-600 transition-colors" />
            <button type="submit" className="bg-red-600 text-white rounded-full px-7 py-3 text-sm font-medium hover:bg-red-700 transition-colors whitespace-nowrap">
              subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
