'use client';

import Link from 'next/link';
import { Check, ChevronRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BlockBar } from '@/components/ui/block-bar';

interface TicketCardProps {
  url: string;
  title: string;
  price: number;
  totalTickets?: number;
  benefits: string[];
  isPremium?: boolean;
}

export default function TicketCard({ url, title, price, totalTickets, benefits, isPremium = false }: TicketCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`overflow-hidden ${
        isPremium
          ? 'p-[1px] bg-gradient-to-b from-brand-green border-brand-green rounded-2xl'
          : 'border-brand-gray/50 rounded-none'
      }`}
    >
      {isPremium && (
        <div className='flex justify-center items-center gap-1 mx-auto w-full py-2 bg-brand-green text-brand-black'>
          <Sparkles className='h-4 w-4' />
          <span className='font-blatant font-black text-center'>VIP Access</span>
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
          </CardHeader>

          <CardContent className='space-y-6'>
            {/* Current Price */}
            <div>
              <p className='text-sm text-zinc-400'>Precio actual</p>
              <p className={`text-4xl font-bold ${isPremium ? 'text-brand-green' : 'text-foreground'}`}>
                ${price ? price : '-'} <span className='text-sm text-zinc-400'>USD</span>
              </p>
            </div>

            {/* Block Progress */}
            {isPremium && <BlockBar totalTickets={totalTickets} />}

            {/* Benefits */}
            <div className='space-y-3'>
              <p className='font-semibold text-zinc-300'>{isPremium ? '✨ Beneficios:' : 'Incluye:'}</p>
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
            <Button className='w-full' size='lg' variant={isPremium ? 'default' : 'secondary'} asChild>
              <Link href={url}>
                Comprar entrada
                <ChevronRight className='ml-2 h-4 w-4' />
              </Link>
            </Button>
          </CardFooter>
        </div>
      </Card>
    </motion.div>
  );
}
