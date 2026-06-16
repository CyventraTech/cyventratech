import React from 'react'

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 pb-2 border-b border-white/10">{title}</h2>
    <div className="text-neutral-400 text-sm sm:text-base leading-relaxed space-y-4">{children}</div>
  </div>
)

export default function CookiePolicy() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <section className="bg-neutral-950 border-b border-white/10 pt-24 pb-10 px-4 sm:px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <span className="text-red-600 text-xs uppercase tracking-widest font-semibold">Legal</span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mt-3 mb-4">
            Cookie <span className="text-blue-500">Policy</span>
          </h1>
          <div className="flex flex-wrap gap-6 mt-4 text-xs text-neutral-500">
            <span>Version: <span className="text-white">1.0</span></span>
            <span>Effective: <span className="text-white">01 January 2026</span></span>
            <span>Last updated: <span className="text-white">01 June 2026</span></span>
          </div>
          <p className="mt-5 text-neutral-400 text-sm leading-relaxed max-w-2xl">
            This Cookie Policy explains what cookies are, how CYVENTRA Technologies uses them on cyventratech.com, and your choices regarding cookies.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-10 py-14 max-w-4xl mx-auto">

        <Section title="1. What Are Cookies">
          <p>
            Cookies are small text files placed on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work efficiently, remember your preferences, and provide information to website owners about how visitors use their site.
          </p>
          <p>
            Cookies do not contain executable code and cannot access other files on your device. They are not harmful.
          </p>
        </Section>

        <Section title="2. How CYVENTRA Uses Cookies">
          <p>
            CYVENTRA Technologies uses a minimal set of cookies on cyventratech.com. We do not use advertising cookies, cross-site tracking, or sell any cookie data to third parties.
          </p>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-white">
                  <th className="text-left py-3 pr-4 font-semibold">Cookie Type</th>
                  <th className="text-left py-3 pr-4 font-semibold">Purpose</th>
                  <th className="text-left py-3 pr-4 font-semibold">Duration</th>
                  <th className="text-left py-3 font-semibold">Consent Required</th>
                </tr>
              </thead>
              <tbody className="text-neutral-400">
                {[
                  ['Strictly Necessary', 'Essential for the website to load and function correctly', 'Session', 'No'],
                  ['Analytics', 'Understand how visitors navigate and use the website (anonymised data)', 'Up to 12 months', 'Yes'],
                  ['Preference', 'Remember your cookie consent choice', 'Up to 12 months', 'No'],
                ].map(([type, purpose, duration, consent]) => (
                  <tr key={type as string} className="border-b border-white/5">
                    <td className="py-3 pr-4 text-white/80 font-medium">{type}</td>
                    <td className="py-3 pr-4">{purpose}</td>
                    <td className="py-3 pr-4">{duration}</td>
                    <td className={`py-3 font-semibold ${consent === 'Yes' ? 'text-red-400' : 'text-green-400'}`}>{consent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="3. Strictly Necessary Cookies">
          <p>
            These cookies are essential for the website to function. They enable core features such as page navigation, form submission, and security. Without these cookies, the services you have asked for cannot be provided.
          </p>
          <p>
            These cookies do not collect personal information and cannot be switched off in our systems. They are only set in response to actions you take, such as setting your cookie preferences.
          </p>
        </Section>

        <Section title="4. Analytics Cookies">
          <p>
            With your consent, we use analytics cookies to understand how visitors interact with our website — which pages are visited most, how users navigate the site, and what content is most useful. This helps us improve our website and the information we provide.
          </p>
          <p>
            Analytics data is collected in aggregated, anonymised form. We do not use analytics data to identify individual users or link it to your personal information.
          </p>
          <p>
            Analytics cookies are only placed if you accept them via the cookie consent notice on your first visit. You may withdraw this consent at any time (see Section 7).
          </p>
        </Section>

        <Section title="5. What We Do NOT Use">
          <p>CYVENTRA Technologies does not use:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><span className="text-white font-medium">Advertising cookies</span> — we do not show targeted advertisements based on your browsing behaviour.</li>
            <li><span className="text-white font-medium">Cross-site tracking cookies</span> — we do not track you across other websites.</li>
            <li><span className="text-white font-medium">Social media tracking pixels</span> — we do not embed tracking pixels from Facebook, Google, or other social platforms.</li>
            <li><span className="text-white font-medium">Third-party cookies for profiling</span> — we do not allow any third party to profile our visitors.</li>
          </ul>
        </Section>

        <Section title="6. Third-Party Cookies">
          <p>
            Our website may load content from a small number of trusted third parties (for example, fonts from Google Fonts or a 3D interactive scene). These third parties may set their own cookies on your device.
          </p>
          <p>
            We minimise third-party cookie use and regularly review which third-party services are active on our website. We do not control third-party cookies — please refer to the respective third party's privacy and cookie policy for details.
          </p>
        </Section>

        <Section title="7. Your Choices & How to Control Cookies">
          <p>You have several options for controlling cookies:</p>

          <div className="space-y-4 mt-3">
            <div className="bg-neutral-900 border border-white/10 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">Cookie Consent Banner</h3>
              <p>
                On your first visit to cyventratech.com, a cookie consent notice is displayed. You can choose to accept or decline non-essential cookies. You can change your preference at any time.
              </p>
            </div>

            <div className="bg-neutral-900 border border-white/10 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">Browser Settings</h3>
              <p>
                Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies, delete existing cookies, or notify you when cookies are being set.
              </p>
              <p className="mt-2 text-xs text-neutral-500">
                Note: Blocking all cookies may affect the functionality of some websites, including cyventratech.com.
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                {[
                  { name: 'Chrome', url: 'https://support.google.com/chrome/answer/95647' },
                  { name: 'Firefox', url: 'https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox' },
                  { name: 'Safari', url: 'https://support.apple.com/guide/safari/manage-cookies-sfri11471' },
                  { name: 'Edge', url: 'https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge' },
                ].map((b) => (
                  <a key={b.name} href={b.url} target="_blank" rel="noopener noreferrer"
                    className="text-xs bg-neutral-800 text-blue-400 hover:text-blue-300 border border-blue-800/40 rounded-full px-4 py-1.5 transition-colors">
                    {b.name} →
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section title="8. Changes to This Cookie Policy">
          <p>
            We may update this Cookie Policy from time to time as our website or applicable regulations change. The updated policy will be posted here with a revised effective date. We recommend reviewing this page periodically.
          </p>
        </Section>

        <Section title="9. Contact Us">
          <p>
            If you have any questions about this Cookie Policy or how we use cookies, contact us at:
          </p>
          <div className="bg-neutral-900 border border-white/10 rounded-2xl p-6 mt-3">
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              {[
                ['Company', 'CYVENTRA Technologies'],
                ['Email', 'support@cyventratech.com'],
                ['Address', 'Nayabazar, Cuttack, Odisha, IN'],
              ].map(([label, value]) => (
                <div key={label}>
                  <div className="text-xs uppercase tracking-widest text-neutral-500 mb-1">{label}</div>
                  <div className="text-white">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </Section>

      </section>

      <div className="border-t border-white/10 px-4 sm:px-6 md:px-10 py-6 max-w-4xl mx-auto">
        <p className="text-neutral-600 text-xs">
          CYVENTRA Technologies | Cookie Policy v1.0 | Effective 01 January 2026 | support@cyventratech.com
        </p>
      </div>
    </main>
  )
}
