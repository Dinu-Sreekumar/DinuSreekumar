
import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';
import { Nodejs, Mongodb, TypescriptIcon, Python, Pandas, Seaborn, GoogleColab, Jupyter, Numpy, ScikitLearn, Plotly } from '@/components/icons';
import { LineChart, FileSpreadsheet, Code } from 'lucide-react';

export type Skill = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
};

export type Project = {
  name: string;
  description: string;
  images: ImagePlaceholder[];
  liveUrl?: string;
  githubUrl: string;
  skills: string[];
  carouselAutoplayDelay?: number | number[];
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
  { name: 'Jupyter', icon: Jupyter },
  { name: 'NumPy', icon: Numpy },
  { name: 'Scikit-learn', icon: ScikitLearn },
  { name: 'Plotly', icon: Plotly },
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
    description: 'This project is a personal finance tracker built entirely in Python, utilizing the power of Pandas for data manipulation and Matplotlib/Seaborn for creating insightful visualizations. It allows users to log income and expense transactions, categorize them, and gain a clear understanding of their financial health through various charts',
    images: [
        getImage('finance-monthly-summary'),
        getImage('finance-expense-pie'),
        getImage('finance-cumulative-balance'),
    ],
    githubUrl: 'https://github.com/Dinu-Sreekumar/Python-Finance-Tracker',
    skills: [
        'Python',
        'Pandas',
        'Matplotlib',
        'Seaborn',
        'Google Colab',
        'CSV',
    ],
    carouselAutoplayDelay: 4000,
  },
  {
    name: 'Customer Churn Prediction',
    description: 'This project demonstrates the end-to-end process of building and evaluating a machine learning model to predict customer churn for a telecom company. Leveraging Python, Pandas, and Scikit-learn, this project covers essential data science steps from initial data loading and extensive preprocessing to model training (using a Random Forest Classifier) and comprehensive performance evaluation, culminating in identifying key factors influencing churn.',
    images: [
      getImage('churn-prediction-model-performance'),
      getImage('churn-prediction-confusion-matrix'),
      getImage('churn-prediction-feature-importance'),
    ],
    githubUrl: 'https://github.com/Dinu-Sreekumar/Customer-Churn-Prediction',
    skills: [
        'Python',
        'Pandas',
        'Google Colab',
        'CSV',
        'Scikit-learn',
    ],
    carouselAutoplayDelay: [5000, 4000],
  }
];
