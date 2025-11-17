import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-80 rounded-2xl shadow-xl overflow-hidden">
              <img
                src="./assets/images/me pic 3.png"
              alt="Sheethal Joy - About"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300">
             I'm a passionate Fullstack Web Developer specializing in building clean, scalable, and high-performance applications. I work with technologies like React, Tailwind CSS, Java, and Node.js/Express to create fast, intuitive, and reliable digital experiences.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
             I enjoy solving real-world problems through code, exploring new technologies, and enhancing user experience through thoughtful design and clean engineering practices.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-blue-50 dark:bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">3+</div>
                <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-purple-600">5+</div>
                <div className="text-gray-600 dark:text-gray-400">Projects Done</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
