'use client'

import { motion } from 'motion/react'
import { Button } from './ui/button'
import { Github, Linkedin, Mail } from 'lucide-react'
import { toast } from 'sonner'

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      toast.success('Navigated to Projects', {
        description: 'Check out my latest work below',
        duration: 2000,
      })
    }
  }

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.2 }}
            className="text-emerald-400 text-lg tracking-wider"
          >
            👋 Hello, I'm
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl text-white mb-6"
          >
            Muhammad Hammad
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-4xl text-gray-300 mb-8"
          >
            I'm a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
              Software Developer
            </span>
            {' '}|{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              BS Software Engineering Student
            </span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.8 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-8"
          >
            Passionate about building clean, scalable, and efficient applications using React.js, Next.js, and Node.js. 
            Specializing in creating seamless web experiences and solving real-world problems through code.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button
              onClick={scrollToProjects}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>
            
            <Button
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              variant="outline"
              className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 px-8 py-3 rounded-lg transition-all duration-300"
            >
              Get In Touch
            </Button>
            
            <div className="flex items-center space-x-4">
              {[
                { icon: Github, href: 'https://github.com/Hammad-Solutions' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/hammad-solution/' },
                { icon: Mail, href: 'mailto:m6784104@gmail.com' }
              ].map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}