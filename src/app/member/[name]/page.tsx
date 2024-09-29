'use client';

import { notFound } from 'next/navigation';
import About from 'src/components/About';
import Banner from 'src/components/Banner';
import Footer from 'src/components/Footer';
import Navbar from 'src/components/NavBar';
import SocialIcons from 'src/components/SocialIcons';
import Stack from 'src/components/Stack';
import VerticalGmail from 'src/components/VerticalGmail';
import WorkExperience from 'src/components/WorkExperience';
import { useState, useEffect } from 'react';

interface SocialContact {
  name: string;
  url: string;
  icon: string;
  hide: boolean;
}

interface MainStack {
  name: string;
  icon: string;
  frequency: number;
}

interface Member {
  fullName: string;
  role: string;
  slogan: string;
  description: string[];
  shortIntro: string;
  image: string;
  contact: {
    phone: string;
    email: SocialContact;
    instagram: SocialContact;
    skype: SocialContact;
    linkedin: SocialContact;
    github: SocialContact;
    twitter: SocialContact;
    codepen: SocialContact;
    location: string;
    status: string;
  };
  techstack: {
    mainStackList: MainStack[];
    otherStackList: string[];
    intro: string[];
  };
}

const members: Record<string, Member> = {
  vinh: {
    fullName: 'Vinh Dang',
    role: 'FULLSTACK JAVASCRIPT/TYPESCRIPT',
    slogan: 'I build things for the web',
    description: [
      "Hello! My name is {highlight}Vinh Dang{/highlight} and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!",
      "Fast-forward to today, and I've had the privilege of working at {highlight}an advertising agency{/highlight}, {highlight}a start-up{/highlight}, {highlight}a huge corporation{/highlight}, and {highlight}a student-led design studio{/highlight}. My main focus these days is building accessible, inclusive products and digital experiences at {highlight}Upstatement{/highlight} for a variety of clients.",
      "I also recently {highlight}launched a course{/highlight} that covers everything you need to build a web app with the Spotify API using Node & React."
    ],
    shortIntro: "I'm a fullstack developer with a passion for building web applications.",
    image: '/images/vinhdang.jpg',
    contact: {
      phone: '+84 902 818 547',
      email: {
        name: 'anlalayker@gmail.com',
        url: 'mailto:anlalayker@gmail.com',
        icon: '/icons/email.svg',
        hide: false,
      },
      instagram: {
        name: 'instagram.com/vinhdk',
        url: 'https://instagram.com/vinhdk',
        icon: '/icons/instagram.svg',
        hide: false,
      },
      skype: {
        name: 'live:431e5eda01cde393',
        url: 'skype:431e5eda01cde393',
        icon: '/icons/skype.svg',
        hide: true,
      },
      linkedin: {
        name: 'linkedin.com/in/vinh-dang-85164b1b6',
        url: 'https://linkedin.com/in/vinh-dang-85164b1b6',
        icon: '/icons/linkedin.svg',
        hide: false,
      },
      github: {
        name: 'github.com/vinhdk',
        url: 'https://github.com/vinhdk',
        icon: '/icons/github.svg',
        hide: false,
      },
      twitter: {
        name: 'twitter.com/vinhdk',
        url: 'https://twitter.com/vinhdk',
        icon: '/icons/twitter.svg',
        hide: false,
      },
      codepen: {
        name: 'codepen.io/vinhdk',
        url: 'https://codepen.io/vinhdk',
        icon: '/icons/codepen.svg',
        hide: false,
      },
      location: 'Ho Chi Minh City, Vietnam',
      status: 'Available for new projects',
    },
    techstack: {
      mainStackList: [
        { name: 'Go', icon: '/icons/go.svg', frequency: 2 },
        { name: 'Angular', icon: '/icons/angular.svg', frequency: 2 },
        { name: 'React', icon: '/icons/react.svg', frequency: 5 },
        { name: 'TypeScript', icon: '/icons/typescript.svg', frequency: 5 },
        { name: 'NextJS', icon: '/icons/nestjs.svg', frequency: 4 },
        { name: 'GraphQL', icon: '/icons/graphql.svg', frequency: 3 },
        { name: 'Javascript', icon: '/icons/javascript.svg', frequency: 5 },
        { name: 'RabbitMQ', icon: '/icons/rabbitmq.svg', frequency: 3 },
        { name: 'MongoDB', icon: '/icons/mongodb.svg', frequency: 4 },
        { name: 'Node.js', icon: '/icons/nodejs.svg', frequency: 5 },
        { name: 'Tailwind', icon: '/icons/tailwindcss.svg', frequency: 1 },
        { name: 'Docker', icon: '/icons/docker.svg', frequency: 3 },
      ],
      otherStackList: [
        'Gatsby',
        'Ethereum',
        'Zod',
        'Mocha',
        'Redux',
        'PostgreSQL',
        'AWS',
        'Vercel',
        'Netlify',
        'MongoDB',
        'Kotlin',
        'Swift',
      ],
      intro: [
        'Javascript',
        'Typescript',
        'React',
        'NextJS',
        'NodeJS',
        'Go',
      ],
    },
  },
};

