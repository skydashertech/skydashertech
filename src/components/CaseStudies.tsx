import React, { useState } from 'react';
import { ArrowRight, TrendingUp, Users, Award } from 'lucide-react';

interface CaseStudy {
    id: string;
    title: string;
    client: string;
    industry: string;
    challenge: string;
    solution: string;
    results: {
      metric: string;
      value: string;
      improvement: string;
    }[];
    technologies: string[];
    timeline: string;
    testimonial: {
      quote: string;
      author: string;
      role: string;
      company: string;
    };
}

const CASE_STUDIES: CaseStudy[] = [
  {
        id: 'case-1',
        title: 'E-Commerce Platform Modernization',
        client: 'TechRetail Co.',
        industry: 'E-Commerce',
        challenge: 'Legacy system with slow loading times (6+ seconds), high bounce rate (45%), and low conversion (1.2%). Annual revenue loss: $250K+',
        solution: 'Rebuilt frontend with React, optimized backend with Node.js, implemented CDN, added AI-driven recommendations. Performance optimization reduced load time to 1.2 seconds, improved UX/UI for mobile-first experience.',
        results: [
          {
                    metric: 'Page Load Time',
                    value: '1.2s',
                    improvement: '↓ 83% from 6.5s'
          },
          {
                    metric: 'Bounce Rate',
                    value: '18%',
                    improvement: '↓ 60% from 45%'
          },
          {
                    metric: 'Conversion Rate',
                    value: '4.8%',
                    improvement: '↑ 300% from 1.2%'
          },
          {
                    metric: 'Annual Revenue',
                    value: '+$1.2M',
                    improvement: '↑ 22% YoY growth'
          }
              ],
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'TensorFlow'],
        timeline: '16 weeks',
        testimonial: {
                quote: 'SkyDasher Tech transformed our entire platform. The results exceeded expectations - we saw immediate improvements in customer satisfaction and revenue growth.',
                author: 'Sarah Johnson',
                role: 'CEO',
                company: 'TechRetail Co.'
        }
  },
  {
        id: 'case-2',
        title: 'AI-Powered Customer Support System',
        client: 'FinanceFlow Inc.',
        industry: 'Financial Services',
        challenge: 'Support team overwhelmed with 5,000+ queries/day, average response time 4 hours, customer satisfaction 62%, support costs $400K/year',
        solution: 'Developed AI chatbot with GPT-4 integration, multi-language NLP, knowledge base integration, and seamless human handoff. Implemented ticketing system with predictive routing.',
        results: [
          {
                    metric: 'Response Time',
                    value: '2 mins',
                    improvement: '↓ 98% from 4 hours'
          },
          {
                    metric: 'Customer Satisfaction',
                    value: '94%',
                    improvement: '↑ 32 points from 62%'
          },
          {
                    metric: 'Automation Rate',
                    value: '78%',
                    improvement: 'Resolved without human'
          },
          {
                    metric: 'Cost Reduction',
                    value: '$285K/year',
                    improvement: '↓ 71% savings'
          }
              ],
        technologies: ['GPT-4 API', 'React', 'Python', 'RASA NLP', 'MongoDB', 'Docker'],
        timeline: '12 weeks',
        testimonial: {
                quote: 'The AI chatbot reduced our support burden significantly while improving customer experience. ROI was achieved in just 8 months.',
                author: 'Michael Chen',
                role: 'Head of Operations',
                company: 'FinanceFlow Inc.'
        }
  },
  {
        id: 'case-3',
        title: 'Healthcare Management Platform',
        client: 'MediCare Plus',
        industry: 'Healthcare',
        challenge: 'Manual patient records system, no online booking, poor accessibility, HIPAA non-compliant, patient data scattered across departments',
        solution: 'Built HIPAA-compliant patient management system with React frontend, secure backend, encrypted database, telemedicine integration, mobile app (React Native)',
        results: [
          {
                    metric: 'Patient Access Time',
                    value: '< 1 min',
                    improvement: '↓ 95% from 2-3 days'
          },
          {
                    metric: 'Appointment Efficiency',
                    value: '92%',
                    improvement: 'No-show rate reduced'
          },
          {
                    metric: 'Patients Onboarded',
                    value: '12,000+',
                    improvement: '↑ From 0 digital users'
          },
          {
                    metric: 'Compliance Score',
                    value: '100%',
                    improvement: '↑ HIPAA certified'
          }
              ],
        technologies: ['React', 'React Native', 'Node.js', 'PostgreSQL', 'Encryption', 'AWS HIPAA'],
        timeline: '20 weeks',
        testimonial: {
                quote: 'SkyDasher Tech delivered a world-class healthcare platform that improved our operations and patient satisfaction. The team\'s HIPAA expertise was invaluable.',
                author: 'Dr. Emily Rodriguez',
                role: 'Medical Director',
                company: 'MediCare Plus'
        }
  },
  {
        id: 'case-4',
        title: 'Supply Chain Optimization with AI',
        client: 'LogisticsPro',
        industry: 'Logistics',
        challenge: 'Inefficient supply chain, 15% inventory waste, delayed deliveries, poor demand forecasting, manual processes, operational cost: $2.5M/year',
        solution: 'Implemented ML model for demand forecasting, real-time tracking dashboard, route optimization algorithm, automated reordering system, predictive maintenance',
        results: [
          {
                    metric: 'Inventory Waste',
                    value: '4%',
                    improvement: '↓ 73% from 15%'
          },
          {
                    metric: 'Delivery Accuracy',
                    value: '99.1%',
                    improvement: '↑ From 94%'
          },
          {
                    metric: 'Forecast Accuracy',
                    value: '96%',
                    improvement: '↑ ML predictions'
          },
          {
                    metric: 'Cost Reduction',
                    value: '$580K/year',
                    improvement: '↓ 23% from $2.5M'
          }
              ],
        technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'Google Maps API', 'AWS ML'],
        timeline: '18 weeks',
        testimonial: {
                quote: 'The AI-powered supply chain solution transformed our logistics operations. We\'re seeing results that justify the investment multiple times over.',
                author: 'Robert Williams',
                role: 'Operations Manager',
                company: 'LogisticsPro'
        }
  }
  ];

