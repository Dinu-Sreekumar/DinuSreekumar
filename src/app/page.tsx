import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/app/sections/hero";
import Skills from "@/app/sections/skills";
import Projects from "@/app/sections/projects";
import Contact from "@/app/sections/contact";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
