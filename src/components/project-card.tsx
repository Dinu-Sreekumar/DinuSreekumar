import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Project, Skill } from '@/lib/portfolio-data';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type ProjectCardProps = {
  project: Project;
  isHighlighted: boolean;
};

const ProjectCard = ({ project, isHighlighted }: ProjectCardProps) => {
  return (
    <Card
      className={cn(
        'flex h-full flex-col overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-primary/20 hover:shadow-2xl',
        isHighlighted ? 'border-primary shadow-primary/10' : 'border-border'
      )}
    >
      <CardHeader className="p-0">
        <div className="aspect-video overflow-hidden">
          <Image
            src={project.image.imageUrl}
            alt={project.image.description}
            data-ai-hint={project.image.imageHint}
            width={600}
            height={400}
            className="h-full w-full object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-6">
        <CardTitle className="mb-2">{project.name}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex-col items-start gap-4 p-6 pt-0">
        <div className="flex flex-wrap gap-2">
            {project.skills.map((skill: Skill) => (
                <Badge key={skill.name} variant="secondary">{skill.name}</Badge>
            ))}
        </div>
        <div className="flex w-full items-center justify-between">
            <div className='flex gap-2'>
                <Button variant="outline" size="icon" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                    </a>
                </Button>
                {project.liveUrl && (
                    <Button variant="outline" size="icon" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                            <span className="sr-only">Live Demo</span>
                        </a>
                    </Button>
                )}
            </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
