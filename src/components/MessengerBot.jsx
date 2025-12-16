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
            : "bg-gradient-to-br from-[#00d4ff] to-[#ffcf33] hover:scale-110 shadow-lg"
        }`}
        style={{
          boxShadow: open
            ? "0 0 30px rgba(0, 212, 255, 0.6), 0 0 60px rgba(255, 207, 51, 0.4)"
            : "0 0 20px rgba(0, 212, 255, 0.4)",
        }}
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div
          className="fixed bottom-24 right-8 w-96 h-96 bg-[#0a0e27] border-2 border-[#00d4ff] rounded-xl shadow-2xl flex flex-col z-40 overflow-hidden animate-slide-in-right"
          style={{
            boxShadow:
              "0 0 30px rgba(0, 212, 255, 0.5), inset 0 0 20px rgba(0, 212, 255, 0.05)",
          }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#00d4ff]/20 to-[#ffcf33]/20 border-b border-[#00d4ff] p-4 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-[#00d4ff] animate-neon">TeckBot</h3>
              <p className="text-xs text-[#00d4ff]/70">Always online</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-[#00d4ff] hover:text-[#ffcf33] transition"
            >
              ✕
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#0a0e27]">
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
                      ? "bg-[#00d4ff]/20 text-[#00d4ff] border border-[#00d4ff]"
                      : "bg-[#ffcf33]/15 text-white border border-[#ffcf33]"
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
            <div className="px-3 py-2 border-t border-[#00d4ff]/20 bg-[#0f1535] max-h-20 overflow-y-auto">
              <p className="text-xs text-[#00d4ff] mb-2 opacity-70">
                Quick answers:
              </p>
              <div className="space-y-1">
                {FAQ_DATA.slice(0, 3).map((qa) => (
                  <button
                    key={qa.id}
                    onClick={() => handleQuickQuestion(qa)}
                    className="w-full text-left text-xs px-2 py-1 rounded border border-[#ffcf33]/30 text-[#ffcf33] hover:bg-[#ffcf33]/10 transition truncate"
                  >
                    {qa.question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="border-t border-[#00d4ff] p-3 flex gap-2 bg-[#0f1535]">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage(input)}
              placeholder="Ask me anything..."
              className="flex-1 bg-[#0a0e27] border border-[#00d4ff] rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-[#ffcf33] transition"
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
