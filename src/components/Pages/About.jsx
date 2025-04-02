import React from "react";
import { Link } from "react-router-dom";
import BannerSectionStyle3 from "../Section/BannerSection/BannerSectionStyle3";
import Section from "../Section";
import FeaturesSectionStyle2 from "../Section/FeaturesSection/FeaturesSectionStyle2";
import FunFactSection from "../Section/FunFactSection";
import FeaturesSectionStyle4 from "../Section/FeaturesSection/FeaturesSectionStyle4";
import BannerSectionStyle4 from "../Section/BannerSection/BannerSectionStyle4";

import DepartmentSectionStyle2 from "../Section/DepartmentSection/DepartmentSectionStyle2";
import GallerySection from "../Section/GallerySection";
import AwardSectionStyle2 from "../Section/AwardSection/AwardSectionStyle2";
import { pageTitle } from "../../helpers/PageTitle";
const departmentData = [
	{
		title: "Billing Solutions",
		subTitle:
			"Comprehensive financial solutions that include medical billing, revenue cycle management (RCM), and provider credentialing to maximize profitability and streamline healthcare financial operations.",
		iconUrl: "/images/icons/calendar_white.svg",
		href: "/departments/department-details",
	},

	{
		title: "Clinical Support Services",
		subTitle:
			"Enhance patient care with specialized clinical services, including clinical data analysis, medication reviews, and support for evidence-based decision-making.",
		iconUrl: "/images/icons/calendar_white.svg",
		href: "/departments/department-details",
	},
	{
		title: "Healthcare IT Solutions",
		subTitle:
			"Empower healthcare providers with cutting-edge IT services, including EHR implementation, cybersecurity, and AI-driven solutions tailored for modern practices.",
		iconUrl: "/images/icons/calendar_white.svg",
		href: "/departments/department-details",
	},
	{
		title: "Business Development",
		subTitle:
			"Elevate your healthcare practice with strategic business development. We help expand services, optimize operations, and unlock growth opportunities to maximize your potential.",
		iconUrl: "/images/icons/calendar_white.svg",
		href: "/departments/department-details",
	},
	{
		title: "Healthcare Digital Marketing",
		subTitle:
			"Transform your practice with strategic digital marketing that helps you stand out in a competitive healthcare market. We provide tailored marketing campaigns to attract new patients, retain existing ones, and build a strong online presence.",
		iconUrl: "/images/icons/calendar_white.svg",
		href: "/departments/department-details",
	},
	{
		title: "Outsourcing Solutions",
		subTitle:
			"Scalable and reliable outsourcing services, such as virtual assistant, medical scribing, administrative support, and physician assistance, to reduce operational burdens and improve practice efficiency.",
		iconUrl: "/images/icons/calendar_white.svg",
		href: "/departments/department-details",
	},
];
const featureListData = [
	{
		title: "Maximize Your Revenue",
		subTitle:
			"We ensure faster claim approvals, reduced denials 20-25%, and optimized reimbursements by 30%, driving measurable growth for your practice within the first year of adoption.",
		iconUrl: "images/icons/professional.svg",
	},
	{
		title: "Stay Compliant, Avoid Penalties",
		subTitle:
			"MTS ensures compliance with healthcare regulations, helping prevent costly penalties and fines. With data breaches averaging $6.5 million per incident, our services safeguard your practice, minimizing risks and protecting sensitive patient information.",
		iconUrl: "images/icons/comprehensive.svg",
	},
	{
		title: "Save Time, Focus on Care ",
		subTitle:
			"MTS’s outsourcing and automation services help healthcare providers save up to 30% in administrative costs, allowing them to focus more on patient care.",
		iconUrl: "images/icons/patient.svg",
	},
	{
		title: "Boost Efficiency & Streamline Operations",
		subTitle:
			"Our state-of-the-art IT solutions and workflow automation tools improve operational efficiency by 25-30%, reducing delays and enhancing patient care delivery.",
		iconUrl: "images/icons/facilities.svg",
	},
];
const galleryData = [
	{ imgUrl: "/images/about/portfolio_2_lg.jpeg" },
	{ imgUrl: "/images/about/portfolio_3_lg.jpeg" },
	{ imgUrl: "/images/about/portfolio_1_lg.jpeg" },
	{ imgUrl: "/images/about/portfolio_4_lg.jpeg" },
	{ imgUrl: "/images/about/portfolio_5_lg.jpeg" },
];
const awardData = [
	{
		iconUrl: "/images/icons/award.svg",
		title: "Malcolm Baldrige National Quality Award",
	},
	{ iconUrl: "/images/icons/award.svg", title: "HIMSS Davies Award" },
	{
		iconUrl: "/images/icons/award.svg",
		title: "Healthgrades National’s Best Hospital",
	},
	{
		iconUrl: "/images/icons/award.svg",
		title: "Joint Commission Gold Seal of Approval",
	},
];
const funFactData = [
	{ number: "$300M+", title: "Value of Claims processed " },
	{ number: "98%", title: "Clean Claim Rates" },
	{ number: "99%", title: "Client Retention" },
	{ number: "8-12%", title: "Clinical Services Boost Revenue" },
	{ number: "30%", title: "Reduced Administrative Costs" },
];
const coreGoalsData = [
	{
		iconUrl: "/images/home_3/value_icon_1.svg",
		title: "AI-based EHR Integration",
		subTitle:
			"In the near future, MTS will simplify EHR systems, integrating telemedicine and AI-powered billing tools to create seamless healthcare workflows for providers.",
	},
	{
		iconUrl: "/images/home_3/value_icon_2.svg",
		title: "AI-Driven Administrative Efficiency",
		subTitle:
			"MTS is committed to developing AI solutions that will drastically reduce administrative burden, allowing healthcare professionals to focus on patient care without compromising accuracy.",
	},
	{
		iconUrl: "/images/home_3/value_icon_3.svg",
		title: "Optimized Healthcare Revenue",
		subTitle:
			"We will implement intelligent financial solutions that will automate operations, drive revenue optimization, and ensure stable, future-ready healthcare revenue cycles.",
	},
	{
		iconUrl: "/images/home_3/value_icon_1.svg",
		title: "Seamless Billing & Telemedicine",
		subTitle:
			"MTS is poised to launch transparent, automated billing systems, alongside enhanced telemedicine platforms, to provide healthcare providers and patients with a smooth, efficient experience.",
	},
	{
		iconUrl: "/images/home_3/value_icon_2.svg",
		title: "Next-Gen Medical Scribing",
		subTitle:
			"MTS will transform medical scribing with AI-powered tools, achieving hyper-efficient documentation that cuts costs, boosts productivity, and enhances accuracy.",
	},
	{
		iconUrl: "/images/home_3/value_icon_3.svg",
		title: "Integrity",
		subTitle:
			"We understand that seeking medical care can be a stressful and emotional experience, and we strive to create a welcoming and supportive environment that puts our patients at ease.",
	},
];
export default function About() {
	pageTitle("About");
	return (
		<>
			<BannerSectionStyle3
				bgUrl="/images/about/banner_bg.svg"
				imgUrl="/images/about/about-banner.png"
				title="Welcome to MedicoTech Solutions (MTS)"
				subTitle="Where Innovation Driving Revenue Growth!"
			/>

			<Section topMd={200} topLg={150} topXl={110}>
				<DepartmentSectionStyle2
					sectionTitle="Provides Our Best Services"
					sectionTitleUp="SERVICES"
					data={departmentData}
				/>
			</Section>
			<Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
				<FeaturesSectionStyle2
					sectionTitle="Why Choose MedicoTech Solutions?"
					imgUrl="images/about/why_choose_us.jpeg"
					data={featureListData}
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
					sectionTitle="Core Goals at MTS"
					data={coreGoalsData}
				/>
			</Section>
			<Section topMd={170} topLg={120} topXl={80}>
				<GallerySection
					sectionTitle="Our Facilities and <br />Latest Activities"
					sectionTitleUp="HAVE A LOOK AT"
					data={galleryData}
				/>
			</Section>
			<Section
				topMd={190}
				topLg={145}
				topXl={105}
				bottomMd={200}
				bottomLg={150}
				bottomXl={110}
			>
				<AwardSectionStyle2
					sectionTitle="Winning Awards and <br />Recognition"
					sectionTitleUp="AWARDS"
					sectionSubTitle="We have been recognized for our commitment to <br />excellence in healthcare."
					data={awardData}
				/>
			</Section>
			<Section className="cs_footer_margin_0">
				<BannerSectionStyle4
					bgUrl="/images/footer-top.jpeg"
					title="Your Health Deserves Top Priority!"
					subTitle="Connect with MedicoTech Solutions today and experience expert care tailored just for you!"
				/>
			</Section>
		</>
	);
}
