import type React from "react" // Type-only: React.ReactNode type
import type { Metadata } from "next" // Type-only: Metadata interface
import { Inter } from "next/font/google" // Runtime import: Inter font function
import "./globals.css" // Runtime import: CSS file

const inter = Inter({ subsets: ["latin"] })

// Metadata chỉ được dùng để type annotation, không phải runtime value
export const metadata: Metadata = {
  title: "CSSOT - Computer Science Student of Ton Duc Thang University",
  description: "Team lập trình viên thi đấu, hackathon và nghiên cứu khoa học tại Đại học Tôn Đức Thắng",
}

// React.ReactNode cũng chỉ là type annotation
export default function RootLayout({
  children,
}: {
  children: React.ReactNode // Type annotation
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
