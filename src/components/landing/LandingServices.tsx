import React from 'react';

interface ServiceItem {
    icon: any;
    title: string;
    description: string;
    features: string[];
}

interface LandingServicesProps {
    customServices: ServiceItem[];
}

const LandingServices: React.FC<LandingServicesProps> = ({ customServices }) => {
    return (
        <section className="py-24 relative overflow-hidden bg-[#f8f8ff]">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#212720]">
                        Our Expertise
                    </h2>
                    <div className="w-24 h-1.5 mx-auto rounded-full" style={{ backgroundColor: '#FF3C1A' }}></div>
                    <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                        Leveraging cutting-edge technologies to build scalable, high-performance solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {customServices.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
                        >
                            <div
                                className="absolute top-0 right-0 w-2 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ backgroundColor: '#FF3C1A' }}
                            ></div>

                            <div className="relative z-10">
                                <div className="inline-flex p-4 rounded-2xl bg-gray-50 mb-6 group-hover:bg-[#FF3C1A] group-hover:text-white transition-all duration-300" style={{ color: '#FF3C1A' }}>
                                    <service.icon className="h-8 w-8 text-current group-hover:text-white" />
                                </div>

                                <h3 className="text-2xl font-bold text-[#212720] mb-4">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    {service.description}
                                </p>

                                <ul className="space-y-3 mb-8">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-gray-700 text-sm font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full mr-3" style={{ backgroundColor: '#FF3C1A' }}></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* <div
                                    className="flex items-center font-semibold group/link cursor-pointer transition-colors"
                                    style={{ color: '#FF3C1A' }}
                                >
                                    <span>Learn more</span>
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LandingServices;
