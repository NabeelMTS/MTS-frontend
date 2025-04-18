import React from "react";
import HeroStyle2 from "../Hero/HeroStyle2.jsx";
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
		imgUrl: "/images/home_2/medicalbilling.jpg",
		name: "Medical Billing & Coding",
		designation:
			"Precise, expert coding to ensure accurate claims and minimize denials.",
	},
	{
		imgUrl: "/images/home_2/rcmservices.jpg",
		name: "Revenue Cycle Management",
		designation:
			"Streamlined, data-driven strategies to optimize your revenue cycle and reduce financial loss.",
	},
	{
		imgUrl: "/images/home_2/itconsult.jpg",
		name: "IT Consulting",
		designation:
			"Tailored healthcare IT solutions to improve operational efficiency, security, and compliance.",
	},
	{
		imgUrl: "/images/home_2/clinic.jpg",
		name: "Clinical & Pharmacy Services",
		designation:
			"Comprehensive support to enhance treatment outcomes and optimize medication management.",
	},
	{
		imgUrl: "/images/home_2/digital.jpg",
		name: "Digital Health Solutions",
		designation:
			"Cutting-edge technologies to elevate patient care and drive better health outcomes.",
	},
	{
		imgUrl: "/images/home_2/outsource.jpg",
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
		color: "#30c455", // Add green color touch
	},
	{
		title: "Custom Solutions for Revenue Growth",
		subTitle:
			"Our team customizes solutions to fit your practice’s needs, using advanced healthcare technology and AI to optimize billing accuracy, minimize denials, and maximize your revenue potential.",
		iconUrl: "/images/home_2/wording_process_icon_2.svg",
		number: "02",
		color: "#30c455", // Add green color touch
	},
	{
		title: "AI-Driven Efficiency Boost",
		subTitle:
			"Save valuable time by automating routine tasks with our AI-driven systems, which reduce administrative workload and allow your staff to focus on patient care and business growth.",
		iconUrl: "/images/home_2/wording_process_icon_3.svg",
		number: "03",
		color: "#30c455", // Add green color touch
	},
	{
		title: "Continuous Support & Revenue Growth",
		subTitle:
			"We provide ongoing support and monitor performance to ensure your systems operate smoothly. By optimizing your revenue cycle, we help increase cash flow and reduce claim denials.",
		iconUrl: "/images/home_2/wording_process_icon_4.svg",
		number: "04",
		color: "#306027", // Add green color touch
	},
	{
		title: "Sustained Success & Impactful Results",
		subTitle:
			"MedicoTech Solutions is committed to your practice’s success. Our data-driven insights and technology continuously drive operational efficiency, improve patient care, and boost revenue by 30-35%.",
		iconUrl: "/images/home_2/wording_process_icon_5.svg",
		number: "05",
		color: "#30c455", // Add green color touch
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
			<Section
			topMd={30}
			topLg={25}
			topXl={20}
			bottomMd={30}
			bottomLg={25}
			bottomXl={20}>
				<Cta
					subTitle="Accurate, HIPAA-compliant medical billing solutions designed to streamline your practice and boost your cash flow."
					btnUrl="/appointments"
					btnText="Book a Free Consultation"
				/>
			</Section>
			<Section
				className="icon-section"
				topMd={30}
				topLg={25}
				topXl={20}
				bottomMd={30}
				bottomLg={25}
				bottomXl={20}
			>
				<div className="icon-grid">
					<div className="icon-item">
						<i className="fas fa-check-circle"></i>
						<h4>99% Claim Acceptance Rate</h4>
					</div>
					<div className="icon-item">
						<i className="fas fa-user-tie"></i>
						<h4>Dedicated Billing Specialists</h4>
					</div>
					<div className="icon-item">
						<i className="fas fa-shield-alt"></i>
						<h4>HIPAA-Compliant Systems</h4>
					</div>
					<div className="icon-item">
						<i className="fas fa-clock"></i>
						<h4>Fast Turnaround Time</h4>
					</div>
					<div className="icon-item">
						<i className="fas fa-chart-line"></i>
						<h4>Transparent Monthly Reporting</h4>
					</div>
					<div className="icon-item">
						<i className="fas fa-headset"></i>
						<h4>24/7 Customer Support</h4>
					</div>
				</div>
			</Section>
			<Section
				className="team-section"
				topMd={30}
				topLg={25}
				topXl={20}
				bottomMd={30}
				bottomLg={25}
				bottomXl={20}
			>
				<h2 className="section-title">
					<span className="section-title-up">OUR</span>
					Core Services
				</h2>
				<TeamSectionStyle4
					data={teamData}
				/>
			</Section>
			<Section
				topMd={30}
				topLg={25}
				topXl={20}
				bottomMd={30}
				bottomLg={25}
				bottomXl={20}
			>
				<h2 className="section-title">
					<span className="section-title-up">Step-by-Step</span>
					Your Journey with MTS
				</h2>
				<WorkingProcess
					data={workingProcessData}
				/>
			</Section>
			<Section topMd={30} topLg={25} topXl={20} bottomMd={30} bottomLg={25} bottomXl={20}>
				<AboutSectionStyle5
					imgUrl="/images/home_2/about.jpg"
					titleUp="About Us"
					title="Simplify your operations with our hassle-free Medical Billing, Coding, and Healthcare IT services with as low as 3.89%."
					subTitle={
						<>
							At MTS, we help clinics and hospitals{" "}
							<span style={{ color: "#30c455" }}>Boost Efficiency</span>,{" "}
							<span style={{ color: "#30c455" }}>Reduce Admin work</span>, and{" "}
							<span style={{ color: "#30c455" }}>Improve Patient Outcomes</span>.
							Trusted by healthcare providers nationwide, our expert team delivers
							reliable <span style={{ color: "#30c455" }}>Billing</span>,{" "}
							<span style={{ color: "#30c455" }}>Coding</span>, and{" "}
							<span style={{ color: "#30c455" }}>IT Consulting</span>—so you can
							focus on exceptional care.
						</>
					}
					supportTitle="24/7 Support"
					supportSubTitle="We are available when you want"
				/>
			</Section>

			

			<Section
				className="appointment-section"
				topMd={30}
				topLg={25}
				topXl={20}
				bottomMd={30}
				bottomLg={25}
				bottomXl={20}
			>
				<AppointmentSectionStyle2
					bgUrl="/images/home_2/appointment_bg.svg"
					imgUrl="/images/home_2/appointment_img.png"
					sectionTitle="Free Consultation"
					sectionTitleUp="Schedule"
				/>
			</Section>

			<Section
				className="cs_bg_filed testimonial-section"
				style={{ 
					backgroundImage: "url(/images/home_3/testimonial_bg.svg)",
					marginBottom: "400px", // Increased bottom margin to prevent overlap
				}}
			>
				<Section
					topMd={40} // Increased top spacing for better UX
					topLg={35}
					topXl={30}
					bottomMd={50} // Further adjusted bottom spacing for consistency
					bottomLg={45}
					bottomXl={40}
				>
					<TestimonialSectionStyle3
						sectionTitle="​Feedback from the Frontlines​"
						sectionTitleUp="TESTIMONIALS"
						data={testimonialData}
					/>
				</Section>
			</Section>

			<Section topMd={30}
				topLg={25}
				topXl={20}
				bottomMd={30}
				bottomLg={25}
				bottomXl={20}>
				<BlogSectionStyle3
					sectionTitle="Latest Update"
					sectionTitleUp="BLOG POSTS"
					sectionTitleDown=""
					sectionSubTitle=""
					data={blogData}
				/>
			</Section>

		
			<Section
			topMd={30}
			topLg={25}
			topXl={20}
			bottomMd={30}
			bottomLg={25}
			bottomXl={20}>
				<Cta
					title="Maximize Efficiency with Your EMR"
					subTitle="Our billing experts turn your EHR into a revenue-driving powerhouse, ensuring clean, timely claims every time."
					bgUrl="/images/cta_bg.jpeg"
					btnUrl="/appointments"
					btnText="Book a Free Consultation"
				/>
			</Section>
		</>
	);
}
