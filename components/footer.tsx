import Link from "next/link"
import { Code, Facebook, Github, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center space-x-2">
              <span className="font-extrabold text-6xl text-gray-900">
                <span className="text-white">CS</span>
                <span className="dark-blue-text">S</span>
                <span className="dark-red-text">O</span>
                <span className="dark-blue-text">T</span>
              </span>
            </div>
            <p className="text-sm text-gray-300">
              A collaborative hub for Computer Science students to explore, learn, and innovate in <b className="light-text">Artificial Intelligence</b> and <b className="light-text">Applications Development</b>.
            </p>
            <div className="flex space-x-6">
              <a href="https://github.com/CSSOT" target="_blank" className="text-gray-400 hover:text-gray-300">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.facebook.com/nguyenquanghuy04082005/" target="_blank" className="text-gray-400 hover:text-gray-300">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white">About us</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/about#introduction" className="text-sm light-text">
                      Introduction
                    </Link>
                  </li>
                  <li>
                    <Link href="/about#members" className="text-sm light-text">
                      Members
                    </Link>
                  </li>
                  <li>
                    <Link href="/about#achievements" className="text-sm light-text">
                      Achievements
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-white">Activities</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/projects" className="text-sm light-text">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <a href="blog" className="text-sm light-text">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="/events" className="text-sm light-text">
                      Event
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white">Contact</h3>
                <ul className="mt-4 space-y-4">
                  <a href="https://maps.app.goo.gl/WbBhqG6ttvbVhRgC8" target="_blank" className="flex items-center text-sm light-text">
                    <MapPin className="h-4 w-4 mr-2" />
                    Ton Duc Thang University, Ho Chi Minh city
                  </a>
                  <a href="mailto:contact@cssot.io.vn" target="_blank" className="flex items-center text-sm light-text">
                    <Mail className="h-4 w-4 mr-2" />
                    contact@cssot.io.vn
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-xs text-gray-400 text-center">
            &copy; 2025 CSSOT - Computer Science Student of Ton Duc Thang University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
