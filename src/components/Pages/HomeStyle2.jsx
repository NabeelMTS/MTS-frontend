import React from "react";
import HeroStyle2 from "../Hero/HeroStyle2";
import Section from "../Section";
import AboutSectionStyle5 from "../Section/AboutSection/AboutSectionStyle5";
import TestimonialSectionStyle3 from "../Section/TestimonialSection/TestimonialSectionStyle3";
import BannerSectionStyle8 from "../Section/BannerSection/BannerSectionStyle8";
import BannerSectionStyle4 from "../Section/BannerSection/BannerSectionStyle4";

import { partnerData, certificatesData } from "../../helpers/CommonData";
import Cta from "../Cta";
import BrandsSection from "../Section/BrandsSection";

import DepartmentSectionStyle4 from "../Section/DepartmentSection/DepartmentSectionStyle4";
import TeamSectionStyle4 from "../Section/TeamSection/TeamSectionStyle4";
import TestimonialSectionStyle2 from "../Section/TestimonialSection/TestimonialSectionStyle2";
import WorkingProcess from "../Section/WorkingProcess";
import BannerSectionStyle2 from "../Section/BannerSection/BannerSectionStyle2";
import BlogSectionStyle3 from "../Section/BlogSection/BlogSectionStyle3";
import FaqSectionStyle2 from "../Section/FaqSection/FaqSectionStyle2";
import AppointmentSectionStyle2 from "../Section/AppointmentSection/AppointmentSectionStyle2";
import BrandsSectionStyle2 from "../Section/BrandsSection/BrandsSectionStyle2";
import { pageTitle } from "../../helpers/PageTitle";
const teamData = [
	{
		imgUrl: "/images/home_2/services/1.jpg",
		name: "Medical Billing & Coding",
		designation:
			"Precise, expert coding to ensure accurate claims and minimize denials.",
	},
	{
		imgUrl: "/images/home_2/services/2.jpg",
		name: "Revenue Cycle Management",
		designation:
			"Streamlined, data-driven strategies to optimize your revenue cycle and reduce financial loss.",
	},
	{
		imgUrl: "/images/home_2/services/3.jpg",
		name: "IT Consulting",
		designation:
			"Tailored healthcare IT solutions to improve operational efficiency, security, and compliance.",
	},
	{
		imgUrl: "/images/home_2/services/4.jpg",
		name: "Clinical & Pharmacy Services",
		designation:
			"Comprehensive support to enhance treatment outcomes and optimize medication management.",
	},
	{
		imgUrl: "/images/home_2/services/5.jpg",
		name: "Digital Health Solutions",
		designation:
			"Cutting-edge technologies to elevate patient care and drive better health outcomes.",
	},
	{
		imgUrl: "/images/home_2/services/6.jpg",
		name: "Outsourcing Services",
		designation:
			"Affordable BPO and staffing solutions designed to empower healthcare practices and improve operational efficiency.",
	},
];

