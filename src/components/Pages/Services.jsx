import React from "react";
import Cta from "../Cta";
import AboutSection from '../Section/AboutSection';
import TestimonialSection from '../Section/TestimonialSection';
import BannerSectionStyle3 from "../Section/BannerSection/BannerSectionStyle3";
import AboutSectionStyle5 from "../Section/AboutSection/AboutSectionStyle5";
import Section from "../Section";
import BannerSectionStyle4 from "../Section/BannerSection/BannerSectionStyle4";
import FeaturesSectionStyle6 from "../Section/FeaturesSection/FeaturesSectionStyle6";
import TeamSectionStyle4 from "../Section/TeamSection/TeamSectionStyle4";
import WorkingProcess from "../Section/WorkingProcess";
import TestimonialStyle4 from "../Testimonial/TestimonialStyle4";
import FeaturesSectionStyle from "../Section/FeaturesSection/FeaturesSectionStyle";
import AppointmentWithContactInfoSection from "../Section/AppointmentWithContactInfoSection";
import FeaturesSection from "../Section/FeaturesSection";
import Banner from "../Section/BannerSection";
import { pageTitle } from "../../helpers/PageTitle";
import AwardSectionStyle2 from "../Section/AwardSection/AwardSectionStyle2";

const awardData = [
    {
        iconUrl: "/images/icons/award.svg",
        title: "We Only Work with Healthcare Providers",
    },
    {
        iconUrl: "/images/icons/award.svg",
        title: "Guaranteed Patient Growth"
    },
    {
        iconUrl: "/images/icons/award.svg",
        title: "Data-Driven Patient Attraction",
    },
    {
        iconUrl: "/images/icons/award.svg",
        title: "Medical Expertise With Marketing Firepower",
    },
];

const featureListData = [
    {
        title: "Content strategy formation",
        subTitle:
            "A content strategy that shows exactly how to talk to your perfect customers. We dig deep into who your people really are - what makes them tick, what keeps them up at night, and how your brand can be their superhero.",
        iconUrl: "/images/home_3/value_icon_1.svg",
    },
    {
        title: "Content management",
        subTitle:
            "Your brand has a personality, a voice, a purpose—your content should reflect that. We don’t do cookie-cutter. We create high-impact, strategic content that cuts through the noise, delivers real value, and drives action.",
        iconUrl: "/images/home_3/value_icon_2.svg",
    },
    {
        title: "Social media management",
        subTitle:
            "Posting without a strategy is like talking to an empty room. We craft a consistent, engaging presence that keeps your brand top of mind, fuels engagement, and turns followers into fans.",
        iconUrl: "/images/home_3/value_icon_3.svg",
    },
    {
        title: "DR Copywriting",
        subTitle:
            "Persuasion isn’t about shouting louder—it’s about speaking directly to what your audience cares about. Whether it’s newsletters, case studies, email sequences, or whitepapers, we write conversion-driven copy that hits the right notes, builds trust, and gets results—without the sleazy sales tactics",
        iconUrl: "/images/home_3/value_icon_2.svg",
    },
];
const featureData = [
    {
        title: "Diagnostic Phase",
        subTitle:
            "We take a deep dive into how you currently attract patients, analyze your market position, and uncover hidden opportunities to bring in more patients.",
        iconUrl: "/images/departments/icon_9.svg",
    },
    {
        title: "Treatment Plan",
        subTitle:
            "We craft a laser-focused content strategy, create messaging that converts, and build a system designed to attract and retain patients.",
        iconUrl: "/images/departments/icon_10.svg",
    },
    {
        title: "Implementation",
        subTitle:
            "We execute the plan with precision, closely monitor performance, and make quick adjustments to keep everything running smoothly.",
        iconUrl: "/images/departments/icon_11.svg",
    },
    {
        title: "Results Guarantee",
        subTitle:
            "Expect at least a 30% boost in patient acquisition, full transparency every step of the way, and a risk-free commitment.",
        iconUrl: "/images/departments/icon_11.svg",
    },
];
export default function ClinicalDataAnalysis() {
    pageTitle("Clinical Data Analysis & Reporting");
    return (
        <>
            <BannerSectionStyle3
                bgUrl="/images/about/banner_bg.svg"
                imgUrl="/images/about/about-banner.png"
                title="If You're Here, It Means Your Healthcare Brand Is Bleeding Patients"
                subTitle="Guarantee: We'll Grow Your Patient Acquisition by 30% in 90 Days or You Pay Nothing."
            />

            <Section >
                <div className="container">
                    <Section
                        topMd={190}
                        topLg={145}
                        topXl={105}
                        bottomMd={200}
                        bottomLg={150}
                        bottomXl={110}
                    >
                        {/* experience */}
                        <Section topMd={200} topLg={150} topXl={110}>
                            <FeaturesSectionStyle6
                                sectionTitle="We have over 10+ years of experience with these content types"
                                data={featureListData}
                            />
                        </Section>
                        {/* 1 choice */}
                        <Section topMd={200} topLg={150} topXl={110}>
                            <AwardSectionStyle2
                                sectionTitle="Why Medico Tech Solutions is the # 1 Choice?"
                                data={awardData}
                            />
                        </Section>
                        {/* effective process */}
                        <Section topMd={170} topLg={145} topXl={90}>
                            <FeaturesSectionStyle
                                sectionTitle="Our Ruthlessly Effective Process"
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
                                sectionTitle="Listen to those who we’ve transformed"
                            />
                            <TestimonialStyle4
                                avatarImgUrl={"/images/testimonial/1.jpg"}
                                avatarName="Family Member"
                                text="MedicoTech Solutions provided exceptional care coordination after my mother’s surgery. The seamless transition from hospital to home ensured she recovered faster and without complications."
                            ></TestimonialStyle4>
                            <br />
                            <TestimonialStyle4
                                avatarImgUrl={"/images/testimonial/1.jpg"}
                                avatarName="Dr. John Smith, Primary Care Physician"
                                text="Since implementing MedicoTech’s care management services, we’ve seen significant improvements in patient outcomes and a decrease in hospital readmissions. The platform is easy to use, and their team is always available for support."
                            ></TestimonialStyle4>
                        </Section>
                        {/* End Testimonial */}
                        {/* Deserve to thrive */}
                        <Section>
                            <Banner
                                bgUrl="images/home_1/cta_bg.svg"
                                imgUrl="images/training-bootcamps/cta_img.png"
                                title="Your Practice Deserves More Than Just Survival. It Deserves to Thrive"
                                subTitle="Every patient you've ever dreamed of helping is out there, searching for a healthcare provider who truly understands them. We're the bridge that connects your exceptional care to those who need it most."
                            />
                        </Section>
                        {/* Contact */}
                        <Section topMd={130} topLg={130} topXl={130}>
                            <AppointmentWithContactInfoSection />
                        </Section>
                    </Section>
                </div>
            </Section>

        </>
    );
}
