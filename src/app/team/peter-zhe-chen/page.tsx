"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function PeterZheChenProfile() {
  return (
    <div className="bg-black text-gray-300 min-h-screen font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 bg-black bg-opacity-50 backdrop-blur-md">
        <Link href="/#team" className="text-2xl font-bold text-white tracking-wider flex items-center gap-2 hover:text-purple-400 transition-colors">
          <ArrowLeft size={24} />
          Back to Team
        </Link>
      </header>

      <main className="pt-24">
        <motion.div
          className="w-full max-w-4xl mx-auto px-4 md:px-6 py-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img 
              src="https://ui-avatars.com/api/?name=Peter+Zhe+Chen&background=8b5cf6&color=fff&size=256" 
              alt="Peter Zhe Chen" 
              className="w-48 h-48 rounded-full bg-gray-700 border-4 border-purple-600"
            />
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold text-white">Peter Zhe Chen</h1>
              <p className="text-2xl text-purple-300 mt-2">Partner at Alphaist</p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gray-900 rounded-xl border border-purple-800">
            <h2 className="text-3xl font-bold text-white mb-4">Overview</h2>
            <p className="text-lg leading-relaxed">
              Peter Zhe Chen is currently a Tech Investor at 5Y Capital in Beijing, specializing in product development, mobile technology, and artificial intelligence. With a background that includes roles at Google and BlackBerry, he has successfully invested in companies like HAI ROBOTICS and AgileX, focusing on FinTech sectors at Series A and Seed stages. Peter Zhe Chen's career highlights include serving as Managing Director at 5Y Capital and co-founding TagTalk, showcasing his expertise in venture capital and entrepreneurship within the tech industry.
            </p>
          </div>
          
          <div className="mt-8 p-8 bg-gray-900 rounded-xl border border-purple-800">
            <h2 className="text-3xl font-bold text-white mb-4">Work Experience</h2>
            <ul className="list-disc list-inside space-y-4 text-lg">
              <li><span className="font-semibold text-white">Partner</span> at Alphaist Partners (2025 - Current)</li>
              <li><span className="font-semibold text-white">Managing Director</span> at 5Y Capital (2017 - 2025)</li>
              <li><span className="font-semibold text-white">Senior Software Engineer</span> at Google (2015 - 2016)</li>
              <li><span className="font-semibold text-white">Sensor Software Developer</span> at BlackBerry (2012 - 2015)</li>
              <li><span className="font-semibold text-white">Cofounder</span> of TagTalk (2013 - 2014)</li>
            </ul>
          </div>

        </motion.div>
      </main>
    </div>
  );
}

