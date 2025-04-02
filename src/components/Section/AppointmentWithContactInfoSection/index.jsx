import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../../../components/ContactForm";
const contactInfo = [
	{ title: "Phone", subTitle: "+1 (737) 283-1792" },
	{ title: "Email Us", subTitle: "contact@medicotechsolutions.com" },
	{
		title: "Our Location",
		subTitle: "5900 Balcones Drive, Suite 18270 Austin, TX 78731",
	},
];

export default function AppointmentWithContactInfoSection() {
	return (
		<div className="container">
			<h3> Get in Touch with MedicoTech Solutions LLC</h3>
			<p>
				{" "}
				We’d love to hear from you! Whether you’re looking to explore career
				opportunities, inquire about our services, or need assistance, our team
				is here to help. Get in touch with us today, and let’s work together to
				shape the future of healthcare.
			</p>
			<div className="row">
				<div className="col-lg-7">
					<h2 className="cs_fs_40 cs_medium mb-0">Send Us a Message</h2>
					<p>
						Have questions or need more information? Fill out the form below,
						and we’ll get back to you as soon as possible.
					</p>
					<div className="cs_height_42 cs_height_xl_25" />
					<ContactForm />
				</div>
				<div className="col-lg-4 offset-lg-1">
					<div className="cs_height_lg_100" />
					<h2 className="cs_fs_40 cs_medium mb-0">Contact Info</h2>
					<div className="cs_height_60 cs_height_xl_40" />
					<img
						src="/images/contact/contact.jpg"
						alt="Appointment"
						className="cs_radius_25 w-100"
					/>
					<div className="cs_height_100 cs_height_xl_60" />
					<ul className="cs_contact_info cs_style_1 cs_mp0">
						{contactInfo.map((item, index) => (
							<li key={index}>
								<h3 className="cs_fs_24 cs_semibold mb-0">{item.title}</h3>
								<p className="mb-0 cs_heading_color">{item.subTitle}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
			<h3 className="mt-5">Business Hours: </h3>
			<ul className="ms-4">
				<li>
					<p>
						<span style={{ color: "#274760" }}>
							<b>Monday to Friday: </b>
						</span>
						9:00 AM - 6:00 PM{" "}
					</p>
				</li>
				<li>
					<p>
						<span style={{ color: "#274760" }}>
							<b>Saturday: </b>
						</span>
						Closed
					</p>
				</li>
				<li>
					<p>
						<span style={{ color: "#274760" }}>
							<b>Sunday: </b>
						</span>
						Closed
					</p>
				</li>
			</ul>
			<h3> Why Choose MedicoTech Solutions?</h3>
			<p>
				We provide healthcare organizations in both the USA and Pakistan with
				innovative, tech-driven solutions to improve patient care, streamline
				processes, and reduce costs. From medical billing to AI-driven
				healthcare IT services, we’re committed to making a positive impact on
				the healthcare industry.
			</p>
			<h3> Follow Us on Social Media</h3>
			<p>
				Stay connected with us for the latest updates, career opportunities, and
				insights into the future of healthcare technology.
			</p>
			<h5>
				<Link
					to="mailto:partner@medicotechsolutions.com"
					style={{ color: "#307bc4" }}
				>
					{" "}
					LinkedIn
				</Link>
			</h5>
			<h5>
				<Link
					to="mailto:partner@medicotechsolutions.com"
					style={{ color: "#307bc4" }}
				>
					{" "}
					Facebook
				</Link>
			</h5>{" "}
			<h5>
				<Link
					to="mailto:partner@medicotechsolutions.com"
					style={{ color: "#307bc4" }}
				>
					{" "}
					Twitter
				</Link>
			</h5>{" "}
			<h5>
				<Link
					to="mailto:partner@medicotechsolutions.com"
					style={{ color: "#307bc4" }}
				>
					{" "}
					<h5>
						<Link
							to="mailto:partner@medicotechsolutions.com"
							style={{ color: "#307bc4" }}
						>
							{" "}
							Instagram
						</Link>
					</h5>{" "}
				</Link>
			</h5>
		</div>
	);
}
