import Section from "../Section";
import BannerSectionStyle3 from "../Section/BannerSection/BannerSectionStyle3";
import BrandsSection from "../Section/BrandsSection";
import BrandsSectionStyle2 from "../Section/BrandsSection/BrandsSectionStyle2";
import { partnerData, certificatesData } from "../../helpers/CommonData";
import DepartmentSection from '../Section/DepartmentSection';
import { Link } from "react-router-dom";
import { pageTitle } from "../../helpers/PageTitle";

export default function MissionAndVision() {
	
	pageTitle("About");
	
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
	  
	return (
		<>
			<BannerSectionStyle3
				bgUrl="/images/pricing_plan/banner_bg.svg"
				imgUrl="/images/pricing_plan/banner_img.png"
				title="Collaborative Success Through Strategic Partnerships"
				subTitle=""
				btnText="Explore Partnerships"
				btnUrl="/contact"
			/>
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

			<Section topMd={185} topLg={150} topXl={110}>
        <DepartmentSection
          sectionTitle="Departments"
          bgUrl="images/home_1/department_bg.svg"
          data={departmentData}
        />
      </Section>
			<Section topMd={130} topLg={130} topXl={130}>
				<div className="container">
					<h3>Collaborative Success Through Strategic Partnerships</h3>
					<p>
						At <b style={{ color: "#274760" }}>MedicoTech Solutions (MTS)</b>,
						we specialize in forming meaningful collaborations that empower
						healthcare providers, laboratories, hospitals, and health-tech
						companies. Our partnerships are built to deliver cutting-edge
						solutions that streamline operations, enhance patient care, and give
						our clients a competitive edge in the fast-evolving healthcare
						landscape.
					</p>
					<h3> Explore Partnership Opportunities</h3>
					<p>
						We are actively seeking new partners who share our vision for
						advancing healthcare through technology. Whether you're a healthcare
						provider, technology innovator, or research organization, a
						partnership with MedicoTech Solutions can help unlock new
						opportunities for growth, efficiency, and success.
					</p>
					<h5>
						Interested in exploring partnership opportunities with us? Reach out
						to our team at:
						<Link
							to="mailto:partner@medicotechsolutions.com"
							style={{ color: "#307bc4" }}
						>
							{" "}
							partner@medicotechsolutions.com
						</Link>
					</h5>
					<h5>Notable Collaborations and Industry Certifications</h5>
					<p>
						Our partnerships with top-tier healthcare organizations and
						technology leaders enable us to remain at the forefront of
						healthcare innovation. Here are some key collaborators who help us
						deliver transformative healthcare solutions:
					</p>
					<ul className="ms-4">
						<li>
							<p>
								<span style={{ color: "#274760" }}>
									<b>CureMD: </b>
								</span>
								Providing industry-leading EHR, billing, and revenue cycle
								management solutions.{" "}
							</p>
						</li>
						<li>
							<p>
								<span style={{ color: "#274760" }}>
									<b>NextGen Healthcare: </b>
								</span>
								Offering integrated healthcare technology platforms.
							</p>
						</li>
						<li>
							<p>
								<span style={{ color: "#274760" }}>
									<b>Kareo: </b>
								</span>
								Supporting healthcare management through cloud-based solutions.
							</p>
						</li>
						<li>
							<p>
								<span style={{ color: "#274760" }}>
									<b>EHIMSS: </b>
								</span>
								Driving improvements in health information systems and
								technology.
							</p>
						</li>
						<li>
							<p>
								<span style={{ color: "#274760" }}>
									<b>Quest Diagnostics: </b>
								</span>
								Enhancing diagnostic testing and services.
							</p>
						</li>
						<li>
							<p>
								<span style={{ color: "#274760" }}>
									<b>ZSCure: </b>
								</span>
								Leading advancements in AI-powered healthcare automation.
							</p>
						</li>
						<li>
							<p>
								<span style={{ color: "#274760" }}>
									<b>HybridMedics: </b>
								</span>
								Innovating in telehealth and virtual care services.
							</p>
						</li>
						<li>
							<p>
								<span style={{ color: "#274760" }}>
									<b>Xaviers: </b>
								</span>
								Pioneering medical research and clinical data analytics.
							</p>
						</li>
					</ul>
					<h3>Our Strategic Alliances Include:</h3>
					<ul className="ms-4">
						<li>
							<p>
								<span style={{ color: "#274760" }}>
									<b>Microsoft: </b>
								</span>
								Enabling scalable AI and cloud computing solutions.{" "}
							</p>
						</li>
						<li>
							<p>
								<span style={{ color: "#274760" }}>
									<b>NCardinal Health: </b>
								</span>
								Integrating advanced medical products and technologies.
							</p>
						</li>
						<li>
							<p>
								<span style={{ color: "#274760" }}>
									<b>Care360: </b>
								</span>
								Streamlining electronic health records and practice management.
							</p>
						</li>
						<li>
							<p>
								<span style={{ color: "#274760" }}>
									<b>MGMA: </b>
								</span>
								Advancing the operational efficiency of medical practices.
							</p>
						</li>
						<li>
							<p>
								<span style={{ color: "#274760" }}>
									<b>Surescripts: </b>
								</span>
								Providing secure health data exchange solutions.
							</p>
						</li>
						<li>
							<p>
								<span style={{ color: "#274760" }}>
									<b>Cisco: </b>
								</span>
								Supporting network security and IT infrastructure.
							</p>
						</li>
						<li>
							<p>
								<span style={{ color: "#274760" }}>
									<b>Wolters Kluwer: </b>
								</span>
								Delivering expertise in medical content, compliance, and
								technology.
							</p>
						</li>
						<li>
							<p>
								<span style={{ color: "#274760" }}>
									<b>Zynx Health: </b>
								</span>
								Improving clinical decision support and healthcare pathways.
							</p>
						</li>
					</ul>
					<h3>Transforming Healthcare Together</h3>
					<p>
						Through these partnerships,{" "}
						<b style={{ color: "#274760" }}>MedicoTech Solutions (MTS)</b> is
						able to drive innovation, improve patient outcomes, and deliver
						operational excellence. We believe in the power of collaboration to
						transform healthcare delivery and create sustainable value for
						providers, patients, and the entire healthcare ecosystem.
					</p>
				</div>
			</Section>
		</>
	);
}
