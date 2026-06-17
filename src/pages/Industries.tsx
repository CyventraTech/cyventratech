import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const industries = [
  {
    id: 'banking-finance',
    icon: '🏦',
    title: 'Banking & Financial Services',
    shortDesc: 'Securing transactions, data, and compliance for banks, NBFCs, and fintechs.',
    image: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=800&q=80',
    challenge: 'Financial institutions face constant threats — from phishing attacks targeting customers to ransomware locking core banking systems. Regulatory compliance (RBI, SEBI, PCI-DSS) adds another layer of complexity.',
    whyCyventra: 'CYVENTRA delivers end-to-end cybersecurity, 24/7 SOC monitoring, and compliance automation tailored to financial regulations. Our AI-powered threat detection identifies fraud attempts in real time.',
    services: ['Cybersecurity Solutions', 'SOC Monitoring', 'Compliance Automation', 'Data Backup & Recovery', 'Network & Server Management'],
  },
  {
    id: 'healthcare',
    icon: '🏥',
    title: 'Healthcare & Life Sciences',
    shortDesc: 'Protecting patient data, medical systems, and clinical workflows.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
    challenge: 'Healthcare organisations hold highly sensitive patient data and rely on always-on systems. Downtime or data breaches can have life-or-death consequences and severe regulatory penalties.',
    whyCyventra: 'We secure Electronic Health Records (EHR), hospital networks, and IoT medical devices. Our data backup and recovery ensures zero data loss, while our CCTV solutions protect physical premises.',
    services: ['Data Backup & Recovery', 'Cybersecurity Solutions', 'CCTV & Security', 'Network Management', 'IT Helpdesk Support'],
  },
  {
    id: 'retail-ecommerce',
    icon: '🛒',
    title: 'Retail & E-Commerce',
    shortDesc: 'Securing customer data, payment systems, and digital storefronts.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    challenge: 'Retailers process millions of transactions and hold vast customer data. E-commerce platforms are prime targets for payment fraud, DDoS attacks, and data breaches during peak sales periods.',
    whyCyventra: 'CYVENTRA secures your payment infrastructure, e-commerce platforms, and customer databases. Our cloud services ensure scalability during traffic spikes without compromising security.',
    services: ['Cloud Services & Migration', 'Cybersecurity Solutions', 'Website Development', 'AI & Business Automation', 'Data Analytics & BI'],
  },
  {
    id: 'education',
    icon: '🎓',
    title: 'Education & EdTech',
    shortDesc: 'Empowering institutions with secure, connected, and modern IT infrastructure.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
    challenge: 'Schools, colleges, and EdTech platforms manage student records, online assessments, and remote learning infrastructure — all requiring reliable uptime, data privacy, and cyber protection.',
    whyCyventra: 'We build and secure IT environments for educational institutions — from campus network management and CCTV to cloud migration and Microsoft 365 setup for faculty and students.',
    services: ['Network & Server Management', 'Microsoft 365 & Google Workspace', 'CCTV & Security', 'Cloud Services', 'IT Helpdesk Support'],
  },
  {
    id: 'manufacturing',
    icon: '🏭',
    title: 'Manufacturing & Logistics',
    shortDesc: 'Connecting OT/IT systems and securing supply chain operations.',
    image: 'https://images.unsplash.com/photo-1565793979-26f2bf4e49c9?w=800&q=80',
    challenge: 'Modern manufacturing relies on interconnected OT (Operational Technology) and IT systems. Supply chain disruptions from cyber incidents or system failures can halt production and cost millions.',
    whyCyventra: 'CYVENTRA secures industrial networks, deploys IoT monitoring solutions, and ensures business continuity through robust backup and recovery plans tailored for manufacturing environments.',
    services: ['IoT Solutions', 'Network & Server Management', 'Data Backup & Recovery', 'CCTV & Security', 'Cybersecurity Solutions'],
  },
  {
    id: 'government',
    icon: '🏛️',
    title: 'Government & Public Sector',
    shortDesc: 'Protecting citizen data and critical public infrastructure.',
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80',
    challenge: 'Government bodies manage highly sensitive citizen data and critical national infrastructure. They are increasingly targeted by sophisticated state-sponsored and criminal cyber actors.',
    whyCyventra: 'We provide government-grade security — including DevSecOps practices, AI Security, network hardening, and compliance with Indian data protection regulations.',
    services: ['Cybersecurity Solutions', 'DevSecOps', 'AI Security', 'Network Management', 'Data Backup & Recovery'],
  },
  {
    id: 'it-startups',
    icon: '💻',
    title: 'IT & Technology Startups',
    shortDesc: 'Scalable security and cloud infrastructure for fast-growing tech companies.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
    challenge: 'Startups move fast and often deprioritise security. Yet a single breach or compliance failure can destroy customer trust, attract regulatory action, and derail growth.',
    whyCyventra: 'CYVENTRA helps startups build security-first from day one — cloud security, DevSecOps pipelines, AI automation, and managed IT so founders can focus on product.',
    services: ['Cloud Security', 'DevSecOps', 'AI & Business Automation', 'Website Development', 'Microsoft 365 & Google Workspace'],
  },
  {
    id: 'hospitality',
    icon: '🏨',
    title: 'Hospitality & Tourism',
    shortDesc: 'Securing guest data, property systems, and digital operations.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
    challenge: 'Hotels and hospitality businesses handle payment card data, guest personal information, and operate complex property management systems that are attractive targets for cybercriminals.',
    whyCyventra: 'We provide CCTV & access control systems, network security, POS protection, and data backup solutions specifically suited to hospitality operations.',
    services: ['CCTV & Security Solutions', 'Network Management', 'Data Backup & Recovery', 'IT Helpdesk Support', 'Annual Maintenance Contract (AMC)'],
  },
  {
    id: 'real-estate',
    icon: '🏢',
    title: 'Real Estate & Construction',
    shortDesc: 'Smart security and IT solutions for modern properties and offices.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    challenge: 'Real estate companies manage large portfolios of properties, sensitive client financial data, and increasingly smart building systems that require both physical and digital security.',
    whyCyventra: 'CYVENTRA installs and manages CCTV and access control for properties, secures client data, and provides IT infrastructure for real estate offices and construction sites.',
    services: ['CCTV & Security Solutions', 'Network & Server Management', 'Data Backup & Recovery', 'Website Development', 'IT Helpdesk Support'],
  },
]

