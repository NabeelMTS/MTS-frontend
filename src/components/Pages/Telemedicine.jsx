import React from "react";
import Cta from "../Cta";
import AboutSection from '../Section/AboutSection';
import TestimonialSection from '../Section/TestimonialSection';
import BannerSectionStyle3 from "../Section/BannerSection/BannerSectionStyle3";
import AboutSectionStyle5 from "../Section/AboutSection/AboutSectionStyle5";
import Section from "../Section";
import BannerSectionStyle4 from "../Section/BannerSection/BannerSectionStyle4";
import FeaturesSectionStyle4 from "../Section/FeaturesSection/FeaturesSectionStyle4";
import TeamSectionStyle4 from "../Section/TeamSection/TeamSectionStyle4";
import WorkingProcess from "../Section/WorkingProcess";
import TestimonialStyle4 from "../Testimonial/TestimonialStyle4";
import FeaturesSectionStyle3 from "../Section/FeaturesSection/FeaturesSectionStyle3";
import FeaturesSection from "../Section/FeaturesSection";
import { pageTitle } from "../../helpers/PageTitle";

const workingProcessData = [
  {
    title: "Remote Consultations",
    subTitle:
      "Conduct secure, HIPAA-compliant video/audio consultations, eliminating the need for in-person visits. AI-Powered Symptom Assessment: Use artificial intelligence to triage symptoms and recommend next steps, improving clinical decision-making.",
    iconUrl: "/images/home_2/wording_process_icon_1.svg",
    number: "01",
  },
  {
    title: "Virtual Follow-Ups",
    subTitle:
      "Provide virtual follow-up consultations that reduce no-shows, enhance care continuity, and improve patient adherence to treatment plans. Automatic Scheduling & Reminders: Automated scheduling and reminders reduce administrative burden, enhance patient compliance, and improve care coordination.",
    iconUrl: "/images/home_2/wording_process_icon_2.svg",
    number: "02",
  },
  {
    title: "Chronic Disease Management",
    subTitle:
      "Offer continuous monitoring of chronic conditions (e.g., diabetes, hypertension, COPD) via wearables and remote tools. AI-Driven Predictive Analytics: Predict patient health events and complications to implement proactive care plans and reduce hospitalizations.",
    iconUrl: "/images/home_2/wording_process_icon_3.svg",
    number: "03",
  },
  {
    title: "E-Prescriptions & Medication Management",
    subTitle:
      "Streamline medication management with instant, secure e-prescriptions directly integrated with local pharmacies, ensuring timely and accurate medication dispensing.",
    iconUrl: "/images/home_2/wording_process_icon_4.svg",
    number: "04",
  },
  {
    title: "Multi-Disciplinary Virtual Care",
    subTitle:
      " Facilitate collaboration among primary care providers, specialists, and multidisciplinary teams through secure, virtual platforms. Telehealth for Complex Cases: Virtual care is essential for managing patients with multiple chronic conditions or those requiring frequent monitoring.",
    iconUrl: "/images/home_2/wording_process_icon_5.svg",
    number: "05",
  },
  {
    title: "Data Integration & Real-Time Insights",
    subTitle:
      " Leverage real-time data from Electronic Health Records (EHRs), wearables, and patient surveys to monitor patient progress, enhance decision-making, and improve patient outcomes.",
    iconUrl: "/images/home_2/wording_process_icon_5.svg",
    number: "06",
  },
  {
    title: "AI-Powered Virtual Health Assistants",
    subTitle:
      " Use AI-driven virtual assistants to handle administrative tasks, patient queries, and initial consultations, optimizing provider time and enhancing patient interaction.",
    iconUrl: "/images/home_2/wording_process_icon_5.svg",
    number: "07",
  },
];


const featureData2 = [
  {
    title: "Comprehensive, HIPAA-Compliant Platform",
    subTitle:
      "Our telemedicine platform is fully compliant with U.S. healthcare regulations, ensuring secure, encrypted communications and protecting patient privacy.",
    iconUrl: "/images/departments/icon_9.svg",
  },
  {
    title: "Scalable Solutions",
    subTitle:
      "Whether you’re a solo practitioner or a large healthcare system, our platform scales to meet your needs—offering customizable features, flexible pricing, and integration with your existing systems",
    iconUrl: "/images/departments/icon_10.svg",
  },
  {
    title: "Interoperability with EHRs",
    subTitle:
      "Seamless integration with leading Electronic Health Records (EHR) systems, ensuring that patient data is up-to-date and accessible in real-time across all providers.",
    iconUrl: "/images/departments/icon_11.svg",
  },
  {
    title: "Reduced Overhead Costs",
    subTitle:
      "Minimize facility-related costs (e.g., physical space, utilities) while maintaining high-quality patient care.",
    iconUrl: "/images/departments/icon_11.svg",
  },
  {
    title: "Clinical Decision Support",
    subTitle:
      "Use data analytics and AI-powered insights to guide clinical decisions and optimize treatment plans, improving overall patient outcomes.",
    iconUrl: "/images/departments/icon_11.svg",
  },
  {
    title: "On-Demand, Real-Time Data",
    subTitle:
      "Access live patient data during virtual consultations for informed, data-driven decisions, enhancing patient engagement and care quality.",
    iconUrl: "/images/departments/icon_11.svg",
  },
];

