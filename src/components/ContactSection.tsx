'use client'

import { motion } from 'motion/react'
import { Card } from './ui/card'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Mail, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import { FeedbackBox } from './FeedbackBox'

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "m6784104@gmail.com",
      href: "mailto:m6784104@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 302 5416581",
      href: "tel:+923025416581",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kamra Attock,Punjab Pakistan",
      href: "#",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.firstName || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields!", {
        description: "Name, Email, and Message are required.",
        duration: 4000,
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Invalid email address!", {
        description: "Please enter a valid email address.",
        duration: 4000,
      });
      return;
    }

    setIsSubmitting(true);

    // Check if Form ID is configured
    const formId = "xjgedepk"; // Get your form ID from: https://formspree.io/forms
    
    if (formId === "YOUR_FORM_ID") {
      // Form ID not configured - use mailto fallback
      setIsSubmitting(false);
      
      toast.warning("⚠️ Setup Required for Auto-Send", {
        description: "Currently using mailto (visitor must send email). Add Formspree Form ID for automatic delivery to your inbox. See SETUP_NOW.md",
        duration: 8000,
      });

      // Create mailto link
      const subject = encodeURIComponent(
        formData.subject || `Portfolio Contact from ${formData.firstName}`
      );
      const body = encodeURIComponent(
        `Name: ${formData.firstName} ${formData.lastName}\n` +
        `Email: ${formData.email}\n` +
        `Subject: ${formData.subject}\n\n` +
        `Message:\n${formData.message}`
      );
      
      // Open mailto
      window.location.href = `mailto:m6784104@gmail.com?subject=${subject}&body=${body}`;
      
      // Reset form after a delay
      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 1000);
      
      return;
    }

    // Prepare form data for Formspree
    const formspreeData = {
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      subject: formData.subject || `New Portfolio Contact from ${formData.firstName}`,
      message: formData.message,
      _replyto: formData.email,
      _subject: formData.subject || `New Portfolio Contact from ${formData.firstName}`,
    };

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formspreeData),
      });

      const data = await response.json();

      if (response.ok) {
        // Show success message
        toast.success("Message sent successfully! ✉️", {
          description: "Thank you for reaching out! I'll get back to you soon.",
          duration: 6000,
        });

        // Reset form and show feedback
        setTimeout(() => {
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: "",
          });
          setIsSubmitting(false);
          
          // Show feedback box
          setShowFeedback(true);
        }, 2000);
      } else {
        // Check if it's a confirmation needed error
        if (data.error && data.error.includes("confirm")) {
          setIsSubmitting(false);
          toast.warning("⚠️ Formspree Confirmation Required", {
            description: "Check your email (m6784104@gmail.com) and confirm the form. Then try again.",
            duration: 10000,
          });
          console.log("Formspree response:", data);
        } else {
          throw new Error(data.error || "Failed to send");
        }
      }
    } catch (error) {
      setIsSubmitting(false);
      console.error("Form submission error:", error);
      console.log("Full error details:", error);
      
      // Show error with mailto fallback option
      toast.error("Unable to send via Formspree", {
        description: "Falling back to email client...",
        duration: 4000,
      });

      // Fallback to mailto
      setTimeout(() => {
        const subject = encodeURIComponent(
          formData.subject || `Portfolio Contact from ${formData.firstName}`
        );
        const body = encodeURIComponent(
          `Name: ${formData.firstName} ${formData.lastName}\n` +
          `Email: ${formData.email}\n` +
          `Subject: ${formData.subject}\n\n` +
          `Message:\n${formData.message}`
        );
        
        window.location.href = `mailto:m6784104@gmail.com?subject=${subject}&body=${body}`;
      }, 1500);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            I'm actively seeking opportunities to contribute my
            skills to innovative projects. Let's connect to
            discuss how I can bring value to your team!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Card className="p-8 bg-gray-900/50 border-white/10">
              <h3 className="text-2xl text-white mb-6">
                Send me a message
              </h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-300 text-sm mb-2 block">
                      First Name *
                    </label>
                    <Input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Your first name"
                      className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-emerald-500"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 text-sm mb-2 block">
                      Last Name
                    </label>
                    <Input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Your last name"
                      className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-emerald-500"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-300 text-sm mb-2 block">
                    Email *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-emerald-500"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="text-gray-300 text-sm mb-2 block">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project discussion"
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-emerald-500"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="text-gray-300 text-sm mb-2 block">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-emerald-500 resize-none"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 relative overflow-hidden"
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
                      Sending Message...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl text-white mb-6">
                Let's connect
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I'm currently available for freelance work and
                open to collaborations on web applications,
                open-source projects, and software engineering
                projects. Whether you have a project in mind or
                just want to chat about technology, I'd love to
                hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.6,
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg border border-white/10 hover:border-emerald-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/30 transition-all duration-300">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">
                      {info.label}
                    </p>
                    <p className="text-white">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="border-t border-white/10 mt-16 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2027 Muhammad Hammad. Designed &amp; Built with
            ❤️ using React and Tailwind CSS.
          </p>
        </motion.div>
      </div>

      {/* Feedback Modal */}
      <FeedbackBox isOpen={showFeedback} onClose={() => setShowFeedback(false)} />
    </section>
  );
}