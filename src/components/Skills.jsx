import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaJava, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiExpress } from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: FaHtml5, color: 'text-orange-600' },
  { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
  { name: 'Bootstrap', icon: FaBootstrap, color: 'text-purple-600' },
  { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
  { name: 'SQL', icon: SiMysql, color: 'text-blue-600' },
  { name: 'Java', icon: FaJava, color: 'text-red-600' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' },
  { name: 'Express', icon: SiExpress, color: 'text-gray-700 dark:text-gray-300' },
  { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition text-center"
            >
              <skill.icon className={`text-5xl ${skill.color} mx-auto mb-3`} />
              <p className="font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
