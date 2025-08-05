"use client"

import { ArrowRight, Code, Trophy, Users, Zap } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  const stats = [
    { label: "Thành viên", value: "5+", icon: Users },
    { label: "Dự án", value: "1+", icon: Code },
    { label: "Giải thưởng", value: "1+", icon: Trophy },
    { label: "Hackathon", value: "1+", icon: Zap },
  ]

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            <span className="font-extrabold text-6xl text-gray-900">
              <span>CS</span>
              <span className="dark-blue-text">S</span>
              <span className="dark-red-text">O</span>
              <span className="dark-blue-text">T</span>
            </span>
            <br />
            <span className="text-2xl sm:text-4xl font-normal text-gray-600">Computer Science Student of</span>
            <br />
            <span className="text-2xl sm:text-4xl font-normal text-gray-600">Ton Duc Thang University</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Team lập trình viên tại <b className="text-scale-up inline-block">Đại học Tôn Đức Thắng</b>, 
            chuyên về <b className="text-scale-up inline-block">thi đấu lập trình</b>, {" "}
            <b className="text-scale-up inline-block">hackathon</b>, {" "}
            <b className="text-scale-up inline-block">phát triển web</b>, {" "}
            <b className="text-scale-up inline-block">AI</b> và {" "}
            <b className="text-scale-up inline-block">nghiên cứu khoa học sinh viên</b>.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/about"
              className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
            >
              Tìm hiểu thêm
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-1 hover:text-blue-600 transition-colors"
            >
              Tham gia team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid grid-cols-2 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <stat.icon className="h-6 w-6" />
                </div>
                <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
