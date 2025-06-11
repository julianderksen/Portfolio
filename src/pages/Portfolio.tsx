
import { useState, useEffect } from 'react';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useQuery } from '@tanstack/react-query';
import { fetchGitHubRepos, getTechStackFromRepo, type GitHubRepo } from '@/services/githubService';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const { data: repos = [], isLoading, error } = useQuery({
    queryKey: ['github-repos', 'julianderksen'],
    queryFn: () => fetchGitHubRepos('julianderksen'),
  });

  const featuredRepos = repos.slice(0, 4);
  const otherRepos = repos.slice(4, 10);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('nl-NL', {
      year: 'numeric',
      month: 'short'
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-gray-600">Projecten laden...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Er is een fout opgetreden bij het laden van de projecten.</p>
          <Button onClick={() => window.location.reload()}>
            Probeer opnieuw
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-5xl lg:text-6xl font-light text-black leading-tight tracking-tight mb-6">
              MIJN
              <br />
              PROJECTEN
            </h1>
            <div className="w-16 h-px bg-black mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Een selectie van mijn recente projecten van GitHub, waarin ik verschillende technologieën 
              en frameworks heb gebruikt om innovatieve oplossingen te creëren.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredRepos.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-px bg-black" />
                <h2 className="text-sm tracking-widest uppercase text-gray-600 font-light">
                  Uitgelichte Projecten
                </h2>
              </div>
              <h3 className="text-3xl lg:text-4xl font-light text-black">
                RECENTE WERKEN
              </h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {featuredRepos.map((repo, index) => (
                <Card 
                  key={repo.id}
                  className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-gray-200 ${
                    isVisible ? 'animate-scale-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl font-light text-black group-hover:text-gray-700 transition-colors tracking-wide">
                          {repo.name.replace(/-/g, ' ').toUpperCase()}
                        </CardTitle>
                        <CardDescription className="mt-2 text-base text-gray-600 font-light">
                          {repo.description || 'Geen beschrijving beschikbaar'}
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-3 ml-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Star size={14} />
                          <span>{repo.stargazers_count}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork size={14} />
                          <span>{repo.forks_count}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-400 mt-2">
                      Laatst bijgewerkt: {formatDate(repo.updated_at)}
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {getTechStackFromRepo(repo).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs border-gray-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="flex items-center gap-2 bg-black text-white hover:bg-gray-800"
                      onClick={() => window.open(repo.html_url, '_blank')}
                    >
                      <Github size={16} />
                      GitHub
                    </Button>
                    {repo.homepage && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center gap-2 border-black text-black hover:bg-black hover:text-white"
                        onClick={() => window.open(repo.homepage!, '_blank')}
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Projects Grid */}
      {otherRepos.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-px bg-black" />
                <h2 className="text-sm tracking-widest uppercase text-gray-600 font-light">
                  Alle Projecten
                </h2>
              </div>
              <h3 className="text-3xl lg:text-4xl font-light text-black">
                OVERIGE WERKEN
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherRepos.map((repo, index) => (
                <Card 
                  key={repo.id}
                  className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-200 ${
                    isVisible ? 'animate-scale-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${(index + featuredRepos.length) * 100}ms` }}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-light text-black group-hover:text-gray-700 transition-colors tracking-wide">
                      {repo.name.replace(/-/g, ' ').toUpperCase()}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600 font-light">
                      {repo.description || 'Geen beschrijving beschikbaar'}
                    </CardDescription>
                    <div className="flex items-center gap-3 text-xs text-gray-400 mt-2">
                      <div className="flex items-center gap-1">
                        <Star size={12} />
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <span>{formatDate(repo.updated_at)}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pb-3">
                    <div className="flex flex-wrap gap-1">
                      {getTechStackFromRepo(repo).slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs border-gray-300">
                          {tech}
                        </Badge>
                      ))}
                      {getTechStackFromRepo(repo).length > 3 && (
                        <Badge variant="outline" className="text-xs border-gray-300">
                          +{getTechStackFromRepo(repo).length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>

                  <CardFooter className="pt-0 flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 flex items-center gap-2 justify-center border-black text-black hover:bg-black hover:text-white"
                      onClick={() => window.open(repo.html_url, '_blank')}
                    >
                      <Github size={14} />
                      Code
                    </Button>
                    {repo.homepage && (
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1 flex items-center gap-2 justify-center border-black text-black hover:bg-black hover:text-white"
                        onClick={() => window.open(repo.homepage!, '_blank')}
                      >
                        <ExternalLink size={14} />
                        Demo
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-light text-black mb-6 tracking-tight">
            LATEN WE SAMENWERKEN
          </h2>
          <div className="w-16 h-px bg-black mx-auto mb-6" />
          <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
            Heb je een interessant project in gedachten? Ik sta altijd open voor nieuwe 
            uitdagingen en spannende samenwerkingen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-gray-800 transition-all duration-300 px-8 py-6 text-sm tracking-wide uppercase font-light"
            >
              Contact opnemen
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-black text-black hover:bg-black hover:text-white transition-all duration-300 px-8 py-6 text-sm tracking-wide uppercase font-light"
            >
              Bekijk mijn CV
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
