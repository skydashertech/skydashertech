import React from 'react';
import { MessageSquare, FileText, Code, Rocket, CheckCircle, Users } from 'lucide-react';

const Journey = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Discovery",
      description: "Understanding your business goals and challenges through detailed consultations.",
      features: ["Business analysis", "Goal alignment", "Requirement gathering"]
    },
    {
      icon: FileText,
      title: "Planning",
      description: "Developing comprehensive strategy and project roadmap tailored to your needs.",
      features: ["Strategic planning", "Custom roadmap", "Timeline development"]
    },
    {
      icon: Code,
      title: "Development",
      description: "Bringing your vision to life with cutting-edge technology and design.",
      features: ["Modern tech stack", "Responsive design", "Iterative development"]
    },
    {
      icon: CheckCircle,
      title: "Testing",
      description: "Rigorous testing ensures highest standards of quality and performance.",
      features: ["Quality assurance", "Performance testing", "Security validation"]
    },
    {
      icon: Rocket,
      title: "Launch",
      description: "Complete launch process and smooth deployment of your solution.",
      features: ["Seamless deployment", "Go-live support", "Performance monitoring"]
    },
    {
      icon: Users,
      title: "Support",
      description: "Ongoing support and maintenance to keep your solution running optimally.",
      features: ["24/7 support", "Regular updates", "Continuous improvement"]
    }
  ];

  return (
    <section className="py-12 sm:py-16" style={{ backgroundColor: '#f8f8ff' }}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Your <span style={{ color: '#FF3C1A' }}>Journey</span> With Us
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            From consultation to deployment, we guide you through every step
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group border border-gray-100">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: 'rgba(255, 60, 26, 0.1)', color: '#FF3C1A' }}>
                <step.icon className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                {step.title}
              </h3>
              
              <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                {step.description}
              </p>
              
              <ul className="space-y-1 sm:space-y-2 text-left">
                {step.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-700">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-2 sm:mr-3 flex-shrink-0" style={{ color: '#212720' }} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 bg-white p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-100">
          <div className="text-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 text-white" style={{ backgroundColor: '#FF3C1A' }}>
              <Users className="h-6 w-6 sm:h-8 sm:w-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 mb-4 max-w-2xl mx-auto text-sm sm:text-base px-4">
              Let's discuss your project and create a customized solution that drives your business forward.
            </p>
            <a 
              href="#contact" 
              className="text-white px-6 sm:px-8 py-3 rounded-full transition-all duration-200 font-semibold shadow-lg hover:shadow-xl inline-block text-sm sm:text-base"
              style={{ backgroundColor: '#FF3C1A' }}
            >
              Start Your Project Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;