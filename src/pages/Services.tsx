import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const services = [
  {
    id: '01',
    anchor: 'website-development',
    icon: '🌐',
    title: 'Website Development',
    description:
      'We design and develop fast, secure, and responsive websites tailored to your brand — from corporate sites and landing pages to full-scale web applications.',
    features: ['Custom UI/UX Design', 'Responsive & Mobile-First', 'SEO Optimised', 'CMS Integration'],
    accent: 'blue',
  },
  {
    id: '02',
    anchor: 'iot-solutions',
    icon: '📡',
    title: 'IoT (Internet of Things) Solutions',
    description:
      'Connect, monitor, and manage your physical assets with smart IoT architectures — from sensor integration to real-time dashboards and edge computing.',
    features: ['Device Connectivity', 'Real-Time Monitoring', 'Edge Computing', 'IoT Security Hardening'],
    accent: 'red',
  },
  {
    id: '03',
    anchor: 'cloud-services',
    icon: '☁️',
    title: 'Cloud Services & Migration',
    description:
      'Seamlessly migrate to AWS, Azure, or Google Cloud with zero downtime. We architect, migrate, and optimise your cloud environment for performance and cost.',
    features: ['Cloud Architecture', 'Zero-Downtime Migration', 'Cost Optimisation', 'Multi-Cloud Strategy'],
    accent: 'blue',
  },
  {
    id: '04',
    anchor: 'cloud-security',
    icon: '🔒',
    title: 'Cloud Security',
    description:
      'Protect your cloud workloads with continuous posture management, identity controls, and threat detection across AWS, Azure, and GCP — built for the way modern teams work.',
    features: ['Cloud Posture Management (CSPM)', 'Identity & Access Controls', 'Workload Protection', 'Real-Time Threat Detection'],
    accent: 'red',
  },
  {
    id: '05',
    anchor: 'devsecops',
    icon: '⚙️',
    title: 'DevSecOps',
    description:
      'Embed security into every stage of your development pipeline — from code commit to production deployment — so your team ships fast without ever sacrificing safety.',
    features: ['CI/CD Security Integration', 'Container & Image Scanning', 'Infrastructure-as-Code Audits', 'Secrets & Vulnerability Detection'],
    accent: 'blue',
  },
  {
    id: '06',
    anchor: 'ai-security',
    icon: '🧠',
    title: 'AI Security',
    description:
      'Secure your AI and machine learning systems against adversarial attacks, model poisoning, and data leakage — while using AI itself to detect and respond to threats faster than any human can.',
    features: ['AI/ML Model Protection', 'Adversarial Attack Defence', 'LLM & GenAI Security', 'AI-Powered Threat Response'],
    accent: 'red',
  },
  {
    id: '07',
    anchor: 'network-server',
    icon: '🖧',
    title: 'Network & Server Management',
    description:
      'End-to-end management of your on-premise and hybrid network infrastructure — routers, switches, firewalls, and servers — keeping your operations always online.',
    features: ['Network Design & Setup', 'Server Administration', 'Firewall Management', '24/7 Monitoring'],
    accent: 'blue',
  },
  {
    id: '08',
    anchor: 'cybersecurity',
    icon: '🛡️',
    title: 'Cybersecurity Solutions',
    description:
      'Comprehensive cyber defence — from vulnerability assessments and penetration testing to SOC monitoring and incident response — protecting your business around the clock.',
    features: ['Penetration Testing', 'SOC Monitoring', 'Incident Response', 'Compliance (ISO/SOC2/GDPR)'],
    accent: 'red',
  },
  {
    id: '09',
    anchor: 'helpdesk',
    icon: '🎧',
    title: 'IT Helpdesk & Technical Support',
    description:
      'Dedicated technical support for your team — resolving hardware, software, and connectivity issues fast so your people stay productive every day.',
    features: ['Remote & On-Site Support', 'Ticketing System', 'SLA-Backed Response', 'End-User Training'],
    accent: 'blue',
  },
  {
    id: '10',
    anchor: 'data-backup',
    icon: '💾',
    title: 'Data Backup & Recovery',
    description:
      'Protect your most critical asset — your data. We implement automated backup strategies and rapid recovery plans to ensure business continuity after any incident.',
    features: ['Automated Cloud Backups', 'Disaster Recovery Planning', 'RTO/RPO Optimisation', 'Ransomware Recovery'],
    accent: 'red',
  },
  {
    id: '11',
    anchor: 'microsoft-google',
    icon: '📧',
    title: 'Microsoft 365 & Google Workspace',
    description:
      'Full deployment, migration, and management of Microsoft 365 and Google Workspace — email, collaboration tools, licensing, and security configuration included.',
    features: ['M365 / Google Setup', 'Email Migration', 'Teams & Drive Config', 'License Management'],
    accent: 'blue',
  },
  {
    id: '12',
    anchor: 'ai-automation',
    icon: '🤖',
    title: 'AI & Business Automation',
    description:
      'Automate repetitive workflows and unlock AI-driven insights. From RPA and chatbots to custom ML pipelines, we help your business work smarter.',
    features: ['RPA Implementation', 'AI Chatbots', 'Workflow Automation', 'Custom ML Solutions'],
    accent: 'red',
  },
  {
    id: '13',
    anchor: 'data-analytics',
    icon: '📊',
    title: 'Data Analytics & Business Intelligence',
    description:
      'Turn raw data into clear decisions with powerful dashboards, reporting pipelines, and BI tools — powered by Power BI, Tableau, and custom analytics platforms.',
    features: ['Power BI / Tableau', 'Custom Dashboards', 'Data Warehousing', 'Predictive Analytics'],
    accent: 'blue',
  },
  {
    id: '14',
    anchor: 'cctv',
    icon: '📹',
    title: 'CCTV & Security Solutions',
    description:
      'Design and install enterprise-grade CCTV and physical security systems — IP cameras, NVR/DVR setups, access control, and remote monitoring for offices and sites.',
    features: ['IP Camera Systems', 'Remote Monitoring', 'Access Control', 'NVR/DVR Setup'],
    accent: 'red',
  },
  {
    id: '15',
    anchor: 'amc',
    icon: '🔧',
    title: 'Annual Maintenance Contracts (AMC)',
    description:
      'Predictable, worry-free IT maintenance. Our AMC plans cover preventive maintenance, priority support, and hardware/software upkeep for your entire IT estate.',
    features: ['Preventive Maintenance', 'Priority Support SLA', 'Hardware & Software Upkeep', 'Quarterly IT Audits'],
    accent: 'blue',
  },
]

