'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, TrendingUp, Trophy, Turtle, Zap } from 'lucide-react';

export default function PasSection() {
  const items = [
    {
      type: 'problem',
      icon: <Trophy className='h-8 w-8 text-brand-green' />,
      description: 'Somos la mejor comunidad de Bitcoin de este lado de la galaxia.',
    },
    {
      type: 'agitation',
      icon: <TrendingUp className='h-8 w-8 text-brand-green' />,
      description: 'Los bitcoiners tenemos que reunirnos para reforzar la capa 0. La capa ideológica.',
    },
    {
      type: 'solution',
      icon: <Zap className='h-8 w-8 text-brand-green' />,
      description: 'Vas a poder darte el gusto de gastar tus satoshis como en ningún otro lado.',
    },
  ];

  return (
    <div className='grid md:grid-cols-3 gap-8'>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className={`flex flex-col items-center p-6 text-center`}
        >
          <div className='mb-4'>{item.icon}</div>
          <p className='text-zinc-300'>{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
