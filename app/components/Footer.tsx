"use client";

import { Heart, Music, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "BTS", href: "/bts" },
    { name: "ENHYPEN", href: "/enhypen" },
    { name: "NCT 127", href: "/nct127" },
    { name: "NCT Dream", href: "/nctdream" },
    { name: "TXT", href: "/txt" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "hover:text-pink-500",
    },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-500" },
    { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-red-500" },
  ];

  return (
    <footer className="bg-gradient-to-r from-purple-900 via-purple-800 to-pink-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Brand Section */}
            <div className="space-y-4 text-center sm:text-left col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-center sm:justify-start space-x-2">
                <div className="relative">
                  <Music className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-pink-300 absolute -top-1 -right-1 animate-pulse" />
                </div>
                <span className="text-lg sm:text-xl font-bold">
                  K-Pop Fanpage
                </span>
              </div>
              <p className="text-purple-200 text-sm sm:text-base max-w-xs sm:max-w-sm mx-auto sm:mx-0 leading-relaxed">
                Tempat terbaik untuk mendapatkan informasi terbaru tentang idol
                K-Pop favorit Anda. Dari BTS hingga TXT, kami hadirkan konten
                terlengkap!
              </p>
              <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`p-2 sm:p-2.5 bg-white/10 rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-110 ${social.color}`}
                      aria-label={social.name}
                    >
                      <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4 text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-semibold text-white border-b border-purple-600/30 pb-2 sm:border-none sm:pb-0">
                Quick Links
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-purple-200 hover:text-white transition-colors duration-300 text-sm sm:text-base block py-1 hover:translate-x-1 transform transition-transform"
                  >
                    🏠 Home
                  </Link>
                </li>
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-purple-200 hover:text-white transition-colors duration-300 text-sm sm:text-base block py-1 hover:translate-x-1 transform transition-transform"
                    >
                      🎵 {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-semibold text-white border-b border-purple-600/30 pb-2 sm:border-none sm:pb-0">
                Contact
              </h3>
              <div className="space-y-2 sm:space-y-3 text-purple-200 text-sm sm:text-base">
                <p className="flex items-center justify-center sm:justify-start space-x-2">
                  <span>📧</span>
                  <a
                    href="mailto:alditaseptinasari394@gmail.com"
                    className="hover:text-white transition-colors duration-300 break-all sm:break-normal"
                  >
                    alditaseptinasari394@gmail.com
                  </a>
                </p>
                <p className="flex items-center justify-center sm:justify-start space-x-2">
                  <span>📱</span>
                  <span>Follow us on social media</span>
                </p>
                <p className="flex items-center justify-center sm:justify-start space-x-2">
                  <span>🌏</span>
                  <span>Made with</span>
                  <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-pink-400 animate-pulse" />
                  <span>from hydyyta</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-600/30 py-4 sm:py-6">
          <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0">
            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-2 sm:space-y-0 sm:space-x-2 text-purple-200 text-sm sm:text-base">
              <div className="flex items-center space-x-2">
                <span>&copy; {currentYear} K-Pop Fanpage.</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-pink-400 animate-pulse" />
                <span>from hydyyta</span>
              </div>
            </div>

            {/* Footer Links */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6 text-xs sm:text-sm text-purple-200">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 py-1 px-2 rounded hover:bg-white/10"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 py-1 px-2 rounded hover:bg-white/10"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 py-1 px-2 rounded hover:bg-white/10"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
