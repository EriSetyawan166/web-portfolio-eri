import patunganajaImage from './assets/patunganaja.jpeg';
import rayspeedImage from './assets/rayspeed.jpeg';
import infomediaLogo from './assets/logos/infomedia.png';
import rayspeedLogo from './assets/logos/rayspeed.png';
import mafindoLogo from './assets/logos/mafindo.png';
import budiluhurLogo from './assets/logos/budiluhur.png';
// Public domain / CC0 photos from Wikimedia Commons, see assets/projects/CREDITS.md
import voicebotImage from './assets/projects/voicebot.jpg';
import shippingImage from './assets/projects/shipping.jpg';
import scancareImage from './assets/projects/scancare.jpg';
import hoaxbusterImage from './assets/projects/hoaxbuster.jpg';

export const profile = {
  name: 'Muhammad Eri Setyawan',
  short: 'Eri',
  role: 'Full-stack engineer',
  location: 'Bogor, Indonesia',
  email: 'erisetyawan1@gmail.com',
  phone: '+62 896 3575 8226',
  phoneHref: 'tel:+6289635758226',
  github: 'https://www.github.com/EriSetyawan166',
  linkedin: 'https://www.linkedin.com/in/erisetyawan/',
  cv: 'https://drive.google.com/file/d/19Z8W4Zvs2hJSMt--YsN4lB9pJioca7dj/view?usp=drive_link',
};

// icon = Simple Icons slug (https://simpleicons.org); omitted when the set has no icon
export const skills: { name: string; icon?: string }[] = [
  { name: 'React', icon: 'react' }, { name: 'NestJS', icon: 'nestjs' }, { name: 'TypeScript', icon: 'typescript' },
  { name: 'Next.js', icon: 'nextdotjs' }, { name: 'Remix', icon: 'remix' }, { name: 'Python', icon: 'python' },
  { name: 'LiveKit', icon: 'livekit' }, { name: 'Deepgram', icon: 'deepgram' }, { name: 'Gemini', icon: 'googlegemini' },
  { name: 'Google ADK', icon: 'googlecloud' }, { name: 'Pinecone' }, { name: 'Docker', icon: 'docker' },
  { name: 'Kubernetes', icon: 'kubernetes' }, { name: 'Jenkins', icon: 'jenkins' }, { name: 'Laravel', icon: 'laravel' },
  { name: 'Kotlin', icon: 'kotlin' }, { name: 'Firebase', icon: 'firebase' }, { name: 'MySQL', icon: 'mysql' },
  { name: 'TensorFlow', icon: 'tensorflow' }, { name: 'Shopify', icon: 'shopify' },
];

export const iconUrl = (slug: string, color: string) => `https://cdn.simpleicons.org/${slug}/${color}`;

export const places: { name: string; logo?: string }[] = [
  { name: 'PT Infomedia Nusantara', logo: infomediaLogo },
  { name: 'Rayspeed Asia', logo: rayspeedLogo },
  { name: 'Mafindo', logo: mafindoLogo },
  { name: 'Bangkit Academy' },
  { name: 'Universitas Budi Luhur', logo: budiluhurLogo },
];

export const services = [
  {
    short: 'Voice', title: 'Voice AI', tag: 'Real-time', side: 'Speech',
    points: [
      { h: 'Voicebots', p: 'Real-time voice agents built on LiveKit, Deepgram, Google TTS and Gemini.' },
      { h: 'Demo platform', p: 'Rebuilt AIHub Reborn in React and NestJS so clients can try the voicebots end to end.' },
    ],
  },
  {
    short: 'Agents', title: 'AI agents & retrieval', tag: 'Google ADK', side: 'RAG',
    points: [
      { h: 'Retrieval', p: 'Agentic retrieval with Google ADK, using RAGFlow and Pinecone as the vector store.' },
      { h: 'Orchestration', p: 'Modular NestJS backend for AI AgentSpace, where several agents work together.' },
    ],
  },
  {
    short: 'Backend', title: 'Backend & deployment', tag: 'NestJS', side: 'GKE',
    points: [
      { h: 'Services', p: 'Modular NestJS services with clear boundaries, so features can grow without rewrites.' },
      { h: 'Delivery', p: 'Deployments to GKE through Jenkins and Docker, kept above 99% uptime in production.' },
    ],
  },
  {
    short: 'Frontend', title: 'Frontend', tag: 'React · Remix', side: 'React · Remix',
    points: [
      { h: 'Interfaces', p: 'Responsive interfaces in React, Next.js and Remix, built together with design teams.' },
      { h: 'Shopify', p: 'A Remix-based Shopify app that calculates shipping rates automatically for merchants.' },
    ],
  },
];

export type Project = { title: string; category: string; year: string; summary: string; tech: string[]; image?: string; url?: string };

