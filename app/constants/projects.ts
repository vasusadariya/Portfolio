import { Project } from "../types";

export const PROJECTS: Project[] = [
  {
    title: 'Open Source Contribution',
    date: 'Jan 2025',
    subtext: 'Solved conditional re-rendering issues in Agora Blockchain Repo using React.js, reducing unnecessary renders by 40%.',
    url: 'https://github.com/vasusadariya/Agora-Blockchain',
  },
  {
    title: 'Helper-Buddy',
    date: 'Mar 2025',
    subtext: 'A role-based service platform connecting users with service partners, with admin dashboard, rich analytics, secure authentication, and a sleek UI.',
    urls: [
      { text: 'GitHub', url: 'https://github.com/vasusadariya/HelperBuddy' },
      { text: 'Live', url: 'https://helpperbuddy.vercel.app' },
    ],
  },
  {
    title: 'MyGovt',
    date: 'Feb 2025',
    subtext: 'An online voting system built for DotSlash 8.0 hackathon with role-based auth, Firebase, MongoDB, IPFS for decentralized document storage and blockchain-based hashes.',
    urls: [
      { text: 'GitHub', url: 'https://github.com/vasusadariya/MyGovt' },
      { text: 'Live', url: 'https://my-govt-ruddy.vercel.app' },
    ],
  },
  {
    title: 'Chat App',
    date: 'Dec 2024',
    subtext: 'A platform to have chat with your loved ones and strangers by creating room chat using Socket.io and JWT auth.',
    url: 'https://github.com/vasusadariya/real-time-chat',
  },
  {
    title: 'MindMesh',
    date: 'Nov 2024',
    subtext: 'A full-stack blog posting platform where users can come and post their mind\'s mesh, built with React.js, JWT, PostgreSQL, and Prisma ORM.',
    url: 'https://github.com/vasusadariya/MindMesh',
  },
  {
    title: 'Decentralized Healthcare',
    date: 'Jan 2025',
    subtext: 'A platform to provide healthcare services and store patient data in a decentralized way using Solidity, ethers.js, and Hardhat.',
    url: 'https://github.com/vasusadariya/Healthcare',
  },
  {
    title: 'Qwykli Platform',
    date: 'May 2025',
    subtext: 'Professional home-services platform connecting customers and service providers across Delhi NCR with scalable REST APIs handling 1,000+ daily requests.',
    urls: [
      { text: 'App', url: 'https://github.com/vasusadariya/qwykli-Frontend-final' },
      { text: 'Api', url: 'https://github.com/vasusadariya/Local-Services-Backend-Qwykli' },
    ],
  },
  {
    title: 'Portfolio',
    date: 'Mar 2025',
    subtext: 'This interactive 3D portfolio built with Next.js, Three.js, and React Three Fiber — the very site you are looking at right now.',
    url: 'https://github.com/vasusadariya/portfolio',
  },
];

export const SKILLS: Project[] = [
  {
    title: 'Languages',
    date: 'Skills',
    subtext: 'C++, C, JavaScript, TypeScript, Rust, Solidity, SQL',
  },
  {
    title: 'Frameworks & Libraries',
    date: 'Skills',
    subtext: 'React.js, Next.js, Node.js, Express.js, Tailwind CSS, WebSockets',
  },
  {
    title: 'Databases & Tools',
    date: 'Skills',
    subtext: 'PostgreSQL, MongoDB, MySQL, Prisma ORM, Docker, GitHub Actions, Git, Postman, JWT, Hardhat',
  },
  {
    title: 'Areas of Interest',
    date: 'Skills',
    subtext: 'Smart Contracts, IPFS, AWS, Kubernetes, Cloudflare Workers',
  },
];
