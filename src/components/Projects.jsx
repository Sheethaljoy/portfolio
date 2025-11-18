import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    title: 'IIE Education Platform',
    description: 'Modern education platform with authentication, admin dashboard, payment integration, and secure file verification.',
    tech: ['React', 'CSS', 'Bootstrap', 'Node.js'],
    image: './assets/projects/desktop.gif',
  },
  {
    title: 'tree.femme - Company Website',
    description: 'Modern IT company website built with React and Tailwind CSS, featuring an interactive UI and a dynamic contact form.',
    tech: ['React', 'Tailwind CSS'],
    image: './assets/projects/Comp 1.mp4',
  },
  {
    title: 'Aurix Business Corp - Corporate Website',
    description: 'Corporate business website built with React and Tailwind CSS, featuring a dynamic contact form and smooth, user-friendly interactions.',
    tech: ['React', 'Tailwind CSS'],
    image: './assets/projects/Comp 1_1.mp4',
  },
  {
    title: 'tree.femme - Portfolio Gallery',
    description: 'Elegant and responsive gallery website built with React, CSS, and Bootstrap, showcasing the company’s portfolio with a clean user experience.',
    tech: ['React', 'CSS', 'Bootstrap'],
    image: './assets/projects/2.mp4', 
  },
  {
    title: 'Laundry Delivery App - Backend System',
    description: 'Developed the backend for a full-scale laundry delivery application, featuring secure authentication, user order management, staff dashboards, rider tracking, QR code verification, invoice generation, and real-time status updates. Built using Node.js, TypeScript, PostgreSQL, and Supabase for reliable, scalable performance.',
    tech: ['Node.js','Express.js','TypeScript', 'PostgreSQL'],
    image: './assets/projects/22.mp4', 
  },
];

export default function Projects() {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group"
            >
              <div className="h-64 overflow-hidden relative">
                {imageErrors[index] ? (
                  <div className="h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl mb-2">🚀</div>
                      <p className="text-sm">Add media to:<br />{project.image}</p>
                    </div>
                  </div>
                ) : project.image.endsWith('.mp4') ? (
                  <video
                    src={project.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    onError={() => handleImageError(index)}
                    className="w-full h-full object-contain bg-gray-100 dark:bg-gray-700 group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    onError={() => handleImageError(index)}
                    className="w-full h-full object-contain bg-gray-100 dark:bg-gray-700 group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
