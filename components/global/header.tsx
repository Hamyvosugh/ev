'use client';
import { useState, useEffect, useRef } from 'react';
import { Camera, Code, Share2, Megaphone, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside of mega menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setIsMegaMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Navigation items
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Dienstleistungen", href: "#services", hasMegaMenu: true },
    { name: "Demo", href: "https://demo01.emoviral.com/", target: "_blank" },
    { name: "Über uns", href: "/about" },
    { name: "Karriere", href: "/karriere" },
    { name: "Kontakt", href: "/kontakt" }
  ];

  // Mega menu services
  const services = [
    {
      name: "Fotografie",
      description: "Professionelle Fahrzeugfotografie für Ihr Autohaus",
      icon: Camera,
      href: "/foto",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      name: "Development",
      description: "Webseiten & Online-Shops für Autohäuser",
      icon: Code,
      href: "/web",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      name: "Social Media",
      description: "Content Management für Ihre Social-Media-Kanäle",
      icon: Share2,
      href: "/socialmedia",
      gradient: "from-orange-600 to-red-600"
    },
    {
      name: "Werbekampagnen",
      description: "Effektive Marketing-Kampagnen für mehr Reichweite",
      icon: Megaphone,
      href: "/kampagnen",
      gradient: "from-green-600 to-teal-600"
    }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="h-10 w-10 rounded  flex items-center justify-center mr-2">
              <img src="/images/logo/favicon-blue-emoviral.png" alt="EV Logo" className=" w-3xl h-3xl" />
              </div>
              <span className={`font-bold text-xl ${isScrolled ? 'text-blue-900' : 'text-blue-900'}`}>EmoViral</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                {item.hasMegaMenu ? (
                  <button
                    onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                    className={`inline-flex items-center text-sm font-medium transition-colors duration-200 ${
                      isScrolled ? 'text-gray-700 hover:text-blue-900' : 'text-gray-800 hover:text-blue-900'
                    }`}
                  >
                    {item.name}
                    <ChevronDown 
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        isMegaMenuOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                ) : (
                  <Link 
                    href={item.href}
                    target={item.target}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      isScrolled ? 'text-gray-700 hover:text-blue-900' : 'text-gray-800 hover:text-blue-900'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* CTA Button */}
            <Link 
              href="/beratung"
              className={`ml-4 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isScrolled 
                  ? 'bg-blue-900 text-white hover:bg-blue-800' 
                  : 'bg-blue-900 text-white hover:bg-blue-800'
              }`}
            >
              Beratung anfordern
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button 
              type="button" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled ? 'text-gray-700 hover:text-blue-900' : 'text-gray-800 hover:text-blue-900'
              }`}
            >
              <span className="sr-only">Menu öffnen</span>
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mega Menu */}
      {isMegaMenuOpen && (
        <div 
          ref={megaMenuRef}
          className="absolute left-0 w-full mt-2 bg-white shadow-xl border-t border-gray-100"
        >
          <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="group relative block p-6 rounded-xl hover:bg-gray-50 transition-all duration-300"
                  onClick={() => setIsMegaMenuOpen(false)}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} text-white mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {service.description}
                  </p>
                  <div className="absolute inset-0 border border-transparent group-hover:border-blue-900/10 rounded-xl transition-colors duration-300"></div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {navItems.map((item, index) => (
            <div key={index}>
              {item.hasMegaMenu ? (
                <div className="space-y-1">
                  <div className="block px-3 py-2 rounded-md text-base font-medium text-gray-700">
                    {item.name}
                  </div>
                  {services.map((service, sIndex) => (
                    <Link
                      key={sIndex}
                      href={service.href}
                      className="flex items-center px-6 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-900 hover:bg-gray-50"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <service.icon className="w-4 h-4 mr-2" />
                      {service.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  href={item.href}
                  target={item.target}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <Link
            href="/beratung"
            className="block px-3 py-2 rounded-md text-base font-medium bg-blue-900 text-white hover:bg-blue-800 mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Beratung anfordern
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;