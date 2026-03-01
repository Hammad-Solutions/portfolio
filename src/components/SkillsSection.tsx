'use client'

import { motion } from 'motion/react'
import { Card } from './ui/card'

export function SkillsSection() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js/Next.js', level: 90, color: 'from-blue-400 to-blue-600' },
        { name: 'JavaScript', level: 88, color: 'from-yellow-400 to-yellow-600' },
        { name: 'HTML/CSS', level: 85, color: 'from-orange-400 to-orange-600' },
        { name: 'Tailwind CSS', level: 82, color: 'from-cyan-400 to-cyan-600' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 88, color: 'from-green-500 to-green-700' },
        { name: 'Firebase', level: 80, color: 'from-yellow-500 to-orange-600' },
        { name: 'C++', level: 85, color: 'from-blue-500 to-blue-700' },
        { name: 'Java', level: 78, color: 'from-red-400 to-red-600' }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git/GitHub', level: 90, color: 'from-gray-400 to-gray-600' },
        { name: 'API Integration', level: 85, color: 'from-purple-400 to-purple-600' },
        { name: 'Software Design', level: 80, color: 'from-indigo-400 to-indigo-600' },
        { name: 'WordPress', level: 75, color: 'from-blue-600 to-blue-800' }
      ]
    }
  ]

  const currentlyLearning = [
    'Android App Development (React Native)',
    'Advanced Next.js & Firebase',
    'Software Architecture & Cloud Computing'
  ]

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Card className="p-6 bg-gray-900/50 border-white/10 backdrop-blur-sm">
                <h3 className="text-xl text-white mb-6 text-center">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1, 
                        duration: 0.6 
                      }}
                      viewport={{ once: false, amount: 0.3 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">{skill.name}</span>
                        <span className="text-gray-400 text-xs">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                            duration: 1,
                            ease: "easeOut"
                          }}
                          viewport={{ once: false, amount: 0.3 }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Currently Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-16"
        >
          <Card className="p-8 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border-emerald-500/30 backdrop-blur-sm">
            <h3 className="text-2xl text-white mb-6 text-center">🌱 Currently Learning</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {currentlyLearning.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="px-6 py-3 bg-emerald-500/20 text-emerald-300 rounded-lg border border-emerald-500/40 text-sm"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </Card>
        </motion.div>
        
        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl text-white mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[
              'React', 'Next.js', 'JavaScript', 'Node.js', 'C++', 'Java', 
              'Firebase', 'Git', 'Tailwind', 'API Integration', 'WordPress', 'OOP'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.05, duration: 0.3 }}
                viewport={{ once: false, amount: 0.3 }}
                className="px-4 py-2 bg-white/5 text-gray-400 rounded-lg border border-white/10 text-sm hover:bg-white/10 transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}