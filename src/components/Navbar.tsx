import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const serviceLinks = [
  { label: 'Website Development', anchor: 'website-development', icon: '🌐' },
  { label: 'IoT Solutions', anchor: 'iot-solutions', icon: '📡' },
  { label: 'Cloud Services & Migration', anchor: 'cloud-services', icon: '☁️' },
  { label: 'Cloud Security', anchor: 'cloud-security', icon: '🔒' },
  { label: 'DevSecOps', anchor: 'devsecops', icon: '⚙️' },
  { label: 'AI Security', anchor: 'ai-security', icon: '🧠' },
  { label: 'Network & Server Management', anchor: 'network-server', icon: '🖧' },
  { label: 'Cybersecurity Solutions', anchor: 'cybersecurity', icon: '🛡️' },
  { label: 'IT Helpdesk & Technical Support', anchor: 'helpdesk', icon: '🎧' },
  { label: 'Data Backup & Recovery', anchor: 'data-backup', icon: '💾' },
  { label: 'Microsoft 365 & Google Workspace', anchor: 'microsoft-google', icon: '📧' },
  { label: 'AI & Business Automation', anchor: 'ai-automation', icon: '🤖' },
  { label: 'Data Analytics & Business Intelligence', anchor: 'data-analytics', icon: '📊' },
  { label: 'CCTV & Security Solutions', anchor: 'cctv', icon: '📹' },
  { label: 'Annual Maintenance Contracts (AMC)', anchor: 'amc', icon: '🔧' },
]

const industryLinks = [
  { label: 'Banking & Finance', icon: '🏦' },
  { label: 'Healthcare', icon: '🏥' },
  { label: 'Retail & E-Commerce', icon: '🛒' },
  { label: 'Education & EdTech', icon: '🎓' },
  { label: 'Manufacturing & Logistics', icon: '🏭' },
  { label: 'Government & Public Sector', icon: '🏛️' },
  { label: 'IT & Technology Startups', icon: '💻' },
  { label: 'Hospitality & Tourism', icon: '🏨' },
  { label: 'Real Estate & Construction', icon: '🏢' },
]

const resourceLinks = [
  { label: 'Blogs', href: '/blogs', icon: '📝', desc: 'Expert insights & guides' },
  { label: 'Case Studies', href: '/case-studies', icon: '📊', desc: 'Real results for real businesses' },
]

