import Link from "next/link"
import { Code, Github, Mail, MapPin } from "lucide-react"

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
              Computer Science Student of Ton Duc Thang University - Team lập trình viên tại Đại học Tôn
              Đức Thắng.
            </p>
            <div className="flex space-x-6">
              <a href="https://github.com/CSSOT" className="text-gray-400 hover:text-gray-300">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white">Về chúng tôi</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/about" className="text-sm text-gray-300 hover:text-white">
                      Giới thiệu
                    </Link>
                  </li>
                  <li>
                    <Link href="/members" className="text-sm text-gray-300 hover:text-white">
                      Thành viên
                    </Link>
                  </li>
                  <li>
                    <Link href="/achievements" className="text-sm text-gray-300 hover:text-white">
                      Thành tích
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-white">Hoạt động</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/projects" className="text-sm text-gray-300 hover:text-white">
                      Dự án
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-300 hover:text-white">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-300 hover:text-white">
                      Sự kiện
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white">Liên hệ</h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-center text-sm text-gray-300">
                    <MapPin className="h-4 w-4 mr-2" />
                    Đại học Tôn Đức Thắng, TP.HCM
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <Mail className="h-4 w-4 mr-2" />
                    contact@cssot.io.vn
                  </li>
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
