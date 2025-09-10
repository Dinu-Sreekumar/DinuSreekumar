import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
    const socialLinks = [
        {
          href: 'https://github.com/dinusreekumar',
          icon: Github,
          label: 'GitHub',
        },
        {
          href: 'https://linkedin.com/in/dinusreekumar',
          icon: Linkedin,
          label: 'LinkedIn',
        },
      ];

  return (
    <section id="contact" className="bg-background-muted py-20 sm:py-24">
      <div className="container mx-auto max-w-2xl text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Get In Touch
        </h2>
        <p className="mt-4 text-lg text-foreground/80">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out.
        </p>
        <div className="mt-8">
            <Button asChild size="lg" className="text-lg">
                <a href="mailto:dinu.sreekumar@example.com">
                    <Mail className="mr-2 h-5 w-5" />
                    dinu.sreekumar@example.com
                </a>
            </Button>
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          {socialLinks.map((link) => (
            <Button key={link.href} variant="ghost" size="icon" asChild>
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary">
                <link.icon className="h-6 w-6" />
                <span className="sr-only">{link.label}</span>
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
