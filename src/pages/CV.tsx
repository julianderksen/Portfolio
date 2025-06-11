
import { useState, useEffect } from 'react';
import { Download, Calendar, MapPin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const CV = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const workExperience = [
    {
      title: "Software Developer (Stage)",
      company: "CoST ICT / Milaan, Italië",
      period: "Feb 2024 – Jul 2024",
      description: [
        "Bestaande codebases binnen verschillende projecten gedocumenteerd en geanalyseerd",
        "Ervaring opgedaan in een internationale, professionele werkomgeving met focus op softwarekwaliteit"
      ]
    },
    {
      title: "Vulploegmedewerker",
      company: "Albert Heijn / Zandvoort",
      period: "Okt 2021 – Jul 2023",
      description: [
        "Winkelvoorraad aangevuld en gecontroleerd, met focus op efficiëntie en klantgerichtheid",
        "Teamwerk, verantwoordelijkheid en punctualiteit ontwikkeld"
      ]
    },
    {
      title: "IT Snuffelstage",
      company: "Unified / Nederland",
      period: "1 dag in 2020",
      description: [
        "Servers gedemonteerd en inzicht gekregen in de opbouw en werking van IT-hardware"
      ]
    }
  ];

  const education = [
    {
      title: "MBO Software Developer",
      institution: "Nova College",
      period: "Feb 2023 – Feb 2026",
      description: "MBO Software Developer (niveau 4) met ervaring in HTML/CSS, PHP, Laravel en C#. Passie voor auto's en techniek. Leergierig, nauwkeurig en altijd op tijd. Na deze opleiding wil ik verder studeren aan de IVA. Op zoek naar een uitdagende stage"
    },
    {
      title: "MAVO Economie",
      institution: "Mendelcollege",
      period: "Aug 2018 – Mei 2022",
      description: "Afgerond met focus op economie en bedrijfskunde"
    }
  ];

  const skills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 80 },
    { name: "PHP", level: 85 },
    { name: "Laravel", level: 75 },
    { name: "C#", level: 70 },
    { name: "React", level: 75 },
    { name: "MySQL", level: 80 },
    { name: "Git", level: 85 }
  ];

  const personalSkills = [
    "Meerdere projecten voor mijn opleiding gedaan op het gebied van webdevelopment",
    "Goed in problemen oplossen",
    "Werkt nauwkeurig",
    "Altijd op tijd",
    "Leert snel nieuwe dingen"
  ];

  const downloadCV = () => {
    // In a real implementation, this would download the actual CV PDF
    console.log("CV download triggered");
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="text-center mb-16">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Curriculum <span className="text-primary">Vitae</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                Een overzicht van mijn opleiding, werkervaring en vaardigheden
              </p>
              <Button onClick={downloadCV} size="lg" className="text-lg px-8 py-4">
                <Download className="mr-2" size={20} />
                Download CV als PDF
              </Button>
              <div className="w-20 h-1 bg-primary rounded-full mx-auto mt-8" />
            </div>

            {/* Contact Info */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Informatie</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-primary" size={20} />
                    <span>Zandvoort, Nederland</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-primary" size={20} />
                    <span>191808@novacollege.nl</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-primary" size={20} />
                    <span>06 42766855</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Work Experience */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Werkervaring</h2>
                <div className="space-y-8">
                  {workExperience.map((job, index) => (
                    <Card 
                      key={index}
                      className={`transition-all duration-500 hover:shadow-lg ${
                        isVisible ? 'animate-slide-in-left' : 'opacity-0'
                      }`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <CardHeader>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <CardTitle className="text-xl">{job.title}</CardTitle>
                          <Badge variant="outline" className="flex items-center gap-1 w-fit">
                            <Calendar size={14} />
                            {job.period}
                          </Badge>
                        </div>
                        <p className="text-primary font-medium">{job.company}</p>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {job.description.map((item, i) => (
                            <li key={i} className="text-muted-foreground flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Opleiding</h2>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <Card 
                      key={index}
                      className={`transition-all duration-500 hover:shadow-lg ${
                        isVisible ? 'animate-slide-in-left' : 'opacity-0'
                      }`}
                      style={{ animationDelay: `${(index + workExperience.length) * 200}ms` }}
                    >
                      <CardHeader>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <CardTitle className="text-xl">{edu.title}</CardTitle>
                          <Badge variant="outline" className="flex items-center gap-1 w-fit">
                            <Calendar size={14} />
                            {edu.period}
                          </Badge>
                        </div>
                        <p className="text-primary font-medium">{edu.institution}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{edu.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Technical Skills */}
              <Card className={`transition-all duration-500 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
                <CardHeader>
                  <CardTitle className="text-2xl">Technische Vaardigheden</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                        style={{ 
                          animation: `scale-in 1s ease-out ${index * 100}ms both`
                        }}
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Personal Skills */}
              <Card className={`transition-all duration-500 ${isVisible ? 'animate-slide-in-right delay-300' : 'opacity-0'}`}>
                <CardHeader>
                  <CardTitle className="text-2xl">Persoonlijke Vaardigheden</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {personalSkills.map((skill, index) => (
                      <li key={index} className="text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* About Me Summary */}
              <Card className={`transition-all duration-500 ${isVisible ? 'animate-slide-in-right delay-500' : 'opacity-0'}`}>
                <CardHeader>
                  <CardTitle className="text-2xl">Over Mij</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Als MBO Software Developer ben ik gepassioneerd over technologie en 
                    continue ontwikkeling. Ik heb ervaring opgedaan in verschillende 
                    programmeeromgevingen en ben altijd bereid om nieuwe uitdagingen aan te gaan. 
                    Mijn doel is om na mijn huidige opleiding verder te studeren en me te 
                    specialiseren in software development.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CV;
