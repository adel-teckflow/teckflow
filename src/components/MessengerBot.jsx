import { useState, useEffect, useRef } from "react"

const FAQ_DATA = [
  {
    id: 1,
    question: "What services do you offer?",
    answer:
      "We offer web development, mobile app development, AI integration, digital transformation, MVP development, and professional video production.",
  },
  {
    id: 2,
    question: "How long does a project take?",
    answer:
      "Project timelines vary based on complexity. Typically, web projects take 4-12 weeks, and mobile apps take 8-20 weeks. We discuss timelines during consultation.",
  },
  {
    id: 3,
    question: "What is your pricing model?",
    answer:
      "We offer flexible pricing: fixed-price projects, time & materials, and dedicated teams. We customize quotes based on your specific needs.",
  },
  {
    id: 4,
    question: "Do you provide maintenance and support?",
    answer:
      "Yes! We provide post-launch support, maintenance, and updates to ensure your digital products run smoothly.",
  },
  {
    id: 5,
    question: "Can you work with startups?",
    answer:
      "Absolutely! We specialize in MVP development for startups and offer flexible engagement models to fit your budget.",
  },
  {
    id: 6,
    question: "How do I get started?",
    answer:
      "Contact us at +213 560 19 56 12 or marketing@teckflow.net to schedule a free consultation. We'll discuss your vision and provide recommendations.",
  },
]

export default function MessengerBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey! 👋 I'm TeckBot. How can I help you today?",
      sender: "bot",
    },
  ])
  const [input, setInput] = useState("")
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = (text) => {
    if (!text.trim()) return

    // Add user message
    const userMsg = { id: Date.now(), text, sender: "user" }
    setMessages((prev) => [...prev, userMsg])
    setInput("")

    // Simulate bot response
    setTimeout(() => {
      let botResponse = getDefaultResponse(text)
      const botMsg = { id: Date.now() + 1, text: botResponse, sender: "bot" }
      setMessages((prev) => [...prev, botMsg])
    }, 500)
  }

  const handleQuickQuestion = (qa) => {
    const userMsg = { id: Date.now(), text: qa.question, sender: "user" }
    setMessages((prev) => [...prev, userMsg])

    setTimeout(() => {
      const botMsg = { id: Date.now() + 1, text: qa.answer, sender: "bot" }
      setMessages((prev) => [...prev, botMsg])
    }, 500)
  }

  const getDefaultResponse = (text) => {
    const lower = text.toLowerCase()
    if (lower.includes("price") || lower.includes("cost")) {
      return "Pricing depends on project scope. Contact us for a custom quote! 💰"
    }
    if (
      lower.includes("contact") ||
      lower.includes("phone") ||
      lower.includes("email")
    ) {
      return "You can reach us at:\n📞 +213 560 19 56 12\n✉️ marketing@teckflow.net"
    }
    if (
      lower.includes("portfolio") ||
      lower.includes("project") ||
      lower.includes("work")
    ) {
      return "Check out our portfolio section on the website to see our amazing projects! 🎨"
    }
    return "Great question! Feel free to ask me anything about our services. Or check the quick questions below! 🚀"
  }

  return (
    <>
      {/* Floating Bot Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-8 right-8 z-40 w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl transition-all duration-300 ${
          open
            ? "neon-button"
            : "bg-gradient-to-br from-[#7BA3C0] to-[#A899C9] hover:scale-110 shadow-lg"
        }`}
        style={{
          boxShadow: open
            ? "0 8px 20px rgba(123, 163, 192, 0.3)"
            : "0 4px 12px rgba(123, 163, 192, 0.2)",
        }}
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div
          className="fixed bottom-24 right-8 w-96 h-96 bg-white border border-[#E8E8E8] rounded-xl shadow-2xl flex flex-col z-40 overflow-hidden animate-slide-in-right"
          style={{
            boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#C8E1F5] to-[#B8E0D2] border-b border-[#E8E8E8] p-4 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-[#3D3D3D]">TeckBot</h3>
              <p className="text-xs text-[#6B6B6B]">Always online</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-[#3D3D3D] hover:text-[#7BA3C0] transition"
            >
              ✕
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-white">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                } animate-fade-in-up`}
              >
                <div
                  className={`px-4 py-2 rounded-lg max-w-xs text-sm ${
                    msg.sender === "user"
                      ? "bg-[#7BA3C0]/15 text-[#3D3D3D] border border-[#7BA3C0]"
                      : "bg-[#E8B8D8]/15 text-[#3D3D3D] border border-[#E8B8D8]"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions (First 3) */}
          {messages.length <= 2 && (
            <div className="px-3 py-2 border-t border-[#E8E8E8] bg-[#FAFAF8] max-h-20 overflow-y-auto">
              <p className="text-xs text-[#6B6B6B] mb-2">Quick answers:</p>
              <div className="space-y-1">
                {FAQ_DATA.slice(0, 3).map((qa) => (
                  <button
                    key={qa.id}
                    onClick={() => handleQuickQuestion(qa)}
                    className="w-full text-left text-xs px-2 py-1 rounded border border-[#C8E1F5] text-[#7BA3C0] hover:bg-[#C8E1F5]/20 transition truncate"
                  >
                    {qa.question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="border-t border-[#E8E8E8] p-3 flex gap-2 bg-white">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage(input)}
              placeholder="Ask me anything..."
              className="flex-1 bg-white border border-[#E8E8E8] rounded px-3 py-2 text-[#3D3D3D] text-sm focus:outline-none focus:border-[#7BA3C0] transition"
            />
            <button
              onClick={() => handleSendMessage(input)}
              className="neon-button px-4 py-2 text-sm rounded"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  )
}
