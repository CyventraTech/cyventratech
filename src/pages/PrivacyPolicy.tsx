import React from 'react'

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 pb-2 border-b border-white/10">{title}</h2>
    <div className="text-neutral-400 text-sm sm:text-base leading-relaxed space-y-4">{children}</div>
  </div>
)

export default function PrivacyPolicy() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      {/* Header */}
      <section className="bg-neutral-950 border-b border-white/10 pt-24 pb-10 px-4 sm:px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <span className="text-red-600 text-xs uppercase tracking-widest font-semibold">Legal</span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mt-3 mb-4">
            Privacy <span className="text-blue-500">Policy</span>
          </h1>
          <div className="flex flex-wrap gap-6 mt-4 text-xs text-neutral-500">
            <span>Version: <span className="text-white">1.0</span></span>
            <span>Effective: <span className="text-white">01 January 2026</span></span>
            <span>Last reviewed: <span className="text-white">01 June 2026</span></span>
            <span>Next review: <span className="text-white">Annually</span></span>
          </div>
          <p className="mt-5 text-neutral-400 text-sm leading-relaxed max-w-2xl">
            This Privacy Policy explains how CYVENTRA Technologies collects, uses, stores, and protects your personal data in compliance with applicable Indian data protection laws.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 sm:px-6 md:px-10 py-14 max-w-4xl mx-auto">

        <Section title="1. About Us & This Policy">
          <p>
            CYVENTRA Technologies ("CYVENTRA", "we", "us", "our") is a technology services company operating from Nayabazar, Cuttack, Odisha, India, providing cybersecurity, cloud services, AI automation, IT support, and related digital solutions to businesses and individuals.
          </p>
          <p>
            This Policy describes how we handle personal data when you interact with us — through our website (cyventratech.com), our contact forms, email, phone, or when we deliver services to you.
          </p>
          <p>
            By using our website or submitting your information to us, you confirm that you have read, understood, and agreed to this Privacy Policy.
          </p>
        </Section>

        <Section title="2. Who This Policy Applies To">
          <ul className="list-disc pl-5 space-y-2">
            <li>Prospective and existing clients who contact us or use our services.</li>
            <li>Visitors to our website at cyventratech.com.</li>
            <li>Any individual who communicates with CYVENTRA by email, phone, or the contact form.</li>
            <li>Job applicants who apply through our Careers page.</li>
          </ul>
        </Section>

        <Section title="3. Personal Data We Collect">
          <p>We collect the following categories of personal data:</p>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-white">
                  <th className="text-left py-3 pr-6 font-semibold">Category</th>
                  <th className="text-left py-3 pr-6 font-semibold">Data Collected</th>
                  <th className="text-left py-3 font-semibold">How Collected</th>
                </tr>
              </thead>
              <tbody className="text-neutral-400">
                {[
                  ['Contact data', 'Full name, email address, phone number', 'Contact form, email, phone'],
                  ['Business data', 'Company name, job title, industry', 'Contact form'],
                  ['Enquiry data', 'Service interest, message content', 'Contact form'],
                  ['Website usage', 'IP address, browser type, pages visited', 'Automatically via web server'],
                  ['Communication records', 'Emails, call notes, support tickets', 'Email, phone, support channels'],
                ].map(([cat, data, how]) => (
                  <tr key={cat} className="border-b border-white/5">
                    <td className="py-3 pr-6 text-white/80">{cat}</td>
                    <td className="py-3 pr-6">{data}</td>
                    <td className="py-3">{how}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            We do not collect sensitive personal data such as Aadhaar numbers, PAN, bank account details, biometric data, or health information.
          </p>
        </Section>

        <Section title="4. Why We Collect Your Data">
          <p>We process your personal data for the following purposes:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>To respond to your enquiries and provide quotes for our services.</li>
            <li>To deliver the IT and technology services you have engaged us for.</li>
            <li>To send service updates, invoices, and important communications.</li>
            <li>To improve our website and service offerings using anonymised analytics.</li>
            <li>To comply with applicable legal and regulatory obligations.</li>
            <li>To send promotional communications — only with your separate consent.</li>
          </ul>
          <p className="mt-3">
            We will never use your personal data for purposes not listed above without your fresh consent.
          </p>
        </Section>

        <Section title="5. Consent">
          <p>
            When you submit our contact form, you consent to CYVENTRA processing your data to respond to your enquiry and contact you about our services. Marketing communications are sent only with your separate opt-in consent.
          </p>
          <p>
            You may withdraw your consent at any time by emailing{' '}
            <a href="mailto:support@cyventratech.com" className="text-red-400 hover:text-red-300 underline">
              support@cyventratech.com
            </a>. Withdrawal does not affect processing carried out before withdrawal.
          </p>
        </Section>

        <Section title="6. Data Retention">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse mt-2">
              <thead>
                <tr className="border-b border-white/10 text-white">
                  <th className="text-left py-3 pr-6 font-semibold">Data Category</th>
                  <th className="text-left py-3 font-semibold">Retention Period</th>
                </tr>
              </thead>
              <tbody className="text-neutral-400">
                {[
                  ['Contact & enquiry data', '3 years from last interaction'],
                  ['Service delivery records', '5 years from project completion'],
                  ['Billing & invoice records', '8 years (Income Tax Act, 1961)'],
                  ['Consent records', '7 years from consent event'],
                  ['Website server logs', '90 days'],
                  ['Support correspondence', '3 years from ticket closure'],
                ].map(([cat, period]) => (
                  <tr key={cat} className="border-b border-white/5">
                    <td className="py-3 pr-6 text-white/80">{cat}</td>
                    <td className="py-3">{period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4">At the end of any retention period, personal data is permanently deleted or irreversibly anonymised.</p>
        </Section>

        <Section title="7. Who We Share Your Data With">
          <p>We do not sell, rent, or trade your personal data. We share data only in these limited circumstances:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><span className="text-white font-medium">Service providers:</span> Cloud hosting, email delivery, and analytics tools. All are bound by data processing agreements and act only on our instructions.</li>
            <li><span className="text-white font-medium">Legal requirement:</span> Where required by law, court order, or government authority, to the minimum extent necessary.</li>
            <li><span className="text-white font-medium">Business transfer:</span> In case of merger or acquisition, with equivalent privacy protections for your data.</li>
          </ul>
        </Section>

        <Section title="8. Data Storage & Security">
          <p>All personal data is stored in India. We implement the following security measures:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>AES-256 encryption for data at rest.</li>
            <li>TLS 1.2+ encryption for all data in transit.</li>
            <li>Role-based access controls — staff access only data necessary for their function.</li>
            <li>Regular security audits and vulnerability assessments.</li>
            <li>Documented incident response procedures.</li>
          </ul>
        </Section>

        <Section title="9. Your Rights">
          <p>You have the following rights regarding your personal data. Submit requests to{' '}
            <a href="mailto:support@cyventratech.com" className="text-red-400 hover:text-red-300 underline">support@cyventratech.com</a>.
            We respond within 30 days.
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li><span className="text-white font-medium">Right to access:</span> Request a summary of what data we hold about you.</li>
            <li><span className="text-white font-medium">Right to correction:</span> Request correction of inaccurate or incomplete data.</li>
            <li><span className="text-white font-medium">Right to erasure:</span> Request deletion of your data when no longer needed.</li>
            <li><span className="text-white font-medium">Right to withdraw consent:</span> Withdraw consent for any processing purpose at any time.</li>
            <li><span className="text-white font-medium">Right to grievance redressal:</span> Raise a complaint with our contact below.</li>
          </ul>
        </Section>

        <Section title="10. Cookies">
          <p>Our website uses the following types of cookies:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><span className="text-white font-medium">Strictly necessary cookies:</span> Required for the website to function. Cannot be disabled.</li>
            <li><span className="text-white font-medium">Analytics cookies:</span> Help us understand traffic patterns. Activated only with your consent.</li>
          </ul>
          <p className="mt-3">We do not use advertising or cross-site tracking cookies.</p>
        </Section>

        <Section title="11. Children's Data">
          <p>
            Our website and services are intended for adults aged 18 and above. We do not knowingly collect personal data from individuals under 18. If you believe we hold data about a minor, contact us immediately at{' '}
            <a href="mailto:support@cyventratech.com" className="text-red-400 hover:text-red-300 underline">support@cyventratech.com</a>.
          </p>
        </Section>

        <Section title="12. Changes to This Policy">
          <p>
            We may update this Privacy Policy periodically. Material changes will be notified by email at least 30 days before they take effect. The latest version is always available at cyventratech.com/privacy.
          </p>
        </Section>

        <Section title="13. Contact & Grievance Officer">
          <div className="bg-neutral-900 border border-white/10 rounded-2xl p-6 mt-2">
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              {[
                ['Contact', 'CYVENTRA Technologies'],
                ['Email', 'support@cyventratech.com'],
                ['Address', 'Nayabazar, Cuttack, Odisha, IN'],
                ['Response time', 'Acknowledgement within 48 hours; resolution within 30 days'],
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

      {/* Footer note */}
      <div className="border-t border-white/10 px-4 sm:px-6 md:px-10 py-6 max-w-4xl mx-auto">
        <p className="text-neutral-600 text-xs">
          CYVENTRA Technologies | Privacy Policy v1.0 | Effective 01 January 2026 | support@cyventratech.com
        </p>
      </div>
    </main>
  )
}
