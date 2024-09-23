"use client";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarScrolled(true);
      } else {
        setNavbarScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle closing menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        navbarScrolled || isOpen
          ? "bg-primaryGreen text-black shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">MyWebsite</div>

        {/* Navigation Links (hidden on small screens) */}
        <ul className="hidden lg:flex space-x-8">
          <li className="hover:text-gray-500 cursor-pointer">Home</li>
          <li className="hover:text-gray-500 cursor-pointer">About</li>
          <li className="hover:text-gray-500 cursor-pointer">Services</li>
          <li className="hover:text-gray-500 cursor-pointer">Contact</li>
        </ul>

        {/* Hamburger Menu Icon (visible on small screens) */}
        <button
          onClick={toggleMenu}
          className={`lg:hidden focus:outline-none transition-transform duration-300 ${
            isOpen ? "rotate-90" : ""
          }`}
        >
          {isOpen ? (
            // Close icon when menu is open
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger menu icon
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu (visible when isOpen is true) */}
      {isOpen && (
        <div className="lg:hidden h-fit bg-primaryGreen flex flex-col gap-4 mt-4 px-6 pb-4">
          <ul className="flex flex-col gap-4">
            <li className="hover:text-gray-500 cursor-pointer">Home</li>
            <li className="hover:text-gray-500 cursor-pointer">About</li>
            <li className="hover:text-gray-500 cursor-pointer">Services</li>
            <li className="hover:text-gray-500 cursor-pointer">Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
