
import { useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mock portfolio data - replace with real GitHub API integration
  const projects = [
    {
      id: 1,
      name: "Portfolio Website",
      description: "Een moderne, responsieve portfolio website gebouwd met React en TypeScript.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com/julianderksen/portfolio",
      liveUrl: "#",
      featured: true
    },
    {
      id: 2,
      name: "E-commerce Platform",
      description: "Volledig functioneel e-commerce platform met betalingsintegratie en admin dashboard.",
      techStack: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      githubUrl: "https://github.com/julianderksen/ecommerce",
      liveUrl: "#",
      featured: true
    },
    {
      id: 3,
      name: "Task Management App",
      description: "Intuïtieve taakbeheer applicatie met real-time updates en team samenwerking.",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      githubUrl: "https://github.com/julianderksen/taskmanager",
      liveUrl: "#",
      featured: false
    },
    {
      id: 4,
      name: "Weather Dashboard",
      description: "Interactief weer dashboard met gedetailleerde voorspellingen en visualisaties.",
      techStack: ["JavaScript", "Chart.js", "API Integration", "CSS3"],
      githubUrl: "https://github.com/julianderksen/weather-dashboard",
      liveUrl: "#",
      featured: false
    },
    {
      id: 5,
      name: "Blog CMS",
      description: "Content Management System voor blogs met rijke tekstbewerking en SEO optimalisatie.",
      techStack: ["C#", ".NET Core", "SQL Server", "Bootstrap"],
      githubUrl: "https://github.com/julianderksen/blog-cms",
      liveUrl: "#",
      featured: false
    },
    {
      id: 6,
      name: "Fitness Tracker",
      description: "Mobiele fitness applicatie met workout tracking en voortgang visualisatie.",
      techStack: ["React Native", "Firebase", "Redux", "TypeScript"],
      githubUrl: "https://github.com/julianderksen/fitness-tracker",
      liveUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Mijn <span className="text-primary">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Een selectie van mijn recente projecten, waarbij ik verschillende technologieën 
              en frameworks heb gebruikt om innovatieve oplossingen te creëren.
            </p>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto mt-8" />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Uitgelichte Projecten</h2>
            <p className="text-muted-foreground">Mijn meest recente en uitgebreide werken</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.id}
                className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.name}
                      </CardTitle>
                      <CardDescription className="mt-2 text-base">
                        {project.description}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="ml-4">Featured</Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex gap-3">
                  <Button size="sm" className="flex items-center gap-2">
                    <Github size={16} />
                    GitHub
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <ExternalLink size={16} />
                    Live Demo
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Alle Projecten</h2>
            <p className="text-muted-foreground">Een overzicht van al mijn werk en experimenten</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={project.id}
                className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + featuredProjects.length) * 100}ms` }}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pb-3">
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.techStack.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="pt-0 flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 flex items-center gap-2 justify-center">
                    <Github size={14} />
                    Code
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 flex items-center gap-2 justify-center">
                    <ExternalLink size={14} />
                    Demo
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Laten we samenwerken
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Heb je een interessant project in gedachten? Ik sta altijd open voor nieuwe 
            uitdagingen en spannende samenwerkingen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4">
              Contact opnemen
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Bekijk mijn CV
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
