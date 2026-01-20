import React from 'react';

interface ProjectItem {
    id?: number;
    title: string;
    image: string;
    link: string;
    noPortfolioSection?: boolean;
}

interface LandingPortfolioProps {
    customProjects: ProjectItem[];
}

const LandingPortfolio: React.FC<LandingPortfolioProps> = ({ customProjects }) => {
    return (
        <section id="portfoliosection" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#212720] mb-4">
                            Featured Work
                        </h2>
                        <p className="text-xl text-gray-600">
                            Showcasing our finest digital creations and success stories.
                        </p>
                    </div>
                    <button
                        className="hidden md:block px-6 py-3 border-2 rounded-full font-semibold transition-all duration-300 hover:text-white"
                        style={{ borderColor: '#212720', color: '#212720' }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#212720'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                    >
                        View All Projects
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {customProjects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative rounded-3xl overflow-hidden aspect-[4/5] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 block"
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
                                style={{ background: 'linear-gradient(to top, #212720, rgba(33, 39, 32, 0.4))' }}
                            ></div>

                            {/* Content */}
                            <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                                    {project.title}
                                </h3>

                                {/* <div className="flex items-center text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 mt-4">
                                    Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                                </div> */}
                            </div>
                        </a>
                    ))}
                </div>

                
            </div>
        </section>
    );
};

export default LandingPortfolio;