const navLinks = [
  { label: 'about us', href: '/about', dropdown: '' },
  { label: 'services', href: '/services', dropdown: 'services' },
  { label: 'industries', href: '/industries', dropdown: 'industries' },
  { label: 'resources', href: '/blogs', dropdown: 'resources' },
  { label: 'careers', href: '/careers', dropdown: '' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState('')
  const [mobileSvc, setMobileSvc] = useState(false)
  const [mobileInd, setMobileInd] = useState(false)
  const [mobileRes, setMobileRes] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false); setOpenDropdown('') }, [location])

  useEffect(() => {
    if (location.pathname === '/services' && location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''))
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
    }
  }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleServiceClick = (anchor: string) => {
    setOpenDropdown(''); setMenuOpen(false)
    if (location.pathname === '/services') {
      document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate(`/services#${anchor}`)
    }
  }

  const isHero = location.pathname === '/'
  const navBg = isHero && !scrolled ? 'bg-black/40' : 'bg-neutral-900/90'

  const ChevronIcon = ({ open }: { open: boolean }) => (
    <svg className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-10 py-2 transition-all duration-300 ${scrolled || menuOpen ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : ''}`}>
      <nav className="flex items-center justify-between gap-2 max-w-7xl mx-auto">

        {/* Logo */}
        <Link to="/" aria-label="CYVENTRA home" className="flex-shrink-0 hover:opacity-85 transition-opacity">
          <img src="/logo-full.png" alt="CYVENTRA Technologies" className="h-12 sm:h-14 md:h-16 w-auto object-contain" />
        </Link>

        {/* Desktop nav pill */}
        <div className={`hidden md:flex items-center gap-1 backdrop-blur rounded-full px-3 py-2 ${navBg}`}>
          {navLinks.map((link) => {
            const isActive = location.pathname.startsWith(link.href) && link.href !== '/'
            const isOpen = openDropdown === link.dropdown

            if (!link.dropdown) return (
              <Link key={link.href} to={link.href}
                className={`text-sm px-4 py-2 rounded-full transition-colors capitalize ${isActive ? 'bg-red-700 text-white' : 'text-neutral-300 hover:text-white hover:bg-white/10'}`}>
                {link.label}
              </Link>
            )

            return (
              <div key={link.href} className="relative"
                onMouseEnter={() => setOpenDropdown(link.dropdown)}
                onMouseLeave={() => setOpenDropdown('')}>
                <Link to={link.href}
                  className={`flex items-center gap-1 text-sm px-4 py-2 rounded-full transition-colors capitalize ${isActive ? 'bg-red-700 text-white' : 'text-neutral-300 hover:text-white hover:bg-white/10'}`}>
                  {link.label} <ChevronIcon open={isOpen} />
                </Link>
                {/* bridge gap */}
                <div className="absolute top-full left-0 right-0 h-4" />

                {/* SERVICES dropdown */}
                {link.dropdown === 'services' && (
                  <div className={`absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[620px] transition-all duration-200 ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                    <div className="bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
                      <div className="px-5 py-3 border-b border-white/10 bg-gradient-to-r from-blue-950/60 to-red-950/40">
                        <p className="text-xs uppercase tracking-widest text-white/50 font-semibold">our services</p>
                      </div>
                      <div className="grid grid-cols-3 gap-0">
                        {serviceLinks.map((s, i) => (
                          <button key={s.anchor} onClick={() => handleServiceClick(s.anchor)}
                            className={`flex items-center gap-2 px-4 py-3 hover:bg-white/5 transition-colors group text-left w-full ${(i+1)%3!==0?'border-r border-white/5':''} ${i<serviceLinks.length-3?'border-b border-white/5':''}`}>
                            <span className="text-base flex-shrink-0">{s.icon}</span>
                            <span className="text-xs text-neutral-300 group-hover:text-white leading-tight">{s.label}</span>
                          </button>
                        ))}
                      </div>
                      <div className="px-5 py-3 border-t border-white/10 bg-neutral-950/60">
                        <Link to="/services" className="text-xs text-red-500 hover:text-red-400 font-medium flex items-center gap-1">
                          view all services <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* INDUSTRIES dropdown */}
                {link.dropdown === 'industries' && (
                  <div className={`absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-72 transition-all duration-200 ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                    <div className="bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
                      <div className="px-5 py-3 border-b border-white/10 bg-gradient-to-r from-blue-950/60 to-red-950/40">
                        <p className="text-xs uppercase tracking-widest text-white/50 font-semibold">industries we serve</p>
                      </div>
                      {industryLinks.map((ind, i) => (
                        <Link key={ind.label} to="/industries"
                          className={`flex items-center gap-3 px-5 py-3 hover:bg-white/5 transition-colors group ${i<industryLinks.length-1?'border-b border-white/5':''}`}>
                          <span className="text-lg">{ind.icon}</span>
                          <span className="text-sm text-neutral-300 group-hover:text-white">{ind.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* RESOURCES dropdown */}
                {link.dropdown === 'resources' && (
                  <div className={`absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-60 transition-all duration-200 ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                    <div className="bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
                      <div className="px-5 py-3 border-b border-white/10 bg-gradient-to-r from-blue-950/60 to-red-950/40">
                        <p className="text-xs uppercase tracking-widest text-white/50 font-semibold">insights & resources</p>
                      </div>
                      {resourceLinks.map((r, i) => (
                        <Link key={r.href} to={r.href}
                          className={`flex items-center gap-3 px-5 py-4 hover:bg-white/5 transition-colors group ${i<resourceLinks.length-1?'border-b border-white/5':''}`}>
                          <span className="text-xl">{r.icon}</span>
                          <div>
                            <div className="text-sm text-white font-medium group-hover:text-red-400 transition-colors">{r.label}</div>
                            <div className="text-xs text-neutral-500">{r.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link to="/contact" className="bg-red-600 text-white text-xs sm:text-sm font-medium rounded-full px-4 sm:px-6 py-2.5 sm:py-3 hover:bg-red-700 transition-colors">
            get in touch
          </Link>
          <button className="md:hidden flex flex-col gap-1.5 p-2 min-w-[44px] min-h-[44px] items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-neutral-900/98 backdrop-blur rounded-2xl mt-2 p-4 flex flex-col gap-1 overflow-y-auto max-h-[75vh]">

          <Link to="/about" className={`text-sm px-4 py-3 rounded-xl transition-colors min-h-[44px] flex items-center ${location.pathname==='/about'?'bg-red-700 text-white':'text-neutral-300 hover:text-white hover:bg-white/10'}`}>about us</Link>

          {/* mobile services */}
          <div>
            <button onClick={() => setMobileSvc(!mobileSvc)} className="w-full flex items-center justify-between text-sm px-4 py-3 rounded-xl text-neutral-300 hover:text-white hover:bg-white/10 transition-colors min-h-[44px]">
              services <ChevronIcon open={mobileSvc} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileSvc ? 'max-h-[500px]' : 'max-h-0'}`}>
              <div className="ml-4 mt-1 border-l-2 border-red-700/40 pl-3 flex flex-col gap-0.5">
                {serviceLinks.map(s => (
                  <button key={s.anchor} onClick={() => handleServiceClick(s.anchor)}
                    className="flex items-center gap-2 text-sm px-3 py-2.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors text-left w-full min-h-[44px]">
                    <span className="text-base">{s.icon}</span>{s.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* mobile industries */}
          <div>
            <button onClick={() => setMobileInd(!mobileInd)} className="w-full flex items-center justify-between text-sm px-4 py-3 rounded-xl text-neutral-300 hover:text-white hover:bg-white/10 transition-colors min-h-[44px]">
              industries <ChevronIcon open={mobileInd} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileInd ? 'max-h-[400px]' : 'max-h-0'}`}>
              <div className="ml-4 mt-1 border-l-2 border-blue-700/40 pl-3 flex flex-col gap-0.5">
                {industryLinks.map(ind => (
                  <Link key={ind.label} to="/industries"
                    className="flex items-center gap-2 text-sm px-3 py-2.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors min-h-[44px]">
                    <span className="text-base">{ind.icon}</span>{ind.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* mobile resources */}
          <div>
            <button onClick={() => setMobileRes(!mobileRes)} className="w-full flex items-center justify-between text-sm px-4 py-3 rounded-xl text-neutral-300 hover:text-white hover:bg-white/10 transition-colors min-h-[44px]">
              resources <ChevronIcon open={mobileRes} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileRes ? 'max-h-[200px]' : 'max-h-0'}`}>
              <div className="ml-4 mt-1 border-l-2 border-red-700/40 pl-3 flex flex-col gap-0.5">
                {resourceLinks.map(r => (
                  <Link key={r.href} to={r.href}
                    className="flex items-center gap-2 text-sm px-3 py-2.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors min-h-[44px]">
                    <span className="text-base">{r.icon}</span>{r.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/careers" className={`text-sm px-4 py-3 rounded-xl transition-colors min-h-[44px] flex items-center ${location.pathname==='/careers'?'bg-red-700 text-white':'text-neutral-300 hover:text-white hover:bg-white/10'}`}>careers</Link>
          <Link to="/contact" className="bg-red-600 text-white text-sm font-medium rounded-xl px-4 py-3 hover:bg-red-700 transition-colors text-center mt-2 min-h-[44px] flex items-center justify-center">get in touch</Link>
        </div>
      </div>
    </header>
  )
}