export default function Industries() {
  const [active, setActive] = useState(industries[0].id)
  const current = industries.find(i => i.id === active)!

  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* Hero */}
      <section className="relative bg-neutral-950 border-b border-white/10 pt-24 pb-16 px-4 sm:px-6 md:px-10 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #1a3a8f 0%, transparent 70%)' }} />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #cc1a1a 0%, transparent 70%)' }} />
        <div className="max-w-7xl mx-auto relative">
          <span className="text-red-600 text-xs uppercase tracking-widest font-semibold">industries</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mt-3 mb-5 leading-tight">
            technology solutions<br />
            <span className="text-blue-500">built for your</span>{' '}
            <span className="text-red-500">industry</span>
          </h1>
          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Every industry has unique challenges. CYVENTRA delivers targeted cybersecurity, cloud, AI, and IT solutions — designed specifically for your sector's risks and opportunities.
          </p>
        </div>
      </section>

      {/* Industry selector + detail */}
      <section className="px-4 sm:px-6 md:px-10 py-12 md:py-16 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left — industry list */}
          <div className="lg:w-72 flex-shrink-0">
            <div className="lg:sticky lg:top-28 bg-neutral-950 border border-white/10 rounded-2xl overflow-hidden">
              {industries.map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => setActive(ind.id)}
                  className={`w-full flex items-center gap-3 px-5 py-4 text-left text-sm transition-colors border-b border-white/5 last:border-0 ${
                    active === ind.id
                      ? 'bg-red-700 text-white'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="text-xl flex-shrink-0">{ind.icon}</span>
                  <span className="font-medium leading-snug">{ind.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right — detail panel */}
          <div className="flex-1 min-w-0">
            {/* Hero image */}
            <div className="relative rounded-2xl overflow-hidden h-52 sm:h-64 md:h-80 mb-8">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <div className="text-4xl mb-2">{current.icon}</div>
                <h2 className="text-2xl sm:text-3xl font-black text-white">{current.title}</h2>
                <p className="text-white/70 text-sm mt-1">{current.shortDesc}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Challenge */}
              <div className="bg-neutral-900 border border-red-800/30 rounded-2xl p-6">
                <h3 className="text-red-400 text-xs uppercase tracking-widest font-bold mb-3">the challenge</h3>
                <p className="text-neutral-300 text-sm leading-relaxed">{current.challenge}</p>
              </div>

              {/* Why CYVENTRA */}
              <div className="bg-neutral-900 border border-blue-800/30 rounded-2xl p-6">
                <h3 className="text-blue-400 text-xs uppercase tracking-widest font-bold mb-3">why cyventra</h3>
                <p className="text-neutral-300 text-sm leading-relaxed">{current.whyCyventra}</p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-neutral-900 border border-white/10 rounded-2xl p-6 mb-8">
              <h3 className="text-white font-semibold mb-4">relevant services for {current.title.toLowerCase()}</h3>
              <div className="flex flex-wrap gap-2">
                {current.services.map((s) => (
                  <Link
                    key={s}
                    to="/services"
                    className="text-xs bg-neutral-800 border border-white/10 hover:border-red-600/50 text-neutral-300 hover:text-white rounded-full px-4 py-2 transition-colors"
                  >
                    {s}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-950 to-red-950 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div>
                <h3 className="text-white font-bold text-lg mb-1">ready for a solution built for {current.title.toLowerCase()}?</h3>
                <p className="text-neutral-400 text-sm">Talk to our team — we'll design a package around your sector's exact needs.</p>
              </div>
              <Link
                to="/contact"
                className="flex-shrink-0 bg-red-600 text-white font-semibold rounded-full px-8 py-3 hover:bg-red-700 transition-colors whitespace-nowrap min-h-[44px] flex items-center"
              >
                get in touch →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* All industries grid */}
      <section className="bg-neutral-950 px-4 sm:px-6 md:px-10 py-14 md:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">industries we serve</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((ind) => (
              <button
                key={ind.id}
                onClick={() => { setActive(ind.id); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                className={`flex flex-col items-center gap-3 p-5 rounded-2xl border transition-all hover:scale-105 duration-200 text-center ${
                  active === ind.id
                    ? 'bg-red-700/20 border-red-600'
                    : 'bg-neutral-900 border-white/10 hover:border-red-600/40'
                }`}
              >
                <span className="text-3xl">{ind.icon}</span>
                <span className="text-white text-xs sm:text-sm font-medium leading-snug">{ind.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
