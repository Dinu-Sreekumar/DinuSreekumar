import ProjectCard from '@/components/project-card';
import { projects } from '@/lib/portfolio-data';

const Projects = () => {
  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            My Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            A showcase of my recent work.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
              isHighlighted={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
