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
    title: "Enhanced Care Coordination and Continuity",
    subTitle:
      "Seamless communication between healthcare teams, specialists, and patients ensures comprehensive, coordinated care. Real-time data sharing and monitoring for proactive decision-making, reducing errors and improving patient satisfaction.",
    iconUrl: "/images/home_2/wording_process_icon_1.svg",
    number: "01",
  },
  {
    title: "Cost Savings through Reduced Readmissions",
    subTitle:
      "Proactive CCM and PCM services ensure early intervention, reducing costly hospital readmissions and emergency room visits. By optimizing care plans, we reduce unnecessary procedures and hospitalizations, leading to direct cost savings.",
    iconUrl: "/images/home_2/wording_process_icon_2.svg",
    number: "02",
  },
  {
    title: "Operational Efficiency and Increased Provider Productivity",
    subTitle:
      "Automating administrative tasks such as patient follow-ups, data sharing, and care updates allows providers to focus on delivering high-value care. Our solutions integrate seamlessly with existing Electronic Health Record (EHR) systems, eliminating the need for additional infrastructure.",
    iconUrl: "/images/home_2/wording_process_icon_3.svg",
    number: "03",
  },
  {
    title: "Improved Patient Adherence and Engagement",
    subTitle:
      "Personalized care plans and continuous follow-up ensure that patients stay on track with their treatment regimens, leading to better health outcomes. Educational resources and regular patient check-ins empower patients to manage their health, improving long-term adherence.",
    iconUrl: "/images/home_2/wording_process_icon_4.svg",
    number: "04",
  },
  {
    title: "Optimized Reimbursement and Compliance",
    subTitle:
      " MedicoTech helps providers optimize reimbursements through improved care coordination and patient outcomes, particularly under value-based care models like CMS’s Chronic Care Management and Transitional Care Management programs.",
    iconUrl: "/images/home_2/wording_process_icon_5.svg",
    number: "05",
  },
];

const teamData = [
  {
    imgUrl: "/images/home_2/services/4.jpg",
    name: "Comprehensive Care Solutions",
    designation:
      "Unlike competitors who may focus on only one aspect of care, MedicoTech combines Chronic Care Management (CCM) and Patient Care Management (PCM) into one integrated solution that addresses both ongoing care and transitional needs.",
  },
  {
    imgUrl: "/images/home_2/services/5.jpg",
    name: "Seamless Integration with Existing Systems",
    designation:
      "MedicoTech Solutions works in harmony with your existing Electronic Health Records (EHR) system, minimizing disruption and streamlining workflows for better care delivery.",
  },
  {
    imgUrl: "/images/home_2/services/6.jpg",
    name: "Cost-Effective",
    designation:
      "By reducing hospital readmissions, optimizing chronic care, and improving patient adherence, we help you achieve significant cost savings—while enhancing patient satisfaction and improving healthcare outcomes.",
  },
  {
    imgUrl: "/images/home_2/services/6.jpg",
    name: "Advanced Monitoring Technology",
    designation:
      "Our platform leverages cutting-edge technology like AI-driven analytics, remote monitoring, and secure data sharing to ensure precise, timely care and better decision-making.",
  },
  {
    imgUrl: "/images/home_2/services/6.jpg",
    name: "Compliance and Reimbursement Optimization",
    designation:
      "We ensure that our services are in full compliance with U.S. regulations, including HIPAA and CMS guidelines, and that you maximize reimbursements through participation in value-based care programs.",
  },
];

const featureData = [
  {
    title: "Holistic Care Approach",
    subTitle:
      "Unlike competitors who may focus on one type of care (e.g., chronic conditions or post-acute care), MedicoTech provides a comprehensive solution that covers both.",
    iconUrl: "/images/departments/icon_9.svg",
  },
  {
    title: "Seamless EHR Integration",
    subTitle:
      "Our platform integrates easily with your existing EHR system, reducing administrative overhead and improving clinical workflows.",
    iconUrl: "/images/departments/icon_10.svg",
  },
  {
    title: "Real-time Monitoring and Feedback",
    subTitle:
      "We provide real-time patient monitoring and actionable feedback for providers, helping them make informed decisions quickly.",
    iconUrl: "/images/departments/icon_11.svg",
  },
  {
    title: "Proven Cost Savings",
    subTitle:
      "MedicoTech helps healthcare providers reduce readmissions and unnecessary procedures, leading to direct financial savings and more efficient use of resources.",
    iconUrl: "/images/departments/icon_11.svg",
  },
];

