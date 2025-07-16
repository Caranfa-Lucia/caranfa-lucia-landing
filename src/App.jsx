import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, ExternalLink, Code, User, MapPin, Calendar, Award, Briefcase, GraduationCap, Laptop, Globe } from 'lucide-react';
import profileImage from './assets/caranfa-lucia.jpeg';

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const skills = [
    { name: 'React.js', icon: '⚛️', level: 85 },
    { name: 'JavaScript', icon: '🟨', level: 80 },
    { name: 'HTML/CSS', icon: '🎨', level: 90 },
    { name: 'Styled Components', icon: '💅', level: 85 },
    { name: 'Material-UI', icon: '🎯', level: 85 },
    { name: 'Git', icon: '🔧', level: 80 },
    { name: 'Figma', icon: '🎨', level: 70 },
    { name: 'SCRUM', icon: '🔄', level: 80 }
  ];

  const experiences = [
    {
      company: 'Contabilium',
      position: 'Desarrolladora Web Front-end',
      period: 'Agosto 2023 - Presente',
      description: 'Desarrollo de componentes reutilizables en React JS, diseño responsivo con Styled Components, implementación de Material-UI, integración con APIs REST.',
      technologies: ['React.js', 'Styled Components', 'Material-UI', 'JavaScript', 'Git', 'Figma', 'SCRUM']
    }
  ];

  const education = [
    {
      institution: 'Talento Tech',
      program: 'Desarrollador Front End - React JS',
      period: 'Marzo 2025 - Julio 2025',
      status: 'Completado'
    },
    {
      institution: 'Programa Codo a Codo',
      program: 'Node JS Fullstack',
      period: 'Febrero 2024 - Julio 2024',
      status: 'Completado'
    },
    {
      institution: 'Programa Codo a Codo',
      program: 'QA Tester Jr',
      period: 'Febrero 2023 - Julio 2023',
      status: 'Completado'
    },
    {
      institution: 'Programa BA multiplica 2.0',
      program: 'Programación Web Front-end Developer',
      period: 'Octubre 2022 - Diciembre 2022',
      status: 'Completado'
    },
    {
      institution: 'Argentina Programa',
      program: '#YoProgramo',
      period: 'Febrero 2022 - Septiembre 2022',
      status: 'Completado'
    },
    {
      institution: 'Argentina Programa',
      program: '#SeProgramar',
      period: 'Agosto 2021 - Octubre 2021',
      status: 'Completado'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-teal-900 to-blue-800">

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/10 backdrop-blur-lg' : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Caranfa Lucía Paula Denise
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'highlights', 'education', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 hover:text-cyan-400 ${activeSection === section ? 'text-cyan-400' : 'text-white'
                    }`}
                >
                  {section === 'home' ? 'Inicio' :
                    section === 'about' ? 'Sobre mí' :
                      section === 'experience' ? 'Experiencia' :
                        section === 'highlights' ? 'Destacados' :
                          section === 'education' ? 'Educación' :
                            section === 'projects' ? 'Proyectos' : 'Contacto'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-800/20 to-cyan-800/20"></div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Hola, soy{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Luli
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-teal-200 mb-6">
                Front-end Developer • React JS • JavaScript • AI
              </p>
              <p className="text-lg text-teal-100 mb-8 max-w-2xl">
                Desarrolladora front-end especializada en React JS con experiencia laboral en Contabilium.
                Me apasiona crear interfaces modernas, reutilizables y responsivas que brinden
                experiencias excepcionales a los usuarios.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Mail size={20} />
                  Contactar
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:bg-white/20 flex items-center justify-center gap-2"
                >
                  <Code size={20} />
                  Ver Proyectos
                </button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 transform hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-teal-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    {/* <User size={48} className="text-white" /> */}
                    <img src={profileImage} alt="profile image" className="w-32 h-32 rounded-full" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Lucía Paula Denise Caranfa</h3>
                  <p className="text-teal-200 mb-4">Web Responsive Developer</p>
                  <div className="flex items-center justify-center gap-2 text-teal-200">
                    <MapPin size={16} />
                    <span>CABA, Buenos Aires, Argentina</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Sobre mí</h2>
            <p className="text-xl text-teal-200 max-w-3xl mx-auto">
              Soy una desarrolladora apasionada por la tecnología y el aprendizaje continuo.
              Me considero expeditiva, versátil, enérgica y capaz de aprender de forma rápida y efectiva.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Habilidades Blandas</h3>
                <p className="text-teal-200">
                  Me destaco por mi trato interpersonal, lo que facilita el trabajo en equipo y la toma de liderazgo.
                  Soy detallista, atenta, organizada y extrovertida. Me motiva crecer personal y profesionalmente.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Objetivos</h3>
                <p className="text-teal-200">
                  Estoy centrada en seguir explorando mi carrera como desarrolladora, profundizar mis conocimientos en React,
                  apuntando a próximos pasos en React Native, y la implementación de IA en mis proyectos.
                  Aspiro a perfeccionar la optimización y eficiencia del código para brindar productos de mayor calidad.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Habilidades Técnicas</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="text-white font-semibold">{skill.name}</span>
                      </div>
                      <span className="text-teal-300">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-cyan-400 to-teal-400 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Experiencia</h2>
            <p className="text-xl text-teal-200">Mi trayectoria profesional como desarrolladora</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-cyan-400 to-teal-600 p-3 rounded-full">
                    <Briefcase size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
                        <p className="text-xl text-teal-300">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-teal-200 mt-2 lg:mt-0">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-teal-200 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gradient-to-r from-cyan-500/20 to-teal-600/20 border border-cyan-400/30 text-cyan-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement & Language Section */}
      <section id="highlights" className="py-20 bg-gradient-to-r from-yellow-500/10 to-orange-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Destacados</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
            {/* Logro destacado */}
            <div className="flex-1 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-8 md:mb-0 flex flex-col items-center text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6">
                <Award size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">Liderazgo y Resultados Exitosos</h3>
              <p className="text-xl text-teal-200 leading-relaxed mb-6">
                Uno de los logros que más valoro en la empresa fue haber liderado a mi equipo durante un mes y haber llevado adelante un proyecto que obtuvo resultados muy satisfactorios.
              </p>
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 px-6 py-3 rounded-full">
                  <span className="text-yellow-300 font-semibold">Proyecto Exitoso</span>
                </div>
              </div>
            </div>
            {/* Idioma destacado */}
            <div className="flex-1 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 flex flex-col items-center text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-6">
                <Globe size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">Inglés Avanzado</h3>
              <p className="text-xl text-teal-200 leading-relaxed mb-6">
                Nivel C1 en lectura y escritura, B2 en habla.<br />
                <a href="https://cert.efset.org/BSaeYx" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline hover:text-cyan-400 transition">Certificado EFSET English Certificate 66/100 (C1 Advanced)</a>.<br />
                Certificado English Discoveries - Intermediate 1.
              </p>
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 px-6 py-3 rounded-full">
                  <span className="text-cyan-300 font-semibold">Inglés C1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Educación</h2>
            <p className="text-xl text-teal-200">Mi formación académica y profesional</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-blue-400 to-teal-600 p-3 rounded-full">
                    <Laptop size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{edu.program}</h3>
                    <p className="text-xl text-teal-300 flex items-center gap-2">{edu.institution} <span className="md:hidden"><GraduationCap size={36} className="text-cyan-300 w-9 h-9" /></span></p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-teal-200 text-sm">
                        <Calendar size={14} />
                        <span>{edu.period}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs ${edu.status === 'En curso'
                        ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-400/30'
                        : 'bg-green-500/20 text-green-300 border border-green-400/30'
                        }`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licencias y Certificaciones */}
      <section id="certifications" className="py-20 bg-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Licencias y Certificaciones</h2>
            <p className="text-2xl text-teal-200">Certificados y licencias obtenidas</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Tarjeta ejemplo */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 flex flex-col gap-6 items-center text-center">
              <GraduationCap size={36} className="text-cyan-300 mb-2" />
              <h3 className="text-2xl font-bold text-white mb-2">Construí Tu Futuro - Trabajo en equipo en el ámbito laboral</h3>
              <p className="text-lg text-teal-200">Ministerio de Educación Ciudad Autónoma de Buenos Aires</p>
              <div className="flex flex-wrap gap-4 text-base text-teal-100 justify-center">
                <span>Expedición: jul. 2025</span>
                <span>Vencimiento: jul. 2027</span>
              </div>
              <div className="flex flex-wrap gap-4 text-lg text-teal-100 font-semibold justify-center">
                <span>Aptitudes: Trabajo en equipo</span>
              </div>
              <a href="https://openbadgefactory.com/v1/assertion/dd3013c0caf0693bcf7f702c18ce3e825c3471e1.html" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline text-lg">Mostrar credencial</a>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 flex flex-col gap-6 items-center text-center">
              <GraduationCap size={36} className="text-cyan-300 mb-2" />
              <h3 className="text-2xl font-bold text-white mb-2">Construí tu Futuro - Adaptabilidad en el ámbito laboral</h3>
              <p className="text-lg text-teal-200">Ministerio de Educación Ciudad Autónoma de Buenos Aires</p>
              <div className="flex flex-wrap gap-4 text-base text-teal-100 justify-center">
                <span>Expedición: jul. 2025</span>
                <span>Vencimiento: jul. 2027</span>
              </div>
              <div className="flex flex-wrap gap-4 text-lg text-teal-100 font-semibold justify-center">
                <span>Aptitudes: Adaptabilidad</span>
              </div>
              <a href="https://openbadgefactory.com/v1/assertion/631cdb36660d30ab099b9278ac48ce2fac913129.html" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline text-lg">Mostrar credencial</a>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 flex flex-col gap-6 items-center text-center">
              <GraduationCap size={36} className="text-cyan-300 mb-2" />
              <h3 className="text-2xl font-bold text-white mb-2">Construí tu Futuro - Gestión del tiempo</h3>
              <p className="text-lg text-teal-200">Ministerio de Educación Ciudad Autónoma de Buenos Aires</p>
              <div className="flex flex-wrap gap-4 text-base text-teal-100 justify-center">
                <span>Expedición: jul. 2025</span>
                <span>Vencimiento: jul. 2027</span>
              </div>
              <div className="flex flex-wrap gap-4 text-lg text-teal-100 font-semibold justify-center">
                <span>Aptitudes: Gestión del tiempo</span>
              </div>
              <a href="https://openbadgefactory.com/v1/assertion/c099a2fff7722f12827b3144878763423ee8704d.html" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline text-lg">Mostrar credencial</a>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 flex flex-col gap-6 items-center text-center">
              <GraduationCap size={36} className="text-cyan-300 mb-2" />
              <h3 className="text-2xl font-bold text-white mb-2">Construí Tu Futuro - Comunicación Efectiva</h3>
              <p className="text-lg text-teal-200">Ministerio de Educación Ciudad Autónoma de Buenos Aires</p>
              <div className="flex flex-wrap gap-4 text-base text-teal-100 justify-center">
                <span>Expedición: jun. 2025</span>
                <span>Vencimiento: jun. 2027</span>
              </div>
              <div className="flex flex-wrap gap-4 text-lg text-teal-100 font-semibold justify-center">
                <span>Aptitudes: Comunicación</span>
              </div>
              <a href="https://openbadgefactory.com/v1/assertion/1c215281b56f7ab6a35705fe17c09a34f5f58a10.html" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline text-lg">Mostrar credencial</a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Proyectos</h2>
            <p className="text-xl text-teal-200">Algunos de mis trabajos destacados</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-teal-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Code size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">LuliShop E-commerce</h3>
                <p className="text-teal-200 mb-6 text-lg">
                  Proyecto de e-commerce desarrollado con React.js, aplicando un diseño moderno y funcionalidades
                  completas de tienda online. Incluye carrito de compras, filtros de productos, pantallas de pago,
                  sección administrativa, y diseño responsivo.
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {['React.js', 'JavaScript', 'CSS', 'Responsive Design', 'Styled Components', 'CRUD', 'MockApi'].map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-cyan-500/20 to-teal-600/20 border border-cyan-400/30 text-cyan-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href="https://lulishop-ecommerce.netlify.app/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  <ExternalLink size={20} />
                  Ver Proyecto
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Contacto</h2>
            <p className="text-xl text-teal-200">¡Hablemos sobre nuestro próximo proyecto!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Mail size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <a
                href="mailto:luciacaranfa@gmail.com"
                className="text-teal-200 hover:text-cyan-400 transition-colors duration-200"
              >
                luciacaranfa@gmail.com
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-cyan-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Phone size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Teléfono</h3>
              <a
                href="tel:+541161774391"
                className="text-teal-200 hover:text-cyan-400 transition-colors duration-200"
              >
                +54 11 6177-4391
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Linkedin size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/lucia-caranfa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-200 hover:text-cyan-400 transition-colors duration-200"
              >
                lucia-caranfa
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Github size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">GitHub</h3>
              <a
                href="https://github.com/Caranfa-Lucia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-200 hover:text-cyan-400 transition-colors duration-200"
              >
                Caranfa-Lucia
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-teal-300">
              © 2025 Lucía Paula Denise Caranfa. Diseñado con React.js
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;