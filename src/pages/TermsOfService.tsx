import React from 'react'

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 pb-2 border-b border-white/10">{title}</h2>
    <div className="text-neutral-400 text-sm sm:text-base leading-relaxed space-y-4">{children}</div>
  </div>
)

export default function TermsOfService() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      {/* Header */}
      <section className="bg-neutral-950 border-b border-white/10 pt-24 pb-10 px-4 sm:px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <span className="text-red-600 text-xs uppercase tracking-widest font-semibold">Legal</span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mt-3 mb-4">
            Terms of <span className="text-red-500">Service</span>
          </h1>
          <div className="flex flex-wrap gap-6 mt-4 text-xs text-neutral-500">
            <span>Version: <span className="text-white">1.0</span></span>
            <span>Effective: <span className="text-white">01 January 2026</span></span>
            <span>Last updated: <span className="text-white">01 June 2026</span></span>
          </div>
          <p className="mt-5 text-neutral-400 text-sm leading-relaxed max-w-2xl">
            Please read these Terms of Service carefully before using CYVENTRA Technologies' website or engaging our services. By accessing our website or using our services, you agree to be bound by these terms.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 sm:px-6 md:px-10 py-14 max-w-4xl mx-auto">

        <Section title="1. About CYVENTRA Technologies">
          <p>
            CYVENTRA Technologies ("CYVENTRA", "we", "us", "our") is a technology services company based in Nayabazar, Cuttack, Odisha, India. We provide cybersecurity solutions, cloud services and migration, AI and business automation, website development, IT helpdesk support, CCTV and security solutions, data backup and recovery, and annual maintenance contracts (AMC) to businesses and organisations.
          </p>
          <p>
            These Terms of Service ("Terms") govern your use of our website at cyventratech.com and your engagement with our services. By using the website or engaging our services, you confirm that you have read, understood, and accepted these Terms.
          </p>
        </Section>

        <Section title="2. Services Offered">
          <p>CYVENTRA Technologies provides the following services:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Website Development</li>
            <li>IoT (Internet of Things) Solutions</li>
            <li>Cloud Services & Migration</li>
            <li>Cloud Security</li>
            <li>DevSecOps</li>
            <li>AI Security</li>
            <li>Network & Server Management</li>
            <li>Cybersecurity Solutions</li>
            <li>IT Helpdesk & Technical Support</li>
            <li>Data Backup & Recovery</li>
            <li>Microsoft 365 & Google Workspace</li>
            <li>AI & Business Automation</li>
            <li>Data Analytics & Business Intelligence</li>
            <li>CCTV & Security Solutions</li>
            <li>Annual Maintenance Contracts (AMC)</li>
          </ul>
          <p className="mt-3">
            Specific terms for each engagement are agreed in a separate Service Agreement or Statement of Work signed between CYVENTRA and the client.
          </p>
        </Section>

        <Section title="3. Use of Our Website">
          <p>When using our website, you agree to:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Use the website only for lawful purposes and in a manner that does not infringe the rights of others.</li>
            <li>Not attempt to gain unauthorised access to any part of the website or its underlying systems.</li>
            <li>Not use automated tools, bots, or scrapers to extract data from the website.</li>
            <li>Not submit false, misleading, or fraudulent information through any form on the website.</li>
            <li>Not use the website in any way that could damage, disable, overburden, or impair it.</li>
          </ul>
          <p className="mt-3">
            We reserve the right to restrict or terminate access to the website for any user who violates these Terms.
          </p>
        </Section>

        <Section title="4. Intellectual Property">
          <p>
            All content on this website — including text, graphics, logos, icons, images, software, and the CYVENTRA brand — is the property of CYVENTRA Technologies and is protected by applicable intellectual property laws.
          </p>
          <p>
            You may not reproduce, distribute, modify, create derivative works from, or commercially exploit any content from this website without our prior written permission.
          </p>
          <p>
            Any feedback, suggestions, or ideas you submit to us may be used by CYVENTRA without restriction or compensation to you.
          </p>
        </Section>

        <Section title="5. Service Agreements & Engagements">
          <p>
            Engagement of CYVENTRA's services is subject to a separate written Service Agreement or Statement of Work. These Terms apply in addition to and do not replace such agreements.
          </p>
          <p>Key principles that apply to all engagements:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><span className="text-white font-medium">Scope of work:</span> Defined in the Service Agreement. Work outside scope requires a change request and additional agreement.</li>
            <li><span className="text-white font-medium">Client responsibilities:</span> Clients must provide accurate information, necessary access, and timely feedback for CYVENTRA to deliver services effectively.</li>
            <li><span className="text-white font-medium">Payment:</span> As per the payment schedule in the Service Agreement. Late payments may attract interest as agreed.</li>
            <li><span className="text-white font-medium">Confidentiality:</span> Both parties agree to keep each other's confidential information secure and not disclose it to third parties.</li>
          </ul>
        </Section>

        <Section title="6. Limitation of Liability">
          <p>
            To the maximum extent permitted by applicable law, CYVENTRA Technologies shall not be liable for:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Any indirect, incidental, special, or consequential losses arising from use of our website or services.</li>
            <li>Loss of data, revenue, or profits not directly caused by CYVENTRA's negligence.</li>
            <li>Interruptions to website availability due to factors beyond our reasonable control.</li>
            <li>Losses arising from your reliance on information provided on this website without engaging our services.</li>
          </ul>
          <p className="mt-3">
            Our total liability in connection with any specific service engagement is limited to the fees paid by you for that engagement in the 3 months preceding the claim.
          </p>
        </Section>

        <Section title="7. Disclaimer of Warranties">
          <p>
            Our website and its content are provided on an "as is" and "as available" basis. While we strive to keep information accurate and up to date, we make no warranties — express or implied — regarding the completeness, accuracy, reliability, or availability of the website or its content.
          </p>
          <p>
            Information provided on this website is for general guidance only and does not constitute professional cybersecurity, legal, financial, or technical advice for your specific situation. Always engage our team formally before acting on any information from this website.
          </p>
        </Section>

        <Section title="8. Third-Party Links">
          <p>
            Our website may contain links to third-party websites for your convenience. These links do not constitute endorsement of those sites. CYVENTRA has no control over third-party websites and accepts no responsibility for their content, privacy practices, or availability. We recommend reviewing the privacy policy and terms of any third-party site you visit.
          </p>
        </Section>

        <Section title="9. Governing Law & Disputes">
          <p>
            These Terms are governed by the laws of India. Any dispute arising from these Terms or your use of our website shall first be attempted to be resolved through good-faith negotiation. If unresolved within 30 days, disputes shall be subject to the exclusive jurisdiction of the courts at Cuttack, Odisha, India.
          </p>
        </Section>

        <Section title="10. Changes to These Terms">
          <p>
            We may update these Terms from time to time. The updated Terms will be posted on this page with a revised effective date. Material changes will be notified by a prominent notice on the website. Continued use of the website after changes take effect constitutes acceptance of the updated Terms.
          </p>
        </Section>

        <Section title="11. Contact Us">
          <div className="bg-neutral-900 border border-white/10 rounded-2xl p-6 mt-2">
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              {[
                ['Company', 'CYVENTRA Technologies'],
                ['Email', 'support@cyventratech.com'],
                ['Address', 'Nayabazar, Cuttack, Odisha, IN'],
                ['For queries', 'Please email us and we will respond within 2 business days'],
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
          CYVENTRA Technologies | Terms of Service v1.0 | Effective 01 January 2026 | support@cyventratech.com
        </p>
      </div>
    </main>
  )
}
