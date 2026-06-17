export interface CaseStudy {
  id: number
  slug: string
  category: string
  industry: string
  client: string
  location: string
  title: string
  summary: string
  image: string
  duration: string
  metric: string
  metricLabel: string
  challenge: string
  solution: string
  results: string[]
  content: { type: 'heading' | 'paragraph' | 'list' | 'quote' | 'metric'; text?: string; items?: string[]; metrics?: { number: string; label: string }[] }[]
}

export const caseStudies: CaseStudy[] = [  {
    id: 1,
    slug: 'bank-phishing-rbi-audit-60-days',
    category: 'cybersecurity',
    industry: 'Financial Services',
    client: 'Regional Cooperative Bank',
    location: 'Odisha, India',
    title: 'How a Regional Bank Eliminated Phishing Attacks and Passed RBI Audit in 60 Days',
    summary: 'A cooperative bank facing repeated phishing incidents needed RBI audit-readiness in 60 days. CYVENTRA delivered both — with zero major findings.',
    image: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=1200&q=80',
    duration: '60 days',
    metric: '100%',
    metricLabel: 'phishing eliminated',
    challenge: 'A cooperative bank with 12 branches was suffering repeated phishing incidents targeting staff email. Their IT team had no SOC capability and an upcoming RBI cyber audit was 60 days away.',
    solution: 'CYVENTRA deployed 24/7 SOC monitoring, implemented email security with advanced threat protection, conducted staff awareness training, and set up automated compliance reporting aligned with RBI guidelines.',
    results: [
      '100% reduction in successful phishing incidents post-deployment',
      'Passed RBI cyber audit with zero major findings',
      'Average threat detection time reduced from 14 hours to 4 minutes',
      'Complete compliance documentation auto-generated for audit',
    ],
    content: [
      { type: 'paragraph', text: "When the bank's IT manager first called us, his voice was tight with stress. \"We have a mandatory RBI cyber audit in 60 days,\" he said. \"And last week, three of our staff clicked on phishing emails that looked exactly like internal communications. We need help.\"" },
      { type: 'paragraph', text: "This is a situation we encounter frequently — organisations that have been managing IT reactively, suddenly faced with a hard deadline and a real threat. The good news is that 60 days, while tight, is workable if you move decisively." },
      { type: 'heading', text: 'Understanding the Problem' },
      { type: 'paragraph', text: "Our first step was a rapid assessment. Within 48 hours, we had a clear picture. The bank's email gateway had basic spam filtering but nothing capable of detecting sophisticated spear-phishing attacks. Staff had received no formal security awareness training. There was no centralised logging, which meant if an attack succeeded, they'd have no visibility into what had been compromised. And the audit readiness documentation was essentially non-existent." },
      { type: 'paragraph', text: "Three phishing incidents in a single week told us this wasn't a one-off. The attackers had likely mapped the organisation and were systematically probing it. We needed to move fast." },
      { type: 'heading', text: 'What We Did in 60 Days' },
      { type: 'paragraph', text: "Week one was about stopping the bleeding. We deployed advanced email security that uses AI to analyse sender behaviour, link reputation, and content patterns — not just keyword blacklists. Simultaneously, we set up centralised SIEM (Security Information and Event Management) logging across all 12 branches." },
      { type: 'paragraph', text: "In week two, we ran a phishing simulation campaign — with the bank's permission — to get a baseline on staff susceptibility. 34% of staff clicked the simulated phishing link. That number is actually typical, but it gave us powerful data to drive the training sessions we ran in week three." },
      { type: 'quote', text: "After the training, we ran the same phishing simulation again. Click rate dropped from 34% to 3%. That's not just a statistic — that's the difference between a breach and a near-miss." },
      { type: 'paragraph', text: "Weeks four through eight were focused on audit preparation — documentation, policy creation, control evidence collection, and mock audit exercises. We mapped every RBI cybersecurity framework requirement to either an existing control or one we'd implemented during the engagement." },
      { type: 'heading', text: 'The Audit Result' },
      { type: 'paragraph', text: "The RBI audit team spent two days at the bank. Our client's IT manager told us afterwards: \"They were genuinely surprised by how organised the documentation was. They said most banks their size come in with gaps. We had everything they asked for, and then some.\"" },
      { type: 'paragraph', text: "Zero major findings. Two minor observations, both with remediation timelines already documented and scheduled. The bank passed." },
      { type: 'metric', metrics: [
        { number: '100%', label: 'phishing eliminated' },
        { number: '4 min', label: 'threat detection time' },
        { number: '0', label: 'major audit findings' },
        { number: '60', label: 'days to completion' },
      ]},
      { type: 'heading', text: 'What This Meant for the Bank' },
      { type: 'paragraph', text: "Beyond passing the audit, the bank now has a security posture that genuinely protects it. Staff know how to recognise and report suspicious emails. The SOC catches threats before they become incidents. And the compliance documentation framework we built will serve them for years of future audits." },
    ],
  },
  {
    id: 2,
    slug: 'healthcare-cloud-migration-zero-downtime',
    category: 'cloud',
    industry: 'Healthcare',
    client: 'Multi-Specialty Clinic Chain',
    location: 'Bhubaneswar, Odisha',
    title: 'Zero-Downtime Cloud Migration for a 5-Clinic Healthcare Network',
    summary: 'Moving patient records from ageing on-premise servers to cloud — without disrupting a single day of patient care across 5 clinics.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=80',
    duration: '45 days',
    metric: '0 min',
    metricLabel: 'downtime during migration',
    challenge: 'A growing clinic chain was running patient records on ageing on-premise servers. Any downtime risked patient safety. They needed to migrate to cloud without disrupting daily operations.',
    solution: 'CYVENTRA designed a phased AWS migration strategy, replicated data in real time during the transition window, configured cloud-native backups with 15-minute RPO, and set up HIPAA-aligned access controls.',
    results: [
      'Zero minutes of downtime during the entire migration',
      'Recovery Time Objective (RTO) reduced from 4 hours to 15 minutes',
      'Infrastructure costs reduced by 38% in year one',
      'All 5 clinics on unified, secure cloud platform within 45 days',
    ],
    content: [
      { type: 'paragraph', text: "Healthcare is one of the domains where IT migration carries real stakes. A server going offline at a hospital or clinic isn't just an inconvenience — it can delay treatment, create medication errors, or prevent access to critical patient history. When the medical director of this clinic chain called us, she was very clear: \"We cannot have a single hour of downtime. Patient care has to continue without interruption.\"" },
      { type: 'paragraph', text: "We told her that zero downtime was absolutely achievable — but it required careful planning and the right migration architecture. Here's how we did it." },
      { type: 'heading', text: 'The Starting Point' },
      { type: 'paragraph', text: "The clinic chain had five locations sharing a single on-premise server infrastructure hosted at their main clinic. The hardware was 7 years old — past end of life, running on unsupported operating systems, with no hot standby. Their backup was a weekly tape backup that had never been tested for restore speed. Last time someone checked, restore from tape took 4+ hours." },
      { type: 'paragraph', text: "The risks were existential. A server failure during peak hours would take down all five clinics simultaneously. And it wasn't a question of if — it was when. We'd seen the SMART data from the drives. They were failing." },
      { type: 'heading', text: 'The Migration Approach' },
      { type: 'paragraph', text: "The key to zero-downtime migration is running the old and new environments in parallel. We provisioned the AWS infrastructure first — a fully configured, tested environment that mirrored the on-premise setup exactly. Then we began continuous data replication from the old servers to AWS, keeping both environments synchronised in real time." },
      { type: 'quote', text: "The actual cutover — switching the clinics from old to new — took 18 minutes. It happened at 11 PM on a Sunday. No patients were affected. When staff arrived Monday morning, everything looked exactly the same, but was running on AWS." },
      { type: 'paragraph', text: "We also configured automated cloud backups every 15 minutes — compared to the weekly tape backups they'd had before. The Recovery Point Objective (the maximum amount of data you could lose in a disaster) went from one week to 15 minutes. That's a transformative improvement." },
      { type: 'metric', metrics: [
        { number: '0 min', label: 'migration downtime' },
        { number: '15 min', label: 'recovery point objective' },
        { number: '38%', label: 'infrastructure cost reduction' },
        { number: '45', label: 'days to completion' },
      ]},
      { type: 'heading', text: 'The Outcome' },
      { type: 'paragraph', text: "Three months after the migration, the old server hardware failed completely. Under the old setup, that would have been a crisis affecting hundreds of patients. Instead, the team noticed it only because of a monitoring alert — the AWS environment had been running flawlessly the entire time, completely insulated from the hardware failure." },
      { type: 'paragraph', text: "The cost reduction was an added bonus. AWS infrastructure cost 38% less than maintaining the ageing on-premise hardware, factoring in electricity, maintenance contracts, and hardware refresh cycles. The medical director now says moving to cloud was one of the best operational decisions the clinic has made." },
    ],
  },
  {
    id: 3,
    slug: 'retail-ai-automation-1200-hours',
    category: 'ai automation',
    industry: 'Retail & E-Commerce',
    client: 'Mid-Size Retail Chain',
    location: 'Cuttack, Odisha',
    title: 'AI Automation Saves 1,200 Staff Hours Per Month for a 20-Store Retailer',
    summary: 'Manual inventory reconciliation and purchase order processing was costing this retailer over 1,200 person-hours monthly. AI automation changed everything.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
    duration: '8 weeks',
    metric: '1,200+',
    metricLabel: 'hours saved per month',
    challenge: 'A retail chain with 20 stores was spending over 1,200 person-hours monthly on manual inventory reconciliation, purchase order generation, and customer support ticket routing.',
    solution: 'CYVENTRA implemented RPA bots for inventory reconciliation, an AI-powered PO system, and a chatbot handling 70% of routine customer queries.',
    results: [
      '1,200+ staff hours saved monthly — equivalent to 7.5 full-time employees',
      'Purchase order errors reduced by 94%',
      'Customer support response time reduced from 6 hours to under 3 minutes',
      'Full ROI achieved within 4 months of deployment',
    ],
    content: [
      { type: 'paragraph', text: "When we first met with this retailer's operations director, she slid a spreadsheet across the table. \"This is what we do every Monday morning,\" she said. It showed a 47-step process for reconciling inventory across 20 stores — pulling data from each store's POS system, cross-referencing with the warehouse, identifying discrepancies, and generating purchase orders for restock." },
      { type: 'paragraph', text: "\"Four people. Full day. Every Monday. And we still get errors.\" She wasn't frustrated — she was matter-of-fact. This was just how it worked, and she'd accepted it. We hadn't." },
      { type: 'heading', text: 'Mapping the Waste' },
      { type: 'paragraph', text: "We spent a week observing and documenting every manual process across the business. The inventory reconciliation was the biggest single drain, but it wasn't alone. Customer support staff were spending 4–5 hours daily answering the same ten questions about order status, store hours, and return policies. The purchasing team was manually typing purchase orders that could be generated automatically from stock data." },
      { type: 'paragraph', text: "In total, we identified 1,247 person-hours of monthly effort that met the criteria for automation — repetitive, rule-based, high-volume work that didn't require human judgement." },
      { type: 'heading', text: 'Building the Automation Stack' },
      { type: 'paragraph', text: "We started with the inventory reconciliation — the biggest pain point. We built an RPA (Robotic Process Automation) bot that runs every night, connecting to each store's POS system, pulling stock levels, comparing against the warehouse management system, and generating a reconciliation report with flagged discrepancies. What took four people a full Monday now runs in 23 minutes overnight." },
      { type: 'quote', text: "The first Monday after we deployed the bot, the operations director sent me a message at 7 AM: 'The report was already in my inbox when I arrived. I'm not sure what to do with myself.' That reaction — that small moment of reclaimed time — is what this work is really about." },
      { type: 'paragraph', text: "The purchase order automation was next. We connected the inventory system to the purchasing system, defined reorder thresholds for each SKU, and built a rule engine that auto-generates draft purchase orders when stock drops below threshold. The purchasing team reviews and approves — instead of creating from scratch. Purchase order errors dropped from 8% to under 0.5%." },
      { type: 'paragraph', text: "Finally, we deployed an AI chatbot on the retailer's website and WhatsApp channel. Trained on their product catalogue, store information, and return policies, it now handles 71% of customer queries without human involvement. Average response time dropped from 6 hours to under 3 minutes." },
      { type: 'metric', metrics: [
        { number: '1,200+', label: 'hours saved monthly' },
        { number: '94%', label: 'fewer PO errors' },
        { number: '3 min', label: 'support response time' },
        { number: '4 mo', label: 'payback period' },
      ]},
      { type: 'heading', text: 'Twelve Months Later' },
      { type: 'paragraph', text: "We checked in with the client a year after deployment. The four people who'd spent Mondays on reconciliation were now managing vendor relationships and planning a new product category expansion — work that actually required their expertise. The operations director told us: \"I used to think automation was a threat to jobs. Now I think it's what lets people do the work that matters.\"" },
    ],
  },
]

export default caseStudies
