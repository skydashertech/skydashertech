import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'services' | 'process' | 'technical' | 'pricing' | 'general';
}

const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-web-dev-1',
    question: 'What is web development and why does my business need it?',
    answer: 'Web development is the process of building and maintaining websites and web applications. Your business needs it to establish online presence, reach customers globally, generate leads, process payments, and provide 24/7 customer access. Modern web applications are essential for competitive advantage in digital markets.',
    category: 'services',
  },
  {
    id: 'faq-web-dev-2',
    question: 'How long does a typical web development project take?',
    answer: 'Project timelines vary based on complexity. Simple websites take 2-4 weeks, medium-complexity sites take 4-8 weeks, and complex enterprise applications take 2-6 months. We provide detailed project timelines during the discovery phase after understanding your requirements.',
    category: 'process',
  },
  {
    id: 'faq-web-dev-3',
    question: 'What technologies do you use for web development?',
    answer: 'We use modern, industry-standard technologies: React and Vue.js for frontend, Node.js and Python for backend, PostgreSQL and MongoDB for databases, AWS and Vercel for hosting. We select technologies based on project requirements to ensure scalability, performance, and maintainability.',
    category: 'technical',
  },
  {
    id: 'faq-app-dev-1',
    question: 'What is the difference between native and cross-platform mobile app development?',
    answer: 'Native apps (iOS/Android) offer best performance and platform-specific features but require separate codebases. Cross-platform apps (React Native, Flutter) use single codebase for multiple platforms, reducing development time and cost by 40-50%. Choose based on budget, timeline, and feature requirements.',
    category: 'services',
  },
  {
    id: 'faq-app-dev-2',
    question: 'How much does it cost to develop a mobile application?',
    answer: 'Mobile app costs range from $15,000 for simple apps to $150,000+ for complex applications. Factors affecting cost include: features (10-30% of budget), design (15-25%), development (40-50%), testing (10-15%), and deployment (5-10%). We provide custom quotes after understanding requirements.',
    category: 'pricing',
  },
  {
    id: 'faq-app-dev-3',
    question: 'What is mobile app optimization and why is it important?',
    answer: 'Mobile app optimization involves improving load times, reducing battery consumption, minimizing app size, and enhancing user experience. It is important because: optimized apps have 3x higher engagement, 2x better retention, 70% fewer crashes, and 40% faster load times. Performance directly impacts user satisfaction and app store rankings.',
    category: 'technical',
  },
  {
    id: 'faq-ai-dev-1',
    question: 'How can AI and machine learning improve my business?',
    answer: 'AI/ML can: automate repetitive tasks (30-50% efficiency gain), predict customer behavior (improve targeting by 35%), detect fraud (99.5% accuracy), personalize user experiences (increase conversion 20-40%), optimize operations (cost reduction 15-25%), and provide data-driven insights. AI ROI typically ranges from 2-5x within 12 months.',
    category: 'services',
  },
  {
    id: 'faq-ai-dev-2',
    question: 'What data do you need to train an AI model?',
    answer: 'Effective AI training requires: 1,000-10,000+ clean, labeled data points (quality > quantity), diverse data representing real-world scenarios, 70% training data, 15% validation data, 15% test data. We help clients collect, clean, and structure data for optimal model performance. More data generally improves accuracy by 2-5%.',
    category: 'technical',
  },
  {
    id: 'faq-ai-dev-3',
    question: 'What is the difference between AI chatbots and traditional automation?',
    answer: 'AI chatbots use natural language processing to understand and respond to complex queries with 85-95% accuracy, learn from interactions, and handle 10,000+ conversation variations. Traditional automation handles only pre-defined scenarios. AI chatbots reduce support costs by 60-75% while improving customer satisfaction scores by 30-40%.',
    category: 'services',
  },
  {
    id: 'faq-process-1',
    question: 'What is your typical project development process?',
    answer: 'Our process follows these stages: 1) Discovery & Planning (understand goals, scope, timeline), 2) Design (wireframes, prototypes, user testing), 3) Development (agile sprints, code reviews, testing), 4) Launch (deployment, monitoring, optimization), 5) Support (maintenance, updates, improvements). Total timeline varies from 4-24 weeks.',
    category: 'process',
  },
  {
    id: 'faq-process-2',
    question: 'How do you ensure project quality and meet deadlines?',
    answer: 'Quality assurance measures: automated testing (unit, integration, end-to-end), code reviews, performance testing, security audits, user acceptance testing. Deadline management: detailed project planning, agile methodology, regular status updates, buffer time allocation, automated CI/CD. Our on-time delivery rate is 98%.',
    category: 'process',
  },
  {
    id: 'faq-general-1',
    question: 'Do you provide ongoing support and maintenance after launch?',
    answer: 'Yes. We offer maintenance packages including: bug fixes, security patches (monthly updates), performance optimization (quarterly reviews), feature enhancements, 24/7 monitoring, and priority support. Most clients allocate 15-20% of development budget annually for maintenance.',
    category: 'general',
  },
  {
    id: 'faq-general-2',
    question: 'How do you handle security and data privacy?',
    answer: 'Security is built-in: HTTPS/SSL encryption, GDPR compliance, data encryption at rest and in transit, regular security audits, penetration testing, secure authentication (OAuth 2.0), role-based access control, and backup systems. We follow OWASP standards and maintain SOC 2 compliance.',
    category: 'general',
  },
  {
    id: 'faq-pricing-1',
    question: 'What factors affect the overall cost of a project?',
    answer: 'Cost factors: project complexity (30%), feature scope (25%), team size (20%), timeline (15%), technology stack (10%). Additional costs: hosting ($20-500/month), domain ($10-50/year), maintenance (15-20% of dev cost/year), analytics tools ($0-500/month). Custom requirements may impact final pricing.',
    category: 'pricing',
  },
];

interface FAQProps {
  category?: 'all' | 'services' | 'process' | 'technical' | 'pricing' | 'general';
  limit?: number;
}

export default function FAQ({ category = 'all', limit }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const filteredFAQs = category === 'all'
    ? FAQ_DATA
    : FAQ_DATA.filter(item => item.category === category);

  const displayedFAQs = limit ? filteredFAQs.slice(0, limit) : filteredFAQs;

  // Schema.org FAQ Schema for SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': displayedFAQs.map(item => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer
      }
    }))
  };e="text-xl text-gray-600">
            Find answers to common questions about our services, process, and pricing
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {displayedFAQs.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hiFdAdQe.nt"s
x            >
              {/* Question - Semantic HTML for AEO */}
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                aria-expanded={openId === item.id}
              >
                <h3 className="text-lg font-semibold text-gray-900 text-left">
                  {item.question}
                </h3>
                <ChevronDown
                  size={24}
                  className={`text-orange-600 flex-shrink-0 transition-transform ${
                    openId === item.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer - Semantic HTML for AEO/GEO */}
              {openId === item.id && (
                <div className="px-6 pb-4 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                  <div className="mt-3 text-sm">
                    <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full">
                      {item.category === 'services' && 'Services'}
                      {item.category === 'process' && 'Process'}
                      {item.category === 'technical' && 'Technical'}
                      {item.category === 'pricing' && 'Pricing'}
                      {item.category === 'general' && 'General'}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-orange-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Didn't find your answer?
          </h3>
          <p className="text-gray-600 mb-6">
            Contact our team for personalized assistance and consultation
          </p>
          <a
            href="#contact"
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white to-gray-50">
      {/* FAQ Schema markup for Google Featured Snippets & AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p classNam
