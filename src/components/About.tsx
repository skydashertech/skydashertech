import React from 'react';
import { Users, Award, Target, TrendingUp, CheckCircle } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: "30+", label: "Team Members" },
    { icon: Award, number: "3+", label: "Years Experience" },
    { icon: Target, number: "150+", label: "Projects Delivered" },
    { icon: TrendingUp, number: "97%", label: "Client Satisfaction" }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients as partners, ensuring transparent communication throughout every project."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in code quality, design, and customer service to exceed expectations."
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16" style={{ backgroundColor: '#f8f8ff' }}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 text-center lg:text-left">
              About <span style={{ color: '#FF3C1A' }}>SkyDasher Tech</span>
            </h2>
            
            <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
              SkyDasher Tech is a leading technology company specializing in innovative digital solutions. 
              We help businesses transform their operations through cutting-edge AI development, web development, 
              mobile applications, cloud solutions, and UI/UX design strategies.
            </p>
            
            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Our team of experienced developers, designers, and digital strategists work collaboratively to deliver 
              solutions that not only meet your current needs but scale with your future growth.
            </p>
            
            <div className="space-y-2 sm:space-y-3">
              {[
                "Certified technology experts",
                "Agile development methodology", 
                "24/7 technical support",
                "100% satisfaction guarantee"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" style={{ color: '#212720' }} />
                  <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Our Team" 
              className="rounded-2xl shadow-2xl w-full h-auto"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-gradient-to-br from-blue-400 to-orange-400 rounded-2xl opacity-20 blur-3xl"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-3 sm:p-4 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              style={{ backgroundColor: 'rgba(255, 60, 26, 0.1)' }}
            >
              <div className="mb-2 flex justify-center" style={{ color: '#FF3C1A' }}>
                <stat.icon className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <div className="text-xl sm:text-2xl font-bold mb-1" style={{ color: '#FF3C1A' }}>
                {stat.number}
              </div>
              <div className="text-gray-600 text-xs sm:text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        <div>
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
              Our Core Values
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
              The principles that guide every project and partnership we build
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center p-4 sm:p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 text-white" style={{ backgroundColor: '#FF3C1A' }}>
                  <value.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;