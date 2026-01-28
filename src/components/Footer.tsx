import React from 'react';
import { Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const services = [
    
    'AI Development',
    'Mobile App Development',
    'Web Development',
    'Custom Software',
    'IoT Development',
  ];

  const companyLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact Us', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img 
              src="/Full Logo tbtm Color.png" 
              alt="SkyDasher Tech" 
              className="h-16 sm:h-20 w-auto mb-3 sm:mb-4"
              loading="lazy"
              decoding="async"
            />
            <p className="text-gray-300 mb-4 leading-relaxed text-sm">
              Leading technology company specializing in innovative digital solutions. 
              We help businesses transform and grow through cutting-edge technology.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://www.linkedin.com/company/skydasher-tech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/skydashertech/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200"
                style={{ '&:hover': { backgroundColor: '#212720' } }}
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-bold mb-3 sm:mb-4 text-white">Our Services</h3>
            <ul className="space-y-1 sm:space-y-2 text-gray-300">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="transition-colors flex items-center group text-sm hover:text-white"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base font-bold mb-3 sm:mb-4 text-white">Company</h3>
            <ul className="space-y-1 sm:space-y-2 text-gray-300">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="transition-colors flex items-center group text-sm hover:text-white"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-bold mb-3 sm:mb-4 text-white">Contact Info</h3>
            <ul className="space-y-2 sm:space-y-3 text-white">
              <li className="flex items-start">
                <Phone className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" style={{ color: '#FF3C1A' }} />
                <div>
                  <a 
                    href="https://wa.me/919135676155" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transition-colors duration-200 text-sm hover:text-gray-300"
                  >
                    +91 913 56 76 155
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" style={{ color: '#FF3C1A' }} />
                <div>
                  <p className="text-sm">skydashertech@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" style={{ color: '#FF3C1A' }} />
                <div>
                  <p className="text-sm">Coimbatore, India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-4 sm:pt-6 flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
          <div className="text-gray-300 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} SkyDasher Tech. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end space-x-4 text-xs sm:text-sm">
            <a href="#" className="text-gray-300 transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 transition-colors hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;