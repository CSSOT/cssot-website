"use client"

import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ProjectSection from "@/components/projects-section"
import Footer from "@/components/footer"

import AnimatedBackground from "@/components/animated-background"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      <HeroSection />
      <ProjectSection />
      <Footer />
    </main>
  )
}
