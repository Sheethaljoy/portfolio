import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Sheethal Joy. All rights reserved.
          </div>
          
          <div className="flex gap-4">
            <a href="https://github.com/Sheethaljoy" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
              <FiGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/sheethal-joy-368859175" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
              <FiLinkedin size={20} />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sheethaljoy00001@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
              <FiMail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
