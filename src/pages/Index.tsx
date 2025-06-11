
import { useEffect, useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gray-50" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Hero content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-8xl font-light text-black leading-none tracking-tight">
                  JULIAN
                  <br />
                  DERKSEN
                </h1>
                <div className="w-16 h-px bg-black" />
              </div>
              
              <p className="text-xl text-gray-600 font-light tracking-wide uppercase">
                Software Developer
              </p>
              
              <div className="flex items-center gap-8 pt-8">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-transparent border-black text-black hover:bg-black hover:text-white transition-all duration-300 px-8 py-6 text-sm tracking-wide uppercase font-light"
                  onClick={scrollToAbout}
                >
                  Meer over mij
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right side - Minimalist design element */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="w-32 h-32 mx-auto mb-4 border border-gray-200 flex items-center justify-center">
                    <span className="text-2xl font-light tracking-wider">JD</span>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 border border-gray-300" />
              <div className="absolute bottom-4 left-4 w-4 h-4 bg-black" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center text-gray-400 hover:text-black transition-colors"
          >
            <span className="text-xs mb-4 tracking-widest uppercase">Scroll</span>
            <ChevronDown size={16} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-px bg-black" />
                  <h2 className="text-sm tracking-widest uppercase text-gray-600 font-light">
                    Over Mij
                  </h2>
                </div>
                <h3 className="text-4xl lg:text-6xl font-light text-black leading-tight">
                  SOFTWARE
                  <br />
                  DEVELOPER
                </h3>
              </div>
              
              <div className="space-y-8 text-gray-600 leading-relaxed">
                <p className="text-lg font-light">
                  Als ervaren Software Developer ben ik gepassioneerd over het creëren van 
                  innovatieve digitale oplossingen. Met een solide achtergrond in web development 
                  en een sterke focus op kwaliteit, breng ik technische expertise en creativiteit 
                  samen in elk project.
                </p>
                <p className="text-lg font-light">
                  Momenteel werk ik als MBO Software Developer (niveau 4) met ervaring in 
                  HTML/CSS, PHP, Laravel en C#. Ik ben altijd op zoek naar nieuwe uitdagingen 
                  en mogelijkheden om mijn vaardigheden te ontwikkelen in een professionele omgeving.
                </p>
                <p className="text-lg font-light">
                  Mijn passie ligt in het oplossen van complexe problemen, het leren van nieuwe 
                  technologieën en het leveren van hoogwaardige software die echt verschil maakt.
                </p>
              </div>

              <div className="flex gap-8 pt-8">
                <Button 
                  className="bg-black text-white hover:bg-gray-800 transition-all duration-300 px-8 py-6 text-sm tracking-wide uppercase font-light"
                >
                  Download CV
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-transparent border-black text-black hover:bg-black hover:text-white transition-all duration-300 px-8 py-6 text-sm tracking-wide uppercase font-light"
                >
                  Contact
                </Button>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="minimal-card p-8 text-center">
                  <div className="text-3xl font-light text-black mb-2">4+</div>
                  <div className="text-xs text-gray-500 tracking-widest uppercase">Jaren ervaring</div>
                </div>
                <div className="minimal-card p-8 text-center">
                  <div className="text-3xl font-light text-black mb-2">10+</div>
                  <div className="text-xs text-gray-500 tracking-widest uppercase">Projecten</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="minimal-card p-8 text-center">
                  <div className="text-3xl font-light text-black mb-2">5+</div>
                  <div className="text-xs text-gray-500 tracking-widest uppercase">Technologieën</div>
                </div>
                <div className="minimal-card p-8 text-center">
                  <div className="text-3xl font-light text-black mb-2">100%</div>
                  <div className="text-xs text-gray-500 tracking-widest uppercase">Tevredenheid</div>
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
