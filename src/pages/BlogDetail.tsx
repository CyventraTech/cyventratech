import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import blogs from '../data/blogs'

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogs.find(b => b.slug === slug)

  if (!post) return <Navigate to="/blogs" replace />

  const related = blogs.filter(b => b.id !== post.id).slice(0, 2)

  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* Hero */}
      <section className="relative pt-24 pb-0">
        <div className="relative h-64 sm:h-80 md:h-[420px] overflow-hidden">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        </div>
      </section>

      {/* Article layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10 md:py-16">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Main content */}
          <article className="flex-1 min-w-0">

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <Link to="/blogs" className="text-xs text-red-500 hover:text-red-400 transition-colors">← back to blogs</Link>
              <span className="text-neutral-600 text-xs">•</span>
              <span className="text-xs bg-red-950/60 text-red-400 border border-red-800/40 rounded-full px-3 py-1 capitalize">{post.category}</span>
              <span className="text-neutral-500 text-xs">{post.readTime}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6 text-white">
              {post.title}
            </h1>

            {/* Author */}
            <div className="flex items-center gap-4 pb-8 mb-8 border-b border-white/10">
              <img src={post.authorAvatar} alt={post.author}
                className="w-12 h-12 rounded-full object-cover border-2 border-red-600/40" />
              <div>
                <div className="text-white font-semibold text-sm">{post.author}</div>
                <div className="text-neutral-500 text-xs">{post.authorRole}</div>
                <div className="text-neutral-600 text-xs mt-0.5">{post.date}</div>
              </div>
            </div>

            {/* Article body */}
            <div className="prose-cyventra">
              {post.content.map((block, i) => {
                if (block.type === 'paragraph') return (
                  <p key={i} className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-6">{block.text}</p>
                )
                if (block.type === 'heading') return (
                  <h2 key={i} className="text-2xl sm:text-3xl font-black text-white mt-10 mb-4">{block.text}</h2>
                )
                if (block.type === 'subheading') return (
                  <h3 key={i} className="text-lg sm:text-xl font-bold text-red-400 mt-7 mb-3">{block.text}</h3>
                )
                if (block.type === 'quote') return (
                  <blockquote key={i} className="border-l-4 border-red-600 bg-red-950/20 rounded-r-xl pl-6 pr-5 py-5 my-8">
                    <p className="text-white/90 text-base sm:text-lg italic leading-relaxed">"{block.text}"</p>
                  </blockquote>
                )
                if (block.type === 'list') return (
                  <ul key={i} className="space-y-3 my-6">
                    {block.items?.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-neutral-300 text-base leading-relaxed">
                        <span className="text-red-500 mt-1 flex-shrink-0">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )
                return null
              })}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-white/10">
              {post.tags.map(tag => (
                <span key={tag} className="text-xs bg-neutral-900 border border-white/10 text-neutral-400 rounded-full px-4 py-1.5">
                  #{tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 bg-gradient-to-r from-blue-950 to-red-950 border border-white/10 rounded-2xl p-6 sm:p-8">
              <h3 className="text-white font-bold text-xl mb-2">Need help with this for your business?</h3>
              <p className="text-neutral-400 text-sm mb-5">Our team is happy to discuss your specific situation with no obligation.</p>
              <Link to="/contact"
                className="inline-flex items-center bg-red-600 text-white font-semibold rounded-full px-7 py-3 hover:bg-red-700 transition-colors">
                talk to our team →
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="lg:sticky lg:top-28 space-y-6">

              {/* About author */}
              <div className="bg-neutral-900 border border-white/10 rounded-2xl p-6">
                <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">about the author</h3>
                <div className="flex items-center gap-3 mb-3">
                  <img src={post.authorAvatar} alt={post.author} className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <div className="text-white font-semibold">{post.author}</div>
                    <div className="text-neutral-500 text-xs">{post.authorRole}</div>
                  </div>
                </div>
                <p className="text-neutral-500 text-xs leading-relaxed">
                  Part of the CYVENTRA Technologies team, based in Cuttack, Odisha.
                </p>
              </div>

              {/* Related posts */}
              <div className="bg-neutral-900 border border-white/10 rounded-2xl p-6">
                <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">more articles</h3>
                <div className="space-y-4">
                  {related.map(r => (
                    <Link key={r.id} to={`/blogs/${r.slug}`}
                      className="flex gap-3 group">
                      <img src={r.image} alt={r.title}
                        className="w-16 h-16 rounded-xl object-cover flex-shrink-0" />
                      <div>
                        <p className="text-white text-xs font-medium leading-snug group-hover:text-red-400 transition-colors line-clamp-2">{r.title}</p>
                        <p className="text-neutral-600 text-xs mt-1">{r.readTime}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA box */}
              <div className="bg-red-700 rounded-2xl p-6 text-center">
                <div className="text-3xl mb-3">🛡️</div>
                <h3 className="text-white font-bold mb-2">protect your business</h3>
                <p className="text-red-200 text-xs mb-4">Get a free security assessment from our team.</p>
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
