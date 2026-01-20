import React from 'react';
import { ArrowRight, CheckCircle, Zap } from 'lucide-react';

interface HeroProps {
  videoUrl?: string;
  title?: React.ReactNode;
  subtitle?: string;
}

const Hero: React.FC<HeroProps> = ({
  videoUrl,
  title = (
    <>
      Innovative
      <span className="block text-transparent bg-clip-text mt-1" style={{ backgroundImage: 'linear-gradient(to right, #FF3C1A, #212720)' }}>
        Technology Solutions
      </span>
      <span className="block mt-1">for Your Business</span>
    </>
  ),
  subtitle = "SkyDasher Tech specializes in cutting-edge AI development, web development, mobile applications, cloud solutions, and UI/UX design services that drive business growth."
}) => {
  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center" style={{ backgroundColor: '#f8f8ff' }}>
      {videoUrl ? (
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-white/70"></div>
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-orange-50 opacity-50"></div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start items-center space-x-2 mb-4">
              <div className="flex items-center space-x-1 bg-gradient-to-r from-red-100 to-green-100 text-red-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                <Zap className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: '#212720' }} />
                <span>Leading Tech Solutions</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              {title}
            </h1>

            <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {subtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
              {[
                { icon: CheckCircle, text: "24/7 Support" },
                { icon: CheckCircle, text: "Fast Delivery" },
                { icon: CheckCircle, text: "Quality Assured" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center lg:justify-start space-x-2 sm:space-x-3">
                  <item.icon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" style={{ color: '#212720' }} />
                  <span className="text-gray-600 text-sm sm:text-base">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
                style={{ backgroundColor: '#FF3C1A' }}
              >
                <span>Get Free Quote</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="#portfolio"
                className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 text-center text-sm sm:text-base"
              >
                View Portfolio
              </a>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Technology Solutions"
                className="rounded-2xl shadow-2xl w-full h-auto"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-gradient-to-br from-blue-400 to-orange-400 rounded-2xl opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 rounded-2xl opacity-20 blur-3xl" style={{ backgroundColor: '#212720' }}></div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
          {[
            { number: "150+", label: "Projects Completed" },
            { number: "80+", label: "Happy Clients" },
            { number: "3+", label: "Years Experience" },
            { number: "24/7", label: "Support" }
          ].map((stat, index) => (
            <div key={index} className="p-3 sm:p-4">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2" style={{ color: '#FF3C1A' }}>
                {stat.number}
              </div>
              <div className="text-gray-600 text-xs sm:text-sm lg:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;