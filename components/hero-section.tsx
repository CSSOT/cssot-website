"use client"

import { ArrowRight, Code, Trophy, Users, Zap } from "lucide-react"
import Link from "next/link"
import AnimatedHeading from "./animated-heading"
import AnimatedBackground from "./animated-background"

export default function HeroSection() {
  const badges = ["Artificial Intelligence", "Applications Development"]

  return (
    <section className="relative h-screen overflow-hidden items-center justify-center">    
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-center w-full h-full">
        <div className="text-left px-5 md:px-20 space-y-6 max-w-7xl">
          <div className="h-[100px] sm:h-[120px] lg:h-full">
            <AnimatedHeading />
          </div>

          <p className="text-lg sm:text-2xl leading-10 font-medium text-gray-700 animate-fade-in-up animation-delay-500">
            A collaborative hub for Computer Science students to explore, learn, and innovate in
            {badges.map((badge, index) => (
              <span
                key={badge}
                className="dark-blue-text font-semibold decoration-blue-400 decoration-2 mr-1 inline-block animate-fade-in-up"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                {badge}
                {index !== badges.length - 1 ? "," : ""}
              </span>
            ))}
          </p>

          <div className="flex items-center gap-x-6 animate-fade-in-up animation-delay-1000">
            <Link
              href="/about"
              className="group rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 animate-pulse-glow///"
            >
              More thing about us
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-1 hover:text-blue-600 transition-colors duration-200"
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
