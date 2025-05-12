import { FaCheck } from 'react-icons/fa';

const OutsourcingPage = () => {
  return (
    <div className="bg-white">
      {/* --- Hero Section --- */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">From Claims to Cash — Without the Chaos</h1>
          <p className="text-xl md:text-2xl mb-8">
            Your all-in-one medical billing partner for growth, compliance, and peace of mind.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition">
            Unlock Your Growth Now
          </button>
        </div>
      </section>

      {/* --- Overview Section --- */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img src="/outsourcing-team.jpg" alt="Medical billing team" className="rounded-lg shadow-xl" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Outsource the Work. Keep the Control.</h2>
              <p className="text-lg text-gray-600 mb-6">
                Tired of juggling billing and compliance headaches? We take the load off your shoulders so you can focus on patient care.
              </p>
              <div className="space-y-4">
                {[
                  "Rates as low as 3.89% of collections",
                  "Annual plans starting at $47.15/day",
                  "U.S.-based experts with 24/7 support",
                  "100% HIPAA compliant processes"
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-3" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Benefits --- */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Benefits of Outsourcing</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Reduced Administrative Burden",
                desc: "Free up your team to focus on patient care"
              },
              {
                title: "Lower Operational Costs",
                desc: "Avoid hiring and training expenses"
              },
              {
                title: "Faster Cash Flow",
                desc: "Accelerate reimbursements with expert RCM"
              },
              {
                title: "Improved Accuracy",
                desc: "Certified coders reduce denials"
              },
              {
                title: "Flexible & Scalable",
                desc: "Services grow with your practice"
              },
              {
                title: "Full Compliance",
                desc: "HIPAA-compliant systems and protocols"
              }
            ].map((benefit, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Pricing Plans --- */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Your Practice, Your Plan</h2>
          <p className="text-center text-gray-600 mb-12">Only Pay for What You Need</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Full Outsourcing Plan",
                features: [
                  "Complete process management",
                  "Billing & claim management",
                  "24/7 administrative support",
                  "Revenue cycle optimization"
                ],
                cta: "Unlock Now →"
              },
              {
                name: "Partial Outsourcing Plan",
                features: [
                  "Billing & coding services",
                  "Claims processing",
                  "AR management",
                  "Customizable solutions"
                ],
                cta: "Unlock Now →"
              },
              {
                name: "Hybrid Model Plan",
                features: [
                  "Mix of in-house & outsourced",
                  "Scalable solutions",
                  "Tailored support",
                  "Optimized cost structure"
                ],
                cta: "Unlock Now →"
              }
            ].map((plan, i) => (
              <div key={i} className="border border-gray-200 rounded-xl hover:shadow-lg transition">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-semibold text-center">{plan.name}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium">
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OutsourcingPage;