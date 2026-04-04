import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  pageType?: 'home' | 'service' | 'about' | 'contact' | 'portfolio';
  serviceName?: string;
  serviceDescription?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

const SEOHead = ({
  title = 'SkyDasher Tech | #1 AI Development Company India | Web & App Development Coimbatore',
  description = 'SkyDasher Tech — India\'s top AI development company in Coimbatore. Expert in Agentic AI, web development, mobile apps, IoT & cloud solutions. 150+ projects, 97% satisfaction.',
  keywords = 'AI development company India, web development Coimbatore, mobile app development, agentic AI, custom software',
  canonical = 'https://www.skydashertech.com/',
  ogImage = 'https://www.skydashertech.com/og-image.jpg',
  pageType = 'home',
  serviceName,
  serviceDescription,
  breadcrumbs = [{ name: 'Home', url: 'https://www.skydashertech.com/' }],
}: SEOHeadProps) => {

  useEffect(() => {
    // Update document title
    document.title = title;

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!el) {
        el = document.createElement('link');
        el.rel = rel;
        document.head.appendChild(el);
      }
      el.href = href;
    };

    const setSchema = (id: string, data: object) => {
      let el = document.getElementById(id) as HTMLScriptElement;
      if (!el) {
        el = document.createElement('script');
        el.id = id;
        el.type = 'application/ld+json';
        document.head.appendChild(el);
      }
      el.textContent = JSON.stringify(data, null, 2);
    };

    // Primary Meta Tags
    setMeta('description', description);
    setMeta('keywords', keywords);

    // Open Graph
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:image', ogImage, true);
    setMeta('og:url', canonical, true);

    // Twitter
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);

    // Canonical
    setLink('canonical', canonical);

    // BreadcrumbList Schema
    setSchema('schema-breadcrumb', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': breadcrumbs.map((crumb, idx) => ({
        '@type': 'ListItem',
        'position': idx + 1,
        'name': crumb.name,
        'item': crumb.url,
      })),
    });

    // Service Page Schema
    if (pageType === 'service' && serviceName && serviceDescription) {
      setSchema('schema-service', {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${canonical}#service`,
        'name': serviceName,
        'description': serviceDescription,
        'url': canonical,
        'provider': {
          '@id': 'https://www.skydashertech.com/#organization',
        },
        'areaServed': ['India', 'United States', 'United Kingdom', 'UAE', 'Singapore', 'Australia'],
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': serviceName,
        },
      });

      // HowTo Schema for service pages (AEO)
      setSchema('schema-howto', {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': `How to get started with ${serviceName} at SkyDasher Tech`,
        'description': `Step-by-step guide to engaging SkyDasher Tech for ${serviceName}`,
        'step': [
          {
            '@type': 'HowToStep',
            'name': 'Discovery & Consultation',
            'text': 'Contact SkyDasher Tech via the form or WhatsApp. Our team conducts a free 30-minute consultation to understand your business goals, requirements, and project scope.',
            'position': 1,
          },
          {
            '@type': 'HowToStep',
            'name': 'Planning & Proposal',
            'text': 'We deliver a detailed project proposal including timeline, technology stack, milestones, and transparent pricing within 48 hours of the discovery call.',
            'position': 2,
          },
          {
            '@type': 'HowToStep',
            'name': 'Development & Iteration',
            'text': 'Our expert team builds your solution using agile methodology with regular updates, demos, and feedback sessions to ensure alignment with your vision.',
            'position': 3,
          },
          {
            '@type': 'HowToStep',
            'name': 'Testing & QA',
            'text': 'Rigorous testing across devices, browsers, and use cases ensures the highest quality. We perform unit tests, integration tests, and user acceptance testing.',
            'position': 4,
          },
          {
            '@type': 'HowToStep',
            'name': 'Launch & Support',
            'text': 'We handle the complete deployment process and provide 24/7 ongoing support, maintenance, and updates to keep your solution performing optimally.',
            'position': 5,
          },
        ],
      });
    }

    // WebPage Schema
    const webPageType = pageType === 'home'
      ? 'WebPage'
      : pageType === 'service'
      ? 'WebPage'
      : 'WebPage';

    setSchema('schema-webpage', {
      '@context': 'https://schema.org',
      '@type': webPageType,
      '@id': `${canonical}#webpage`,
      'url': canonical,
      'name': title,
      'description': description,
      'isPartOf': { '@id': 'https://www.skydashertech.com/#website' },
      'about': { '@id': 'https://www.skydashertech.com/#organization' },
      'inLanguage': 'en-IN',
      'datePublished': '2023-01-01',
      'dateModified': new Date().toISOString().split('T')[0],
    });

  }, [title, description, keywords, canonical, ogImage, pageType, serviceName, serviceDescription, breadcrumbs]);

  return null;
};

export default SEOHead;
