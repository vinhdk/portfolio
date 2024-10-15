import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface SocialIcon {
  name: string;
  url: string;
  icon: string;
}

interface SocialIconsProps {
  socials: SocialIcon[];
}

const SocialIcons: React.FC<SocialIconsProps> = ({ socials }) => {
  return (
    <section className="social-icons">
      {socials.map((social) => (
        <Link key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="social-icon_wrapper">
          <Image
            src={social.icon}
            alt={`${social.name} icon`}
            width={20}
            height={20}
            className="social-icon transition-all duration-300"
          />
        </Link>
      ))}
      <div className="w-px h-24 bg-slate"></div>
    </section>
  );
};

export default SocialIcons;