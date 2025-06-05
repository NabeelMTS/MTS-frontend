import { useState, useEffect } from 'react';
import Head from 'next/head';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const slides = [
    {
      heading: "Innovation Driving Revenue Growth",
      subheading: "Embrace the future of healthcare with innovative solutions. From efficient medical billing to expert IT consultation, we empower you to enhance patient care and boost revenue with cutting-edge technology.",
      bgImage: "images/hero.jpg" // Replace with your image paths
    },
    {
      heading: "End Claim Denials - Maximize Revenue Today",
      subheading: "Our intelligent, AI-driven approach to medical billing & coding, RCM, and provider credentialing helps reduce claim denials by up to 30%, improve compliance, and ensure smoother reimbursements.",
      bgImage: "images/hero_2.jpg"
    },
    {
      heading: "From Claims to Cash—Faster Than Ever",
      subheading: "Accelerate your revenue cycle with our streamlined processes. Get paid faster with our AI-powered claims processing.",
      bgImage: "/images/hero_3.jpg"
    },
    {
      heading: "Simplify Billing. Amplify Results!",
      subheading: "Transform your practice's financial health with our comprehensive billing solutions that increase efficiency while reducing administrative burden.",
      bgImage: "/images/hero_4.jpg"
    }
  ];

  const funFacts = [
    { number: "95%", title: "Client Satisfaction Rate" },
    { number: "25+", title: "Specialties Supported" },
    { number: "100%", title: "HIPAA Compliance" },
    { number: "120+", title: "Providers" }
  ];

  useEffect(() => {
    const imagePromises = slides.map((slide) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = slide.bgImage;
        img.onload = resolve;
      });
    });

    Promise.all(imagePromises).then(() => setImagesLoaded(true));
  }, [slides]);

  useEffect(() => {
    if (imagesLoaded) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 7000);

      return () => clearInterval(interval);
    }
  }, [imagesLoaded, slides.length]);

  // Add escape key handler
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setShowVideo(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  // Add click outside handler
  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowVideo(false);
    }
  };

  return (
    <>
      <Head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      {!imagesLoaded ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <div className="loader">
            <div className="medical-cross"></div>
          </div>
        </div>
      ) : (
        <>
          {/* Video Modal */}
          {showVideo && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={handleModalClick} // Add click outside handler
            >
              <div className="relative w-full max-w-4xl">
                <button 
                  onClick={() => setShowVideo(false)}
                  className="absolute -top-12 right-0 text-white text-2xl hover:text-blue-400 transition"
                >
                  <i className="fas fa-times"></i>
                </button>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe 
                    className="w-full h-96 md:h-[500px]"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
                    title="Demo Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          )}

          {/* Hero Slider */}
          <section className="relative h-screen max-h-[800px] overflow-hidden">
            {slides.map((slide, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              >
                {/* Background Image with Gradient Overlay */}
                <div className="absolute inset-0">
                  <img 
                    src={slide.bgImage} 
                    alt="" 
                    className="w-full h-full object-cover object-right"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex items-center">
                  <div className="container mx-auto px-6 z-10">
                    <div className="max-w-2xl">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                        {slide.heading}
                      </h1>
                      <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
                        {slide.subheading}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 mb-12">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105">
                          Get Started
                        </button>
                        <button 
                          onClick={() => setShowVideo(true)}
                          className="flex items-center gap-3 text-blue-600 hover:text-blue-800 font-medium group"
                        >
                          <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-all shadow-md">
                            <i className="fa-solid fa-play text-2xl text-blue-600 group-hover:text-blue-800"></i> {/* Adjusted icon size and color */}
                          </div>
                          See how we work?
                        </button>
                      </div>

                      {/* Fun Facts Widget */}
                      <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-2xl">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {funFacts.map((fact, idx) => (
                            <div key={idx} className="text-center p-2">
                              <p className="text-3xl font-bold text-blue-600">{fact.number}</p>
                              <p className="text-sm text-gray-600 mt-1">{fact.title}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Slider Controls */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-blue-600 w-6' : 'bg-gray-300 hover:bg-gray-400'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default HeroSlider;