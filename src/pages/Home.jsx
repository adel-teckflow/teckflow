import React from "react"
import { useScrollReveal } from "../hooks/useScrollReveal"

const TESTIMONIALS = [
  {
    name: "Ahmed Ben",
    role: "CEO, StartupX",
    text: "TeckFlow transformed our vision into reality. Incredible team!",
    avatar: "👨‍💼",
  },
  {
    name: "Fatima Saïd",
    role: "Founder, E-Commerce Pro",
    text: "Best investment in our digital transformation.",
    avatar: "👩‍💼",
  },
  {
    name: "Karim T.",
    role: "Business Owner",
    text: "Professional, creative, and results-driven. Highly recommended!",
    avatar: "🧑‍💼",
  },
]

const PORTFOLIO = [
  { title: "E-Commerce Platform", category: "Web Dev", img: "🛒" },
  { title: "Mobile Banking App", category: "Mobile App", img: "📱" },
  { title: "AI Chatbot System", category: "AI Integration", img: "🤖" },
  { title: "SaaS Dashboard", category: "Web Dev", img: "📊" },
  { title: "AR Product Viewer", category: "Innovation", img: "🔮" },
  { title: "Video Marketing Suite", category: "Video", img: "🎥" },
]

export default function Home() {
  const aboutRef = useScrollReveal()
  const featuresRef = useScrollReveal()
  const portfolioRef = useScrollReveal()
  const testimonialsRef = useScrollReveal()
  const whyRef = useScrollReveal()

  return (
    <main>
      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden dark-section"
      >
        {/* Grid Background SVG */}
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

        {/* Animated Neon Circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#00d4ff] rounded-full blur-3xl opacity-10 animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-80 h-80 bg-[#ffcf33] rounded-full blur-3xl opacity-10 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative max-w-4xl text-center px-6 pt-20 z-10">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight animate-fade-in">
            <span className="gradient-text">SMART SOFTWARE</span>
            <br />
            <span className="text-[#00d4ff]">REAL SOLUTIONS</span>
          </h1>
          <p
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            At TeckFlow, we turn ideas into impact — blending technology and
            creativity to craft powerful software and smart solutions.
          </p>
          <button
            className="neon-button px-8 py-4 rounded-lg text-lg animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            LAUNCH YOUR PROJECT
          </button>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        ref={aboutRef}
        className="py-24 px-6 dark-section relative overflow-hidden"
      >
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-5xl font-black text-center mb-16 gradient-text">
            CREATIVE AGENCY
            <br />
            LOCATED IN ALGERIA
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="neon-card p-8 rounded-xl">
              <p className="text-lg text-white/90 mb-4 leading-relaxed">
                At TeckFlow, we craft more than just websites and apps — we
                build powerful digital platforms and software solutions designed
                to solve real challenges across industries.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                From cutting-edge, engaging websites to high-performing mobile
                and web applications, our team delivers innovative digital
                productions that elevate your brand and drive growth.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden neon-border shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/20 to-[#ffcf33]/20 animate-pulse"></div>
              <svg
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="100%"
                  height="100%"
                  fill="url(#grid)"
                  opacity="0.3"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-6xl">
                🚀
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
        id="features"
        ref={featuresRef}
        className="py-24 px-6 darker-section relative"
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-5xl font-black text-center mb-16 gradient-text">
            OUR SERVICES
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "🌐 WEB DEVELOPMENT",
                desc: "Cutting-edge websites built for performance",
              },
              {
                title: "📱 APP DEVELOPMENT",
                desc: "High-performing mobile applications",
              },
              {
                title: "🤖 AI INTEGRATION",
                desc: "Smart solutions powered by AI",
              },
              {
                title: "⚙️ DIGITAL TRANSFORM",
                desc: "Modernize your business with tech",
              },
              {
                title: "🚀 MVP DEVELOPMENT",
                desc: "Rapid prototyping and MVP creation",
              },
              {
                title: "🎬 VIDEO PRODUCTION",
                desc: "Professional video content creation",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="neon-card p-8 rounded-xl hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <h3 className="text-2xl font-black mb-3 text-[#00d4ff]">
                  {service.title}
                </h3>
                <p className="text-white/80">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section
        id="portfolio"
        ref={portfolioRef}
        className="py-24 px-6 dark-section relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-5xl font-black text-center mb-16 gradient-text">
            PORTFOLIO
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {PORTFOLIO.map((project, i) => (
              <div
                key={i}
                className="neon-card p-8 rounded-xl flex flex-col items-center justify-center h-48 hover:-translate-y-4 transition-all duration-300 group cursor-pointer"
              >
                <div className="text-6xl mb-4 group-hover:scale-125 transition-transform">
                  {project.img}
                </div>
                <h3 className="text-lg font-bold text-[#00d4ff] text-center">
                  {project.title}
                </h3>
                <p className="text-xs text-[#ffcf33] mt-2">
                  {project.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section
        ref={testimonialsRef}
        className="py-24 px-6 darker-section relative"
      >
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-5xl font-black text-center mb-16 gradient-text">
            CLIENT TESTIMONIALS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, i) => (
              <div
                key={i}
                className="neon-card p-6 rounded-xl hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-[#00d4ff]">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-[#ffcf33]">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-white/80 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section ref={whyRef} className="py-24 px-6 dark-section relative">
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-5xl font-black text-center mb-16 gradient-text">
            WHY CHOOSE US
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "🏆 BEST TEAM",
                desc: "Excel in our field, always striving for excellence",
              },
              {
                title: "⚡ TOP EQUIPMENT",
                desc: "Invest in premium tech for amazing results",
              },
              {
                title: "✨ PERFECTION",
                desc: "Every project polished, precise, impactful",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-24 h-24 rounded-full neon-border mx-auto mb-4 flex items-center justify-center text-4xl hover:scale-110 transition-transform">
                  {item.title.charAt(0)}
                </div>
                <h3 className="text-2xl font-black text-[#00d4ff] mb-2 uppercase">
                  {item.title.split(" ").slice(1).join(" ")}
                </h3>
                <p className="text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 dark-section relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-[#00d4ff] rounded-full blur-3xl opacity-5 transform -translate-x-1/2 animate-float"></div>
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-black mb-6 gradient-text">
            READY TO TRANSFORM?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's build something amazing together.
          </p>
          <button className="neon-button px-10 py-4 rounded-lg text-lg">
            START YOUR PROJECT
          </button>
        </div>
      </section>
    </main>
  )
}
