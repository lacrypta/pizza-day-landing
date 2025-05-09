'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import useSWR from 'swr';
import "./globals.css"

import { Button } from '@/components/ui/button';
import TicketCard from './components/ticket-card';
import EventSchedule from './components/event-schedule';
import YouTubeVideo from './components/youtube-video';
import SponsorGrid from './components/sponsor-grid';
import SocialProof from './components/social-proof';
import PasSection from './components/pas-section';
import BenefitsSection from './components/benefits-section';
import { Logo } from '@/components/logo';

import fetcher from '@/config/fetcher';
import CountdownTimer from './components/countdown-timer';

const ENABLE_TICKETS = process.env.NEXT_PUBLIC_ENABLE_TICKETS === 'true';
const TICKET_GENERAL_PRICE = 15;
const TICKET_PREMIUM_PRICE = 40;
const EVENT_DATE = new Date('2025-05-23T20:00:00')

export default function BitcoinPizzaDay() {
  const { data, isLoading } = useSWR('https://premium.pizza.lacrypta.ar/api/ticket/count', fetcher, {
    refreshInterval: 2000,
  });

  const totalTickets = data?.data?.totalTickets || 0;

  const ticketPremiumPrice = useMemo(() => {
    const block = Math.floor(totalTickets / 21);
    return TICKET_PREMIUM_PRICE + Number(block * 10);
  }, [data]);

  return (
    <div className='min-h-screen'>
      {/* Header - Optimizado con Who/Why/What framework */}
      <header className='relative overflow-hidden flex items-center min-h-screen pt-12 pb-20'>
        <div className='container'>
          <div className='flex flex-col items-center justify-center text-center'>
            <motion.div
              className='mb-6'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href='https://lacrypta.ar/' target='_blank'>
                <Logo />
              </Link>
            </motion.div>

            {/* Titular impactante usando Who/Why/What */}
            <motion.div
              className='inline-flex bg-brand-green/10 rounded-full px-4 py-2 mb-4 text-brand-green'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className='text-sm font-bold'>Edición 2025</span>
            </motion.div>

            <motion.h1
              className='text-4xl md:text-6xl font-extrabold mb-4'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className='text-gradient'>Bitcoin Pizza Day</span>
              <br />
              <span className='text-3xl md:text-5xl text-zinc-100'>
                Conectá con la comunidad Bitcoiner mas picante
              </span>
            </motion.h1>

            <motion.p
              className='text-xl md:text-2xl text-zinc-300 mb-8'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Vení a celebrar este hito de Bitcoin en la comunidad mas bitcoiner del mundo.
            </motion.p>

            {/* Contador regresivo */}
            {/* <motion.div
              className='w-full mx-auto mb-10'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <CountdownTimer />
            </motion.div> */}

            {/* CTV en lugar de CTA */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='mb-8'
              tabIndex={-1}
            >
              <Button size='lg' asChild>
                <Link href={'#tickets'}>
                  Asegurá tu lugar <ArrowRight className='ml-2 h-5 w-5' />
                </Link>
              </Button>
            </motion.div> */}

            {/* Prueba social rápida */}
            <motion.div
              className='text-zinc-400 text-lg text-center'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p>23 de Mayo • 19:00 hs • La Crypta, Belgrano, Buenos Aires</p>
              <p className='text-[#FF5238]'>Entradas limitadas.</p>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Prueba Social */}
      {/* <section className='py-16'>
        <div className='container mx-auto px-4'>
          <SocialProof />
        </div>
      </section> */}

      {/* Framework PAS */}
      <section className='container py-16'>
        <motion.h2
          className='text-3xl md:text-4xl font-bold text-center mb-16 font-blatant'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          ¿Por qué necesitás venir?
        </motion.h2>

        <PasSection />
      </section>

      {/* YouTube Video */}
      <section className='container py-16'>
        <motion.h2
          className='text-3xl md:text-4xl font-bold text-center mb-4 font-blatant'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Reviví la experiencia del año pasado
        </motion.h2>

        <motion.p
          className='text-lg text-zinc-300 mx-auto text-center mb-12'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Mirá cómo cientos de guerreros bitcoiners se reunieron para celebrar, aprender y conectar en un evento
          inolvidable.
        </motion.p>

        <div className='mx-auto'>
          <YouTubeVideo videoId='iCtn5T_jH48' title='Bitcoin Pizza Day - La Crypta + LaWallet' />
        </div>
      </section>

      {/* Beneficios en lugar de características */}
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <motion.h2
            className='text-3xl md:text-4xl font-bold text-center mb-16 font-blatant'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Qué vas a llevarte de esta noche inolvidable
          </motion.h2>

          <BenefitsSection />
        </div>
      </section>

      {/* Ticket Cards - Optimizados con CTV */}
      {ENABLE_TICKETS ? (
        <section id='tickets' className='container py-16'>
          <motion.h2
            className='text-3xl md:text-4xl font-bold text-center mb-4 font-blatant'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Eligí tu experiencia
          </motion.h2>

          <motion.p
            className='text-lg text-zinc-300 mx-auto text-center mb-12'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Las entradas se venden en bloques de 21 unidades. Cada bloque agotado aumenta el precio del siguiente.
            <span className='text-brand-green font-bold ml-2'>¡No esperes para ser el último!</span>
          </motion.p>

          <div className='flex flex-col md:flex-row justify-center gap-8 mx-auto'>
            <TicketCard
              price={TICKET_GENERAL_PRICE}
              url='https://classic.pizza.lacrypta.ar/'
              title='Entrada General'
              benefits={[
                'Tarjeta clásica.',
                'Acceso completo a las charlas y actividades.',
                'Networking con la comunidad.',
              ]}
              isPremium={false}
            />
            <TicketCard
              price={ticketPremiumPrice}
              url='https://premium.pizza.lacrypta.ar/'
              title='Entrada Premium'
              benefits={[
                'Tarjeta especial.',
                'Descuentos en nuestra tienda.',
                'Descuentos en capacitaciones y mentorías.',
                'Descuentos en entradas, comida y bebidas.',
                'Acceso a eventos privados.',
              ]}
              totalTickets={totalTickets || 0}
              isPremium={true}
            />
          </div>

          <div className='text-center mt-8 text-zinc-400'>
            <p>Las entradas son limitadas y no se venderán en la puerta.</p>
          </div>
        </section>
      ) : (
        <div className='items-center text-center'>
          <CountdownTimer
            eventDate={EVENT_DATE}
            countdownTitle='Las entradas estarán disponibles en:'
          />
        </div>
      )}

      {/* Schedule */}
      <section className='container py-16'>
        <motion.h2
          className='text-3xl md:text-4xl font-bold text-center mb-4 font-blatant'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Una noche para celebrar, aprender y conectar
        </motion.h2>

        <motion.p
          className='text-lg text-zinc-300 mx-auto text-center mb-12'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Hemos preparado un cronograma que combina aprendizaje, networking y celebración para que aproveches cada
          minuto.
        </motion.p>

        <EventSchedule />
      </section>

      {/* Organizers */}
      {/* <section className='py-16'>
        <div className='container mx-auto px-4'>
          <motion.h2
            className='text-3xl md:text-4xl font-bold text-center mb-12 font-blatant'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Organizado por...
          </motion.h2>

          <div className='grid md:grid-cols-2 gap-8 mx-auto mb-8'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className='bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 rounded-xl border border-zinc-800 shadow-xl'
            >
              <div className='flex items-center mb-4'>
                <div className='w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mr-4'>
                  <Bitcoin className='h-8 w-8 text-brand-green' />
                </div>
                <h3 className='text-2xl font-bold font-blatant'>La Crypta</h3>
              </div>

              <p className='text-zinc-300 mb-6'>
                Comunidad y software factory que impulsa el desarrollo de herramientas open-source, educativas y de
                adopción centradas en el ecosistema Bitcoin y Nostr.
              </p>

              <div className='flex flex-wrap gap-3'>
                <a
                  href='https://twitter.com/lacrypta_'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-3 py-1 bg-zinc-800 rounded-full text-sm text-zinc-300 hover:bg-zinc-700 transition-colors'
                >
                  Twitter
                </a>
                <a
                  href='https://instagram.com/lacrypta_'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-3 py-1 bg-zinc-800 rounded-full text-sm text-zinc-300 hover:bg-zinc-700 transition-colors'
                >
                  Instagram
                </a>
                <a
                  href='https://lacrypta.com.ar'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-3 py-1 bg-zinc-800 rounded-full text-sm text-zinc-300 hover:bg-zinc-700 transition-colors'
                >
                  Website
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 rounded-xl border border-zinc-800 shadow-xl'
            >
              <div className='flex items-center mb-4'>
                <div className='w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mr-4'>
                  <svg
                    className='h-8 w-8 text-brand-green'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M13 5L21 12L13 19'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M3 5L11 12L3 19'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                <h3 className='text-2xl font-bold font-blatant'>LaWallet</h3>
              </div>

              <p className='text-zinc-300 mb-6'>
                Plataforma financiera sin custodia que busca reemplazar a Visa/Mastercard con una alternativa nativa de
                Bitcoin, facilitando pagos descentralizados con tecnología accesible.
              </p>

              <div className='flex flex-wrap gap-3'>
                <a
                  href='https://twitter.com/lawallet_'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-3 py-1 bg-zinc-800 rounded-full text-sm text-zinc-300 hover:bg-zinc-700 transition-colors'
                >
                  Twitter
                </a>
                <a
                  href='https://instagram.com/lawallet_'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-3 py-1 bg-zinc-800 rounded-full text-sm text-zinc-300 hover:bg-zinc-700 transition-colors'
                >
                  Instagram
                </a>
                <a
                  href='https://lawallet.ar'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-3 py-1 bg-zinc-800 rounded-full text-sm text-zinc-300 hover:bg-zinc-700 transition-colors'
                >
                  Website
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='bg-zinc-900/50 p-8 rounded-xl border border-zinc-800 text-center'
          >
            <h2 className='text-2xl md:text-3xl font-bold mb-4 font-blatant'>¿Te gustaría colaborar con tu marca?</h2>
            <p className='text-zinc-300 mb-4 mx-auto'>Convertite en sponsor y posicionate donde importa.</p>
            <Button variant='secondary'>
              <Mail className='mr-2 h-4 w-4' />
              Potencia tu marca
            </Button>
          </motion.div>
        </div>
      </section> */}

      {/* Final CTA - Optimizado con CTV */}
      {/* <section className='bg-gradient-to-b from-brand-black/20 to-brand-black py-16 relative'>
        <div className='absolute inset-0 bg-noise opacity-10'></div>
        <div className='container text-center'>
          <motion.h2
            className='text-3xl md:text-4xl font-bold mb-8 font-blatant'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Asegura tu lugar hoy
          </motion.h2>

          <motion.p
            className='text-xl text-zinc-300 mx-auto mb-8'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Entradas limitadas y por bloques. Asegura tu lugar ahora y forma parte de la historia de Bitcoin en
            Argentina.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='inline-block'
            tabIndex={-1}
          >
            <Button size='lg' asChild>
              <Link href='#tickets'>
                Reserva tu entrada <Sparkles className='ml-2 h-5 w-5' />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className='bg-brand-black py-8 border-t border-zinc-800'>
        <div className='container mx-auto px-4 text-center'>
          <p className='text-zinc-500'>© 2025 La Crypta. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
