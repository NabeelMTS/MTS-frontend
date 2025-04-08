import React from "react";
import BannerSectionStyle5 from "../Section/BannerSection/BannerSectionStyle5";
import BannerSectionStyle6 from "../Section/BannerSection/BannerSectionStyle6";
import DepartmentSection from "../Section/DepartmentSection";
import FunFactSection from "../Section/FunFactSection";
import Cta from "../Cta";
import BrandsSectionStyle2 from "../Section/BrandsSection/BrandsSectionStyle2";
import BannerSectionStyle8 from "../Section/BannerSection/BannerSectionStyle8";
import { certificatesData } from "../../helpers/CommonData";

import Section from "../Section";
import { pageTitle } from "../../helpers/PageTitle";
const funFactData = [
	{ number: "25+", title: "Specialties" },
	{ number: "120+", title: "Healthcare Providers" },
	{ number: "35%", title: "Faster Reimbursements" },
	{ number: "95%", title: "Client Satisfaction" },
	{ number: "100%", title: "HIPAA Compliance" },
	{ number: "45-60%", title: "Greater Operational Efficiency" },
];
const departmentData = [
	{
		title: "Dermatology",
		iconUrl: "images/home_1/department_icon_1.svg",
		href: "/departments/department-details",
	},
	{
		title: "Oncology",
		iconUrl: "images/home_1/department_icon_2.svg",
		href: "/departments/department-details",
	},
	{
		title: "Nephrology",
		iconUrl: "images/home_1/department_icon_3.svg",
		href: "/departments/department-details",
	},
	{
		title: "Cardiology",
		iconUrl: "images/home_1/department_icon_4.svg",
		href: "/departments/department-details",
	},
	{
		title: "Pediatrics",
		iconUrl: "images/home_1/department_icon_5.svg",
		href: "/departments/department-details",
	},
	{
		title: "Orthopedics",
		iconUrl: "images/home_1/department_icon_6.svg",
		href: "/departments/department-details",
	},
	{
		title: "Pulmonology",
		iconUrl: "images/home_1/department_icon_1.svg",
		href: "/departments/department-details",
	},
	{
		title: "Obs & Gyne",
		iconUrl: "images/home_1/department_icon_2.svg",
		href: "/departments/department-details",
	},
	{
		title: "Neurology",
		iconUrl: "images/home_1/department_icon_3.svg",
		href: "/departments/department-details",
	},
	{
		title: "Endocrinology",
		iconUrl: "images/home_1/department_icon_4.svg",
		href: "/departments/department-details",
	},
	{
		title: "Radiology",
		iconUrl: "images/home_1/department_icon_5.svg",
		href: "/departments/department-details",
	},
	{
		title: "Urology",
		iconUrl: "images/home_1/department_icon_6.svg",
		href: "/departments/department-details",
	},
	{
		title: "Pain Management",
		iconUrl: "images/home_1/department_icon_1.svg",
		href: "/departments/department-details",
	},
	{
		title: "Internal Medicine",
		iconUrl: "images/home_1/department_icon_2.svg",
		href: "/departments/department-details",
	},
	{
		title: "Physical Therapy",
		iconUrl: "images/home_1/department_icon_3.svg",
		href: "/departments/department-details",
	},
];

