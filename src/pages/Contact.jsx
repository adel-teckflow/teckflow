import React, { useState } from "react"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", form)
    setForm({ name: "", email: "", message: "" })
    alert("Thank you! We'll get back to you soon.")
  }

  return (
    <main className="bg-[#0a0e27]">
      {/* HERO SECTION */}
      <section className="relative py-24 px-6 dark-section overflow-hidden min-h-96 flex items-center">
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#00d4ff"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#ffcf33] rounded-full blur-3xl opacity-10 animate-float"></div>
          <div
            className="absolute bottom-0 right-0 w-80 h-80 bg-[#00d4ff] rounded-full blur-3xl opacity-5 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-black mb-6 gradient-text">
            GET IN TOUCH
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to turn your ideas into reality? Contact us today to discuss
            how we can bring your vision to life.
          </p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="py-24 px-6 darker-section">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="neon-card p-6 rounded-lg hover:scale-105 transition-transform text-center">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="font-bold text-[#00d4ff] mb-2 uppercase">
                Address
              </h3>
              <p className="text-white/80 text-sm">
                RUE FRERES KADRI BATIMENT "A" APPARTEMENT N°04 Hydra – Alger
              </p>
            </div>
            <div
              className="neon-card p-6 rounded-lg hover:scale-105 transition-transform text-center"
              style={{ animationDelay: "100ms" }}
            >
              <div className="text-5xl mb-4">📞</div>
              <h3 className="font-bold text-[#00d4ff] mb-2 uppercase">Phone</h3>
              <p className="text-white/80 text-sm">+213 560 19 56 12</p>
            </div>
            <div
              className="neon-card p-6 rounded-lg hover:scale-105 transition-transform text-center"
              style={{ animationDelay: "200ms" }}
            >
              <div className="text-5xl mb-4">✉️</div>
              <h3 className="font-bold text-[#00d4ff] mb-2 uppercase">Email</h3>
              <p className="text-white/80 text-sm">marketing@teckflow.net</p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="neon-card p-8 rounded-xl max-w-2xl mx-auto">
            <h2 className="text-3xl font-black text-[#00d4ff] mb-8 text-center uppercase">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#00d4ff] mb-2 uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-[#0a0e27] border-2 border-[#00d4ff] text-white focus:outline-none focus:border-[#ffcf33] transition-all placeholder-white/40"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#00d4ff] mb-2 uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-[#0a0e27] border-2 border-[#00d4ff] text-white focus:outline-none focus:border-[#ffcf33] transition-all placeholder-white/40"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#00d4ff] mb-2 uppercase">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full p-3 rounded-lg bg-[#0a0e27] border-2 border-[#00d4ff] text-white focus:outline-none focus:border-[#ffcf33] transition-all resize-none placeholder-white/40"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full neon-button py-3 rounded-lg text-lg uppercase font-bold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* SOCIAL LINKS */}
      <section className="py-16 px-6 dark-section text-center">
        <h3 className="text-2xl font-black text-[#00d4ff] mb-8 uppercase">
          Follow Us
        </h3>
        <div className="flex justify-center gap-6">
          {[
            { icon: "👨‍💼", label: "LinkedIn" },
            { icon: "📘", label: "Facebook" },
            { icon: "🐦", label: "Twitter" },
            { icon: "📷", label: "Instagram" },
          ].map((social, i) => (
            <button
              key={i}
              className="neon-button w-12 h-12 rounded-full flex items-center justify-center text-xl hover:scale-125 transition-transform"
            >
              {social.icon}
            </button>
          ))}
        </div>
      </section>
    </main>
  )
}