const jobs = [
  {
    companyLogo: '/icons/upwork.svg',
    companyName: 'Upwork',
    position: 'Senior Software Engineering',
    duration: '8/2022 - Present',
    description: [
      'Lorem ipsum dolor sit amet consectetur. Massa in nec arcu volutpat purus porttitor urna feugiat. Pellentesque elementum placerat malesuada in amet ipsum porta.',
      'Id id lectus odio dictum elementum id quis nunc nunc. Pellentesque imperdiet morbi adipiscing orci. Placerat amet ac augue viverra.',
      'Lorem ipsum dolor sit amet consectetur. Massa in nec arcu volutpat purus porttitor urna feugiat. Pellentesque elementum placerat malesuada in amet ipsum porta.',
    ],
    link: '#',
  },
  {
    companyLogo: '/icons/upwork.svg',
    companyName: 'Upwork',
    position: 'Senior Software Engineering',
    duration: '8/2022 - Present',
    description: [
      'Lorem ipsum dolor sit amet consectetur. Massa in nec arcu volutpat purus porttitor urna feugiat. Pellentesque elementum placerat malesuada in amet ipsum porta.',
      'Id id lectus odio dictum elementum id quis nunc nunc. Pellentesque imperdiet morbi adipiscing orci. Placerat amet ac augue viverra.',
      'Lorem ipsum dolor sit amet consectetur. Massa in nec arcu volutpat purus porttitor urna feugiat. Pellentesque elementum placerat malesuada in amet ipsum porta.',
    ],
    link: '#',
  },
  {
    companyLogo: '/icons/upwork.svg',
    companyName: 'Upwork',
    position: 'Senior Software Engineering',
    duration: '8/2022 - Present',
    description: [
      'Lorem ipsum dolor sit amet consectetur. Massa in nec arcu volutpat purus porttitor urna feugiat. Pellentesque elementum placerat malesuada in amet ipsum porta.',
      'Id id lectus odio dictum elementum id quis nunc nunc. Pellentesque imperdiet morbi adipiscing orci. Placerat amet ac augue viverra.',
      'Lorem ipsum dolor sit amet consectetur. Massa in nec arcu volutpat purus porttitor urna feugiat. Pellentesque elementum placerat malesuada in amet ipsum porta.',
    ],
    link: '#',
  },
  {
    companyLogo: '/icons/upwork.svg',
    companyName: 'Upwork',
    position: 'Senior Software Engineering',
    duration: '8/2022 - Present',
    description: [
      'Lorem ipsum dolor sit amet consectetur. Massa in nec arcu volutpat purus porttitor urna feugiat. Pellentesque elementum placerat malesuada in amet ipsum porta.',
      'Id id lectus odio dictum elementum id quis nunc nunc. Pellentesque imperdiet morbi adipiscing orci. Placerat amet ac augue viverra.',
      'Lorem ipsum dolor sit amet consectetur. Massa in nec arcu volutpat purus porttitor urna feugiat. Pellentesque elementum placerat malesuada in amet ipsum porta.',
    ],
    link: '#',
  },
  {
    companyLogo: '/icons/upwork.svg',
    companyName: 'Upwork',
    position: 'Senior Software Engineering',
    duration: '8/2022 - Present',
    description: [
      'Lorem ipsum dolor sit amet consectetur. Massa in nec arcu volutpat purus porttitor urna feugiat. Pellentesque elementum placerat malesuada in amet ipsum porta.',
      'Id id lectus odio dictum elementum id quis nunc nunc. Pellentesque imperdiet morbi adipiscing orci. Placerat amet ac augue viverra.',
      'Lorem ipsum dolor sit amet consectetur. Massa in nec arcu volutpat purus porttitor urna feugiat. Pellentesque elementum placerat malesuada in amet ipsum porta.',
    ],
    link: '#',
  },
];

export default function MemberPage({ params }: { params: { name: string } }) {
  const memberName = params.name.toLowerCase();
  const member = members[memberName as keyof typeof members];

  if (!member) {
    return notFound();
  }

  const socialIcons = Object.entries(member.contact).reduce(
    (acc, [key, value]) => {
      if (
        typeof value === 'object' &&
        'url' in value &&
        !value.hide &&
        key !== 'email'
      ) {
        acc.push({
          name: key,
          url: (value as SocialContact).url,
          icon: (value as SocialContact).icon,
        });
      }
      return acc;
    },
    [] as Array<{ name: string; url: string; icon: string }>
  );

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY === 0) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (window.scrollY === 0 || e.clientY <= 50) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [lastScrollY]);

  return (
    <>
      <header className={`header ${isHeaderVisible ? '' : 'header--hidden'}`}>
        <Navbar />
      </header>
      <main className="main">
        <Banner
          name={member.fullName}
          slogan={member.slogan}
          shortIntro={member.shortIntro}
          location={member.contact.location}
          status={member.contact.status}
        />
        <SocialIcons socials={socialIcons} />
        <VerticalGmail email={member.contact.email.name} />
        <About
          fullName={member.fullName}
          description={member.description}
          image={member.image}
          technologies={member.techstack.intro}
        />
        <Stack
          stacks={member.techstack.mainStackList}
          otherStacks={member.techstack.otherStackList}
        />
        <WorkExperience jobs={jobs} />
        <Footer />
      </main>
    </>
  );
}
