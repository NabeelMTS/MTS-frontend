import React from "react";
import Cta from "../Cta";
import AboutSection from '../Section/AboutSection';
import TestimonialSection from '../Section/TestimonialSection';
import AboutSectionStyle5 from "../Section/AboutSection/AboutSectionStyle5";
import Section from "../Section";
import BannerSectionStyle5 from "../Section/BannerSection/BannerSectionStyle5";
import BannerSectionStyle4 from "../Section/BannerSection/BannerSectionStyle4";
import FeaturesSectionStyle4 from "../Section/FeaturesSection/FeaturesSectionStyle4";
import FeaturesSectionStyle3 from "../Section/FeaturesSection/FeaturesSectionStyle3";
import TeamSectionStyle4 from "../Section/TeamSection/TeamSectionStyle4";
import WorkingProcess from "../Section/WorkingProcess";
import { pageTitle } from "../../helpers/PageTitle";

const workingProcessData = [
    {
        title: "Drug Therapy Reviews:",
        subTitle:
            "In-depth evaluation of medication regimens to optimize treatment effectiveness and prevent harmful drug interactions. Personalized recommendations for alternative treatments or adjustments based on the latest clinical guidelines.",
        iconUrl: "/images/home_2/wording_process_icon_1.svg",
        number: "01",
    },
    {
        title: "Patient Education:",
        subTitle:
            "Clear, tailored guidance on medication usage, potential side effects, and proven adherence strategies. Custom educational resources designed to meet the diverse needs of patients from various backgrounds and demographics.",
        iconUrl: "/images/home_2/wording_process_icon_2.svg",
        number: "02",
    },
    {
        title: "Collaboration with Healthcare Providers:",
        subTitle:
            "Close collaboration with healthcare teams to refine treatment plans and ensure a holistic approach to medication management. Real-time consultations for medication-related inquiries, ensuring that providers have the necessary information to make informed decisions.",
        iconUrl: "/images/home_2/wording_process_icon_3.svg",
        number: "03",
    },
    {
        title: "Medication Reconciliation:",
        subTitle:
            "Accurate medication lists during transitions of care, preventing medication errors, duplications, and omissions, ensuring seamless continuity of care.",
        iconUrl: "/images/home_2/wording_process_icon_4.svg",
        number: "04",
    },
    {
        title: "Chronic Disease Support:",
        subTitle:
            " ISpecialized focus on managing chronic conditions such as diabetes, hypertension, and heart disease, ensuring that patients are prescribed and follow effective medication strategies for better health management.",
        iconUrl: "/images/home_2/wording_process_icon_5.svg",
        number: "05",
    },
];

const teamData = [
    {
        imgUrl: "/images/home_2/services/4.jpg",
        name: "Access to Licensed and Experienced Pharmacists:",
        designation:
            "Our team of clinical pharmacists is highly skilled, licensed, and experienced in medication therapy management, ensuring top-quality service with every consultation.",
    },
    {
        imgUrl: "/images/home_2/services/5.jpg",
        name: "Advanced Tools for Drug Therapy Monitoring:",
        designation:
            "MedicoTech Solutions utilizes state-of-the-art technology to monitor drug therapy, ensuring accurate drug use and preventing negative clinical outcomes.",
    },
    {
        imgUrl: "/images/home_2/services/6.jpg",
        name: "Commitment to Medication Safety:",
        designation:
            "Our core mission is to enhance medication safety, improve patient well-being, and reduce the risk of medication-related issues across various healthcare settings, from primary care to specialty practices.",
    },
];

const featureData = [
    {
        title: "Improved Patient Outcomes:",
        subTitle:
            "Optimized medication management reduces hospitalizations, prevents adverse drug events, and promotes quicker recovery.",
        iconUrl: "/images/departments/icon_9.svg",
    },
    {
        title: "Medication Safety:",
        subTitle:
            "We minimize the risks of harmful drug interactions, medication errors, and improper drug use, ensuring patient safety at all stages of care.",
        iconUrl: "/images/departments/icon_10.svg",
    },
    {
        title: "Increased Adherence:",
        subTitle:
            "Our patient-centered education empowers patients with the knowledge and tools they need to confidently adhere to their prescribed regimens, leading to improved long-term health.",
        iconUrl: "/images/departments/icon_11.svg",
    },
    {
        title: "Efficient Provider Support:",
        subTitle:
            "Free up valuable time for physicians by handling medication-related consultations, medication reconciliations, and therapy adjustments, allowing them to focus more on direct patient care.",
        iconUrl: "/images/departments/icon_11.svg",
    },

];