interface CaseStudiesProps {
    limit?: number;
}

export default function CaseStudies({ limit }: CaseStudiesProps) {
    const [selectedId, setSelectedId] = useState<string>(CASE_STUDIES[0].id);

  const displayedStudies = limit ? CASE_STUDIES.slice(0, limit) : CASE_STUDIES;
    const selectedStudy = displayedStudies.find(study => study.id === selectedId) || displayedStudies[0];

  // Schema.org CaseStudy Schema for SEO/GEO
  const caseStudySchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'itemListElement': displayedStudies.map((study, index) => ({
                '@type': 'CaseStudy',
                '@id': study.id,    '@type': 'Person',
                    'name': study.testimonial.author,
                    'jobTitle': study.testimonial.role
        },
                                                                           'reviewBody': study.testimonial.quote,
                                                        'reviewRating': {
                                                                    '@type': 'Rating',
                                                                    'ratingValue': '5',
                                                                    'bestRating': '5'
  }
}
}))
};

  return (
        <section id="case-studies" className="py-20 bg-white">
          {/* CaseStudy Schema markup for SEO/GEO */}
              <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
                      />
        
              <div className="max-w-7xl mx-auto px-6">
                {/* Header with E-E-A-T signals */}
                      <div className="text-center mb-16">
                                <div className="flex items-center justify-center gap-3 mb-4">
                                            <Award className="text-orange-600" size={28} />
                                            <span className="text-orange-600 font-semibold">PROVEN RESULTS</span>span>
                                </div>div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                            Case Studies: Real Results from Real Clients
                                </h2>h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                            Discover how we've helped {displayedStudies.length}+ companies achieve their business goals through innovative technology solutions
                                </p>p>
                      </div>div>
                         <h3 className="text-lg font-bold text-gray-900 mb-2">
                           {study.title}
                         </h3>h3>4} />
                                  )}
              </div>div>
        </section>button>
                ))}
    </div>

