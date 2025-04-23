import Image from 'next/image';
import { Twitter, Instagram, Hash } from 'lucide-react';

interface SocialLink {
  type: 'twitter' | 'instagram' | 'nostr';
  username: string;
}

interface PresenterAvatarProps {
  name: string;
  image: string;
  socials?: SocialLink[];
}

export default function PresenterAvatar({ name, image, socials }: PresenterAvatarProps) {
  const getSocialIcon = (type: string) => {
    switch (type) {
      case 'twitter':
        return <Twitter className='h-3 w-3' />;
      case 'instagram':
        return <Instagram className='h-3 w-3' />;
      case 'nostr':
        return <Hash className='h-3 w-3' />;
      default:
        return null;
    }
  };

  const getSocialUrl = (type: string, username: string) => {
    switch (type) {
      case 'twitter':
        return `https://twitter.com/${username}`;
      case 'instagram':
        return `https://instagram.com/${username}`;
      case 'nostr':
        return `https://snort.social/p/${username}`;
      default:
        return '#';
    }
  };

  return (
    <div className='flex items-center gap-2'>
      <div className='relative h-10 w-10 overflow-hidden rounded-full border border-zinc-700'>
        <Image
          src={image || '/placeholder.svg?height=40&width=40'}
          alt={name}
          width={40}
          height={40}
          className='object-cover'
        />
      </div>

      <div className='flex flex-col'>
        <span className='font-medium text-zinc-300'>{name}</span>
        {socials && socials.length > 0 && (
          <div className='flex items-center gap-2'>
            {socials.map((social, index) => (
              <a
                key={index}
                href={getSocialUrl(social.type, social.username)}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center text-xs text-brand-green hover:underline'
              >
                {getSocialIcon(social.type)}
                <span className='ml-1'>@{social.username.substring(0, 8)}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
