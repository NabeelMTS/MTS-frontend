import BannerSectionStyle3 from "../Section/BannerSection/BannerSectionStyle3";
import Section from "../Section";
import PricingSection from "../Section/PricingSection";
import FunFactSection from "../Section/FunFactSection";
import AboutSectionStyle3 from "../Section/AboutSection/AboutSectionStyle3";
import FeaturesSectionStyle4 from "../Section/FeaturesSection/FeaturesSectionStyle4";

import { pageTitle } from "../../helpers/PageTitle";

const featureListData = [
  {
    title: "Cost Savings",
    subTitle:
      " Cut overhead costs by outsourcing non-core tasks to our experienced team, improving efficiency and freeing up resources for what matters most.",
    iconUrl: "images/icons/professional.svg",
  },
  {
    title: "Scalability",
    subTitle:
      "Seamlessly expand your operations without the burden of hiring more full-time staff, allowing for flexible growth and improved resource management.",
    iconUrl: "images/icons/comprehensive.svg",
  },
  {
    title: "Expertise",
    subTitle:
      "Gain access to skilled professionals with in-depth healthcare knowledge and experience, ensuring high-quality service and optimal outcomes.",
    iconUrl: "images/icons/patient.svg",
  },
  {
    title: "Efficiency",
    subTitle:
      "Streamline your operations, reduce administrative burdens, and enhance your focus on providing high-quality patient care.",
    iconUrl: "images/icons/facilities.svg",
  },
  {
    title: "Compliance",
    subTitle:
      "Stay assured that all outsourced services are fully compliant with the latest healthcare regulations, standards, and industry best practices.",
    iconUrl: "images/icons/facilities.svg",
  },
  {
    title: "Quality Assurance",
    subTitle:
      "Our dedicated team ensures the delivery of high-quality services that enhance your practice’s efficiency, performance, and patient satisfaction.",
    iconUrl: "images/icons/facilities.svg",
  },
];
const pricingData = [
  {
    title: "Full Outsourcing Plan",
    subTitle:
      "Complete management of healthcare processes for seamless operations.",
    price: "",
    period: "",
    featureList: [
      "Comprehensive Process Management",
      "Billing, Coding, and Claim Management",
      "24/7 Administrative Support",
      "Revenue Cycle Optimization",
    ],
    btnText: "Get Started",
    btnUrl: "/contact",
    popular: false,
  },
  {
    title: "Partial Outsourcing Plan",
    subTitle:
      "Outsource specific functions like billing, coding, or claims for greater flexibility.",
    price: "",
    period: "",
    featureList: [
      "Billing & Coding Services",
      "Claims Processing",
      "AR Management",
      "Customizable Solutions",
    ],
    btnText: "Get Started",
    btnUrl: "/contact",
    popular: false,
  },
  {
    title: "Hybrid Model Plan",
    subTitle:
      "Combine in-house operations with outsourced services for maximum efficiency.",
    price: "",
    period: "",
    featureList: [
      "Custom Mix of In-house & Outsourced Functions",
      "Scalable Solutions",
      "Tailored Support",
      "Optimized Cost Structure",
    ],
    btnText: "Get Started",
    btnUrl: "/contact",
    popular: false,
  },
];
const funFactData = [
  { number: "100M+", title: "Patient Interactions Managed" },
  { number: "$50M", title: "Cost Savings" },
  { number: "$8M+", title: "Penalties Avoided" },
  { number: "28%", title: "Boost in Revenue Recovery" },
];
export default function About() {
  pageTitle("About");
  return (
    <>
      <BannerSectionStyle3
        bgUrl="/images/about/banner_bg.svg"
        imgUrl="/images/training-bootcamps/banner_img.png"
        title="Ignite Growth for Your Healthcare Practice with MedicoTech Solutions"
        subTitle="Where Innovation Driving Revenue Growth!"
      />

      <Section bottomMd={190} bottomLg={145} bottomXl={105}>
        <AboutSectionStyle3
          titleUp="About Us"
          title="MedicoTech Solutions: Startups to Brands"
          subTitle="Our Business Growth Services empower healthcare practices to overcome today’s challenges. We streamline operations, optimize revenue, and position your practice for sustainable success. Whether enhancing patient acquisition or improving operational efficiency, we provide the expertise and tools to accelerate growth."
          imgUrl="/images//home_2/about.jpeg"
        />
      </Section>
      <Section>
        <FunFactSection
          bgUrl="images/about/fun_fact_bg.jpeg"
          data={funFactData}
        />
      </Section>
      <Section topMd={200} topLg={150} topXl={110}>
        <FeaturesSectionStyle4
          sectionTitle="Outsourcing Advantages"
          data={featureListData}
        />
      </Section>

      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <PricingSection
          sectionTitle="Flexible Outsourcing Plans — <br/> Choose What Fits Your Practice"
          data={pricingData}
        />
      </Section>
    </>
  );
}
