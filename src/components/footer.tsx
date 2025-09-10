import { Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
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
    <footer className="border-t border-border/50">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex space-x-4">
          {socialLinks.map((link) => (
            <Button key={link.href} variant="ghost" size="icon" asChild>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <link.icon className="h-5 w-5" />
                <span className="sr-only">{link.label}</span>
              </a>
            </Button>
          ))}
        </div>
        <p className="text-sm text-foreground/60">
          © {new Date().getFullYear()} Dinu Sreekumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
