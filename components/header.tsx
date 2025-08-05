"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Code, Trophy, Users, BookOpen } from "lucide-react"
import LOGO from "../images/logo.png"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Trang chủ", href: "/", icon: Code },
    { name: "Về chúng tôi", href: "/about", icon: Users },
    { name: "Thành viên", href: "/members", icon: Users },
    { name: "Dự án", href: "/projects", icon: BookOpen },
    { name: "Thành tích", href: "/achievements", icon: Trophy },
    { name: "Liên hệ", href: "/contact", icon: Code },
  ]

  return (
    <header className="bg-white shadow-sm border-b">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              {/* <img src={LOGO.src} alt="cssot-logo" className="w-18 h-18"/> */}
              <span className="font-extrabold text-2xl text-gray-900">
                <span>CS</span>
                <span className="dark-blue-text">S</span>
                <span className="dark-red-text">O</span>
                <span className="dark-blue-text">T</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-gray-900">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
