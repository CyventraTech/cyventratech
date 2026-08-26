import React, { useState, useRef, useEffect, useCallback } from 'react'
import { getAIResponse } from '@/lib/ai'

type Message = {
  id: string
  role: 'user' | 'assistant'
  text: string
  timestamp: number
}

const CYRA_INTRO: Message = {
  id: 'intro',
  role: 'assistant',
  text: "Hi! I'm Cyra, your AI assistant at CYVENTRA Technologies. I can help you with our services, cybersecurity solutions, cloud infrastructure, AI automation, or any questions about our company. How can I help you today?",
  timestamp: Date.now(),
}

const PREDEFINED_RESPONSES: Record<string, string> = {
  hello: "Hello! Welcome to CYVENTRA Technologies. I'm Cyra, your AI assistant. How can I help you today?",
  hi: "Hi there! I'm Cyra. Ask me about our services, cybersecurity, cloud solutions, or anything else about CYVENTRA.",
  services:
    "CYVENTRA offers a wide range of technology services:\n\n• **Cybersecurity** - Penetration testing, SOC, incident response\n• **Cloud Services** - AWS, Azure, GCP migration and management\n• **AI & Automation** - Custom AI solutions, chatbots, process automation\n• **IT Infrastructure** - Network setup, server management\n• **DevOps** - CI/CD pipelines, containerization\n• **Data Analytics** - Business intelligence, data visualization\n\nWould you like to know more about any specific service?",
  cybersecurity:
    "Our cybersecurity services include:\n\n• **Penetration Testing** - Identifying vulnerabilities before attackers do\n• **SOC (Security Operations Center)** - 24/7 monitoring and threat detection\n• **Incident Response** - Rapid response to security breaches\n• **Vulnerability Assessment** - Comprehensive security audits\n• **Compliance** - GDPR, HIPAA, ISO 27001 compliance\n\nWe protect businesses of all sizes from cyber threats. Would you like a consultation?",
  cloud: "We provide end-to-end cloud solutions:\n\n• **Cloud Migration** - Seamless transition to AWS, Azure, or GCP\n• **Cloud Architecture** - Designing scalable, secure infrastructure\n• **Cloud Management** - Monitoring, optimization, and cost reduction\n• **Disaster Recovery** - Backup and business continuity planning\n\nOur team helps you leverage the full power of cloud computing.",
  ai: "Our AI & Automation services:\n\n• **Custom AI Development** - Tailored AI solutions for your business\n• **Chatbots & Virtual Assistants** - Intelligent customer support\n• **Process Automation** - Streamlining workflows with RPA\n• **Machine Learning** - Predictive analytics and data-driven insights\n• **Natural Language Processing** - Text analysis and sentiment detection\n\nWe help businesses harness the power of AI to stay competitive.",
  about: "CYVENTRA Technologies is a leading technology solutions provider based in India. We specialize in cybersecurity, cloud services, AI automation, and IT infrastructure.\n\nOur mission is to help businesses navigate the digital landscape with secure, innovative, and scalable technology solutions.\n\nWould you like to know more about our story or team?",
  contact: "You can reach us through:\n\n• **Website**: www.cyventratech.com\n• **Email**: info@cyventratech.com\n• **Phone**: +91-XXXXXXXXXX\n• **Contact Form**: Visit our /contact page\n\nOur team typically responds within 24 hours. How else can I help?",
  pricing:
    "Our pricing varies based on project scope and requirements. We offer:\n\n• **Free Consultation** - Initial assessment at no cost\n• **Custom Packages** - Tailored solutions for your budget\n• **Enterprise Plans** - Scalable pricing for large organizations\n\nContact us for a personalized quote. Would you like to schedule a consultation?",
  team: "Our team consists of certified professionals with expertise in:\n\n• Cybersecurity (CEH, OSCP, CISSP)\n• Cloud Architecture (AWS, Azure, GCP certified)\n• AI/ML Engineering\n• DevOps & SRE\n• Full-stack Development\n\nWe're committed to delivering excellence in every project.",
  careers:
    "We're always looking for talented individuals to join our team! Check out our /careers page for current openings.\n\nWe offer:\n• Competitive salaries\n• Remote work options\n• Learning and development opportunities\n• Health benefits\n\nInterested? Apply through our careers page!",
}

const FALLBACK_RESPONSES = [
  "I don't have enough information about that specific topic. For more details, you can email us at **support@cyventratech.com** — our team will be happy to assist you!",
  "That's a great question! I'm not fully equipped to answer that right now. For detailed assistance, please reach out to **support@cyventratech.com** and our experts will help you.",
  "I appreciate your question! While I don't have specific information on that, our team can provide detailed guidance. Please email **support@cyventratech.com** for personalized support.",
]

function getLocalResponse(input: string): string {
  const lower = input.toLowerCase().trim()

  for (const [key, response] of Object.entries(PREDEFINED_RESPONSES)) {
    if (lower.includes(key)) {
      return response
    }
  }

  if (lower.includes('thank') || lower.includes('thanks')) {
    return "You're welcome! Is there anything else I can help you with about CYVENTRA Technologies?"
  }

  if (lower.includes('bye') || lower.includes('goodbye')) {
    return 'Goodbye! Thank you for visiting CYVENTRA Technologies. Feel free to come back anytime you need assistance!'
  }

  if (lower.includes('help')) {
    return "I can help you with:\n\n• **Services** - Learn about our cybersecurity, cloud, AI, and IT solutions\n• **Company** - About CYVENTRA, our team, and mission\n• **Contact** - Get in touch with our team\n• **Careers** - Explore job opportunities\n\nJust ask me anything!"
  }

  return FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)]
}