const testimonialData = [
	{
		text: "MedicoTech Solutions (MTS) has transformed my practice, providing seamless medical billing, credentialing services, and denials management. With their expert solutions, I can focus more on patient care without the stress of administrative challenges. MTS has truly brought peace and efficiency to my practice.”",
		ratingNumber: "5",
		avatarImgUrl: "/images/new_images/avatar1.png",
		avatarName: "J. Herrera ",
		1: "Wisconsin, USA",
	},
	{
		text: "Since partnering with MedicoTech Solutions (MTS), I’ve seen a significant boost in my revenue cycle management. Their tailored approach to revenue optimization and financial performance improvement has transformed my practice. I highly recommend their expert services to any healthcare provider looking to enhance their financial efficiency.”",
		ratingNumber: "4.5",
		avatarImgUrl: "/images/new_images/avatar2.png",
		avatarName: "Lilly-Rose",
		avatarDesignation: "New York, USA",
	},
	{
		text: "Their innovative healthcare technology solutions have significantly improved my practice. The professional and dedicated team ensures accurate, efficient services that streamline workflows. I highly value their commitment to advancing healthcare and delivering impactful, reliable results.”",
		ratingNumber: "5",
		avatarImgUrl: "/images/new_images/avatar1.png",
		avatarName: "L. Taylor",
		avatarDesignation: "Florida, USA",
	},
	{
		text: "Partnering with MedicoTech Solutions has transformed my practice. Their expert clinical analysis and detailed medication reviews have improved therapeutic outcomes, streamlined decision-making, and boosted revenue, ensuring better care for patients and enhanced practice efficiency.”",
		ratingNumber: "4.5",
		avatarImgUrl: "/images/new_images/avatar1.png",
		avatarName: "K. Tamara",
		avatarDesignation: "Maryland, USA",
	},
	{
		text: "MTS's virtual medical assistance has streamlined my practice and improved patient care. Their professional, dedicated team supports evidence-based decisions, enhancing safety and treatment outcomes. Highly recommend their services for healthcare providers seeking to elevate their practice.”",
		ratingNumber: "4.5",
		avatarImgUrl: "/images/home_1/avatar_2.png",
		avatarName: "H. Polus",
		avatarDesignation: "Illinois, USA",
	},
];
const workingProcessData = [
	{
		title: "Schedule Free Consultation & Assessment",
		subTitle:
			"Connect with our expert team for a free consultation to assess your needs. We’ll show you how our AI-powered solutions can help boost revenue, reduce costs, and streamline operations.",
		iconUrl: "/images/home_2/wording_process_icon_1.svg",
		number: "01",
	},
	{
		title: "Custom Solutions for Revenue Growth",
		subTitle:
			"Our team customizes solutions to fit your practice’s needs, using advanced healthcare technology and AI to optimize billing accuracy, minimize denials, and maximize your revenue potential.",
		iconUrl: "/images/home_2/wording_process_icon_2.svg",
		number: "02",
	},
	{
		title: "AI-Driven Efficiency Boost",
		subTitle:
			"Save valuable time by automating routine tasks with our AI-driven systems, which reduce administrative workload and allow your staff to focus on patient care and business growth.",
		iconUrl: "/images/home_2/wording_process_icon_3.svg",
		number: "03",
	},
	{
		title: "Continuous Support & Revenue Growth",
		subTitle:
			"We provide ongoing support and monitor performance to ensure your systems operate smoothly. By optimizing your revenue cycle, we help increase cash flow and reduce claim denials.",
		iconUrl: "/images/home_2/wording_process_icon_4.svg",
		number: "04",
	},
	{
		title: "Sustained Success & Impactful Results",
		subTitle:
			"MedicoTech Solutions is committed to your practice’s success. Our data-driven insights and technology continuously drive operational efficiency, improve patient care, and boost revenue by 30-35%.",
		iconUrl: "/images/home_2/wording_process_icon_5.svg",
		number: "05",
	},
];
const blogData = [
	{
		title: "The Benefits of Mindfulness Meditation for Stress and Anxiety",
		thumbUrl: "/images/home_2/services/1.jpg",
		date: "May 1, 2023",
	},
	{
		title: "Healthy Eating on a Budget: Tips and Strategies",
		thumbUrl: "/images/home_2/services/3.jpg",
		date: "May 4, 2023",
	},
	{
		title: "The Importance of Regular Cancer Screenings and Early Detection",
		thumbUrl: "/images/home_2/services/4.jpg",
		date: "May 1, 2023",
	},
];
const faqData = [
	{
		title: "What services does ProHealth offer?",
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
	},
	{
		title: "How do I schedule an appointment with ProHealth?",
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
	},
	{
		title: "Do you accept insurance?",
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
	},
	{
		title: "What should I bring to my appointment?",
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
	},
	{
		title: "How do I request a prescription refill?",
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
	},
];
const brandData = [
	{
		imgUrl: "/images/brands/1.jpg",
		imgAlt: "Brand",
	},
	{
		imgUrl: "/images/brands/2.jpg",
		imgAlt: "Brand",
	},
	{
		imgUrl: "/images/brands/3.jpg",
		imgAlt: "Brand",
	},
	{
		imgUrl: "/images/brands/4.jpg",
		imgAlt: "Brand",
	},
	{
		imgUrl: "/images/brands/5.jpg",
		imgAlt: "Brand",
	},
	{
		imgUrl: "/images/brands/6.jpg",
		imgAlt: "Brand",
	},
	{
		imgUrl: "/images/brands/7.jpg",
		imgAlt: "Brand",
	},
	{
		imgUrl: "/images/brands/8.jpg",
		imgAlt: "Brand",
	},
	{
		imgUrl: "/images/brands/9.jpg",
		imgAlt: "Brand",
	},
	{
		imgUrl: "/images/brands/10.jpg",
		imgAlt: "Brand",
	},
	{
		imgUrl: "/images/brands/11.jpg",
		imgAlt: "Brand",
	},
	{
		imgUrl: "/images/brands/12.jpg",
		imgAlt: "Brand",
	},
	{
		imgUrl: "/images/brands/13.jpg",
		imgAlt: "Brand",
	},
	{
		imgUrl: "/images/brands/14.jpg",
		imgAlt: "Brand",
	},
];
export default function HomeStyle2() {
	pageTitle("Home V2");
	return (
		<>
			<HeroStyle2 />
			<Section topMd={170} topLg={120} topXl={100}>
				<AboutSectionStyle5
					imgUrl="/images/home_2/about.jpg"
					titleUp="About Us"
					title="MedicoTech Solutions (MTS): Expert Healthcare IT, Clinical, and Billing Solutions Provider"
					subTitle="We provide innovative, hassle-free medical billing, coding, and IT solutions designed to streamline processes and enhance efficiency."
					subTitle2="Trusted by numerous healthcare providers, MTS empowers organizations with top-tier IT consultation and cutting-edge
										healthcare technologies, enabling providers to focus on
										delivering exceptional patient care. Our goal is to simplify
										operations, reduce administrative burdens, and drive better
										healthcare outcomes."
					supportTitle="24/7 Support"
					supportSubTitle="We are available when you want"
				/>
			</Section>
			<Section
				topMd={195}
				topLg={145}
				topXl={105}
				bottomMd={200}
				bottomLg={150}
				bottomXl={110}
			>
				<TeamSectionStyle4
					sectionTitle="Core Services"
					sectionTitleUp="OUR"
					data={teamData}
				/>
			</Section>

			<Section
				className="cs_bg_filed"
				style={{ backgroundImage: "url(/images/home_3/testimonial_bg.svg)" }}
			>
				<Section
					topMd={190}
					topLg={145}
					topXl={105}
					bottomMd={200}
					bottomLg={150}
					bottomXl={110}
				>
					<TestimonialSectionStyle3
						sectionTitle="What Our Patients Say <br />About Us"
						sectionTitleUp="TESTIMONIALS"
						data={testimonialData}
					/>
				</Section>
				{/* <BannerSectionStyle8
					imgUrl="/images/home_3/banner_img.png"
					bgUrl="/images/home_3/banner_bg.svg"
					title="Don’t Let Your Health Take a Backseat!"
					subTitle="Schedule an appointment with one of our experienced medical professionals today!"
				/> */}
			</Section>
			{/* <Section
				className="cs_bg_filed"
				style={{ backgroundImage: `url(/images/home_2/testimonial_bg.svg)` }}
				topMd={190}
				topLg={145}
				topXl={105}
				bottomMd={200}
				bottomLg={150}
				bottomXl={110}
			>
				<TestimonialSectionStyle2
					sectionTitle="The Difference We Make <br/> in Healthcare"
					sectionTitleUp="CLIENT TESTIMONIALS"
					data={testimonialData}
				/>
			</Section> */}
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
			{/* <Section>
				<BannerSectionStyle2
					bgUrl="/images/home_2/banner-section.jpg"
					title="Don’t Miss Out – Innovation That Drives Revenue Growth."
					subTitle="Take the First Step Toward Growth – Schedule Your Free Consultation Now!"
				/>
			</Section> */}
			<Section>
				<AppointmentSectionStyle2
					bgUrl="/images/home_2/appointment_bg.svg"
					imgUrl="/images/home_2/appointment_img.png"
					sectionTitle="Free Consultation"
					sectionTitleUp="Schedule"
				/>
			</Section>
			<Section topMd={190} topLg={145} topXl={105}>
				<BlogSectionStyle3
					sectionTitle="Latest Update"
					sectionTitleUp="BLOG POSTS"
					sectionTitleDown=""
					sectionSubTitle=""
					data={blogData}
				/>
			</Section>
			{/* Start FAQ Section */}
			{/* <Section
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <FaqSectionStyle2
          data={faqData}
          sectionTitle="Usually Asked"
          sectionTitleUp="What People"
        />
      </Section> */}
			{/* End FAQ Section */}
			<Section
			topMd={190}
			topLg={145}
			topXl={105}
			bottomMd={200}
			bottomLg={150}
			bottomXl={110}>
				<Cta
					title="Maximize Efficiency with Your EMR"
					subTitle="Our billing experts turn your EHR into a revenue-driving powerhouse, ensuring clean, timely claims every time."
					bgUrl="/images/cta_bg.jpeg"
					btnUrl="/appointments"
					btnText="Free Audit"
				/>
			</Section>
			<Section
				topMd={200}
				topLg={150}
				topXl={110}
				bottomMd={200}
				bottomLg={150}
				bottomXl={110}
			>
				<BrandsSectionStyle2 data={brandData} />
			</Section>

			<Section
				topMd={190}
				topLg={145}
				topXl={105}
				bottomMd={200}
				bottomLg={150}
				bottomXl={110}
			>
				<BrandsSection data={partnerData} sectionTitle="Our Partners" />
			</Section>

			<Section
				topMd={200}
				topLg={150}
				topXl={110}
				bottomMd={200}
				bottomLg={150}
				bottomXl={110}
			>
				<h4 className="d-flex justify-content-center">
					Certifications & Advanced Cybersecurity Protection{" "}
				</h4>
				<BrandsSectionStyle2 data={certificatesData} />
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
