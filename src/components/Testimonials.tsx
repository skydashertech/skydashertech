import React, { useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
        loop: true,
        mode: "free-snap",
        slides: {
            perView: 1,
            spacing: 15,
        },
        breakpoints: {
            '(min-width: 640px)': {
                slides: { perView: 2, spacing: 15 },
            },
            '(min-width: 1024px)': {
                slides: { perView: 3, spacing: 25 },
            },
        },
    }, [
        (slider) => {
            let timeout: ReturnType<typeof setTimeout>;
            let mouseOver = false;
            function clearNextTimeout() {
                clearTimeout(timeout);
            }
            function nextTimeout() {
                clearTimeout(timeout);
                if (mouseOver) return;
                timeout = setTimeout(() => {
                    slider.next();
                }, 3000);
            }
            slider.on("created", () => {
                slider.container.addEventListener("mouseover", () => {
                    mouseOver = true;
                    clearNextTimeout();
                });
                slider.container.addEventListener("mouseout", () => {
                    mouseOver = false;
                    nextTimeout();
                });
                nextTimeout();
            });
            slider.on("dragStarted", clearNextTimeout);
            slider.on("animationEnded", nextTimeout);
            slider.on("updated", nextTimeout);
        },
    ]);

    const testimonials = [
        {
            name: "John Smith",
            company: "Tech Solutions Inc.",
            role: "CEO",
            image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100",
            content: "SkyDasher Tech transformed our business with their cutting-edge AI solutions. The team is incredibly professional and knowledgeable."
        },
        {
            name: "Sarah Johnson",
            company: "Creative Designs",
            role: "Director",
            image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100",
            content: "The web development services provided were outstanding. Our new site is beautiful, responsive, and significantly faster."
        },
        {
            name: "Michael Brown",
            company: "Future Apps",
            role: "CTO",
            image: "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=100",
            content: "Their mobile app development expertise is top-notch. We launched our app on time and within budget, thanks to their dedicated team."
        },
        {
            name: "Emily Davis",
            company: "Innovate Now",
            role: "Product Manager",
            image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
            content: "Exceptional service and support. They really understood our vision and delivered a product that exceeded our expectations."
        },
        {
            name: "David Lee",
            company: "Global Tech",
            role: "Founder",
            image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100",
            content: "Working with SkyDasher was a game-changer. Their strategic insights and technical skills are unmatched in the industry."
        }
    ];

    return (
        <section className="py-12 sm:py-16" style={{ backgroundColor: '#ffffff' }}>
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                        Client <span style={{ color: '#FF3C1A' }}>Testimonials</span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
                        See what our clients have to say about working with us
                    </p>
                </div>

                <div ref={sliderRef} className="keen-slider">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="keen-slider__slide bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 relative h-full flex flex-col justify-between">
                            <Quote className="absolute top-6 right-6 h-8 w-8 text-gray-200" />
                            <div>
                                <div className="flex items-center mb-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full mr-4 object-cover"
                                    />
                                    <div>
                                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                        <p className="text-xs text-gray-500">{testimonial.role}, {testimonial.company}</p>
                                    </div>
                                </div>
                                <div className="flex mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-gray-600 italic text-sm leading-relaxed">
                                    "{testimonial.content}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {loaded && instanceRef.current && (
                    <div className="flex justify-center mt-8 space-x-2">
                        {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
                            return (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        instanceRef.current?.moveToIdx(idx)
                                    }}
                                    className={"w-3 h-3 rounded-full transition-colors duration-200 focus:outline-none " + (currentSlide === idx ? "active" : "")}
                                    style={{
                                        backgroundColor: currentSlide === idx ? '#FF3C1A' : '#e5e7eb'
                                    }}
                                    aria-label={`Go to slide ${idx + 1}`}
                                ></button>
                            )
                        })}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Testimonials;
