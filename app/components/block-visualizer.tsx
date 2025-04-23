"use client"

import { useState } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion } from "framer-motion"

interface Block {
  number: number
  price: number
  sold: number
  total: number
}

interface BlockVisualizerProps {
  blocks: Block[]
  currentBlock: number
  isPremium?: boolean
}

export default function BlockVisualizer({ blocks, currentBlock, isPremium = false }: BlockVisualizerProps) {
  const [hoveredBlock, setHoveredBlock] = useState<number | null>(null)

  // Calculate remaining tickets for the next block
  const remainingTickets = blocks[currentBlock].total - blocks[currentBlock].sold

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-4">
        {blocks.map((block, index) => {
          const isCurrentBlock = index === currentBlock
          const isPastBlock = index < currentBlock
          const isFutureBlock = index > currentBlock
          const percentageSold = (block.sold / block.total) * 100

          return (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.div
                    className={`relative ${isCurrentBlock ? "opacity-100" : isPastBlock ? "opacity-80" : "opacity-50"}`}
                    onMouseEnter={() => setHoveredBlock(index)}
                    onMouseLeave={() => setHoveredBlock(null)}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div
                      className={`h-4 w-full bg-zinc-800 rounded-full overflow-hidden relative ${
                        hoveredBlock === index
                          ? isPremium
                            ? "ring-2 ring-brand-pink/50"
                            : "ring-2 ring-brand-green/50"
                          : ""
                      }`}
                    >
                      <motion.div
                        className={`h-full ${
                          isPremium
                            ? "bg-gradient-to-r from-brand-pink to-brand-pink/80"
                            : "bg-gradient-to-r from-brand-green to-brand-green/80"
                        }`}
                        style={{ width: `${percentageSold}%` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${percentageSold}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      ></motion.div>
                    </div>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className={`border ${isPremium ? "border-brand-pink/50" : "border-brand-green/50"}`}
                >
                  <div className="text-sm">
                    <p className="font-semibold font-blatant">Bloque {block.number}</p>
                    <p>Precio: ${block.price} USD</p>
                    <p>
                      Vendidas: {block.sold} de {block.total}
                    </p>
                    <p>Estado: {isPastBlock ? "Agotado" : isCurrentBlock ? "Activo" : "Próximamente"}</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )
        })}
      </div>

      <div className="bg-brand-black/50 p-4 rounded-lg border border-zinc-800">
        <div className="flex justify-between items-center mb-2">
          <div className="text-sm text-zinc-400 font-blatant">
            Bloque actual: <span className="font-semibold text-zinc-200">{currentBlock}</span>
          </div>
          <div className="text-sm text-zinc-400 font-blatant">
            Precio actual:{" "}
            <span className={`font-semibold ${isPremium ? "text-brand-pink" : "text-brand-green"}`}>
              ${blocks[currentBlock].price} USD
            </span>
          </div>
        </div>
        <div className="text-sm text-zinc-300">
          <span className={`font-semibold ${isPremium ? "text-brand-pink" : "text-brand-green"}`}>
            {remainingTickets}
          </span>{" "}
          entradas restantes para el próximo bloque
        </div>
      </div>
    </div>
  )
}
