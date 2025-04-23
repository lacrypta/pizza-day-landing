'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, TrendingUp, Zap } from 'lucide-react';

export default function PasSection() {
  const items = [
    {
      type: 'problem',
      icon: <AlertTriangle className='h-8 w-8 text-brand-green' />,
      description: 'La comunidad Bitcoin está dispersa y desconectada.',
    },
    {
      type: 'agitation',
      icon: <TrendingUp className='h-8 w-8 text-brand-green' />,
      description: 'Sin conexiones reales, perdés oportunidades valiosas de crecer.',
    },
    {
      type: 'solution',
      icon: <Zap className='h-8 w-8 text-brand-green' />,
      description: 'Somos el punto de encuentro para reconectar, aprender e inspirarte.',
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
