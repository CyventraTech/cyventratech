import React from 'react'
import { Link } from 'react-router-dom'

const links = {
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Get In Touch', href: '/contact' },
  ],
  Services: [
    { label: 'Website Development', href: '/services#website-development' },
    { label: 'Cloud Security', href: '/services#cloud-security' },
    { label: 'Cybersecurity Solutions', href: '/services#cybersecurity' },
    { label: 'AI & Business Automation', href: '/services#ai-automation' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="mb-5">
              <img src="/logo-full.png" alt="CYVENTRA Technologies"
                className="h-12 sm:h-14 w-auto object-contain" />
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
              End-to-end technology services — cybersecurity, cloud, AI, and IT solutions for businesses of every scale.
            </p>
            <div className="flex gap-3 mt-5">
              {['T', 'L', 'G', 'Y'].map((letter, i) => {
                const labels = ['Twitter', 'LinkedIn', 'GitHub', 'YouTube']
                const urls = ['https://twitter.com', 'https://linkedin.com', 'https://github.com', 'https://youtube.com']
                return (
                  <a key={letter} href={urls[i]} target="_blank" rel="noopener noreferrer"
                    aria-label={`Follow on ${labels[i]}`}
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-neutral-400 hover:text-white hover:border-red-600 transition-colors text-xs font-bold">
                    {letter}
                  </a>
                )
              })}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-white font-semibold text-xs mb-4 uppercase tracking-widest">{category}</h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link to={item.href} className="text-neutral-400 hover:text-white text-sm transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} CYVENTRA Technologies. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/cookies" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