{/* Case Study Details */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8">
            {/* Challenge */}
                      <div className="mb-6">
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">Challenge</h4>h4>
                                    <p className="text-gray-700 leading-relaxed">
                                      {selectedStudy.challenge}
                                    </p>p>
                      </div>div>
          
            {/* Solution */}
                      <div className="mb-6">
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">Solution</h4>h4>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                      {selectedStudy.solution}
                                    </p>p>
                                    <div className="flex flex-wrap gap-2">
                                      {selectedStudy.technologies.map((tech) => (
                              <span
                                                    key={tech}
                                                    className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"ite rounded-lg p-3">
                                                    <p className="text-sm text-gray-600 mb-1">{result.metric}</p>
                                                    <p className="text-xl font-bold text-orange-600">
                                {result.value}
                                </p>
                                                    <p className="text-xs text-green-600 font-semibold">
                                {result.improvement}
                                </p>
                                </div>
                                                ))}
                                </div>
                                </div>

                                {/* Testimonial - E-E-A-T signal (Trust) */}
                                            <div className="bg-white rounded-lg p-6 border-l-4 border-orange-600">
                                              <p className="text-gray-700 italic mb-4">
                                                "{selectedStudy.testimonial.quote}"
                                </p>
                                              <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                                  <span key={star} className="text-yellow-400 text-lg">
                                                    ★
                                </span>
                                                ))}
                                </div>
                                              <p className="font-semibold text-gray-900 mt-3">
                                {selectedStudy.testimonial.author}
                                </p>
                                              <p className="text-sm text-gray-600">
                                {selectedStudy.testimonial.role}, {selectedStudy.testimonial.company}
                                </p>
                                </div>
                                </div>
                                </div>


                                {/* Statistics Section - E-E-A-T signals (Expertise) */}
                                        <div className="mt-16 bg-gradient-to-r from-orange-50 to-blue-50 rounded-lg p-12">
                                          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                                            <div>
                                              <p className="text-4xl font-bold text-orange-600 mb-2">50+</p>
                                              <p className="text-gray-700 font-medium">Projects Delivered</p>
                                </div>
                                            <div>
                                              <p className="text-4xl font-bold text-blue-600 mb-2">$2.5B+</p>
                                              <p className="text-gray-700 font-medium">Client Revenue Impact</p>
                                </div>
                                            <div>
                                              <p className="text-4xl font-bold text-green-600 mb-2">95%</p>
                                              <p className="text-gray-700 font-medium">Client Retention Rate</p>
                                </div>
                                            <div>
                                              <p className="text-4xl font-bold text-purple-600 mb-2">5+</p>
                                              <p className="text-gray-700 font-medium">Years Experience</p>
                                </div>
                                </div>
                                </div>

                                
                                {/* CTA */}
                                        <div className="mt-12 text-center">
                                          <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                            Ready to achieve similar results?
                                </h3>
                                          <a
                                            href="#contact"
                                            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors"
                                          >
                                            Start Your Project
                                </a>
                                </div>
                                </div>
                                </section>
                                  );
                                }
                                                  >
                                {tech}
                              </span>span>
                            ))}
                                    </div>div>
                      </div>div>
          
            {/* Results with E-E-A-T signals (concrete metrics) */}
                      <div className="mb-6">
                                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                                    <TrendingUp size={20} className="text-green-600" />
                                                    Measurable Results
                                    </h4>h4>
                                    <div className="grid grid-cols-2 gap-4">
                                      {selectedStudy.results.map((result, idx) => (
                              <div key={idx} className="bg-wh</div>
                                  <p className="text-gray-600 text-sm mb-3">{study.client}</p>p>
                                  <div className="flex items-center gap-2 text-sm">
                                                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                                          {study.industry}
                                                        </span>span>
                                                        <span className="text-gray-500">
                                                          {study.timeline}
                                                        </span>span>
                                  </div>div>
              </div>div>
          {selectedId === study.id && (
                              <ArrowRight className="text-orange-600 flex-shrink-0" size={2</h3>
                      <div className="grid lg:grid-cols-2 gap-12">
                        {/* Case Study List */}
                                <div className="space-y-4">
                                  {displayedStudies.map((study) => (
                        <button
                                          key={study.id}
                                          onClick={() => setSelectedId(study.id)}
                                          className={`w-full text-left p-6 rounded-lg transition-all ${
                                                              selectedId === study.id
                                                                ? 'bg-orange-50 border-2 border-orange-600 shadow-lg'
                                                                : 'bg-gray-50 border-2 border-transparent hover:border-orange-200'
                                          }`}
                                        >
                                        <div className="flex items-start justify-between">
                                                          <div>
                                                                   </section>
                'position': index + 1,
                'name': study.title,
                'description': study.challenge,
                'client': {
                          '@type': 'Organization',
                          'name': study.client,
                          'industry': study.industry
                },
                'result': study.results.map(r => ({
                          '@type': 'Thing',
                          'name': r.metric,
                          'value': r.value
                })),
                'testimonial': {
                          '@type': 'Review',
                          'author': {
                                  
