'use client';

import { notFound } from 'next/navigation';
import AboutMe from 'src/components/members/AboutMe';
import Banner from 'src/components/members/Banner';
import Footer from 'src/components/members/Footer';
import Navbar from 'src/components/members/NavBar';
import SocialIcons from 'src/components/members/SocialIcons';
import Stack from 'src/components/members/Stack';
import VerticalGmail from 'src/components/members/VerticalGmail';
import WorkExperience from 'src/components/members/WorkExperience';

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

interface Job {
  companyLogo: string;
  companyName: string;
  position: string;
  duration: string;
  description: string[];
  link: string;
  logoWidth: number;
  logoHeight: number;
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
    keyTechnologies: { name: string; icon: string }[];
    keyTechnologiesDescription: string;
    futureTechnologies: { name: string; icon: string }[];
    futureTechnologiesDescription: string;
  };
  modelUrl: string;
  expectations: string[];
  jobs: Job[];
}

const members: Record<string, Member> = {
  vinh: {
    fullName: 'Vinh Dang',
    role: 'Software Engineer',
    slogan: 'Software Engineer',
    description: [
      "Hi, I'm  {highlight}Vinh{/highlight}. I have nearly 5 years of experience as a {highlight}Software Engineer{/highlight} with skills across CRM, finance, blockchain, healthcare,. {link}Learn more!{/link}",
    ],
    shortIntro:
        "I'm a fullstack developer with a passion for building web/mobile applications.",
    image: '/images/vinh.jpeg',
    contact: {
      phone: '+84 902 818 547',
      email: {
        name: 'anlalayker@gmail.com',
        url: 'mailto:anlalayker@gmail.com',
        icon: '/icons/email.svg',
        hide: false,
      },
      instagram: {
        name: 'instagram.com/eliaskhanh',
        url: 'https://www.instagram.com/eliaskhanh/',
        icon: '/icons/instagram.svg',
        hide: false,
      },
      skype: {
        name: 'live:431e5eda01cde393',
        url: 'https://join.skype.com/invite/d5dMCwnuFgXf',
        icon: '/icons/skype.svg',
        hide: false,
      },
      linkedin: {
        name: 'https://www.linkedin.com/in/vinh-dang-85164b1b6',
        url: 'https://www.linkedin.com/in/vinh-dang-85164b1b6',
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
        name: 'x.com/ngKhnhVinh1',
        url: 'https://x.com/ngKhnhVinh1',
        icon: '/icons/twitter.svg',
        hide: false,
      },
      codepen: {
        name: 'codepen.io/vinhdk',
        url: 'https://codepen.io/vinhdk',
        icon: '/icons/codepen.svg',
        hide: true,
      },
      location: 'Ho Chi Minh City, Vietnam',
      status: 'Available for new projects',
    },
    techstack: {
      mainStackList: [
        { name: 'HTML5', icon: '/icons/html5.svg', frequency: 5 },
        { name: 'Sass', icon: '/icons/sass.svg', frequency: 5 },
        { name: 'Tailwind', icon: '/icons/tailwindcss.svg', frequency: 4 },
        { name: 'TypeScript', icon: '/icons/typescript.svg', frequency: 5 },
        { name: 'JavaScript', icon: '/icons/javascript.svg', frequency: 4 },
        { name: 'Angular', icon: '/icons/angular.svg', frequency: 5 },
        { name: 'Ngrx', icon: '/icons/ngrx.svg', frequency: 5 },
        { name: 'Rxjs', icon: '/icons/reactivex.svg', frequency: 5 },
        { name: 'React', icon: '/icons/react.svg', frequency: 3 },
        { name: 'NextJS', icon: '/icons/nestjs.svg', frequency: 2 },
        { name: 'ThreeJS', icon: '/icons/threedotjs.svg', frequency: 2 },
        { name: 'NodeJS', icon: '/icons/nodejs.svg', frequency: 4 },
        { name: 'GraphQL', icon: '/icons/graphql.svg', frequency: 3 },
        { name: 'MongoDB', icon: '/icons/mongodb.svg', frequency: 3 },
        { name: 'PostgreSQL', icon: '/icons/postgresql.svg', frequency: 5 },
      ],
      otherStackList: [
        'Docker',
        'Kubernetes',
        'AWS',
        'Azure',
        'Kafka',
        'RabbitMQ',
        'Go',
        'Zod',
        'Redux',
        'PostgreSQL',
        'Vercel',
        'Netlify',
        'Material UI',
        'PrimeNG',
        'Ant Design',
        'Webpack',
        'Remix',
        'Vite',
        'Babel',
        'Jest',
        'Storybook',
        'Lerna',
        'Nx',
      ],
      keyTechnologies: [
        { name: 'JavaScript', icon: '/icons/javascript.svg' },
        { name: 'TypeScript', icon: '/icons/typescript.svg' },
        { name: 'Angular', icon: '/icons/angular.svg' },
        { name: 'Nest.js', icon: '/icons/nestjs.svg' },
        { name: 'Ngrx', icon: '/icons/ngrx.svg' },
        { name: 'Rxjs', icon: '/icons/reactivex.svg' },
        { name: 'HTML5', icon: '/icons/html5.svg' },
        { name: 'Sass', icon: '/icons/sass.svg' },
        { name: 'Tailwind', icon: '/icons/tailwindcss.svg' },
      ],
      keyTechnologiesDescription:
          "These are the key tech stacks I've {highlight}frequently used{/highlight} during project development. {link}Learn more!{/link}",
      futureTechnologies: [
        { name: 'Go', icon: '/icons/go.svg' },
        { name: 'Gin', icon: '/icons/gin.svg' },
        { name: 'Deno', icon: '/icons/deno.svg' },
        { name: 'Remix', icon: '/icons/remix.svg' },
        { name: 'Three.js', icon: '/icons/threedotjs.svg' },
        { name: 'Lambda', icon: '/icons/awslambda.svg' },
        { name: 'Lerna', icon: '/icons/lerna.svg' },
      ],
      futureTechnologiesDescription:
          "These are the key tech stacks I'm {highlight}currently learning{/highlight} and {highlight}interested in{/highlight} the next few months.",
    },
    modelUrl: '/models/fixed/vinh.glb',
    expectations: [
      'I am currently here looking for a {highlight}second job as a freelancer{/highlight}. Although based in Ho Chi Minh City, Vietnam, I am very flexible with {highlight}time zone communications and locations{/highlight}. Please feel free to {link}contact me{/link} if you are looking for someone who can meet your job requirements.',
    ],
    jobs: [
      {
        companyLogo: '/images/fsmk.png',
        companyName: 'Funding Societies',
        position: 'Senior Software Engineering',
        duration: '08/2022 - Present',
        description: [
          'Team size: 12',
          'Tech stack: Angular (Version 16),Typescript, RxJS,Tailwindcss, Ngrx, Nx,Angular,Eslint, Stylelint, Husky, Commitlint, Lint-staged, Prettier, Universal, Nodejs/ExpressJs, Cypress, Jest',
          'Responsibility: Build project structure, design system, code base, features, review code, mentor for juniors',
          'Description: Supporting for internal users to control the workflows, manage tasks, manage applications,..'
        ],
        link: 'https://fundingsocieties.com',
        logoWidth: 100,
        logoHeight: 100,
      },
      {
        companyLogo: '/images/coinhako.png',
        companyName: 'Coinhako',
        position: 'Senior Software Engineering',
        duration: '08/2021 - 08/2022',
        description: [
          'Team size: 10',
          'Tech stack: Angular (Version 13), Typescript, RxJS,Tailwindcss, Ngrx, Nx,Angular Universal',
          'Responsibility: Build project structure, design system, code base, features, review code, mentor for juniors',
        ],
        link: 'https://www.coinhako.com',
        logoWidth: 100,
        logoHeight: 100,
      },
      {
        companyLogo: '/icons/sts.svg',
        companyName: 'Saigon Technology Solutions',
        position: 'Software Engineering',
        duration: '03/2021 - 07/2021',
        description: [
          'Tech stack: Angular (Version 9, 10), Typescript, RxJS, Core UI, Material,YFiles, GoJS, Ngrx, Nx, Material',
          'Responsibility: Support for Senior Developer, revamp new UI.',
          'Description:',
          '- SPL Solution’s advanced visualisations make it easy to understand the complexity and quality of your source code, even when you have hundreds of thousands of lines of code.',
          '- Toogood Financial Systems is Canada’s industry-leading investment software firm. Servicing the global investment management community since 1997'
        ],
        link: 'https://saigontechnology.com',
        logoWidth: 150,
        logoHeight: 90,
      },
      {
        companyLogo: '/icons/upwork.svg',
        companyName: 'Ky Nguyen So',
        position: 'Software Engineering',
        duration: '04/2019 - 02/2021',
        description: [
          'Team size: 20',
          'Tech stack: Angular (Version 8), Typescript, RxJS, Kendo UI, MDB, BPMN',
          'Responsibility: Build structure, code base, features and support team members',
          'Description: An outsource project from QTSC about CRM.'
        ],
        link: '#',
        logoWidth: 100,
        logoHeight: 100,
      },
      {
        companyLogo: '/icons/upwork.svg',
        companyName: '[Freelance] Medicia',
        position: 'Leader Software Engineering',
        duration: '02/2022 - 09/2024',
        description: [
          'Team size: 20',
          'Tech stack: Angular (Version 17),Typescript, RxJS, Nx, Ngrx, tailwindcss, Ionic 6, Swiper, Eslint, Stylelint, Husky, Commitlint, Lint-staged, Prettier, Nodejs/NestJS, TypeORM, MySQL, JWT, Passport, Strapi',
          'Responsibility: As the lead of front-end development, I established the entire structure and design system across multiple front-end repositories (3 main repositories and additional smaller ones). I coordinated closely with junior and mid-level developers, guiding them through best practices and solutions. I maintained clear communication with designers, project managers, and the CEO to ensure alignment on UI perspectives and implementation plans. Additionally, I took ownership of all animations within the application, ensuring smooth and cohesive user experiences',
          'Description: The Health System is supporting for guiding cancer patients with multiple articles, patient medication management, tracking health system, care-giver system.'
        ],
        link: 'https://www.medicia.ai',
        logoWidth: 100,
        logoHeight: 100,
      },
      {
        companyLogo: '/icons/upwork.svg',
        companyName: '[Freelance] Riet Circles',
        position: 'Senior Software Engineering',
        duration: '08/2022 - 08/2024',
        description: [
          'Team size: 6',
          'Tech stack: Angular (Version 14),Typescript, RxJS, Nx, Ngrx, tailwindcss, nodejs,LucidCardano..',
          'Responsibility: Build project structure, design system, code base, features, review code, mentor for juniors',
          'Description: REIT + NFT, using Cardano Wallet (Nami, Eternl,...) to manage transactions, smart contract,...'
        ],
        link: 'https://reitcircles.com/',
        logoWidth: 100,
        logoHeight: 100,
      },
      {
        companyLogo: '/icons/upwork.svg',
        companyName: '[Freelance] Kingtiger',
        position: 'Senior Software Engineering',
        duration: '1/2022 - 4/2022',
        description: [
          'Team size: 5',
          'Tech stack: Angular (Version 12), Typescript, RxJS, Nx, Ngrx, tailwindcss, nestjs, neo4j',
          'Responsibility: Maintain core features.',
          'Description:',
          '- A business posts a question to a specific group of people and pledges a donation to a nonprofit that the group supports.',
          '- People answer the question, giving the business insight and easily supporting the nonprofit.',
          '- Nonprofits collect donations and return meaningful value to the community.',
        ],
        link: 'https://blueghost.co',
        logoWidth: 100,
        logoHeight: 100,
      },
      {
        companyLogo: '/icons/upwork.svg',
        companyName: '[Freelance] BlueGhost',
        position: 'Middle Software Engineering',
        duration: '12/2021 - 4/2022',
        description: [
          'Team size: 5',
          'Tech stack: Angular (Version 12), Typescript, RxJS, Nx,Akita, tailwindcss, nestjs, typeOrm',
          'Responsibility: Add new modules, build new features, review code, maintain core features.',
          'Description:',
          '- Streamline your talent bookings, from concept to rockstar performance.',
          '- Keep everyone in the loop with google docs style collaboration.',
        ],
        link: 'https://blueghost.co',
        logoWidth: 100,
        logoHeight: 100,
      },
      {
        companyLogo: '/icons/upwork.svg',
        companyName: '[Freelance] WithCoders',
        position: 'Senior Software Engineering',
        duration: '7/2021 - 12/2021',
        description: [
          'Team size: 1',
          'Tech stack: Angular (Version 12), Typescript, RxJS, Nx',
          'Responsibility: Build charts, map, table components and apply them to build features.',
          'Description:',
          '- Kolytics is a platform that revolutionises the investment research process for property investors everywhere.',
          '- Kolytics was founded in 2021 by industry expert Hemant Kotak. Our passion isto streamline property investing with cutting-edge technology and data science.',
          '- Hemant has 20 years of industry experience, the last 15 of which were in property investment research.',
          '- Most recently Hemant was head ofUK research at CBRE UK, and managing director at Green Street Advisors.',
          '- Hemant is a CFA Charter holder and a Chartered Management Accountant.',
        ],
        link: 'https://www.kolytics.com',
        logoWidth: 100,
        logoHeight: 100,
      },
      {
        companyLogo: '/images/nec-1.png',
        companyName: '[Freelance] NEC Vietnam',
        position: 'Senior Software Engineering',
        duration: '07/2021 - 10/2021',
        description: [
          'Team size: 6',
          'Tech stack: Angular (Version 12), Typescript, RxJS, Material, Ngrx, Tailwindcss',
          'Responsibility: Build project structure, configuration application, develop core features, review code, mentor for juniors',
          'Description: Medilink is an internal web chat application used in the company’s Megaoak system (Megaoak is a system of applications related to Hospitals',
        ],
        link: 'https://www.nec.com',
        logoWidth: 100,
        logoHeight: 100,
      },
    ],
  },
  minh: {
    fullName: 'Minh Vo',
    role: 'Software Engineer',
    slogan: 'Software Engineer',
    description: [
      "Hi, I'm  {highlight}Minh{/highlight}. I have nearly 5 years of experience as a {highlight}Software Engineer{/highlight} with skills across CRM, finance, blockchain, healthcare, and oil & gas. {link}Learn more!{/link}",
    ],
    shortIntro:
      "I'm a fullstack developer with a passion for building web/mobile applications.",
    image: '/images/vinhdang.jpg',
    contact: {
      phone: '+84 344 239 428',
      email: {
        name: 'dev.minhvo@gmail.com',
        url: 'mailto:dev.minhvo@gmail.com',
        icon: '/icons/email.svg',
        hide: false,
      },
      instagram: {
        name: 'instagram.com/mmiinn.06',
        url: 'https://www.instagram.com/mmiinn.06/',
        icon: '/icons/instagram.svg',
        hide: false,
      },
      skype: {
        name: 'live:.cid.a2a8e4905c051bfa',
        url: 'https://join.skype.com/invite/vScj21vZxsI1',
        icon: '/icons/skype.svg',
        hide: false,
      },
      linkedin: {
        name: 'https://www.linkedin.com/in/minh-vo-515986245/',
        url: 'https://www.linkedin.com/in/minh-vo-515986245/',
        icon: '/icons/linkedin.svg',
        hide: false,
      },
      github: {
        name: 'github.com/aeiforge',
        url: 'https://github.com/aeiforge',
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
        hide: true,
      },
      location: 'Ho Chi Minh City, Vietnam',
      status: 'Available for new projects',
    },
    techstack: {
      mainStackList: [
        { name: 'HTML5', icon: '/icons/html5.svg', frequency: 5 },
        { name: 'Sass', icon: '/icons/sass.svg', frequency: 5 },
        { name: 'Tailwind', icon: '/icons/tailwindcss.svg', frequency: 4 },
        { name: 'TypeScript', icon: '/icons/typescript.svg', frequency: 5 },
        { name: 'JavaScript', icon: '/icons/javascript.svg', frequency: 4 },
        { name: 'Angular', icon: '/icons/angular.svg', frequency: 5 },
        { name: 'Ngrx', icon: '/icons/ngrx.svg', frequency: 5 },
        { name: 'Rxjs', icon: '/icons/reactivex.svg', frequency: 5 },
        { name: 'React', icon: '/icons/react.svg', frequency: 3 },
        { name: 'NextJS', icon: '/icons/nestjs.svg', frequency: 2 },
        { name: 'ThreeJS', icon: '/icons/threedotjs.svg', frequency: 2 },
        { name: 'NodeJS', icon: '/icons/nodejs.svg', frequency: 4 },
        { name: 'GraphQL', icon: '/icons/graphql.svg', frequency: 3 },
        { name: 'MongoDB', icon: '/icons/mongodb.svg', frequency: 3 },
        { name: 'PostgreSQL', icon: '/icons/postgresql.svg', frequency: 5 },
      ],
      otherStackList: [
        'Docker',
        'Kubernetes',
        'AWS',
        'Azure',
        'Kafka',
        'RabbitMQ',
        'Go',
        'Zod',
        'Redux',
        'PostgreSQL',
        'Vercel',
        'Netlify',
        'Material UI',
        'PrimeNG',
        'Ant Design',
        'Webpack',
        'Remix',
        'Vite',
        'Babel',
        'Jest',
        'Storybook',
        'Lerna',
        'Nx',
      ],
      keyTechnologies: [
        { name: 'JavaScript', icon: '/icons/javascript.svg' },
        { name: 'TypeScript', icon: '/icons/typescript.svg' },
        { name: 'Angular', icon: '/icons/angular.svg' },
        { name: 'Nest.js', icon: '/icons/nestjs.svg' },
        { name: 'Ngrx', icon: '/icons/ngrx.svg' },
        { name: 'Rxjs', icon: '/icons/reactivex.svg' },
        { name: 'HTML5', icon: '/icons/html5.svg' },
        { name: 'Sass', icon: '/icons/sass.svg' },
        { name: 'Tailwind', icon: '/icons/tailwindcss.svg' },
      ],
      keyTechnologiesDescription:
        "These are the key tech stacks I've {highlight}frequently used{/highlight} during project development. {link}Learn more!{/link}",
      futureTechnologies: [
        { name: 'Go', icon: '/icons/go.svg' },
        { name: 'Gin', icon: '/icons/gin.svg' },
        { name: 'Deno', icon: '/icons/deno.svg' },
        { name: 'Remix', icon: '/icons/remix.svg' },
        { name: 'Three.js', icon: '/icons/threedotjs.svg' },
        { name: 'Lambda', icon: '/icons/awslambda.svg' },
        { name: 'Lerna', icon: '/icons/lerna.svg' },
      ],
      futureTechnologiesDescription:
        "These are the key tech stacks I'm {highlight}currently learning{/highlight} and {highlight}interested in{/highlight} the next few months.",
    },
    modelUrl: '/models/fixed/minh.glb',
    expectations: [
      'I am currently here looking for a {highlight}second job as a freelancer{/highlight}. Although based in Ho Chi Minh City, Vietnam, I am very flexible with {highlight}time zone communications and locations{/highlight}. Please feel free to {link}contact me{/link} if you are looking for someone who can meet your job requirements.',
    ],
    jobs: [
      {
        companyLogo: '/images/halliburton.png',
        companyName: 'Halliburton',
        position: 'Senior Software Engineering',
        duration: '09/2023 - Present',
        description: [
          'Lorem ipsum dolor sit amet consectetur. Massa in nec arcu volutpat purus porttitor urna feugiat. Pellentesque elementum placerat malesuada in amet ipsum porta.',
          'Id id lectus odio dictum elementum id quis nunc nunc. Pellentesque imperdiet morbi adipiscing orci. Placerat amet ac augue viverra.',
          'Lorem ipsum dolor sit amet consectetur. Massa in nec arcu volutpat purus porttitor urna feugiat. Pellentesque elementum placerat malesuada in amet ipsum porta.',
        ],
        link: 'https://www.halliburton.com/',
        logoWidth: 150,
        logoHeight: 90,
      },
      {
        companyLogo: '/icons/sts.svg',
        companyName: 'Saigon Technology Solutions',
        position: 'Senior Software Engineering',
        duration: '07/2022 - 08/2023',
        description: [
          'Lorem ipsum dolor sit amet consectetur. Massa in nec arcu volutpat purus porttitor urna feugiat. Pellentesque elementum placerat malesuada in amet ipsum porta.',
          'Id id lectus odio dictum elementum id quis nunc nunc. Pellentesque imperdiet morbi adipiscing orci. Placerat amet ac augue viverra.',
          'Lorem ipsum dolor sit amet consectetur. Massa in nec arcu volutpat purus porttitor urna feugiat. Pellentesque elementum placerat malesuada in amet ipsum porta.',
        ],
        link: 'https://saigontechnology.com/',
        logoWidth: 150,
        logoHeight: 90,
      },
      {
        companyLogo: '/icons/upwork.svg',
        companyName: 'Riet Circles',
        position: 'Senior Software Engineering',
        duration: '07/2022 - 07/2024',
        description: [
          'Lorem ipsum dolor sit amet consectetur. Massa in nec arcu volutpat purus porttitor urna feugiat. Pellentesque elementum placerat malesuada in amet ipsum porta.',
          'Id id lectus odio dictum elementum id quis nunc nunc. Pellentesque imperdiet morbi adipiscing orci. Placerat amet ac augue viverra.',
          'Lorem ipsum dolor sit amet consectetur. Massa in nec arcu volutpat purus porttitor urna feugiat. Pellentesque elementum placerat malesuada in amet ipsum porta.',
        ],
        link: 'https://reitcircles.com/',
        logoWidth: 100,
        logoHeight: 100,
      },
      {
        companyLogo: '/icons/upwork.svg',
        companyName: 'Wirely DTS',
        position: 'Senior Software Engineering',
        duration: '03/2022 - 07/2022',
        description: [
          'Lorem ipsum dolor sit amet consectetur. Massa in nec arcu volutpat purus porttitor urna feugiat. Pellentesque elementum placerat malesuada in amet ipsum porta.',
          'Id id lectus odio dictum elementum id quis nunc nunc. Pellentesque imperdiet morbi adipiscing orci. Placerat amet ac augue viverra.',
          'Lorem ipsum dolor sit amet consectetur. Massa in nec arcu volutpat purus porttitor urna feugiat. Pellentesque elementum placerat malesuada in amet ipsum porta.',
        ],
        link: 'https://wirely.com.au/',
        logoWidth: 100,
        logoHeight: 100,
      },
      {
        companyLogo: '/icons/upwork.svg',
        companyName: 'BlueGhost',
        position: 'Middle Software Engineering',
        duration: '8/2022 - Present',
        description: [
          'Lorem ipsum dolor sit amet consectetur. Massa in nec arcu volutpat purus porttitor urna feugiat. Pellentesque elementum placerat malesuada in amet ipsum porta.',
          'Id id lectus odio dictum elementum id quis nunc nunc. Pellentesque imperdiet morbi adipiscing orci. Placerat amet ac augue viverra.',
          'Lorem ipsum dolor sit amet consectetur. Massa in nec arcu volutpat purus porttitor urna feugiat. Pellentesque elementum placerat malesuada in amet ipsum porta.',
        ],
        link: '#',
        logoWidth: 100,
        logoHeight: 100,
      },
      {
        companyLogo: '/images/nec-1.png',
        companyName: 'NEC Vietnam',
        position: 'Junior Software Engineering',
        duration: '01/2021 - 04/2022',
        description: [
          'Lorem ipsum dolor sit amet consectetur. Massa in nec arcu volutpat purus porttitor urna feugiat. Pellentesque elementum placerat malesuada in amet ipsum porta.',
          'Id id lectus odio dictum elementum id quis nunc nunc. Pellentesque imperdiet morbi adipiscing orci. Placerat amet ac augue viverra.',
          'Lorem ipsum dolor sit amet consectetur. Massa in nec arcu volutpat purus porttitor urna feugiat. Pellentesque elementum placerat malesuada in amet ipsum porta.',
        ],
        link: '#',
        logoWidth: 100,
        logoHeight: 100,
      },
    ]
  },
  thong: {
    fullName: 'Pham Duc Thong',
    role: 'Software Engineer',
    slogan: 'Software Engineer',
    description: [
      "Hi, I'm  {highlight}Thong{/highlight}. I have nearly 3 years of experience as a {highlight}Software Engineer{/highlight} with skills across oil & gas. {link}Learn more!{/link}",
    ],
    shortIntro:
      "I'm a fullstack developer with a passion for building web/mobile applications.",
    image: '/images/vinhdang.jpg',
    contact: {
      phone: '+84 948 643 435',
      email: {
        name: 'phamducthong11101998@gmail.com',
        url: 'mailto:phamducthong11101998@gmail.com',
        icon: '/icons/email.svg',
        hide: false,
      },
      instagram: {
        name: 'instagram.com/mmiinn.06',
        url: 'https://www.instagram.com/thong_pd/',
        icon: '/icons/instagram.svg',
        hide: false,
      },
      skype: {
        name: 'live:.cid.a2a8e4905c051bfa',
        url: 'https://join.skype.com/invite/vScj21vZxsI1',
        icon: '/icons/skype.svg',
        hide: false,
      },
      linkedin: {
        name: 'https://www.linkedin.com/in/thong1/',
        url: 'https://www.linkedin.com/in/thong1/',
        icon: '/icons/linkedin.svg',
        hide: false,
      },
      github: {
        name: 'github.com/aeiforge',
        url: 'https://github.com/aeiforge',
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
        hide: true,
      },
      location: 'Ho Chi Minh City, Vietnam',
      status: 'Available for new projects',
    },
    techstack: {
      mainStackList: [
        { name: 'HTML5', icon: '/icons/html5.svg', frequency: 5 },
        { name: 'Sass', icon: '/icons/sass.svg', frequency: 5 },
        { name: 'Tailwind', icon: '/icons/tailwindcss.svg', frequency: 4 },
        { name: 'TypeScript', icon: '/icons/typescript.svg', frequency: 5 },
        { name: 'JavaScript', icon: '/icons/javascript.svg', frequency: 4 },
        { name: 'Angular', icon: '/icons/angular.svg', frequency: 5 },
        { name: 'Ngrx', icon: '/icons/ngrx.svg', frequency: 5 },
        { name: 'Rxjs', icon: '/icons/reactivex.svg', frequency: 5 },
        { name: 'React', icon: '/icons/react.svg', frequency: 3 },
        { name: 'NextJS', icon: '/icons/nestjs.svg', frequency: 2 },
        { name: 'ThreeJS', icon: '/icons/threedotjs.svg', frequency: 2 },
        { name: 'NodeJS', icon: '/icons/nodejs.svg', frequency: 4 },
        { name: 'GraphQL', icon: '/icons/graphql.svg', frequency: 3 },
        { name: 'MongoDB', icon: '/icons/mongodb.svg', frequency: 3 },
        { name: 'PostgreSQL', icon: '/icons/postgresql.svg', frequency: 5 },
      ],
      otherStackList: [
        'Docker',
        'Kubernetes',
        'AWS',
        'Kafka',
        'RabbitMQ',
        'Go',
        'Zod',
        'Redux',
        'PostgreSQL',
        'Vercel',
        'Netlify',
        'Material UI',
        'PrimeNG',
        'Ant Design',
        'Webpack',
        'Remix',
        'Vite',
        'Babel',
        'Jest',
        'Storybook',
        'Nx',
      ],
      keyTechnologies: [
        { name: 'JavaScript', icon: '/icons/javascript.svg' },
        { name: 'TypeScript', icon: '/icons/typescript.svg' },
        { name: 'Angular', icon: '/icons/angular.svg' },
        { name: 'Nest.js', icon: '/icons/nestjs.svg' },
        { name: 'Ngrx', icon: '/icons/ngrx.svg' },
        { name: 'Rxjs', icon: '/icons/reactivex.svg' },
        { name: 'HTML5', icon: '/icons/html5.svg' },
        { name: 'Sass', icon: '/icons/sass.svg' },
        { name: 'Tailwind', icon: '/icons/tailwindcss.svg' },
      ],
      keyTechnologiesDescription:
        "These are the key tech stacks I've {highlight}frequently used{/highlight} during project development. {link}Learn more!{/link}",
      futureTechnologies: [
        { name: 'Go', icon: '/icons/go.svg' },
        { name: 'Gin', icon: '/icons/gin.svg' },
        { name: 'Deno', icon: '/icons/deno.svg' },
        { name: 'Remix', icon: '/icons/remix.svg' },
        { name: 'Three.js', icon: '/icons/threedotjs.svg' },
        { name: 'Lambda', icon: '/icons/awslambda.svg' },
        { name: 'Lerna', icon: '/icons/lerna.svg' },
      ],
      futureTechnologiesDescription:
        "These are the key tech stacks I'm {highlight}currently learning{/highlight} and {highlight}interested in{/highlight} the next few months.",
    },
    modelUrl: '/models/fixed/thong.glb',
    expectations: [
      'I am currently here looking for a {highlight}second job as a freelancer{/highlight}. Although based in Ho Chi Minh City, Vietnam, I am very flexible with {highlight}time zone communications and locations{/highlight}. Please feel free to {link}contact me{/link} if you are looking for someone who can meet your job requirements.',
    ],
    jobs: [
      {
        companyLogo: '/images/halliburton.png',
        companyName: 'Halliburton',
        position: 'Senior Software Engineering',
        duration: '09/2023 - Present',
        description: [
          'A major Oil and Gas system used across some contries such as Italy, Saudi Arabia, Thailand, Malaysia, Brunei and India, designed specifically for engineers to {highlight}perform critical calculations and generate comprehensive reports{/highlight}',
        ],
        link: 'https://www.halliburton.com/',
        logoWidth: 150,
        logoHeight: 90,
      }
    ]
  },
};


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

  const linkProps = {
    'Learn more!': {
      href: '#work-experience',
    },
    'contact me': {
      href: '#work-experience',
    },
  };

  return (
    <>
      <Navbar />
      <main className="main">
        <Banner
          name={member.fullName}
          role={member.role}
          shortIntro={member.shortIntro}
          location={member.contact.location}
          status={member.contact.status}
          modelUrl={member.modelUrl}
        />
        <SocialIcons socials={socialIcons} />
        <VerticalGmail email={member.contact.email.name} />
        <AboutMe
          modelUrl={member.modelUrl}
          description={member.description}
          keyTechnologies={member.techstack.keyTechnologies}
          expectations={member.expectations}
          futureTechnologies={member.techstack.futureTechnologies}
          linkProps={linkProps}
          keyTechnologiesDescription={
            member.techstack.keyTechnologiesDescription
          }
          futureTechnologiesDescription={
            member.techstack.futureTechnologiesDescription
          }
        />
        <Stack
          stacks={member.techstack.mainStackList}
          otherStacks={member.techstack.otherStackList}
        />
        <WorkExperience jobs={member.jobs} />
        <Footer />
      </main>
    </>
  );
}
