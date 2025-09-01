import { Link, useLocation } from "react-router";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Skills", link: "/skills" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
    { name: "Blogs", link: "/blogs" },
  ];

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky px-6 top-0 z-50 border-b-gray-700 border-b bg-gray-900 shadow-md">
      <div className="container mx-auto w-full flex justify-between items-center py-4">
        {/* Logo/Name */}
        <div className="text-xl italic font-bold tracking-wide text-white">
          Tafhim
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex justify-center space-x-6 text-white font-medium">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.link}
                className={
                  location.pathname === link.link
                    ? `bg-gray-700 py-1 px-3 rounded`
                    : "transition-colors duration-300 hover:text-blue-400"
                }
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={handleMenuToggle}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Content */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden flex flex-col items-center bg-gray-900 pb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col w-full text-white font-medium space-y-4 text-center">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.link}
                  className={
                    location.pathname === link.link
                      ? `bg-gray-700 py-2 px-4 block rounded w-full`
                      : "transition-colors duration-300 hover:text-blue-400 block w-full py-2"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
