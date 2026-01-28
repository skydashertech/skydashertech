import Header from '../components/Header';
import LandingHero from '../components/landing/LandingHero';
import About from '../components/About';
import LandingServices from '../components/landing/LandingServices';
import LandingPortfolio from '../components/landing/LandingPortfolio';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppFloater from '../components/WhatsAppFloater';
import { Brain, Bot, Network, Cpu, MessageSquare, Database } from 'lucide-react';
import video from '../assets/video.mp4';

import findMyAIToolImg from '../assets/ai/Find My AI Tool.png';
import vyroAIImg from '../assets/ai/AI Art Generator – Vyro AI.webp';
import musiclyImg from '../assets/ai/Musicly – AI Music Generator.webp';

const AiDevelopment = () => {
    const aiServices = [
        {
            icon: Brain,
            title: "Machine Learning",
            description: "Custom ML models for predictive analytics, pattern recognition, and decision support.",
            features: ["Predictive Analysis", "Pattern Recognition", "Data Modeling", "Algorithm Training"]
        },
        {
            icon: Bot,
            title: "AI Chatbots",
            description: "Intelligent conversational agents to automate support and engagement.",
            features: ["NLP Integration", "24/7 Availability", "Multi-channel Support", "Context Awareness"]
        },
        {
            icon: Network,
            title: "Neural Networks",
            description: "Deep learning solutions for complex problem solving and image/speech recognition.",
            features: ["Deep Learning", "Image Recognition", "Speech Processing", "Complex Automation"]
        },
        {
            icon: Cpu,
            title: "Process Automation",
            description: "Robotic Process Automation (RPA) to streamline repetitive business tasks.",
            features: ["Workflow Optimization", "Data Entry Automation", "Error Reduction", "Cost Efficiency"]
        },
        {
            icon: MessageSquare,
            title: "Natural Language Processing",
            description: "Advanced text analysis and generation capabilities for your applications.",
            features: ["Sentiment Analysis", "Text Classification", "Language Translation", "Content Generation"]
        },
        {
            icon: Database,
            title: "Big Data Analytics",
            description: "AI-powered insights from large datasets to drive strategic decisions.",
            features: ["Real-time Analytics", "Data Visualization", "Trend Forecasting", "Business Intelligence"]
        }
    ];

    const aiProjects = [
        {
            id: 1,
            title: "Find My AI Tool",
            image: findMyAIToolImg,
            link: "https://findmyaitool.com",
        },
        {
            id: 2,
            title: "AI Art Generator – Vyro AI",
            image: vyroAIImg,
            link: "https://vyro.ai",
        },
        {
            id: 3,
            title: "Musicly – AI Music Generator",
            image: musiclyImg,
            link: "https://musicly.ai",
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
                            Future-Ready
                            <span className="block text-transparent bg-clip-text mt-1" style={{ backgroundImage: 'linear-gradient(to right, #FF3C1A, #212720)' }}>
                                Artificial Intelligence
                            </span>
                            <span className="block mt-1">Solutions</span>
                        </>
                    }
                    subtitle="Empowering businesses with intelligent automation, machine learning, and cognitive computing technologies."
                />
                <About />
                <LandingServices customServices={aiServices} />
                <LandingPortfolio customProjects={aiProjects} />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
            <WhatsAppFloater />
        </>
    );
};

export default AiDevelopment;