export default function MedicalBilling() {
	pageTitle("Doctors");
	return (
		<>
			<BannerSectionStyle5
				bgUrl="/images/doctors/banner_bg.svg"
				imgUrl="/images/medical-billing/banner_img.png"
				title="Transform Your Practice’s Financial Success with Expert Billing Solutions"
				subTitle=""
			/>
			<div className="container py-5">
				<div className="row">
					<div className="col-md-6">
						<div className="d-flex justify-content-center cs_banner_img">
							<img
								src="/images/medical-billing/medical-billing.png"
								alt="Banner"
								className="cs_main_banner_img"
							/>
						</div>
					</div>
					<div className="col-md-6 d-flex flex-column justify-content-center">
						<h3>Medical Billing Services Personalized for You</h3>
						<p>
							MedicoTech Solutions (MTS) offers comprehensive Healthcare IT
							solutions to healthcare providers, focusing on efficiency and
							growth. In Billing Solutions, our services are built around three
							key pillars: Medical Billing & Coding, Revenue Cycle Management
							(RCM), and Provider Credentialing.
						</p>
					</div>
				</div>
			</div>
			<Section
				className="cs_bg_filed"
				style={{ backgroundImage: "url(/images/home_3/testimonial_bg.svg)" }}
			>
				<BannerSectionStyle8
					imgUrl="/images/medical-billing/banner_img_3.png"
					bgUrl="/images/home_3/banner_bg.svg"
					title="We turn claims into results, with over a decade of proven success driving your revenue."
					subTitle=""
				/>
			</Section>

			<div className="container">
				<Section
					topMd={190}
					topLg={145}
					topXl={105}
					bottomMd={200}
					bottomLg={150}
					bottomXl={110}>
					<Cta
						title="Discover How Our Solutions Can Maximize Your Practice’s
					Revenue"
						bgUrl="/images/cta_bg.jpeg"
						btnUrl="/appointments"
						btnText="Start Now"
					/>
				</Section>
				
				<h3>Medical Billing Services</h3>
				<p>
					Healthcare providers often struggle with the complexities of medical
					billing, coding, and revenue cycle management.{" "}
				</p>
				<p>
					MedicoTech Solutions (MTS) offers comprehensive medical billing
					services.{" "}
				</p>
				<p>
					Our medical billing service customizes solutions to improve accuracy,
					reduce claim denials, and increase reimbursements—so your practice
					gets paid faster and more consistently.
				</p>
				<p>
					Our customized billing solutions are designed to alleviate
					administrative burdens, streamline your billing processes, and improve
					cash flow.{" "}
				</p>
				<p>
					With MTS handling your medical billing, you can focus on what truly
					matters—delivering high-quality patient care.{" "}
				</p>
				<p>
					Enjoy seamless, hassle-free service, and let us optimize your billing
					operations.
				</p>
			</div>
			<Section>
				<FunFactSection
					bgUrl="images/about/fun_fact_bg.jpeg"
					data={funFactData}
				/>
			</Section>
			<div className="container py-5">
				<div className="row">
					<div className="col-md-6 d-flex flex-column justify-content-center">
						<h3>AI-Powered Medical Billing Services</h3>
						<p>
							Medical billing involves submitting, tracking, and managing
							insurance claims while ensuring compliance with industry
							regulations.{" "}
						</p>
						<p>
							With AI-driven technology, MedicoTech Solutions (MTS) enhances
							claim processing speed and maximizes profit from various US
							insurance companies.{" "}
						</p>
						<p>Our team specializes in:</p>
						<ul>
							<li>
								AI-Enhanced Claim Submissions to minimize denials by automating
								error detection.
							</li>
							<li>
								Smart Patient Billing Management, providing transparency and
								seamless communication.
							</li>
							<li>
								AI-Based Revenue Cycle Optimization, reducing turnaround time
								for payments.
							</li>
							<li>
								Custom AI Solutions tailored to your practice’s needs for
								greater billing accuracy.
							</li>
							<li>
								AI-Backed Personalized Attention to address unique challenges
								and optimize results.
							</li>
						</ul>
					</div>
					<div className="col-md-6">
						<div className="d-flex justify-content-center cs_banner_img">
							<img
								src="/images/medical-billing/ai-powered.png"
								alt="Banner"
								className="cs_main_banner_img"
							/>
						</div>
					</div>
				</div>
				<h3>Departments & Expertise </h3>
				<p>We provide dedicated departments for:</p>
				<p>
					<span style={{ color: "#274760", fontWeight: "bold" }}>
						{" "}
						Specialized Coding:
					</span>{" "}
					Tailored coding solutions for a wide range of specialties, including
					cardiology, neurology, oncology, pediatrics, and more.
				</p>
				<p>
					<span style={{ color: "#274760", fontWeight: "bold" }}>
						{" "}
						Clean Claim Submissions:
					</span>{" "}
					Proactive strategies to ensure error-free and timely claim
					submissions.
				</p>
				<p>
					<span style={{ color: "#274760", fontWeight: "bold" }}>
						Medical Auditing Services:
					</span>{" "}
					Our certified professionals offer free audits to identify billing
					discrepancies, helping you save time and boost revenue.
				</p>
			</div>
			<div className="container">
				<h3>Free Medical Billing Audit toMaximize Revenue</h3>
				<p>
					MedicoTech Solutions (MTS) offers a free, comprehensive medical
					billing audit to help practices identify inefficiencies, reduce
					errors, and improve revenue. Our audit uncovers hidden billing issues,
					optimizing your financial performance.
				</p>
				<h3>Why Choose a Medical Billing Audit?</h3>
				<p>
					MTS’s comprehensive audit provides actionable insights to optimize
					your billing process, improve reimbursements, and strengthen financial
					outcomes:
				</p>
				<ul>
					<li style={{ color: "#274760", fontWeight: "bold" }}>
						Revenue Optimization: Maximize reimbursements, minimize errors
					</li>
					<li style={{ color: "#274760", fontWeight: "bold" }}>
						AI Assurance: Accurate claim review with AI
					</li>
					<li style={{ color: "#274760", fontWeight: "bold" }}>
						Claim Prevention: Eliminate duplicate/inaccurate claims
					</li>
					<li style={{ color: "#274760", fontWeight: "bold" }}>
						Accurate Coding: Ensure correct coding
					</li>
					<li style={{ color: "#274760", fontWeight: "bold" }}>
						Claims Conversion: Improve insurance claim payments
					</li>
					<li style={{ color: "#274760", fontWeight: "bold" }}>
						Denial Analysis: Identify key causes of rejections
					</li>
					<li style={{ color: "#274760", fontWeight: "bold" }}>
						Time-Saving: Streamline processes, reduce resubmissions
					</li>
					<li style={{ color: "#274760", fontWeight: "bold" }}>
						Staff Review: Address inefficiencies and negligence
					</li>
				</ul>

				<p>
					<b>CTA:</b> Get Your Free Medical Billing Audit Today with MTS!
				</p>
				<div className="d-flex justify-content-center cs_banner_img">
					<img
						src="/images/medical-billing/why-choose.png"
						alt="Banner"
						className="cs_main_banner_img"
					/>
				</div>
			</div>
			<div style={containerStyle}>
				<h4 className="d-flex justify-content-center">
					Key Stats of Our Medical Billing Services{" "}
				</h4>
				<div style={scrollContainerStyle}>
					<table style={tableStyle}>
						<thead>
							<tr style={headerRowStyle}>
								{headers.map((header, index) => (
									<th key={index} style={cellStyle}>
										{header}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							<tr>
								{data.map((item, index) => (
									<td key={index} style={cellStyle}>
										{item}
									</td>
								))}
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<Section
				topMd={200}
				topLg={150}
				topXl={110}
				bottomMd={200}
				bottomLg={150}
				bottomXl={110}
			>
				<h4 className="d-flex justify-content-center">
					MTS Certified with Industry-Leading Standards{" "}
				</h4>
				<BrandsSectionStyle2 data={certificatesData} />
			</Section>
			<Section topMd={130} topLg={130} topXl={130}>
				<div className="container">
					<h3>Who Can Benefit From Our Services?</h3>
					<p>
						Our solutions are designed to serve a diverse range of healthcare
						providers,including:
					</p>
					<ul>
						<li>Independent physicians and practice groups</li>
						<li>Small and large medical practices</li>
						<li>Medical clinics and urgent care centers</li>
						<li>Freestanding emergency centers and hospitals</li>
						<li>In-home health services and laboratories</li>
						<li>Non-emergency medical transportation providers</li>
						<li>Ambulatory surgical centers</li>
						<li>Telemedicine providers</li>
						<li>Practicing nurses and nurse practitioners</li>
						<li>Digital health providers and health tech companies</li>
						<li>Medical billing and coding firms</li>
						<li>Behavioral health providers</li>
					</ul>
					<p>
						<b>CTA:</b> No matter your practice size or specialty, we’ve got you
						covered—Partner with MTS Now.
					</p>
				</div>
			</Section>
			<Section topMd={185} topLg={150} topXl={110}>
				<DepartmentSection
					sectionTitle="Expert Billing Services forMultiple Specialties"
					bgUrl="images/home_1/department_bg.svg"
					data={departmentData}
				/>
			</Section>
			<Section topMd={130} topLg={130} topXl={130}>
				<div className="container">
					<h3>Exclusive Offer for New Practices</h3>
					<p>Starting a new practice? </p>
					<p>
						MedicoTech Solutions (MTS) offers unmatched support to help you hit
						the ground running.
					</p>
					<p>
						With our limited-time exclusive offer, you’ll get everything you
						need to establish a strong foundation—and no competitor comes close
						to these benefits.
					</p>
					<p>
						<b>What We Offer You:</b>
					</p>
					<ul>
						<li>
							<b>1 Month of Free Healthcare Digital Marketing</b> powered by AI
							to enhance your online presence and attract patients instantly.
						</li>
						<li>
							<b> 1 Month of Free Credentialing Services</b> to help you build
							your network and improve practice credibility.
						</li>
						<li>
							<b> 1 Month of Free Billing Audits</b> to identify and fix any
							issues, improving cash flow right from the start.
						</li>
					</ul>

					<p>
						<b> CTA:</b> Take advantage of our exclusive offer today—Talk to our
						experts and accelerate your practice growth.
					</p>

					<div className="cs_banner_img">
						<img
							src="/images/medical-billing/offer.png"
							alt="Banner"
							className="cs_main_banner_img"
						/>
					</div>
					<h3>Why ChooseMedicoTech Solutions (MTS)?</h3>
					<p>
						With over 15 years of expertise, MTS offers the most reliable and
						cost-effective solutions to simplify your billing and coding process
						with the help of AI. We ensure:
					</p>
					<ul>
						<li>
							<span style={{ color: "#274760", fontWeight: "bold" }}>
								Maximized Revenue:{""}
							</span>
							Achieve higher reimbursements with optimized billing processes.
						</li>

						<li>
							<span style={{ color: "#274760", fontWeight: "bold" }}>
								Increased Claim Approval Rates:{""}
							</span>
							Improve claim submission accuracy and speed.
						</li>

						<li>
							<span style={{ color: "#274760", fontWeight: "bold" }}>
								Error & Denial Reduction:{""}
							</span>
							Utilize AI to minimize billing errors and denials.
						</li>

						<li>
							<span style={{ color: "#274760", fontWeight: "bold" }}>
								Tailored Client Support:{""}
							</span>
							Receive customized attention for better results.
						</li>

						<li>
							<span style={{ color: "#274760", fontWeight: "bold" }}>
								Expert RCM Guidance:{""}
							</span>
							Get assistance with onboarding, managing complex needs, and
							staying compliant.
						</li>

						<li>
							<span style={{ color: "#274760", fontWeight: "bold" }}>
								Nationwide Coverage:{""}
							</span>
							Serving healthcare providers across all 50 states.
						</li>

						<li>
							<span style={{ color: "#274760", fontWeight: "bold" }}>
								Full Transparency & Control:{""}
							</span>
							Maintain complete visibility of your billing and revenue cycle.
						</li>

						<li>
							<span style={{ color: "#274760", fontWeight: "bold" }}>
								Industry-Leading Expertise:{""}
							</span>
							Trust our certified team to stay ahead of industry trends and
							capture maximum reimbursements.
						</li>

						<li>
							<span style={{ color: "#274760", fontWeight: "bold" }}>
								Reduced Operational Costs:{""}
							</span>
							Efficient billing processes that save your practice money.
						</li>

						<li>
							<span style={{ color: "#274760", fontWeight: "bold" }}>
								Customized Solutions:{""}
							</span>
							Billing strategies tailored to meet your specific needs.
						</li>

						<li>
							<span style={{ color: "#274760", fontWeight: "bold" }}>
								Time Efficiency:{""}
							</span>
							Save time with our streamlined services, allowing you to focus on
							patient care.
						</li>
					</ul>
					<div className="cs_banner_img">
						<img
							src="/images/medical-billing/why-choose-us.png"
							alt="Banner"
							className="cs_main_banner_img"
						/>
					</div>
				</div>
			</Section>
			<Section className="cs_footer_margin_0">
				<BannerSectionStyle6
					imgUrl="/images/medical-billing/banner_img_2.png"
					title="Don’t Let Your Health Take a Backseat!"
					subTitle="Get Started Today."
				/>
			</Section>
		</>
	);
}
const headers = [
	"Performance Indicators",
	"First Pass Clean Claims Rate",
	"Collection Ratio",
	"Certified Medical Billers & Coders",
	"Specialties Covered",
	"Accounts Receivable Days",
	"Turnaround Time (TAT)",
	"Customer Retention",
	"Claims Processed",
	"Revenue Improvement",
	"A/R Reduction",
];

const data = [
	"Our Achievements",
	"96%",
	"94%",
	"300+",
	"25+",
	"26",
	"48 Hours",
	"98%",
	"1.2-1.4M",
	"8%-10%",
	"30-35%",
];
const containerStyle = {
	width: "100%",
	maxWidth: "1550px",
	margin: "0 auto",
	padding: "10px",
};

const scrollContainerStyle = {
	overflowX: "auto", // Enables horizontal scrolling
};

const tableStyle = {
	width: "1500px", // Ensures a fixed table width
	borderCollapse: "collapse",
	tableLayout: "fixed", // Keeps column widths equal
};

const headerRowStyle = {
	backgroundColor: "#f4f4f4",
};

const cellStyle = {
	border: "1px solid #ddd",
	padding: "10px",
	textAlign: "center",
	width: "12%", // Ensures columns have equal width
	wordWrap: "break-word", // Allows text to break onto the next line
	whiteSpace: "normal", // Ensures multi-line text wraps properly
	overflow: "hidden", // Prevents text overflow
};
