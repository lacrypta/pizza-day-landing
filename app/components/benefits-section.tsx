'use client';

import { motion } from 'framer-motion';
import { Users, Lightbulb, Rocket, Gift } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Users className='h-4 w-4 text-brand-green' />,
      title: 'Conexiones que impulsan',
      description:
        'Conocé a los principales referentes de la industria y formá relaciones profesionales duraderas en un ambiente distendido.',
    },
    {
      icon: <Lightbulb className='h-4 w-4 text-brand-green' />,
      title: 'Conocimiento exclusivo',
      description:
        'Accedé a información privilegiada sobre las últimas tendencias y desarrollos en el ecosistema Bitcoin.',
    },
    {
      icon: <Rocket className='h-4 w-4 text-brand-green' />,
      title: 'Ideas y proyectos',
      description:
        'Presentá tus ideas a expertos y recibí retroalimentación valiosa que puede catapultar tus iniciativas.',
    },
    {
      icon: <Gift className='h-4 w-4 text-brand-green' />,
      title: 'Experiencias únicas',
      description:
        'Disfrutá de una noche única con actividades especiales, sorpresas y la tradicional pizza que conmemora la primera transacción Bitcoin.',
    },
  ];

  return (
    <div className='grid md:grid-cols-2 gap-8'>
      {benefits.map((benefit, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className='flex items-start gap-4'
        >
          <div className='p-2 bg-brand-green/10 rounded-lg'>{benefit.icon}</div>
          <div>
            <h3 className='text-xl font-bold mb-2'>{benefit.title}</h3>
            <p className='text-zinc-300'>{benefit.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
