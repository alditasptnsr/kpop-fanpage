"use client";
import { useState, useEffect } from "react";
import { Menu, X, Music, Heart } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "BTS", href: "/bts" },
    { name: "ENHYPEN", href: "/enhypen" },
    { name: "NCT 127", href: "/nct127" },
    { name: "NCT Dream", href: "/nctdream" },
    { name: "TXT", href: "/txt" },
  ];

  return (
    <header
      className={`bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <Music className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600 group-hover:text-pink-600 transition-colors duration-300" />
                <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-pink-500 absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 animate-pulse" />
              </div>
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                K-Pop Fanpage
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm xl:text-base text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 relative group rounded-lg hover:bg-purple-50"
              >
                {item.name}
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-3/4 transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Tablet Navigation (md-lg) */}
          <nav className="hidden md:flex lg:hidden items-center space-x-1">
            {navItems.slice(0, 4).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-2 py-2 text-sm text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 relative group rounded-lg hover:bg-purple-50"
              >
                {item.name}
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-3/4 transition-all duration-300"></span>
              </a>
            ))}
            {/* More menu for remaining items */}
            <div className="relative group">
              <button className="px-2 py-2 text-sm text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 rounded-lg hover:bg-purple-50">
                More
              </button>
              <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {navItems.slice(4).map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-300 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleMenu();
            }}
            className="md:hidden lg:flex xl:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 relative z-50"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`h-6 w-6 text-gray-700 absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 opacity-0" : "rotate-0 opacity-100"
                }`}
              />
              <X
                className={`h-6 w-6 text-gray-700 absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? "rotate-0 opacity-100" : "-rotate-45 opacity-0"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden lg:block xl:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-1 bg-white/95 backdrop-blur-sm border-t border-gray-200">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium transition-all duration-300 rounded-lg mx-2 transform ${
                  isMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
