import { SocialMediaIcon } from '@/types/types';

export const SOCIAL_ICONS: SocialMediaIcon[] = [
  {
    url: '/icons/github.svg',
    hoverUrl: '/icons/githubHover.svg',
    alt: 'GitHub Icon',
    redirectUrl: 'https://github.com/sudiptapradhan1181',
  },
  {
    url: '/icons/linkedin.svg',
    hoverUrl: '/icons/linkedinHover.svg',
    alt: 'LinkedIn Icon',
    redirectUrl: 'https://www.linkedin.com/in/sudiptapradhan1181/',
  },
  {
    url: '/icons/hashnode.svg',
    hoverUrl: '/icons/hashnodeHover.svg',
    alt: 'Hashnode Icon',
    redirectUrl: 'https://sudo-coder.hashnode.dev/?source=top_nav_blog_home',
  },
];

export const HEADER_TABS = [
  { title: 'About', href: '#about' },
  { title: 'Experience', href: '#experience' },
  { title: 'Projects', href: '#projects' },
  { title: 'Contact', href: '#contact' },
];

export const RESUME_LINK =
  'https://drive.google.com/file/d/1cTf4OmDI29KHR7SMsM8gjGhTnYJWeJJK/view?usp=sharing';

export const SKILLS_LIST = [
  'Javascript(ES6+)',
  'React',
  'Typescript',
  'NextJS',
];

export const EXPERIENCE_TABS = [
  {
    id: 1,
    label: 'Saathi',
    title: 'Lead Frontend Engineer',
    date: 'May 2024 - Present',
    details: [
      'Spearheaded the development a high-impact website to boost product reach, enabling users to explore benefits and complete UPI purchases seamlessly without downloading the app, implementing intent and collect flows for streamlined transactions',
      'Led the development of an internal dashboard tool, providing real-time insights into app usage, order details, and customer information while enabling seamless content uploads to the mobile app for enhanced operational efficiency',
    ],
  },
  {
    id: 2,
    label: 'Whitehat Jr',
    title: 'Senior Engineer',
    date: 'Sept 2023 - April 2024',
    details: [
      'Leading WHJR system customization, integrating strategically with Tynker app to drive annual revenue growth, targeting gains over $4M.',
      'Led a team in creating innovative product with Next.js and React, boosting user retention from 35% to over 60%.',
    ],
  },
  {
    id: 3,
    label: "Byju's",
    title: 'Software Engineer',
    date: 'June 2023 - Aug 2023',
    details: [
      'Crafted Next.js blog pages, aimed at tripling user landings during FIFA World Cup 2022, enhancing engagement and brand visibility.',
      'Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements',
      'Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements',
      'Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements',
    ],
  },
  {
    id: 4,
    label: 'Toppr',
    title: 'Software Engineer',
    date: 'May 2021 - June 2023',
    details: [
      'Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements',
    ],
  },
  {
    id: 5,
    label: 'Newzera',
    title: 'Software Engineer Intern',
    date: 'May 2020 - Aug 2020',
    details: [
      'Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements',
      'Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements',
    ],
  },
];

export const PROJECT_DETAILS = [
  {
    id: 1,
    title: 'Saathi Landing Page',
    desc: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
    imgSrc: '/images/saathi.webp',
    href: 'https://www.saathi.in/',
    tags: ['NextJS', 'Tailwind', 'Tanstack-Query', 'NodeJS'],
  },
  {
    id: 2,
    title: 'Math Companion',
    desc: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
    imgSrc: '/images/bmc.webp',
    href: 'https://byjus.com/us/math/',
    tags: ['NextJS', 'Tailwind', 'Tanstack-Query', 'NodeJS'],
  },
  {
    id: 3,
    title: 'Math Companion',
    desc: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
    imgSrc: '/images/bmc.webp',
    href: 'https://byjus.com/us/math/',
    tags: ['NextJS', 'Tailwind', 'Tanstack-Query', 'NodeJS'],
  },
];
