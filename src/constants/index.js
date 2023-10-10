import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  mrp_main,
  cdevs_main,
  tkrp_main,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Graphics Designer',
    icon: ux,
  },
  {
    title: 'MERN Stack Developer',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'Game Server Developer',
    company_name: 'Mallu Roleplay',
    icon: mrp_main,
    iconBg: '#333333',
    date: 'Aug 2020 - Feb 2021',
  },
  {
    title: 'Game Server Lead Developer',
    company_name: 'Mallu Roleplay',
    icon: mrp_main,
    iconBg: '#333333',
    date: 'Feb 2021 - May 2023',
  },
  {
    title: 'Game Server Developer',
    company_name: 'Thenkashipattanam',
    icon: tkrp_main,
    iconBg: '#333333',
    date: 'July 2023 - Aug 2023',
  },
  {
    title: 'Node JS Developer',
    company_name: 'C Devs',
    icon: cdevs_main,
    iconBg: '#333333',
    date: 'July 2023 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'MRP - Mallu Roleplay',
    description: 'MRP - Mallu Roleplay Server is an online game server based on GTA 5 for PC, allowing multiple players to join and engage in roleplay activities.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: '',
  },
  {
    id: 'project-2',
    name: 'CFX - Status BOT',
    description:
      'The "CFX Status Bot" is a Discord bot designed to provide real-time status updates for the CFX game client, enhancing the gaming experience.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://www.cdevs.in/cfx_index.html',
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: '',
  },
  {
    id: 'project-4',
    name: 'Netflix Clone',
    description: `I developed a Netflix clone using React.js, leveraging a REST API to replicate the streaming service's user interface and functionality`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: '',
  },
  {
    id: 'project-5',
    name: 'ToDo App',
    description:
      'I created a task management application using React.js, allowing users to easily add, and complete their to-do lists. The app streamlines productivity and provides a user-friendly interface for organizing tasks',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: '',
  },
];

export { services, technologies, experiences, projects };
