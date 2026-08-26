const HUGGINGFACE_API_URL = 'https://api-inference.huggingface.co/models'

const MODEL = 'TinyLlama/TinyLlama-1.1B-Chat-v1.0'

const SYSTEM_PROMPT = `You are Cyra, an AI assistant for CYVENTRA Technologies, a technology company in India specializing in cybersecurity, cloud services, AI automation, and IT infrastructure. Be helpful, professional, and concise. Keep responses under 3 sentences. If you don't have enough information about a topic, suggest the user email support@cyventratech.com for more detailed assistance.`

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

export async function getAIResponse(
  messages: ChatMessage[],
  apiKey?: string
): Promise<string> {
  const lastUserMessage = messages[messages.length - 1]?.content || ''

  const prompt = `<|system|>
${SYSTEM_PROMPT}
</|system|>
<|user|>
${lastUserMessage}
</|user|>
<|assistant|>
`

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }

  const hfKey = apiKey || import.meta.env.VITE_HF_API_KEY
  if (hfKey) {
    headers['Authorization'] = `Bearer ${hfKey}`
  }

  try {
    const response = await fetch(`${HUGGINGFACE_API_URL}/${MODEL}`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        inputs: prompt,
        parameters: {
          max_new_tokens: 150,
          temperature: 0.7,
          top_p: 0.9,
          do_sample: true,
          return_full_text: false,
        },
        options: {
          wait_for_model: true,
        },
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`API error ${response.status}: ${errorText}`)
    }

    const data = await response.json()

    if (data && Array.isArray(data) && data[0]?.generated_text) {
      let text = data[0].generated_text.trim()
      text = text.replace(/<\|.*?\|>/g, '').trim()
      if (text.length > 0) {
        return text
      }
    }

    throw new Error('No response generated')
  } catch (error) {
    console.warn('AI API unavailable, using local fallback:', error)
    throw error
  }
}

export function isAIConfigured(): boolean {
  return typeof window !== 'undefined'
}
