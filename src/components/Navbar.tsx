import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import CyventraLogo from './CyventraLogo'

const serviceLinks = [
  { label: 'Website Development', href: '/services#website-development', anchor: 'website-development', icon: '🌐' },
  { label: 'IoT Solutions', href: '/services#iot-solutions', anchor: 'iot-solutions', icon: '📡' },
  { label: 'Cloud Services & Migration', href: '/services#cloud-services', anchor: 'cloud-services', icon: '☁️' },
  { label: 'Cloud Security', href: '/services#cloud-security', anchor: 'cloud-security', icon: '🔒' },
  { label: 'DevSecOps', href: '/services#devsecops', anchor: 'devsecops', icon: '⚙️' },
  { label: 'AI Security', href: '/services#ai-security', anchor: 'ai-security', icon: '🧠' },
  { label: 'Network & Server Management', href: '/services#network-server', anchor: 'network-server', icon: '🖧' },
  { label: 'Cybersecurity Solutions', href: '/services#cybersecurity', anchor: 'cybersecurity', icon: '🛡️' },
  { label: 'IT Helpdesk & Technical Support', href: '/services#helpdesk', anchor: 'helpdesk', icon: '🎧' },
  { label: 'Data Backup & Recovery', href: '/services#data-backup', anchor: 'data-backup', icon: '💾' },
  { label: 'Microsoft 365 & Google Workspace', href: '/services#microsoft-google', anchor: 'microsoft-google', icon: '📧' },
  { label: 'AI & Business Automation', href: '/services#ai-automation', anchor: 'ai-automation', icon: '🤖' },
  { label: 'Data Analytics & Business Intelligence', href: '/services#data-analytics', anchor: 'data-analytics', icon: '📊' },
  { label: 'CCTV & Security Solutions', href: '/services#cctv', anchor: 'cctv', icon: '📹' },
  { label: 'Annual Maintenance Contracts (AMC)', href: '/services#amc', anchor: 'amc', icon: '🔧' },
]

const navLinks = [
  { label: 'about us', href: '/about', dropdown: false },
  { label: 'services', href: '/services', dropdown: true },
  { label: 'careers', href: '/careers', dropdown: false },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
    setMobileServicesOpen(false)
  }, [location])

  // After navigating to /services, scroll to the anchor
  useEffect(() => {
    if (location.pathname === '/services' && location.hash) {
      const id = location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
  }, [location])

  const handleServiceClick = (anchor: string) => {
    setServicesOpen(false)
    setMenuOpen(false)
    if (location.pathname === '/services') {
      // already on services page — just scroll
      const el = document.getElementById(anchor)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      // navigate to /services#anchor, useEffect above will scroll
      navigate(`/services#${anchor}`)
    }
  }

  const isHero = location.pathname === '/'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 pt-3 pb-3 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : ''
      }`}
    >
      <nav className="flex items-center justify-between gap-4 max-w-7xl mx-auto">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center flex-shrink-0 hover:opacity-85 transition-opacity"
          aria-label="CYVENTRA home"
        >
          <img
            src="/logo-full.png"
            alt="CYVENTRA Technologies"
            className="h-20 md:h-24 w-auto object-contain"
            style={{ mixBlendMode: 'screen' }}
          />
        </Link>

        {/* Center nav — desktop */}
        <div
          className={`hidden md:flex items-center gap-1 backdrop-blur rounded-full px-3 py-2 ${
            isHero && !scrolled ? 'bg-black/40' : 'bg-neutral-900/90'
          }`}
        >
          {navLinks.map((link) =>
            link.dropdown ? (
              /* ── Services with hover dropdown ── */
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  to={link.href}
                  className={`flex items-center gap-1 text-sm px-4 py-2 rounded-full transition-colors capitalize ${
                    location.pathname === link.href
                      ? 'bg-red-700 text-white'
                      : 'text-neutral-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                  <svg
                    className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                {/* Invisible bridge fills the gap between button and panel so mouse doesn't leave */}
                <div className="absolute top-full left-0 right-0 h-4" />

                {/* Dropdown panel */}
                <div
                  className={`absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[620px] transition-all duration-200 ${
                    servicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
                >
                  <div className="bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
                    {/* Header */}
                    <div className="px-5 py-3 border-b border-white/10 bg-gradient-to-r from-blue-950/60 to-red-950/40">
                      <p className="text-xs uppercase tracking-widest text-white/50 font-semibold">our services</p>
                    </div>
                    {/* Grid of services */}
                    <div className="grid grid-cols-3 gap-0">
                      {serviceLinks.map((s, i) => (
                        <button
                          key={s.href}
                          onClick={() => handleServiceClick(s.anchor)}
                          className={`flex items-center gap-2 px-4 py-3 hover:bg-white/5 transition-colors group text-left w-full ${
                            (i + 1) % 3 !== 0 ? 'border-r border-white/5' : ''
                          } ${i < serviceLinks.length - 3 ? 'border-b border-white/5' : ''}`}
                        >
                          <span className="text-base flex-shrink-0">{s.icon}</span>
                          <span className="text-xs text-neutral-300 group-hover:text-white transition-colors leading-tight">
                            {s.label}
                          </span>
                        </button>
                      ))}
                    </div>
                    {/* Footer CTA */}
                    <div className="px-5 py-3 border-t border-white/10 bg-neutral-950/60">
                      <Link
                        to="/services"
                        className="text-xs text-red-500 hover:text-red-400 transition-colors font-medium flex items-center gap-1"
                      >
                        view all services
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm px-4 py-2 rounded-full transition-colors capitalize ${
                  location.pathname === link.href
                    ? 'bg-red-700 text-white'
                    : 'text-neutral-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="bg-red-600 text-white text-sm font-medium rounded-full px-6 py-3 hover:bg-red-700 transition-colors hidden sm:block"
          >
            get in touch
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-neutral-900/95 backdrop-blur rounded-2xl mt-3 p-4 flex flex-col gap-1">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.href}>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between text-sm px-4 py-3 rounded-xl text-neutral-300 hover:text-white hover:bg-white/10 transition-colors capitalize"
                >
                  {link.label}
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* Mobile services submenu */}
                <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
                  <div className="ml-4 mt-1 border-l-2 border-red-700/40 pl-3 flex flex-col gap-0.5">
                    {serviceLinks.map((s) => (
                      <button
                        key={s.anchor}
                        onClick={() => handleServiceClick(s.anchor)}
                        className="flex items-center gap-2 text-sm px-3 py-2.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors text-left w-full"
                      >
                        <span className="text-base">{s.icon}</span>
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm px-4 py-3 rounded-xl transition-colors capitalize ${
                  location.pathname === link.href
                    ? 'bg-red-700 text-white'
                    : 'text-neutral-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            to="/contact"
            className="bg-red-600 text-white text-sm font-medium rounded-xl px-4 py-3 hover:bg-red-700 transition-colors text-center mt-2"
          >
            get in touch
          </Link>
        </div>
      </div>
    </header>
  )
}
