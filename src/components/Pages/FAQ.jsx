import React from "react";
import { pageTitle } from "../../helpers/PageTitle";
import Section from "../Section";
import FaqSectionStyle4 from "../Section/FaqSection/FaqSectionStyle4";

const faqData = [
	{
	  title: 'What services does MedicoTech Solutions provide?',
	  content: 'MedicoTech Solutions offers a wide range of healthcare services, including medical billing, clinical services, digital health marketing, business growth strategies, and comprehensive training programs to help businesses improve their operations.',
	},
	{
	  title: 'How does MedicoTech Solutions drive future growth and revenue?',
	  content: 'By implementing innovative healthcare technology solutions, MedicoTech Solutions enhances operational efficiency and revenue generation through streamlined processes, improved patient care, and strategic business insights.',
	},
	{
	  title: 'Do you provide training opportunities for fresh graduates or interns?',
	  content: 'Yes, we offer specialized training, bootcamps, and paid internships designed to help students and freshers build skills in healthcare technology, business analysis, medical billing, and more, preparing them for a successful career in healthcare.',
	},
	{
	  title: 'What industries does MedicoTech Solutions serve?',
	  content: 'We provide tailored solutions to various sectors including healthcare providers, clinical practices, pharmacy billing, and healthcare technology firms, improving service delivery, efficiency, and business performance.',
	},
	{
	  title: 'How can working with MedicoTech Solutions improve my business revenue?',
	  content: 'Through our revenue cycle management (RCM) services and business transformation strategies, we help businesses optimize billing processes, reduce overhead costs, and increase patient satisfaction, ultimately leading to higher revenue and growth.',
	},
  ];
  

export default function PricingPlan() {
	pageTitle("Pricing Plan");
	return (
		<>
			<Section topMd={185} topLg={145} topXl={105}>
				<FaqSectionStyle4
					sectionTitle="Frequently Asked <br />Questions"
					data={faqData}
					faqImgUrl="/images/home_4/faq_img.jpeg"
					spiningImgUrl="/images/home_1/about_mini.svg"
				/>
			</Section>
			{/* <Section
				topMd={130}
				topLg={130}
				topXl={130}
				bottomMd={50}
				bottomLg={50}
				bottomXl={50}
				className="cs_gray_bg_1"
			>
				<FaqSectionStyle4
					sectionTitle="Frequently Asked Questions (FAQs) – MedicoTech Solutions LLC"
					data={faqData}
					faqImgUrl="/images/home_4/faq_img.jpeg"
					spiningImgUrl="/images/home_1/about_mini.svg"
				/>
			</Section> */}
		</>
	);
}
