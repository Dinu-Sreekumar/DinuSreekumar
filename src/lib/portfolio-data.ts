import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';
import { Nodejs, Mongodb, TypescriptIcon } from '@/components/icons';
import { Code, BotMessageSquare } from 'lucide-react';

export type Skill = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
};

export type Project = {
  name: string;
  description: string;
  image: ImagePlaceholder;
  liveUrl?: string;
  githubUrl: string;
  skills: Skill[];
};

export const skills: Skill[] = [
  { name: 'React', icon: Code },
  { name: 'Node.js', icon: Nodejs },
  { name: 'MongoDB', icon: Mongodb },
  { name: 'TypeScript', icon: TypescriptIcon },
  { name: 'Next.js', icon: Code },
  { name: 'GenAI', icon: BotMessageSquare },
];

const getImage = (id: string): ImagePlaceholder => {
    const img = PlaceHolderImages.find((img) => img.id === id);
    if (!img) {
      throw new Error(`Image with id ${id} not found.`);
    }
    return img;
  };

export const projects: Project[] = [
  {
    name: 'AI E-commerce Platform',
    description: 'A modern e-commerce platform featuring AI-powered product recommendations and a seamless checkout experience. Built with a focus on performance and user experience.',
    image: getImage('project-ecommerce'),
    liveUrl: '#',
    githubUrl: '#',
    skills: [
        skills.find(s => s.name === 'React')!,
        skills.find(s => s.name === 'Next.js')!,
        skills.find(s => s.name === 'TypeScript')!,
        skills.find(s => s.name === 'GenAI')!,
    ],
  },
  {
    name: 'Collaborative Whiteboard',
    description: 'A real-time collaborative whiteboard application that allows multiple users to draw and share ideas simultaneously. Utilizes WebSockets for instant updates.',
    image: getImage('project-whiteboard'),
    liveUrl: '#',
    githubUrl: '#',
    skills: [
        skills.find(s => s.name === 'React')!,
        skills.find(s => s.name === 'Node.js')!,
        skills.find(s => s.name === 'TypeScript')!,
    ],
  },
  {
    name: 'Personal Finance Tracker',
    description: 'A comprehensive personal finance tracker to manage budgets, expenses, and investments. Features data visualization to help users understand their spending habits.',
    image: getImage('project-finance'),
    githubUrl: '#',
    skills: [
        skills.find(s => s.name === 'React')!,
        skills.find(s => s.name === 'MongoDB')!,
        skills.find(s => s.name === 'Node.js')!,
    ],
  },
];
