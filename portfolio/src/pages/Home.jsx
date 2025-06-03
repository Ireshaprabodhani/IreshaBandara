import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import devportrait from '../assets/images/1.jpg';
import edmTool from '../assets/images/3.png';
import sipNena from '../assets/images/4.jpg';
import factseeker from '../assets/images/5.png';
import onemas from '../assets/images/6.png';
import momentro from '../assets/images/7.png';
import recipe from '../assets/images/8.png';
import emailjs from "@emailjs/browser";



// Sample project data
const projectsData = [
  {
    id: 1,
    title: "EDM Builder Tool",
    category: "Software Development",
    image:edmTool,
    technologies: ["React", "Node.js", "Redux", "Express" , "Rest API ,  git , AWS" ,"Sengrid"],
    description: "An email builder with drag-and-drop UI, template system, and CI/CD deployment.",
    liveLink: "https://main.duumqbsl7gyom.amplifyapp.com/",
    githubLink: "https://github.com/Ireshaprabodhani/EDM-Builder-Tool",
    longDescription: "Built a React-based drag-and-drop email builder with Redux state management, responsive layouts, and SendGrid API integration.Added CI/CD deployment on AWS, achieving 98% rendering consistency across devices.Implemented unit tests with 85% code coverage, ensuring long-term stability.Decreased email production time for the marketing team by 75% through an intuitive UI and template system.Implemented unit tests achieving 85% code coverage, ensuring stability during feature additions"
  },
  {
    id: 2,
    title: "SipNena - Mobile Application for ASD Students",
    category: "Mobile Development",
    image: sipNena,
    technologies: ["Java", "Python", "Firebase", "CSS" ,"f"],
    description: "An educational mobile app designed to support learning for children with Autism Spectrum Disorder (ASD).",
    liveLink: "#",
    githubLink: "#",
    longDescription: "An end-of-degree project focused on the development of an educational application for children with Autism Spectrum Disorder (ASD), aged 6.Developed employing the environs of Python and Java to create an exciting environment specifically for learning by young ASD students.Modeled with the goal of improving the educational utility and children’s interactive interest through purposeful elements for their age level.Chosen by the university organizers as one of the ten best projects.Final year project selected among top 10; built with Python and Java for ASD children's learning support."
  },
  {
  id: 3,
  title: "Factseeker.lk",
  category: "Web Development",
  image: factseeker,
  technologies: ["HTML", "SASS", "jQuery", "PHP", "WordPress"],
  description: "WordPress-based website built from Figma design with custom theming and responsive UI.",
  liveLink: "https://factseeker.lk/",
  githubLink: "#",
  longDescription: `Implemented and designed the WordPress site based on the Figma design file with high fidelity to design specifications.
Developed using HTML, SASS, jQuery, and PHP to create a responsive and user-friendly interface.
Applied custom theme development for functional components while using theme-based templates for unique styling and layout.
Emphasized UX principles to ensure a seamless user experience and optimal performance across devices.`
},

 {
  id: 4,
  title: "OneMasHoldings - Intranet Site for MAS",
  category: "Web Development",
  image: onemas, 
  technologies: ["HTML", "SASS", "Bootstrap", "jQuery", "PHP", "WordPress", "ACF"],
  description: "Responsive intranet site built for MAS Holdings with custom WordPress theme and ACF integration.",
  liveLink: "https://one.masholdings.com/",
  githubLink: "#",
  longDescription: `Developed a pixel-perfect intranet site for MAS Holdings by converting Figma designs into responsive HTML using SASS, Bootstrap, and jQuery.
Integrated the frontend into a custom WordPress theme using Advanced Custom Fields (ACF) for dynamic and user-friendly content management.
Built reusable components and layout templates tailored for internal teams with role-based access and communication modules.
Ensured performance optimization, mobile responsiveness, and consistent branding across browsers and devices.`
},

 {
  id: 5,
  title: "Momentro",
  category: "Web Development",
  image: momentro, 
  technologies: ["HTML", "SASS", "Bootstrap", "jQuery", "PHP", "WordPress", "ACF"],
  description: "Responsive intranet site built for MAS Holdings with custom WordPress theme and ACF integration.",
  liveLink: "https://momentro.com/",
  githubLink: "#",
  longDescription: `Developed a pixel-perfect intranet site for MAS Holdings by converting Figma designs into responsive HTML using SASS, Bootstrap, and jQuery.
Integrated the frontend into a custom WordPress theme using Advanced Custom Fields (ACF) for dynamic and user-friendly content management.
Built reusable components and layout templates tailored for internal teams with role-based access and communication modules.
Ensured performance optimization, mobile responsiveness, and consistent branding across browsers and devices.`
},

{
  id: 6,
  title: "AI-Powered Recipe Generator",
  category: "Software Development",
  image: recipe,
  technologies: ["React", "Tailwind CSS", "Python", "OpenAI API", "Docker", "CI/CD", "AWS"],
  description: "AI-powered recipe generator using OpenAI, built with React and Python, deployed via Docker on AWS.",
  liveLink: "#", 
  githubLink: "https://github.com/Ireshaprabodhani/Recipe-Creator",
  longDescription: `Developed an AI-powered recipe generator that creates personalized recipes based on user-input ingredients.
Frontend built with React and styled using Tailwind CSS for a clean and responsive interface.
Backend powered by Python and OpenAI API to generate recipe content dynamically.
Packaged and deployed using Docker, with continuous integration and deployment (CI/CD) pipelines on AWS.
Outputs include a downloadable digital recipe book with multiple serving suggestions and cooking instructions.`
},


];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const formRef = useRef();

  const handleEmailSend = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_f1uai2r', 
      'template_a6pg8z8', 
      formRef.current,
      'xwk1xXa00YX4a03tY' 
    )
    .then((result) => {
      alert('Message sent successfully!');
      formRef.current.reset();
    }, (error) => {
      alert('Failed to send message. Please try again.');
      console.error(error);
    });
  };

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Intersection Observer to update active section on scroll
  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'contact'];
    
    const observerOptions = {
      threshold: 0.6,
      rootMargin: '0px'
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) observer.unobserve(element);
    });
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <motion.div
          className="text-4xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center">
            <motion.div
              className="w-16 h-16 border-t-4 border-blue-500 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="mt-6 text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Loading Portfolio
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 z-50 px-6 py-4 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-blue-400"
          >
            DevPortfolio
          </motion.div>
          
          {/* Desktop Menu */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex space-x-8"
          >
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize font-medium hover:text-blue-400 transition-colors ${
                  activeSection === item ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                {item}
              </button>
            ))}
          </motion.div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-gray-800 mt-2 rounded-lg overflow-hidden"
            >
              <div className="flex flex-col py-2">
                {['home', 'about', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`py-3 px-6 text-left capitalize font-medium hover:bg-gray-700 transition-colors ${
                      activeSection === item ? 'text-blue-400 bg-gray-700' : 'text-gray-300'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section 
        id="home"
        className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 opacity-70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900/40 to-gray-900 opacity-70" />
          
          {/* Animated background elements */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-500 opacity-10"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: Math.random() * 10 + 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <span className="text-white">Hello, I'm</span> <br />
                <span className="text-blue-400">Full Stack Developer</span>
              </motion.h1>
              
              <motion.div
                className="mt-6 text-xl text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                Full Stack Developer specializing in creating modern, 
                interactive web experiences with cutting-edge technologies.
              </motion.div>
              
              <motion.div
                className="mt-8 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 rounded-lg font-medium transition-colors"
                >
                  Contact Me
                </button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden md:block"
            >
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-blue-400 bg-opacity-20 mx-auto overflow-hidden">
                  <div className="w-full h-full bg-gray-700 rounded-full transform translate-y-5">
                    <img
                      src={devportrait}
                      alt="Developer Portrait" 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                
                {/* Floating tech icons */}
                {[
                  { icon: "⚛️", top: "10%", left: "0%", delay: 0 },
                  { icon: "🌐", top: "20%", right: "5%", delay: 0.2 },
                  { icon: "💻", bottom: "15%", left: "10%", delay: 0.4 },
                  { icon: "🚀", bottom: "30%", right: "0%", delay: 0.6 },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="absolute text-2xl"
                    style={{
                      top: item.top || "auto",
                      left: item.left || "auto",
                      right: item.right || "auto",
                      bottom: item.bottom || "auto",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.7, 
                      delay: 0.8 + item.delay,
                    }}
                  >
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                    >
                      {item.icon}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.7, 
            delay: 1.2,
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            onClick={() => scrollToSection('about')}
            className="cursor-pointer"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        className="py-24 min-h-screen flex items-center relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-gray-800" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/5 via-gray-900/10 to-gray-900 opacity-80" />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-blue-400">About</span> Me
            </h2>
            <div className="mt-2 h-1 w-20 bg-blue-400 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-5 gap-10 items-center">
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-purple-600/30 mix-blend-overlay z-10"></div>
                <img 
                  src={devportrait} 
                  alt="Developer" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            
            <motion.div
              className="md:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-4">
                Full Stack Developer
              </h3>
              
              <p className="text-gray-300 mb-6">
                With over 3 years of experience in software development and web development, I specialize in building 
                responsive, accessible, and performant web applications and websites. My passion lies in 
                creating intuitive user interfaces with seamless user experiences.
              </p>
              
              <p className="text-gray-300 mb-6">
                I specialize in building modern web applications using JavaScript frameworks, particularly React. 
                I have extensive experience in backend development with Node.js, and I'm proficient in database design, RESTful API development, and cloud deployment. 
                In addition to my full-stack expertise, I have hands-on experience developing custom WordPress websites 
                and themes, utilizing HTML, CSS, JavaScript, jQuery, and SCSS to create responsive and user-friendly interfaces.
              </p>
             

              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4">Technical Skills</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {[
                    "HTML",
                    "CSS", 
                    "JavaScript",
                    "React",
                    "Node.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "MongoDB",
                    "WordPress",
                    "PHP",
                    "Git",
                    "AWS",
                  ].map((skill, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                      viewport={{ once: true, amount: 0.3 }}
                      className="bg-gray-800 px-3 py-2 rounded-lg text-center hover:bg-gray-700 transition-colors"
                    >
                      <span className="text-sm font-medium text-gray-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
                >
                  Download CV
                </a>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 rounded-lg font-medium transition-colors"
                >
                  Let's Talk
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="projects" 
        className="py-24 min-h-screen bg-gray-800 relative"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-gray-900/20 to-gray-900 opacity-70" />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-blue-400">My</span> Projects
            </h2>
            <div className="mt-2 h-1 w-20 bg-blue-400 mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects. Click on any project to learn more about it.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                onClick={() => handleProjectClick(project)}
                className="bg-gray-900 rounded-xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <div className="text-sm font-medium text-blue-400">
                      {project.category}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-medium bg-gray-800 text-gray-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs font-medium bg-gray-800 text-gray-300 rounded">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex justify-center">
                    <span className="text-sm text-blue-400 font-medium group-hover:underline">
                      View Project Details
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className="py-24 min-h-screen relative"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-gray-800" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-gray-900/20 to-gray-900 opacity-70" />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-blue-400">Contact</span> Me
            </h2>
            <div className="mt-2 h-1 w-20 bg-blue-400 mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out to me.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-5 gap-10">
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-400 mr-4">
                    <svg 
                      className="w-6 h-6" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-gray-400">prabodaniiresha1999@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-400 mr-4">
                    <svg 
                      className="w-6 h-6" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a.5.5 0 00-.248.637l.842 2.515a.5.5 0 01-.252.637l-2.257 1.13a1 1 0 01-1.21-.502l-1.498-4.493A1 1 0 011.47 8H3a2 2 0 002-2zm9.138 16.95a11 11 0 00-7.843-15.24m16.335 1.985a11 11 0 01-8.169 15.25" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <p className="text-gray-400">+94 (77) 866-7763</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-400 mr-4">
                    <svg 
                      className="w-6 h-6" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                      />
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Location</h4>
                    <p className="text-gray-400">Colombo , Sri Lanka</p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <h4 className="font-semibold text-lg mb-4">Connect With Me</h4>
                  <div className="flex space-x-4">
                    {[
                      { icon: "github", url: "https://github.com/Ireshaprabodhani" },
                      { icon: "linkedin", url: "https://www.linkedin.com/in/ireshaprabodhani-8609b2241/" },
                      { icon: "twitter", url: "#" },
                      { icon: "instagram", url: "https://www.instagram.com/iresha9918?igsh=ZTBsdnQ3Zjh5bmpz" },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                      >
                        <svg 
                          className="w-5 h-5" 
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          {social.icon === "github" && (
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          )}
                          {social.icon === "linkedin" && (
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          )}
                          {social.icon === "twitter" && (
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                          )}
                          {social.icon === "instagram" && (
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          )}
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="md:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="bg-gray-900 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Send Me A Message</h3>
                
                <form ref={formRef} onSubmit={handleEmailSend}>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="from_name"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="from_email"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      placeholder="Project Inquiry"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white min-h-32"
                      rows="5"
                      placeholder="Hello, I would like to discuss a project..."
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
                  >
                    Send Message
                  </button>
              </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="text-xl font-bold text-blue-400 mb-4">
              DevPortfolio
            </div>
            <p className="text-gray-400 mb-6">
              Creating modern web experiences with cutting-edge technologies
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              {[
                { icon: "github", url: "https://github.com/Ireshaprabodhani" },
                { icon: "linkedin", url: "https://www.linkedin.com/in/ireshaprabodhani-8609b2241/" },
                { icon: "twitter", url: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <svg 
                    className="w-6 h-6" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    {social.icon === "github" && (
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    )}
                    {social.icon === "linkedin" && (
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    )}
                    {social.icon === "twitter" && (
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} DevPortfolio. All rights reserved.
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black"
              onClick={closeProjectDetails}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-gray-900 rounded-xl overflow-hidden relative z-10 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-xl"
            >
              <button
                onClick={closeProjectDetails}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors z-10"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>
              
              <div className="relative h-72 md:h-96">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <div className="text-sm font-medium text-blue-400 mb-2">
                    {selectedProject.category}
                  </div>
                  <h3 className="text-3xl font-bold">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-8">
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4">Project Overview</h4>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm font-medium bg-blue-600/20 text-blue-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a
                    href={selectedProject.liveLink}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.githubLink}
                    className="px-6 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 rounded-lg font-medium transition-colors"
                  >
                    View Source
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}