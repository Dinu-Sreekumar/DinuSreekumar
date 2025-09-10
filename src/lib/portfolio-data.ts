import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';
import { Nodejs, Mongodb, TypescriptIcon, Python, Pandas, Seaborn, GoogleColab } from '@/components/icons';
import { Code, LineChart, AppWindow, Database, FileSpreadsheet } from 'lucide-react';

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
  { name: 'Python', icon: Python },
  { name: 'Pandas', icon: Pandas },
  { name: 'Matplotlib', icon: LineChart },
  { name: 'Seaborn', icon: Seaborn },
  { name: 'Google Colab', icon: GoogleColab },
  { name: 'CSV', icon: FileSpreadsheet },
  { name: 'React', icon: Code },
  { name: 'Node.js', icon: Nodejs },
  { name: 'MongoDB', icon: Mongodb },
  { name: 'TypeScript', icon: TypescriptIcon },
  { name: 'Next.js', icon: Code },
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
    name: 'Python Finance Tracker',
    description: 'A comprehensive personal finance tracker to manage budgets, expenses, and investments. Features data visualization to help users understand their spending habits.',
    image: getImage('project-finance'),
    githubUrl: 'https://github.com/Dinu-Sreekumar/Python-Finance-Tracker',
    skills: [
        skills.find(s => s.name === 'Python')!,
        skills.find(s => s.name === 'Pandas')!,
        skills.find(s => s.name === 'Matplotlib')!,
        skills.find(s => s.name === 'Seaborn')!,
        skills.find(s => s.name === 'Google Colab')!,
        skills.find(s => s.name === 'CSV')!,
    ],
  },
];
