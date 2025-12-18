import React, { useState } from "react"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6"
import { LiaLinkedin } from "react-icons/lia"

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
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-[#C8E1F5] to-[#FAFAF8] overflow-hidden min-h-96 flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#A899C9] rounded-full blur-3xl opacity-5 animate-float"></div>
          <div
            className="absolute bottom-0 right-0 w-80 h-80 bg-[#7BA3C0] rounded-full blur-3xl opacity-5 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-black mb-6 gradient-text">
            GET IN TOUCH
          </h1>
          <p className="text-xl text-[#6B6B6B] max-w-3xl mx-auto">
            Ready to turn your ideas into reality? Contact us today to discuss
            how we can bring your vision to life.
          </p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#F5F3F0] to-[#FAFAF8]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="neon-card p-6 rounded-lg hover:scale-105 transition-transform text-center">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="font-bold text-[#7BA3C0] mb-2 uppercase">
                Address
              </h3>
              <p className="text-[#6B6B6B] text-sm">
                RUE FRERES KADRI BATIMENT "A" APPARTEMENT N°04 Hydra – Alger
              </p>
            </div>
            <div
              className="neon-card p-6 rounded-lg hover:scale-105 transition-transform text-center"
              style={{ animationDelay: "100ms" }}
            >
              <div className="text-5xl mb-4">📞</div>
              <h3 className="font-bold text-[#7BA3C0] mb-2 uppercase">Phone</h3>
              <p className="text-[#6B6B6B] text-sm">+213 560 19 56 12</p>
            </div>
            <div
              className="neon-card p-6 rounded-lg hover:scale-105 transition-transform text-center"
              style={{ animationDelay: "200ms" }}
            >
              <div className="text-5xl mb-4">✉️</div>
              <h3 className="font-bold text-[#7BA3C0] mb-2 uppercase">Email</h3>
              <p className="text-[#6B6B6B] text-sm">marketing@teckflow.net</p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="neon-card p-8 rounded-xl max-w-2xl mx-auto">
            <h2 className="text-3xl font-black text-[#7BA3C0] mb-8 text-center uppercase">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#7BA3C0] mb-2 uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-white border-2 border-[#7BA3C0] text-[#3D3D3D] focus:outline-none focus:border-[#A899C9] transition-all placeholder-[#6B6B6B]/40"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#7BA3C0] mb-2 uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-white border-2 border-[#7BA3C0] text-[#3D3D3D] focus:outline-none focus:border-[#A899C9] transition-all placeholder-[#6B6B6B]/40"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#7BA3C0] mb-2 uppercase">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full p-3 rounded-lg bg-white border-2 border-[#7BA3C0] text-[#3D3D3D] focus:outline-none focus:border-[#A899C9] transition-all resize-none placeholder-[#6B6B6B]/40"
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
            { icon: <LiaLinkedin />, label: "LinkedIn" },
            { icon: <FaFacebook />, label: "Facebook" },
            { icon: <FaTwitter />, label: "Twitter" },
            { icon: <FaInstagram />, label: "Instagram" },
          ].map((social, i) => (
            <button
              key={i}
              className="cursor-pointer w-12 h-12 rounded-full flex items-center justify-center text-xl hover:scale-125 transition-transform"
            >
              {social.icon}
            </button>
          ))}
        </div>
      </section>
    </main>
  )
}
