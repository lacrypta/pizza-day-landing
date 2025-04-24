'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface Sponsor {
  name: string;
  logo: string;
  url: string;
}

interface SponsorCategory {
  tier: 'gold' | 'silver' | 'bronze';
  title: string;
  sponsors: Sponsor[];
}

export default function SponsorGrid() {
  // Datos de ejemplo (en un caso real, esto vendría de una API o CMS)
  const sponsorCategories: SponsorCategory[] = [
    {
      tier: 'gold',
      title: 'Sponsors Gold',
      sponsors: [
        {
          name: 'Sponsor 1',
          logo: '/placeholder.svg?height=120&width=240',
          url: 'https://example.com/sponsor1',
        },
        {
          name: 'Sponsor 2',
          logo: '/placeholder.svg?height=120&width=240',
          url: 'https://example.com/sponsor2',
        },
      ],
    },
    {
      tier: 'silver',
      title: 'Sponsors Silver',
      sponsors: [
        {
          name: 'Sponsor 1',
          logo: '/placeholder.svg?height=100&width=200',
          url: 'https://example.com/sponsor4',
        },
        {
          name: 'Sponsor 2',
          logo: '/placeholder.svg?height=100&width=200',
          url: 'https://example.com/sponsor5',
        },
      ],
    },
    {
      tier: 'bronze',
      title: 'Sponsors Bronze',
      sponsors: [
        {
          name: 'Sponsor 1',
          logo: '/placeholder.svg?height=80&width=160',
          url: 'https://example.com/sponsor8',
        },
        {
          name: 'Sponsor 2',
          logo: '/placeholder.svg?height=80&width=160',
          url: 'https://example.com/sponsor9',
        },
        {
          name: 'Sponsor 3',
          logo: '/placeholder.svg?height=80&width=160',
          url: 'https://example.com/sponsor10',
        },
        {
          name: 'Sponsor 4',
          logo: '/placeholder.svg?height=80&width=160',
          url: 'https://example.com/sponsor11',
        },
      ],
    },
  ];

  const getTierStyles = (tier: string) => {
    switch (tier) {
      case 'gold':
        return {
          container: 'mb-12',
          title: 'text-yellow-500 border-yellow-500/30',
          card: 'bg-yellow-500/5',
          logoSize: 'h-24 md:h-28',
        };
      case 'silver':
        return {
          container: 'mb-10',
          title: 'text-zinc-300 border-zinc-400/30',
          card: 'bg-zinc-400/5',
          logoSize: 'h-16 md:h-20',
        };
      case 'bronze':
        return {
          container: 'mb-8',
          title: 'text-amber-700 border-amber-700/30',
          card: 'bg-amber-700/5',
          logoSize: 'h-12 md:h-16',
        };
      default:
        return {
          container: '',
          title: '',
          card: '',
          logoSize: 'h-16',
        };
    }
  };

  return (
    <div className='flex flex-col gap-8 w-full'>
      {sponsorCategories.map((category, categoryIndex) => {
        const styles = getTierStyles(category.tier);

        return (
          <div
            key={category.tier}
            className={`grid gap-[1px] bg-zinc-900 ${
              category.tier === 'gold'
                ? 'grid-cols-1 md:grid-cols-4'
                : category.tier === 'silver'
                ? 'grid-cols-2 md:grid-cols-4'
                : 'grid-cols-2 md:grid-cols-6'
            }`}
          >
            <div className={`col-start-1 col-end-3 p-6 ${styles.card}`}>
              <h3 className={`text-xl font-bold mb-6 pb-2 border-b ${styles.title} font-blatant`}>{category.title}</h3>
            </div>

            {category.sponsors.map((sponsor, sponsorIndex) => (
              <motion.a
                key={`${category.tier}-${sponsorIndex}`}
                href={sponsor.url}
                target='_blank'
                rel='noopener noreferrer'
                className={`flex flex-col items-center justify-center p-4 ${styles.card} transition-all duration-300 bg-black hover:bg-zinc-900`}
              >
                <div className={`relative w-full ${styles.logoSize} mb-3`}>
                  <Image src={sponsor.logo || '/placeholder.svg'} alt={sponsor.name} fill className='object-contain' />
                </div>
                <span className={`text-sm text-center ${category.tier === 'gold' ? 'font-medium' : ''}`}>
                  {sponsor.name}
                </span>
              </motion.a>
            ))}
          </div>
        );
      })}
    </div>
  );
}