const featureListData = [
  {
    title: "Appointment Scheduling",
    subTitle:
      "Patients book consultations through a user-friendly platform available on any device. AI-Based Smart Scheduling: Our intelligent scheduling system optimizes appointment slots, reducing gaps and wait times. ",
    iconUrl: "/images/home_3/value_icon_1.svg",
  },
  {
    title: "Secure, HIPAA-Compliant Virtual Consultations",
    subTitle:
      "Conduct video/audio consultations using encrypted, secure communication tools that comply with HIPAA, ensuring patient privacy and confidentiality.",
    iconUrl: "/images/home_3/value_icon_2.svg",
  },
  {
    title: "Real-Time Data & AI Insights",
    subTitle:
      "Access real-time patient data, including EHRs and wearable device metrics, to monitor patient progress and make informed decisions during consultations.",
    iconUrl: "/images/home_3/value_icon_3.svg",
  },
  {
    title: "E-Prescriptions & Follow-Up Care",
    subTitle:
      "E-prescribe medications instantly and schedule follow-up virtual consultations directly from the platform.",
    iconUrl: "/images/home_3/value_icon_1.svg",
  },
  {
    title: "Scalable for Providers of All Sizes",
    subTitle:
      "Adapt our solutions to fit your practice—whether you are a small clinic, a hospital network, or a large healthcare system. We provide customizations to support any scale.",
    iconUrl: "/images/home_3/value_icon_2.svg",
  }
];

const featureListData2 = [
  {
    title: "Fully HIPAA-Compliant Solutions",
    subTitle:
      "Our platform guarantees secure communication, patient confidentiality, and compliance with U.S. healthcare regulations.",
    iconUrl: "images/icons/facilities.svg",
  },
  {
    title: "AI-Driven Efficiency",
    subTitle:
      "Enhance care delivery with AI tools that optimize patient scheduling, symptom triage, and predictive analytics for better outcomes.",
    iconUrl: "images/icons/facilities.svg",
  },
  {
    title: "Market-Leading Support",
    subTitle:
      "Our dedicated support team ensures smooth implementation and ongoing assistance, making your transition to virtual care effortless.",
    iconUrl: "images/icons/facilities.svg",
  },
  {
    title: "Interoperability",
    subTitle:
      "Seamlessly integrates with your existing EHR, improving the continuity and quality of care across all touchpoints.",
    iconUrl: "images/icons/facilities.svg",
  },
  {
    title: "Proven ROI",
    subTitle:
      "Our solutions lead to reduced operational costs, higher patient retention, and improved care outcomes, delivering measurable ROI for healthcare providers.",
    iconUrl: "images/icons/facilities.svg",
  },
];


