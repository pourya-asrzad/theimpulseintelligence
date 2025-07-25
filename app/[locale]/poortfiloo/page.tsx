'use client';

import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

const skills = ['Next.js', 'React', 'Tailwind', 'Node.js', 'UI/UX', 'Content'];
const social = [
  { icon: "GITHUB", link: 'https://github.com' },
  { icon: "Linkedin", link: 'https://linkedin.com' },
  { icon: "Twitter", link: 'https://twitter.com' },
];

export default function PortfolioPage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <main className={`${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* NAVBAR */}
        <nav className="flex justify-between items-center mb-10">
          <h1 className="text-xl font-bold tracking-wide">🔥 Arman's Space</h1>
          <div className="flex items-center space-x-6">
            <a href="#about" className="hover:text-indigo-500 transition">About</a>
            <a href="#projects" className="hover:text-indigo-500 transition">Projects</a>
            <a href="#contact" className="hover:text-indigo-500 transition">Contact</a>
            <button onClick={toggleTheme} className="px-3 py-1 border rounded text-sm hover:bg-indigo-500 hover:text-white transition">
              {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
        </nav>

        {/* HERO */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Avatar"
            className="w-32 h-32 rounded-full mx-auto border-4 border-indigo-500 shadow-lg"
          />
          <h2 className="text-4xl font-extrabold mt-6">Arman Hesam</h2>
          <p className="text-indigo-500 dark:text-indigo-400 text-xl mt-2">Creative Developer & Artist</p>
          <p className="mt-4 max-w-xl mx-auto text-lg">
            I build expressive digital experiences with purpose, design, and a whole lotta code. Minimal, bold, and slightly dramatic.
          </p>
          <div className="flex justify-center gap-4 mt-6 text-2xl">
            {social.map(({ icon, link }, i) => (
              <a key={i} href={link} target="_blank" className="hover:text-indigo-500 transition">{icon}</a>
            ))}
          </div>
        </motion.section>

        {/* ABOUT */}
        <section id="about" className="mt-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold mb-4"
          >
            About Me
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg leading-relaxed"
          >
            I'm a full-stack artist and developer based in Germany, crafting stories through code, design, and content. My passion lives at the intersection of culture and tech. Whether it’s a wild creative project or a polished SaaS product — I’m in.
          </motion.p>
        </section>

        {/* SKILLS */}
        <section className="mt-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold mb-4"
          >
            Skills
          </motion.h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
                className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center shadow hover:scale-105 transition-transform"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-16">
          <h3 className="text-2xl font-bold mb-4">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((p) => (
              <motion.div
                key={p}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow"
              >
                <h4 className="text-xl font-semibold mb-2">Project #{p}</h4>
                <p className="text-sm">
                  A sleek, powerful project that showcases creativity, usability, and tech fluency. Built with love.
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-2">Let’s Connect</h3>
          <p className="text-lg mb-4">Got a cool idea or just wanna vibe? Hit me up 👇</p>
          <a
            href="mailto:arman@example.com"
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Contact Me
          </a>
        </section>

        {/* FOOTER */}
        <footer className="mt-20 text-sm text-center opacity-60">
          &copy; {new Date().getFullYear()} Arman Hesam. Designed with ❤️ and espresso.
        </footer>
      </div>
    </main>
  );
}
