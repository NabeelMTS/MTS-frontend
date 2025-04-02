import React from "react";
import MenuWidget from "../Widget/MenuWidget";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import Industry from "../Widget/Industry";
import TextWidget from "../Widget/TextWidget";
import SocialWidget from "../Widget/SocialWidget";
import NewsletterStyle2 from "../Widget/NewsletterStyle2";
const menuDataOne = [
	{ title: "Healthcare Revenue Management", href: "/about" },
	{ title: "Clinical Support Services", href: "/about" },
	{ title: "Healthcare Technology and IT Solutions", href: "/departments" },
	{ title: "MedicoTech AI Marketing Solutions", href: "/doctors" },
	{ title: "Business Development & Strategic Growth", href: "/timetable" },
	{ title: "Healthcare Outsourcing Solutions", href: "/appointments" },
	{ title: "Consultation and Advisory Services", href: "/appointments" },
	{ title: "Training & Bootcamps", href: "/appointments" },
];
const companyData = [
	{ title: "About Us", href: "/about" },
	{ title: "FAQs", href: "/about" },
	{ title: "Partners", href: "/departments" },
	{ title: "Contact Us", href: "/doctors" },
	{ title: "Privacy Policy", href: "/timetable" },
	{ title: "Terms & Conditions", href: "/appointments" },
];
const industryData = [
	{ title: "Medical Services", href: "/about" },
	{ title: "Care Facilities", href: "/about" },
	{ title: "Healthcare Technology", href: "/departments" },
	{ title: "Research & Innovation", href: "/doctors" },
];

const specialtiesData = [
	{ title: "Supported Specialties", href: "/about" },
	{ title: "Platform Expertise", href: "/about" },
];
const menuDataTwo = [
	{ title: "eClinicalWorks", href: "/" },
	{ title: "AdvancedMD", href: "/blog" },
	{ title: "NextGen", href: "/" },
	{ title: "Athenahealth", href: "/" },
	{ title: "CareCloud", href: "/" },
	{ title: "Epic", href: "/" },
	{ title: "Cerner", href: "/" },
	{ title: "Kareo", href: "/" },
	{ title: "Amazing Charts", href: "/" },
	{ title: "Practice Fusion", href: "/" },
	{ title: "CureMD", href: "/" },
	{ title: "Optum", href: "/" },
	{ title: "TalkEHR", href: "/" },
];
const menuDataThree = [
	{ title: "Case Studies", href: "/" },
	{ title: "eBooks", href: "/blog" },
	{ title: "Infographics", href: "/blog" },
	{ title: "Whitepapers", href: "/blog" },
	{ title: "Blog", href: "/blog" },
	{ title: "Brochure", href: "/blog" },
	{ title: "Testimonials", href: "/blog" },
];

export default function FooterStyle2() {
	return (
		<>
			<footer className="cs_footer cs_style_2 cs_accent_bg cs_white_color">
				{/* <NewsletterStyle2
					title="Be Our <br />Subscribers"
					subTitle="To get the latest news about health <br /> from our experts"
				/> */}
				<div className="container">
					<div className="cs_footer_in">
						<div className="cs_footer_col">
							<div className="cs_footer_item">
								{/* <TextWidget
									logoUrl="/images/footer_logo_white.svg"
									text="Transcure is a healthcare IT services provider aimed at empowering hospitals, group practices, and independent practices."
								/> */}
								<h4>Contact</h4>
								<ContactInfoWidget />
								<h4 className="mt-3">Solutions</h4>
								<MenuWidget data={menuDataOne} />
							</div>
						</div>
						<div className="cs_footer_col">
							<div className="cs_footer_item">
								{/* <h4>Solutions</h4>
								<MenuWidget data={menuDataOne} /> */}

								<h4>Resources</h4>
								<MenuWidget data={menuDataThree} />
								<h4 className="mt-3">Industries</h4>
								<Industry data={industryData} />
								<h4 className="mt-3">Specialties </h4>
								<Industry data={specialtiesData} />
							</div>
						</div>
						<div className="cs_footer_col">
							<div className="cs_footer_item">
								<h4>EMRs / EHRs</h4>
								<MenuWidget data={menuDataTwo} />
							</div>
						</div>
						<div className="cs_footer_col">
							<div className="cs_footer_item">
								<h4> Company</h4>
								<MenuWidget data={companyData} />
							</div>
						</div>
					</div>
				</div>

				{/* <div className="cs_footer_bottom">
        <div className="container">
          <div className="cs_copyright">
            Copyright © 2024 Pro Health. All rights reserved.
          </div>
        </div>
      </div> */}
			</footer>
			<hr />
			<footer className="cs_footer cs_white_color">
				<div className="cs_footer_bottom cs_accent_bg">
					<div className="container">
						<div className="cs_footer_bottom_in">
							<SocialWidget />
							<div className="cs_copyright">
								Copyright © 2024 MedicoTech Solutions, LLC. All Rights Reserved.
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
