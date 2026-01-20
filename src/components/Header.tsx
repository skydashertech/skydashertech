import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const services = [
    // { title: 'AGENTIC AI / MULTI AGENTIC AI DEVELOPMENT', path: '#services' },
    { title: 'AI Development', path: '/ai-development' },
    { title: 'Mobile App Development', path: '/app-development' },
    { title: 'Web Development', path: '/web-development' },
    // { title: 'Big Data Solutions', path: '#services' },
    // { title: 'Blockchain', path: '#services' },
    // { title: 'Chat Bot', path: '#services' },
    // { title: 'Cloud Computing', path: '#services' },
    { title: 'Custom Software', path: '#services' },
    // { title: 'Data Analytics', path: '#services' },
    // { title: 'DevOps', path: '#services' },
    // { title: 'Game Development', path: '#services' },
    { title: 'IoT Development', path: '#services' },
    // { title: 'Machine Learning Solutions', path: '#services' },
    // { title: 'UI/UX Designs', path: '#services' },
    // { title: 'VR & AR Development', path: '#services' },
  ];

  const servicesPerSlide = 6;
  const totalSlides = Math.ceil(services.length / servicesPerSlide);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // const getCurrentServices = () => {
  //   const start = currentSlide * servicesPerSlide;
  //   const end = start + servicesPerSlide;
  //   return services.slice(start, end);
  // };

  useEffect(() => {
    if (isServicesOpen) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, [isServicesOpen, nextSlide]);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/Full Logo sbs COlor.png"
                alt="SkyDasher Tech"
                className="h-12 sm:h-14 lg:h-16 w-auto"
                loading="eager"
                decoding="async"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-sm xl:text-base">
              Home
            </Link>
            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-sm xl:text-base"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 w-80 bg-white shadow-xl rounded-lg py-4 mt-0 border"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="flex items-center justify-between px-4 mb-3">
                    <h3 className="font-semibold text-gray-900 text-sm">Our Services</h3>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={prevSlide}
                        className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                        style={{ color: '#FF3C1A' }}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <span className="text-xs text-gray-500">
                        {currentSlide + 1}/{totalSlides}
                      </span>
                      <button
                        onClick={nextSlide}
                        className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                        style={{ color: '#FF3C1A' }}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div ref={sliderRef} className="overflow-hidden">
                    <div
                      className="transition-transform duration-300 ease-in-out"
                      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                      <div className="flex">
                        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                          <div key={slideIndex} className="w-full flex-shrink-0">
                            {services.slice(slideIndex * servicesPerSlide, (slideIndex + 1) * servicesPerSlide).map((service) => {
                              const isInternal = service.path.startsWith('#');
                              if (isInternal) {
                                return (
                                  <a
                                    key={service.title}
                                    href={service.path}
                                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm border-l-2 border-transparent hover:border-blue-600"
                                  >
                                    {service.title}
                                  </a>
                                );
                              }
                              return (
                                <Link
                                  key={service.title}
                                  to={service.path}
                                    target='_blank'
                                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm border-l-2 border-transparent hover:border-blue-600"
                                  onClick={() => setIsServicesOpen(false)}
                                >
                                  {service.title}
                                </Link>
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center mt-3 space-x-1">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                          }`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-sm xl:text-base">
              About
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-sm xl:text-base">
              Portfolio
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-sm xl:text-base">
              Contact
            </a>
          </nav>

          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              className="text-white px-4 xl:px-6 py-2 xl:py-3 rounded-full transition-all duration-200 font-medium shadow-lg hover:shadow-xl text-sm xl:text-base"
              style={{ backgroundColor: '#FF3C1A' }}
            >
              Get Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 p-2 -mr-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <div className="py-4 space-y-3">
              <a href="#home" onClick={closeMenu} className="block text-gray-700 hover:text-blue-600 font-medium py-2">
                Home
              </a>
              <a href="#services" onClick={closeMenu} className="block text-gray-700 hover:text-blue-600 font-medium py-2">
                Services
              </a>
              <a href="#about" onClick={closeMenu} className="block text-gray-700 hover:text-blue-600 font-medium py-2">
                About
              </a>
              <a href="#portfolio" onClick={closeMenu} className="block text-gray-700 hover:text-blue-600 font-medium py-2">
                Portfolio
              </a>
              <a href="#contact" onClick={closeMenu} className="block text-gray-700 hover:text-blue-600 font-medium py-2">
                Contact
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className="text-white px-6 py-3 rounded-full w-full font-medium text-center block mt-4"
                style={{ backgroundColor: '#FF3C1A' }}
              >
                Get Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;