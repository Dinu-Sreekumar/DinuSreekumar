import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const Hero = () => {
    const profileImage = PlaceHolderImages.find(p => p.id === 'dinu-sreekumar-profile');

    if (!profileImage) {
        return null;
    }

  return (
    <section id="about" className="container mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="order-2 flex justify-center md:order-1">
          <div className="relative h-64 w-64 overflow-hidden rounded-full shadow-2xl shadow-primary/20 md:h-80 md:w-80">
            <Image
              src={profileImage.imageUrl}
              alt={profileImage.description}
              data-ai-hint={profileImage.imageHint}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="order-1 text-center md:order-2 md:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Dinu Sreekumar
          </h1>
          <p className="mt-4 text-lg text-primary">
            Full-Stack Developer
          </p>
          <p className="mt-6 max-w-xl text-lg text-foreground/80 md:mx-0 mx-auto">
            I specialize in building dynamic and responsive web applications using modern technologies. Passionate about creating intuitive user experiences.
          </p>
          <div className="mt-8 flex justify-center gap-4 md:justify-start">
            <Button asChild size="lg">
              <a href="#contact">Contact Me</a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="#projects">View Projects</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
