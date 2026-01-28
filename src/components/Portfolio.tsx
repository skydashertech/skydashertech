import React, { useState } from "react";

// Import web development project images
import fiveGHome from "../assets/web-development/5ghomes.webp";
import coldCreek from "../assets/web-development/cold-creekcap.webp";
import thinkReality from "../assets/web-development/think-reality.webp";
import akashMegaMart from "../assets/web-development/akash-mega-mart.webp";
import midwam from "../assets/web-development/midwam.webp";

// Import app development project images
import akashApp from "../assets/app-development/akash_mega_mart-app.webp";
import feelitApp from "../assets/app-development/feelit_app.webp";
import klikomicsApp from "../assets/app-development/klikomics.webp";
import autosnapApp from "../assets/app-development/autosnap-app.webp";
import rentopApp from "../assets/app-development/rentop.webp";

// Import AI project images
import findMyAIToolImg from "../assets/ai/Find My AI Tool.png";
import vyroAIImg from "../assets/ai/AI Art Generator – Vyro AI.webp";
import musiclyImg from "../assets/ai/Musicly – AI Music Generator.webp";

interface ProjectItem {
  id: number;
  title: string;
  image: string;
  link: string;
  category: string;
}

interface PortfolioProps {
  customProjects?: ProjectItem[];
}

const Portfolio: React.FC<PortfolioProps> = ({ customProjects }) => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const allProjects: ProjectItem[] = [
    // Web Development Projects
    {
      id: 1,
      title: "5g Homes",
      image: fiveGHome,
      link: "https://5ghighspeedinternet.co",
      category: "Web Development",
    },
    {
      id: 2,
      title: "Cold Creekcap",
      image: coldCreek,
      link: "https://www.coldcreekcap.com",
      category: "Web Development",
    },
    {
      id: 3,
      title: "Think Reality",
      image: thinkReality,
      link: "https://thinkrealty.ae",
      category: "Web Development",
    },
    {
      id: 4,
      title: "Akash Mega Mart",
      image: akashMegaMart,
      link: "https://akashmegamart.com/",
      category: "Web Development",
    },
    {
      id: 5,
      title: "Midwam – Immersive Experience Design Company",
      image: midwam,
      link: "https://www.midwam.com/en/about",
      category: "Web Development",
    },
    // App Development Projects
    {
      id: 6,
      title: "Akash Mega Mart Mobile App",
      image: akashApp,
      link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
      category: "App Development",
    },
    {
      id: 7,
      title: "FeelIt Mobile App",
      image: feelitApp,
      link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
      category: "App Development",
    },
    {
      id: 8,
      title: "Klikomics Mobile App",
      image: klikomicsApp,
      link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
      category: "App Development",
    },
    {
      id: 9,
      title: "AutoSnap Mobile App",
      image: autosnapApp,
      link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
      category: "App Development",
    },
    {
      id: 10,
      title: "Rentop Bike and Car",
      image: rentopApp,
      link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
      category: "App Development",
    },
    // AI Development Projects
    {
      id: 11,
      title: "Find My AI Tool",
      image: findMyAIToolImg,
      link: "https://findmyaitool.com",
      category: "AI Development",
    },
    {
      id: 12,
      title: "AI Art Generator – Vyro AI",
      image: vyroAIImg,
      link: "https://vyro.ai",
      category: "AI Development",
    },
    {
      id: 13,
      title: "Musicly – AI Music Generator",
      image: musiclyImg,
      link: "https://musicly.ai",
      category: "AI Development",
    },
  ];

  const projects = customProjects || allProjects;

  const filters = ["All", "Web Development", "App Development", "AI Development"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="py-12 sm:py-16"
      style={{ backgroundColor: "#f8f8ff" }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our <span style={{ color: "#FF3C1A" }}>Portfolio</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Explore our recent projects and see how we've helped businesses
            achieve their digital transformation goals
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
                activeFilter === filter
                  ? "text-white"
                  : "text-gray-700 bg-white border-2"
              }`}
              style={
                activeFilter === filter
                  ? { backgroundColor: "#FF3C1A",color:"#ffffff" }
                  : { borderColor: "#e5e7eb" }
              }
              onMouseEnter={(e) => {
                if (activeFilter !== filter) {
                  e.currentTarget.style.borderColor = "#FF3C1A";
                  e.currentTarget.style.color = "#FF3C1A";
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== filter) {
                  e.currentTarget.style.borderColor = "#e5e7eb";
                  e.currentTarget.style.color = "#374151";
                }
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden aspect-square shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 block"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Brand Gradient Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-90 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(to top, #212720, rgba(33, 39, 32, 0.4))",
                }}
              ></div>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
