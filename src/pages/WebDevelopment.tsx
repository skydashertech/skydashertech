import React from 'react';
import Header from '../components/Header';
import LandingHero from '../components/landing/LandingHero';
import About from '../components/About';
import LandingServices from '../components/landing/LandingServices';
import LandingPortfolio from '../components/landing/LandingPortfolio';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppFloater from '../components/WhatsAppFloater';
import { Code, Layout, Globe, Server, Database, Shield } from 'lucide-react';
import video from '../assets/video.mp4'

import fiveGHome from '../assets/web-development/5ghomes.webp';
import coldCreek from '../assets/web-development/cold-creekcap.webp';
import thinkReality from '../assets/web-development/think-reality.webp';
import akashMegaMart from '../assets/web-development/akash-mega-mart.webp';
import midwam from '../assets/web-development/midwam.webp';

const WebDevelopment = () => {
    const webServices = [
        {
            icon: Layout,
            title: "Custom Web Design",
            description: "Stunning, responsive designs tailored to your brand identity.",
            features: ["UI/UX Design", "Responsive Layouts", "Brand Integration", "Interactive Elements"]
        },
        {
            icon: Globe,
            title: "Full-Stack Development",
            description: "End-to-end web application development using modern technologies.",
            features: ["React/Next.js", "Node.js/Express", "Database Architecture", "API Integration"]
        },
        {
            icon: Code,
            title: "E-Commerce Solutions",
            description: "Scalable online stores with secure payment and inventory management.",
            features: ["Shopify/WooCommerce", "Custom Carts", "Payment Gateways", "Inventory Systems"]
        },
        {
            icon: Server,
            title: "Cloud Solutions",
            description: "Reliable cloud hosting and infrastructure management.",
            features: ["AWS/Azure", "Scalable Architecture", "Server Management", "CDN Integration"]
        },
        {
            icon: Database,
            title: "CMS Development",
            description: "Easy-to-manage content management systems for your team.",
            features: ["WordPress", "Headless CMS", "Custom Admin Panels", "Content Strategy"]
        },
        {
            icon: Shield,
            title: "Web Security",
            description: "Advanced security measures to protect your web assets.",
            features: ["SSL Implementation", "DDoS Protection", "Security Audits", "Data Encryption"]
        }
    ];

    const webProjects = [
        {
            id: 1,
            title: "5g Homes",
            image: fiveGHome,
            link: "https://5ghighspeedinternet.co",
        },
        {
            id: 2,
            title: "Cold Creekcap",
            image: coldCreek,
            link: "https://www.coldcreekcap.com",
        },
        {
            id: 3,
            title: "Think Reality",
            image: thinkReality,
            link: "https://thinkrealty.ae",
        },
        {
            id: 4,
            title: "Akash Mega Mart",
            image: akashMegaMart,
            link: "https://akashmegamart.com/",
        },
        {
            id: 5,
            title: "Midwam – Immersive Experience Design Company",
            image: midwam,
            link: "https://www.midwam.com/en/about",
        },
    ];

    return (
        <>
            <Header />
            <main>
                <LandingHero
                    videoUrl={video}
                    title={
                        <>
                            Next-Gen
                            <span className="block text-transparent bg-clip-text mt-1" style={{ backgroundImage: 'linear-gradient(to right, #FF3C1A, #212720)' }}>
                                Web Development
                            </span>
                            <span className="block mt-1">Solutions</span>
                        </>
                    }
                    subtitle="Crafting immersive, high-performance web experiences that define the future of digital interaction."
                />
                <About />
                <LandingServices customServices={webServices} />
                <LandingPortfolio customProjects={webProjects} />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
            <WhatsAppFloater />
        </>
    );
};

export default WebDevelopment;
