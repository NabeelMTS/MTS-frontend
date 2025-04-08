import React from "react";
import DepartmentSectionStyle5 from "../Section/DepartmentSection/DepartmentSectionStyle5";
import WorkingProcess from "../Section/WorkingProcess";
import BannerSectionStyle3 from "../Section/BannerSection/BannerSectionStyle3";
import Section from "../Section";
import AboutSectionStyle3 from "../Section/AboutSection/AboutSectionStyle3";
import FeaturesSectionStyle4 from "../Section/FeaturesSection/FeaturesSectionStyle4";
import BannerSectionStyle4 from "../Section/BannerSection/BannerSectionStyle4";

import { pageTitle } from "../../helpers/PageTitle";

const departmentData = [
  {
    title: "Sustainable Growth",
    iconUrl: "/images/home_3/department_icon_1.svg",
    href: "/departments/department-details",
  },
  {
    title: "Increased Revenue",
    iconUrl: "/images/home_3/department_icon_2.svg",
    href: "/departments/department-details",
  },
  {
    title: "Enhanced Operational Efficiency",
    iconUrl: "/images/home_3/department_icon_3.svg",
    href: "/departments/department-details",
  },
  {
    title: "Stronger Brand Presence",
    iconUrl: "/images/home_3/department_icon_4.svg",
    href: "/departments/department-details",
  },
  {
    title: "Data-Driven Insights",
    iconUrl: "/images/home_3/department_icon_5.svg",
    href: "/departments/department-details",
  },
  {
    title: "Streamlined Business Operations",
    iconUrl: "/images/home_3/department_icon_6.svg",
    href: "/departments/department-details",
  },
];
const featureListData = [
  {
    title: "Drive Strategic Growth with Expert Consulting",
    subTitle:
      "Develop a clear roadmap to meet your business goals. Our expert consultants identify growth opportunities, improve workflows, and enhance patient engagement.",
    iconUrl: "/images/home_3/value_icon_1.svg",
  },
  {
    title: "Optimize Revenue with RCM Solutions",
    subTitle:
      "Optimize billing and collections to reduce claim denials, improve cash flow, and ensure financial health for your practice.",
    iconUrl: "/images/home_3/value_icon_2.svg",
  },
  {
    title: "Market Research & Competitive Analysis",
    subTitle:
      "Gain actionable insights into patient demographics, healthcare trends, and growth opportunities to position your practice for success.",
    iconUrl: "/images/home_3/value_icon_3.svg",
  },
  {
    title: "Financial Management & Optimization",
    subTitle:
      "Enhance your financial operations with strategies for budgeting, cost management, and revenue growth while maintaining quality patient care.",
    iconUrl: "/images/home_3/value_icon_1.svg",
  },
  {
    title: "Branding & Positioning",
    subTitle:
      "Build a strong, memorable brand identity. We help define your messaging and create a robust online presence to stand out in the market.",
    iconUrl: "images/icons/facilities.svg",
  },
  {
    title: "Patient Acquisition & Retention Strategies",
    subTitle:
      "Attract and retain patients with tailored marketing strategies, from referral programs to engagement initiatives that create a loyal patient base.",
    iconUrl: "images/icons/facilities.svg",
  },
  {
    title: "Operational Efficiency Improvement",
    subTitle:
      "Streamline workflows and eliminate inefficiencies. We provide solutions that reduce administrative burdens and increase team productivity for smooth operations.",
    iconUrl: "images/icons/facilities.svg",
  },
  {
    title: "Healthcare IT Solutions & Automation",
    subTitle:
      "Leverage technology to enhance patient care and boost operational efficiency, from EHR systems to AI-driven tools that improve practice management.",
    iconUrl: "images/icons/facilities.svg",
  },
];

const workingProcessData = [
  {
    title: "Consultation & Business Assessment",
    subTitle:
      "We begin by understanding your business’s unique challenges and goals, conducting a thorough assessment to uncover growth opportunities and areas for improvement.",
    iconUrl: "/images/home_2/wording_process_icon_1.svg",
    number: "01",
  },
  {
    title: "Tailored Strategy Development",
    subTitle:
      "Based on your needs, we craft a customized strategy that focuses on marketing, operations, financial management, and patient acquisition.",
    iconUrl: "/images/home_2/wording_process_icon_2.svg",
    number: "02",
  },
  {
    title: "Strategy Implementation",
    subTitle:
      "Our team collaborates with yours to execute the strategy, ensuring seamless implementation and alignment across all areas.",
    iconUrl: "/images/home_2/wording_process_icon_3.svg",
    number: "03",
  },
  {
    title: "Ongoing Monitoring & Support",
    subTitle:
      "We continuously monitor the strategy’s progress, making data-driven optimizations to ensure sustained growth and adaptability.",
    iconUrl: "/images/home_2/wording_process_icon_4.svg",
    number: "04",
  },
  {
    title: "Continuous Improvement",
    subTitle:
      "As your practice evolves, we refine and enhance the strategy to ensure long-term success and growth in an ever-changing healthcare market.",
    iconUrl: "/images/home_2/wording_process_icon_5.svg",
    number: "05",
  },
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
          imgUrl="/images/new_images/Blog1.png"
        />
      </Section>
      <Section topMd={200} topLg={150} topXl={110}>
        <FeaturesSectionStyle4
          sectionTitle="Our Business Growth Services"
          data={featureListData}
        />
      </Section>
      <Section
        topMd={200}
        topLg={150}
        topXl={110}
        bottomMd={175}
        bottomLg={125}
        bottomXl={85}
      >
        <DepartmentSectionStyle5
          sectionTitle="For Your Health"
          sectionTitleUp="OUR DEPARTMENT"
          data={departmentData}
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
        <WorkingProcess
          sectionTitle="How MedicoTech Solutions Works"
          sectionTitleUp=""
          sectionTitleDown=""
          sectionSubTitle=""
          data={workingProcessData}
        />
      </Section>
      <div className="container d-flex flex-column vh-100">
        <h3>Why Choose MedicoTech Solutions for Business Growth? </h3>
        <ul>
          <li>
            <b> Healthcare Expertise:</b> Our team has deep knowledge of the
            healthcare industry, allowing us to offer solutions tailored to the
            specific challenges healthcare providers face.
          </li>{" "}
          <li>
            <b> Data-Driven Strategies: </b> We use actionable data and insights
            to craft strategies that are effective, measurable, and personalized
            to your practice’s needs.
          </li>{" "}
          <li>
            <b> End-to-End Solutions::</b> From strategic planning and marketing
            to financial management and IT solutions, we provide a complete
            suite of services to help your practice thrive.
          </li>{" "}
          <li>
            <b> Proven Results:</b> We focus on delivering measurable outcomes
            that drive revenue growth, improve patient retention, and optimize
            operational efficiency.
          </li>{" "}
        </ul>
      </div>
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle4
          bgUrl="/images/footer-top.jpeg"
          title="Don’t Wait! Ignite Growth for <br/> Your Healthcare Practice Today!"
          subTitle="Get Your Free Growth Consultation"
        />
      </Section>
    </>
  );
}
