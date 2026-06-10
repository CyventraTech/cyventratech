import React, { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="bg-black text-white pt-28">
      {/* Hero */}
      <section className="px-6 md:px-10 py-20 max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <span className="text-red-600 text-xs uppercase tracking-widest font-semibold">contact</span>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight mt-4 mb-6 leading-tight">
            get in<br /><span className="text-red-600">touch</span>
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed">
            Whether you need a product demo, a custom quote, or just have questions — our team responds within 2 hours.
          </p>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="px-6 md:px-10 pb-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="bg-green-950/40 border border-green-700/40 rounded-2xl p-10 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-medium mb-3">message received</h3>
                <p className="text-neutral-400">Our team will get back to you within 2 business hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm text-neutral-400 mb-2 block" htmlFor="firstName">first name</label>
                    <input
                      id="firstName"
                      type="text"
                      required
                      className="w-full bg-neutral-900 border border-white/20 rounded-xl px-5 py-3 text-white text-sm focus:outline-none focus:border-red-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-neutral-400 mb-2 block" htmlFor="lastName">last name</label>
                    <input
                      id="lastName"
                      type="text"
                      required
                      className="w-full bg-neutral-900 border border-white/20 rounded-xl px-5 py-3 text-white text-sm focus:outline-none focus:border-red-600 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-neutral-400 mb-2 block" htmlFor="email">work email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full bg-neutral-900 border border-white/20 rounded-xl px-5 py-3 text-white text-sm focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm text-neutral-400 mb-2 block" htmlFor="company">company</label>
                  <input
                    id="company"
                    type="text"
                    className="w-full bg-neutral-900 border border-white/20 rounded-xl px-5 py-3 text-white text-sm focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm text-neutral-400 mb-2 block" htmlFor="interest">i'm interested in</label>
                  <select
                    id="interest"
                    className="w-full bg-neutral-900 border border-white/20 rounded-xl px-5 py-3 text-white text-sm focus:outline-none focus:border-red-600 transition-colors appearance-none"
                  >
                    <option value="">select a topic</option>
                    <option>Managed Security Services</option>
                    <option>Product Demo</option>
                    <option>Penetration Testing</option>
                    <option>Enterprise Pricing</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-neutral-400 mb-2 block" htmlFor="message">message</label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full bg-neutral-900 border border-white/20 rounded-xl px-5 py-3 text-white text-sm focus:outline-none focus:border-red-600 transition-colors resize-none"
                    placeholder="tell us about your security needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white font-medium rounded-xl py-4 text-sm hover:bg-red-700 transition-colors"
                >
                  send message
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-medium mb-8">other ways to reach us</h2>
              {[
                { icon: '📧', label: 'email', value: 'hello@cyventra.com', href: 'mailto:hello@cyventra.com' },
                { icon: '📞', label: 'phone', value: '+1 (800) CYVENTRA', href: 'tel:+18002983687' },
                { icon: '💬', label: 'live chat', value: 'available 24/7 in-app', href: '#' },
                { icon: '🚨', label: 'emergency response', value: 'incident@cyventra.com', href: 'mailto:incident@cyventra.com' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 py-5 border-b border-white/10 last:border-0">
                  <div className="text-2xl w-8">{item.icon}</div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-neutral-500 mb-1">{item.label}</div>
                    <a href={item.href} className="text-white hover:text-red-400 transition-colors">
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-neutral-900 border border-white/10 rounded-2xl p-7">
              <h3 className="text-white font-semibold mb-2">🔴 urgent? need incident response?</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                If you suspect an active breach, call our 24/7 emergency hotline immediately. Our DFIR team can be on-site within 4 hours globally.
              </p>
              <a
                href="tel:+18002983687"
                className="inline-block bg-red-600 text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-red-700 transition-colors"
              >
                call emergency line
              </a>
            </div>

            <div className="bg-neutral-900 border border-blue-800/40 rounded-2xl p-7">
              <h3 className="text-white font-semibold mb-2">🏢 office locations</h3>
              <div className="space-y-3 text-sm text-neutral-400">
                {[
                  'Washington D.C. (HQ) — 1100 Connecticut Ave NW',
                  'New York — 1 World Trade Center, Suite 8500',
                  'San Francisco — 101 Mission St, Floor 14',
                  'London — 30 St Mary Axe (The Gherkin)',
                ].map((loc) => (
                  <div key={loc} className="flex items-start gap-2">
                    <span className="text-red-600 mt-0.5">•</span>
                    <span>{loc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
