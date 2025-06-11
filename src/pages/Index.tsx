
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient">
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg"
            alt="Hero achtergrond"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-background/30" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Hero content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Julian
              <br />
              <span className="text-primary">Derksen</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 font-light">
              Software Developer
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-4" onClick={scrollToAbout}>
                Meer over mij
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Bekijk mijn werk
              </Button>
            </div>
          </div>

          {/* Right side - Profile image placeholder */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-border/50">
                <div className="text-center text-muted-foreground">
                  <div className="w-32 h-32 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-4xl font-semibold">JD</span>
                  </div>
                  <p className="text-sm">Vervang met je eigen foto</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary/5 rounded-full blur-lg" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm mb-2">Scroll omlaag</span>
            <ChevronDown size={20} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                  Over Mij
                </h2>
                <div className="w-20 h-1 bg-primary rounded-full" />
              </div>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Als ervaren Software Developer ben ik gepassioneerd over het creëren van 
                  innovatieve digitale oplossingen. Met een solide achtergrond in web development 
                  en een sterke focus op kwaliteit, breng ik technische expertise en creativiteit 
                  samen in elk project.
                </p>
                <p>
                  Momenteel werk ik als MBO Software Developer (niveau 4) met ervaring in 
                  HTML/CSS, PHP, Laravel en C#. Ik ben altijd op zoek naar nieuwe uitdagingen 
                  en mogelijkheden om mijn vaardigheden te ontwikkelen in een professionele omgeving.
                </p>
                <p>
                  Mijn passie ligt in het oplossen van complexe problemen, het leren van nieuwe 
                  technologieën en het leveren van hoogwaardige software die echt verschil maakt.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-4">
                  Download CV
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  Contact opnemen
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="text-2xl font-bold text-primary mb-2">4+</div>
                  <div className="text-sm text-muted-foreground">Jaren ervaring</div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="text-2xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Projecten voltooid</div>
                </div>
              </div>
              <div className="space-y-6 mt-8">
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="text-2xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Technologieën</div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="text-2xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Tevredenheid</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
