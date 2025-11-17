import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap">Sheethal Joy</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
            Full-Stack Web Developer
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            I build clean, scalable, and high-performance web apps with modern technology.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Hire Me
            </a>
            <a
              href="/Sheethal_Joy.pdf"
              download
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition flex items-center gap-2"
            >
              <FiDownload /> Resume
            </a>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/Sheethaljoy" target="_blank" rel="noopener noreferrer" className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition">
              <FiGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/sheethal-joy-368859175" target="_blank" rel="noopener noreferrer" className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition">
              <FiLinkedin size={24} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sheethaljoy00001@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
            >
              <FiMail size={24} />
            </a>

          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-2xl opacity-50"></div>
            <img
              src="./assets/images/me pic1.png"
              alt="Sheethal Joy"
              className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-2xl"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
