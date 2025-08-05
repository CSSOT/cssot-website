"use client"

import { useEffect, useState } from "react"

const fullText = "Computer Science Student Of Ton Duc Thang University"
const typingSpeed = 100

export default function TypewriterHeading() {
  const [displayedText, setDisplayedText] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText.charAt(index))
        setIndex((prev) => prev + 1)
      }, typingSpeed)

      return () => clearTimeout(timeout)
    } else {
      const pause = setTimeout(() => {
        setDisplayedText("")
        setIndex(0)
      }, 5000)

      return () => clearTimeout(pause)
    }
  }, [index])

  return (
    <h1
      className={`
        text-2xl sm:text-4xl font-semibold text-center pt-10
        text-transparent bg-clip-text
        bg-gradient-to-r from-blue-800 via-red-500 to-purple-600
      `}
    >
      {displayedText}
      <span className="animate-pulse text-blue-500">|</span>
    </h1>
  )
}
