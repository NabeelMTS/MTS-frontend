import { useState, useEffect } from 'react';

const CertificationsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const certifications = [
    { id: 1, logo: "/images/aapc.png" },
    { id: 2, logo: "/images/direct.png" },
    { id: 3, logo: "/images/iso.png" },
    { id: 4, logo: "/images/isoc.png" },
    { id: 5, logo: "/images/hipaa.png" },
    { id: 6, logo: "/images/soc.png" },
    { id: 7, logo: "/images/dmca.png" },
    { id: 8, logo: "/images/surescripts.png" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === certifications.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? certifications.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Certifications</h2>
          <div className="mt-4 h-1 w-20 bg-blue-500 mx-auto"></div>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Certifications */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {certifications.map((cert) => (
                <div 
                  key={cert.id} 
                  className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 px-4"
                >
                  <div className="bg-gray-50 p-8 rounded-xl flex flex-col items-center h-full">
                    <div className="h-40 w-40 flex items-center justify-center mb-4">
                      <img 
                        src={cert.logo} 
                        alt={`Certification ${cert.id}`} 
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {certifications.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsCarousel;