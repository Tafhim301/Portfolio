import { Link } from "react-router";
import { FaLinkedin, FaGithub, FaEnvelope, FaFacebook } from "react-icons/fa";
import type { JSX } from "react";
import { Phone } from "lucide-react";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-gray-950 border border-t-gray-700 text-gray-400 pt-16 pb-8 font-sans border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">About Me</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              I am Tafhimul Islam, a passionate web developer specializing in React, TypeScript, and modern web technologies. 
              I create clean, scalable, and professional projects that solve real-world problems.
            </p>
          </div>

        
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gray-200 transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-gray-200 transition-colors duration-300">Blogs</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-gray-200 transition-colors duration-300">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-200 transition-colors duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2 hover:text-gray-200 transition-colors duration-300">
                <FaEnvelope className="w-5"/> <a>tafhimul301@gmail.com</a>
              </li>
              <li className="flex items-center gap-2 hover:text-gray-200 transition-colors duration-300">
               <Phone className="w-5"></Phone> <a>+880 1638 823556</a>
              </li>
              <li className="flex items-center gap-2 hover:text-gray-200 transition-colors duration-300">
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Follow Me</h3>
            <div className="flex items-center gap-6 text-2xl">
              <a
                href="https://www.linkedin.com/in/tafhimul-islam-381913381/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Tafhim301"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-gray-50 transition-colors duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.facebook.com/tafhim.ul.101"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

     
        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Tafhimul Islam. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
