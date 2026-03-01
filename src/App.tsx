import { Navigation } from './components/Navigation'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { SkillsSection } from './components/SkillsSection'
import { ProjectsSection } from './components/ProjectsSection'
import { ContactSection } from './components/ContactSection'
import { ScrollToTop } from './components/ScrollToTop'
import { Toaster } from './components/ui/sonner'
import { useEffect } from 'react'

export default function App() {
  useEffect(() => {
    // Helpful developer message
    console.log(
      '%c🚨 IMPORTANT: Contact Form Setup Required',
      'background: #ef4444; color: white; padding: 8px 12px; border-radius: 4px; font-size: 14px; font-weight: bold;'
    );
    console.log(
      '%c',
      'font-size: 2px;'
    );
    console.log(
      '%c❌ Current Problem:',
      'color: #ef4444; font-size: 12px; font-weight: bold;'
    );
    console.log(
      '%c   • Form uses mailto (opens visitor\'s email client)',
      'color: #f87171; font-size: 11px;'
    );
    console.log(
      '%c   • YOU DON\'T GET EMAILS unless visitors manually send them',
      'color: #f87171; font-size: 11px; font-weight: bold;'
    );
    console.log(
      '%c   • Most visitors won\'t send the email!',
      'color: #f87171; font-size: 11px;'
    );
    console.log(
      '%c',
      'font-size: 2px;'
    );
    console.log(
      '%c✅ Solution: 2-Minute Setup for Auto-Delivery',
      'color: #10b981; font-size: 12px; font-weight: bold;'
    );
    console.log(
      '%c1. Visit: https://formspree.io/forms',
      'color: #3b82f6; font-size: 11px;'
    );
    console.log(
      '%c2. Create form for: m6784104@gmail.com',
      'color: #3b82f6; font-size: 11px;'
    );
    console.log(
      '%c3. Copy your Form ID (looks like: "mwpevvkr")',
      'color: #3b82f6; font-size: 11px;'
    );
    console.log(
      '%c4. Add to: /components/ContactSection.tsx line 68',
      'color: #3b82f6; font-size: 11px;'
    );
    console.log(
      '%c',
      'font-size: 2px;'
    );
    console.log(
      '%c🎯 Result: Emails sent AUTOMATICALLY to your inbox!',
      'color: #10b981; font-size: 11px; font-weight: bold;'
    );
    console.log(
      '%c📖 Full Guide: See SETUP_NOW.md file',
      'color: #a855f7; font-size: 11px; font-weight: bold;'
    );
  }, []);

  return (
    <div className="dark min-h-screen bg-black text-white">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <ScrollToTop />
      <Toaster position="top-right" />
    </div>
  )
}