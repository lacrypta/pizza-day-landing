"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function SocialProof() {
  const testimonials = [
    {
      name: "Martín Rodríguez",
      role: "Desarrollador Blockchain",
      quote:
        "El Bitcoin Pizza Day del año pasado fue increíble. Conocí a personas que cambiaron mi carrera profesional.",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Laura Gómez",
      role: "Inversora en Criptomonedas",
      quote:
        "Un evento imperdible para cualquiera interesado en Bitcoin. El networking y las charlas son de primer nivel.",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Carlos Méndez",
      role: "CEO de CryptoStartup",
      quote:
        "Participar en el Bitcoin Pizza Day nos permitió conectar con la comunidad y encontrar nuevos colaboradores.",
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  const companies = [
    { name: "BitArg", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Lemon", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Buenbit", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Ripio", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Bitso", logo: "/placeholder.svg?height=40&width=120" },
  ]

  return (
    <div className="w-full">
      {/* Logos de empresas */}
      <div className="mb-12">
        <h3 className="text-center text-zinc-400 mb-6 text-sm uppercase tracking-wider">
          Respaldado por líderes de la industria
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={company.logo || "/placeholder.svg"}
                alt={company.name}
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonios */}
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-zinc-100">{testimonial.name}</h4>
                <p className="text-sm text-zinc-400">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-zinc-300 italic">"{testimonial.quote}"</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
