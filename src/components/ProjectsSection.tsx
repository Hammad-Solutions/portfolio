'use client'

import { motion } from 'motion/react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { ExternalLink, Github } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { toast } from 'sonner'

export function ProjectsSection() {
  const projects = [
    {
      title: 'Student Management System',
      description: 'A comprehensive C++ application with file handling for managing student records. Features include admin login, teacher and student modules, fee management, and secure data storage. Perfect for first-sem easier students.',
      image: 'https://images.unsplash.com/photo-1762329352849-f4d0c9e7696a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbWFuYWdlbWVudCUyMHN5c3RlbSUyMHNvZnR3YXJlfGVufDF8fHx8MTc3MjIwMzkxOXww&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['C++', 'File Handling', 'OOP', 'Data Structures'],
      github: 'https://github.com/Hammad-Solutions/Student-Management-System-Cpp-File-Handling',
      live: '#',
      featured: true
    },
    {
      title: 'Bank Management System',
      description: 'A complete Bank Management System in C++ using File Handling. Includes account creation, deposit, withdrawal, balance inquiry, and fund transfer between accounts. Perfect for C++ beginners students.',
      image: 'https://images.unsplash.com/photo-1571715268998-d6e79bed5fc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwZmluYW5jZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyMTEyMDUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['C++', 'File Handling', 'Data Management', 'OOP'],
      github: 'https://github.com/Hammad-Solutions/Bank-Management-System-Cpp-File-Handling',
      live: '#',
      featured: true
    },
    {
      title: 'Hotel Management System',
      description: 'A Hotel Management System in C++ using OOP & file handling concepts. Perfect for learning concepts of Object-Oriented Programming. Features room booking, billing system, and secure data storage.',
      image: 'https://images.unsplash.com/photo-1558959357-685f9c7ace7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMG1hbmFnZW1lbnQlMjByZWNlcHRpb258ZW58MXx8fHwxNzcyMDk5MTczfDA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['C++', 'OOP', 'File Handling', 'System Design'],
      github: 'https://github.com/Hammad-Solutions/Hotel-Management-System-CPP',
      live: '#',
      featured: false
    },
    {
      title: 'WeatherApp with API Integration',
      description: 'A real-time weather application featuring location-based forecasts, interactive weather data visualization, and seamless API integration for accurate weather information.',
      image: 'https://images.unsplash.com/photo-1759488820765-5cf0755965ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwYXBwJTIwbW9iaWxlJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MjIwMzkyMHww&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['React.js', 'API Integration', 'JavaScript', 'CSS'],
      github: 'https://github.com/Hammad-Solutions',
      live: '#',
      featured: false
    },
    {
      title: 'IoT-based Smart Helmet',
      description: 'An innovative IoT-based Smart Helmet designed for worker safety. Features include real-time monitoring, accident detection, and emergency alert system for enhanced workplace security.',
      image: 'https://images.unsplash.com/photo-1627636784051-6f3aa82b4801?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhlbG1ldCUyMGlvdCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyMjAzOTIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['IoT', 'Hardware', 'Sensors', 'Safety Systems'],
      github: 'https://github.com/Hammad-Solutions',
      live: '#',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with smooth animations, dark theme, and optimized performance. Showcasing projects and skills with an elegant user interface.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Motion'],
      github: 'https://github.com/Hammad-Solutions',
      live: '#',
      featured: false
    }
  ]

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Here are some of my projects that demonstrate my ability to solve real-world problems through code
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="group bg-black/50 border-white/10 overflow-hidden hover:border-emerald-500/50 transition-all duration-500 cursor-pointer">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(project.github, '_blank');
                        }}
                        className="w-10 h-10 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300"
                      >
                        <Github className="w-5 h-5" />
                      </motion.div>
                      {project.live !== '#' && (
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(project.live, '_blank');
                          }}
                          className="w-10 h-10 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.div>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm border border-emerald-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-8"
        >
          <h3 className="text-2xl text-white text-center mb-8">Other Projects</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card className="group bg-black/30 border-white/10 hover:border-white/30 transition-all duration-300 h-full cursor-pointer">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                    <div className="absolute top-3 right-3 flex space-x-2">
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(project.github, '_blank');
                        }}
                        className="w-8 h-8 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                      </div>
                      {project.live !== '#' && (
                        <div
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(project.live, '_blank');
                          }}
                          className="w-8 h-8 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h4 className="text-lg text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-3 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mt-12"
        >
          <Button 
            variant="outline" 
            className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 px-8 py-3"
            onClick={() => window.open('https://github.com/Hammad-Solutions', '_blank')}
          >
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  )
}