export default function CyraChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([CYRA_INTRO])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  const sendMessage = useCallback(async () => {
    if (!input.trim()) return

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: input.trim(),
      timestamp: Date.now(),
    }

    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    try {
      const chatHistory = [...messages, userMsg].map((m) => ({
        role: m.role as 'user' | 'assistant',
        content: m.text,
      }))

      const response = await getAIResponse(chatHistory)

      const assistantMsg: Message = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        text: response,
        timestamp: Date.now(),
      }
      setMessages((prev) => [...prev, assistantMsg])
    } catch {
      const localResponse = getLocalResponse(userMsg.text)
      const assistantMsg: Message = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        text: localResponse,
        timestamp: Date.now(),
      }
      setMessages((prev) => [...prev, assistantMsg])
    } finally {
      setIsTyping(false)
    }
  }, [input, messages])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        sendMessage()
      }
    },
    [sendMessage]
  )

  const quickActions = [
    { label: 'Services', query: 'services' },
    { label: 'Cybersecurity', query: 'cybersecurity' },
    { label: 'Cloud', query: 'cloud' },
    { label: 'AI Solutions', query: 'ai' },
  ]

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 ${
          isOpen
            ? 'bg-neutral-800 hover:bg-neutral-700'
            : 'bg-gradient-to-br from-red-500 to-red-700 hover:from-red-600 hover:to-red-800'
        }`}
        aria-label={isOpen ? 'Close chat' : 'Open Cyra chat'}
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[520px] max-h-[calc(100vh-8rem)] bg-neutral-900 border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold text-sm">Cyra</h3>
              <p className="text-white/70 text-xs">CYVENTRA AI Assistant</p>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/70 text-xs">Online</span>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === 'user'
                      ? 'bg-red-600 text-white rounded-br-md'
                      : 'bg-neutral-800 text-white/90 rounded-bl-md border border-white/5'
                  }`}
                >
                  {msg.text.split('\n').map((line, i) => {
                    const emailRegex = /(\*\*support@cyventratech\.com\*\*)/g
                    const parts = line.split(emailRegex)
                    return (
                      <span key={i}>
                        {parts.map((part, j) => {
                          if (part.startsWith('**') && part.endsWith('**')) {
                            const email = part.slice(2, -2)
                            return (
                              <a
                                key={j}
                                href={`mailto:${email}`}
                                className="font-semibold text-red-400 hover:text-red-300 underline"
                              >
                                {email}
                              </a>
                            )
                          }
                          const boldParts = part.split(/(\*\*.*?\*\*)/)
                          return boldParts.map((bp, k) =>
                            bp.startsWith('**') && bp.endsWith('**') ? (
                              <strong key={`${j}-${k}`} className="font-semibold">
                                {bp.slice(2, -2)}
                              </strong>
                            ) : (
                              <span key={`${j}-${k}`}>{bp}</span>
                            )
                          )
                        })}
                        {i < msg.text.split('\n').length - 1 && <br />}
                      </span>
                    )
                  })}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-neutral-800 border border-white/5 px-4 py-3 rounded-2xl rounded-bl-md">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length <= 2 && (
            <div className="px-4 pb-2 flex gap-2 flex-wrap">
              {quickActions.map((action) => (
                <button
                  key={action.label}
                  onClick={() => {
                    const userMsg: Message = {
                      id: `user-${Date.now()}`,
                      role: 'user',
                      text: action.query,
                      timestamp: Date.now(),
                    }
                    setMessages((prev) => [...prev, userMsg])
                    setInput('')
                    setIsTyping(true)

                    getAIResponse([...messages, userMsg].map((m) => ({ role: m.role, content: m.text })))
                      .then((response) => {
                        const assistantMsg: Message = {
                          id: `assistant-${Date.now()}`,
                          role: 'assistant',
                          text: response,
                          timestamp: Date.now(),
                        }
                        setMessages((prev) => [...prev, assistantMsg])
                      })
                      .catch(() => {
                        const localResponse = getLocalResponse(action.query)
                        const assistantMsg: Message = {
                          id: `assistant-${Date.now()}`,
                          role: 'assistant',
                          text: localResponse,
                          timestamp: Date.now(),
                        }
                        setMessages((prev) => [...prev, assistantMsg])
                      })
                      .finally(() => setIsTyping(false))
                  }}
                  className="px-3 py-1.5 text-xs font-medium text-white/70 bg-neutral-800 hover:bg-neutral-700 border border-white/10 rounded-full transition-colors"
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="px-4 py-3 border-t border-white/10">
            <div className="flex items-center gap-2 bg-neutral-800 rounded-xl px-3 py-2 border border-white/10 focus-within:border-red-500/50 transition-colors">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask Cyra..."
                className="flex-1 bg-transparent text-white text-sm outline-none placeholder:text-white/30"
                disabled={isTyping}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || isTyping}
                className="w-8 h-8 rounded-lg bg-red-600 hover:bg-red-700 disabled:bg-neutral-700 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
