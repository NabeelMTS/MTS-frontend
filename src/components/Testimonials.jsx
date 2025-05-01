import { useState } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "J. Herrera",
      location: "New York, USA",
      rating: 5,
      content: "MedicoTech Solutions (MTS) has transformed my practice, providing seamless medical billing, credentialing services, and denials management. With their expert solutions, I can focus more on patient care without the stress of administrative challenges. MTS has truly brought peace and efficiency to my practice.",
      image: "/images/test1.png"
    },
    {
      id: 2,
      name: "Lilly-Rose",
      location: "New York, USA",
      rating: 5,
      content: "Since partnering with MedicoTech Solutions (MTS), I've seen a significant boost in my revenue cycle management. Their tailored approach to revenue optimization and financial performance improvement has transformed my practice. I highly recommend their expert services to any healthcare provider looking to enhance their financial efficiency.",
      image: "/images/test2.png"
    },
    {
      id: 3,
      name: "L. Taylor",
      location: "Florida, USA",
      rating: 5,
      content: "Their innovative healthcare technology solutions have significantly improved my practice. The professional and dedicated team ensures accurate, efficient services that streamline workflows. I highly value their commitment to advancing healthcare and delivering impactful, reliable results.",
      image: "/images/test3.jpg"
    },
    {
      id: 4,
      name: "K. Tamara",
      location: "Maryland, USA",
      rating: 5,
      content: "Partnering with MedicoTech Solutions has transformed my practice. Their expert clinical analysis and detailed medication reviews have improved therapeutic outcomes, streamlined decision-making, and boosted revenue, ensuring better care for patients and enhanced practice efficiency.",
      image: "/images/test4.jpg"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">TESTIMONIALS</h2>
          <p className="mt-2 text-lg text-blue-600 font-medium">Feedback from the Frontlines</p>
          <div className="mt-4 h-1 w-20 bg-blue-500 mx-auto"></div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-3xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name} 
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
              />
            </div>
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i}
                  className="w-6 h-6 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 italic mb-6 text-center">
              "{testimonials[currentIndex].content}"
            </p>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-gray-500">
                {testimonials[currentIndex].location}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;