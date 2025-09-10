import { skills } from '@/lib/portfolio-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  return (
    <section id="skills" className="bg-background-muted py-20 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            My Skillset
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            A selection of technologies I am proficient in.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-8">
          {skills.map((skill) => (
            <Card
              key={skill.name}
              className="group transform text-center transition-all duration-300 hover:-translate-y-2 hover:bg-primary/5 hover:border-primary/50"
            >
              <CardContent className="flex flex-col items-center justify-center p-6">
                <skill.icon className="h-12 w-12 text-primary transition-colors group-hover:text-accent-foreground" />
                <p className="mt-4 font-semibold">{skill.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
