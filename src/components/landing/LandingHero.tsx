import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

interface LandingHeroProps {
  videoUrl?: string;
  title: React.ReactNode;
  subtitle: string;
  noPortfolioSection?: boolean;
}

const LandingHero: React.FC<LandingHeroProps> = ({
  videoUrl,
  title,
  subtitle,
  noPortfolioSection,
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f8f8ff]">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {videoUrl && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        )}
        {/* Lighter overlay to maintain light theme but allow video texture */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-white/5 to-white/5"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="inline-block mb-6 animate-fade-in-up">
          <div className="flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-6 py-2 shadow-sm">
            <span className="relative flex h-3 w-3">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ backgroundColor: "#FF3C1A" }}
              ></span>
              <span
                className="relative inline-flex rounded-full h-3 w-3"
                style={{ backgroundColor: "#FF3C1A" }}
              ></span>
            </span>
            <span className="text-gray-600 text-sm font-medium tracking-wide uppercase">
              Next Gen Solutions
            </span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-[#212720] mb-8 tracking-tight leading-tight">
          {title}
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#contact"
            className="group relative px-8 py-4 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            style={{ backgroundColor: "#FF3C1A" }}
          >
            <span className="relative z-10 flex items-center">
              Start Project
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
          </a>

          {!noPortfolioSection && (
            <a
              href="#portfoliosection"
              className="group px-8 py-4 bg-white border-2 text-[#212720] rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300"
              style={{ borderColor: "#212720" }}
            >
              View Work
            </a>
          )}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-gray-400" />
      </div>
    </section>
  );
};

export default LandingHero;
