'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ChevronRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface Block {
  number: number;
  price: number;
  total: number;
}

interface TicketCardProps {
  title: string;
  description: string;
  blocks: Block[];
  sold: number;
  benefits: string[];
  isPremium?: boolean;
}

export default function TicketCard({ title, description, blocks, sold, benefits, isPremium = false }: TicketCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredBlock, setHoveredBlock] = useState<number | null>(null);
  const [currentBlock, setCurrentBlock] = useState(0);
  const [remainingTickets, setRemainingTickets] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);

  // Calculate current block based on total sold
  useEffect(() => {
    // Each block has 21 tickets
    const blockSize = 21;
    // Calculate current block (0-indexed)
    const calculatedBlock = Math.min(Math.floor(sold / blockSize), blocks.length - 1);
    setCurrentBlock(calculatedBlock);

    // Calculate remaining tickets for the current block
    const remainingInBlock = blockSize - (sold % blockSize);
    setRemainingTickets(remainingInBlock === 0 && calculatedBlock < blocks.length - 1 ? blockSize : remainingInBlock);

    // Set current price
    setCurrentPrice(blocks[calculatedBlock].price);
  }, [sold, blocks]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`overflow-hidden w-full ${
        isPremium
          ? 'p-[1px] bg-gradient-to-b from-brand-green border-brand-green rounded-2xl'
          : 'border-brand-gray/50 rounded-none'
      }`}
    >
      {isPremium && (
        <div className='flex justify-center items-center gap-1 mx-auto w-full py-2 bg-brand-green text-brand-black'>
          <Sparkles className='h-4 w-4' />
          <span className='font-blatant font-black text-center'>Premium</span>
        </div>
      )}
      <Card
        className={`relative overflow-hidden transition-all duration-300 ${
          isPremium ? 'bg-gradient-to-b from-brand-black to-[#151515]' : 'bg-brand-black'
        }`}
      >
        <div className='relative z-10'>
          <CardHeader>
            <div className='flex justify-between items-center'>
              <CardTitle className={`text-2xl`}>{title}</CardTitle>
            </div>
            {/* <CardDescription className='text-zinc-400'>{description}</CardDescription> */}
          </CardHeader>

          <CardContent className='space-y-6'>
            {/* Current Price */}
            <div>
              <p className='text-sm text-zinc-400'>Precio actual</p>
              <p className={`text-4xl font-bold ${isPremium ? 'text-brand-green' : 'text-foreground'}`}>
                ${currentPrice} <span className='text-sm text-zinc-400'>USD</span>
              </p>
            </div>

            {/* Block Progress */}
            <div className='space-y-4'>
              <p className='font-semibold text-zinc-300'>Progreso de bloques</p>
              <div className='flex items-center gap-2'>
                {blocks.map((block, index) => {
                  const isCurrentBlock = index === currentBlock;
                  const isPastBlock = index < currentBlock;
                  const percentageSold = isCurrentBlock ? ((sold % 21) / 21) * 100 : isPastBlock ? 100 : 0;

                  return (
                    <div
                      key={index}
                      className={`relative w-full ${
                        isCurrentBlock ? 'opacity-100' : isPastBlock ? 'opacity-80' : 'opacity-50'
                      }`}
                    >
                      <div className={`h-2 w-full bg-zinc-800 rounded-full overflow-hidden relative`}>
                        <motion.div
                          className={`h-full ${
                            isPremium ? 'bg-gradient-to-r from-brand-green to-brand-green/80' : 'bg-white'
                          }`}
                          style={{ width: `${percentageSold}%` }}
                          initial={{ width: 0 }}
                          animate={{ width: `${percentageSold}%` }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                        ></motion.div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className='bg-brand-black/50 p-3 rounded-lg border border-zinc-800 text-sm'>
                <div className='flex justify-between items-center'>
                  <div className='text-zinc-400'>
                    Bloque actual:{' '}
                    <span className='font-semibold text-zinc-200'>{currentBlock === 0 ? 'Génesis' : currentBlock}</span>
                  </div>
                  <div className='text-zinc-400'>
                    <span className={`font-semibold text-foreground`}>{remainingTickets}</span> entradas restantes
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className='space-y-3'>
              <p className='font-semibold text-zinc-300'>{isPremium ? '✨ Beneficios exclusivos:' : 'Incluye:'}</p>
              <ul className='space-y-2'>
                {benefits.map((benefit, index) => (
                  <li key={index} className='flex items-start'>
                    <span
                      className={`p-1 rounded mr-2 mt-0.5 ${
                        isPremium ? 'bg-brand-green/20 text-brand-green' : 'bg-brand-gray/20 text-brand-gray'
                      }`}
                    >
                      <Check className='h-3 w-3' />
                    </span>
                    <span className='text-sm text-zinc-300'>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>

          <CardFooter>
            <Button className='w-full' size='lg' variant={isPremium ? 'default' : 'secondary'}>
              Comprar entrada
              <ChevronRight className='ml-2 h-4 w-4' />
            </Button>
          </CardFooter>
        </div>
      </Card>
    </motion.div>
  );
}
