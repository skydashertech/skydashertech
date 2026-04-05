import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    category: 'web' | 'app' | 'ai';
    link?: string;
    github?: string;
    year: number;
    result: string;
}

const PORTFOLIO_PROJECTS: Project[] = [
  {
        id: 1,
        title: 'AI-Powered Analytics Platform',
        description: 'Real-time data analytics platform using machine learning for predictive insights and business intelligence.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
        technologies: ['React', 'Python', 'TensorFlow', 'PostgreSQL', 'AWS'],
        category: 'ai',
        link: 'https://example.com/analytics',
        github: 'https://github.com/skydashertech/analytics',
        year: 2025,
        result: '300% increase in data processing speed'
  },
  {
        id: 2,
        title: 'Mobile Banking Application',
        description: 'Secure and user-friendly mobile banking app with real-time transactions, bill payments, and investment tracking.',
        image: 'https://images.unsplash.com/photo-1512941691920-25bda36fda35?w=500&h=300&fit=crop',
        technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase'],
        category: 'app',
        link: 'https://example.com/banking',
        year: 2024,
        result: '50,000+ downloads in first month'
  },
  {
        id: 3,
        title: 'E-Commerce Platform Redesign',
        description: 'Complete redesign and development of e-commerce platform with improved user experience and conversion optimization.',
        image: 'https://images.unsplash.com/photo-1460925895917-adbf19c3c537?w=500&h=300&fit=crop',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shopify'],
        category: 'web',
        link: 'https://example.com/ecommerce',
        year: 2024,
        result: '45% increase in conversion rate'
  },
  {
        id: 4,
        title: 'AI Chatbot for Customer Support',
        description: 'Intelligent customer support chatbot powered by GPT-4 with natural language processing and multi-language support.',
        image: 'https://images.unsplash.com/photo-1677442d019cecf8d9b47f64d1b850a1e6d14cd1?w=500&h=300&fit=crop',
        technologies: ['OpenAI API', 'React', 'Node.js', 'PostgreSQL'],
        category: 'ai',
              link: 'https://example.com/chatbot',
        year: 2024,
        result: '80% customer queries resolved automatically'
  },
  {
        id: 5,
        title: 'Fitness Tracking Mobile App',
        description: 'Comprehensive fitness tracking application with workout plans, nutrition tracking, and social features.',
        image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=300&fit=crop',
        technologies: ['Flutter', 'Firebase', 'REST API', 'Google Fit API'],
        category: 'app',
        link: 'https://example.com/fitness',
        year: 2023,
        result: '100,000+ active users'
  },
  {
        id: 6,
        title: 'Enterprise SaaS Management System',
        description: 'Scalable SaaS platform for enterprise resource planning with real-time collaboration and advanced reporting.',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop',
        technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis', 'AWS'],
        category: 'web',
        link: 'https://example.com/saas',
        year: 2023,
        result: '200+ enterprise clients'
  },
  {
        id: 7,
        title: 'Real Estate Platform with AR',
        description: 'Revolutionary real estate platform with augmented reality property visualization and virtual tours.',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop',
        technologies: ['React', 'Unity', 'ARKit', 'Node.js'],
        category: 'app',
        link: 'https://example.com/realestate',
        year: 2023,
        result: '$50M+ property listings'
  },
  {
        id: 8,
        title: 'AI Content Generation Platform',
        description: 'Automated content generation platform using advanced AI to create high-quality blog posts and marketing copy.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
        technologies: ['GPT-3', 'React', 'Python', 'FastAPI', 'PostgreSQL'],
        category: 'ai',
        link: 'https://example.com/content-ai',
        year: 2024,
        result: '1M+ pieces of content generated'
  },
  {
        id: 9,
        title: 'Healthcare Management System',
        description: 'Comprehensive healthcare management system with patient records, appointment scheduling, and telemedicine capabilities.',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop',
        technologies: ['React', 'Express.js', 'MongoDB', 'HIPAA Compliant'],
        category: 'web',
        link: 'https://example.com/healthcare',
        year: 2024,
        result: 'Serving 50,000+ patients'
  },
  {
        id: 10,
        title: 'Supply Chain Optimization AI',
        description: 'AI-powered supply chain optimization reducing costs and improving delivery times through predictive analytics.',
        image: 'https://images.unsplash.com/photo-1553531889-e6cf89d08e5f?w=500&h=300&fit=crop',
        technologies: ['Python', 'TensorFlow', 'React', 'Node.js', 'AWS'],
        category: 'ai',
        link: 'https://example.com/supply-chain',
        year: 2024,
        result: '35% reduction in logistics costs'
  },
  {
        id: 11,
        title: 'Social Commerce Platform',
        description: 'Integrated social shopping platform enabling creators to sell directly to their audiences with live shopping features.',
        image: 'https://images.unsplash.com/photo-1611532736598-de2c40ecc718?w=500&h=300&fit=crop',
        technologies: ['Next.js', 'GraphQL', 'Stripe', 'WebRTC'],
        category: 'web',
        link: 'https://example.com/social-commerce',
        year: 2023,
        result: '$5M+ GMV in first year'
  },
  {
        id: 12,
        title: 'Predictive Maintenance IoT System',
        description: 'IoT-based predictive maintenance system for manufacturing using machine learning to prevent equipment failures.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop',
        technologies: ['IoT', 'Machine Learning', 'React', 'Node.js', 'Time-Series DB'],
        category: 'ai',
        link: 'https://example.com/maintenance-ai',
        year: 2023,
        result: '40% reduction in downtime'
  }
  ];