export default function Services() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <main className="bg-black text-white pt-28">

      {/* ── Hero ── */}
      <section className="px-6 md:px-10 py-16 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <span className="text-red-500 text-xs uppercase tracking-widest font-semibold">what we offer</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mt-3 mb-5 leading-tight">
            our <span className="text-blue-500">services</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            From cybersecurity to cloud migration, AI automation to CCTV — CYVENTRA delivers end-to-end technology services that power modern businesses.
          </p>
        </div>

        
      </section>

      {/* ── Services Grid ── */}
      <section className="px-6 md:px-10 pb-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const isBlue = service.accent === 'blue'
            const isHovered = hoveredId === service.id
            return (
              <div
                id={service.anchor}
                key={service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{ scrollMarginTop: '120px' }}
                className={`relative bg-neutral-900 border rounded-2xl p-7 transition-all duration-300 group overflow-hidden ${
                  isHovered
                    ? isBlue
                      ? 'border-blue-500 shadow-lg shadow-blue-900/30'
                      : 'border-red-500 shadow-lg shadow-red-900/30'
                    : 'border-white/10'
                }`}
              >
                {/* Accent glow top-right */}
                <div
                  className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${
                    isBlue ? 'bg-blue-600' : 'bg-red-600'
                  }`}
                />

                {/* Service number */}
                <div
                  className={`text-5xl font-black font-mono mb-4 transition-colors duration-300 ${
                    isHovered ? (isBlue ? 'text-blue-700' : 'text-red-800') : 'text-white/10'
                  }`}
                >
                  {service.id}
                </div>

                {/* Icon + Title */}
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-3xl">{service.icon}</span>
                  <h3
                    className={`font-bold text-lg leading-snug transition-colors duration-300 ${
                      isHovered ? (isBlue ? 'text-blue-300' : 'text-red-400') : 'text-white'
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Feature list */}
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <span
                        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          isBlue ? 'bg-blue-500' : 'bg-red-500'
                        }`}
                      />
                      <span className="text-white/75">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 ${
                    isHovered
                      ? isBlue
                        ? 'bg-gradient-to-r from-blue-600 to-blue-400'
                        : 'bg-gradient-to-r from-red-600 to-red-400'
                      : 'bg-transparent'
                  }`}
                />
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Why Choose Us strip ── */}
      <section className="bg-gradient-to-r from-blue-950 via-neutral-950 to-red-950 border-y border-white/10 py-14 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { number: '12+', label: 'Service Areas', color: 'text-blue-400' },
            { number: '65k+', label: 'Clients Served', color: 'text-white' },
            { number: '99.9%', label: 'Uptime SLA', color: 'text-red-400' },
            { number: '24/7', label: 'Support Coverage', color: 'text-blue-400' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className={`text-4xl font-black tracking-tight mb-1 ${stat.color}`}>{stat.number}</div>
              <div className="text-white/50 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 md:px-10 text-center bg-black">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            need a <span className="text-red-500">custom</span> solution?
          </h2>
          <p className="text-white/60 mb-8 text-base">
            Talk to our team and we'll design a service package built around your exact business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-red-600 text-white font-semibold rounded-full px-10 py-4 hover:bg-red-700 transition-colors"
            >
              contact our experts
            </Link>
            <Link
              to="/solutions"
              className="border border-blue-600 text-blue-400 font-semibold rounded-full px-10 py-4 hover:bg-blue-950/50 transition-colors"
            >
              explore solutions
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
