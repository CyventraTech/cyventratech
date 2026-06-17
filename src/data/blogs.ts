export interface BlogPost {
  id: number
  slug: string
  category: string
  title: string
  excerpt: string
  image: string
  author: string
  authorRole: string
  authorAvatar: string
  date: string
  readTime: string
  tags: string[]
  content: { type: 'heading' | 'subheading' | 'paragraph' | 'quote' | 'list'; text?: string; items?: string[] }[]
}

export const blogs: BlogPost[] = [
  {
    id: 1,
    slug: 'why-smbs-are-ransomware-targets-2025',
    category: 'cybersecurity',
    title: 'Why Small Businesses Are Now the #1 Target for Ransomware in 2025',
    excerpt: "Cybercriminals have shifted focus from large enterprises to small and mid-size businesses. Here's why SMBs are now the softest target — and what you can do right now to protect your organisation.",
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200&q=80',
    author: 'Arjun Mishra',
    authorRole: 'Senior Cybersecurity Analyst, CYVENTRA',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    date: 'June 10, 2025',
    readTime: '6 min read',
    tags: ['Ransomware', 'SMB Security', 'Threat Intelligence'],
    content: [
      { type: 'paragraph', text: "There's a common misconception that hackers only go after the big fish — large corporations, banks, and government agencies. The reality in 2025 is very different. Over 60% of ransomware attacks in the past year targeted businesses with fewer than 500 employees. And most of those businesses never saw it coming." },
      { type: 'paragraph', text: "I've spoken with dozens of small business owners after they've been hit. The shock is always the same: \"We thought we were too small to be a target.\" That belief, more than any technical failure, is what got them into trouble." },
      { type: 'heading', text: 'Why Small Businesses Are Being Targeted' },
      { type: 'paragraph', text: "The economics of cybercrime have shifted. Modern ransomware is largely automated — attackers don't hand-pick their victims. They run mass scanning tools that find vulnerable systems across the internet and strike opportunistically. Small businesses, with their limited IT budgets and often outdated software, show up as easy targets." },
      { type: 'paragraph', text: "But there's another reason. Large enterprises have invested millions in security. They have dedicated security teams, 24/7 monitoring, and sophisticated defences. Small businesses often have none of these. For a cybercriminal, the effort-to-reward ratio is simply better when targeting an SMB." },
      { type: 'list', items: [
        'Outdated, unpatched systems that are easy to exploit',
        'No dedicated IT or security staff monitoring the network',
        'Employees with limited cybersecurity awareness',
        'Fewer backup systems — meaning ransom payment is more likely',
        'Weaker email filtering and endpoint protection',
      ]},
      { type: 'heading', text: 'What Happens When Ransomware Hits' },
      { type: 'paragraph', text: "When ransomware executes on your network, it silently encrypts every file it can reach — documents, databases, backups, emails. Within minutes, your entire business operation can be locked. You'll see a ransom note demanding payment — typically between ₹5 lakh and ₹50 lakh for small businesses — in exchange for the decryption key." },
      { type: 'quote', text: "One of our clients — a 20-person accounting firm — lost access to 8 years of client financial records in under 4 minutes. They had no offline backup. The attacker demanded ₹12 lakh. They paid, but recovered only 70% of their data." },
      { type: 'paragraph', text: "Even if you pay, there is no guarantee of full recovery. And paying the ransom funds the next attack on someone else. More importantly, your data may have already been exfiltrated before the encryption — a double extortion tactic that's now standard practice." },
      { type: 'heading', text: 'The 5 Things You Must Do Right Now' },
      { type: 'list', items: [
        'Implement offline and cloud backups with daily automatic schedules — test your restore process quarterly',
        'Enable multi-factor authentication on every email and cloud account — this alone stops 99% of credential attacks',
        'Keep all software and operating systems patched — attackers exploit known vulnerabilities within hours of disclosure',
        'Train your team to recognise phishing emails — one click is all it takes',
        'Get a professional security assessment to find your vulnerabilities before attackers do',
      ]},
      { type: 'paragraph', text: "None of these are expensive or technically complex. But most small businesses haven't done them. If you're reading this and thinking 'we should really sort this out' — don't wait for an incident to motivate you. By then, it's too late." },
      { type: 'heading', text: 'Final Thought' },
      { type: 'paragraph', text: "Cybersecurity doesn't have to be overwhelming. You don't need an enterprise-grade security operations centre. What you need is the basics, done properly and consistently. Start there. If you're not sure where to begin, we're happy to do a no-obligation assessment of your current setup and tell you exactly what needs attention." },
    ],
  },
  {
    id: 2,
    slug: 'aws-azure-gcp-india-business-guide',
    category: 'cloud',
    title: 'AWS vs Azure vs GCP — Choosing the Right Cloud for Your Business in India',
    excerpt: "Cloud migration is no longer optional. But which platform is right for your workloads, budget, and compliance requirements? We break down the key differences for Indian businesses.",
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
    author: 'Priya Sahoo',
    authorRole: 'Cloud Solutions Architect, CYVENTRA',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b5e5e97b?w=100&q=80',
    date: 'May 22, 2025',
    readTime: '8 min read',
    tags: ['Cloud Migration', 'AWS', 'Azure', 'GCP'],
    content: [
      { type: 'paragraph', text: "Every week I speak with business owners who've decided to move to the cloud — but when I ask which platform they're considering, most say 'probably AWS' simply because it's the one they've heard of most. That's not a strategy. That's brand recognition making a ₹50 lakh infrastructure decision for you." },
      { type: 'paragraph', text: "The truth is, AWS, Microsoft Azure, and Google Cloud Platform are all excellent. The question isn't which one is 'best' — it's which one is best for your specific situation. Let me walk you through how to think about this." },
      { type: 'heading', text: 'AWS — The Safe, Mature Choice' },
      { type: 'paragraph', text: "Amazon Web Services is the market leader with good reason. It has the widest range of services, the most mature ecosystem, and the largest talent pool in India. If you're running a complex, multi-service application, or if you want the confidence of choosing the most battle-tested platform, AWS is hard to argue against." },
      { type: 'paragraph', text: "AWS also has data centres in Mumbai (ap-south-1), which matters for latency and for Indian data localisation requirements. Most Indian enterprises and startups default to AWS, which means finding AWS-skilled engineers and partners is easiest." },
      { type: 'heading', text: 'Azure — The Best Choice If You Use Microsoft Products' },
      { type: 'paragraph', text: "If your business already runs on Microsoft 365, Teams, Active Directory, or any other Microsoft product, Azure is likely your strongest option. The integration is seamless in a way that AWS and GCP simply cannot match. Your existing licences often translate to Azure credits, and the identity management through Azure Active Directory is the gold standard." },
      { type: 'quote', text: "For businesses in healthcare, education, or government — where Microsoft compliance certifications matter most — Azure is frequently the right answer even when the team has no prior Azure experience." },
      { type: 'heading', text: 'GCP — The Specialist\'s Choice for Data and AI' },
      { type: 'paragraph', text: "Google Cloud is often underestimated. If your workloads are heavily data-driven — analytics, machine learning, large-scale data processing — GCP's BigQuery, Vertex AI, and data pipeline tools are genuinely best-in-class. Google built the infrastructure that powers YouTube and Google Search; it handles scale in ways that are hard to match." },
      { type: 'paragraph', text: "GCP is also often the most cost-competitive option, particularly for compute-heavy workloads. If you're building an AI-first product, I'd seriously evaluate GCP before defaulting to the others." },
      { type: 'heading', text: 'How to Actually Decide' },
      { type: 'list', items: [
        'Map your existing tech stack — Microsoft-heavy? Lean Azure. Open source? AWS or GCP.',
        'Consider your compliance requirements — all three are RBI and SEBI compliant, but certifications vary',
        'Calculate total cost of ownership including egress fees, which catch many businesses off guard',
        'Think about your team — where is your technical talent more familiar?',
        'Consider a multi-cloud approach if you have genuinely different workload needs',
      ]},
      { type: 'paragraph', text: "There's no universally correct answer. What matters is making the decision deliberately, with a clear understanding of your requirements. If you'd like help evaluating which platform is right for your specific workloads, our cloud team can do a free assessment and give you a honest recommendation — even if that recommendation is 'not us'." },
    ],
  },
  {
    id: 3,
    slug: 'ai-business-automation-10-processes',
    category: 'ai & automation',
    title: '10 Business Processes You Can Automate with AI Today — No Coding Required',
    excerpt: "AI automation is no longer just for tech giants. From invoice processing to customer support, here are 10 workflows any business can automate immediately.",
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80',
    author: 'Ravi Kumar',
    authorRole: 'AI & Automation Lead, CYVENTRA',
    authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    date: 'May 5, 2025',
    readTime: '7 min read',
    tags: ['AI Automation', 'RPA', 'Productivity'],
    content: [
      { type: 'paragraph', text: "Twelve months ago, I had a conversation with a business owner who was spending 3 hours every day manually copying data from vendor invoices into his accounting software. Three hours. Every day. When I told him we could automate that process in a week, he looked at me like I was selling magic." },
      { type: 'paragraph', text: "We automated it. It now takes 4 minutes instead of 3 hours. He spent the recovered time winning two new clients. That's what AI automation actually means in practice — not robots replacing humans, but humans being freed from the work that doesn't deserve their attention." },
      { type: 'heading', text: 'The 10 Processes Worth Automating First' },
      { type: 'subheading', text: '1. Invoice Processing & Data Entry' },
      { type: 'paragraph', text: "AI can read invoices, extract line items, match them to purchase orders, and push the data into your accounting system — with 99%+ accuracy. Tools like Microsoft Power Automate and UiPath handle this without any custom coding." },
      { type: 'subheading', text: '2. Customer Support First Response' },
      { type: 'paragraph', text: "An AI chatbot can handle 60–70% of routine customer queries — order status, FAQs, appointment scheduling — without human involvement. When the query needs a person, it escalates with full context already gathered." },
      { type: 'subheading', text: '3. Employee Onboarding' },
      { type: 'paragraph', text: "The paperwork, system provisioning, and welcome communications involved in onboarding a new employee can be fully automated. New joiner fills a form; the system creates accounts, sends welcome emails, and notifies relevant teams automatically." },
      { type: 'subheading', text: '4. Inventory Reconciliation' },
      { type: 'paragraph', text: "For retail and manufacturing businesses, automated inventory reconciliation between point-of-sale data and warehouse systems can eliminate hours of manual spreadsheet work per week." },
      { type: 'subheading', text: '5. Social Media Scheduling & Reporting' },
      { type: 'paragraph', text: "AI tools can now generate social media post drafts, schedule them at optimal times, and produce weekly performance reports — all automatically." },
      { type: 'subheading', text: '6. HR Leave & Attendance Processing' },
      { type: 'paragraph', text: "Leave requests, approvals, and attendance reconciliation can all flow through automated workflows, saving HR teams hours of administrative work every month." },
      { type: 'subheading', text: '7. Email Triage and Routing' },
      { type: 'paragraph', text: "AI email classification tools can read incoming emails, identify their intent, and route them to the right person or queue automatically — reducing response times from hours to minutes." },
      { type: 'subheading', text: '8. Report Generation' },
      { type: 'paragraph', text: "Weekly and monthly business reports that currently require someone to pull data from multiple systems and manually compile them can be automatically generated and distributed to stakeholders on schedule." },
      { type: 'subheading', text: '9. Payment Follow-Up' },
      { type: 'paragraph', text: "Automated payment reminder sequences — polite, professionally worded, triggered on specific dates relative to invoice due dates — can improve collections without anyone lifting a finger." },
      { type: 'subheading', text: '10. Lead Qualification' },
      { type: 'paragraph', text: "AI can score incoming leads based on firmographic data and behaviour, automatically route high-value prospects to your sales team and nurture lower-scoring leads through email sequences." },
      { type: 'heading', text: 'Where to Start' },
      { type: 'paragraph', text: "Pick the process that costs you the most time or money right now. Document exactly how it works today — every step, every decision. Then talk to an automation specialist about what's feasible. In most cases, you'll have a working prototype within two weeks." },
      { type: 'quote', text: "The mistake most businesses make is waiting until everything is perfect before automating. Start with one process. Get it working. Then expand from there." },
    ],
  },
]

export default blogs
