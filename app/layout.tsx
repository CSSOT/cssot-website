import type React from "react" // Type-only: React.ReactNode type
import type { Metadata } from "next" // Type-only: Metadata interface
import { Inter } from "next/font/google" // Runtime import: Inter font function
import "./globals.css" // Runtime import: CSS file

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CSSOT - Computer Science Student of Ton Duc Thang University",
  description: "",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
