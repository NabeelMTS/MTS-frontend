'use client';
import { useEffect } from "react";

const CareManagementPage = () => {
  useEffect(() => {
    document.title = "Care Management - MedicoTech Solutions";
  }, []);

  return (
    <div className="bg-white">
            <section className="relative py-20 md:py-32 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
           <div className="absolute inset-0 opacity-30">
          <img src="/images/hero_3.jpg" alt="Doctors reviewing charts" className="w-full h-full object-cover" />
        </div>
        <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Revolutionizing Care Coordination for Better Outcomes</h1>
            <p className="text-xl md:text-2xl mb-8">
               Empowering providers, patients, and care teams through comprehensive, tech-enabled solutions
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
              Get Your Free Consultation Now
            </button>
          </div>
        </div>
        </div>
      </section>

      {/* --- Features Grid --- */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Streamlined, Smart & Patient-Centered</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Personalized Care Plans",
                desc: "Tailored, evidence-based care plans to meet individual patient needs."
              },
              {
                title: "Integrated Communication",
                desc: "Real-time collaboration between care coordinators and providers."
              },
              {
                title: "Chronic Care Management",
                desc: "Seamless support for patients with chronic conditions."
              },
              {
                title: "Automated Alerts & Tasks",
                desc: "Ensure timely follow-ups, interventions, and compliance."
              },
              {
                title: "Data-Driven Decisions",
                desc: "Leverage predictive analytics to identify care gaps."
              },
              {
                title: "Regulatory Compliance",
                desc: "Fully compliant with CMS, HIPAA, and MIPS requirements."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition">
                <h3 className="text-xl text-blue-600 font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Value-Based Care --- */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Approach to Value-Based Care</h2>
          <h3 className="text-2xl text-blue-600 mb-4">Transforming Care Through Innovation</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            MedicoTech Care Management is built to thrive in today's value-based care ecosystem. We empower practices to improve outcomes, reduce avoidable hospitalizations, and qualify for incentive-based reimbursements through proactive, coordinated care.
          </p>
        </div>
      </section>

      {/* --- Key Modules --- */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Key Modules</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "Chronic Care Management", icon: "🫀" },
              { name: "Remote Patient Monitoring", icon: "📱" },
              { name: "Behavioral Health Integration", icon: "🧠" },
              { name: "Annual Wellness Visits", icon: "👵" },
              { name: "Transitional Care Management", icon: "🏥" }
            ].map((module, i) => (
              <div key={i} className="bg-blue-50 p-6 rounded-lg text-center hover:shadow-md transition">
                <span className="text-4xl mb-3 block">{module.icon}</span>
                <h3 className="text-blue-600 font-semibold">{module.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Results --- */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Delivering Measurable Results</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: "40%", label: "Increase in Patient Engagement" },
              { value: "$1.2M", label: "Generated in Medicare Reimbursements" },
              { value: "98%", label: "Compliance Rate Across Clients" }
            ].map((stat, i) => (
              <div key={i} className="bg-white/10 p-6 rounded-xl">
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareManagementPage;