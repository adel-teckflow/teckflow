import React from "react"
import { useScrollReveal } from "../hooks/useScrollReveal"

const SERVICES = [
  {
    title: "Web Development",
    desc: "Cutting-edge, engaging websites built for performance and user experience.",
    icon: "🌐",
    details: ["Responsive Design", "SEO Optimized", "High Performance"],
  },
  {
    title: "App Development",
    desc: "High-performing iOS, Android, and cross-platform mobile applications.",
    icon: "📱",
    details: [
      "Native & Cross-Platform",
      "App Store Ready",
      "Cloud Integration",
    ],
  },
  {
    title: "AI Integration",
    desc: "Smart solutions powered by artificial intelligence and machine learning.",
    icon: "🤖",
    details: ["Machine Learning", "NLP Solutions", "Predictive Analytics"],
  },
  {
    title: "Digital Transformation",
    desc: "Modernize your business with cutting-edge technology solutions.",
    icon: "⚙️",
    details: ["Process Automation", "Cloud Migration", "Data Analytics"],
  },
  {
    title: "MVP Development",
    desc: "Rapid prototyping and minimum viable product creation.",
    icon: "🚀",
    details: ["Fast Development", "Scalable Architecture", "Market Ready"],
  },
  {
    title: "Video Production",
    desc: "Professional video content, editing, and aerial cinematography.",
    icon: "🎬",
    details: ["4K Recording", "Professional Editing", "Drone Footage"],
  },
]

export default function Services() {
  const servicesRef = useScrollReveal()

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
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00d4ff] rounded-full blur-3xl opacity-10 animate-float"></div>
          <div
            className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#ffcf33] rounded-full blur-3xl opacity-5 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-black mb-6 gradient-text">
            OUR SERVICES
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            From websites to AI integration, we deliver innovative digital
            solutions that drive growth and solve real business challenges.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section ref={servicesRef} className="py-24 px-6 darker-section">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <div
                key={i}
                className="neon-card p-8 rounded-xl hover:-translate-y-4 hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="text-6xl mb-4 group-hover:scale-125 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black text-[#00d4ff] mb-3 uppercase">
                  {service.title}
                </h3>
                <p className="text-white/80 mb-4 leading-relaxed">
                  {service.desc}
                </p>
                <div className="space-y-2">
                  {service.details.map((detail, j) => (
                    <div
                      key={j}
                      className="flex items-center text-sm text-[#ffcf33]"
                    >
                      <span className="mr-2">⚡</span> {detail}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 px-6 dark-section relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16 gradient-text">
            OUR PROCESS
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "DISCOVERY",
                desc: "Understand your goals and vision",
              },
              {
                step: "02",
                title: "PLANNING",
                desc: "Create detailed project roadmap",
              },
              {
                step: "03",
                title: "EXECUTION",
                desc: "Build with precision and care",
              },
              {
                step: "04",
                title: "LAUNCH",
                desc: "Deploy and celebrate success",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="neon-card p-6 rounded-xl text-center hover:scale-105 transition-transform"
              >
                <div className="text-4xl font-black text-[#00d4ff] mb-2">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-[#ffcf33] mb-2 uppercase">
                  {item.title}
                </h3>
                <p className="text-sm text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 darker-section relative">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-black mb-6 gradient-text">
            READY TO BUILD?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Choose your service and let's create something incredible.
          </p>
          <button className="neon-button px-10 py-4 rounded-lg text-lg">
            CONTACT US NOW
          </button>
        </div>
      </section>
    </main>
  )
}
