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
  { title: "E-Commerce Platform", category: "Web Dev", img: "/e-commerce.png" },
  { title: "Mobile Banking App", category: "Mobile App", img: "mobileApp.png" },
  { title: "AI Chatbot System", category: "AI Integration", img: "chatbot.png" },
  { title: "SaaS Dashboard", category: "Web Dev", img: "sass-dash.png" },
  { title: "AR Product Viewer", category: "Innovation", img: "ar-viewer.png" },
  { title: "Video Marketing Suite", category: "Video", img: "video-marketing.png" },
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
        className="relative min-h-screen  flex items-center justify-center overflow-hidden bg-linear-to-b from-yellow-300 to-[#FAFAF8]"
      >
        {/* Animated Pastel Circles */}
        <div className="decorative-background" />

        <div className="relative max-w-4xl text-center px-6 pt-20 z-10">
          <h1 className="text-6xl md:text-8xl font-black text-blue-900 mb-6 leading-tight animate-fade-in">
            <span className="text-blue-950">SMART SOFTWARE </span>
            <br />
            <span className="text-[#f1cd00] border-b border-black lg:pb-2">
              REAL SOLUTIONS
            </span>
          </h1>
          <p
            className="text-xl text-[#6B6B6B] mb-8 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            At TeckFlow, we turn ideas into impact — blending technology and
            creativity to craft powerful software and smart solutions.
          </p>
          <button
            className="bg-blue-950 text-yellow-400 px-8 font-bold cursor-pointer hover:bg-yellow-400 hover:text-blue-950 transition-colors duration-500 py-4 rounded-lg text-lg animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            LAUNCH YOUR PROJECT
          </button>
        </div>
      </section>

      {/* <section className="bg-black">
        <select name="tecks" id="">
          <optgroup name="advanced" label="advanced prog language">
            <option value="">React</option>
            <option value="">Vue.js</option>
            <option value="">Nuxt</option>
            <option value="">Astro</option>
          </optgroup>
          <optgroup name="basics" label="basics prog language">
            <option value="">html</option>
            <option value="">css</option>
            <option value="">javascript es6+</option>
            <option value="">php</option>
          </optgroup>
        </select>
      </section> */}

      {/* ABOUT SECTION */}
      <section
        id="about"
        ref={aboutRef}
        className="py-24 px-6 bg-white relative overflow-hidden"
      >
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-5xl text-blue-950 font-black text-center mb-16 ">
            CREATIVE AGENCY
            <br />
            LOCATED IN <span className=" text-yellow-400">ALGERIA </span>
          </h2>
          <div className="grid md:grid-cols-2  gap-12 items-center">
            <div className=" p-8 rounded-xl bg-blue-950 relative">
              <div className=" absolute bg-yellow-400 size-20 opacity-20 rounded-full top-0 left-1  blur-lg " />
              <div className=" absolute bg-yellow-400 size-20 opacity-20 rounded-full bottom-0 right-1  blur-lg " />
              <p className="text-lg text-white  mb-4 leading-relaxed z-10">
                <span className="text-yellow-400">-</span> At TeckFlow, we craft
                more than just websites and apps — we build powerful digital
                platforms and software solutions designed to solve real
                challenges across industries.
              </p>
              <p className="text-lg text-white  leading-relaxed z-10">
                From cutting-edge, engaging websites to high-performing mobile
                and web applications, our team delivers innovative digital
                productions that elevate your brand and drive growth.
              </p>
            </div>
            <div className="relative md:h-96 rounded-lg overflow-hidden">
              <img
                src="/agency-yellow.png"
                alt="teckflow agency"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
        id="features"
        ref={featuresRef}
        className="py-24 px-6 bg-linear-to-b from-[#F5F3F0] to-[#FAFAF8] relative"
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-5xl font-black text-center mb-16 text-blue-950">
            OUR <span className="text-yellow-400">SERVICES</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: " WEB DEVELOPMENT",
                desc: "Cutting-edge websites built for performance",
                img: "/web-dev.png",
              },
              {
                title: " APP DEVELOPMENT",
                desc: "High-performing mobile applications",
                img: "/app-dev.png",
              },
              {
                title: " AI INTEGRATION",
                desc: "Smart solutions powered by AI",
                img: "/ai-integration.png",
              },
              {
                title: " DIGITAL TRANSFORM",
                desc: "Modernize your business with tech",
                img: "/digital-transform.jpeg",
              },
              {
                title: " MVP DEVELOPMENT",
                desc: "Rapid prototyping and MVP creation",
                img: "/mvp.png",
              },
              {
                title: " VIDEO PRODUCTION",
                desc: "Professional video content creation",
                img: "/video-making.png",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="neon-card p-8 rounded-xl hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <img
                  src={service.img}
                  alt={service.img}
                  className="lg:size-72 mx-auto object-contain"
                />
                <h3 className="text-2xl font-black mb-3 text-blue-950 text-center">
                  {service.title}
                </h3>
                <p className="text-[#6B6B6B] text-center">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section
        id="portfolio"
        ref={portfolioRef}
        className="py-24 px-6 bg-white relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-5xl font-black text-center mb-16">
           <span className="text-yellow-400 font-bold">PORT</span>FOLIO
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {PORTFOLIO.map((project, i) => (
              <div
                key={i}
                className="neon-card rounded-xl flex flex-col items-center justify-center h-48 hover:-translate-y-4 transition-all duration-300 group cursor-pointer"
              >
                <img className="object-contain" src={project.img} alt={`${project.img} project`} />
                <h3 className="text-lg font-bold text-[#7BA3C0] text-center">
                  {project.title}
                </h3>
                <p className="text-xs text-[#A899C9] mt-2">
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
        className="py-24 px-6 bg-gradient-to-b from-[#F5F3F0] to-[#FAFAF8] relative"
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
                    <h4 className="font-bold text-[#7BA3C0]">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-[#A899C9]">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-[#6B6B6B] italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section ref={whyRef} className="py-24 px-6 bg-white relative">
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
                <div className="w-24 h-24 rounded-full border-2 border-[#7BA3C0] mx-auto mb-4 flex items-center justify-center text-4xl hover:scale-110 transition-transform bg-gradient-to-br from-[#C8E1F5] to-[#B8E0D2]">
                  {item.title.charAt(0)}
                </div>
                <h3 className="text-2xl font-black text-[#7BA3C0] mb-2 uppercase">
                  {item.title.split(" ").slice(1).join(" ")}
                </h3>
                <p className="text-[#6B6B6B]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#C8E1F5] to-[#B8E0D2] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-[#7BA3C0] rounded-full blur-3xl opacity-5 transform -translate-x-1/2 animate-float"></div>
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-black mb-6 gradient-text">
            READY TO TRANSFORM?
          </h2>
          <p className="text-xl text-[#3D3D3D] mb-8">
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
