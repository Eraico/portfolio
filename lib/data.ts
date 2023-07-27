import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Computer Science',
    location: 'Qatar University',
    description:
      'Currently a 3rd year student studying Computer Science at Qatar University. ',
    icon: React.createElement(LuGraduationCap),
    date: '2021 - Present',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Doha, Qatar',
    description:
      'Working part-time as a full-stack developer on a digital marketing agency. My stack includes React, Next.js, TypeScript, Tailwind, Node.js and CMS systems.',
    icon: React.createElement(CgWorkAlt),
    date: '2022 - Present',
  },
  {
    title: 'FreeLance Developer',
    location: 'Doha, Qatar',
    description:
      'Full-stack developer freelancing, open to full-time opportunities. Passionate about coding and ready to contribute to a collaborative team.',
    icon: React.createElement(FaReact),
    date: '2021 - Present',
  },
] as const;

export const projectsData = [
  {
    title: 'CorpComment',
    description:
      'A startup project. Users can give public feedback to companies.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: corpcommentImg,
  },
  {
    title: 'rmtDev',
    description:
      'Job board for remote developer jobs. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: rmtdevImg,
  },
  {
    title: 'Word Analytics',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'Drizzle',
  'MongoDB',
  'Redux',
  'Express.js',
  'SQL',
  'PostgreSQL',
  'Python',
] as const;
