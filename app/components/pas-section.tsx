"use client"

import { motion } from "framer-motion"
import { AlertTriangle, TrendingUp, Zap } from "lucide-react"

export default function PasSection() {
  const items = [
    {
      type: "problem",
      icon: <AlertTriangle className="h-8 w-8 text-yellow-500" />,
      title: "La comunidad Bitcoin está fragmentada",
      description:
        "Muchos entusiastas y profesionales de Bitcoin trabajan de forma aislada, sin conexiones reales con otros miembros del ecosistema.",
    },
    {
      type: "agitation",
      icon: <TrendingUp className="h-8 w-8 text-red-500" />,
      title: "Estás perdiendo oportunidades valiosas",
      description:
        "Cada día sin conectar con la comunidad significa perder contactos clave, conocimientos exclusivos y potenciales colaboraciones que podrían impulsar tu carrera o proyecto.",
    },
    {
      type: "solution",
      icon: <Zap className="h-8 w-8 text-brand-green" />,
      title: "Bitcoin Pizza Day: el evento que une a la comunidad",
      description:
        "Un espacio único donde conectarás con los principales referentes, aprenderás sobre las últimas innovaciones y formarás parte de la historia de Bitcoin en un ambiente festivo.",
    },
  ]

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className={`p-6 rounded-xl border ${
            item.type === "problem"
              ? "bg-yellow-500/5 border-yellow-500/20"
              : item.type === "agitation"
                ? "bg-red-500/5 border-red-500/20"
                : "bg-brand-green/5 border-brand-green/20"
          }`}
        >
          <div className="mb-4">{item.icon}</div>
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
          <p className="text-zinc-300">{item.description}</p>
        </motion.div>
      ))}
    </div>
  )
}