export const projects: Project[] = [
  {
    title: 'PatunganAja', category: 'Web platform', year: '2025',
    summary: 'A platform for organising group purchases. I worked on the web app and its backend.',
    tech: ['React', 'NestJS', 'Python', 'MySQL'], image: patunganajaImage, url: 'https://patunganaja.my.id/',
  },
  {
    title: 'AI voicebot engine', category: 'Conversational AI', year: '2025',
    summary: 'The engine behind real-time voice conversations at Infomedia. Engagement went up about 45% after launch.',
    tech: ['LiveKit', 'Python', 'Deepgram', 'Gemini', 'Google TTS'], image: voicebotImage,
  },
  {
    title: 'Rayspeed website revamp', category: 'Web modernisation', year: '2024',
    summary: 'Rebuilt 10+ pages and 5+ features with the UI/UX team to make the site consistent and responsive.',
    tech: ['Laravel', 'PHP'], image: rayspeedImage, url: 'https://rayspeed.com/',
  },
  {
    title: 'Shipping rate app', category: 'Shopify app', year: '2024',
    summary: 'A Remix-based Shopify app that automates shipping rate calculation, cutting manual work by about 65%.',
    tech: ['Remix', 'Shopify', 'TypeScript'], image: shippingImage,
  },
  {
    title: 'ScanCare', category: 'Machine learning', year: '2023',
    summary: 'An acne detection app from Bangkit Academy. I led the project as project manager and tech lead.',
    tech: ['TensorFlow', 'Kotlin', 'Python'], image: scancareImage,
  },
  {
    title: 'HoaxBusterTools', category: 'Android app', year: '2023',
    summary: 'An Android app for Mafindo, built from scratch in Kotlin with Firebase real-time sync.',
    tech: ['Kotlin', 'Firebase'], image: hoaxbusterImage,
  },
];

// start/end are 'YYYY-MM'; end omitted = current role
export const experience = [
  {
    start: '2024-11', period: 'Nov 2024 – Now', company: 'PT Infomedia Nusantara', short: 'Infomedia', logo: infomediaLogo, place: 'Jakarta',
    role: 'Full-Stack Engineer', tags: ['Voice AI', 'Agents', 'GKE'],
    text: 'Building AI voicebots and agent systems, from the React front end to NestJS services and deployment on GKE.',
    highlights: [
      { k: '~45%', v: 'more engagement after the new voicebot engine' },
      { k: '>99%', v: 'production uptime on GKE with Jenkins and Docker' },
    ],
    chips: ['React', 'NestJS', 'Google ADK', 'LiveKit', 'Jenkins', 'Docker'],
  },
  {
    start: '2024-03', end: '2024-08', period: 'Mar – Aug 2024', company: 'Rayspeed Asia', short: 'Rayspeed', logo: rayspeedLogo, place: 'Jakarta',
    role: 'Front End Developer', tags: ['Redesign', 'Responsive'],
    text: 'Rebuilt pages and features of the company site and worked with UI/UX to remove inconsistencies.',
    highlights: [
      { k: '10+', v: 'pages rebuilt' },
      { k: '5+', v: 'features redone with the design team' },
    ],
    chips: ['Laravel', 'PHP', 'Responsive UI'],
  },
  {
    start: '2023-12', end: '2024-02', period: 'Dec 2023 – Feb 2024', company: 'Rayspeed Asia', short: 'Shopify app', logo: rayspeedLogo, place: 'Jakarta',
    role: 'Shopify Apps Developer', tags: ['Shopify', 'Remix'],
    text: 'Built and shipped a Shopify app that automates shipping rates for a handful of merchant clients.',
    highlights: [
      { k: '~65%', v: 'less manual work on shipping rates' },
      { k: '3–5', v: 'merchant clients using it' },
    ],
    chips: ['Remix', 'Shopify', 'TypeScript'],
  },
  {
    start: '2023-08', end: '2023-09', period: 'Aug – Sep 2023', company: 'Mafindo', short: 'Mafindo', logo: mafindoLogo, place: 'Jakarta',
    role: 'Android Developer', tags: ['Android', 'Firebase'],
    text: 'Built the HoaxBusterTools app from scratch in Kotlin, with real-time sync through Firebase.',
    highlights: [
      { k: '~35%', v: 'faster loading with Firebase real-time sync' },
      { k: '20%', v: 'fewer crashes after fixes with QA' },
    ],
    chips: ['Kotlin', 'Firebase'],
  },
  {
    start: '2022-09', end: '2023-07', period: 'Sep 2022 – Jul 2023', company: 'Lab ICT Universitas Budi Luhur', short: 'Lab ICT', logo: budiluhurLogo, place: 'Jakarta',
    role: 'Lab Administrator', tags: ['Operations', 'Mentoring'],
    text: 'Ran the computer lab day to day and kept its machines maintained and up to date.',
    highlights: [
      { k: '2', v: 'lab assistants supervised' },
      { k: '13', v: 'future lab assistants mentored' },
    ],
    chips: ['Maintenance', 'Mentoring', 'Laravel'],
  },
];

// "2 yrs", "6 mos": inclusive month count between start and end (or today)
export function duration(start: string, end?: string) {
  const [sy, sm] = start.split('-').map(Number);
  const now = new Date();
  const [ey, em] = end ? end.split('-').map(Number) : [now.getFullYear(), now.getMonth() + 1];
  const months = (ey - sy) * 12 + (em - sm) + 1;
  if (months < 12) return `${months} mo${months > 1 ? 's' : ''}`;
  const y = Math.floor(months / 12), m = months % 12;
  return `${y} yr${y > 1 ? 's' : ''}${m ? ` ${m} mo${m > 1 ? 's' : ''}` : ''}`;
}

export const education = [
  { title: 'Universitas Budi Luhur', meta: 'Bachelor · 2020 – 2024', text: 'Graduated with a GPA of 3.94 / 4.00.' },
  { title: 'Bangkit Academy', meta: 'Machine learning path · 2023', text: 'Program by Google, GoTo and Traveloka. Graduated in the top 10% and led the ScanCare capstone.' },
  { title: 'ICT lab scheduler', meta: 'Side project · 2021', text: 'A Laravel web app that handled scheduling for the university ICT lab.' },
];
