"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface OrganizerCardProps {
  name: string
  description: string
  logoUrl: string
  color: string
}

export default function OrganizerCard({ name, description, logoUrl, color }: OrganizerCardProps) {
  return (
    <motion.div
      className={`bg-brand-black p-6 rounded-xl border border-${color}/30 overflow-hidden relative`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-transparent to-transparent via-transparent to-30% via-30% from-0% opacity-20"></div>

      <div className="flex items-center mb-4">
        <div className={`w-16 h-16 rounded-full bg-${color}/10 p-2 mr-4 flex items-center justify-center`}>
          <Image
            src={logoUrl || "/placeholder.svg"}
            alt={`${name} logo`}
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
        <h3 className="text-2xl font-bold font-blatant">{name}</h3>
      </div>

      <p className="text-zinc-300 text-sm">{description}</p>
    </motion.div>
  )
}
