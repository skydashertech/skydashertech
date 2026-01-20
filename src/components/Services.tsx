import React from "react";
import {
  Smartphone,
  Code,
  Database,
  Brain,
  Link as Wrench,
  Eye,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceItem {
  icon: any;
  title: string;
  description: string;
  features: string[];
  link?: string;
}

interface ServicesProps {
  customServices?: ServiceItem[];
}
const defaultServices: ServiceItem[] = [
  {
    icon: Brain,
    title: "AI Development",
    description:
      "Machine Learning, Deep Learning, and intelligent automation solutions to transform your business operations.",
    features: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
      "AI Chatbots",
    ],
    link: "/ai-development",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
    features: [
      "iOS Development",
      "Android Development",
      "React Native",
      "Flutter",
      "App Store Optimization",
    ],
    link: "/app-development",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built with cutting-edge technologies for optimal performance.",
    features: [
      "Responsive Design",
      "E-commerce Solutions",
      "Progressive Web Apps",
      "API Integration",
      "Performance Optimization",
    ],
    link: "/web-development",
  },

  // {
  //   icon: Brain,
  //   title: "AGENTIC AI / MULTI AGENTIC AI DEVELOPMENT",
  //   description: "Advanced autonomous AI agents and multi-agent systems that can work independently and collaboratively to solve complex business problems.",
  //   features: ["Autonomous AI Agents", "Multi-Agent Coordination", "Intelligent Decision Making", "Self-Learning Systems", "Agent Communication Protocols"]
  // },
  // {
  //   icon: BarChart3,
  //   title: "Big Data Solutions",
  //   description: "Comprehensive big data analytics and processing solutions to extract valuable insights from large datasets.",
  //   features: ["Data Processing", "Analytics Platforms", "Real-time Insights", "Data Visualization", "Predictive Modeling"]
  // },
  // {
  //   icon: LinkIcon,
  //   title: "Blockchain",
  //   description: "Secure blockchain solutions including smart contracts, DApps, and cryptocurrency platforms.",
  //   features: ["Smart Contracts", "DApp Development", "Cryptocurrency", "NFT Platforms", "Web3 Integration"]
  // },
  // {
  //   icon: Bot,
  //   title: "Chat Bot",
  //   description: "Intelligent chatbot solutions powered by AI to enhance customer engagement and automate support.",
  //   features: ["AI-Powered Bots", "Natural Language Understanding", "Multi-Platform Integration", "24/7 Automation", "Custom Workflows"]
  // },
  // {
  //   icon: Cloud,
  //   title: "Cloud Computing",
  //   description: "Scalable cloud infrastructure and services to power your digital transformation and growth.",
  //   features: ["Cloud Migration", "Infrastructure as Code", "Auto-scaling", "Disaster Recovery", "Security Solutions"]
  // },
  {
    icon: Wrench,
    title: "Custom Software",
    description:
      "Tailored software solutions designed specifically for your unique business requirements and workflows.",
    features: [
      "Custom Applications",
      "Business Process Automation",
      "Legacy System Integration",
      "API Development",
      "Scalable Architecture",
    ],
  },
  // {
  //   icon: BarChart3,
  //   title: "Data Analytics",
  //   description: "Advanced data analytics and business intelligence solutions to drive data-driven decision making.",
  //   features: ["Business Intelligence", "Data Mining", "Statistical Analysis", "Reporting Dashboards", "Performance Metrics"]
  // },
  // {
  //   icon: Cog,
  //   title: "DevOps",
  //   description: "Streamlined development and operations processes with continuous integration and deployment pipelines.",
  //   features: ["CI/CD Pipelines", "Infrastructure Automation", "Monitoring & Logging", "Container Orchestration", "Performance Optimization"]
  // },
  // {
  //   icon: Gamepad2,
  //   title: "Game Development",
  //   description: "Engaging game development for mobile, web, and desktop platforms with immersive user experiences.",
  //   features: ["Mobile Games", "Web Games", "Unity Development", "Game Design", "Multiplayer Systems"]
  // },
  {
    icon: Database,
    title: "IoT Development",
    description:
      "Internet of Things solutions connecting devices and enabling smart automation for various industries.",
    features: [
      "IoT Platforms",
      "Sensor Integration",
      "Real-time Monitoring",
      "Device Management",
      "Edge Computing",
    ],
  },
  // {
  //   icon: Cpu,
  //   title: "Machine Learning Solutions",
  //   description: "Advanced machine learning models and algorithms to automate processes and generate intelligent insights.",
  //   features: ["Supervised Learning", "Unsupervised Learning", "Deep Learning", "Model Training", "Algorithm Optimization"]
  // },
  // {
  //   icon: Palette,
  //   title: "UI/UX Designs",
  //   description: "User-centered design solutions that create intuitive and engaging digital experiences.",
  //   features: ["User Research", "Wireframing", "Prototyping", "Visual Design", "Usability Testing"]
  // },
  // {
  //   icon: Eye,
  //   title: "VR & AR Development",
  //   description: "Immersive virtual and augmented reality experiences for training, entertainment, and business applications.",
  //   features: ["VR Applications", "AR Solutions", "3D Modeling", "Immersive Experiences", "Cross-Platform VR/AR"]
  // },
  {
    icon: Eye,
    title: "And More...",
    description:
      "We are constantly exploring new technologies and opportunities to help your business thrive in the digital age.",
    features: [],
  },
];

const Services: React.FC<ServicesProps> = ({ customServices }) => {

  const services = customServices || defaultServices;

  return (
    <section
      id="services"
      className="py-12 sm:py-16"
      style={{ backgroundColor: "#f8f8ff" }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our <span style={{ color: "#FF3C1A" }}>Services</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Comprehensive technology solutions to help your business thrive in
            the digital age
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 sm:gap-6">
          {services.map((service, index) => {
            const CardContent = (
              <>
                <div
                  className="inline-flex p-2 sm:p-3 rounded-xl text-white mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: "#FF3C1A" }}
                >
                  <service.icon className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>

                <ul className="space-y-1 sm:space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-xs sm:text-sm text-gray-700"
                    >
                      <div
                        className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mr-2 sm:mr-3 flex-shrink-0"
                        style={{ backgroundColor: "#FF3C1A" }}
                      ></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                {service.link && (
                  <div className="pt-4">
                    <Link
                      key={index}
                      to={service.link}
                      className="inline-flex items-center text-orange-500 font-semibold cursor-pointer hover:-translate-y-1 transition-transform duration-300"
                    >
                      Explore <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                )}
              </>
            );

            if (service.link) {
              return (
                <Link
                  key={index}
                  to={service.link}
                  target="_blank"
                  className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-gray-200 block h-full cursor-pointer hover:-translate-y-1"
                >
                  {CardContent}
                </Link>
              );
            }

            return (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-gray-200 h-full"
              >
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
