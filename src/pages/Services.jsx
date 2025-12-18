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
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-[#C8E1F5] to-[#FAFAF8] overflow-hidden min-h-96 flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#7BA3C0] rounded-full blur-3xl opacity-5 animate-float"></div>
          <div
            className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#A899C9] rounded-full blur-3xl opacity-5 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-black mb-6 gradient-text">
            OUR SERVICES
          </h1>
          <p className="text-xl text-[#6B6B6B] max-w-3xl mx-auto">
            From websites to AI integration, we deliver innovative digital
            solutions that drive growth and solve real business challenges.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section ref={servicesRef} className="py-24 px-6 bg-white">
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
                <h3 className="text-2xl font-black text-[#7BA3C0] mb-3 uppercase">
                  {service.title}
                </h3>
                <p className="text-[#6B6B6B] mb-4 leading-relaxed">
                  {service.desc}
                </p>
                <div className="space-y-2">
                  {service.details.map((detail, j) => (
                    <div
                      key={j}
                      className="flex items-center text-sm text-[#A899C9]"
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
      <section className="py-24 px-6 bg-gradient-to-b from-[#F5F3F0] to-[#FAFAF8] relative overflow-hidden">
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
                <div className="text-4xl font-black text-[#7BA3C0] mb-2">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-[#A899C9] mb-2 uppercase">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6B6B6B]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#C8E1F5] to-[#B8E0D2] relative">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-black mb-6 gradient-text">
            READY TO BUILD?
          </h2>
          <p className="text-xl text-[#3D3D3D] mb-8">
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
