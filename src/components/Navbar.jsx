import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "How To Download ?", href: "/#how-to-download", type: "anchor" },
  { label: "Contact", href: "/contact", type: "route" },
  { label: "About", href: "/about", type: "route" },
];

const NavbarBlurryBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 opacity-80"></div>

      <motion.div
        className="absolute w-40 h-40 rounded-full bg-blue-300 opacity-10 blur-3xl"
        initial={{ left: "10%", top: -20 }}
        animate={{ left: ["10%", "15%", "5%"], top: [-20, -10, -30] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
      />

      <motion.div
        className="absolute w-40 h-40 rounded-full bg-blue-400 opacity-10 blur-3xl"
        initial={{ right: "30%", top: -20 }}
        animate={{ right: ["30%", "35%", "25%"], top: [-20, -10, -30] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
      />
    </div>
  );
};

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const navigate = useNavigate();

  const handleHowToDownloadClick = (e) => {
    e.preventDefault();
    navigate("/#how-to-download");

    setTimeout(() => {
      const el = document.getElementById("how-to-download");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const renderNavItem = (item, index) => {
    const commonClasses =
      "text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium";

    return (
      <li key={index}>
        {item.type === "route" ? (
          <Link to={item.href} className={commonClasses}>
            {item.label}
          </Link>
        ) : (
          <a className={commonClasses} onClick={handleHowToDownloadClick}>
            {item.label}
          </a>
        )}
      </li>
    );
  };

  return (
    <div className="bg-blue-50/80 backdrop-blur-[0.5px] py-5 shadow-md w-full sticky top-0 z-50">
      <NavbarBlurryBackground />

      <div className="mx-auto flex items-center px-4 justify-between relative z-10">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="guru.png"
            alt="logo"
            width={40}
            height={40}
            className="select-none"
          />
          <h1 className="text-xl font-bold text-blue-800 max-xs:hidden select-none">
            <a href="/#videoDownload"> DownloadGuru</a>
          </h1>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 list-none">
          {navLinks.map(renderNavItem)}
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-blue-100/25 backdrop-blur-sm px-6 py-4 flex flex-col gap-4 list-none relative z-10"
          >
            {navLinks.map((item, index) => (
              <li key={index} onClick={() => setMenuOpen(false)}>
                {item.type === "route" ? (
                  <Link
                    to={item.href}
                    className="text-gray-700 hover:text-blue-600 font-medium block"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    className="text-gray-700 hover:text-blue-600 font-medium block"
                    onClick={handleHowToDownloadClick}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
