import React from 'react'
import { Link } from 'react-router-dom'
import CyventraLogo from './CyventraLogo'

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
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img
                src="/logo-full.png"
                alt="CYVENTRA Technologies"
                className="h-16 w-auto object-contain"
                style={{ mixBlendMode: 'screen' }}
              />
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-[280px]">
              Advanced cybersecurity solutions protecting enterprises and startups worldwide from evolving digital threats.
            </p>
            <div className="flex gap-4 mt-6">
              {['twitter', 'linkedin', 'github', 'youtube'].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow on ${social}`}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-neutral-400 hover:text-white hover:border-red-600 transition-colors"
                >
                  <span className="text-xs capitalize">{social[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">
                {category}
              </h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="text-neutral-400 hover:text-white text-sm transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} CYVENTRA Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
