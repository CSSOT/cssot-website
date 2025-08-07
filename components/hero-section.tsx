"use client"

import { ArrowRight, Code, Trophy, Users, Zap } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import AnimatedHeading from "./AnimatedHeading"

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const badges = ["Artificial Intelligence", "Applications Development"]

  return (
    <section className="relative bg-gradient-to-br/// from-blue-50/// via-white/// to-indigo-50/// h-screen overflow-hidden flex items-center justify-start">
      {/* Animated Background Patterns */}
      <div className="absolute inset-0">
        {/* Moving Grid Pattern */}
        <div className="absolute inset-0 bg-moving-grid opacity-10"></div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute animate-float-${i + 1} opacity-20`}
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + i * 10}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              <div
                className={`w-${8 + i * 2} h-${8 + i * 2} bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-sm`}
              ></div>
            </div>
          ))}
        </div>

        {/* Animated Dots */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse-slow opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
            </div>
          ))}
        </div>

        {/* Interactive Mouse Follow Effect */}
        <div
          className="absolute w-96 h-96 bg-gradient-radial from-blue-200/30 to-transparent rounded-full blur-3xl transition-all duration-1000 ease-out pointer-events-none"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        ></div>
      </div>

      {/* Animated Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* Rotating Geometric Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 opacity-10">
        <div className="w-full h-full border-2 border-blue-400 rotate-45 animate-spin-slow"></div>
      </div>
      <div className="absolute top-1/4 right-1/4 w-24 h-24 opacity-10">
        <div className="w-full h-full border-2 border-purple-400 animate-spin-reverse"></div>
      </div>
      <div className="absolute bottom-1/3 left-1/4 w-10 h-10 opacity-10">
        <div className="w-full h-full border-2 border-purple-400 animate-spin-reverse"></div>
      </div>
      <div className="absolute bottom-1/5 right-1/4 w-50 h-50 opacity-10">
        <div className="w-full h-full border-2 border-purple-400 animate-spin-reverse"></div>
      </div>      

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-start w-full h-full">
        <div className="text-left px-5 md:px-20 space-y-6 max-w-6xl">
          <div className="">
            <AnimatedHeading />
          </div>

          <p className="text-lg sm:text-2xl leading-10 font-medium text-gray-700 animate-fade-in-up animation-delay-500">
            A collaborative hub for Computer Science students to explore, learn, and innovate in these key areas:&nbsp;
            {badges.map((badge, index) => (
              <span
                key={badge}
                className="dark-blue-text font-semibold decoration-blue-400 decoration-2 mx-1 inline-block animate-fade-in-up"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                {badge}
                {index !== badges.length - 1 ? "," : ""}
              </span>
            ))}
          </p>

          {/* <div className="flex flex-wrap gap-3 animate-fade-in-up animation-delay-700">
            {badges.map((badge, index) => (
              <span
                key={badge}
                className="badge animate-bounce-subtle///"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                {badge}
              </span>
            ))}
          </div> */}

          <div className="flex items-center gap-x-6 animate-fade-in-up animation-delay-1000">
            <Link
              href="/about"
              className="group rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 animate-pulse-glow///"
            >
              More thing about us
            </Link>
            <Link
              href="/contact"
              className="group text-sm font-semibold leading-6 text-gray-900 flex items-center gap-1 hover:text-blue-600 transition-colors duration-200"
            >
              Contact
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200 animate-bounce-x" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
