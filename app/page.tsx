"use client"

import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ProjectSection from "@/components/projects-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <Footer />
    </main>
  )
}
