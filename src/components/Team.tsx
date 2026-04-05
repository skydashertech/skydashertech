import React from 'react';
import { Linkedin, Twitter, Mail, Award, Users } from 'lucide-react';

interface TeamMember {
    id: string;
    name: string;
    role: string;
    expertise: string[];
    bio: string;
    credentials: {
      certification: string;
      issuer: string;
      year: number;
    }[];
    experience: string;
    image: string;
    social: {
      linkedin?: string;
      twitter?: string;
      email: string;
    };
}

const TEAM: TeamMember[] = [
  {
        id: 'team-1',
        name: 'Pranav Premanand',
        role: 'Founder & Lead Architect',
        expertise: ['Full-Stack Development', 'Cloud Architecture', 'System Design', 'AI/ML Integration'],
        bio: 'Pranav is a visionary technology leader with 8+ years of experience building scalable applications for Fortune 500 companies. He specializes in designing enterprise-grade solutions and leading technical teams through complex transformations. His expertise spans from microservices architecture to machine learning pipelines.',
        credentials: [
          {
                    certification: 'AWS Solutions Architect Professional',
                    issuer: 'Amazon Web Services',
                    year: 2023
          },
          {
                    certification: 'Google Cloud Professional Cloud Architect',
                    issuer: 'Google Cloud',
                    year: 2023
          },
          {
                    certification: 'Advanced TypeScript & System Design',
                    issuer: 'Tech Academy',
                    year: 2022
          }
              ],
        experience: '8+ years in full-stack development, 5+ years in cloud architecture, led teams of 15+',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Pranav',
        social: {
                linkedin: 'https://linkedin.com/in/pranav-premanand',
                twitter: 'https://twitter.com/pranavtech',
                email: 'pranav@skydashertech.com'
        }
  },
  {
        id: 'team-2',
        name: 'Shyam Sankar',
        role: 'CTO & AI/ML Specialist',
        expertise: ['Machine Learning', 'AI Integration', 'Data Science', 'Python', 'TensorFlow'],
        bio: 'Shyam leads our AI and machine learning initiatives, bringing 6+ years of experience in building intelligent systems. He has trained and deployed 50+ ML models in production, achieving 95%+ accuracy rates. His work spans computer vision, NLP, and predictive analytics.',
        credentials: [
          {
                    certification: 'TensorFlow Advanced Developer Certification',
                    issuer: 'Google',
                    year: 2023
          },
          {
                    certification: 'Data Science and Machine Learning Professional',
                    issuer: 'Coursera + Stanford',
                    year: 2022
          },
          {
                    certification: 'AWS Machine Learning Specialist',
                    issuer: 'Amazon Web Services',
                    year: 2023
          }
              ],
        experience: '6+ years in ML/AI, 50+ models deployed, 95%+ accuracy track record',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Shyam',
        social: {
                linkedin: 'https://linkedin.com/in/shyam-sankar-ai',
                email: 'shyam@skydashertech.com'
        }
  },
  {
        id: 'team-3',
        name: 'Aisha Patel',
        role: 'Senior Frontend Engineer',
        expertise: ['React', 'TypeScript', 'UX/UI', 'Performance Optimization', 'Web Design'],
        bio: 'Aisha is a passionate frontend engineer with 5+ years of experience crafting beautiful, performant user interfaces. She has optimized apps to achieve 100 Lighthouse scores and led design system implementations for 10+ products. Her focus is on creating accessible, delightful user experiences.',
        credentials: [
          {
                    certification: 'Professional Web Design & Development',
                    issuer: 'Google',
                    year: 2023
          },
          {
                    certification: 'React Advanced Patterns',
                    issuer: 'Epic React',
                    year: 2022
          },
          {
                    certification: 'Certified Accessibility Specialist (CPACC)',
                    issuer: 'IAAP',
                    year: 2023
          }
              ],
        experience: '5+ years in frontend development, 10+ design systems implemented, 100 Lighthouse scores',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha',
        social: {
                linkedin: 'https://linkedin.com/in/aisha-patel-frontend',
                twitter: 'https://twitter.com/aishadesigns',
                email: 'aisha@skydashertech.com'
        }
  },
  {
        id: 'team-4',
        name: 'Marcus Johnson',
        role: 'DevOps & Cloud Infrastructure Specialist',
        expertise: ['AWS', 'Kubernetes', 'CI/CD', 'Infrastructure as Code', 'Security'],
        bio: 'Marcus brings 7+ years of DevOps expertise, specializing in building secure, scalable cloud infrastructure. He has managed deployments for 100+ applications with 99.99% uptime. His focus is on automation, security, and cost optimization in cloud environments.',
        credentials: [
          {
                    certification: 'AWS Solutions Architect Professional',
                    issuer: 'Amazon Web Services',
                    year: 2023
          },
          {
                    certification: 'Certified Kubernetes Administrator (CKA)',
                    issuer: 'The Linux Foundation',
                    year: 2023
          },
          {
                    certification: 'AWS Security - Specialty',
                    issuer: 'Amazon Web Services',
                    year: 2023
          }
              ],
        experience: '7+ years DevOps, 100+ applications managed, 99.99% uptime achievement',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
        social: {
                linkedin: 'https://linkedin.com/in/marcus-devops',
                email: 'marcus@skydashertech.com'
        }
  }
  ];

export default function Team() {
    // Schema.org Team/Person Schema for E-E-A-T
  const teamSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'SkyDasher Tech',
        'url': 'https://www.skydashertech.com',
        'team': TEAM.map(member => ({
                '@type': 'Person',
                'name': member.name,
                'jobTitle': member.role,
                'description': member.bio,
                'knowsAbout': member.expertise,
                'email': member.social.email,
                'sameAs': [
                          member.social.linkedin,
                          member.social.twitter
                        ].filter(Boolean),
                'credential': member.credentials.map(cred => ({
                          '@type': 'EducationalOccupationalCredential',
                          'name': cred.certification,
                          'credentialCategory': 'certification',
                          'issuedBy': {
                                      '@type': 'Organization',
                                      'name': cred.issuer
                          },
                          'dateIssued': `${cred.year}-01-01`
                }))
        }))
  };

  return (
        <section id="team" className="py-20 bg-gradient-to-b from-gray-50 to-white">
          {/* Team/Person Schema markup for E-E-A-T */}
              <</section>
