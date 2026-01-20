import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Journey from '../components/Journey';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppFloater from '../components/WhatsAppFloater';

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Services />
                <About />
                <Journey />
                <Portfolio />
                <Contact />
            </main>
            <Footer />
            <WhatsAppFloater />
        </>
    );
};

export default Home;