const featureListData = [
    {
        title: "Initial Assessment:",
        subTitle:
            " We conduct a thorough review of the patient's medical history, current medications, and any existing treatment plans to identify areas for improvement.",
        iconUrl: "/images/home_3/value_icon_1.svg",
    },
    {
        title: "Consultation:",
        subTitle:
            "Our pharmacists work closely with healthcare providers to refine treatment regimens, optimize therapy, and prevent adverse outcomes, ensuring a comprehensive and effective care plan.",
        iconUrl: "/images/home_3/value_icon_2.svg",
    },
    {
        title: "Patient Engagement:",
        subTitle:
            "We engage patients in one-on-one counseling sessions to educate them on proper medication use, potential side effects, and effective adherence strategies, helping them feel empowered and in control of their health.",
        iconUrl: "/images/home_3/value_icon_3.svg",
    },
    {
        title: "Ongoing Monitoring:",
        subTitle:
            "Regular follow-up appointments ensure that medications remain effective, and treatment plans are adjusted as necessary to improve patient health outcomes.",
        iconUrl: "/images/home_3/value_icon_1.svg",
    },
    {
        title: "Reporting and Feedback:",
        subTitle:
            "Our pharmacists provide detailed insights into medication regimens, offering actionable recommendations for continuous therapy improvements and better patient outcomes.",
        iconUrl: "/images/home_3/value_icon_2.svg",
    }
];

export default function ClinicalDataAnalysis() {
    pageTitle("Clinical Data Analysis & Reporting");
    return (
        <>
            <BannerSectionStyle5
                bgUrl="/images/about/banner_bg.svg"
                imgUrl="/images/training-bootcamps/banner_img.png"
                title="Optimizing Medication Therapy Management for Safer, Healthier Lives "
                subTitle="Leverage the Expertise of Licensed Clinical Pharmacists to Improve Medication Safety, Boost Efficacy, and Ensure Patient Adherence with MedicoTech Solutions"

            />
             <Section
                        topMd={190}
                        topLg={145}
                        topXl={105}
                        bottomMd={200}
                        bottomLg={150}
                        bottomXl={110}>
                        <Cta
                          title="Partner with Our Expert Clinical Pharmacists Today"
                          subTitle=""
                          bgUrl="/images/cta_bg.jpeg"
                          btnUrl="/appointments"
                          btnText="Request a free Demo"
                        />
                      </Section>
            <Section >
                <div className="container">
                    {/* Start Introduction Section */}
                    <Section >
                        <AboutSectionStyle5
                            imgUrl="/images/home_2/about.jpg"
                            title="Empowering Healthcare with Expert Medication Management"
                            subTitle="At MedicoTech Solutions, we specialize in Clinical Pharmacist Services designed to optimize medication therapy management (MTM), improve patient outcomes, and enhance medication safety. Our licensed pharmacists collaborate closely with healthcare providers to assess medication regimens, prevent harmful drug interactions, and ensure safe and effective medication use."
                            subTitle2="Whether you're managing chronic conditions like diabetes, hypertension, and cardiovascular diseases, or striving to improve medication safety across your practice, MedicoTech’s clinical pharmacist support will help streamline medication processes, reduce adverse drug events (ADEs), and improve adherence to prescribed regimens, ensuring better health outcomes for your patients"
                            supportTitle="24/7 Support"
                            supportSubTitle="We are available when you want"
                        />
                    </Section>
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
                            sectionTitle="Key Features of Our Clinical Pharmacist Services"
                            sectionTitleUp=""
                            sectionTitleDown="A Comprehensive Approach to Medication Management"
                            sectionSubTitle=""
                            data={workingProcessData}
                        />
                    </Section>

                    {/* Start Key Features Section */}
                    {/* Benefits of Clinical Data Analysis & Reporting */}
                    <Section topMd={170} topLg={145} topXl={90}>
                        <FeaturesSectionStyle3
                            sectionTitle="Elevate Your Practice with Expert Pharmacist Support"
                            sectionTitleUp="Benefits of Our Clinical Pharmacist Services"
                            data={featureData}
                        />
                    </Section>

                    {/* Benefits of Clinical Data Analysis & Reporting */}
                    {/* Start How it works */}
                    <Section topMd={200} topLg={150} topXl={110}>
                        <FeaturesSectionStyle4
                            sectionTitle="How It Works: Our Proven Process for Better Medication Management"
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
                            sectionTitle="Your Trusted Partner for Clinical Pharmacist Support"
                            sectionTitleUp="Why Choose MedicoTech Solutions?"
                            data={teamData}
                        />
                    </Section>
                    {/* end why partner with us  */}
                    {/* Start Testimonial */}
                    <Section
                        topMd={185}
                        topLg={140}
                        topXl={100}
                        bottomMd={200}
                        bottomLg={150}
                        bottomXl={110}
                    >
                        <TestimonialSection
                            sectionTitle="Patient Success Stories"
                            sectionTitleDown="Transforming Lives Through Expert Pharmacist Services"
                        />
                    </Section>
                    {/* End Testimonial */}
                    
                    <Section
                        topMd={50}
                        topLg={50}
                        topXl={50}
                        bottomMd={50}
                        bottomLg={50}
                        bottomXl={50}>
                        <Cta
                          title="Enhance Medication Management with MedicoTech Solutions"
                          subTitle=""
                          bgUrl="/images/cta_bg.jpeg"
                          btnUrl="/appointments"
                          btnText="Schedule a Consultation Now"
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
                          title="Enhance Medication Management with MedicoTech Solutions"
                          subTitle=""
                          bgUrl="/images/cta_bg.jpeg"
                          btnUrl="/appointments"
                          btnText="Learn More About Our Clinical Services"
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
