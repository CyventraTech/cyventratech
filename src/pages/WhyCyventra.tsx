import React from 'react'

const differentiators = [
  {
    icon: '🧠',
    title: 'AI-Driven Intelligence',
    description:
      'Our proprietary machine learning engine analyzes billions of threat signals per day, identifying zero-day vulnerabilities before they become breaches.',
  },
  {
    icon: '⚡',
    title: 'Response in Seconds',
    description:
      'Automated incident response cuts mean-time-to-contain from hours to seconds, minimizing blast radius and protecting your business continuity.',
  },
  {
    icon: '🌐',
    title: 'Global Threat Network',
    description:
      'Real-time intelligence feeds from 65,000+ partner organizations give CYVENTRA an unmatched view of the global threat landscape.',
  },
  {
    icon: '🔩',
    title: 'Deep Integration',
    description:
      'Native connectors for AWS, Azure, GCP, Salesforce, and 200+ enterprise platforms ensure seamless deployment with zero workflow disruption.',
  },
  {
    icon: '📋',
    title: 'Compliance Automation',
    description:
      'Continuously audit and enforce GDPR, HIPAA, SOC 2, ISO 27001, and PCI-DSS with automated evidence collection and one-click reporting.',
  },
  {
    icon: '🤝',
    title: '24/7 Expert Support',
    description:
      'Our dedicated security operations centre runs round-the-clock, staffed by certified analysts who act as an extension of your team.',
  },
]

const timeline = [
  { year: '2018', event: 'Founded in Washington D.C. with a mission to democratize enterprise security.' },
  { year: '2020', event: 'Launched first AI-powered threat detection engine, protecting 500 clients.' },
  { year: '2022', event: 'Expanded globally to 40 countries; surpassed 20,000 active deployments.' },
  { year: '2024', event: 'Reached 65k+ startups protected; 1.5B GB data secured milestone.' },
  { year: '2025', event: 'Launched CYVENTRA Cloud — unified security platform for multi-cloud environments.' },
]

export default function WhyCyventra() {
  return (
    <main className="bg-black text-white pt-28">
      {/* Hero */}
      <section className="px-6 md:px-10 py-20 max-w-7xl mx-auto text-center">
        <span className="text-red-600 text-xs uppercase tracking-widest font-semibold">why us</span>
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight mt-4 mb-6 leading-tight">
          why <span className="text-red-600">cyventra?</span>
        </h1>
        <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl mx-auto">
          In a world of evolving cyber threats, CYVENTRA combines AI intelligence, deep expertise, and relentless innovation to keep your organization ahead of attackers.
        </p>
      </section>

      {/* Differentiators */}
      <section className="px-6 md:px-10 py-20 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-center mb-14">
            what sets us apart
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="bg-neutral-900 border border-white/10 rounded-2xl p-8 hover:border-red-600/50 transition-colors group"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-3">{item.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 md:px-10 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-14 text-center">
          our journey
        </h2>
        <div className="relative border-l-2 border-red-600/40 pl-8 space-y-12 max-w-2xl mx-auto">
          {timeline.map((item) => (
            <div key={item.year} className="relative">
              <div className="absolute -left-11 top-1 w-4 h-4 rounded-full bg-red-600 border-2 border-black" />
              <div className="text-red-500 text-sm font-bold tracking-widest mb-2">{item.year}</div>
              <p className="text-neutral-300 leading-relaxed">{item.event}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-neutral-950 py-16 px-6 md:px-10 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-medium mb-10">certifications & compliance</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {['SOC 2 Type II', 'ISO 27001', 'GDPR Ready', 'HIPAA', 'PCI-DSS', 'FedRAMP'].map((cert) => (
              <div
                key={cert}
                className="border border-blue-800/60 bg-blue-950/30 rounded-xl px-6 py-4 text-blue-300 text-sm font-semibold"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
