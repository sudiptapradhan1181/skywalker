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
      'Spearheaded the development a high-impact website to boost product reach, enabling users to explore benefits and complete UPI purchases seamlessly without downloading the app, implementing intent and collect flows for streamlined transactions.',
      'Led the development of an internal dashboard tool, providing real-time insights into app usage, order details, and customer information while enabling seamless content uploads to the mobile app for enhanced operational efficiency.',
    ],
  },
  {
    id: 2,
    label: 'Whitehat Jr',
    title: 'Senior Engineer',
    date: 'Sept 2023 - April 2024',
    details: [
      'Leading WHJR system customization, integrating strategically with Tynker app to drive annual revenue growth, targeting gains over $4M.',
      "Significantly contributed to successful launch of Spark AR and English courses, using ReactJS, aiding WHJR's global expansion to diverse regions.",
    ],
  },
  {
    id: 3,
    label: "Byju's",
    title: 'Software Engineer',
    date: 'June 2023 - Aug 2023',
    details: [
      'Crafted Next.js blog pages, aimed at tripling user landings during FIFA World Cup 2022, enhancing engagement and brand visibility.',
      'Led a team in creating innovative product with Next.js and React, boosting user retention from 35% to over 60%.',
      'Contributed to the development of an npm package facilitating text and image search via camera or upload, seamlessly integrated into platforms like Byju’s, Aakash, and Toppr.',
    ],
  },
  {
    id: 4,
    label: 'Toppr',
    title: 'Software Engineer',
    date: 'May 2021 - June 2023',
    details: [
      'Instrumental in conceiving and executing a platform for student-teacher connectivity, integrating Agora Web SDK with ReactJS, enhancing educational interactions and engagement.',
      'Crafted sophisticated course landing pages with Webflow, mitigating content management challenges and empowering autonomous page updates, resulting in a 50% increase in operational efficiency.',
    ],
  },
  {
    id: 5,
    label: 'Newzera',
    title: 'Software Engineer Intern',
    date: 'May 2020 - Aug 2020',
    details: [
      "Played a pivotal role in developing the company's core mobile application, architecting a secure authentication system and designing a dynamic feed section to elevate user engagement and experience.",
    ],
  },
];

export const PROJECT_DETAILS = [
  {
    id: 1,
    title: 'Saathi Landing Page',
    desc: 'Designed and developed a visually engaging static landing page for Saathi using Next.js and Tailwind CSS, seamlessly integrating Framer Motion to deliver smooth, interactive animations.',
    imgSrc: '/images/saathi.webp',
    href: 'https://www.saathi.in/',
    tags: ['NextJS', 'Tailwind', 'Framer-Motion'],
  },
  {
    id: 2,
    title: 'Math Companion',
    desc: 'An integrated platform offering students a seamless learning experience, featuring one-on-one live classes, instant doubt resolution, and access to a vast library of educational resources.',
    imgSrc: '/images/bmc.webp',
    href: 'https://byjus.com/us/math/',
    tags: ['NextJS', 'SCSS', 'Tanstack-Query', 'NodeJS'],
  },
  {
    id: 3,
    title: "Byju's Learning",
    desc: 'A comprehensive platform highlighting the diverse benefits of Byju’s courses, effectively engaging and attracting students worldwide.',
    imgSrc: '/images/bmath.webp',
    href: 'https://byjus.com/us/',
    tags: ['NextJS', 'Styled Components'],
  },
];
