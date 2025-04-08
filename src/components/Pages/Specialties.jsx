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
import HeroStyle3 from "../Hero/HeroStyle3";
import DepartmentSection from '../Section/DepartmentSection';
import Banner from "../Section/BannerSection";


const departmentData = [
    {
        title: 'Emergency Department',
        iconUrl: 'images/home_1/department_icon_1.svg',
        href: '/departments/department-details',
    },
    {
        title: 'Pediatric Departement',
        iconUrl: 'images/home_1/department_icon_2.svg',
        href: '/departments/department-details',
    },
    {
        title: 'Gynecology Department',
        iconUrl: 'images/home_1/department_icon_3.svg',
        href: '/departments/department-details',
    },
    {
        title: 'Cardiology Department',
        iconUrl: 'images/home_1/department_icon_4.svg',
        href: '/departments/department-details',
    },
    {
        title: 'Neurology Department',
        iconUrl: 'images/home_1/department_icon_5.svg',
        href: '/departments/department-details',
    },
    {
        title: 'Psychiatry Department',
        iconUrl: 'images/home_1/department_icon_6.svg',
        href: '/departments/department-details',
    },
];

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
            <HeroStyle3
                title="Making Health Easy and Accessible"
                subTitle="At ProHealth, we prioritize our patient's health and well-being, and
            we strive to provide compassionate care with exceptional results."
                bgUrl="/images/home_3/hero_bg.svg"
                imgUrl="/images/new_images/hero_img_5.png"
                imgUrl2="/images/home_3/hero_img_2.png"
                imgUrl3="/images/home_3/hero_img_3.png"
                imgUrl4="/images/home_3/hero_img_4.png"
                avatarImgUrl="/images/new_images/avatar1.png"
                avatarName="Dr. Michele Amber, MD"
                avatarSpeciality="Cardiologist"
                avatarSheduleList={[
                    {
                        icon: "fa6-solid:calendar-days",
                        title: "Days :",
                        details: "Monday - Thursday",
                    },
                    {
                        icon: "fa6-regular:clock",
                        title: "Time :",
                        details: "09.00 Am - 07.00 PM",
                    },
                ]}
            />


            <Section
                bottomMd={185}
                bottomLg={140}
                bottomXl={100}>
                <div className="container">
                    {/* Start Introduction Section */}
                    <AboutSectionStyle5
                        imgUrl="/images/home_2/about.jpg"
                        title="Comprehensive Medical Billing & Coding Services for Every Specialty"
                        subTitle="Delivering accurate, efficient, and customized billing and coding solutions to healthcare providers across the USA."
                        subTitle2="Every medical specialty deserves tailored expertise, and at MedicoTech Solutions, we deliver just that. From billing and coding to clinical services, our solutions are designed to meet the unique needs of each specialty. Whether you're a small practice or a large healthcare institution, we provide accurate, efficient, and compliant services that drive your success, maximize revenue, and keep your practice running smoothly in a rapidly evolving healthcare landscape. "
                        supportTitle="24/7 Support"
                        supportSubTitle="We are available when you want"
                    />
                </div>
                {/* Specialties Section */}
                <Section topMd={185} topLg={150} topXl={110}>
                    <DepartmentSection
                        sectionTitle="Our Specialties"
                        bgUrl="images/home_1/department_bg.svg"
                        data={departmentData}
                    />
                </Section>
                {/* Ready to .... */}
                <Section>
                    <Banner
                        bgUrl="images/home_1/cta_bg.svg"
                        imgUrl="images/training-bootcamps/cta_img.png"
                        title="Ready to Transform Your Practice?"
                        subTitle="Discover the future of medical documentation with MedicoTech Solutions. Enjoy seamless integration, unmatched accuracy, and enhanced efficiency—tailored to your practice's unique needs."
                    />
                </Section>
                {/* Why Choose Us */}
                <Section topMd={170} topLg={120} topXl={100}>
                    <AboutSectionStyle5
                        imgUrl="/images/home_2/appointment_img.png"
                        title="Why Choose Our Specialized Services"
                        subTitle="No matter the specialty, we believe in delivering customized solutions that optimize your practice's efficiency and revenue. With years of experience in medical billing, coding, and clinical services, our team ensures that your unique needs are met with precision. We handle the complexities so you can focus on what matters most—providing exceptional care to your patients."
                        supportTitle="24/7 Support"
                        supportSubTitle="We are available when you want"
                    />
                </Section>
            </Section>
            <Section className="cs_footer_margin_0">
                <BannerSectionStyle4
                    bgUrl="/images/healthcare-outsourcing-solutions/banner_bg_2.jpeg"
                    title="Ready to Optimize Your Billing and Coding?"
                    subTitle="No matter your specialty, MedicoTech Solutions has the expertise to streamline your billing and coding processes. Our specialized services help ensure that your practice operates smoothly, maximizes revenue, and remains compliant. Contact us today to learn more about how our specialized services can benefit your practice and simplify your operations."
                />
            </Section>
        </>
    );
}
