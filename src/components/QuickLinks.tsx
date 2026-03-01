'use client'

import { motion } from 'motion/react'
import { Download, FileText } from 'lucide-react'
import { Button } from './ui/button'
import { toast } from 'sonner'

export function QuickLinks() {
  const handleDownloadCV = () => {
    toast.info('CV download feature coming soon! Please contact me directly for my resume.')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.3 }}
      className="flex flex-wrap items-center justify-center gap-4 mt-8"
    >
      <Button
        onClick={handleDownloadCV}
        variant="outline"
        className="border-white/20 text-white hover:bg-white/10 px-6 py-2 rounded-lg transition-all duration-300 flex items-center gap-2"
      >
        <Download className="w-4 h-4" />
        Download CV
      </Button>
    </motion.div>
  )
}
