'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Fecha del evento (22 de mayo de 2024)
    const eventDate = new Date('2024-05-22T20:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Días', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Minutos', value: timeLeft.minutes },
    { label: 'Segundos', value: timeLeft.seconds },
  ];

  return (
    <div className='w-full'>
      <h3 className='text-center text-xl mb-6 text-zinc-300'>El evento comienza en:</h3>
      <div className='flex justify-center gap-4'>
        {timeUnits.map((unit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='flex flex-col items-center'
          >
            <div className='bg-brand-green/10 border border-brand-green/30 rounded-lg p-4 w-20 h-20 flex items-center justify-center mb-2'>
              <span className='text-3xl font-bold text-brand-green'>{unit.value.toString().padStart(2, '0')}</span>
            </div>
            <span className='text-sm text-zinc-400'>{unit.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