const featureListData = [
  {
    title: "Initial Assessment",
    subTitle:
      " Thorough evaluation of the patient’s medical history, current medications, and clinical needs to identify gaps in care and design a personalized care plan.",
    iconUrl: "/images/home_3/value_icon_1.svg",
  },
  {
    title: "Customized Care Plan",
    subTitle:
      "Creation of a tailored care plan that aligns with both clinical guidelines and the patient’s unique goals, addressing chronic disease management or acute recovery needs.",
    iconUrl: "/images/home_3/value_icon_2.svg",
  },
  {
    title: "Ongoing Monitoring and Follow-Up",
    subTitle:
      "Regular check-ins via telemedicine or in-person visits to track patient progress, provide support, and make adjustments as necessary.",
    iconUrl: "/images/home_3/value_icon_3.svg",
  },
  {
    title: "Provider Collaboration",
    subTitle:
      "Seamless communication and collaboration with healthcare providers ensure that the patient’s care plan is effectively executed and updated in real time.",
    iconUrl: "/images/home_3/value_icon_1.svg",
  },
  {
    title: "Continuous Improvement",
    subTitle:
      "Feedback from patients and healthcare providers is continuously incorporated into care plans, ensuring that treatment remains effective and outcomes improve over time.",
    iconUrl: "/images/home_3/value_icon_2.svg",
  }
];

const featureListData2 = [
  {
    title: "Chronic Care Management (CCM)",
    subTitle:
      "CCM is vital for patients managing long-term chronic conditions like diabetes, hypertension, heart disease, and COPD. This service helps providers deliver continuous, proactive care that reduces complications and minimizes hospital readmissions, thereby improving care quality while reducing overall healthcare costs.",
    iconUrl: "/images/home_3/hero_img_4.svg",
  },
  {
    title: "Patient Care Management (PCM)",
    subTitle:
      "focuses on addressing the immediate care needs of patients transitioning from the hospital or undergoing acute recovery. By ensuring smooth transitions, we reduce post-discharge complications, prevent unnecessary readmissions, and facilitate faster recovery.",
    iconUrl: "images/home_3/value_icon_2.svg",
  },
];