export default function Portfolio() {
    const [selectedCategory, setSelectedCategory] = React.useState<'all' | 'web' | 'app' | 'ai'>('all');

  const filteredProjects = selectedCategory === 'all'
      ? PORTFOLIO_PROJECTS
        : PORTFOLIO_PROJECTS.filter(project => project.category === selectedCategory);

  const stats = [
    { label: 'Projects Completed', value: '50+' },
    { label: 'Active Users', value: '500K+' },
    { label: 'Client Satisfaction', value: '98%' },
    { label: 'Years Experience', value: '5+' }
      ];

  return (
        <section id="portfolio" className="py-20 bg-gradient-to-b from-gray-50 to-white">
              <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                      <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>h2>
                                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                            Showcase of our latest projects demonstrating expertise in Web, Mobile, and AI development
                                </p>p>
                      </div>div>
              
                {/* Stats */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                        {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                                    <div className="text-3xl font-bold text-orange-600 mb-2">{stat.value}</div>div>
                                    <div className="text-gray-600">{stat.label}</div>div>
                      </div>div>
                    ))}
                      </div>div>
              
                {/* Category Filter */}
                      <div className="flex justify-center gap-4 mb-12 flex-wrap">
                        {(['all', 'web', 'app', 'ai'] as const).map(category => (
                      <button
                                      key={category}
                                      onClick={() => setSelectedCategory(category)}
                                      className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                                                        selectedCategory === category
                                                          ? 'bg-orange-600 text-white'
                                                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                      }`}
                                    >
                        {category === 'all' ? 'All Projects' : category.toUpperCase()}
                      </button>button>
                    ))}
                      </div>div>
              
                {/* Projects Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map(project => (
                      <div
                                      key={project.id}
                                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                                    >
                        {/* Project Image */}
                                    <div className="relative h-48 bg-gray-300 overflow-hidden">
                                                    <img
                                                                        src={project.image}
                                                                        alt={project.title}
                                                                        className="w-full h-full object-cover hover:scale-110 transition-transform"
                                                                      />
                                                    <div className="absolute top-4 right-4">
                                                                      <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                                                        {project.category.toUpperCase()}
                                                                      </span>span>
                                                    </div>div>
                                    </div>div>
                      
                        {/* Project Content */}
                                    <div className="p-6">
                                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>h3>
                                                    <p className="text-gray-600 text-sm mb-4">{project.description}</p>p>
                                    
                                      {/* Technologies */}
                                                    <div className="mb-4">
                                                                      <p className="text-sm font-medium text-gray-900 mb-2">Technologies</p>p>
                                                                      <div className="flex flex-wrap gap-2">
                                                                        {project.technologies.map((tech, index) => (
                                                            <span
                                                                                      key={index}
                                                                                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                                                                                    >
                                                              {tech}
                                                            </span>span>
                                                          ))}
                                                                      </div>div>
                                                    </div>div>
                                    
                                      {/* Result */}
                                                    <div className="bg-green-50 border-l-4 border-green-600 p-3 mb-4">
                                                                      <p className="text-green-900 font-medium text-sm">{project.result}</p>p>
                                                    </div>div>
                                    
                                      {/* Year */}
                                                    <div className="text-gray-500 text-sm mb-4">Completed: {project.year}</div>div>
                                    
                                      {/* Links */}
                                                    <div className="flex gap-3">
                                                      {project.link && (
                                                          <a
                                                                                  href={project.link}
                                                                                  target="_blank"
                                                                                  rel="noopener noreferrer"
                                                                                  className="flex-1 inline-flex items-center justify-center gap-2 bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium"
                                                                                >
                                                                                <ExternalLink size={16} />
                                                                                View Project
                                                          </a>a>
                                                                      )}
                                                      {project.github && (
                                                          <a
                                                                                  href={project.github}
                                                                                  target="_blank"
                                                                                  rel="noopener noreferrer"
                                                                                  className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 py-2 rounded-lg hover:border-orange-600 hover:text-orange-600 transition-colors text-sm font-medium"
                                                                                >
                                                                                <Github size={16} />
                                                                                Code
                                                          </a>a>
                                                                      )}
                                                    </div>div>
                                    </div>div>
                      </div>div>
                    ))}
                      </div>div>
              
                {/* CTA */}
                      <div className="text-center mt-16">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h3>h3>
                                <p className="text-gray-600 mb-8">Let's collaborate to bring your ideas to life</p>p>
                                <a
                                              href="#contact"
                                              className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors"
                                            >
                                            Get In Touch
                                </a>a>
                      </div>div>
              </div>div>
        </section>section>
      );
}</section>