export default function ClinicalDataAnalysis() {
  pageTitle("Clinical Data Analysis & Reporting");
  return (
    <>
      <BannerSectionStyle3
        bgUrl="/images/about/banner_bg.svg"
        imgUrl="/images/about/about-banner.png"
        title="Revolutionizing Healthcare Delivery with Telemedicine Solutions"
        subTitle="MedicoTech Solutions enables healthcare providers to extend their reach, improve patient outcomes, and reduce costs with secure, accessible, and efficient telemedicine services."
      />
      <Cta
        btnText="Experience Seamless Virtual Care Today"
      ></Cta>
      <Section >
        <div className="container">
          {/* Start Introduction Section */}
          <AboutSectionStyle5
            imgUrl="/images/home_2/about.jpg"
            title="Telemedicine & Virtual Care: A Modern Solution for Comprehensive Healthcare"
            subTitle="At MedicoTech Solutions, we empower healthcare providers to deliver quality care remotely with our HIPAA-compliant, state-of-the-art Telemedicine & Virtual Care Services. Our solutions cater to the evolving needs of both providers and patients, offering secure, cost-effective, and convenient care options that align with the modern U.S. healthcare landscape."
            subTitle2="Whether it’s virtual consultations, chronic disease management, or post-surgical follow-ups, we bridge the gap between patients and providers—enhancing healthcare delivery, improving outcomes, and reducing operational costs. Our telemedicine services are designed to provide a seamless experience while adhering to the highest standards of regulatory compliance and patient data security."
            supportTitle="24/7 Support"
            supportSubTitle="We are available when you want"
          />
          {/* End Introduction Section */}
          {/* Start Key Features Section */}
          <Section
            topMd={185}
            topLg={140}
            topXl={100}
            bottomMd={200}
            bottomLg={150}
            bottomXl={110}
          >
            <WorkingProcess
              sectionTitle="Key Features of Our Telemedicine & Virtual Care Services"
              sectionTitleUp=""
              sectionTitleDown="Transforming Healthcare with Advanced Virtual Solutions"
              sectionSubTitle=""
              data={workingProcessData}
            />
          </Section>
          {/* Why Choose */}
          <Section topMd={170} topLg={145} topXl={90}>
            <FeaturesSectionStyle3
              sectionTitle="Why Choose MedicoTech Solutions for Telemedicine & Virtual Care?"
              sectionTitleUp="Leading the Future of Virtual Healthcare"
              data={featureData2}
            />
          </Section>
          {/* Start How it works */}
          <Section topMd={200} topLg={150} topXl={110}>
            <FeaturesSectionStyle4
              sectionTitle="How It Works | Simple, Secure, and Effective Virtual Healthcare"
              data={featureListData}
            />
          </Section>
          {/* end How it works */}

          {/* Start Testimonial */}
          <Section
            topMd={185}
            topLg={140}
            topXl={100}
            bottomMd={200}
            bottomLg={150}
            bottomXl={110}
          >

            <TeamSectionStyle4
              sectionTitle="What Our Patients and Providers Say"
            />
            <TestimonialStyle4
              avatarImgUrl={"/images/testimonial/1.jpg"}
              avatarName="Dr. Emily Carter"
              avatarDesignation="Family Medicine Practitioner"
              text="MedicoTech’s telemedicine solutions have streamlined our practice. The platform is easy to use, and the integration with our EHR system has been seamless. Our patients appreciate the convenience, and we've seen a 30% reduction in missed appointments."
            ></TestimonialStyle4>
            <br />
            <TestimonialStyle4
              avatarImgUrl={"/images/testimonial/1.jpg"}
              avatarName="John P."
              avatarDesignation="Chronic Disease Patient"
              text="Thanks to MedicoTech’s virtual care tools, managing my chronic condition has never been easier. I get real-time updates and have constant access to my care team, making me feel secure and supported."
            ></TestimonialStyle4>
          </Section>
          {/* End Testimonial */}
          {/* Case Studies */}
          <div class="case-studies">
            <h2>Case Studies: Demonstrated Results in Telemedicine</h2>

            <div class="case-study">
              <h3>Case Study 1: Reducing Readmission Rates</h3>
              <p><strong>Client:</strong> A regional hospital network.</p>
              <p><strong>Challenge:</strong> High readmission rates for patients with chronic diseases.</p>
              <p><strong>Solution:</strong> MedicoTech implemented predictive analytics to monitor high-risk patients remotely, offering timely interventions and follow-ups.</p>
              <p><strong>Results:</strong> 25% reduction in readmission rates within 6 months, leading to significant cost savings and improved patient health outcomes.</p>
            </div>

            <div class="case-study">
              <h3>Case Study 2: Improving Chronic Care Management</h3>
              <p><strong>Client:</strong> A diabetes care center.</p>
              <p><strong>Challenge:</strong> Difficulty managing patient adherence to treatment plans remotely.</p>
              <p><strong>Solution:</strong> MedicoTech’s chronic disease management tools, including remote monitoring and AI-powered alerts, helped keep patients engaged in their care.</p>
              <p><strong>Results:</strong> 40% improvement in patient adherence to care plans and a 20% decrease in emergency hospital visits.</p>
            </div>
          </div>

          {/* why mediatech stand out */}
          <Section
            topMd={185}
            topLg={140}
            topXl={100}
            bottomMd={185}
            bottomLg={140}
            bottomXl={100}
          >
            <FeaturesSection sectionTitle="Why MedicoTech Stands Out" data={featureListData2} />
          </Section>
          {/* CTA */}
          <TeamSectionStyle4
            sectionTitle="Embrace the Future of Healthcare with Telemedicine & Virtual Care "
          />
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <Cta btnText="Book a Demo Today" style={{ whiteSpace: 'nowrap' }} />
            <Cta btnText="Request a free Demo" style={{ whiteSpace: 'nowrap' }} />
            <Cta btnText="More Clinical Support Services" style={{ whiteSpace: 'nowrap' }} />
          </div>


        </div>
      </Section>
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle4
          bgUrl="/images/footer-top.jpeg"
          title="Don’t Miss Out – Innovation <br/>That Drives Revenue Growth."
          subTitle="Take the First Step Toward Growth – Schedule <br/> Your Free Consultation Now!"
        />
      </Section>
    </>
  );
}
