"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

interface Sponsor {
  name: string
  logo: string
  tier: "gold" | "silver" | "bronze"
}

export default function SponsorCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Ejemplo de sponsors (en un caso real, esto vendría de una API o CMS)
  const sponsors: Sponsor[] = [
    {
      name: "Sponsor 1",
      logo: "/placeholder.svg?height=80&width=180",
      tier: "gold",
    },
    {
      name: "Sponsor 2",
      logo: "/placeholder.svg?height=80&width=180",
      tier: "gold",
    },
    {
      name: "Sponsor 3",
      logo: "/placeholder.svg?height=80&width=180",
      tier: "silver",
    },
    {
      name: "Sponsor 4",
      logo: "/placeholder.svg?height=80&width=180",
      tier: "silver",
    },
    {
      name: "Sponsor 5",
      logo: "/placeholder.svg?height=80&width=180",
      tier: "bronze",
    },
    {
      name: "Sponsor 6",
      logo: "/placeholder.svg?height=80&width=180",
      tier: "bronze",
    },
  ]

  const visibleSponsors = 4 // Número de sponsors visibles a la vez
  const maxIndex = Math.max(0, sponsors.length - visibleSponsors)

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
    }, 3000)

    return () => clearInterval(interval)
  }, [maxIndex])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + 1))
  }

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "gold":
        return "bg-yellow-500/10 border-yellow-500/30 text-yellow-500"
      case "silver":
        return "bg-zinc-400/10 border-zinc-400/30 text-zinc-400"
      case "bronze":
        return "bg-amber-700/10 border-amber-700/30 text-amber-700"
      default:
        return "bg-zinc-800/50 border-zinc-700/50 text-zinc-500"
    }
  }

  return (
    <div className="relative w-full overflow-hidden py-8">
      <h3 className="text-2xl font-bold mb-6 text-center font-blatant">Sponsors</h3>

      <div className="relative">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-brand-black/80 p-2 rounded-full border border-zinc-800 disabled:opacity-30"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="overflow-hidden mx-10">
          <motion.div
            ref={carouselRef}
            className="flex gap-4"
            initial={false}
            animate={{ x: `-${currentIndex * (100 / visibleSponsors)}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className={`flex-none w-[calc(100%/${visibleSponsors})] p-4 rounded-lg border ${getTierColor(sponsor.tier)}`}
              >
                <div className="flex flex-col items-center">
                  <div className="relative w-full h-20 mb-2">
                    <Image
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium">{sponsor.name}</span>
                  <span className="text-xs capitalize">{sponsor.tier}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <button
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-brand-black/80 p-2 rounded-full border border-zinc-800 disabled:opacity-30"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
