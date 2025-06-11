
import { useState, useEffect } from 'react';
import { ExternalLink, Github, Star, GitFork, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { fetchGitHubRepos, getTechStackFromRepo, type GitHubRepo } from '@/services/githubService';

const Portfolio = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const loadRepos = async () => {
      try {
        // Replace 'your-github-username' with your actual GitHub username
        const githubRepos = await fetchGitHubRepos('julianderksen');
        setRepos(githubRepos);
      } catch (error) {
        console.error('Error loading GitHub repos:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadRepos();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('nl-NL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Header */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="text-center mb-16">
              <h1 className="text-5xl lg:text-6xl font-light text-black mb-6 tracking-tight">
                PORTFOLIO
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8 font-light">
                Een overzicht van mijn recente projecten en GitHub repositories
              </p>
              <div className="w-20 h-1 bg-black mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {isLoading ? (
            <div className="text-center py-16">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
              <p className="mt-4 text-gray-600">Projecten laden...</p>
            </div>
          ) : repos.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">Geen projecten gevonden.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {repos.map((repo, index) => {
                const techStack = getTechStackFromRepo(repo);
                
                return (
                  <Card 
                    key={repo.id}
                    className={`minimal-card group hover:shadow-lg transition-all duration-500 ${
                      isVisible ? 'animate-scale-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-xl font-medium text-black group-hover:text-gray-700 transition-colors">
                          {repo.name}
                        </CardTitle>
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-gray-600 hover:text-black"
                            onClick={() => window.open(repo.html_url, '_blank')}
                          >
                            <Github size={16} />
                          </Button>
                          {repo.homepage && (
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-gray-600 hover:text-black"
                              onClick={() => window.open(repo.homepage!, '_blank')}
                            >
                              <ExternalLink size={16} />
                            </Button>
                          )}
                        </div>
                      </div>
                      <CardDescription className="text-gray-600 font-light leading-relaxed">
                        {repo.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      {/* Tech Stack */}
                      {techStack.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {techStack.map((tech, i) => (
                            <Badge 
                              key={i} 
                              variant="outline" 
                              className="text-xs bg-gray-50 text-gray-700 border-gray-200 font-light"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      )}
                      
                      {/* Stats */}
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Star size={14} />
                            <span>{repo.stargazers_count}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <GitFork size={14} />
                            <span>{repo.forks_count}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{formatDate(repo.updated_at)}</span>
                        </div>
                      </div>
                      
                      {/* Actions */}
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 bg-transparent border-gray-300 text-gray-700 hover:bg-black hover:text-white hover:border-black transition-all duration-300 font-light"
                          onClick={() => window.open(repo.html_url, '_blank')}
                        >
                          <Github size={14} className="mr-2" />
                          Code
                        </Button>
                        {repo.homepage && (
                          <Button
                            size="sm"
                            className="flex-1 bg-black text-white hover:bg-gray-800 transition-all duration-300 font-light"
                            onClick={() => window.open(repo.homepage!, '_blank')}
                          >
                            <ExternalLink size={14} className="mr-2" />
                            Demo
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
