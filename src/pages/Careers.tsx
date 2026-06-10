import React, { useState } from 'react'

const departments = ['all', 'engineering', 'security', 'product', 'sales', 'operations']

const jobs = [
  {
    title: 'Senior Security Engineer',
    department: 'security',
    location: 'Remote / Washington D.C.',
    type: 'Full-time',
    description: 'Lead threat detection architecture and build the next generation of our AI-driven SOC platform.',
  },
  {
    title: 'Full-Stack Engineer (React + TypeScript)',
    department: 'engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build and scale the CYVENTRA platform serving 65,000+ customers. Deep TypeScript, React, and distributed systems experience required.',
  },
  {
    title: 'Penetration Tester (OSCP Required)',
    department: 'security',
    location: 'Hybrid / New York',
    type: 'Full-time',
    description: 'Join our elite red team conducting advanced offensive security assessments for Fortune 500 clients.',
  },
  {
    title: 'Product Manager – Cloud Security',
    department: 'product',
    location: 'Remote',
    type: 'Full-time',
    description: 'Own the roadmap for CYVENTRA Cloud Shield. Partner with engineering and customers to define the future of cloud security posture management.',
  },
  {
    title: 'Enterprise Account Executive',
    department: 'sales',
    location: 'Remote / San Francisco',
    type: 'Full-time',
    description: 'Drive enterprise deals for Fortune 1000 prospects. Security industry experience and a proven $1M+ ARR track record required.',
  },
  {
    title: 'DevSecOps Engineer',
    department: 'engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Embed security into our CI/CD pipelines and cloud infrastructure. Champion secure-by-default engineering practices across the org.',
  },
  {
    title: 'SOC Analyst (Tier 2)',
    department: 'operations',
    location: 'Hybrid / Austin',
    type: 'Full-time',
    description: 'Investigate escalated alerts, perform threat hunting, and drive incident response across our 24/7 managed security operations.',
  },
  {
    title: 'Threat Intelligence Analyst',
    department: 'security',
    location: 'Remote',
    type: 'Contract',
    description: 'Research emerging threat actor TTPs and produce actionable intelligence reports for our global client base.',
  },
]

const benefits = [
  { icon: '🏠', title: 'Remote-first', desc: 'Work from anywhere. We have hubs in D.C., NYC, SF, and London.' },
  { icon: '🏥', title: 'Full benefits', desc: 'Comprehensive medical, dental, vision for you and your family.' },
  { icon: '📈', title: 'Equity', desc: 'Meaningful stock options with a transparent vesting schedule.' },
  { icon: '🎓', title: 'Learning budget', desc: '$3,000/year for certifications, courses, and conferences.' },
  { icon: '🧘', title: 'Wellness', desc: 'Monthly wellness stipend and unlimited PTO.' },
  { icon: '💻', title: 'Home office', desc: '$2,000 equipment budget to set up your ideal workspace.' },
]

export default function Careers() {
  const [activeDept, setActiveDept] = useState('all')

  const filtered = activeDept === 'all' ? jobs : jobs.filter((j) => j.department === activeDept)

  return (
    <main className="bg-black text-white pt-28">
      {/* Hero */}
      <section className="px-6 md:px-10 py-20 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <span className="text-red-600 text-xs uppercase tracking-widest font-semibold">join us</span>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight mt-4 mb-6 leading-tight">
            build the<br /><span className="text-red-600">future</span><br />of security
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed">
            We're a team of hackers, builders, and dreamers on a mission to make the digital world safer. Come solve hard problems that matter.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-neutral-950 py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-medium text-center mb-12">why work at cyventra?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-4 bg-neutral-900 rounded-2xl p-6 border border-white/10">
                <div className="text-3xl flex-shrink-0">{b.icon}</div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{b.title}</h3>
                  <p className="text-neutral-400 text-sm">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
        <h2 className="text-3xl font-medium mb-8">open positions</h2>

        {/* Department filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setActiveDept(dept)}
              className={`rounded-full px-5 py-2 text-sm font-medium capitalize transition-colors ${
                activeDept === dept
                  ? 'bg-red-600 text-white'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-white/10'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filtered.map((job) => (
            <div
              key={job.title}
              className="bg-neutral-900 border border-white/10 rounded-2xl p-6 hover:border-red-600/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="text-xs bg-red-950/60 text-red-400 border border-red-800/30 rounded-full px-3 py-1 capitalize">
                      {job.department}
                    </span>
                    <span className="text-xs bg-neutral-800 text-neutral-400 rounded-full px-3 py-1">
                      {job.type}
                    </span>
                    <span className="text-xs bg-neutral-800 text-neutral-400 rounded-full px-3 py-1">
                      {job.location}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-1">{job.title}</h3>
                  <p className="text-neutral-400 text-sm">{job.description}</p>
                </div>
                <button className="bg-red-600 text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-red-700 transition-colors whitespace-nowrap flex-shrink-0">
                  apply now
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-neutral-500">
            No open positions in this department right now. Check back soon!
          </div>
        )}
      </section>
    </main>
  )
}
