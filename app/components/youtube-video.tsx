"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface YouTubeVideoProps {
  videoId: string
  title: string
}

export default function YouTubeVideo({ videoId, title }: YouTubeVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="w-full aspect-video rounded-lg overflow-hidden bg-zinc-900 relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-12 h-12 border-4 border-brand-green border-t-transparent rounded-full animate-spin"></div>
      </motion.div>

      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0"
        onLoad={() => setIsLoaded(true)}
      ></iframe>
    </div>
  )
}
