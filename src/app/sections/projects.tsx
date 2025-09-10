"use client";

import { useState, useEffect, useMemo } from 'react';
import ProjectCard from '@/components/project-card';
import { projects, skills as allSkills } from '@/lib/portfolio-data';
import { getProjectSkillSuggestions } from '@/app/actions';
import type { SuggestSkillsForProjectsOutput } from '@/ai/flows/suggest-skills-for-projects';
import { Skeleton } from '@/components/ui/skeleton';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent } from '@/components/ui/card';
import { BotMessageSquare } from 'lucide-react';

const Projects = () => {
  const [suggestedSkills, setSuggestedSkills] = useState<SuggestSkillsForProjectsOutput>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const suggestions = await getProjectSkillSuggestions();
        setSuggestedSkills(suggestions);
      } catch (error) {
        console.error('Failed to get skill suggestions:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSuggestions();
  }, []);

  const handleSkillToggle = (skillName: string, checked: boolean) => {
    setSelectedSkills((prev) =>
      checked ? [...prev, skillName] : prev.filter((s) => s !== skillName)
    );
  };

  const filteredProjects = useMemo(() => {
    if (selectedSkills.length === 0) {
      return projects;
    }
    const projectsWithSkills = projects.map(project => {
        const suggestion = suggestedSkills.find(s => s.projectName === project.name);
        return {
            ...project,
            aiSkills: suggestion ? suggestion.suggestedSkills : [],
        };
    });

    return projectsWithSkills.filter(project => 
        selectedSkills.every(skill => project.aiSkills.includes(skill))
    );
  }, [selectedSkills, suggestedSkills]);

  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            My Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            A showcase of my recent work. Use the AI-powered filter to find projects by skill.
          </p>
        </div>

        <Card className="my-12 bg-card/50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <BotMessageSquare className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Teachable Moments</h3>
                <p className="text-foreground/80 mb-4">
                  Which projects demonstrate these skills? Select one or more to find out.
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {allSkills.map((skill) => (
                    <div key={skill.name} className="flex items-center space-x-2">
                      <Checkbox
                        id={skill.name}
                        onCheckedChange={(checked) => handleSkillToggle(skill.name, checked as boolean)}
                        checked={selectedSkills.includes(skill.name)}
                      />
                      <Label htmlFor={skill.name} className="font-medium cursor-pointer">
                        {skill.name}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex flex-col space-y-3">
                  <Skeleton className="h-[225px] w-full rounded-xl" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                </div>
              ))
            : filteredProjects.map((project) => (
                <ProjectCard
                  key={project.name}
                  project={project}
                  isHighlighted={selectedSkills.length > 0}
                />
              ))}
        </div>
        {!isLoading && filteredProjects.length === 0 && (
            <div className="text-center col-span-full mt-8 text-foreground/80">
                <p>No projects match the selected skill combination according to the AI analysis.</p>
                <p>Try selecting fewer skills.</p>
            </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
