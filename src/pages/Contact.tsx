import React, { useState } from 'react'

const WEB3FORMS_KEY = '8a74244a-da7f-4a06-a8f9-f75e8f2fdd47'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    interest: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `[CYVENTRA Enquiry] ${form.interest || 'General'} — ${form.firstName} ${form.lastName}`,
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          company: form.company || 'N/A',
          interest: form.interest || 'N/A',
          message: form.message,
        }),
      })

      const data = await res.json()
      if (res.ok && data.success) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="bg-black text-white pt-28">

      {/* Hero */}
      <section className="px-6 md:px-10 py-20 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <span className="text-red-600 text-xs uppercase tracking-widest font-semibold">contact</span>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight mt-4 mb-6 leading-tight whitespace-nowrap">
            get in{' '}
            <span className="animated-touch">touch</span>
          </h1>
          <style>{`
            @keyframes colorCycle {
              0%   { color: #ef4444; }
              33%  { color: #ffffff; }
              66%  { color: #3b82f6; }
              100% { color: #ef4444; }
            }
            .animated-touch {
              animation: colorCycle 3s ease-in-out infinite;
            }
          `}</style>
          <p className="text-neutral-400 text-lg leading-relaxed">
            Have a question or need a quote? Drop us a message and we'll get back to you shortly.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="px-6 md:px-10 pb-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* ── Contact Form ── */}
          <div>
            {status === 'success' ? (
              <div className="bg-green-950/40 border border-green-700/40 rounded-2xl p-10 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-medium mb-3">message received</h3>
                <p className="text-neutral-400">
                  We'll get back to you at <span className="text-white">{form.email}</span> shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm text-neutral-400 mb-2 block" htmlFor="firstName">
                      first name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      required
                      value={form.firstName}
                      onChange={handleChange}
                      className="w-full bg-neutral-900 border border-white/20 rounded-xl px-5 py-3 text-white text-sm focus:outline-none focus:border-red-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-neutral-400 mb-2 block" htmlFor="lastName">
                      last name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      required
                      value={form.lastName}
                      onChange={handleChange}
                      className="w-full bg-neutral-900 border border-white/20 rounded-xl px-5 py-3 text-white text-sm focus:outline-none focus:border-red-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-neutral-400 mb-2 block" htmlFor="email">
                    your email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-neutral-900 border border-white/20 rounded-xl px-5 py-3 text-white text-sm focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-sm text-neutral-400 mb-2 block" htmlFor="company">
                    company (optional)
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full bg-neutral-900 border border-white/20 rounded-xl px-5 py-3 text-white text-sm focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-sm text-neutral-400 mb-2 block" htmlFor="interest">
                    i'm interested in
                  </label>
                  <select
                    id="interest"
                    value={form.interest}
                    onChange={handleChange}
                    className="w-full bg-neutral-900 border border-white/20 rounded-xl px-5 py-3 text-white text-sm focus:outline-none focus:border-red-600 transition-colors appearance-none"
                  >
                    <option value="">select a topic</option>
                    <option>Website Development</option>
                    <option>Cloud Services & Migration</option>
                    <option>Cybersecurity Solutions</option>
                    <option>AI & Business Automation</option>
                    <option>CCTV & Security Solutions</option>
                    <option>Annual Maintenance Contract (AMC)</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-neutral-400 mb-2 block" htmlFor="message">
                    message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-neutral-900 border border-white/20 rounded-xl px-5 py-3 text-white text-sm focus:outline-none focus:border-red-600 transition-colors resize-none"
                    placeholder="tell us what you need..."
                  />
                </div>

                {status === 'error' && (
                  <div className="bg-red-950/40 border border-red-700/40 rounded-xl px-5 py-4 text-sm text-red-400">
                    Something went wrong. Please email us directly at{' '}
                    <a href="mailto:support@cyventratech.com" className="underline">
                      support@cyventratech.com
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-red-600 text-white font-medium rounded-xl py-4 text-sm hover:bg-red-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'sending...' : 'send message'}
                </button>
              </form>
            )}
          </div>

          {/* ── Contact Info ── */}
          <div className="space-y-6">

            {/* Email card */}
            <div className="bg-neutral-900 border border-white/10 rounded-2xl p-8 hover:border-red-600/40 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-600/10 border border-red-600/30 flex items-center justify-center text-2xl">
                  📧
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-neutral-500 mb-0.5">email us</div>
                  <div className="text-white font-semibold text-sm">support@cyventratech.com</div>
                </div>
              </div>
              <a
                href="mailto:support@cyventratech.com"
                className="inline-block bg-red-600 text-white rounded-full px-6 py-2.5 text-sm font-medium hover:bg-red-700 transition-colors"
              >
                send an email
              </a>
            </div>

            {/* Office card */}
            <div className="bg-neutral-900 border border-blue-800/40 rounded-2xl p-8 hover:border-blue-600/50 transition-colors">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-blue-600/10 border border-blue-600/30 flex items-center justify-center text-2xl">
                  🏢
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-neutral-500 mb-0.5">our office</div>
                  <div className="text-white font-semibold text-sm">CYVENTRA Technologies</div>
                </div>
              </div>
              <div className="border-t border-white/10 pt-5 text-sm text-neutral-400">
                <div className="flex items-center gap-2">
                  <span className="text-red-500">•</span>
                  <span>Nayabazar, Cuttack, Odisha, IN</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
