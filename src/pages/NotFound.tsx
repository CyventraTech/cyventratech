import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4 text-center overflow-hidden">

      {/* Background glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #1a3a8f 0%, transparent 70%)' }} />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #cc1a1a 0%, transparent 70%)' }} />

      <div className="relative max-w-lg">
        {/* 404 */}
        <div className="text-[8rem] sm:text-[10rem] font-black leading-none tracking-tight mb-2">
          <span className="text-red-600">4</span>
          <span className="text-white">0</span>
          <span className="text-blue-500">4</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          page not found
        </h1>
        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-10">
          Looks like this page took a wrong turn — or maybe it never existed. Let's get you back to safety.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/"
            className="bg-red-600 text-white font-semibold rounded-full px-8 py-3 hover:bg-red-700 transition-colors min-h-[44px] flex items-center justify-center">
            back to home
          </Link>
          <Link to="/contact"
            className="border border-white/20 text-white font-medium rounded-full px-8 py-3 hover:bg-white/5 transition-colors min-h-[44px] flex items-center justify-center">
            contact us
          </Link>
        </div>

        {/* Quick links */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-neutral-600 text-xs mb-4 uppercase tracking-widest">popular pages</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: 'Services', href: '/services' },
              { label: 'Industries', href: '/industries' },
              { label: 'About Us', href: '/about' },
              { label: 'Blogs', href: '/blogs' },
              { label: 'Case Studies', href: '/case-studies' },
            ].map(link => (
              <Link key={link.href} to={link.href}
                className="text-xs bg-neutral-900 border border-white/10 hover:border-red-600/50 text-neutral-400 hover:text-white rounded-full px-4 py-2 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