export default function ClinicalDataAnalysis() {
  pageTitle("Clinical Data Analysis & Reporting");
  return (
    <>
      <BannerSectionStyle3
        bgUrl="/images/about/banner_bg.svg"
        imgUrl="/images/about/about-banner.png"
        title="Optimize Patient Outcomes with MedicoTech Solutions"
        subTitle="Revolutionizing Healthcare Delivery with Advanced Chronic Care Management (CCM) and Patient Care Management (PCM) Solutions"
      />
      <Section
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}>
        <Cta
          title="Comprehensive Care Management: Optimize Patient Outcomes with MedicoTech Solutions"
          subTitle="Revolutionizing Healthcare Delivery with Advanced Chronic Care Management (CCM) and Patient Care Management (PCM) Solutions"
          bgUrl="/images/cta_bg.jpeg"
          btnUrl="/appointments"
          btnText="Partner with MedicoTech Solutions Today"
        />
      </Section>

      <Section >
        <div className="container">
          {/* Start Introduction Section */}
          <AboutSectionStyle5
            imgUrl="/images/home_2/about.jpg"
            title="Transforming Healthcare Delivery with Advanced Care Management Solutions"
            subTitle="In the rapidly evolving U.S. healthcare market, providers face the dual challenge of delivering high-quality care while managing costs and enhancing patient satisfaction. MedicoTech Solutions is here to help navigate this landscape with our comprehensive Chronic Care Management (CCM) and Patient Care Management (PCM) services."
            subTitle2="Our platform is designed to help healthcare providers optimize care coordination, reduce hospital readmissions, and enhance operational efficiency. By integrating both CCM and PCM, we provide holistic, patient-centered care that addresses the full spectrum of patient needs—from chronic disease management to post-acute recovery."
            supportTitle="24/7 Support"
            supportSubTitle="We are available when you want"
          />
          {/* End Introduction Section */}
          {/* Benefit Provider Section */}
          <Section
            topMd={185}
            topLg={140}
            topXl={100}
            bottomMd={185}
            bottomLg={140}
            bottomXl={100}
          >
            <FeaturesSection sectionTitle="Maximize Market Impact" data={featureListData2} />
          </Section>{/* Start Key Benefits Section */}
          <Section
            topMd={185}
            topLg={140}
            topXl={100}
            bottomMd={200}
            bottomLg={150}
            bottomXl={110}
          >
            <WorkingProcess
              sectionTitle="Key Benefits of MedicoTech’s CCM and PCM Solutions"
              sectionTitleUp=""
              sectionTitleDown=""
              sectionSubTitle=""
              data={workingProcessData}
            />
          </Section>

          {/* Start Key Features Section */}
          {/* Start How it works */}
          <Section topMd={200} topLg={150} topXl={110}>
            <FeaturesSectionStyle4
              sectionTitle="How It Works | Our Proven Process for Better Patient Care"
              data={featureListData}
            />
          </Section>
          {/* end How it works */}
          {/* start why partner with us  */}
          <Section
            topMd={195}
            topLg={145}
            topXl={105}
            bottomMd={200}
            bottomLg={150}
            bottomXl={110}
          >
            <TeamSectionStyle4
              sectionTitle="Why Choose MedicoTech Solutions?"
              data={teamData}
            />
          </Section>
          {/* end why partner with us  */}
          {/* Competitor Analysis */}
          <AboutSectionStyle5
            imgUrl="/images/about/why-choose-us.jpg"
            title="Standing Out in a Competitive Market"
            titleUp="Competitor Analysis"
            subTitle="MedicoTech Solutions stands apart from other providers like Livongo, Omada Health, and Cigna, who also offer CCM and PCM services. While these competitors provide similar services, MedicoTech’s unique offering is the integration of both CCM and PCM in a single platform. This approach helps address the full spectrum of patient care needs—from chronic disease management to acute recovery support."
            supportTitle="24/7 Support"
            supportSubTitle="We are available when you want"
          />
          <Section topMd={170} topLg={145} topXl={90}>
            <TeamSectionStyle4
              sectionTitle="Key differentiators include"
            />
            <FeaturesSectionStyle3
              sectionTitle=""
              sectionTitleUp=""
              data={featureData}
            />
          </Section>
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
              sectionTitle="Delivering Results, Transforming Lives"
            />
            <TestimonialStyle4
              avatarImgUrl={"/images/new_images/avatar1.png"}
              avatarName="Family Member"
              text="MedicoTech Solutions provided exceptional care coordination after my mother’s surgery. The seamless transition from hospital to home ensured she recovered faster and without complications."
            ></TestimonialStyle4>
            <br />
            <TestimonialStyle4
              avatarImgUrl={"/images/new_images/avatar2.png"}
              avatarName="Dr. John Smith, Primary Care Physician"
              text="Since implementing MedicoTech’s care management services, we’ve seen significant improvements in patient outcomes and a decrease in hospital readmissions. The platform is easy to use, and their team is always available for support."
            ></TestimonialStyle4>
          </Section>
          {/* End Testimonial */}
          <TeamSectionStyle4
            sectionTitle="Enhance Your Practice with MedicoTech Solutions"
          />
          <Section
            topMd={50}
            topLg={50}
            topXl={50}
            bottomMd={50}
            bottomLg={50}
            bottomXl={50}>
            <Cta
              title="Enhance Your Practice with MedicoTech Solutions"
              subTitle=""
              bgUrl="/images/cta_bg.jpeg"
              btnUrl="/appointments"
              btnText="Learn About CCM and PCM"
            />
          </Section>
          <Section
            topMd={50}
            topLg={50}
            topXl={50}
            bottomMd={50}
            bottomLg={50}
            bottomXl={50}>
            <Cta
              title="Enhance Your Practice with MedicoTech Solutions"
              subTitle=""
              bgUrl="/images/cta_bg.jpeg"
              btnUrl="/appointments"
              btnText="Request a free Demo"
            />
          </Section>
          <Section
            topMd={50}
            topLg={50}
            topXl={50}
            bottomMd={50}
            bottomLg={50}
            bottomXl={50}>
            <Cta
              title="Enhance Your Practice with MedicoTech Solutions"
              subTitle=""
              bgUrl="/images/cta_bg.jpeg"
              btnUrl="/appointments"
              btnText="Get Started Today"
            />
          </Section>
          

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
