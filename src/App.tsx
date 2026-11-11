import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ChapterOne } from './components/ChapterOne';
import { ChapterTwo } from './components/ChapterTwo';
import { ChapterThree } from './components/ChapterThree';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  // Theme state persisted in localStorage and synced with system preference
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true; // Default dark for cinematic presentation
  });

  // Active section for navigation spy
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // ScrollSpy to update active nav link
  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'contact'];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= windowHeight * 0.35) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#07090e] text-slate-800 dark:text-slate-200 transition-colors duration-300">
      {/* Top Fixed Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
      />

      <main>
        {/* Hero Section with Immersive Video & Fallback */}
        <Hero />

        {/* About Section: The 3 Chapters of the Narrative */}
        <section id="about" className="relative">
          {/* Chapter 01: Marketing & Education */}
          <ChapterOne />

          {/* Chapter 02: My Coding Journey & Data Science */}
          <ChapterTwo />

          {/* Chapter 03: The Future & SMU MITB */}
          <ChapterThree />
        </section>

        {/* Projects Section: Deep Case Studies & Architecture Workbenches */}
        <ProjectsSection />

        {/* Contact Section: Closing Narrative & Connect */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
