import React from "react";
import BannerSectionStyle5 from "../Section/BannerSection/BannerSectionStyle5";
import Section from "../Section";
import TeamSectionStyle4 from "../Section/TeamSection/TeamSectionStyle4";
import DepartmentSectionStyle3 from "../Section/DepartmentSection/DepartmentSectionStyle3";
import BannerSectionStyle6 from "../Section/BannerSection/BannerSectionStyle6";
import { pageTitle } from "../../helpers/PageTitle";
const teamData = [
	{
		imgUrl: "/images/home_2/services/1.jpg",
		name: "Medical Billing & Coding",
		designation:
			"Accurate, expert coding to ensure clean claims and minimize denials.",
	},
	{
		imgUrl: "/images/home_2/services/2.jpg",
		name: "Revenue Cycle Management",
		designation:
			"Streamlined, data-driven solutions to optimize your revenue cycle and reduce financial losses.",
	},
	{
		imgUrl: "/images/home_2/services/3.jpg",
		name: "IT Consulting",
		designation:
			"Customized healthcare IT solutions to improve operational efficiency and data security.",
	},
	{
		imgUrl: "/images/home_2/services/4.jpg",
		name: "Clinical & Pharmacy Services",
		designation:
			"Comprehensive support to enhance treatment outcomes and streamline medication management.",
	},
	{
		imgUrl: "/images/home_2/services/5.jpg",
		name: "Digital Health Solutions",
		designation:
			"Innovative technologies to elevate patient care and improve health outcomes.",
	},
	{
		imgUrl: "/images/home_2/services/6.jpg",
		name: "Outsourcing Services",
		designation:
			"Cost-effective BPO and staffing solutions tailored for healthcare practices.",
	},
];
const departmentData = [
	{
		iconUrl: "images/departments/icon_1.svg",
		title: "Emergency Department",
		subTitle:
			"This department provides immediate medical care to patients with acute illnesses or injuries that require immediate attention.",
		href: "/departments/department-details",
	},
	{
		iconUrl: "images/departments/icon_1.svg",
		title: "Cardiology Department",
		subTitle:
			"This department provides immediate medical care to patients with acute illnesses or injuries that require immediate attention.",
		href: "/departments/department-details",
	},
	{
		iconUrl: "images/departments/icon_1.svg",
		title: "Pediatric Department",
		subTitle:
			"This department provides immediate medical care to patients with acute illnesses or injuries that require immediate attention.",
		href: "/departments/department-details",
	},
	{
		iconUrl: "images/departments/icon_1.svg",
		title: "Obstetrics and Gynecology",
		subTitle:
			"This department provides immediate medical care to patients with acute illnesses or injuries that require immediate attention.",
		href: "/departments/department-details",
	},
	{
		iconUrl: "images/departments/icon_1.svg",
		title: "Psychiatry Department",
		subTitle:
			"This department provides immediate medical care to patients with acute illnesses or injuries that require immediate attention.",
		href: "/departments/department-details",
	},
	{
		iconUrl: "images/departments/icon_1.svg",
		title: "Neurology Department",
		subTitle:
			"This department provides immediate medical care to patients with acute illnesses or injuries that require immediate attention.",
		href: "/departments/department-details",
	},
	{
		iconUrl: "images/departments/icon_1.svg",
		title: "Occupational Therapy Department",
		subTitle:
			"This department provides immediate medical care to patients with acute illnesses or injuries that require immediate attention.",
		href: "/departments/department-details",
	},
	{
		iconUrl: "images/departments/icon_1.svg",
		title: "Physical Therapy Department",
		subTitle:
			"This department provides immediate medical care to patients with acute illnesses or injuries that require immediate attention.",
		href: "/departments/department-details",
	},
];

export default function Departments() {
	pageTitle("Departments");
	return (
		<>
			<BannerSectionStyle5
				bgUrl="/images/departments/banner_bg.svg"
				imgUrl="/images/home_2/services-banner.png"
				title="Get to Know <br>ProHealth Departments"
				subTitle="At ProHealth, we offer a wide range of medical and healthcare services that are designed to meet your individual needs and help you achieve optimal health."
			/>
			<Section topMd={195} topLg={145} topXl={105}>
				<TeamSectionStyle4
					sectionTitle="Core Services"
					sectionTitleUp="OUR"
					data={teamData}
				/>
			</Section>
		</>
	);
}
