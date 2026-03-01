'use client'

import { motion, AnimatePresence } from 'motion/react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import { Star, X, ThumbsUp, Send } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

interface FeedbackBoxProps {
  isOpen: boolean
  onClose: () => void
}

export function FeedbackBox({ isOpen, onClose }: FeedbackBoxProps) {
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [feedback, setFeedback] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (rating === 0) {
      toast.error("Please select a rating!", {
        description: "Your feedback is important to us.",
        duration: 4000,
      })
      return
    }

    setIsSubmitting(true)

    // Simulate submission
    setTimeout(() => {
      toast.success("Thank you for your feedback! 🎉", {
        description: `You rated your experience ${rating}/5 stars.`,
        duration: 5000,
      })
      setIsSubmitting(false)
      setRating(0)
      setFeedback('')
      onClose()
    }, 1500)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Feedback Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md px-4"
          >
            <Card className="bg-gray-900 border-white/20 p-8 relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-purple-400 to-pink-400" />
              
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="text-center mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <ThumbsUp className="w-8 h-8 text-emerald-400" />
                </motion.div>
                <h3 className="text-2xl text-white mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-400 text-sm">
                  How was your experience with the contact form?
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Star Rating */}
                <div>
                  <label className="text-gray-300 text-sm mb-3 block text-center">
                    Rate your experience
                  </label>
                  <div className="flex justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`w-8 h-8 transition-all duration-200 ${
                            star <= (hoveredRating || rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-600'
                          }`}
                        />
                      </motion.button>
                    ))}
                  </div>
                  {rating > 0 && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center text-emerald-400 text-sm mt-2"
                    >
                      {rating === 5 && "Excellent! 🎉"}
                      {rating === 4 && "Great! 😊"}
                      {rating === 3 && "Good! 👍"}
                      {rating === 2 && "Okay! 😐"}
                      {rating === 1 && "Needs improvement 😔"}
                    </motion.p>
                  )}
                </div>

                {/* Feedback textarea */}
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">
                    Additional feedback (optional)
                  </label>
                  <Textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Tell us what you think..."
                    rows={4}
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-emerald-500 resize-none"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <Button
                    type="button"
                    onClick={onClose}
                    variant="outline"
                    className="flex-1 border-white/20 text-gray-300 hover:bg-white/10"
                    disabled={isSubmitting}
                  >
                    Skip
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="inline-block"
                        >
                          ⏳
                        </motion.span>
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Submit
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
