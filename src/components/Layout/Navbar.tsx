import { Link, useLocation } from "react-router";

export default function Navbar() {
  const location = useLocation()
  const navLinks = [
    { name: "Home", link: "/", page: "Route" },
    { name: "Skills", link: "/skills", page: "Route" },
    { name: "Projects", link: "/projects", page: "Route" },
    { name: "Contact", link: "/contact", page: "Route" },
  ];

  return (
    <nav className="sticky px-6 top-0 z-50 border-b-gray-700 border-b  bg-gray-900 shadow-md ">
      <div className=" w-full flex justify-between items-center py-4">
       
        <div className="text-xl italic font-bold tracking-wide hidden md:block text-white">
          Tafhim
        </div>

        
        <ul className="flex w-full md:w-fit justify-center space-x-6 text-white font-medium">
          {navLinks.map(
            (link: { name: string; link: string; page: string }, index) =>
              link.page === "Home" ? (
                <li key={index}>
                  <a
                    href={link.link}
                    className="transition-colors duration-300 hover:text-blue-400"
                  >
                    {link.name}
                  </a>
                </li>
              ) : (
                <li key={index}>
                  <Link
                    to={link.link}
                    className={location.pathname === link.link ? `bg-gray-700 py-1 px-3 rounded` : 'transition-colors duration-300 hover:text-blue-400'}
                  >
                    {link.name}
                  </Link>
                </li>
              )
          )}
        </ul>
      </div>
    </nav>
  );
}
