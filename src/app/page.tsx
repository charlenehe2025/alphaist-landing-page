"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, BrainCircuit, Briefcase, Handshake } from 'lucide-react';

const Section = ({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) => (
  <motion.section
    id={id}
    className={`w-full max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-20 ${className}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8 }}
  >
    {children}
  </motion.section>
);

const TeamMemberCard = ({ name, title, avatarUrl, summary, profileUrl }: { name: string; title: string; avatarUrl: string; summary: string; profileUrl: string }) => (
  <Link href={profileUrl} className="block p-8 bg-gray-900 rounded-2xl border border-purple-800 hover:border-purple-600 transition-all transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-900/50 max-w-sm">
    <div className="flex flex-col items-center text-center">
      <img src={avatarUrl} alt={name} className="w-32 h-32 rounded-full mb-6 bg-gray-700 border-4 border-purple-700" />
      <h3 className="font-semibold text-2xl text-white">{name}</h3>
      <p className="text-purple-300 text-lg mb-4">{title}</p>
      <p className="text-gray-400">
        {summary}
      </p>
      <div className="mt-6 text-purple-400 font-semibold flex items-center gap-2">
        View Profile <ArrowRight size={16} />
      </div>
    </div>
  </Link>
);

export default function Home() {
  return (
    <div className="bg-black text-gray-300 min-h-screen font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 bg-black bg-opacity-50 backdrop-blur-md">
        <div className="text-2xl font-bold text-white tracking-wider">ALPHAIST</div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#philosophy" className="hover:text-purple-400 transition-colors">Philosophy</a>
          <a href="#portfolio" className="hover:text-purple-400 transition-colors">Portfolio</a>
          <a href="#team" className="hover:text-purple-400 transition-colors">Team</a>
        </nav>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors flex items-center gap-2"
        >
          Get in Touch <ArrowRight size={16} />
        </motion.button>
      </header>

      <main>
        <div className="relative h-screen flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-black opacity-80"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(128,0,128,0.2),_transparent_70%)]"></div>
          <motion.div
            className="relative z-10 p-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tighter shadow-lg">
              We invest in rebels, pioneers, and contrarians.
            </h1>
            <p className="mt-6 text-xl text-purple-200 max-w-3xl mx-auto">
              Alphaist is a venture capital firm that backs founders building the future, today.
            </p>
          </motion.div>
        </div>

        <Section id="philosophy">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Our Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-gray-900 rounded-xl border border-purple-800">
              <BrainCircuit className="mx-auto w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">Bold Ideas</h3>
              <p>We seek out non-obvious, transformative ideas that have the potential to reshape industries.</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-xl border border-purple-800">
              <Handshake className="mx-auto w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">Founder-Focused</h3>
              <p>We are partners, not just investors. We provide unwavering support to our founders.</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-xl border border-purple-800">
              <Briefcase className="mx-auto w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">Long-Term Vision</h3>
              <p>We believe in building enduring companies and are committed for the long haul.</p>
            </div>
          </div>
        </Section>

        <Section id="portfolio" className="bg-gray-950">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Our Portfolio</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[ 'StellarForge', 'QuantumLeap', 'NexusAI', 'HeliosEnergy', 'BioSynth', 'AetherNet', 'ChronoBank', 'TerraNova' ].map(name => (
              <div key={name} className="text-center text-2xl font-medium text-gray-400 hover:text-white transition-colors">
                {name}
              </div>
            ))}
          </div>
        </Section>

        <Section id="team">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Our Team</h2>
          <div className="flex justify-center">
            <TeamMemberCard
              name="Peter Zhe Chen"
              title="Partner"
              avatarUrl="https://ui-avatars.com/api/?name=Peter+Zhe+Chen&background=8b5cf6&color=fff&size=128"
              summary="Specializing in product development, mobile technology, and AI, with a background at Google and BlackBerry."
              profileUrl="/team/peter-zhe-chen"
            />
          </div>
        </Section>
      </main>

      <footer className="w-full max-w-5xl mx-auto px-4 md:px-6 py-8 border-t border-purple-900">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Alphaist. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-purple-400 transition-colors">X</a>
            <a href="#" className="hover:text-purple-400 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

