
export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
  fork: boolean;
}

export const fetchGitHubRepos = async (username: string): Promise<GitHubRepo[]> => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=20`);
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    const repos: GitHubRepo[] = await response.json();
    
    // Filter out forks and sort by stars and activity
    return repos
      .filter(repo => !repo.fork && repo.description)
      .sort((a, b) => {
        // Sort by stars first, then by update date
        if (b.stargazers_count !== a.stargazers_count) {
          return b.stargazers_count - a.stargazers_count;
        }
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      });
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
};

export const getTechStackFromRepo = (repo: GitHubRepo): string[] => {
  const techStack: string[] = [];
  
  // Add primary language
  if (repo.language) {
    techStack.push(repo.language);
  }
  
  // Add topics as tech stack
  if (repo.topics && repo.topics.length > 0) {
    techStack.push(...repo.topics.slice(0, 4)); // Limit to 4 topics
  }
  
  return techStack;
};
