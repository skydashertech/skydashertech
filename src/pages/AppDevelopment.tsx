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
import { Smartphone, Tablet, Watch, Layers, Wifi } from 'lucide-react';
import video from '../assets/video.mp4'

import akashApp from '../assets/app-development/akash_mega_mart-app.webp';
import feelitApp from '../assets/app-development/feelit_app.webp';
import klikomicsApp from '../assets/app-development/klikomics.webp';
import autosnapApp from '../assets/app-development/autosnap-app.webp';
import rentopApp from '../assets/app-development/rentop.webp';

const AppDevelopment = () => {
    const appServices = [
        {
            icon: Smartphone,
            title: "iOS Development",
            description: "Premium iOS applications built with Swift and SwiftUI.",
            features: ["Native Performance", "Apple Ecosystem", "Latest iOS Features", "App Store Guidelines"]
        },
        {
            icon: Smartphone,
            title: "Android Development",
            description: "Robust Android apps using Kotlin and Jetpack Compose.",
            features: ["Material Design", "Wide Device Support", "Google Play Optimization", "Performance Tuning"]
        },
        {
            icon: Layers,
            title: "Cross-Platform",
            description: "Efficient development using React Native and Flutter.",
            features: ["Single Codebase", "Native User Experience", "Faster Time-to-Market", "Cost Effective"]
        },
        {
            icon: Tablet,
            title: "Tablet Optimization",
            description: "Apps optimized for iPad and Android tablets.",
            features: ["Adaptive Layouts", "Multitasking Support", "Pencil Integration", "Enhanced UI"]
        },
        {
            icon: Watch,
            title: "Wearable Apps",
            description: "Applications for Apple Watch and Wear OS devices.",
            features: ["Health Kit Integration", "Notification Strategy", "Compact UI Design", "Sensor Data"]
        },
        {
            icon: Wifi,
            title: "IoT Integration",
            description: "Mobile apps that control and monitor IoT devices.",
            features: ["Bluetooth Low Energy", "Smart Home Support", "Real-time Data", "Secure Pairing"]
        }
    ];

    const appProjects = [
        {
            id: 1,
            title: "Akash Mega Mart Mobile App",
            image: akashApp,
            link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
        },
        {
            id: 2,
            title: "FeelIt Mobile App",
            image: feelitApp,
            link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
        },
        {
            id: 3,
            title: "Klikomics Mobile App",
            image: klikomicsApp,
            link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
        },
        {
            id: 4,
            title: "AutoSnap Mobile App",
            image: autosnapApp,
            link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
        },
        {
            id: 5,
            title: "Rentop Bike and Car",
            image: rentopApp,
            link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
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
                            Revolutionary
                            <span className="block text-transparent bg-clip-text mt-1" style={{ backgroundImage: 'linear-gradient(to right, #FF3C1A, #212720)' }}>
                                Mobile Applications
                            </span>
                            <span className="block mt-1">for Global Brands</span>
                        </>
                    }
                    subtitle="Building intuitive, powerful, and scalable mobile apps that engage users and drive innovation."
                />
                <About />
                <LandingServices customServices={appServices} />
                <LandingPortfolio customProjects={appProjects} />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
            <WhatsAppFloater />
        </>
    );
};

export default AppDevelopment;
