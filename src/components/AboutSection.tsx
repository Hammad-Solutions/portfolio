'use client'

import { motion } from 'motion/react'
import { Card } from './ui/card'
import { Code, Coffee, Lightbulb, Users } from 'lucide-react'

export function AboutSection() {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code that stands the test of time.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always exploring new technologies and creative solutions to complex problems.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams to deliver exceptional user experiences.'
    },
    {
      icon: Coffee,
      title: 'Dedication',
      description: 'Committed to continuous learning and staying current with industry trends.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl text-white mb-4">
              Passionate about creating digital experiences that matter
            </h3>
            <p className="text-gray-300 leading-relaxed">
              As a passionate Software Developer and a final-year Software Engineering student at Air University Islamabad, 
              I specialize in building clean and efficient applications using React.js, Next.js, and Node.js. 
              My journey in software development has been driven by a genuine interest in solving real-world problems.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My project portfolio demonstrates my ability to tackle complex challenges, from developing a real-time WeatherApp 
              using API integration to creating an IoT-based Smart Helmet for worker safety. I'm proficient in both front-end 
              and back-end development and have a strong understanding of modern software design principles. Currently, I'm 
              expanding my skills in Android App Development with React Native and exploring Software Architecture & Cloud Computing.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex flex-wrap gap-3 mt-6"
            >
              {['Problem Solver', 'Quick Learner', 'Open to Collaborations', 'Detail Oriented'].map((trait, index) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm border border-emerald-500/30"
                >
                  {trait}
                </span>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <Card className="p-6 bg-black/50 border-white/10 hover:border-emerald-500/50 transition-all duration-300 group">
                  <div className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-white text-lg mb-2">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}